import { defineField, defineType } from 'sanity'

export const linkType = defineType({
  name: 'linkType',
  title: 'Enlace',
  type: 'object',
  fields: [
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

        prepare({ kind, label, externalType, externalValue, internalTitle }) {
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
  ],
})
