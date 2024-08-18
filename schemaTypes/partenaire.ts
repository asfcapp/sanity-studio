// partnerReference.js
export default {
  name: 'partnerReference',
  type: 'document',
  title: 'Partner Reference',
  fields: [
    // ... fields for partner information
  ],
};

// A generic partner document. ROJ and Campaign schemas will specify if they need this partner.

// roj.js
export default {
  name: 'roj',
  type: 'document',
  title: 'ROJ',
  fields: [
    {
      name: 'partners',
      type: 'array',
      title: 'Partners',
      of: [{ type: 'reference', to: { type: 'partnerReference' } }],
      // A ROJ can have multiple partners.
    },
    // ... other ROJ fields
  ],
};

// campaign.js
export default {
  name: 'campaign',
  type: 'document',
  title: 'Campaign',
  fields: [
    {
      name: 'partners',
      type: 'array',
      title: 'Partners',
      of: [{ type: 'reference', to: { type: 'partnerReference' } }],
      // A campaign can have multiple partners.
    },
    // ... other campaign fields
  ],
};

// Example of how ROJ and Campaign might use partnerReference:

// ROJ:
// {
//   name: "ROJ 1",
//   partners: [
//     {
//       _ref: "partnerReferenceId1" // Reference to a specific partner
//     },
//     {
//       _ref: "partnerReferenceId2" // Reference to another partner
//     }
//   ]
// }

// Campaign:
// {
//   name: "Campaign A",
//   partners: [
//     {
//       _ref: "partnerReferenceId2" // Reference to a partner also used in ROJ 1
//     },
//     {
//       _ref: "partnerReferenceId3" // Reference to a different partner
//     }
//   ]
// }
