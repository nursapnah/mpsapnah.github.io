// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Directions/setting/BarrierLayers.html":'\x3cdiv\x3e\r\n  \x3cspan class\x3d"title"\x3e${nls.barrierLayers}\x3c/span\x3e\r\n  \x3ctable style\x3d"width:98%;" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd style\x3d"width:200px;"\x3e\r\n          \x3cspan class\x3d"impedance-attribute jimu-ellipsis"\x3e${nls.pointBarrier}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd style\x3d"width:auto;"\x3e\r\n          \x3cdiv class\x3d"barrierLayersNode" data-dojo-attach-point\x3d"pointLayersNode"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n\r\n      \x3ctr\x3e\r\n        \x3ctd style\x3d"width:200px;"\x3e\r\n          \x3cspan class\x3d"impedance-attribute jimu-ellipsis"\x3e${nls.lineBarrier}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd style\x3d"width:auto;"\x3e\r\n          \x3cdiv class\x3d"barrierLayersNode" data-dojo-attach-point\x3d"polylineLayersNode"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n\r\n      \x3ctr\x3e\r\n        \x3ctd style\x3d"width:200px;"\x3e\r\n          \x3cspan class\x3d"impedance-attribute jimu-ellipsis"\x3e${nls.polygonBarrier}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd style\x3d"width:auto;"\x3e\r\n          \x3cdiv class\x3d"barrierLayersNode" data-dojo-attach-point\x3d"polygonLayersNode"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang jimu/LayerInfos/LayerInfos dijit/form/Select dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./BarrierLayers.html".split(" "),function(g,h,k,f,l,m,n,p){return g([l,m,n],{templateString:p,constructor:function(a){a&&(this.nls=a.nls)},postCreate:function(){this.inherited(arguments)},startup:function(){this.layerInfosObj=k.getInstanceSync();var a=[],c=[],d=[];this.layerInfosObj.traversal(h.hitch(this,function(b){"esriGeometryPoint"===
b.layerObject.geometryType&&this._isLayerInMap(b)&&a.push(b);"esriGeometryPolyline"===b.layerObject.geometryType&&this._isLayerInMap(b)&&c.push(b);"esriGeometryPolygon"===b.layerObject.geometryType&&this._isLayerInMap(b)&&d.push(b)}));this.pointLayers=(new f({name:"pointLayers",options:this._getOptionsByLayers(a,this.nls.noPointBarrier)})).placeAt(this.pointLayersNode);this.pointLayers.startup();this.polylineLayers=(new f({name:"polylineLayers",options:this._getOptionsByLayers(c,this.nls.noLineBarrier)})).placeAt(this.polylineLayersNode);
this.polylineLayers.startup();this.polygonLayers=(new f({name:"polygonLayers",options:this._getOptionsByLayers(d,this.nls.noPolygonBarrier)})).placeAt(this.polygonLayersNode);this.polygonLayers.startup();this.inherited(arguments)},destroy:function(){this.pointLayers&&this.pointLayers.destroy&&(this.pointLayers.closeDropDown(),this.pointLayers.destroy());this.polylineLayers&&this.polylineLayers.destroy&&(this.polylineLayers.closeDropDown(),this.polylineLayers.destroy());this.polygonLayers&&this.polygonLayers.destroy&&
(this.polygonLayers.closeDropDown(),this.polygonLayers.destroy())},_getOptionsByLayers:function(a,c){var d=[];d.push({label:c||"",value:"",selected:"true"});c=0;for(var b=a.length;c<b;c++){var e=a[c];d.push({label:e.title||e.id,value:e.layerObject.id})}return d},validate:function(){return!0},getValue:function(){var a={pointLayers:[],polylineLayers:[],polygonLayers:[]};a.pointLayers.push(this.pointLayers.getValue());a.polylineLayers.push(this.polylineLayers.getValue());a.polygonLayers.push(this.polygonLayers.getValue());
return a},setValue:function(a){this._selectItem(this.pointLayers,a.pointLayers||[]);this._selectItem(this.polylineLayers,a.polylineLayers||[]);this._selectItem(this.polygonLayers,a.polygonLayers||[])},_selectItem:function(a,c){for(var d=a.getOptions(),b=0,e=d.length;b<e;b++)d[b].value===c[0]&&a.setValue(c[0])},_isLayerInMap:function(a){for(var c=this.layerInfosObj.getLayerInfoArrayOfWebmap(),d=a.getRootLayerInfo(),b=0,e=c.length;b<e;b++){var f=c[b];if(f.id===a.id||d&&d.id===f.id)return!0}return!1}})});