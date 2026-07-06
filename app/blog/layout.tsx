import type { Metadata } from 'next'
import { toAbsoluteUrl } from '@/lib/site-url'

const title = 'AI, Software & Digital Transformation Insights | Beno Support'
const description =
  'Explore the latest insights on AI, software development, cloud, cybersecurity, digital transformation, managed IT, UX/UI, HR technology, and industry use cases from Beno Support.'
const canonical = toAbsoluteUrl('/blog')

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
