// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/lang jimu/portalUrlUtils ./table/_FeatureTable jimu/utils ./utils jimu/LayerInfos/LayerInfos".split(" "),function(u,h,m,p,v,q,t,w,x,r,y){return u(null,{_activeLayerInfoId:null,_activeRelationshipKey:null,nls:null,config:null,map:null,parent:null,_delayedLayerInfos:[],_layerInfosFromMap:[],featureTableSet:{},relationshipsSet:{},relationshipTableSet:{},currentRelationshipKey:null,relationshipInfoMapping:{},
constructor:function(a){this.widgetId=a&&a.widgetId;this.map=a&&a.map;this.nls=a&&a.nls;this.parent=a&&a.parent;this._delayedLayerInfos=[];this._layerInfosFromMap=[];this.featureTableSet={};this.relationshipsSet={};this.relationshipTableSet={};this.currentRelationshipKey=null;this.relationshipInfoMapping={}},setConfig:function(a){this.config=h.clone(a||{})},setMap:function(a){this.map=a},updateLayerInfoResources:function(a){var b=new p;r.readConfigLayerInfosFromMap(this.map,!1,!0).then(h.hitch(this,
function(c){this._layerInfosFromMap=c;this._processDelayedLayerInfos();a&&(0===this.config.layerInfos.length?(c=r.getConfigInfosFromLayerInfos(c),this.config.layerInfos=m.filter(c,function(a){return a.show})):this.config.layerInfos=m.filter(h.delegate(this.config.layerInfos),h.hitch(this,function(a){var b=this._getLayerInfoById(a.id),c=this.config.syncWithLayers?b.isVisible():a.show;c&&b&&(a.name=b.name||b.title,a.show=c);return c&&b})));b.resolve()}),function(a){b.reject(a)});return b},isEmpty:function(){return this.config&&
this.config.layerInfos&&0>=this.config.layerInfos.length},getConfigInfos:function(){return h.clone(this.config.layerInfos)},addLayerInfo:function(a){0===this._layerInfosFromMap.length?this._delayedLayerInfos.push(a):0<this._layerInfosFromMap.length&&!this._getLayerInfoById(a.id)&&this._layerInfosFromMap.push(a)},addConfigInfo:function(a){this._getConfigInfoById(a.id)||(a=r.getConfigInfoFromLayerInfo(a),this.config.layerInfos.push({id:a.id,name:a.name,layer:{url:a.layer.url,fields:a.layer.fields}}))},
removeLayerInfo:function(a){a=this._getLayerInfoById(a);a=this._layerInfosFromMap.indexOf(a);this._layerInfosFromMap.splice(a,1)},removeConfigInfo:function(a){if(h.getObject("config.layerInfos",!1,this))for(var b=this.config.layerInfos.length,c=0;c<b;c++)if(this.config.layerInfos[c].id===a){this.featureTableSet[a]&&(this.featureTableSet[a].destroy(),delete this.featureTableSet[a]);this.config.layerInfos.splice(c,1);break}},getQueryTable:function(a,b,c,e){var f=new p;this._activeLayerInfoId=a;this.featureTableSet[a]?
f.resolve({isSupportQuery:!0,table:this.featureTableSet[a]}):this._getQueryTableInfo(a).then(h.hitch(this,function(d){if(d){var k=d.layerInfo,g=d.layerObject;d=d.tableInfo;if(this.featureTableSet[a])f.resolve({isSupportQuery:d.isSupportQuery,table:this.featureTableSet[a]});else if(h.getObject("isSupportQuery",!1,d)){var l=this._getConfigInfoById(a);l||(this.addConfigInfo(k),l=this._getConfigInfoById(a));var n=h.getObject("layer.fields",!1,l),g=g&&g.fields,g=r.arcade.appendArcadeExpressionsToFields(g,
k);l.layer.fields=this._clipValidFields(n,g);k=new w({widgetId:this.widgetId,map:this.map,matchingMap:b,hideExportButton:c,allowTextSelection:e,layerInfo:k,configedInfo:l,nls:this.nls,parent:this.parent});this.featureTableSet[a]=k;f.resolve({isSupportQuery:d.isSupportQuery,table:k})}else f.resolve({isSupportQuery:!1})}else f.resolve(null)}),function(a){f.reject(a)});return f},getRelationTable:function(a,b,c,e,f){var d=new p,k=this.relationshipsSet[b];this._activeRelationshipKey=b;if(k){var g=this._getLayerInfoById(a);
a=this.getRelationShipInfo(k);this.getQueryTable(a.id,c,e,f).then(h.hitch(this,function(a){if(a&&a.table){var b=a.table;x.isEqual(b.relationship,k)||(b.set("prevRelationship",b.relationship),b.set("relationship",k));b.set("relatedOriginalInfo",g)}d.resolve(a)}),h.hitch(function(){d.resolve(null)}))}else d.resolve(null);return d},removeRelationTable:function(a){this.relationshipTableSet[a]&&(this.relationshipTableSet[a].destroy(),this.relationshipTableSet[a]=null)},getCurrentTable:function(a){return this.featureTableSet[a]||
this.relationshipTableSet[a]},collectRelationShips:function(a,b){this._collectRelationShips(a,a.layerObject,b)},getConfigInfoById:function(a){return this._getConfigInfoById(a)},getLayerInfoById:function(a){return this._getLayerInfoById(a)},getVisivleLayerInfoIndexById:function(a){return this._getVisivleLayerInfoIndexById(a)},getRelationshipsByInfoId:function(a){var b=[],c;for(c in this.relationshipsSet){var e=this.relationshipsSet[c];e._layerInfoId===a&&b.push(e)}return b},getRelationShipInfo:function(a){var b;
if(a)for(var c in this.relationshipInfoMapping)a._relKey===c&&(b=this.relationshipInfoMapping[c]);return b},empty:function(){this._delayedLayerInfos=[];this._layerInfosFromMap=[];this.featureTableSet={};for(var a in this.relationshipsSet)this._removeRelationShipInfo(this.relationshipsSet[a]);this.relationshipsSet={};this.relationshipTableSet={};this.nls=this.map=this.config=this.currentRelationshipKey=null},_processDelayedLayerInfos:function(){0<this._delayedLayerInfos.length&&(m.forEach(this._delayedLayerInfos,
h.hitch(this,function(a){!this._getLayerInfoById(a&&a.id)&&this.map&&this.map.getLayer(a.id)&&this._layerInfosFromMap.push(a)})),this._delayedLayerInfos=[])},_getLayerInfoById:function(a){for(var b=0,c=this._layerInfosFromMap.length;b<c;b++)if(this._layerInfosFromMap[b]&&this._layerInfosFromMap[b].id===a)return this._layerInfosFromMap[b]},_getVisivleLayerInfoIndexById:function(a){for(var b=-1,c=0,e=this._layerInfosFromMap.length;c<e;c++)if(this._layerInfosFromMap[c]&&this._layerInfosFromMap[c].isShowInMap()&&
(b++,this._layerInfosFromMap[c].id===a))return b},_getConfigInfoById:function(a){if(!h.getObject("layerInfos.length",!1,this.config))return null;for(var b=0,c=this.config.layerInfos.length;b<c;b++){var e=this.config.layerInfos[b];if(e&&e.id===a)return e}return null},_getQueryTableInfo:function(a){var b=new p,c=this._getLayerInfoById(a);if(c){var e=[],f=c.getUrl();e.push(c.getLayerObject());e.push(c.getSupportTableInfo());f&&e.push(c.getRelatedTableInfoArray());v(e).then(h.hitch(this,function(d){if(this._activeLayerInfoId===
a&&d){var e=d[0],g=d[1];d=f?d[2]:[];q.isDefined(d)&&q.isDefined(e)&&0<d.length&&this._collectRelationShips(c,e,d);b.resolve({layerInfo:c,layerObject:e,tableInfo:g})}else b.resolve(null)}),function(a){b.reject(a)})}else console.error("no activeLayerInfo!"),b.reject(Error());return b},_collectRelationShips:function(a,b,c){var e=b.relationships;if(e&&0<e.length&&b&&b.url){var f=b.url.split("/");m.forEach(e,h.hitch(this,function(d){f[f.length-1]=d.relatedTableId;var e=f.join("/"),g=m.filter(c,h.hitch(this,
function(a){a=a.getUrl();return q.isDefined(a)&&q.isDefined(e)&&t.removeProtocol(a.toString().toLowerCase())===t.removeProtocol(e.toString().toLowerCase())})),l=a.id+"_"+d.name+"_"+d.id;d._relKey=l;d._layerInfoId=a.id;g&&0<g.length&&this._setRelationShipInfo(d,g[0]);this.relationshipsSet[l]||(this.relationshipsSet[l]=d,this.relationshipsSet[l].objectIdField=b.objectIdField)}))}},_setRelationShipInfo:function(a,b){a&&"_relKey"in a&&(this.relationshipInfoMapping[a._relKey]=b)},_removeRelationShipInfo:function(a){if(a&&
"_relKey"in a)for(var b in this.relationshipInfoMapping)a._relKey===b&&delete this.relationshipInfoMapping[b]},_getLayerInfoLabel:function(a){return a.name||a.title},_getLayerInfoId:function(a){return a&&a.id||""},_clipValidFields:function(a,b){if(!a||!a.length)return b||[];if(!b||!b.length)return a;for(var c=[],e=[],f=0,d=b.length;f<d;f++){for(var k=b[f],g=0,l=a.length;g<l;g++){var n=a[g];if(n.name===k.name)break}g===l&&e.push(k)}f=0;for(d=a.length;f<d;f++)for(n=a[f],g=0,l=b.length;g<l;g++)if(k=
b[g],k.name===n.name){c.push(n);break}c=c.concat(e);0===c.length&&0<a.length&&(a=h.clone(b),m.forEach(a,h.hitch(this,function(a){"esriFieldTypeGeometry"!==a.type&&(a.show=!0,c.push(a))})));return c}})});