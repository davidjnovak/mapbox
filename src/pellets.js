mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2ZXlub3YiLCJhIjoiY2xrajh3ZXVhMDJyazNlbnRuYWZmZWwzaSJ9.hh5Hk6_pBV84NEUVNPvMXQ';
const geojson = {
  type: "FeatureCollection",
  features: []
};
const plantData = [
  {
    id: 1,
    name: "Morehouse Bioenergy",
    company: "Drax",
    city: "Bastrop",
    state: "LA",
    affectedPop: "183,793",
    port: "Baton Rouge",
    maxCap: 525000,
    yearlyAcres: 12600,
    openYear: 2015,
    potentialAcres: 113400,
    potentialPelllets: 4725000,
    lat: 32.9559,
    lon: -91.872,
    lossYear50: [24069.21, 23267.62, 20664.0, 26815.2, 30648.9, 26294.64, 25227.5, 24022.72, 23919.1, 27235.55, 22545.48, 21276.73, 24600.28, 28786.49, 27676.47, 29551.06, 29007.46, 25516.96, 19673.8, 12451.43, 14648.88],
    lossYear75: [50694.21, 46289.2, 43561.45, 57627.98, 60388.57, 59281.74, 57028.18, 52674.3, 53908.14, 60332.34, 45981.92, 50913.17, 53870.74, 62754.38, 55645.44, 62032.66, 62181.06, 54792.24, 45370.91, 32889.75, 32772.51],
    zip: 71220
  },
  {
    id: 2,
    name: "Amite Bioenergy",
    company: "Drax",
    city: "Gloster",
    state: "MS",
    affectedPop: "60,286",
    port: "Baton Rouge",
    maxCap: 525000,
    yearlyAcres: 12600,
    openYear: 2015,
    potentialAcres: "113400",
    potentialPelllets: 4725000,
    lat: 31.1849,
    lon: -91.0377,
    lossYear50: [20113.01, 17591.51, 19698.1, 18869.25, 25349.32, 16919.49, 20690.15, 21922.08, 16293.62, 19838.42, 17558.75, 21501.74, 24149.88, 24714.19, 21900.64, 29316.68, 29599.21, 26422.39, 22293.97, 16942.16, 15380.0],
    lossYear75: [41847.51, 35927.75, 37456.98, 39940.64, 53510.98, 44387.95, 42775.57, 46619.46, 32152.84, 38801.71, 36641.3, 41564.0, 42811.93, 44789.32, 40533.31, 51014.1, 52754.93, 45115.4, 40151.41, 33381.85, 28757.93],
    zip: 39638
  },
  {
    id: 3,
    name: "LaSalle Bioenergy",
    company: "Drax",
    city: "Urania",
    state: "LA",
    affectedPop: "33,210",
    port: "Baton Rouge",
    maxCap: 525000,
    yearlyAcres: 12600,
    openYear: 2017,
    potentialAcres: "88200",
    potentialPelllets: 3675000,
    lat: 31.8785,
    lon: -92.2792,
    lossYear50: [26879.28, 23073.61, 19679.92, 28928.17, 31760.74, 29230.51, 31747.11, 28156.2, 23057.72, 25944.01, 25098.71, 26356.07, 27522.63, 27850.97, 26557.29, 26772.78, 28500.72, 22484.0, 20199.63, 16811.52, 16362.64],
    lossYear75: [52167.8, 47235.26, 43569.54, 58382.38, 60361.75, 56140.98, 62928.35, 54242.66, 47725.16, 55754.73, 48788.76, 55634.12, 56376.82, 60262.06, 56114.33, 59238.44, 59475.26, 48781.9, 43682.44, 36784.08, 34613.03],
    zip: 71465
  },
  {
    id: 4,
    name: "Enviva Lucedale",
    company: "Enviva",
    city: "Lucedale",
    state: "MS",
    affectedPop: "38,392",
    port: "Pascagoula",
    maxCap: 1400000,
    yearlyAcres: 33600,
    openYear: 2022,
    potentialAcres: "67200",
    potentialPelllets: 2800000,
    lat: 30.9188,
    lon: -88.5503,
    lossYear50: [23349.42, 18982.83, 20549.38, 20018.78, 27093.71, 25553.21, 28909.29, 23815.61, 15650.12, 20774.41, 18910.52, 20685.62, 18494.65, 22840.49, 22838.23, 29994.87, 26041.11, 26849.99, 20825.2, 17830.03, 17331.47],
    lossYear75: [53482.69, 43238.07, 46911.01, 53913.59, 72295.56, 60491.98, 60781.2, 59333.91, 38973.98, 47112.84, 44038.39, 48842.31, 41691.11, 52217.38, 52715.58, 64615.34, 60085.21, 54169.55, 46203.51, 45401.82, 39405.11],
    zip: 39452
  },
  {
    id: 5,
    name: "Enviva Waycross",
    company: "Enviva",
    city: "Waycross",
    state: "GA",
    affectedPop: "85,189",
    port: "Savannah",
    maxCap: 800000,
    yearlyAcres: 19200,
    openYear: 2011,
    potentialAcres: "249600",
    potentialPelllets: 10400000,
    lat: 31.2565,
    lon: -82.4114,
    lossYear50: [37993.58, 36037.9, 26806.75, 36432.15, 32164.2, 37655.74, 60628.21, 35834.63, 27349.56, 38311.34, 61131.6, 52787.66, 45840.2, 47455.8, 44793.26, 50624.76, 75964.88, 36330.83, 35086.12, 28714.34, 28287.06],
    lossYear75: [72274.18, 65495.81, 53251.69, 71779.35, 64400.46, 72744.69, 100647.0, 66678.1, 51947.05, 68738.38, 92913.35, 98047.81, 83164.54, 85840.71, 80980.02, 99060.24, 126497.37, 71795.7, 72375.24, 57664.8, 53970.75],
    zip: 31503
  },
  {
    id: 6,
    name: "Enviva Northampton",
    company: "Enviva",
    city: "Garysburg",
    state: "NC",
    affectedPop: "86,679",
    port: "Chesapeake",
    maxCap: 750000,
    yearlyAcres: 18000,
    openYear: 2013,
    potentialAcres: "198000",
    potentialPelllets: 8250000,
    lat: 36.5051,
    lon: -77.6114,
    lossYear50: [23013.18, 21343.83, 18409.54, 25270.19, 27546.47, 27752.11, 27083.12, 25504.37, 22700.68, 24080.33, 18457.51, 19672.38, 27496.23, 32020.22, 32692.21, 34838.82, 39442.77, 32467.64, 31362.58, 26956.65, 28438.68],
    lossYear75: [47349.43, 43071.1, 35466.07, 49188.88, 54246.05, 56735.59, 52716.35, 51061.09, 40460.61, 44602.72, 36168.62, 38372.25, 47743.87, 56220.58, 58028.92, 64792.82, 69631.52, 58568.22, 54603.62, 48674.17, 48557.84],
    zip: 27831
  },
  {
    id: 7,
    name: "Enviva Southampton",
    company: "Enviva",
    city: "Franklin",
    state: "VA",
    affectedPop: "1,538,744",
    port: "Chesapeake",
    maxCap: 745000,
    yearlyAcres: 17880,
    openYear: 2015,
    potentialAcres: "160920",
    potentialPelllets: 6705000,
    lat: 36.6534,
    lon: -76.9721,
    lossYear50: [21622.72, 20037.37, 15395.13, 23547.73, 25345.59, 24232.71, 23266.62, 22034.64, 20443.9, 19597.48, 14916.47, 17100.56, 20815.01, 24931.91, 24905.62, 27313.38, 31019.2, 24984.45, 22719.22, 20728.1, 19433.58],
    lossYear75: [38065.94, 34675.08, 29762.56, 41422.79, 45988.02, 44420.03, 42792.21, 48811.4, 34969.95, 36515.48, 28041.34, 32556.2, 39697.08, 46730.35, 47058.44, 49789.53, 55000.51, 46833.14, 44048.9, 38430.32, 38844.15],
    zip: 23851
  },
  {
    id: 8,
    name: "Enviva Cottondale",
    company: "Enviva",
    city: "Cottondale",
    state: "FL",
    affectedPop: "70,532",
    port: "Panama City",
    maxCap: 730000,
    yearlyAcres: 17520,
    openYear: 2008,
    potentialAcres: "280320",
    potentialPelllets: 11680000,
    lat: 30.7401,
    lon: -85.3911,
    lossYear50: [16091.63, 17019.19, 27392.61, 22580.86, 18445.35, 25878.92, 19835.14, 21791.45, 19909.37, 22136.2, 22184.47, 30138.34, 27336.9, 30463.52, 29404.77, 31770.41, 29554.06, 51750.25, 73466.59, 27017.82, 19050.93],
    lossYear75: [31579.75, 32608.26, 43805.11, 41677.59, 34619.17, 46860.39, 39487.39, 41877.4, 36656.92, 40704.92, 39103.8, 54045.28, 49218.55, 54131.0, 51233.47, 59005.14, 63201.68, 83325.6, 97626.12, 52645.75, 42125.32],
    zip: 32431
  },
  {
    id: 9,
    name: "Enviva Sampson",
    company: "Enviva",
    city: "Faison",
    state: "NC",
    affectedPop: 48515,
    port: "Wilmington",
    maxCap: 600000,
    yearlyAcres: 14400,
    openYear: 2016,
    potentialAcres: "115200",
    potentialPelllets: 4800000,
    lat: 35.121,
    lon: -78.1839,
    lossYear50: [15874.57, 15160.5, 12474.95, 15626.57, 16784.89, 15806.37, 18133.8, 16288.56, 14963.66, 18589.08, 18957.02, 16529.84, 18111.74, 18739.14, 18859.85, 23103.42, 26917.79, 21931.0, 20573.41, 17602.66, 18041.02],
    lossYear75: [37253.36, 38710.0, 29704.64, 39084.66, 42715.22, 41011.93, 43758.13, 37861.23, 32130.24, 37426.28, 41324.19, 43115.44, 42031.46, 45539.38, 44963.51, 54483.57, 60355.69, 52260.74, 46861.61, 41640.44, 41521.65],
    zip: 28341
  },
  {
    id: 10,
    name: "Enviva Hamlet",
    company: "Enviva",
    city: "Hamlet",
    state: "NC",
    affectedPop: "125393",
    port: "Wilmington",
    maxCap: 600000,
    yearlyAcres: 14400,
    openYear: 2019,
    potentialAcres: "72000",
    potentialPelllets: 3000000,
    lat: 34.9337,
    lon: -79.6379,
    lossYear50: [22373.6, 19961.02, 12829.09, 23253.15, 22694.42, 23278.17, 20860.66, 18169.1, 14743.11, 21844.66, 16092.51, 22332.23, 21102.96, 23555.02, 28261.67, 30862.95, 30901.74, 26472.21, 23015.09, 22279.11, 21561.45],
    lossYear75: [43921.37, 40773.54, 28192.99, 46846.72, 46441.73, 47963.43, 44026.83, 39986.14, 29591.6, 44515.19, 35476.47, 43441.89, 43691.06, 49542.7, 55767.45, 62786.52, 64773.48, 56437.49, 48217.63, 45661.16, 44150.2],
    zip: 28345
  },
  {
    id: 11,
    name: "Enviva Greenwood",
    company: "Enviva",
    city: "Greenwood",
    state: "SC",
    affectedPop: "171,103",
    port: "Wilmington",
    maxCap: 600000,
    yearlyAcres: 14400,
    openYear: 2018,
    potentialAcres: "86400",
    potentialPelllets: 3600000,
    lat: 34.229,
    lon: -82.0634,
    lossYear50: [23868.67, 24833.61, 19348.16, 23784.85, 26850.82, 23088.66, 25324.12, 25715.26, 15382.44, 19846.33, 17685.9, 22428.34, 20517.5, 22425.19, 24209.62, 32319.9, 38413.71, 28624.0, 24979.81, 23034.46, 18573.6],
    lossYear75: [48679.23, 51778.04, 42974.12, 49223.85, 57464.66, 48718.88, 50822.17, 50746.58, 30684.89, 44480.27, 36316.1, 42792.55, 44512.89, 51302.06, 54827.06, 70821.15, 75843.72, 57966.98, 51091.67, 49514.77, 41566.23],
    zip: 29646
  },
  {
    id: 12,
    name: "Enviva Ahoskie",
    company: "Enviva",
    city: "Ahoskie",
    state: "NC",
    affectedPop: "66,278",
    port: "Chesapeake",
    maxCap: 600000,
    yearlyAcres: 14400,
    openYear: 2011,
    potentialAcres: "187200",
    potentialPelllets: 7800000,
    lat: 36.269,
    lon: -76.9656,
    lossYear50: [21875.7, 19766.38, 15387.83, 22326.06, 24504.21, 24374.69, 23493.33, 24667.4, 18198.05, 20654.28, 13785.85, 17611.26, 20411.65, 24873.08, 23682.91, 24996.81, 28245.97, 24061.24, 22576.37, 20785.65, 19335.43],
    lossYear75: [38470.97, 35312.03, 31345.26, 39442.3, 46832.18, 44209.57, 42803.05, 53010.02, 35576.07, 39814.72, 31041.67, 36290.2, 42144.24, 48173.21, 48294.16, 54395.75, 55092.95, 47821.82, 45346.58, 39377.12, 39390.57],
    zip: 27910
  },
  {
    id: 13,
    name: "Enviva Amory",
    company: "Enviva",
    city: "Amory",
    state: "MS",
    affectedPop: "83118",
    port: "Mobile",
    maxCap: 120000,
    yearlyAcres: 2880,
    openYear: 2010,
    potentialAcres: "40320",
    potentialPelllets: 1680000,
    lat: 33.9883,
    lon: -88.4951,
    lossYear50: [26258.08, 23638.41, 18941.27, 20561.97, 26554.13, 23520.79, 24641.37, 24047.19, 18057.31, 22056.28, 20711.14, 22446.53, 24743.79, 25203.02, 24245.77, 27658.02, 26142.58, 23189.06, 22357.3, 19438.73, 15990.67],
    lossYear75: [61149.55, 49068.25, 40202.4, 47368.3, 60981.7, 52247.65, 53904.52, 51532.12, 40480.94, 51892.36, 48375.89, 53361.91, 55208.28, 55825.25, 52708.22, 63427.09, 62688.62, 51609.51, 48711.46, 42231.8, 37076.08],
    zip: 38821
  },
  {
    id: 14,
    name: "Fram Hazlehurst",
    company: "Fram",
    city: "Hazlehurst",
    state: "GA",
    affectedPop: "72,977",
    port: "Brunswick",
    maxCap: 500000,
    yearlyAcres: 12000,
    openYear: 2021,
    potentialAcres: "36000",
    potentialPelllets: 1500000,
    lat: 31.8543,
    lon: -82.573,
    lossYear50: [29614.74, 25806.85, 20909.71, 32896.63, 32712.79, 35601.84, 33828.77, 30373.56, 24460.12, 32936.33, 38188.99, 47151.09, 45237.98, 40973.34, 37843.7, 46171.83, 43489.47, 39131.3, 37841.12, 29536.78, 32213.64],
    lossYear75: [68721.57, 65305.37, 48113.57, 69973.67, 67955.66, 75478.75, 95059.98, 70780.32, 53317.61, 69697.66, 88409.68, 91354.96, 82809.04, 85515.01, 84233.96, 99876.74, 95322.95, 79267.68, 75220.42, 62891.31, 60108.31],
    zip: 31539
  },
  {
    id: 15,
    name: "Fram Appling",
    company: "Fram",
    city: "Baxley",
    state: "GA",
    affectedPop: "67,491",
    port: "Brunswick",
    maxCap: 200000,
    yearlyAcres: 4800,
    openYear: 2009,
    potentialAcres: "72000",
    potentialPelllets: 3000000,
    lat: 31.8167,
    lon: -82.4656,
    lossYear50: [30561.57, 26717.01, 22106.1, 33877.02, 32332.33, 36027.08, 37801.82, 31442.73, 24975.22, 33927.6, 39656.14, 47170.69, 46495.6, 42467.85, 38871.8, 46105.73, 43845.46, 38537.52, 37415.36, 30393.61, 32196.12],
    lossYear75: [69458.95, 66382.54, 47764.89, 70360.35, 68521.44, 75718.42, 97300.62, 70899.28, 53490.42, 70153.2, 90529.59, 91871.8, 83411.75, 85895.98, 83069.83, 99822.78, 95179.6, 79689.48, 75060.29, 62271.05, 60085.11],
    zip: 31513
  },
  {
    id: 16,
    name: "Fram Archer",
    company: "Fram",
    city: "Nahunta",
    state: "GA",
    affectedPop: "74,110",
    port: "Brunswick",
    maxCap: 136000,
    yearlyAcres: 3264,
    openYear: 2018,
    potentialAcres: "19584",
    potentialPelllets: 816000,
    lat: 31.2103,
    lon: -81.9555,
    lossYear50: [35541.24, 30780.75, 24777.71, 31465.82, 27956.0, 33318.07, 59105.5, 32452.97, 23305.87, 32103.52, 58094.18, 39464.79, 37054.82, 40984.7, 37994.67, 47046.16, 70632.68, 32094.21, 30428.88, 25008.17, 24355.69],
    lossYear75: [64424.65, 58952.85, 46145.19, 63891.46, 54406.65, 62982.01, 90753.41, 56035.2, 43111.36, 59728.17, 84451.06, 83731.54, 71729.8, 73612.0, 70875.98, 84457.6, 111407.23, 60005.29, 60863.25, 47910.37, 44224.2],
    zip: 31553
  },
  {
    id: 17,
    name: "Fram Telfair",
    company: "Fram",
    city: "Lumber City",
    state: "GA",
    affectedPop: "63,169",
    port: "Brunswick",
    maxCap: 136000,
    yearlyAcres: 3264,
    openYear: 2012,
    potentialAcres: "39168",
    potentialPelllets: 1632000,
    lat: 31.9227,
    lon: -82.6795,
    lossYear50: [27628.06, 23457.85, 19859.7, 31630.66, 32528.87, 35400.71, 32385.92, 29882.69, 24164.85, 32527.36, 34038.17, 45639.61, 43104.56, 39198.03, 34852.49, 45148.86, 42620.37, 38722.53, 37045.12, 29601.76, 32476.39],
    lossYear75: [66608.31, 62507.54, 46618.96, 65718.22, 64956.24, 73990.34, 86701.82, 69029.47, 51986.51, 65760.54, 80153.55, 87735.39, 79826.01, 82401.4, 82173.34, 97113.03, 92778.35, 78268.62, 73984.7, 62435.44, 59020.41],
    zip: 31549
  },
  {
    id: 18,
    name: "Highland Pine Bluff",
    company: "Highland",
    city: "Pine Bluff",
    state: "AR",
    affectedPop: "86,412",
    port: "Baton Rouge",
    maxCap: 750000,
    yearlyAcres: 18000,
    openYear: 2016,
    potentialAcres: "144000",
    potentialPelllets: 6000000,
    lat: 34.2655,
    lon: -92.0671,
    lossYear50: [27184.97, 26662.57, 14991.82, 29916.27, 22632.14, 30276.1, 25194.88, 20693.93, 21747.77, 25611.73, 19780.2, 21090.96, 23548.22, 23797.42, 21106.56, 24145.17, 22870.49, 23606.9, 18474.91, 13466.31, 14004.37],
    lossYear75: [51407.4, 47318.11, 35309.36, 56131.7, 47577.37, 58668.32, 50000.48, 44403.45, 43784.82, 53735.0, 41113.95, 43715.85, 45371.41, 48636.58, 43687.45, 53806.4, 56000.17, 48078.94, 38237.53, 30750.48, 30807.92],
    zip: 71602
  },
  {
    id: 19,
    name: "Pinnacle - Aliceville",
    company: "Drax",
    city: "Aliceville",
    state: "AL",
    affectedPop: "76,951",
    port: "Mobile",
    maxCap: 516000,
    yearlyAcres: 12384,
    openYear: 2011,
    potentialAcres: "160992",
    potentialPelllets: 6708000,
    lat: 33.0764,
    lon: -88.2442,
    lossYear50: [29483.81, 25801.98, 23625.82, 25483.78, 32813.55, 28783.25, 31820.06, 31200.29, 22080.19, 26026.33, 30209.02, 31413.97, 32072.8, 34022.7, 32539.09, 35393.27, 34404.62, 27321.84, 27089.69, 20741.97, 19344.68],
    lossYear75: [74010.98, 61974.19, 58275.46, 61595.19, 76140.25, 67128.72, 73015.36, 73419.44, 54215.68, 67301.82, 71046.11, 73980.58, 73675.61, 81378.4, 73793.86, 81945.45, 80390.46, 67936.57, 65539.7, 54281.75, 48959.37],
    zip: 35442
  },
  {
    id: 20,
    name: "Alabama Pellets Demopolis",
    company: "Drax",
    city: "Demopolis",
    state: "AL",
    affectedPop: "18,996",
    port: "Mobile",
    maxCap: 443000,
    yearlyAcres: 10632,
    openYear: 2022,
    potentialAcres: "21264",
    potentialPelllets: 886000,
    lat: 32.4664,
    lon: -87.9591,
    lossYear50: [34849.37, 28177.08, 31758.0, 31435.17, 36973.97, 36123.31, 41129.75, 42746.59, 29322.8, 32643.97, 35688.16, 39630.55, 34540.79, 41675.01, 39717.64, 43071.49, 43017.2, 33575.41, 32408.81, 26273.01, 24198.74],
    lossYear75: [77180.7, 67492.02, 65621.45, 74037.46, 82964.52, 73621.83, 86526.43, 90681.82, 62384.08, 73361.73, 75010.62, 82326.7, 75740.85, 86118.98, 82794.42, 96215.01, 94462.81, 76042.69, 74065.72, 62232.17, 56905.41],
    zip: 36732
  },
  {
    id: 21,
    name: "MRE Quitman",
    company: "MRE",
    city: "Quitman",
    state: "MS",
    affectedPop: "71,962",
    port: "Mobile",
    maxCap: 360000,
    yearlyAcres: 8640,
    openYear: 2021,
    potentialAcres: "25920",
    potentialPelllets: 1080000,
    lat: 32.0457,
    lon: -88.734,
    lossYear50: [35630.49, 28999.68, 32271.21, 34665.35, 41046.14, 30794.73, 39777.14, 39116.19, 29499.26, 37570.9, 31165.15, 38674.44, 36848.63, 43895.88, 42163.31, 50474.57, 48877.77, 37808.9, 35503.09, 31043.2, 26316.61],
    lossYear75: [76992.57, 62717.93, 65952.35, 74101.13, 89078.79, 70893.02, 82281.21, 86715.37, 57073.15, 75821.43, 69180.86, 77058.94, 74699.61, 88605.61, 83689.29, 98308.78, 99879.91, 80612.68, 71727.89, 64429.59, 56404.09],
    zip: 39355
  },
  {
    id: 22,
    name: "MRE Jasper",
    company: "MRE",
    city: "Jasper",
    state: "TN",
    affectedPop: "444,356",
    port: "Mobile",
    maxCap: 240000,
    yearlyAcres: 5760,
    openYear: 2017,
    potentialAcres: "40320",
    potentialPelllets: 1680000,
    lat: 35.0713,
    lon: -85.6264,
    lossYear50: [15736.34, 11651.82, 7300.97, 15012.59, 11545.09, 10702.35, 11081.27, 13824.82, 6127.27, 8292.13, 9767.16, 7320.59, 5907.71, 7093.4, 7608.43, 11785.79, 10990.41, 7029.41, 7064.52, 6236.4, 6120.06],
    lossYear75: [31538.0, 23873.13, 16528.58, 29962.3, 23856.35, 23888.38, 24756.55, 27284.95, 14014.53, 18633.2, 21267.72, 17308.19, 14053.01, 15877.51, 19460.29, 27149.33, 27670.16, 16780.08, 16995.22, 14879.87, 15511.63],
    zip: 37347
  },
  {
    id: 23,
    name: "MRE Crossville",
    company: "MRE",
    city: "Crossville",
    state: "AL",
    affectedPop: "149,582",
    port: "Mobile",
    maxCap: 120000,
    yearlyAcres: 2880,
    openYear: 2018,
    potentialAcres: "17280",
    potentialPelllets: 720000,
    lat: 34.276,
    lon: -86.0369,
    lossYear50: [14792.15, 13739.32, 9435.77, 17927.57, 13958.87, 14740.23, 13578.28, 15049.22, 8078.72, 11522.13, 15352.38, 11577.02, 10939.67, 12334.89, 12370.95, 19484.47, 21518.86, 12919.51, 11449.19, 9570.41, 8416.54],
    lossYear75: [34574.29, 29795.41, 23932.37, 37294.88, 30194.32, 31868.53, 31212.4, 34135.4, 19810.59, 26500.12, 29216.72, 27111.86, 25040.39, 28508.36, 29590.57, 40248.96, 44037.45, 28740.65, 27638.99, 21948.68, 21635.27],
    zip: 35962
  },
  {
    id: 24,
    name: "Woodville Pellets",
    company: "Woodville",
    city: "Woodville",
    state: "TX",
    affectedPop: "53,052",
    port: "Port Arthur",
    maxCap: 500000,
    yearlyAcres: 12000,
    openYear: 2014,
    potentialAcres: "120000",
    potentialPelllets: 5000000,
    lat: 30.7424,
    lon: -94.4322,
    lossYear50: [33621.89, 30877.05, 27121.35, 40365.85, 44099.86, 38421.48, 38368.04, 41596.73, 36674.21, 41612.32, 58057.97, 35867.62, 36525.68, 35758.89, 31835.22, 36367.2, 34742.06, 24656.17, 19486.46, 27830.29, 20056.73],
    lossYear75: [62008.05, 55153.71, 49712.91, 71958.37, 75088.6, 65449.99, 72522.49, 73386.2, 61834.84, 72509.74, 88207.41, 64655.63, 67879.0, 67901.09, 60283.73, 68399.51, 64527.17, 48919.28, 43147.93, 55723.0, 41479.67],
    zip: 75979
  }
]

