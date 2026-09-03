import { galleriesType } from './documents/collections/galleries'
import { projectCategory } from './documents/collections/projectCategory'
import { projectType } from './documents/collections/projectType'
import { sloganSequence } from './documents/collections/sloganSequence'
import { homeType } from './documents/singletons/homeType'
import { faviconType } from './documents/site/favicons'
import { siteSettings } from './documents/site/siteSettings'
import { ctaBlockType } from './objects/ctaBlockType'
// import { heroBlockType } from './objects/heroBlock'
import { heroSingleType } from './objects/heroSingle'
// import { heroSliderType } from './objects/heroSlider'
import { linkType } from './objects/linkType'
import { pageMetaDataType } from './objects/pageMetaData'
import { slidesBlock } from './objects/sliderBlock'
// import { sliderType } from './objects/sliderType'
import { textBlockType } from './objects/textBlockType'
import { textSequenceType } from './objects/TextSequence'

export const schemaTypes = [
  homeType,
  projectType,
  projectCategory,
  siteSettings,
  pageMetaDataType,
  faviconType,
  linkType,
  // heroBlockType,
  // sliderType,
  heroSingleType,
  // heroSliderType,
  textBlockType,
  ctaBlockType,
  textSequenceType,
  sloganSequence,
  slidesBlock,
  galleriesType,
]
