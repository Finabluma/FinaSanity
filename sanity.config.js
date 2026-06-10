/* eslint-disable no-undef */
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { documentInternationalization } from '@sanity/document-internationalization'
import { supportedLanguages } from './config/supportedLanguages'
import { structure } from './config/structure'
import {
  projectEn,
  projectEs,
  categoryEn,
  categoryEs,
  slideEs,
  slideEng,
} from './config/initialValueTemplates'

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
      schemaTypes: [
        'projectType',
        'projectCategory',
        'siteSettings',
        'heroSliderType',
        'homeType',
      ],
      languageField: 'language',
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      projectEn,
      projectEs,
      categoryEn,
      categoryEs,
      slideEs,
      slideEng,
    ],
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      // ❌ bloquear creación global
      if (creationContext.type === 'global') {
        // Hide the creation of "settings" documents if the context is global
        return prev.filter(
          (templateItem) =>
            templateItem.templateId !== 'projectType' &&
            templateItem.templateId !== 'projectCategory' &&
            templateItem.templateId !== 'faviconType' &&
            templateItem.templateId !== 'siteSettings' &&
            templateItem.templateId !== 'translation.metadata',
        )
      }

      // ✅ filtrar por idioma dentro del panel
      // if (creationContext.type === 'documentList') {
      //   const lang = creationContext.params?.lang

      //   if (!lang) return prev

      //   return prev.filter((templateItem) => {
      //     // solo templates que correspondan al idioma
      //     return templateItem.templateId.endsWith(`-${lang}`)
      //   })
      // }

      return prev
    },
  },
})