document.addEventListener('DOMContentLoaded', function() { 
});
let circleFeature50;
let circleFeature75;
let features50 = [];
let features75 = [];
let facilities = [];
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
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
function addCirclesToMap(){
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
}
function updateCircleData(data) {
  if (map.getSource('pelletPlantCircles')) {
    map.getSource('pelletPlantCircles').setData(data);
  }
}

let plantCircles = {};
map.on('load', function() {
  plantData.forEach(plant => {
    coords = {lon: plant.lon, lat: plant.lat}
    circleFeature50 = createGeoJSONCircle(coords, 80);
    circleFeature75 = createGeoJSONCircle(coords, 120);
    plantCircles[plant.id] = {
      '50': createGeoJSONCircle(coords, 80),
      '75': createGeoJSONCircle(coords, 120)
    };
    features50.push(circleFeature50);
    features75.push(circleFeature75);
    geojson.features.push(circleFeature50); 
  });
  
  const avg_75_loss_difference = [ 5723.60, -545.19, 13999.25, 51710.48, -11951.53, -11447.59, -6057.30, -16552.81, -7833.45, 1009.81, 3162.17, -5827.40, -1046.69, 75686.39, -12542.60, 17928.58, -10186.24, 7016.72, -3086.07, 76942.26, 76486.87, 6141.96, 6915.31, 13093.39 ];
  const avg_50_loss_difference = [ 3328.39, -2851.73, 7924.76, 22254.24, -5466.16, -8559.76, -3153.43, -10730.89, -3887.93, 322.00, 1952.21, -1836.78, -92.92, 35091.46, -9107.97, 11967.62, -7323.53, 5164.20, -1495.55, 35188.42, 36768.70, 3490.23, 4039.07, 10644.33 ];
  const invertedDifference = [ -3328.39, 2851.73, -7924.76, -22254.24, 5466.16, 8559.76, 3153.43, 10730.89, 3887.93, -322, -1952.21, 1836.78, 92.92, -35091.46, 9107.97, -11967.62, 7323.53, -5164.2, 1495.55, -35188.42, -36768.7, -3490.23, -4039.07, -10644.33 ]
  const canvas2 = document.getElementById("scatter");
  console.log(facilities)
  new Chart(canvas2, {
    type: 'scatter',
    data: {
      labels: facilities,
      datasets: [
        {
          label: "Pellet Production vs. Increase in Loss",
          data: invertedDifference.map((value, index) => ({
            x: value,
            y: plantData[index].potentialAcres  // assuming y-axis is the index/sequence of the data
          })),
          backgroundColor: 'rgb(77, 179, 98)'
        }
      ]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Increase in Loss'
          },
          type: 'linear',
          position: 'bottom'
        },
        y: {
          title: {
            display: true,
            text: 'Pellet Production'
          },
        }
      }
    }
  });
  
  addCirclesToMap()
  
  const geojsonPelletPlants = {
    type: 'FeatureCollection',
    features: plantData.map(plant => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [plant.lon, plant.lat]
        },
        properties: plant
      };
    })
  };
  
  map.addSource('pelletPlantsSource', {
    type: 'geojson',
    data: geojsonPelletPlants
  });
  let lossChart;
  let currentPlant;
  let currentData = '50';  // default value
  
  document.getElementById('toggleButton').addEventListener('click', function() {
    //TODO make toggle work when no chart is displayed 
    if (currentData === '50') {
      if (lossChart){ 
        lossChart.data.datasets[0].hidden = true;
        lossChart.data.datasets[1].hidden = false;
        lossChart.update()
      }
      if (plantCircles[currentPlant.id]){ 
        geojson.features = [];
        features75.forEach(feature => { 
          geojson.features.push(feature)
        });
        
        updateCircleData(geojson);
      }
      
      currentData = '75';
      this.textContent = "Switch to 50 Miles";  // Update button text
    } else {
      lossChart.data.datasets[0].hidden = false;
      lossChart.data.datasets[1].hidden = true;
      lossChart.update()
      
      if (plantCircles[currentPlant.id]){ 
        geojson.features = [];
        features50.forEach(feature => { 
          geojson.features.push(feature)
        });            
        updateCircleData(geojson);
      }
      currentData = '50';
      this.textContent = "Switch to 75 Miles";  // Update button text
    }
  });
  
  function handlePlantClick(plant) {
    currentPlant = plant;
    // document.getElementById('toggleButton').textContent = "Switch to 75 Miles";
    const canvas = document.getElementById("chart");
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (lossChart) {
      lossChart.destroy();
      lossChart = null;
    }
    const years = Array.from({ length: 21 }, (_, i) => (2000 + i).toString());
    console.log(years);
    lossChart = new Chart(canvas, {
      type: "line",
      data: {
        labels: years,
        datasets: [{
          label: plant.name + ' - Tree Loss within 50 Miles (Hectares)',
          data: plant.lossYear50.map(val => parseFloat(val)),  // Ensure values are numbers
          fill: false,
          borderColor: 'rgb(75, 150, 192)',
          tension: 0.1,
          hidden: false,
        },
        {
          label: plant.name + ' - Tree Loss within 75 Miles (Hectares)',
          data: plant.lossYear75.map(val => parseFloat(val)),  // Ensure values are numbers
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          hidden: true,
        }]
      },
      options: {
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                xMin: plant.openYear.toString(),
                xMax: plant.openYear.toString(),
                borderColor: 'rgb(255, 128, 154)',
                borderWidth: 2,
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year'
            },
            type: 'linear',
            position: 'bottom'
          },
          y: {
            title: {
              display: true,
              text: 'Yearly Tree Loss'
            },
            beginAtZero: true
          }
        }
      }
    });
    
  }
  
  
  plantData.forEach(plant => {
    facilities.push(plant.name)
    const marker = new mapboxgl.Marker()
    .setLngLat([plant.lon, plant.lat])
    .addTo(map);
    marker.getElement().addEventListener('click', () => handlePlantClick(plant));
  });
});