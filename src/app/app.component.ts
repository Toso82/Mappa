import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet';
import 'proj4leaflet';

import { CatastoComponent } from './components/catasto/catasto.component';

import '@geoman-io/leaflet-geoman-free';
import 'leaflet-measure-path';
import 'leaflet.locatecontrol';


import './GoogleMapsTileLayer';
import { GoogleMapsTileLayer, GoogleMapsType } from './GoogleMapsTileLayer';
import { LLayerControl } from './LMaterialLayer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'maps';

  componentRef: any;
  map: L.Map;

  @ViewChild('templatecomponent', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;



  constructor(private resolver: ComponentFactoryResolver) { }


  ngOnInit(): void {



    this.leafleft();


    // var elem = document.createElement('app-material-zoom');
    // document.body.appendChild(elem);

  }

  leafleft() {

   
    const CRS_54032 = new L.Proj.CRS('ESRI:54032', '+proj=aeqd +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs', );



   

    const googlestreets = new GoogleMapsTileLayer(GoogleMapsType.standardRoadMap);
    const googlesatellite = new GoogleMapsTileLayer(GoogleMapsType.hybrid);
    const googleterrein = new GoogleMapsTileLayer(GoogleMapsType.terrain);

    const mapbox: L.TileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic3RpZ2lhY29tbyIsImEiOiJjam1pd2M1c3gwOWZ6M3BxbGlycG9zMmYwIn0.ldZhPPgU53G6k38VECL31A'
    });

    const openstreet: L.TileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    /*
    const catasto = L.tileLayer.wms('https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php', {
      layers: 'fabbricati',
      format: 'image/png',
      transparent: true,
      // crs: "EPSG4258"
    });
*/

    this.map = new L.Map('mapL', {
      center: new L.LatLng(41.87194, 12.56738),
      zoom: 5,
      zoomControl: false,
      // crs: CRS_54032,

    });




    const baseMaps = {
      'GoogleStreet': googlestreets,
      'Satellite': googlesatellite,
      'Google Terreno': googleterrein,
      'OpenStreet': openstreet,
      'Mapbox': mapbox,

    };
    /*
    const overMaps = {
      'Etichette': googleetichette,
      'Catasto': catasto
    };
    */
    new LLayerControl('GoogleStreet', baseMaps, { position: 'topleft' }).addTo(this.map);



    // L.control.layers(baseMaps, overMaps,{position:'topleft'}).addTo(map);



    // L.control.zoom({ position:'bottomleft'}).addTo(map);


    // (<any>(this.map.pm)).setLang('it');
    // this.map.pm.addControls({ position: 'topright', drawMarker: false });

    // this.map.on('pm:create', e => {
    //   (<any>e).layer.showMeasurements();
    //   console.log(e);
    // });




    



  }





  openCatasto(drawbar: any) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(CatastoComponent);


    const component = <CatastoComponent>this.entry.createComponent(factory).instance;

    component.mappa = this.map;


    drawbar.toggle();
  }

}
