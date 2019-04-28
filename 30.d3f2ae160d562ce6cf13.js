(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/SceneLayer":621,"esri/layers/mixins/SceneService":1593,"esri/layers/support/RangeInfo":2162})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1593:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(53),t(13),t(10),t(214),t(9),t(33),t(0),t(35),t(180),t(34),t(126),t(369),t(261),t(260),t(172),t(211)],void 0===(n=function(e,r,t,o,n,i,a,s,p,l,u,d,y,c,f,h,v,g,m,I){var b=a.getLogger("esri.layers.mixins.SceneService");return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.blendMode=null,r.spatialReference=null,r.fullExtent=null,r.heightModelInfo=null,r.version={major:Number.NaN,minor:Number.NaN,versionString:""},r.copyright=null,r.sublayerTitleMode="item-title",r.title=null,r.layerId=null,r}return t(r,e),r.prototype.readSpatialReference=function(e,r){return this._readSpatialReference(r)},r.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return c.fromJSON(e.spatialReference);var r=e.store,t=r.indexCRS||r.geographicCRS,o=t&&parseInt(t.substring(t.lastIndexOf("/")+1,t.length),10);return null!=o?new c(o):null},r.prototype.readFullExtent=function(e,r){var t=r.store,o=this._readSpatialReference(r);return null==o||null==t||null==t.extent||!Array.isArray(t.extent)||t.extent.some(function(e){return e<-1e38})?null:new d({xmin:t.extent[0],ymin:t.extent[1],xmax:t.extent[2],ymax:t.extent[3],spatialReference:o})},r.prototype.readVersion=function(e,r){var t=r.store,o=null!=t.version?t.version.toString():"",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},r.prototype.readTitlePortalItem=function(e,r){return"item-title"!==this.sublayerTitleMode?void 0:e},r.prototype.readTitleService=function(e,r){var t=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return m.titleFromUrlAndName(this.url,r.name);var o=r.name||m.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&t&&(o=t+" - "+o),m.cleanTitle(o)},r.prototype.readLayerId=function(e,r){return r.id},Object.defineProperty(r.prototype,"url",{set:function(e){var r=m.sanitizeUrlWithLayerId(this,e,b);this._set("url",r.url),null!=r.layerId&&this._set("layerId",r.layerId)},enumerable:!0,configurable:!0}),r.prototype.writeUrl=function(e,r,t,o){m.writeUrlWithLayerId(this,e,"layers",r,o)},Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var r=l.urlToObject(e);return null!=this.layerId&&m.match.test(r.path)&&(r.path=r.path+"/layers/"+this.layerId),r},enumerable:!0,configurable:!0}),r.prototype.readRootNode=function(e,r){return r.store.rootNode},r.prototype._verifyRootNodeAndUpdateExtent=function(){var e=this;return this._fetchRootNode().then(function(r){return e._updateExtentFromRootNode(r)})},r.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var r=e.mbs[2],t=e.mbs[3];this.fullExtent.zmin=r-t,this.fullExtent.zmax=r+t}},r.prototype._fetchRootNode=function(){if(!this.rootNode)return p.resolve();var e=l.join(this.parsedUrl.path,this.rootNode);return n(e,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data}).catch(function(r){throw new i("sceneservice:root-node-missing","Root node missing.",{error:r,url:e})})},r.prototype._fetchService=function(){var e=this;return(null==this.layerId&&/SceneServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(r){null!=r&&(e.layerId=r)}):p.resolve()).then(function(){return e._fetchServiceLayer()})},r.prototype._fetchFirstLayerId=function(){return n(this.url,{query:{f:"json"},responseType:"json"}).then(function(e){if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id})},r.prototype._fetchServiceLayer=function(){var e=this;return n(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:"));var t=r.data;e.read(t,{origin:"service",url:e.parsedUrl}),e._validateLayer(t)})},r.prototype._validateLayer=function(e){},o([u.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],r.prototype,"properties",void 0),o([u.property({type:c})],r.prototype,"spatialReference",void 0),o([u.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readSpatialReference",null),o([u.property({type:d})],r.prototype,"fullExtent",void 0),o([u.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readFullExtent",null),o([u.property({readOnly:!0,type:y})],r.prototype,"heightModelInfo",void 0),o([u.property({readOnly:!0})],r.prototype,"version",void 0),o([u.reader("version",["store.version"])],r.prototype,"readVersion",null),o([u.property({type:String,json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),o([u.property({type:String,json:{read:!1}})],r.prototype,"sublayerTitleMode",void 0),o([u.property({type:String})],r.prototype,"title",void 0),o([u.reader("portal-item","title")],r.prototype,"readTitlePortalItem",null),o([u.reader("service","title",["name"])],r.prototype,"readTitleService",null),o([u.property({type:Number})],r.prototype,"layerId",void 0),o([u.reader("service","layerId",["id"])],r.prototype,"readLayerId",null),o([u.property(I.url)],r.prototype,"url",null),o([u.writer("url")],r.prototype,"writeUrl",null),o([u.property({dependsOn:["layerId"]})],r.prototype,"parsedUrl",null),o([u.property()],r.prototype,"store",void 0),o([u.property({type:String})],r.prototype,"rootNode",void 0),o([u.reader("rootNode",["store.rootNode"])],r.prototype,"readRootNode",null),o([u.subclass("esri.layers.mixins.SceneService")],r)}(u.declared(f,h,s,v,g))}.apply(null,o))||(e.exports=n)},2162:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(8),t(0)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.name=null,r.field=null,r.currentRangeExtent=null,r.fullRangeExtent=null,r.type="rangeInfo",r}return t(r,e),o([i.property({type:String,json:{read:!0,write:!0}})],r.prototype,"name",void 0),o([i.property({type:String,json:{read:!0,write:!0}})],r.prototype,"field",void 0),o([i.property({type:[Number],json:{read:!0,write:!0}})],r.prototype,"currentRangeExtent",void 0),o([i.property({type:[Number],json:{read:!0,write:!0}})],r.prototype,"fullRangeExtent",void 0),o([i.property({type:String,readOnly:!0,json:{read:!1,write:!0}})],r.prototype,"type",void 0),o([i.subclass("esri.layers.support.RangeInfo")],r)}(i.declared(n));r.RangeInfo=a,r.default=a}.apply(null,o))||(e.exports=n)},621:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(358),t(359),t(53),t(13),t(10),t(9),t(33),t(21),t(0),t(141),t(87),t(363),t(126),t(1593),t(211),t(211),t(1668),t(1752),t(354),t(127),t(373),t(1754),t(2162),t(159),t(365),t(1605),t(1606),t(353)],void 0===(n=function(e,r,o,n,i,a,s,p,l,u,d,y,c,f,h,v,g,m,I,b,S,w,j,L,F,x,_,R,E,T,A,O,N){function P(e,r,t){return e&&((e=T.read(e,r,t)||void 0)||M.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var U=["3DObject","Point"],M=u.getLogger("esri.layers.SceneLayer"),D=function(e){function r(r,t){var o=e.call(this)||this;return o.featureReduction=null,o.rangeInfos=null,o.operationalLayerType="ArcGISSceneServiceLayer",o.type="scene",o.fields=[],o.definitionExpression=null,o.path=null,o.labelsVisible=!0,o.labelingInfo=null,o.legendEnabled=!0,o.cachedDrawingInfo={color:!1},o.popupEnabled=!0,o.popupTemplate=null,o.objectIdField=null,o.objectIdFilter=null,o._fieldUsageInfo={},o.screenSizePerspectiveEnabled=!0,o}return n(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},r.prototype.getField=function(e){return F.getField(this.fields,e)},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"geometryType",{get:function(){return q[this.profile]||"mesh"},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderer",{set:function(e){F.fixRendererFields(e,this.fields),this._set("renderer",e)},enumerable:!0,configurable:!0}),r.prototype.readCachedDrawingInfo=function(e,r){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e},Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null},enumerable:!0,configurable:!0}),r.prototype.readObjectIdField=function(e,r){return!e&&r.fields&&r.fields.some(function(r){return"esriFieldTypeOID"===r.type&&(e=r.name),!!e}),e||void 0},r.prototype.readProfile=function(e,r){var t=r.store.profile;return null!=t&&C[t]?C[t]:(M.error("Unknown or missing profile",{profile:t,layer:this}),"mesh-pyramids")},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()}).then(function(){return d.all([e._verifyRootNodeAndUpdateExtent(),e._setAssociatedFeatureLayer()])}).then(function(){return e._validateElevationInfo()}).then(function(){return e._applyAssociatedLayerOverrides()}).then(function(){return e._populateFieldUsageInfo()}).then(function(){return A.loadStyleRenderer(e,{origin:"service"})}).then(function(){return F.fixRendererFields(e.renderer,e.fields)});return this.addResolvingPromise(r),this.when()},r.prototype.createLayerView=function(e){var r=this;return(null==this.profile||"mesh-pyramids"===this.profile?d.create(function(e){return Promise.all([t.e(0),t.e(3),t.e(10),t.e(12),t.e(61)]).then(function(){var r=[t(2241)];e.apply(null,r)}.bind(this)).catch(t.oe)}):d.create(function(e){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(43)]).then(function(){var r=[t(2250)];e.apply(null,r)}.bind(this)).catch(t.oe)})).then(function(t){return new t({view:e,layer:r})})},r.prototype.createQuery=function(){var e=new N;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e},r.prototype.queryExtent=function(e){var r=this;return this._getAssociatedLayerForQuery().then(function(t){return t.queryExtent(e||r.createQuery())})},r.prototype.queryFeatureCount=function(e){var r=this;return this._getAssociatedLayerForQuery().then(function(t){return t.queryFeatureCount(e||r.createQuery())})},r.prototype.queryFeatures=function(e){var r=this;return this._getAssociatedLayerForQuery().then(function(t){return t.queryFeatures(e||r.createQuery())}).then(function(e){if(e&&e.features)for(var t=0,o=e.features;t<o.length;t++){var n=o[t];n.layer=r,n.sourceLayer=r}return e})},r.prototype.queryObjectIds=function(e){var r=this;return this._getAssociatedLayerForQuery().then(function(t){return t.queryObjectIds(e||r.createQuery())})},r.prototype.getFieldUsageInfo=function(e){var r={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||r:(M.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),r)},r.prototype.createPopupTemplate=function(e){return O.createPopupTemplate(this,e)},r.prototype._getAssociatedLayerForQuery=function(){var e=this;if(!this.loaded)return this.load().then(function(){return e._getAssociatedLayerForQuery()});var r=this.associatedLayer;return null!=r?d.resolve(r):d.reject(new l("scenelayer:query-not-available","SceneLayer queries are not available without associated feature layer"))},r.prototype.hasCachedStatistics=function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(function(r){return r.name===e})},r.prototype.queryCachedStatistics=function(e){if(!this.hasCachedStatistics(e))return d.reject(new l("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var r=0,t=this.statisticsInfo;r<t.length;r++){var o=t[r];if(o.name===e){var n=y.join(this.parsedUrl.path,o.href);return p(n,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data})}}},r.prototype._validateLayer=function(e){if(e.layerType&&-1===U.indexOf(e.layerType))throw new l("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,r){var t=!1,o=!1;if(null==e)t=!0,o=!0;else{var n=r&&r.isGeographic;switch(e){case"east-north-up":case"earth-centered":t=!0,o=n;break;case"vertex-reference-frame":t=!0,o=!n;break;default:t=!1}}if(!t)throw new l("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!o)throw new l("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)},r.prototype._populateFieldUsageInfo=function(){if(this._fieldUsageInfo={},this.fields)for(var e=this,r=0,t=this.fields;r<t.length;r++){!function(r){var t=!(!e.attributeStorageInfo||!e.attributeStorageInfo.some(function(e){return e.name===r.name})),o=!!(e.associatedLayer&&e.associatedLayer.fields&&e.associatedLayer.fields.some(function(e){return e&&r.name===e.name})),n={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||o,supportsLayerQuery:o};e._fieldUsageInfo[r.name]=n}(t[r])}},r.prototype._applyAssociatedLayerOverrides=function(){if(this.associatedLayer){if(this.associatedLayer.fields)for(var e=0,r=this.associatedLayer.fields;e<r.length;e++){var t=r[e];this.getField(t.name)||this.fields.push(t.clone())}for(var o=["popupTemplate","popupEnabled"],n=v.getProperties(this),i=0;i<o.length;i++){var a=o[i];this._buddyIsMoreImportant(a)&&(n.setDefaultOrigin(this.associatedLayer.originOf(a)),n.set(a,this.associatedLayer[a]),n.setDefaultOrigin("user"))}}},r.prototype._setAssociatedFeatureLayer=function(){var e=this;return this._fetchAssociatedFeatureLayer().then(function(r){e.associatedLayer=r})},r.prototype._fetchAssociatedFeatureLayer=function(){var e=this;return-1===["mesh-pyramids","points"].indexOf(this.profile)?d.resolve(null):(this.portalItem&&this.portalItem.isResolved()?this._fetchAssociatedFeatureLayerFromRelatedItems(this.portalItem):this._fetchAssociatedFeatureLayerFromUrl()).then(function(e){return e.load()}).catch(function(r){return c.whenValidOnce(e,["popupTemplate","popupEnabled"],function(){return e.popupEnabled&&null!=e.popupTemplate}).then(function(){return function(){var r="this SceneLayer: "+e.title;null==e.attributeStorageInfo?M.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on "+r):M.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on "+r)}}),null})},r.prototype._fetchAssociatedFeatureLayerFromRelatedItems=function(e){var r=this;return e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"}).then(function(e){var t=e.filter(function(e){return"Feature Service"===e.type})[0];return t?r._fetchAssociatedFeatureLayerFromPortalItem(new E({id:t.id,portal:t.portal})):d.reject()}).catch(function(){return r._fetchAssociatedFeatureLayerFromUrl()})},r.prototype._fetchAssociatedFeatureLayerFromPortalItem=function(e){var r=this;return e.load().then(function(e){return r._findMatchingAssociatedSublayerUrl(e.url)}).then(function(r){return d.resolve(new g({url:r,portalItem:e}))})},r.prototype._fetchAssociatedFeatureLayerFromUrl=function(){return this._findMatchingAssociatedSublayerUrl().then(function(e){return d.resolve(new g({url:e}))})},r.prototype._findMatchingAssociatedSublayerUrl=function(e){var r=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);if(!r)return d.reject();null==e&&(e=r[1]+"/FeatureServer");var t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),o={query:{f:"json"},responseType:"json"},n=r[1]+"/SceneServer",i=parseInt(r[2],10),a=p(n,o).catch(function(e){return{data:{layers:null}}}),s=p(t,o);return d.all([s,a]).then(function(e){var r=e[0],o=e[1],n=o.data&&o.data.layers,a=r.data&&r.data.layers;if(!Array.isArray(a))throw new Error("expected layers array");if(Array.isArray(n))for(var s=0;s<Math.min(n.length,a.length);s++){if(n[s].id===i)return t+"/"+a[s].id}else if(i<a.length)return t+"/"+a[i].id;throw new Error("could not find matching associated sublayer")})},r.prototype._buddyIsMoreImportant=function(e){if(!this.associatedLayer)return!1;var r=h.nameToId(this.originOf(e)),t=h.nameToId(this.associatedLayer.originOf(e));return null!=t&&t<=h.OriginId.SERVICE?null==r||r<h.OriginId.SERVICE:null!=t&&t<=h.OriginId.PORTAL_ITEM&&(null==r||r<h.OriginId.PORTAL_ITEM)},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&M.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&M.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))},i([f.shared("esri.layers.SceneLayer")],r.prototype,"declaredClass",void 0),i([f.property({types:{key:"type",base:w.default,typeMap:{selection:j.default}},json:{origins:{"web-scene":{read:{source:"layerDefinition.featureReduction"},write:{target:"layerDefinition.featureReduction"}}}}})],r.prototype,"featureReduction",void 0),i([f.property({type:[R.default],json:{read:!1,origins:{"web-scene":{read:{source:"layerDefinition.rangeInfos"},write:{target:"layerDefinition.rangeInfos"}}}}})],r.prototype,"rangeInfos",void 0),i([f.property({json:{read:!1}})],r.prototype,"associatedLayer",void 0),i([f.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([f.property({type:["ArcGISSceneServiceLayer"]})],r.prototype,"operationalLayerType",void 0),i([f.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([f.property({type:[L]})],r.prototype,"fields",void 0),i([f.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),i([f.property({readOnly:!0})],r.prototype,"statisticsInfo",void 0),i([f.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),i([f.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),i([f.property(b.elevationInfo)],r.prototype,"elevationInfo",null),i([f.property({type:String,dependsOn:["profile"]})],r.prototype,"geometryType",null),i([f.property(b.labelsVisible)],r.prototype,"labelsVisible",void 0),i([f.property({type:[x],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:_.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:_.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],r.prototype,"labelingInfo",void 0),i([f.property(b.legendEnabled)],r.prototype,"legendEnabled",void 0),i([f.property({types:s.rendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:P}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:P},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",null),i([f.property({json:{read:!1}})],r.prototype,"cachedDrawingInfo",void 0),i([f.reader("service","cachedDrawingInfo")],r.prototype,"readCachedDrawingInfo",null),i([f.property(b.popupEnabled)],r.prototype,"popupEnabled",void 0),i([f.property({type:a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),i([f.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo","associatedLayer"]})],r.prototype,"defaultPopupTemplate",null),i([f.property({type:String,json:{read:!1}})],r.prototype,"objectIdField",void 0),i([f.reader("service","objectIdField",["objectIdField","fields"])],r.prototype,"readObjectIdField",null),i([f.property({json:{read:!1}})],r.prototype,"objectIdFilter",void 0),i([f.property({type:String,json:{read:!1}})],r.prototype,"profile",void 0),i([f.reader("service","profile",["store.profile"])],r.prototype,"readProfile",null),i([f.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),i([f.property(S.screenSizePerspectiveEnabled)],r.prototype,"screenSizePerspectiveEnabled",void 0),i([f.subclass()],r)}(f.declared(m,I)),C={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},q={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};return D}.apply(null,o))||(e.exports=n)}}]);