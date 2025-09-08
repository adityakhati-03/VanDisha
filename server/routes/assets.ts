import { RequestHandler } from "express";

const assetsGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        layer: "NDVI",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.191, 28.617],
            [77.210, 28.617],
            [77.210, 28.633],
            [77.191, 28.633],
            [77.191, 28.617],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        layer: "NDWI",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.201, 28.620],
            [77.207, 28.620],
            [77.207, 28.626],
            [77.201, 28.626],
            [77.201, 28.620],
          ],
        ],
      },
    },
  ],
};

export const getAssets: RequestHandler = (_req, res) => {
  res.json(assetsGeoJson);
};
