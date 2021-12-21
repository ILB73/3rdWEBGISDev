var wms_layers = [];

var format_hasilconvert_0 = new ol.format.GeoJSON();
var features_hasilconvert_0 = format_hasilconvert_0.readFeatures(json_hasilconvert_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hasilconvert_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hasilconvert_0.addFeatures(features_hasilconvert_0);
var lyr_hasilconvert_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hasilconvert_0, 
                style: style_hasilconvert_0,
                interactive: true,
    title: 'hasil convert<br />\
    <img src="styles/legend/hasilconvert_0_0.png" /> Badan Air<br />\
    <img src="styles/legend/hasilconvert_0_1.png" /> Terbangun<br />\
    <img src="styles/legend/hasilconvert_0_2.png" /> Vegetasi<br />'
        });

lyr_hasilconvert_0.setVisible(true);
var layersList = [lyr_hasilconvert_0];
lyr_hasilconvert_0.set('fieldAliases', {'DN': 'DN', });
lyr_hasilconvert_0.set('fieldImages', {'DN': 'Range', });
lyr_hasilconvert_0.set('fieldLabels', {'DN': 'no label', });
lyr_hasilconvert_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});