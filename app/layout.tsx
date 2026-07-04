import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SocialSidebar from '@/components/social-sidebar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { ProposalModalProvider } from '@/hooks/use-proposal-modal'
import { SITE_URL } from '@/lib/site-url'

const GTM_ID = 'GTM-K2K4QPL7'

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
  metadataBase: new URL(SITE_URL),
  title: "AI Engineering & Cloud Solutions Company | Beno Support",
  description:
    "Beno Support delivers AI engineering, software development, cloud infrastructure, cybersecurity, and digital transformation services for startups, SMBs, and enterprises worldwide.",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
