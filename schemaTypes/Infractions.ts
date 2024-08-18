// **Document Type: Infraction (Offense)**

export default {
  name: "infraction", // **Crucial for Normalization: Unique Document Identifier**
  // A unique identifier for each offense document ensures distinct identities, making it easier to manage and reference specific offenses.

  title: "Infraction",
  type: "document",
  fields: [
    {
      name: "nom", // **Crucial for Normalization: Unique Offense Name**
      // A unique offense name helps distinguish individual offenses and provides a clear name for referencing and identifying offenses.

      type: "string",
      title: "Nom de l'Infraction", // Offense Name
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Détails de l'Infraction", // Details of the Offense
      validation: (rule) => rule.required(),
    },
    {
      name: "loi", // **Crucial for Modularization: Reusable Law Reference**
      // By using a reference to the relevant law document, you can reuse law information across multiple offenses, reducing redundancy and improving data management.

      type: "reference",
      to: [{ type: "loi" }],
      title: "Loi", // Law
      description: "Référence au document de Loi pertinent", // Reference to the relevant Law document
    },
    {
      name: "donnees", // **Crucial for Modularization: Encapsulated Offense Data**
      // Encapsulating offense data within a dedicated object promotes modularity by grouping related data together, making it easier to manage and access offense-specific information.

      type: "object",
      title: "Données de l'Infraction", // Offense Data
      fields: [
        // Ajouter des champs pour les métriques clés de l'infraction (ex: statistiques

