const LAYERS = [
    {
        id: "community",
        name: "Community Input",
        source: {
            type: "sheet",
            url: "PASTE_GOOGLE_SHEET_CSV"
        },
        geometry: "point"
    },

    {
        id: "opportunity-sites",
        name: "Opportunity Sites",
        source: {
            type: "sheet",
            url: "PASTE_GOOGLE_SHEET_CSV"
        },
        geometry: "point"
    },

    {
        id: "zoning",
        name: "Zoning",
        source: {
            type: "rest",
            url: "PASTE_REST_FEATURESERVER_QUERY"
        },
        geometry: "fill"
    }
];
