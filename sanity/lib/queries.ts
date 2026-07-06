import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url'

export type PostListItem = {
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  mainImage?: SanityImageSource
}

export type PostDetail = PostListItem & {
  body?: PortableTextBlock[]
  seoTitle?: string
  seoDescription?: string
  author?: string
  category?: string
}

export const ALL_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage
}`

export const SINGLE_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  body,
  publishedAt,
  mainImage,
  seoTitle,
  seoDescription,
  excerpt,
  author,
  category
}`

export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`
