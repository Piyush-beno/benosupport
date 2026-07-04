import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { toAbsoluteUrl } from "@/lib/site-url"

const title = "Terms & Conditions | Beno Support"
const description =
  "Read the Terms and Conditions that govern your access to and use of Beno Support's website and services."
const canonical = toAbsoluteUrl("/terms")

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

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      effectiveDate="January 2024"
      intro="Welcome to Beno Support. These Terms and Conditions govern your access to and use of our website, services, and any content or functionality offered on or through them. By accessing or using the Service, you agree to be bound by these Terms, which establish a contractual relationship between you and Beno Support."
      sections={[
        {
          title: "User Responsibilities",
          paragraphs: [
            "As a user, you agree to use the Service only for lawful purposes and in accordance with these Terms. You are prohibited from using the Service in any way that violates any applicable federal, state, local, or international law, or for the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content.",
          ],
        },
        {
          title: "Termination of Service",
          paragraphs: [
            "We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
          ],
        },
        {
          title: "Governing Law",
          paragraphs: [
            "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in New Delhi, India, and the parties hereby consent to the personal jurisdiction and venue therein.",
          ],
        },
        {
          title: "Changes to These Terms",
          paragraphs: [
            "Beno Support reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion, and your continued use of the Service after the revised Terms have taken effect signifies your acceptance of the new Terms.",
          ],
        },
      ]}
      closing="These terms are maintained by Beno Support. If you have questions about your rights or obligations, please contact us through our contact page."
    />
  )
}
