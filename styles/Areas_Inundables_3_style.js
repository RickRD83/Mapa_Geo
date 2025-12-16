var size = 0;
var placement = 'point';
function categories_Areas_Inundables_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Alto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,42,28,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.128}),fill: new ol.style.Fill({color: 'rgba(255,116,97,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Medio':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(205,58,20,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.128}),fill: new ol.style.Fill({color: 'rgba(225,128,51,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bajo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.128}),fill: new ol.style.Fill({color: 'rgba(106,233,94,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Areas_Inundables_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Riesgo");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_Areas_Inundables_3_eval_expression(context) !== null) {
        labelText = String(exp_label_Areas_Inundables_3_eval_expression(context));
    }
    
    var style = categories_Areas_Inundables_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
