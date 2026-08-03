import { defineField, defineType, defineArrayMember } from 'sanity'
import { PresentationIcon, ImagesIcon } from '@sanity/icons'

export const heroSliderType = defineType({
  name: 'heroSliderType',
  title: 'Carousel',
  type: 'object',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'slides',
      title: 'Diapositivas',
      type: 'array',

      validation: (Rule) =>
        Rule.required().min(1).error('Debe haber al menos 1 diapositiva'),

      of: [
        defineArrayMember({
          type: 'object',

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

            // =========================
            // 🖼 IMAGE
            // =========================
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
                title: title || 'Sin título',
                subtitle: subtitle || 'Sin texto',
                media: media || ImagesIcon,
              }
            },
          },
        }),
      ],
    }),
  ],

  // =========================
  // 👁️ CAROUSEL PREVIEW
  // =========================
  preview: {
    select: {
      slides: 'slides',
    },
    prepare({ slides }) {
      const count = slides?.length || 0

      return {
        title: `Carousel`,
        subtitle: `${count} slide${count === 1 ? '' : 's'}`,
        media: PresentationIcon,
      }
    },
  },
})
