let map;
window._layerData = {};

const STYLE_REGISTRY = {
    "Asset": "#10b981",
    "Opportunity": "#f59e0b",
    "Concern": "#ef4444",
    "default": "#6b7280"
};

function initMap() {

    map = new maplibregl.Map({
        container: "map",
        style: CONFIG.basemap,
        center: CONFIG.center,
        zoom: CONFIG.zoom
    });

    map.on("load", async () => {

        for (const layer of LAYERS) {
            await loadLayer(layer);
        }

        buildSidebar();
        buildGlobalLegend();

    });
}

async function loadLayer(layer) {

    const data = await loadData(layer.source);

    window._layerData[layer.id] = data.features || [];

    map.addSource(layer.id, {
        type: "geojson",
        data
    });

    addLayerToMap(layer);

}

async function loadData(source) {

    if (source.type === "sheet") {

        const res = await new Promise(resolve => {
            Papa.parse(source.url, {
                download: true,
                header: true,
                complete: resolve
            });
        });

        return {
            type: "FeatureCollection",
            features: res.data
                .filter(d => d.Latitude && d.Longitude)
                .map(d => ({
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [
                            parseFloat(d.Longitude),
                            parseFloat(d.Latitude)
                        ]
                    },
                    properties: d
                }))
        };
    }

    if (source.type === "rest") {
        const res = await fetch(source.url);
        return await res.json();
    }

    throw new Error("Unknown source type");
}

function addLayerToMap(layer) {

    if (layer.geometry === "point") {

        map.addLayer({
            id: layer.id,
            type: "circle",
            source: layer.id,

            paint: {
                "circle-radius": 6,

                "circle-color": [
                    "match",
                    ["get", "Type"],

                    "Asset", STYLE_REGISTRY.Asset,
                    "Opportunity", STYLE_REGISTRY.Opportunity,
                    "Concern", STYLE_REGISTRY.Concern,

                    STYLE_REGISTRY.default
                ],

                "circle-stroke-width": 1,
                "circle-stroke-color": "#fff"
            }
        });
    }

    if (layer.geometry === "fill") {

        map.addLayer({
            id: layer.id,
            type: "fill",
            source: layer.id,
            paint: {
                "fill-color": "#10b981",
                "fill-opacity": 0.3,
                "fill-outline-color": "#333"
            }
        });
    }

    buildLayerToggle(layer);
}

/* -----------------------
   SIDEBAR
------------------------ */

function buildSidebar() {
    buildLayerList();
}

/* Layer toggles */
function buildLayerToggle(layer) {

    const container = document.getElementById("layer-controls");

    const div = document.createElement("div");

    div.innerHTML = `
        <label>
            <input type="checkbox" id="toggle-${layer.id}" checked>
            ${layer.name}
        </label>
    `;

    container.appendChild(div);

    setTimeout(() => {

        document
            .getElementById(`toggle-${layer.id}`)
            .addEventListener("change", (e) => {

                map.setLayoutProperty(
                    layer.id,
                    "visibility",
                    e.target.checked ? "visible" : "none"
                );
            });

    }, 0);
}

/* -----------------------
   GLOBAL LEGEND
------------------------ */

function buildGlobalLegend() {

    const container = document.getElementById("layer-controls");

    const title = document.createElement("h3");
    title.innerText = "Legend";
    container.appendChild(title);

    const seen = new Set();

    Object.values(window._layerData).forEach(features => {
        features.forEach(f => {
            if (f.properties?.Type) {
                seen.add(f.properties.Type);
            }
        });
    });

    Array.from(seen).forEach(type => {

        const color = STYLE_REGISTRY[type] || STYLE_REGISTRY.default;

        const row = document.createElement("div");

        row.innerHTML = `
            <span style="
                display:inline-block;
                width:10px;
                height:10px;
                background:${color};
                margin-right:6px;
            "></span>
            ${type}
        `;

        container.appendChild(row);
    });
}
