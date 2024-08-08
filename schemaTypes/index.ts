// Import your schemas
import blockContent from './blockContent'
import post from './post'
import author from './author'
import tag from './tag'
import {roj} from './roj'
import partenaire from './partenaire'
import home from './home'
import blogCategory from './blogCategory'
import columnistCategory from './columnistCategory'
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
  columnistCategory,
  tag,
  partenaire,
  blockContent,
  presse,
]

// Combine all schema types for the export
export const schemaTypes = [...pageSchemas, ...documentSchemas]
