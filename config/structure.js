import { supportedLanguages } from './supportedLanguages'
import { prettyTitles } from './prettyTitles'

export const structure = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // 🔹 Ajustes del sitio y HomePage como documentos únicos
      ...supportedLanguages.map((lang) =>
        S.listItem()
          .title(lang.title)
          .id(`lang-${lang.id}`)
          .child(
            S.list()
              .title(`Contenido en ${lang.title}`)
              .items([
                // 🔹 project filtrado por idioma
                S.listItem()
                  .title(prettyTitles.projectType?.[lang.id] || 'Proyectos')
                  .id(`project-${lang.id}`)
                  .child(
                    S.documentList()
                      .title(prettyTitles.projectType?.[lang.id])
                      .filter('_type == "projectType" && language == $lang')
                      .params({ lang: lang.id }),
                  ),
              ]),
            //   .items([
            //     //projectType
            //     S.listItem()
            //       .title('Proyectos')
            //       .id(`project-${lang.id}`)
            //       .child(
            //         S.documentList()
            //           .title('proye'.projectType?.[lang.id])
            //           .filter('_type == "projectType" && language == $lang')
            //           .params({ lang: lang.id }),
            //       ),
            //   ]),
          ),
      ),
    ])
