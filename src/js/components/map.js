import L from 'leaflet';

class Map {
  _coords = [1.3521, 103.8128];
  _zoom = 11;
  _locateZoom = 17;
  _map = L.map('map').setView(this._coords, this._zoom);

  init(stores) {
    this._loadmap();
    this._addMarkers(stores);
  }

  _loadmap() {
    L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      minZoom: 10,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this._map);
  }

  _addMarkers(stores) {
    stores.forEach(store => {
      this._addMarker(store.coords);
    });
  }

  _addMarker(coords) {
    L.marker(coords).addTo(this._map);
  }

  locateMarker(coords) {
    this._map.setView(coords, this._locateZoom);
  }
}

export default new Map();
