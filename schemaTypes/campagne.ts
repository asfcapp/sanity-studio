import { defineType } from "sanity";
import {DocumentIcon} from '@sanity/icons'

export default defineType({
    name: 'campagne',
    title: "Campagne",
    type: "document",
    icon: DocumentIcon,
    fields: [
        {
            name: "nom",       
            type: "string",
            title: "Nom de l'Infraction", 
            validation: (rule) => rule.required(),
          },
          {
            name: "description",
            type: "text",
            title: "Détails de l'Infraction", 
            validation: (rule) => rule.required(),
          },
    ]
})