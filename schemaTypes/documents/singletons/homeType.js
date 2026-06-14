import { defineType, defineField, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homeType = defineType({
  name: 'homeType',
  title: 'Página de Inicio',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'language',
      title: 'Idioma',
      type: 'string',
      readOnly: true,
      // hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Título principal',
      type: 'string',
    }),
    defineField({
      name: 'blockComponents',
      title: 'Componentes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'heroBlockType',
        }),
        defineArrayMember({
          type: 'sliderType',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lang: 'language',
    },
    prepare({ title, lang }) {
      return {
        title: title || 'Home sin título',
        subtitle: lang ? `Idioma: ${lang}` : '',
        media: HomeIcon,
      }
    },
  },
})
