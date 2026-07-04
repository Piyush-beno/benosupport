import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { toAbsoluteUrl } from "@/lib/site-url"

const title = "Privacy Policy | Beno Support"
const description =
  "Learn how Beno Support collects, uses, and protects your personal information when you use our website and services."
const canonical = toAbsoluteUrl("/privacy-policy")

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="January 2024"
      intro="This Privacy Policy describes how Beno Support collects, uses, and discloses information, and what choices you have with respect to your data. This policy applies to information we collect on our website, through email, text, and other electronic communications between you and this Website, and through our products and services."
      sections={[
        {
          title: "Information We Collect",
          paragraphs: [
            "We collect several types of information from and about users of our Website and Services, including personal information (such as name, email address, and phone number), and non-personal information (such as IP address, browser type, operating system, and details about your usage patterns). This information is gathered when you register for a service, subscribe to our newsletter, or communicate directly with us.",
          ],
        },
        {
          title: "How We Use Your Information",
          paragraphs: [
            "The information we collect is primarily used to present our Website and its contents to you, provide you with information, products, or services that you request from us, fulfill any other purpose for which you provide it, and improve our services through analysis of usage data. We may also use your information to communicate with you about services that may be of interest, strictly in accordance with your communication preferences.",
          ],
        },
        {
          title: "Information Sharing and Disclosure",
          paragraphs: [
            "We do not sell your personal information. We may disclose personal information to our subsidiaries and affiliates, to contractors, service providers, and other third parties we use to support our business, and to comply with any court order, law, or legal process, including to respond to any government or regulatory request.",
          ],
        },
        {
          title: "Your Privacy Rights",
          paragraphs: [
            "You have rights regarding your personal data, including the right to access, correct, or request deletion of any personal information that you have provided to us. You may also withdraw your consent at any time where we rely on consent to process your personal information.",
          ],
        },
        {
          title: "Contact Us",
          paragraphs: [
            "To exercise any of these rights, please contact us using the information provided on our contact page.",
          ],
        },
      ]}
      closing="This page is maintained by Beno Support to answer common privacy questions about our services. For concerns not covered here, please reach out through our contact page."
    />
  )
}
