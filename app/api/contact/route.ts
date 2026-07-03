import { NextResponse } from "next/server"
import { addBitrixLead } from "@/lib/bitrix24-crm"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim()
    const company = String(body.company ?? "").trim()
    const phone = String(body.phone ?? "").trim()
    const country = String(body.country ?? "").trim()
    const service = String(body.service ?? "").trim()
    const message = String(body.message ?? "").trim()

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Full name, business email, and company name are required." },
        { status: 400 }
      )
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    await addBitrixLead({
      name,
      email,
      company,
      phone,
      country,
      service,
      message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error:
          "We could not send your message right now. Please try again or email info@benosupport.com directly.",
      },
      { status: 500 }
    )
  }
}
