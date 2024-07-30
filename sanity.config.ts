import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode.js'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'asfc',

  projectId: 'wrseddxi',
  dataset: 'production',

  plugins: [
    visionTool(),
    structureTool(),
    presentationTool({
      previewUrl: 'https://asfc.vercel.app' || 'http://localhost:8002/',
      
      resolve: {
        mainDocuments: [
          {
            route: '/home',
            filter: `_type == "home"`,
          },
        ],
      },
    }),
    media({
      creditLine: {
        enabled: true,
        // boolean - enables an optional "Credit Line" field in the plugin.
        // Used to store credits e.g. photographer, licence information
        excludeSources: ['unsplash'],
        // string | string[] - when used with 3rd party asset sources, you may
        // wish to prevent users overwriting the creditLine based on the `source.name`
      },
      maximumUploadSize: 10000000,
      // number - maximum file size (in bytes) that can be uploaded through the plugin interface
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
