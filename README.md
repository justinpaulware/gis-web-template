# GIS Web Template v3

A lightweight, fully static web GIS framework for mapping, planning, and spatial analysis using Google Sheets and REST/GeoJSON data sources.

This system runs entirely in the browser and can be deployed directly through GitHub Pages with no backend or paid services.

---

## Overview

This template provides a simple but powerful GIS environment designed for planning workflows and spatial storytelling.

It allows users to load, visualize, filter, and inspect geospatial data from multiple sources while maintaining a clean, configuration-driven structure.

The system is intentionally designed to stay lightweight, open, and extensible.

---

## Core Capabilities

This template supports the following core functions:

It can load point data from published Google Sheets (CSV format) and vector data from REST or GeoJSON endpoints. Each dataset is treated as a layer in a unified map environment.

Layers are styled using field-driven rules, similar to GIS software like QGIS, where visual appearance is controlled by attribute values rather than hardcoded styling.

Users can filter data interactively through automatically generated UI controls that are derived directly from dataset attributes.

Each feature on the map can be clicked to reveal a full attribute inspector, allowing users to explore data in detail.

Layers can be toggled on and off, zoomed to extent, and managed through a simple sidebar interface.

A legend is automatically generated from layer styling rules to ensure visual consistency.

The system also supports multiple projects, allowing different configurations to be loaded via URL parameters.

Finally, users can build new layers directly through a simple interface and export full project configurations as reusable JSON files.

---

## Data Sources

This system supports two primary data inputs.

Google Sheets data must be published as a CSV and include latitude and longitude fields. Each row becomes a point feature on the map.

REST or GeoJSON sources must return valid GeoJSON feature collections. These can include points, lines, or polygons depending on the dataset.

---

## Styling System

The styling model is field-driven, meaning visual appearance is controlled by data attributes.

Each layer defines a field used for styling, along with a set of value-to-color mappings. This allows consistent categorical visualization across datasets.

If a value is not explicitly defined in the style rules, a default color is applied.

This approach mirrors traditional GIS symbology systems while remaining lightweight and browser-based.

---

## Filtering System

Filters are automatically generated based on available attribute values in each dataset.

Each layer with a defined styling field will produce a dropdown filter.

Selecting a value dynamically updates the map to show only matching features.

Filters operate independently per layer and can be combined across multiple datasets.

---

## Feature Inspection

Clicking on any map feature opens an inspector panel.

This panel displays all available attributes for that feature, grouped by dataset.

If the feature belongs to a specific layer, that context is preserved in the inspector view.

The system also supports zooming directly to selected features for spatial focus.

---

## Legend

The legend is automatically generated from the layer styling configuration.

For categorical layers, each value-color pair is displayed as a legend item.

For simple styled layers, a single representative symbol is shown.

The legend always reflects the current configuration without manual updates.

---

## Layer Management

Each layer can be toggled on or off using a sidebar control.

Layers can also be zoomed to their full spatial extent.

The system supports multiple simultaneous layers without conflict.

---

## Project System

Maps are organized into projects defined in a configuration file.

Each project contains a set of layers and styling rules.

Projects can be switched using a URL parameter, allowing multiple map configurations to be hosted in a single deployment.

For example, a URL can specify a project like this:

?project=peekskill

This loads a fully different map configuration without changing the codebase.

---

## No-Code Layer Builder

The system includes a lightweight interface for adding new layers directly in the browser.

Users can input a data URL, define a layer name, and optionally specify a field for styling.

New layers are immediately added to the map and become part of the active project state.

---

## Export System

The current map state can be exported as a JSON file.

This allows users to save, share, or reuse configurations in other projects or deployments.

Exported files preserve layer structure, styling rules, and project definitions.

---

## Architecture

The system follows a simple pipeline:

Data is loaded from external sources and converted into GeoJSON.

Styling rules are applied based on attribute fields.

Layers are rendered using MapLibre GL in the browser.

Filters, legends, and inspectors are generated from the same configuration model.

This ensures that all UI components remain synchronized with the underlying data model.

---

## Technology Stack

This system is built using:

MapLibre GL JS for map rendering

PapaParse for CSV parsing from Google Sheets

Vanilla JavaScript for all application logic

GitHub Pages for deployment

No backend services are required.

---

## Purpose

This template is designed for planning teams, researchers, designers, and civic mapping workflows that require flexibility without the overhead of enterprise GIS systems.

It prioritizes clarity, transparency, and adaptability over complexity.

---

## Future Extensions

The system is structured to support future enhancements such as spatial editing, time-based datasets, advanced filtering logic, and collaborative map editing workflows.

These features can be added without changing the core architecture.

---

## License

This template is intended for open adaptation in planning, research, and design contexts.
