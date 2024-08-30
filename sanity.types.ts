/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type AuthorReference = {
  _type: 'reference'
  _ref: string
  _weak?: boolean
}

export type Footer = {
  _id: string
  _type: 'footer'
  _createdAt: string
  _updatedAt: string
  _rev: string
  copyright?: string
  address?: string
}

export type Newsfeed = {
  _id: string
  _type: 'newsfeed'
  _createdAt: string
  _updatedAt: string
  _rev: string
  references?: Array<
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'blog'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'communiques'
      }
  >
}

export type AboutUs = {
  _id: string
  _type: 'aboutUs'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
        listItem?: 'bullet' | 'numbered'
        markDefs?: Array<
          | {
              reference?: {
                _ref: string
                _type: 'reference'
                _weak?: boolean
                [internalGroqTypeReferenceTo]?: 'content'
              }
              _type: 'internalLink'
              _key: string
            }
          | {
              href?: string
              _type: 'externalLink'
              _key: string
            }
          | {
              text?: string
              url?: string
              _type: 'source'
              _key: string
            }
        >
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        image?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'imageAsset'
        }
        _type: 'figure'
        _key: string
      }
  >
}

export type Communiques = {
  _id: string
  _type: 'communiques'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
        listItem?: 'bullet' | 'numbered'
        markDefs?: Array<
          | {
              reference?: {
                _ref: string
                _type: 'reference'
                _weak?: boolean
                [internalGroqTypeReferenceTo]?: 'content'
              }
              _type: 'internalLink'
              _key: string
            }
          | {
              href?: string
              _type: 'externalLink'
              _key: string
            }
          | {
              text?: string
              url?: string
              _type: 'source'
              _key: string
            }
        >
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        image?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'imageAsset'
        }
        _type: 'figure'
        _key: string
      }
  >
  excerpt?: string
  status?: 'draft' | 'published' | 'archived'
  author?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'author'
  }
  tags?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'tag'
  }>
  publishedAt?: string
  illustrations?: Array<
    {
      _key: string
    } & Illustration
  >
  isDisplayedOnHome?: boolean
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
      listItem?: 'bullet' | 'numbered'
      markDefs?: Array<
        | {
            reference?: {
              _ref: string
              _type: 'reference'
              _weak?: boolean
              [internalGroqTypeReferenceTo]?: 'content'
            }
            _type: 'internalLink'
            _key: string
          }
        | {
            href?: string
            _type: 'externalLink'
            _key: string
          }
        | {
            text?: string
            url?: string
            _type: 'source'
            _key: string
          }
      >
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      image?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'imageAsset'
      }
      _type: 'figure'
      _key: string
    }
>

export type Partner = {
  _id: string
  _type: 'partner'
  _createdAt: string
  _updatedAt: string
  _rev: string
  partnerType?: Array<string>
  name?: string
  description?: string
  image?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'imageAsset'
  }
}

export type Tag = {
  _id: string
  _type: 'tag'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  description?: string
}

export type Blog = {
  _id: string
  _type: 'blog'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  description?: string
  illustrations?: Array<
    {
      _key: string
    } & Illustration
  >
  readingTime?: string
  publishedAt?: string
  seo?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'seo'
  }
  category?: 'official' | 'community'
  isDisplayedOnHome?: boolean
}

export type Roj = {
  _id: string
  _type: 'roj'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  body?: BlockContent
  imageRoj?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'imageAsset'
  }
  seo?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'seo'
  }
}

export type Infraction = {
  _id: string
  _type: 'infraction'
  _createdAt: string
  _updatedAt: string
  _rev: string
  infractionName?: string
  briefDescription?: string
  infractionImage?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'imageAsset'
  }
  lawArticle?: BlockContent
  moroccanData?: BlockContent
}

export type Content = {
  _type: 'content'
  title?: string
  slug?: Slug
  body?: BlockContent
  excerpt?: string
  status?: 'draft' | 'published' | 'archived'
  author?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'author'
  }
  tags?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'tag'
  }>
}

export type Author = {
  _id: string
  _type: 'author'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  bio?: string
  image?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'illustration'
  }
  social?: {
    twitter?: string
    instagram?: string
  }
  coAuthors?: Array<
    {
      _key: string
    } & AuthorReference
  >
}

export type Illustration = {
  _type: 'illustration'
  imageAsset?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'imageAsset'
  }
  caption?: string
  isCoverImage?: boolean
  isFeaturedImage?: boolean
}

export type Campagne = {
  _id: string
  _type: 'campagne'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  image?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'imageAsset'
  }
  description?: string
  infractions?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'infraction'
  }>
  seo?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'seo'
  }
}

export type Seo = {
  _id: string
  _type: 'seo'
  _createdAt: string
  _updatedAt: string
  _rev: string
  metaTitle?: string
  slug?: Slug
  description?: string
  keywords?: Array<string>
  openGraph?: {
    title?: string
    description?: string
    image?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'imageAsset'
    }
  }
  twitter?: {
    title?: string
    description?: string
    image?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'imageAsset'
    }
    cardType?: 'summary' | 'summary_large_image' | 'photo' | 'video' | 'gallery'
    site?: string
    creator?: string
  }
  canonicalUrl?: string
  noindex?: boolean
  nofollow?: boolean
  robots?: Array<string>
}

export type ImageAsset = {
  _id: string
  _type: 'imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  alt?: string
  credit?: string
  width?: number
  height?: number
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type MediaTag = {
  _id: string
  _type: 'media.tag'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: Slug
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | AuthorReference
  | Footer
  | Newsfeed
  | AboutUs
  | Communiques
  | BlockContent
  | Partner
  | Tag
  | Blog
  | Roj
  | Infraction
  | Content
  | Author
  | Illustration
  | Campagne
  | Seo
  | ImageAsset
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | MediaTag
  | Slug
export declare const internalGroqTypeReferenceTo: unique symbol
