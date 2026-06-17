const CONFIG = {

  filters: [
    {
      id: "category",
      label: "Category",
      field: "Category",
      options: ["All", "Community Asset", "Opportunity Site", "Concern", "Vacant Building"]
    }
  ],

  layers: [
    {
      id: "community",
      name: "Community Points",
      type: "sheet",
      url: "PASTE_GOOGLE_SHEET_CSV_URL",
      group: "Community",

      style: "circle",

      colorField: "Category",
      colorMap: {
        "Community Asset": "#2563eb",
        "Opportunity Site": "#f59e0b",
        "Concern": "#ef4444",
        "Vacant Building": "#6b7280"
      },

      paint: {
        "circle-radius": 6,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#ffffff"
      }
    }
  ]
};