import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const faviconType = defineType({
  title: 'Favicon',
  name: 'faviconType',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      title: 'titulo',
      name: 'title',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'favicon',
      type: 'image',
      description:
        'Icono que aparece en la barra de direcciones del navegador web.',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        }),
      ],
    }),
    defineField({
      name: 'appleTouchIcon',
      title: 'Apple Touch Icon',
      type: 'image',
      description:
        'Se utiliza como icono de página web en dispositivos Apple (iPhone, iPad, etc.)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      alt: 'favicon.alt',
      favicon: 'favicon',
    },
    prepare({ title, favicon, alt }) {
      return {
        title: title,
        subtitle: alt,
        media: favicon,
      }
    },
  },
})
