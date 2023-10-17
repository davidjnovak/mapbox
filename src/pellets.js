mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2ZXlub3YiLCJhIjoiY2xrajh3ZXVhMDJyazNlbnRuYWZmZWwzaSJ9.hh5Hk6_pBV84NEUVNPvMXQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox',
    center: [-95, 38],
    zoom: 4
});

function createGeoJSONCircle(center, radiusInKm, points = 64) {
    const coords = {
        latitude: center.lat,
        longitude: center.lon
    };

    const km = 111.32;
    const ret = [];
    const distanceX = radiusInKm / (km * Math.cos((coords.latitude * Math.PI) / 180));
    const distanceY = radiusInKm / km;
    var theta, x, y;
    for (let i = 0; i < points; i++) {
        theta = (i / points) * (2 * Math.PI);
        x = distanceX * Math.cos(theta);
        y = distanceY * Math.sin(theta);
        ret.push([coords.longitude + x, coords.latitude + y]);
    }
    ret.push(ret[0]);

    return {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [ret]
        }
    };
}

const pelletPlants = [
    {
        name: "Morehouse Bioenergy",
        coordinates: {lon:-91.8720, lat:32.9559},
        info: "Yearly Acres: 12600",
        open_year: "2015",
    },
    {
        name: "Amite Bioenergy",
        coordinates: {lon:-91.0377, lat:31.1849},
        info: "Yearly Acres: 12600",
        open_year: "2015",
    },
    {
        name: "LaSalle Bioenergy",
        coordinates: {lon:-92.2792, lat:31.8785},
        info: "Yearly Acres: 12600",
        open_year: "2017",
    },
    {
        name: "Enviva Lucedale",
        coordinates: {lon:-88.5503, lat:30.9188},
        info: "Yearly Acres: 33600",
        open_year: "2022",
    },
    {
        name: "Enviva Waycross",
        coordinates: {lon:-82.4114, lat:31.2565},
        info: "Yearly Acres: 19200",
        open_year: "2011",
    },
    {
        name: "Enviva Northampton",
        coordinates: {lon:-77.6114, lat:36.5051},
        info: "Yearly Acres: 18000",
        open_year: "2013",
    },
    {
        name: "Enviva Southampton",
        coordinates: {lon:-76.9721, lat:36.6534},
        info: "Yearly Acres: 17880",
        open_year: "2015",
    },
    {
        name: "Enviva Cottondale",
        coordinates: {lon:-85.3911, lat:30.7401},
        info: "Yearly Acres: 17520",
        open_year: "2008",
    },
    {
        name: "Enviva Sampson",
        coordinates: {lon:-78.1839, lat:35.1210},
        info: "Yearly Acres: 14400",
        open_year: "2016",
    },
    {
        name: "Enviva Hamlet",
        coordinates: {lon:-79.6379, lat:34.9337},
        info: "Yearly Acres: 14400",
        open_year: "2019",
    },
    {
        name: "Enviva Greenwood",
        coordinates: {lon:-82.0634, lat:34.2290},
        info: "Yearly Acres: 14400",
        open_year: "2018",
    },
    {
        name: "Enviva Ahoskie",
        coordinates: {lon:-76.9656, lat:36.2690},
        info: "Yearly Acres: 14400",
        open_year: "2011",
    },
    {
        name: "Enviva Amory",
        coordinates: {lon:-88.4951, lat:33.9883},
        info: "Yearly Acres: 2880",
        open_year: "2010",
    },
    {
        name: "Fram Hazlehurst",
        coordinates: {lon:-82.5730, lat:31.8543},
        info: "Yearly Acres: 12000",
        open_year: "2021",
    },
    {
        name: "Fram Appling",
        coordinates: {lon:-82.4656, lat:31.8167},
        info: "Yearly Acres: 4800",
        open_year: "2009",
    },
    {
        name: "Fram Archer",
        coordinates: {lon:-81.9555, lat:31.2103},
        info: "Yearly Acres: 3264",
        open_year: "2018",
    },
    {
        name: "Fram Telfair",
        coordinates: {lon:-82.6795, lat:31.9227},
        info: "Yearly Acres: 3264",
        open_year: "2012",
    },
    {
        name: "Highland Pine Bluff",
        coordinates: {lon:-92.0671, lat:34.2655},
        info: "Yearly Acres: 18000",
        open_year: "2016",
    },
    {
        name: "Pinnacle - Aliceville",
        coordinates: {lon:-88.2442, lat:33.0764},
        info: "Yearly Acres: 12384",
        open_year: "2011",
    },
    {
        name: "Alabama Pellets Demopolis",
        coordinates: {lon:-87.9591, lat:32.4664},
        info: "Yearly Acres: 10632",
        open_year: "2022",
    },
    {
        name: "MRE Quitman",
        coordinates: {lon:-88.7340, lat:32.0457},
        info: "Yearly Acres: 8640",
        open_year: "2021",
    },
    {
        name: "MRE Jasper",
        coordinates: {lon:-85.6264, lat:35.0713},
        info: "Yearly Acres: 5760",
        open_year: "2017",
    },
    {
        name: "MRE Crossville",
        coordinates: {lon:-86.0369, lat:34.2760},
        info: "Yearly Acres: 2880",
        open_year: "2018",
    },
    {
        name: "Woodville Pellets",
        coordinates: {lon:-94.4322, lat:30.7424},
        info: "Yearly Acres: 12000",
        open_year: "2014"
    }
];
const geojson = {
    type: "FeatureCollection",
    features: []
};

map.on('load', function() {

pelletPlants.forEach(plant => {
    const circleFeature = createGeoJSONCircle(plant.coordinates, 80);
    geojson.features.push(circleFeature);
});

map.addSource('pelletPlantCircles', {
    type: 'geojson',
    data: geojson
});

map.addLayer({
    'id': 'pelletPlantCircleLayer',
    'type': 'fill',
    'source': 'pelletPlantCircles',
    'layout': {},
    'paint': {
        'fill-color': '#007cbf',
        'fill-opacity': 0.6
    }
});

const geojsonPelletPlants = {
    type: 'FeatureCollection',
    features: pelletPlants.map(plant => {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [plant.coordinates.lon, plant.coordinates.lat]
            },
            properties: plant
        };
    })
};

map.addSource('pelletPlantsSource', {
    type: 'geojson',
    data: geojsonPelletPlants
});

function handlePlantClick(e) {
    const pelletData = e.target.dataset;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<p>${pelletData.name}</p><p>${pelletData.info}</p>`)
        .addTo(map);
}

pelletPlants.forEach(plant => {
        const marker = new mapboxgl.Marker()
            .setLngLat(plant.coordinates)
            .setPopup(new mapboxgl.Popup().setText(plant.name))
            .addTo(map);

        marker.getElement().dataset.name = plant.name;
        marker.getElement().dataset.info = plant.info;
        marker.getElement().addEventListener('click', handlePlantClick);
    });
});