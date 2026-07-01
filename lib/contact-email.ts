import nodemailer from "nodemailer"

export type ContactFormPayload = {
  name: string
  email: string
  company: string
  phone: string
  country: string
  service: string
  message: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function getTransporter() {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const port = Number(process.env.SMTP_PORT || 587)

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured")
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

export async function sendContactEmail(data: ContactFormPayload): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL || "info@benosupport.com"
  const from = process.env.SMTP_FROM || process.env.SMTP_USER

  if (!from) {
    throw new Error("SMTP_FROM or SMTP_USER is required")
  }

  const transporter = getTransporter()

  const text = [
    "New contact form submission — Beno Support website",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country}`,
    `Service interested in: ${data.service}`,
    "",
    "Message:",
    data.message,
  ].join("\n")

  const html = `
    <h2>New Contact Form Submission</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(data.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(data.company)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>
      <tr><td><strong>Country</strong></td><td>${escapeHtml(data.country)}</td></tr>
      <tr><td><strong>Service</strong></td><td>${escapeHtml(data.service)}</td></tr>
    </table>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px;">${escapeHtml(data.message)}</p>
  `

  await transporter.sendMail({
    from: `"Beno Support Website" <${from}>`,
    to,
    replyTo: data.email,
    subject: `Contact Form: ${data.name} — ${data.company}`,
    text,
    html,
  })
}
