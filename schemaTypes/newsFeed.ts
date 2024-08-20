import {defineType} from 'sanity'

// //This Function ensures that all referenced items have 'isDisplayedOnHome' set to true
function validateNewsfeed(value, context) {
  return value.every((ref) => context.get(ref._ref)?.isDisplayedOnHome === true)
    ? true
    : 'All referenced content must have isDisplayedOnHome set to true'
}

// Define the 'Newsfeed' schema
export default defineType({
  name: 'newsfeed',
  title: 'Newsfeed',
  type: 'array',
  of: [{type: 'reference', to: [{type: 'blog'}, {type: 'communique'}, {type: 'ressource'}]}],
  // Apply the validation function to the 'newsfeed' field
  validation: validateNewsfeed,
})
