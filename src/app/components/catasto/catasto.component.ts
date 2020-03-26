import { Component, OnInit, Input } from '@angular/core';
import 'proj4leaflet';
import * as L from 'leaflet';
import { WMCapabilitiesService } from 'src/app/services/wmcapabilities.service';
import { LayerElement } from 'src/app/services/WMSCapabilitiesType';
import { Observable } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-catasto',
  templateUrl: './catasto.component.html',
  styleUrls: ['./catasto.component.css']
})
export class CatastoComponent implements OnInit {
  @Input() mappa: L.Map;
  listLayer: L.TileLayer.WMS [];
  listWMSLayer: Observable<LayerElement[]>;

  constructor(private wmsService: WMCapabilitiesService) { }

  ngOnInit() {
    this.listLayer = [];

    const Bbox_width = 18.99 - 5.93;
    const startResolution = Bbox_width / 1024;
    const grid_resolution = new Array(22);
    for (let i = 0; i < 22; ++i) {
      grid_resolution[i] = startResolution / Math.pow(2, i);
    }



    const crs_6706 = new L.Proj.CRS('EPSG:6706',
    '+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs',
    {
      origin: [0, 0],
      bounds: L.bounds([5.93, 34.76], [18.99, 47.1]),
      resolutions: grid_resolution
    });



    this.wmsService.getCapabilities('https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?' +
    'SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities').subscribe(res => {
      console.log(res);

      res.forEach(element => {
        const nuovoLayer = new L.TileLayer.WMS('https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php', {
          layers: element.Name,
          version: '1.3.0',
          format: 'image/png',
          transparent: true,
          tileSize: 1024,
          maxNativeZoom: 5000,
          opacity: 0.5,
          crs: crs_6706,
          Name: element.Title

        });

        // if (this.mappa.hasLayer(nuovoLayer)) {
        //   this.mappa.eachLayer(layer =>{
        //     if (layer as L.TileLayer.WMS) {
        //       if (layer == nuovoLayer) {
        //         nuovoLayer.options.opacity = (layer as L.TileLayer.WMS).options.opacity;
        //       }
        //     }
        //   })
        // }

        this.listLayer.push(nuovoLayer);

      });
    });

















  }
  AttivaLayer(event: MatSlideToggleChange, elem: L.TileLayer.WMS) {
    console.log(event);
    if (event.checked) {
      elem.addTo(this.mappa);
    } else {
      elem.remove();
    }
  }
  CambioTrasparenza(event: MatSliderChange, elem: L.TileLayer.WMS) {
     elem.setOpacity(event.value);
  }

}
