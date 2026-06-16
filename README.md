# GIS Web Template

A lightweight, config-driven GIS viewer using:
- MapLibre GL
- Google Sheets (CSV)
- ArcGIS REST
- GitHub Pages

---

## How to use

1. Click **"Use this template"**
2. Edit `config.js`
3. Add your data sources
4. Enable GitHub Pages
5. Done

---

## Data formats

### Google Sheets
Must include:
- Latitude
- Longitude
- Category (optional for styling)

### REST
Must return GeoJSON:
`.../query?where=1=1&outFields=*&f=geojson`

---

## No coding required per project

All customization happens in `config.js`
