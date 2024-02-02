/**
 * Get the bounds of the map
 * @param {google.maps.Map} map - The map object
 * @returns {Bounds} - Object with lat and lon bounds
 */
export default function getMapBounds(map: google.maps.Map) {
  return {
    lat: {
      min: map.getBounds()?.getSouthWest().lat() || 0,
      max: map.getBounds()?.getNorthEast().lat() || 0,
    },
    lon: {
      min: map.getBounds()?.getSouthWest().lng() || 0,
      max: map.getBounds()?.getNorthEast().lng() || 0,
    },
  };
}

export type Bounds = {
  lat: { min: number; max: number };
  lon: { min: number; max: number };
};
