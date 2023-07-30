mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2ZXlub3YiLCJhIjoiY2xrajh3ZXVhMDJyazNlbnRuYWZmZWwzaSJ9.hh5Hk6_pBV84NEUVNPvMXQ';

class Property {
    constructor(name, isActive, lat, lng, address, nickname) {
      this.name = name;
      this.isActive = isActive;
      this.lat = lat;
      this.lng = lng;
      this.address = address;
      this.nickname = nickname;
    }
  }
  
  
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-77.7983, 34.2087], // Wrightsville Beach, NC
    zoom: 12
});

map.on('load', function () {
  var properties = [
    new Property(
      'some more bullshit', 
      true, 
      34.199719207021865, 
      -77.80212226925718, 
      '123 1st Street, Wrightsville Beach, NC, 12345',
      'Nickname1'
    ),
    new Property(
      'some bullshit', 
      false, 
      34.20221167793872, 
      -77.79992233293612,
      '456 2nd Street, Wrightsville Beach, NC, 67890',
      'Nickname2'
    ),
    new Property(
      'davids house lol', 
      true, 
      34.22035464520646, 
      -77.79015823190046,
      '789 3rd Street, Wrightsville Beach, NC, 28480',
      'Nickname3'
    ),
  ];

    // Add a source and layer for the properties
    map.addSource('properties', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': properties.map(function (property) {
                return {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [property.lng, property.lat]
                    },
                    'properties': {
                        'name': property.name,
                        'isActive': property.isActive,
                        'address': property.address,
                        'nickname': property.nickname
                    }
                };
            })
        }
    });
    properties.forEach(property => {
      new mapboxgl.Marker({ 
        color: property.isActive ? '#5940b3': '#cccccc'
    })
          .setLngLat([property.lng, property.lat])
          .addTo(map);
    });

    // Show a popup when an property marker is clicked
    map.on('click', 'properties', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(`
            <h3>${e.features[0].properties.name}</h3>
            <p>Nickname: ${e.features[0].properties.nickname}</p>
            <p>Active: ${e.features[0].properties.isActive === 'true' ? 'Yes' : 'No'}</p>
            <p>Address: ${e.features[0].properties.address}</p>
        `)
        .addTo(map);
    });
});
