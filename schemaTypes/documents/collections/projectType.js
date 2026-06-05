import { defineField, defineType } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'
import { slugify } from '../../../lib/slugify'
export const projectType = defineType({
  name: 'projectType',
  title: 'Proyecto',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
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
  ],
})
