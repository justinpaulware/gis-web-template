const LAYERS = [
    {
        id: "opportunities",
        name: "Opportunity Sites",
        source: {
            type: "sheet",
            url: "PASTE_GOOGLE_SHEET_CSV"
        },
        geometry: "point"
    },

    {
        id: "counties",
        name: "Counties",
        source: {
            type: "rest",
            url: "https://services6.arcgis.com/EbVsqZ18sv1kVJ3k/arcgis/rest/services/NYS_Civil_Boundaries/FeatureServer/2/query?where=1=1&outFields=*&f=geojson"
        },
        geometry: "fill"
    }
];
