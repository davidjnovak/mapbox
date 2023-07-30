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

    properties.forEach(property => {
      var marker = new mapboxgl.Marker({ 
          color: property.isActive ? '#5940b3': '#cccccc',
          size: 'small',
          shadow: 'false'
      })
      .setLngLat([property.lng, property.lat])
      .addTo(map);
  
      var popup = new mapboxgl.Popup()
          .setHTML(`
              <h3>${property.name}</h3>
              <p>Nickname: ${property.nickname}</p>
              <p>Active: ${property.isActive ? 'Yes' : 'No'}</p>
              <p>Address: ${property.address}</p>
          `);
  
      marker.setPopup(popup);
  });
});
