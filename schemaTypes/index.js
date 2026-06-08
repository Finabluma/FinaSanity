import { projectCategory } from './documents/collections/projectCategory'
import { projectType } from './documents/collections/projectType'
import { faviconType } from './documents/site/favicons'
import { siteSettings } from './documents/site/siteSettings'
import { pageMetaDataType } from './objects/site/pageMetaData'

export const schemaTypes = [
  projectType,
  projectCategory,
  siteSettings,
  pageMetaDataType,
  faviconType,
]
