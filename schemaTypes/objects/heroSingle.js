import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const heroSingleType = defineType({
  name: 'heroSingleType',
  title: 'Imagen Única',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'object',
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
          name: 'link',
          type: 'linkType',
        }),
      ],
    }),

    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'content.title',
      subtitle: 'content.text',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Hero sin título',
        subtitle: subtitle
          ? subtitle.length > 60
            ? subtitle.slice(0, 60) + '…'
            : subtitle
          : 'Sin texto',
        media: media || ImageIcon,
      }
    },
  },
})
