import {defineType, Rule, ValidationContext} from 'sanity'

// Type for a reference object
interface Reference {
  _ref: string
}

// Type for a document with the `isDisplayedOnHome` field
interface DocumentWithDisplay {
  _id: string
  isDisplayedOnHome?: boolean
}

// Function to validate that all referenced items have 'isDisplayedOnHome' set to true
function validateNewsfeed(value: Reference[], context: ValidationContext): true | string {
  // Ensure value is an array before proceeding with validation
  if (!Array.isArray(value)) {
    return 'Expected an array of references'
  }

  // Validate that all references are valid
  const allValidRefs = value.every((ref) => ref._ref)
  if (!allValidRefs) {
    return 'All items must be valid references'
  }

  // Validate that all referenced documents have 'isDisplayedOnHome' set to true
  const documents = value.map((ref) => context.get(ref._ref) as DocumentWithDisplay | undefined)

  return documents.every((doc) => doc?.isDisplayedOnHome === true)
    ? true
    : 'All referenced content must have isDisplayedOnHome set to true'
}

// Define the 'Newsfeed' schema
export default defineType({
  name: 'newsfeed',
  title: 'Newsfeed',
  type: 'document',
  fields: [
    {
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blog'}, {type: 'communiques'}],
        },
      ],
      validation: (Rule: Rule) =>
        Rule.custom((value) => validateNewsfeed(value as any[], Rule.context)),
    },
    // Add other fields for the newsfeed document if needed
  ],
})
