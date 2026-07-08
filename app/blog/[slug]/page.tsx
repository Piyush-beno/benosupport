import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CalendarDays, UserRound } from 'lucide-react'

import { BlogPortableText } from '@/components/blog-portable-text'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { withHome } from '@/lib/breadcrumbs'
import { toAbsoluteUrl } from '@/lib/site-url'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import {
  POST_SLUGS_QUERY,
  SINGLE_POST_QUERY,
  type PostDetail,
} from '@/sanity/lib/queries'

export const revalidate = 60

function formatDate(date?: string) {
  if (!date) return null
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY)
    return slugs.map(({ slug }) => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await client.fetch<PostDetail>(SINGLE_POST_QUERY, { slug })

    if (!post) {
      return { title: 'Post Not Found | Beno Support' }
    }

    const title = post.seoTitle || post.title
    const description = post.seoDescription || post.excerpt || undefined
    const canonical = toAbsoluteUrl(`/blog/${slug}`)

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'article',
        publishedTime: post.publishedAt,
      },
    }
  } catch {
    return { title: 'Blog | Beno Support' }
  }
}

function BlogPostError() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <SiteHeader />
      <main className="pb-20 pt-28 lg:pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PageBreadcrumb
            items={withHome([
              { label: "Blog", href: "/blog" },
              { label: "Article" },
            ])}
          />
          <div className="mt-10 rounded-[20px] border border-[#fecaca] bg-white px-8 py-16 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <h1 className="text-2xl font-bold text-[#0a1628]">Unable to load article</h1>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-[#64748b]">
              We&apos;re unable to load this article right now. Please try again in a few
              minutes.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post: PostDetail | null = null

  try {
    post = await client.fetch<PostDetail>(SINGLE_POST_QUERY, { slug })
  } catch {
    return <BlogPostError />
  }

  if (!post) notFound()

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1400).height(760).fit('crop').url()
    : null
  const published = formatDate(post.publishedAt)

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <SiteHeader />
      <main className="pb-20 pt-28 lg:pt-32">
        <article className="mx-auto max-w-4xl px-6 lg:px-8">
          <PageBreadcrumb
            items={withHome([
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ])}
          />

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#64748b]">
            {published ? (
              <div className="flex items-center gap-2">
                <CalendarDays className="size-4" />
                <time dateTime={post.publishedAt}>{published}</time>
              </div>
            ) : null}
            {post.author ? (
              <div className="flex items-center gap-2">
                <UserRound className="size-4" />
                <span>{post.author}</span>
              </div>
            ) : null}
            {post.category ? (
              <span className="rounded-full bg-[#e8eefc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#072448]">
                {post.category}
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 text-balance text-[2rem] font-extrabold leading-tight tracking-[-0.02em] text-[#0a1628] sm:text-[2.5rem] lg:text-[2.75rem]">
            {post.title}
          </h1>

          {imageUrl ? (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          ) : null}

          {post.body ? (
            <div className="mt-10">
              <BlogPortableText value={post.body} />
            </div>
          ) : null}
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
