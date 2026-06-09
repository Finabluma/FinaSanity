import { supportedLanguages } from './supportedLanguages'
import { prettyTitles } from './prettyTitles'
import { typeIcons } from './typeIcons'

export const structure = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Proyectos')
        .icon(typeIcons.project)
        .child(
          S.list()
            .title('Proyectos')
            .items([
              ...supportedLanguages.map((lang) =>
                S.listItem()
                  .title(prettyTitles.projectType?.[lang.id] || 'Proyectos')
                  .id(`lang-${lang.id}`)
                  .icon(lang.icon)
                  .child(
                    S.documentTypeList('projectType')
                      .title(prettyTitles.projectType?.[lang.id])
                      .filter('_type == "projectType" && language == $lang')
                      .params({ lang: lang.id }),
                  ),
              ),
              S.divider(),
              S.documentTypeListItem('projectType').title('Todas las lenguas'),
            ]),
        ),
      S.listItem()
        .title('Categorías')
        .icon(typeIcons.projectCategory)
        .child(
          S.list()
            .title('Categorías')
            .items([
              ...supportedLanguages.map((lang) =>
                S.listItem()
                  .title(
                    prettyTitles.projectCategory?.[lang.id] || 'Categorías',
                  )
                  .id(`lang-${lang.id}`)
                  .icon(lang.icon)
                  .child(
                    S.documentTypeList('projectCategory')
                      .title(prettyTitles.projectCategory?.[lang.id])
                      .filter('_type == "projectCategory" && language == $lang')
                      .params({ lang: lang.id }),
                  ),
              ),
              S.divider(),
              S.documentTypeListItem('projectCategory').title(
                'Todas las lenguas',
              ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Carruseles')
        .icon(typeIcons.carousel)
        .child(
          S.list()
            .title('Carruseles')
            .items([
              ...supportedLanguages.map((lang) =>
                S.listItem()
                  .title(prettyTitles.heroSliderType?.[lang.id] || 'Carruseles')
                  .id(`lang-${lang.id}`)
                  .icon(lang.icon)
                  .child(
                    S.documentTypeList('heroSliderType')
                      .title(prettyTitles.heroSliderType?.[lang.id])
                      .filter('_type == "heroSliderType" && language == $lang')
                      .params({ lang: lang.id }),
                  ),
              ),
              S.divider(),
              S.documentTypeListItem('heroSliderType').title(
                'Todas las lenguas',
              ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Ajustes del sitio')
        .icon(typeIcons.siteSettings)
        .child(
          S.list()
            .title('Ajustes del sitio')
            .items([
              S.documentListItem('siteSettings')
                .id('siteSettings')
                .schemaType('siteSettings'),
              S.documentListItem('faviconType')
                .id('faviconType')
                .schemaType('faviconType'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Metadata Traducciones')
        .icon(typeIcons.language)
        .child(
          S.documentTypeList('translation.metadata').title(
            'Metadata de traducciones',
          ),
        ),
    ])
