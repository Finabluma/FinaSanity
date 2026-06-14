import { defineField, defineType } from 'sanity'

export const pageMetaDataType = defineType({
  name: 'pageMetaDataType',
  type: 'object',
  fieldsets: [{ name: 'opengraph', title: 'OPEN GRAPH' }],
  fields: [
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description:
        'La meta descripción te ofrece la oportunidad de controlar el aspecto de su documento en los resultados de búsqueda. Al igual que con el título, asegúrate de que tus meta descripciones sean claras, concisas y reflejen el contenido que los usuarios encontrarán en su página. No debe exceder los 145 caracteres.',
      rows: 3,
      validation: (Rule) =>
        Rule.max(145).error(
          'la descripción no debe exceder los 145 carcateres!!',
        ),
    }),
    defineField({
      title: 'Meta Keywords',
      name: 'metaKeywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'Imagen OG',
      name: 'ogImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
        }),
      ],
      description:
        'Se utiliza como imagen compartida por defecto cuando no se especifica ninguna en una página. Tamaño recomendado: 1200x630px',
      fieldset: 'opengraph',
    }),
  ],
})
