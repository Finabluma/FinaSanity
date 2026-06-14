import { heroSliderType } from './documents/collections/heroSlider'
import { projectCategory } from './documents/collections/projectCategory'
import { projectType } from './documents/collections/projectType'
import { homeType } from './documents/singletons/homeType'
import { faviconType } from './documents/site/favicons'
import { siteSettings } from './documents/site/siteSettings'
import { heroBlockType } from './objects/heroBlock'
import { pageMetaDataType } from './objects/pageMetaData'
import { sliderType } from './objects/sliderType'

export const schemaTypes = [
  homeType,
  projectType,
  projectCategory,
  siteSettings,
  pageMetaDataType,
  faviconType,
  heroBlockType,
  sliderType,
  heroSliderType,
]
