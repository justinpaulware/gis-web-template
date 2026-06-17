let map;

function initMap() {

    map = new maplibregl.Map({
        container: "map",
        style: "https://tiles.openfreemap.org/styles/positron",
        center: [-73.9209, 41.2901],
        zoom: 8
    });

    map.on("load", () => {
        loadSheetLayer();
    });
}

function loadSheetLayer() {

    const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOmFRs9WqWbsV18n0Ulujr-yNGiyEfFmiDzKQEXBuDBh-Cak-ZQdhczddXWLnRQcDk_1dmAawjtqb6/pub?output=csv";

    Papa.parse(csvURL, {
        download: true,
        header: true,

        complete: (res) => {

            const geojson = {
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

            map.addSource("sheet", {
                type: "geojson",
                data: geojson
            });

            map.addLayer({
                id: "sheet-layer",
                type: "circle",
                source: "sheet",

                paint: {
                    "circle-radius": 6,
                    "circle-color": "#2563eb",
                    "circle-stroke-width": 1,
                    "circle-stroke-color": "#fff"
                }
            });

        }
    });
}
