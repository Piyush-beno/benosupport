import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'

import { urlFor } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-10 text-3xl font-extrabold tracking-tight text-[#0a1628] first:mt-0 sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 text-2xl font-bold tracking-tight text-[#0a1628] first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-xl font-bold text-[#0a1628] first:mt-0">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-5 text-lg font-semibold text-[#0a1628] first:mt-0">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#072448] pl-5 text-lg italic text-[#475569]">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-[16px] leading-8 text-[#334155] first:mt-0">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-[#334155]">{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[#0a1628]">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href
      if (!href) return <>{children}</>
      const isExternal = href.startsWith('http')
      return (
        <a
          href={href}
          className="font-medium text-[#072448] underline-offset-4 hover:underline"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <Image
            src={urlFor(value).width(1200).height(675).fit('crop').url()}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
          />
          {value.alt ? (
            <figcaption className="px-4 py-3 text-sm text-[#64748b]">{value.alt}</figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

export function BlogPortableText({
  value,
}: {
  value: Parameters<typeof PortableText>[0]['value']
}) {
  return <PortableText value={value} components={components} />
}
