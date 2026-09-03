import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'

export const galleriesType = defineType({
  name: 'galleries',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'gallery',
      type: 'slidesBlock',
    }),
    defineField({
      title: 'Idioma',
      name: 'language',
      type: 'string',
      // readOnly: true,
      hidden: true,
    }),
  ],
})
