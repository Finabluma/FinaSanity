import { defineField, defineType, defineArrayMember } from 'sanity'
import { PresentationIcon } from '@sanity/icons'

export const heroSliderType = defineType({
  title: 'Carousel',
  name: 'heroSliderType',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slides',
      title: 'Diapositivas',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'text',
              type: 'string',
            }),
            defineField({
              name: 'rotatewords',
              type: 'array',
              of: [defineArrayMember({ name: 'word', type: 'string' })],
            }),
            defineField({
              name: 'image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'layout',
              type: 'string',
              options: {
                list: [
                  'text-only',
                  'image-left',
                  'image-right',
                  'image-background',
                ],
              },
              initialValue: 'text-only',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Idioma',
      name: 'language',
      type: 'string',
      readOnly: true,
      // hidden: true,
    }),
  ],
})
