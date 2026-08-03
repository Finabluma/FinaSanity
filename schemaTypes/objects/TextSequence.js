import { defineField, defineType, defineArrayMember } from 'sanity'
import { TextIcon } from '@sanity/icons'

export const textSequenceType = defineType({
  title: 'Secuencia de Textos',
  name: 'textSequenceType',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'prefix',
      title: 'Prefijo (Opcional)',
      type: 'string',
    }),
    defineField({
      name: 'items',
      type: 'array',
      description: 'Puede ser una palabra o una frase entera',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'mode',
      type: 'string',
      options: {
        list: [
          { title: 'Typewriter', value: 'typewriter' },
          { title: 'Rotate', value: 'rotate' },
        ],
      },
      initialValue: 'typewriter',
    }),
  ],
})
