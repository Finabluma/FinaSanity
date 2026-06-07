/* eslint-disable no-undef */
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { documentInternationalization } from '@sanity/document-internationalization'
import { supportedLanguages } from './config/supportedLanguages'
// import { structure } from './config/structure'
import { initialValueTemplates } from './config/initialValueTemplates'

export default defineConfig({
  name: 'default',
  title: 'FINA',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [
    structureTool(),
    visionTool(),
    media(),
    documentInternationalization({
      // Required configuration
      supportedLanguages,
      schemaTypes: ['projectType', 'projectCategory', 'siteSettings'],
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => initialValueTemplates(prev),
  },
})
