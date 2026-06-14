import { defineField, defineType, defineArrayMember } from 'sanity'
import { PresentationIcon, ImageRemoveIcon } from '@sanity/icons'

export const sliderType = defineType({
  name: 'sliderType',
  title: 'Carousel',
  type: 'object',
  icon: PresentationIcon,
  fields: [
    // =========================
    // 🎨 VARIANT GLOBAL
    // =========================
    defineField({
      name: 'variant',
      title: 'Estilo del carousel',
      type: 'string',
      initialValue: 'hero',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Card', value: 'card' },
          { title: 'Fullscreen', value: 'fullscreen' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    // =========================
    // 🧩 SLIDES
    // =========================
    defineField({
      name: 'slides',
      title: 'Diapositivas',
      type: 'array',

      validation: (Rule) =>
        Rule.required().min(1).max(8).error('Debe haber entre 1 y 8 slides'),

      of: [
        defineArrayMember({
          type: 'object',

          fields: [
            // =========================
            // 🧱 CONTENT
            // =========================
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
              ],
            }),

            // =========================
            // 🔗 LINK SYSTEM PRO
            // =========================
            defineField({
              name: 'link',
              title: 'Botón / Enlace',
              type: 'object',

              fields: [
                defineField({
                  name: 'kind',
                  title: 'Tipo de enlace',
                  type: 'string',
                  options: {
                    list: [
                      { title: '🌐 Externo', value: 'external' },
                      { title: '🧩 Interno', value: 'internal' },
                    ],
                    layout: 'radio',
                  },
                  validation: (Rule) => Rule.required(),
                }),

                // 🌐 EXTERNAL
                defineField({
                  name: 'external',
                  title: 'Enlace externo',
                  type: 'object',
                  hidden: ({ parent }) => parent?.kind !== 'external',

                  fields: [
                    defineField({
                      name: 'type',
                      title: 'Tipo',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Web (https://)', value: 'url' },
                          { title: 'Email', value: 'mailto' },
                          { title: 'Teléfono', value: 'tel' },
                        ],
                        layout: 'radio',
                      },
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'value',
                      title: 'Destino',
                      type: 'string',
                      description: ({ parent }) => {
                        if (!parent) return 'Introduce el destino'

                        switch (parent.type) {
                          case 'url':
                            return 'Ej: https://midominio.com'
                          case 'mailto':
                            return 'Ej: hola@correo.com'
                          case 'tel':
                            return 'Ej: +34 600 123 123'
                          default:
                            return ''
                        }
                      },
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),

                // 🧩 INTERNAL
                defineField({
                  name: 'internal',
                  title: 'Enlace interno',
                  type: 'reference',
                  hidden: ({ parent }) => parent?.kind !== 'internal',
                  to: [{ type: 'projectType' }],
                }),

                // 🏷 LABEL
                defineField({
                  name: 'label',
                  title: 'Texto del botón',
                  type: 'string',
                }),
              ],

              preview: {
                select: {
                  kind: 'kind',
                  label: 'label',
                  externalType: 'external.type',
                  externalValue: 'external.value',
                  internalTitle: 'internal.title',
                },

                prepare({
                  kind,
                  label,
                  externalType,
                  externalValue,
                  internalTitle,
                }) {
                  let subtitle = ''

                  if (kind === 'external') {
                    const icon =
                      externalType === 'url'
                        ? '🌐'
                        : externalType === 'mailto'
                          ? '📧'
                          : '📞'

                    subtitle = `${icon} ${externalValue || ''}`
                  }

                  if (kind === 'internal') {
                    subtitle = `🧩 ${internalTitle || 'Documento interno'}`
                  }

                  return {
                    title: label || 'Enlace',
                    subtitle,
                  }
                },
              },
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
                media: media || ImageRemoveIcon,
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
      variant: 'variant',
      slides: 'slides',
    },
    prepare({ variant, slides }) {
      const count = slides?.length || 0

      return {
        title: `Carousel (${variant})`,
        subtitle: `${count} slide${count === 1 ? '' : 's'}`,
        media: PresentationIcon,
      }
    },
  },
})
