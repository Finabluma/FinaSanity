import { supportedLanguages } from './supportedLanguages'
import { prettyTitles } from './prettyTitles'
import { typeIcons } from './typeIcons'

export const structure = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // 🔹 Ajustes del sitio y HomePage como documentos únicos
      ...supportedLanguages.map((lang) =>
        S.listItem()
          .title(lang.title)
          .id(`lang-${lang.id}`)
          .icon(lang.icon)
          .child(
            S.list()
              .title(`Contenido en ${lang.title}`)
              .items([
                // 🔹 siteSettings
                S.listItem()
                  .title(prettyTitles.siteSettings?.[lang.id] || 'Ajustes')
                  .id(`site-settings-${lang.id}`)
                  .icon(typeIcons.siteSettings)
                  .child(
                    S.document()
                      .schemaType('siteSettings')
                      .documentId(`siteSettings_${lang.id}`),
                  ),
                // 🔹 project filtrado por idioma
                S.divider(),
                S.listItem()
                  .title(prettyTitles.projectType?.[lang.id] || 'Proyectos')
                  .id(`project-${lang.id}`)
                  .icon(typeIcons.project)
                  .child(
                    S.documentList()
                      .title(prettyTitles.projectType?.[lang.id])
                      .filter('_type == "projectType" && language == $lang')
                      .params({ lang: lang.id }),
                  ),
                // 🔹 projectCategory filtrado por idioma
                S.listItem()
                  .title(
                    prettyTitles.projectCategory?.[lang.id] || 'Categorías',
                  )
                  .id(`projectCategory-${lang.id}`)
                  .icon(typeIcons.projectCategory)
                  .child(
                    S.documentList()
                      .title(prettyTitles.projectCategory?.[lang.id])
                      .filter('_type == "projectCategory" && language == $lang')
                      .params({ lang: lang.id }),
                  ),
              ]),
          ),
      ),
      S.divider(),
      // 🔹 Añadimos la metadata de traducciones
      S.listItem()
        .title('Metadata Traducciones')
        .icon(typeIcons.language)
        .child(
          S.documentTypeList('translation.metadata').title(
            'Metadata de traducciones',
          ),
        ),
    ])
