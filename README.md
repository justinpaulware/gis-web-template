# GIS Web Map Template v1.0

A lightweight, open-source GIS web mapping template using:

- MapLibre GL JS
- Google Sheets (live data)
- ArcGIS FeatureServer REST
- Attribute-based styling
- Auto-generated legend
- Layer toggles

---

## How to use

1. Clone repo
2. Edit `layers.js`
3. Add data sources:
   - Google Sheets CSV
   - ArcGIS REST FeatureServer query
4. Enable GitHub Pages
5. Deploy

---

## Data requirements (Google Sheets)

Must include:

- Latitude
- Longitude
- Type (Asset / Opportunity / Concern)

---

## Philosophy

This template treats:

- Sheets = participatory data
- REST = authoritative GIS data
- MapLibre = rendering engine
- GitHub Pages = deployment layer
