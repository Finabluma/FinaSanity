/*
Document ids which:
- cannot be created in the 'new document' menu
- cannot be duplicated, unpublished or deleted
*/
const LOCKED_DOCUMENT_IDS = [
  'media.tag', // Sanity Media Plugin Tags
  'siteSettings',
]

/*
Return all templates except the locked documents
*/
export const initialValueTemplates = (prev) => {
  return [
    ...prev.filter((el, template) => {
      return !LOCKED_DOCUMENT_IDS.includes(el.schemaType)
    }),
  ]
}

export const projectEn = {
  id: 'project-en',
  title: 'Project (EN)',
  schemaType: 'projectType',
  value: {
    language: 'en',
  },
}
export const projectEs = {
  id: 'project-es',
  title: 'Proyecto (ES)',
  schemaType: 'projectType',
  value: {
    language: 'es',
  },
}
export const categoryEn = {
  id: 'category-en',
  title: 'Category (EN)',
  schemaType: 'projectCategory',
  value: {
    language: 'en',
  },
}
export const categoryEs = {
  id: 'category-es',
  title: 'Categoría (ES)',
  schemaType: 'projectCategory',
  value: {
    language: 'es',
  },
}

export const slideEs = {
  id: 'slide-es',
  title: 'Carousel (ES)',
  schemaType: 'heroSliderType',
  value: {
    language: 'es',
  },
}
export const slideEn = {
  id: 'slide-en',
  title: 'Carousel (EN)',
  schemaType: 'heroSliderType',
  value: {
    language: 'en',
  },
}
export const sloganEn = {
  id: 'slogan-en',
  title: 'Slogan (EN)',
  schemaType: 'sloganSequence',
  value: {
    language: 'en',
  },
}
export const sloganEs = {
  id: 'slogan-es',
  title: 'Slogan (ES)',
  schemaType: 'sloganSequence',
  value: {
    language: 'es',
  },
}
