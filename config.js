const PROJECTS = {
  default: {
    name: "Default Map",
    layers: []
  },

  peekskill: {
    name: "Peekskill Example",

    layers: [
      {
        id: "community_points",
        name: "Community Points",
        type: "sheet",

        url: "PASTE_GOOGLE_SHEET_CSV_URL",

        geometry: "point",
        latField: "Latitude",
        lngField: "Longitude",

        style: {
          type: "categorical",
          field: "Category",

          stops: [
            { value: "Asset", color: "#2563eb" },
            { value: "Opportunity", color: "#f59e0b" },
            { value: "Concern", color: "#ef4444" }
          ],

          default: "#999999",
          radius: 6
        }
      },

      {
        id: "parcels",
        name: "Parcels",
        type: "rest",

        url: "PASTE_GEOJSON_OR_FEATURESERVER_URL",

        geometry: "polygon",

        style: {
          fill: "#10b981",
          opacity: 0.3
        }
      }
    ]
  }
};
