import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Ajustes del sitio',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      title: 'Título del sitio',
    }),
    defineField({
      name: 'siteDescription',
      type: 'text',
      title: 'Descripción del sitio',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      // hidden: true,
    }),
  ],
})
