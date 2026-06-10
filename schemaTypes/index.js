import { heroSliderType } from './documents/collections/heroSlider'
import { projectCategory } from './documents/collections/projectCategory'
import { projectType } from './documents/collections/projectType'
import { homeType } from './documents/singletons/homeType'
import { faviconType } from './documents/site/favicons'
import { siteSettings } from './documents/site/siteSettings'
import { pageMetaDataType } from './objects/site/pageMetaData'

export const schemaTypes = [
  homeType,
  projectType,
  projectCategory,
  siteSettings,
  pageMetaDataType,
  faviconType,
  heroSliderType,
]
