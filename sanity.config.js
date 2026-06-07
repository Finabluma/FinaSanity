/* eslint-disable no-undef */
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { documentInternationalization } from '@sanity/document-internationalization'
import { supportedLanguages } from './config/supportedLanguages'
import { structure } from './config/structure'
import { initialValueTemplates } from './config/initialValueTemplates'

export default defineConfig({
  name: 'default',
  title: 'FINA',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [
    structureTool({ structure }),
    visionTool(),
    media(),
    documentInternationalization({
      // Required configuration
      supportedLanguages,
      schemaTypes: ['projectType', 'projectCategory'],
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => initialValueTemplates(prev),
  },

  document: {
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      if (creationContext.type === 'global') {
        // Hide the creation of "settings" documents if the context is global
        return prev.filter(
          (templateItem) =>
            templateItem.templateId !== 'projectType' &&
            templateItem.templateId !== 'projectCategory' &&
            templateItem.templateId !== 'translation.metadata',
        )
      }
      return prev
    },
  },
})
