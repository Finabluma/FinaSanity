import { defineField, defineType } from 'sanity'
import { ProjectsIcon, EarthAmericasIcon } from '@sanity/icons'
import { slugify } from '../../../lib/slugify'
export const projectType = defineType({
  name: 'projectType',
  title: 'Proyecto',
  type: 'document',
  icon: ProjectsIcon,
  groups: [{ name: 'seo', title: 'SEO PAGE', icon: EarthAmericasIcon }],
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
      validation: (rule) =>
        rule
          .required()
          .error(
            'El nombre del proyecto es necesario. Es recomendable que no excedan los 60 caracteres',
          ),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify,
      },
    }),
    defineField({
      title: 'Breve resumen',
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Esta es la imagen representativa del proyecto.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Texto alternativo para accesibilidad y SEO',
        }),
      ],
    }),
    defineField({
      name: 'categoria',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
      title: 'Categoría',
      // validation: (rule) => rule.required().error('Debes asignar una categoría al proyecto.'),
      options: {
        filter: ({ document }) => {
          const lang = document?.language
          return {
            filter: 'lang == $lang',
            params: { lang: lang },
          }
        },
      },
    }),
    defineField({
      name: 'seo',
      type: 'pageMetaDataType',
      group: 'seo',
    }),
  ],
})
