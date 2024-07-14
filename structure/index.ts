import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'
import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([S.listItem().title('Home').schemaType('home').icon(CalendarIcon)])
