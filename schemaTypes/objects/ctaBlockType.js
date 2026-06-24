import { defineType, defineField } from 'sanity'
import { BoltIcon } from '@sanity/icons'

export const ctaBlockType = defineType({
  name: 'ctaBlockType',
  title: 'Call To Action',
  type: 'object',
  icon: BoltIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 3,
    }),

    defineField({
      title: 'Botón',
      name: 'cta',
      type: 'linkType',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'CTA',
        subtitle: subtitle
          ? subtitle.length > 80
            ? subtitle.slice(0, 80) + '…'
            : subtitle
          : 'Sin texto',
      }
    },
  },
})
