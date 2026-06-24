import { defineField, defineType, defineArrayMember } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export const heroBlockType = defineType({
  title: 'Secuencia de Textos',
  name: 'heroBlockType',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'prefix',
      title: 'Prefijo (Opcional)',
      type: 'string',
    }),
    defineField({
      name: 'textSequence',
      title: 'Secuencia de texto',
      type: 'object',
      description: 'Puede ser una palabra o una frase entera',
      fields: [
        defineField({
          name: 'items',
          type: 'array',
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
    }),
  ],
})
