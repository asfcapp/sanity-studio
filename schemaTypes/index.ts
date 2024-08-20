// Import your schemas
import blockContent from './blockContent'
import content from './content'
import {author} from './author'
import tag from './tag'
import {roj} from './roj'
import partner from './partners'
import aboutUs from './aboutUs'
import newsfeed from './newsFeed'
import blog from './blogs'
import campagne from './campaign'
import infraction from './infractions'
import communique from './communiques'
import footer from './footer'
// Export all  schemas
export const documentSchemas = [
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
  newsfeed,
  footer,
]
