export type BitrixLeadInput = {
  name: string
  email: string
  company: string
  phone: string
  country: string
  service: string
  message: string
}

type BitrixLeadAddResponse = {
  result?: number
  error?: string
  error_description?: string
}

function getBitrixLeadAddUrl(): string {
  const webhookUrl = process.env.BITRIX24_WEBHOOK_URL?.trim()

  if (!webhookUrl) {
    throw new Error("BITRIX24_WEBHOOK_URL is not configured")
  }

  return `${webhookUrl.replace(/\/$/, "")}/crm.lead.add.json`
}

function buildBitrixComments(service: string, message: string): string {
  const lines: string[] = []

  if (service) {
    lines.push(`Service interested in: ${service}`)
  }

  if (message) {
    if (lines.length > 0) lines.push("")
    lines.push("Message:", message)
  }

  return lines.join("\n") || "—"
}

export async function addBitrixLead(input: BitrixLeadInput): Promise<number> {
  const comments = buildBitrixComments(input.service, input.message)

  const response = await fetch(getBitrixLeadAddUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        TITLE: `Website inquiry — ${input.company}`,
        NAME: input.name,
        COMPANY_TITLE: input.company,
        EMAIL: [{ VALUE: input.email, VALUE_TYPE: "WORK" }],
        ...(input.phone
          ? { PHONE: [{ VALUE: input.phone, VALUE_TYPE: "WORK" }] }
          : {}),
        ...(input.country ? { ADDRESS_COUNTRY: input.country } : {}),
        COMMENTS: comments,
        SOURCE_ID: "WEB",
      },
    }),
  })

  const data = (await response.json().catch(() => ({}))) as BitrixLeadAddResponse

  if (!response.ok || data.error) {
    throw new Error(
      data.error_description || data.error || "Bitrix24 lead creation failed"
    )
  }

  if (typeof data.result !== "number") {
    throw new Error("Bitrix24 lead creation returned an unexpected response")
  }

  return data.result
}
