import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { ALL_POSTS_QUERY, type PostListItem } from '@/sanity/lib/queries'

export const revalidate = 60

function formatDate(date?: string) {
  if (!date) return null
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export default async function BlogPage() {
  let posts: PostListItem[] = []
  let fetchError = false

  try {
    posts = await client.fetch<PostListItem[]>(ALL_POSTS_QUERY)
  } catch {
    fetchError = true
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <SiteHeader />
      <main>
        <section className="bg-[#072448] pt-28 pb-16 text-white lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
            <p className="type-label font-semibold tracking-[0.18em] text-white/70">
              INSIGHTS
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[2rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.5rem] lg:text-[2.75rem]">
              AI, Software &amp; Digital Transformation Insights
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-white/75 sm:text-base">
              Explore expert insights, technology trends, practical use cases, and
              implementation guides across AI, software development, cloud, cybersecurity,
              digital transformation, managed IT, UX/UI, and HR technology.
            </p>
          </div>
        </section>

        <section className="pb-20 pt-12 lg:pt-14">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            {fetchError ? (
              <div className="rounded-[20px] border border-[#fecaca] bg-white px-8 py-16 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <h2 className="text-xl font-bold text-[#0a1628]">
                  Unable to load articles
                </h2>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-[#64748b]">
                  We&apos;re unable to load articles right now. Please try again in a few
                  minutes.
                </p>
              </div>
            ) : posts.length === 0 ? (
              <div className="rounded-[20px] border border-[#e2e8f0] bg-white px-8 py-16 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <h2 className="text-xl font-bold text-[#0a1628]">No posts yet</h2>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-[#64748b]">
                  No articles published yet. Check back soon for insights on AI,
                  cloud, and digital transformation.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => {
                  const imageUrl = post.mainImage
                    ? urlFor(post.mainImage).width(800).height(500).fit('crop').url()
                    : null
                  const published = formatDate(post.publishedAt)

                  return (
                    <article
                      key={post.slug}
                      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(7,36,72,0.08)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#e8eefc]">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#072448] to-[#0a3a73] text-sm font-semibold tracking-[0.18em] text-white/70">
                            BENO SUPPORT
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        {published ? (
                          <div className="mb-3 flex items-center gap-2 text-sm text-[#64748b]">
                            <CalendarDays className="size-4" />
                            <time dateTime={post.publishedAt}>{published}</time>
                          </div>
                        ) : null}

                        <h2 className="text-xl font-bold leading-snug tracking-tight text-[#0a1628]">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="transition-colors hover:text-[#072448]"
                          >
                            {post.title}
                          </Link>
                        </h2>

                        {post.excerpt ? (
                          <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-7 text-[#64748b]">
                            {post.excerpt}
                          </p>
                        ) : null}

                        <Link
                          href={`/blog/${post.slug}`}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#072448] transition-colors hover:text-[#0a3a73]"
                        >
                          Read More
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
