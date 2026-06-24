import { defineType, defineField } from 'sanity'
import { TextIcon } from '@sanity/icons'

export const textBlockType = defineType({
  name: 'textBlockType',
  title: 'Text Block',
  type: 'object',
  icon: TextIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),

    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'alignment',
      title: 'Alineación',
      type: 'string',
      options: {
        list: [
          { title: 'Izquierda', value: 'left' },
          { title: 'Centro', value: 'center' },
          { title: 'Derecha', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),

    defineField({
      name: 'size',
      title: 'Tamaño',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Grande', value: 'large' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Text Block',
        subtitle: subtitle
          ? subtitle.length > 80
            ? subtitle.slice(0, 80) + '…'
            : subtitle
          : 'Sin texto',
      }
    },
  },
})
