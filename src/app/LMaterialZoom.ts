import * as L from 'leaflet';
import { NgElement, WithProperties } from '@angular/elements';


export class LMaterialZoom extends L.Control {
    layerBase: L.Control.LayersObject;
    selectlayer: string;

    onAdd(map: L.Map) {
        
        const tag = document.createElement('app-material-zoom') as NgElement 
        & WithProperties<{mappa: L.Map, layer: L.Control.LayersObject, layerSelect: string}>;
        tag.mappa = map;
        tag.layer = this.layerBase;
        tag.layerSelect = this.selectlayer;


        return tag;
    }
    onRemove(map: L.Map) {
        // Nothing to do here
      }

    constructor(selectLayer: string, baselayer?: L.Control.LayersObject, options?: L.ControlOptions){
        super(options);
        this.layerBase = baselayer;
        this.selectlayer = selectLayer;
    }
}