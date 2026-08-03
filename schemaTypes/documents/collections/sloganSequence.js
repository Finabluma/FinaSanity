import { defineField, defineType } from 'sanity'
import { TextIcon } from '@sanity/icons'

export const sloganSequence = defineType({
  title: 'Esloganes',
  type: 'document',
  name: 'sloganSequence',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Eslogan principal',
      type: 'string',
    }),
    defineField({
      name: 'textSequence',
      type: 'textSequenceType',
    }),
    defineField({
      title: 'Idioma',
      name: 'language',
      type: 'string',
      // readOnly: true,
      // hidden: true,
    }),
  ],
})
