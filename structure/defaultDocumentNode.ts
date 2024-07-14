import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `home`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[_type == "home"]`,
            params: {id: `_id`},
            options: {perspective: 'previewDrafts'},
          })
          .title('Home'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
