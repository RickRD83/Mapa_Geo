ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([613885.794962, 9640698.146455, 614441.057715, 9641164.059892]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Areas_Inundables_3 = new ol.format.GeoJSON();
var features_Areas_Inundables_3 = format_Areas_Inundables_3.readFeatures(json_Areas_Inundables_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Areas_Inundables_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Inundables_3.addFeatures(features_Areas_Inundables_3);
var lyr_Areas_Inundables_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Inundables_3, 
                style: style_Areas_Inundables_3,
                popuplayertitle: 'Areas_Inundables',
                interactive: true,
    title: 'Areas_Inundables<br />\
    <img src="styles/legend/Areas_Inundables_3_0.png" /> Alto<br />\
    <img src="styles/legend/Areas_Inundables_3_1.png" /> Medio<br />\
    <img src="styles/legend/Areas_Inundables_3_2.png" /> Bajo<br />' });
var format_hidrografia_4 = new ol.format.GeoJSON();
var features_hidrografia_4 = format_hidrografia_4.readFeatures(json_hidrografia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_hidrografia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_4.addFeatures(features_hidrografia_4);
var lyr_hidrografia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_4, 
                style: style_hidrografia_4,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_4.png" /> hidrografia'
            });
var format_Niveldeinundacionencalles_5 = new ol.format.GeoJSON();
var features_Niveldeinundacionencalles_5 = format_Niveldeinundacionencalles_5.readFeatures(json_Niveldeinundacionencalles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Niveldeinundacionencalles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveldeinundacionencalles_5.addFeatures(features_Niveldeinundacionencalles_5);
var lyr_Niveldeinundacionencalles_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveldeinundacionencalles_5, 
                style: style_Niveldeinundacionencalles_5,
                popuplayertitle: 'Nivel de inundacion en calles',
                interactive: true,
    title: 'Nivel de inundacion en calles<br />\
    <img src="styles/legend/Niveldeinundacionencalles_5_0.png" /> Alto<br />\
    <img src="styles/legend/Niveldeinundacionencalles_5_1.png" /> Bajo<br />\
    <img src="styles/legend/Niveldeinundacionencalles_5_2.png" /> Medio<br />' });
var format_Sitios_Vulnerables_6 = new ol.format.GeoJSON();
var features_Sitios_Vulnerables_6 = format_Sitios_Vulnerables_6.readFeatures(json_Sitios_Vulnerables_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Sitios_Vulnerables_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitios_Vulnerables_6.addFeatures(features_Sitios_Vulnerables_6);
var lyr_Sitios_Vulnerables_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitios_Vulnerables_6, 
                style: style_Sitios_Vulnerables_6,
                popuplayertitle: 'Sitios_Vulnerables',
                interactive: true,
    title: 'Sitios_Vulnerables<br />\
    <img src="styles/legend/Sitios_Vulnerables_6_0.png" /> Alto<br />\
    <img src="styles/legend/Sitios_Vulnerables_6_1.png" /> Medio<br />\
    <img src="styles/legend/Sitios_Vulnerables_6_2.png" /> Bajo<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_Areas_Inundables_3.setVisible(true);lyr_hidrografia_4.setVisible(true);lyr_Niveldeinundacionencalles_5.setVisible(true);lyr_Sitios_Vulnerables_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_GoogleHybrid_2,lyr_Areas_Inundables_3,lyr_hidrografia_4,lyr_Niveldeinundacionencalles_5,lyr_Sitios_Vulnerables_6];
lyr_Areas_Inundables_3.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Riesgo': 'Riesgo', 'Calles_Aso': 'Calles_Aso', 'Crecida_es': 'Crecida_es', 'Impac_espe': 'Impac_espe', });
lyr_hidrografia_4.set('fieldAliases', {'parametro': 'parametro', 'valor': 'valor', 'Id': 'Id', 'unidad': 'unidad', 'descrip': 'descrip', 'Fuente_dat': 'Fuente_dat', });
lyr_Niveldeinundacionencalles_5.set('fieldAliases', {'id': 'id', 'nombre_via': 'Nombre de la calle', 'Riesgo': 'Riesgo de inundación', 'Tipo_rod': 'Tipo de rodamiento', 'Est_dren': 'Drenaje', 'Longit_m': 'Longitud (m)', 'ancho_m': 'Ancho (m)', 'Peralt_pct': 'Peralte (%)', 'Inun_max_m': 'Inundación Máx (m)', 'pob_expues': 'Población expuesta', });
lyr_Sitios_Vulnerables_6.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Niv_vulner': 'Niv_vulner', 'Calle_refe': 'Calle_refe', 'Acc_Recome': 'Acc_Recome', 'Nombre_L': 'Nombre_L', });
lyr_Areas_Inundables_3.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Riesgo': 'TextEdit', 'Calles_Aso': '', 'Crecida_es': '', 'Impac_espe': '', });
lyr_hidrografia_4.set('fieldImages', {'parametro': 'TextEdit', 'valor': 'TextEdit', 'Id': 'TextEdit', 'unidad': 'TextEdit', 'descrip': 'TextEdit', 'Fuente_dat': 'TextEdit', });
lyr_Niveldeinundacionencalles_5.set('fieldImages', {'id': 'TextEdit', 'nombre_via': 'TextEdit', 'Riesgo': 'TextEdit', 'Tipo_rod': 'TextEdit', 'Est_dren': 'TextEdit', 'Longit_m': 'TextEdit', 'ancho_m': 'TextEdit', 'Peralt_pct': 'TextEdit', 'Inun_max_m': 'TextEdit', 'pob_expues': 'TextEdit', });
lyr_Sitios_Vulnerables_6.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Niv_vulner': 'TextEdit', 'Calle_refe': 'TextEdit', 'Acc_Recome': 'TextEdit', 'Nombre_L': 'TextEdit', });
lyr_Areas_Inundables_3.set('fieldLabels', {'id': 'hidden field', 'Area': 'inline label - always visible', 'Riesgo': 'inline label - always visible', 'Calles_Aso': 'inline label - always visible', 'Crecida_es': 'inline label - always visible', 'Impac_espe': 'no label', });
lyr_hidrografia_4.set('fieldLabels', {'parametro': 'inline label - always visible', 'valor': 'inline label - always visible', 'Id': 'hidden field', 'unidad': 'inline label - always visible', 'descrip': 'inline label - always visible', 'Fuente_dat': 'inline label - always visible', });
lyr_Niveldeinundacionencalles_5.set('fieldLabels', {'id': 'hidden field', 'nombre_via': 'inline label - always visible', 'Riesgo': 'header label - visible with data', 'Tipo_rod': 'inline label - always visible', 'Est_dren': 'inline label - always visible', 'Longit_m': 'inline label - always visible', 'ancho_m': 'inline label - always visible', 'Peralt_pct': 'inline label - always visible', 'Inun_max_m': 'inline label - always visible', 'pob_expues': 'inline label - always visible', });
lyr_Sitios_Vulnerables_6.set('fieldLabels', {'id': 'no label', 'Tipo': 'inline label - always visible', 'Niv_vulner': 'inline label - always visible', 'Calle_refe': 'inline label - always visible', 'Acc_Recome': 'inline label - always visible', 'Nombre_L': 'inline label - always visible', });
lyr_Sitios_Vulnerables_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});