import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes/index'; // Ensure this path is correct
import { structure } from './structure';
import { defaultDocumentNode } from './structure/defaultDocumentNode';
import { presentationTool } from 'sanity/presentation';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  name: 'default',
  title: 'asfc',

  projectId: 'wrseddxi',
  dataset: 'production',

  plugins: [
    visionTool(),
    structureTool(),
    presentationTool({
      previewUrl: process.env.VERCEL_URL || 'http://localhost:8002/', // Use an environment variable for flexibility
      
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
        excludeSources: ['unsplash'],
      },
      maximumUploadSize: 10000000,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
