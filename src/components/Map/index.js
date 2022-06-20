import React, { useEffect, useRef, useState } from "react";
import { Map } from "maplibre-gl";

export const MapLibre = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-58);
  const [lat, setLat] = useState(-38);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: [
              "https://statistics.cepal.org/geo/tiles//tiles01/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
          },
        },
        glyphs: "http://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
        layers: [
          {
            id: "simple-tiles",
            type: "raster",
            source: "raster-tiles",
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          height: "90vh",
          width: "90vw",
        }}
      />
    </div>
  );
};

export default MapLibre;
