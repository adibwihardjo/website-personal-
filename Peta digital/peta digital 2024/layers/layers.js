var wms_layers = [];


        var lyr_GoogleEarthSatelite_0 = new ol.layer.Tile({
            'title': 'Google Earth Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LapakGIS_Batas_Kecamatan_2024_1 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kecamatan_2024_1 = format_LapakGIS_Batas_Kecamatan_2024_1.readFeatures(json_LapakGIS_Batas_Kecamatan_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kecamatan_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIS_Batas_Kecamatan_2024_1.addFeatures(features_LapakGIS_Batas_Kecamatan_2024_1);
var lyr_LapakGIS_Batas_Kecamatan_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIS_Batas_Kecamatan_2024_1, 
                style: style_LapakGIS_Batas_Kecamatan_2024_1,
                popuplayertitle: 'LapakGIS_Batas_Kecamatan_2024',
                interactive: true,
    title: 'LapakGIS_Batas_Kecamatan_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_0.png" /> 25070 - 31298<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_1.png" /> 31298 - 39794<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_2.png" /> 39794 - 49983<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_3.png" /> 49983 - 59942<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_4.png" /> 59942 - 92965<br />'
        });

lyr_GoogleEarthSatelite_0.setVisible(true);lyr_LapakGIS_Batas_Kecamatan_2024_1.setVisible(true);
var layersList = [lyr_GoogleEarthSatelite_0,lyr_LapakGIS_Batas_Kecamatan_2024_1];
lyr_LapakGIS_Batas_Kecamatan_2024_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'PENDUDUK': 'PENDUDUK', });
lyr_LapakGIS_Batas_Kecamatan_2024_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'PENDUDUK': 'TextEdit', });
lyr_LapakGIS_Batas_Kecamatan_2024_1.set('fieldLabels', {'KDCPUM': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'UPDATED': 'inline label - always visible', 'PENDUDUK': 'inline label - always visible', });
lyr_LapakGIS_Batas_Kecamatan_2024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});