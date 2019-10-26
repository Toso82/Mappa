import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';


@Component({
  selector: 'app-layer-control',
  templateUrl: './layer-control.component.html',
  styleUrls: ['./layer-control.component.css'],
  
})
export class LayerControlComponent implements OnInit {
  @Input() mappa: L.Map;
  @Input() layer: L.Control.LayersObject;


  @Input() layerSelect: string;

  visibile = false;

  constructor() { }

  ngOnInit() {
    console.log(this.layer);
    this.layer[this.layerSelect].addTo(this.mappa);
    
  }

  keys(): Array<string> {
    const keys = Object.keys(this.layer);
    return keys;
  }

  layerChange(event) {
    //console.log(this.layerSelect);
    //console.log('Event:',event);
    for (const item of this.keys()) {
      this.layer[item].remove();
    }
    
    this.layer[this.layerSelect].addTo(this.mappa);
  }
  mostraLayer() {
    this.visibile==true;
    
  }
}
