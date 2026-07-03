import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import SocialSidebar from '@/components/social-sidebar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { ProposalModalProvider } from '@/hooks/use-proposal-modal'

const plexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "AI Engineering & Cloud Solutions Company | Beno Support ",
  description:
    "Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services for startups, SMBs, and enterprises worldwide. ",
  generator: "beno",
  icons: {
    icon: [
      {
        url: "/assets/logo.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/logo.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ProposalModalProvider>
          {children}
        </ProposalModalProvider>
        <SocialSidebar />
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
