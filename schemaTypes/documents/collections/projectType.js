import { defineField, defineType } from "sanity";
import { ProjectsIcon } from '@sanity/icons'

export const projectType = defineType({
    name:'projectType',
    title:'Proyecto',
    type: 'document',
    icon:ProjectsIcon,
    fields:[
        defineField({
            name: 'title',
            type: 'string',
        })
    ]
})