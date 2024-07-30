import { CalendarIcon, UsersIcon, PinIcon } from '@sanity/icons';
import { StructureResolver } from 'sanity/structure';

const hiddenTypes: string[] = ['articleDeLoi']; // Add the IDs of the document types you want to hide

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Add custom items as needed
      S.listItem().title('Home').schemaType('home').icon(CalendarIcon),
      S.listItem().title('Users').schemaType('user').icon(UsersIcon),
      S.listItem().title('Pins').schemaType('pin').icon(PinIcon),

      // Add all document types except the hidden ones
      ...S.documentTypeListItems().filter(
        (item) => !hiddenTypes.includes(item.getId() || '')
      ),
    ]);
