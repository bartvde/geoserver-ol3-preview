goog.require('ol.proj.Projection');
goog.require('ol.View2D');
goog.require('ol.Map');
goog.require('ol.control.MousePosition');
goog.require('ol.layer.Image');
goog.require('ol.source.ImageWMS');
goog.require('ol.layer.Tile');
goog.require('ol.source.TileWMS');
goog.require('ol.coordinate');

goog.exportProperty(
    ol.source.TileWMS.prototype,
    'updateParams',
    ol.source.TileWMS.prototype.updateParams);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'updateParams',
    ol.source.ImageWMS.prototype.updateParams);

goog.exportProperty(
    ol.Collection.prototype,
    'forEach',
    ol.Collection.prototype.forEach);

goog.exportProperty(
    ol.Map.prototype,
    'getLayers',
    ol.Map.prototype.getLayers);

goog.exportProperty(
    ol.Object.prototype,
    'set',
    ol.Object.prototype.set);

goog.exportProperty(
    ol.Map.prototype,
    'updateSize',
    ol.Map.prototype.updateSize);

goog.exportSymbol(
    'ol.METERS_PER_UNIT',
    ol.METERS_PER_UNIT
);

goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'getGetFeatureInfoUrl',
    ol.source.ImageWMS.prototype.getGetFeatureInfoUrl);

goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'getCoordinate',
    ol.MapBrowserEvent.prototype.getCoordinate);

goog.exportProperty(
    ol.layer.Layer.prototype,
    'getSource',
    ol.layer.Layer.prototype.getSource);

goog.exportProperty(
    ol.proj.Projection.prototype,
    'getUnits',
    ol.proj.Projection.prototype.getUnits);

goog.exportProperty(
    ol.Object.prototype,
    'get',
    ol.Object.prototype.get);

goog.exportProperty(
    ol.View2D.prototype,
    'fitExtent',
    ol.View2D.prototype.fitExtent);

goog.exportProperty(
    ol.Observable.prototype,
    'on',
    ol.Observable.prototype.on);

goog.exportSymbol(
    'ol.RendererHint',
    ol.RendererHint);
goog.exportProperty(
    ol.RendererHint,
    'CANVAS',
    ol.RendererHint.CANVAS);

goog.exportSymbol(
    'ol.proj.Units',
    ol.proj.Units
);

goog.exportSymbol(
    'ol.control.defaults',
    ol.control.defaults);

goog.exportProperty(
    ol.Collection.prototype,
    'extend',
    ol.Collection.prototype.extend);

goog.exportSymbol(
    'ol.Map',
    ol.Map);

goog.exportSymbol(
    'ol.View2D',
    ol.View2D);

goog.exportSymbol(
    'ol.control.MousePosition',
    ol.control.MousePosition);

goog.exportSymbol(
    'ol.layer.Image',
    ol.layer.Image);

goog.exportSymbol(
    'ol.source.ImageWMS',
    ol.source.ImageWMS);

goog.exportSymbol(
    'ol.layer.Tile',
    ol.layer.Tile);

goog.exportSymbol(
    'ol.source.TileWMS',
    ol.source.TileWMS);

goog.exportSymbol(
    'ol.coordinate.createStringXY',
    ol.coordinate.createStringXY);

goog.exportSymbol(
    'ol.proj.Projection',
    ol.proj.Projection);
