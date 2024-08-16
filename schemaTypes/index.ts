// Import your schemas
import blockContent from './blockContent'
import post from './content'
import {author} from './author'
import tag from './tag'
import {roj} from './roj'
import partenaire from './partenaire'
import home from './home'
import blogCategory from './blog'
import campagne from './campagne'
import delit from './delit'
import presse from './presse'

// Separate page schemas
export const pageSchemas = [home, roj]

// Separate other document schemas
export const documentSchemas = [
  campagne,
  post,
  delit,
  author,
  blogCategory,
  tag,
  partenaire,
  blockContent,
  presse,
]

// Combine all schema types for the export
export const schemaTypes = [...pageSchemas, ...documentSchemas]
