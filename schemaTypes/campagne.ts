// **Document Type: Campagne (Campaign)**

export default {
  name: "campagne", // **Crucial for Normalization: Unique Document Identifier**
  // This unique identifier ensures that each campaign document has a distinct identity, making it easier to retrieve, manage, and reference specific campaigns.

  title: "Campagne",
  type: "document",
  fields: [
    {
      name: "titre", // **Crucial for Normalization: Unique Campaign Title**
      // A unique campaign title helps distinguish individual campaigns and provides a clear name for referencing and identifying campaigns.

      type: "string",
      title: "Nom de la Campagne", // Campaign Name
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Brève Présentation", // Brief Overview
      validation: (rule) => rule.required(),
    },
    {
      name: "partenaires", // **Crucial for Modularization: Reusable Partner References**
      // By using references to partner documents, you can reuse partner information across multiple campaigns, reducing redundancy and improving data management.

      type: "array",
      title: "Partenaires", // Partners
      of: [{ type: "reference", to: [{ type: "partenaire" }] }],
      description: "Références aux documents Partenaire avec des images réutilisables", // References to Partner documents with reusable images
    },
    {
      name: "donnees", // **Crucial for Modularization: Encapsulated Campaign Data**
      // Encapsulating campaign data within a dedicated object promotes modularity by grouping related data together, making it easier to manage and access campaign-specific information.

      type: "object",
      title: "Données de la Campagne", // Campaign Data
      fields: [
       
        // Add fields for key campaign metrics (e.g., target audience, fundraising goals)
      ],
    },
    {
      name: "infractions", // **Crucial for Modularization: Encapsulated Offense References**
      // Encapsulating offense references within a dedicated array promotes modularity by separating campaign-related offenses, making it easier to manage and retrieve associated offenses.

      type: "array",
      title: "Infractions", // Offenses
      of: [{ type: "reference", to: [{ type: "infraction" }] }],
      description: "Références aux documents Infraction", // References to Offense documents
    },
  ],
};
