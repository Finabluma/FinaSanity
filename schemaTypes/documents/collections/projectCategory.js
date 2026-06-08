import { defineField, defineType } from 'sanity'
import { HashIcon } from '@sanity/icons'
import { slugify } from '../../../lib/slugify'

export const projectCategory = defineType({
  name: 'projectCategory',
  title: 'Categorías',
  type: 'document',
  icon: HashIcon,
  fields: [
    defineField({
      title: 'Idioma',
      name: 'language',
      type: 'string',
      readOnly: true,
      // hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Categoría',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'URL amigable, traducible. Se genera automáticamente a partir del título.',
      validation: (rule) =>
        rule.required().error('El slug es necesario. Pulsa "generate".'),
      options: {
        source: (doc, context) => {
          const lang = context?.parent?._lang || 'es' // idioma activo
          return doc.title?.[lang] || doc.title
        },
        slugify,
      },
    }),
    defineField({
      name: 'teaser',
      type: 'text',
      rows: 3,
      description:
        'He aqui la descripción de la categoría. Se mostrará en los motores de búsqueda.',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
