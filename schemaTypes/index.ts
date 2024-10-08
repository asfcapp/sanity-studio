// Import your schemas
import blockContent from './blockContent'
import content from './content'
import {author, authorReference} from './author'
import tag from './tag'
import {roj} from './roj'
import partner from './partners'
import aboutUs from './aboutUs'
import blog from './blogs'
import campagne from './campaign'
import infraction from './infractions'
import communique from './communiques'
import footer from './footer'
import seo from './seo'
import illustration from './illustration'
import imageAsset from './imageAsset'
import socialLink from './socialLink'
import iconMapping from './iconMapping'
// Export all schemas as 'schemaTypes'
export const schemaTypes = [
  campagne,
  content,
  infraction,
  roj,
  author,
  blog,
  tag,
  partner,
  blockContent,
  communique,
  aboutUs,
  footer,
  seo,
  authorReference,
  illustration,
  imageAsset,
  socialLink,
  iconMapping,
]
