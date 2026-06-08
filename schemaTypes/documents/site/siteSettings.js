import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'SEO Global',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      title: 'Título del sitio',
      validation: (Rule) =>
        Rule.required()
          .max(60)
          .error('El titulo no debe exceder los 60 carcateres.'),
    }),
    defineField({
      title: 'Idioma',
      name: 'language',
      type: 'string',
      readOnly: true,
      // hidden: true,
    }),
    defineField({
      type: 'boolean',
      name: 'index',
      description:
        'Para evitar que se indexe una URL, también tendrás que seleccionar el índice verdadero en la etiqueta.',
      initialValue: true,
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'pageMetaDataType',
    }),
  ],
})
