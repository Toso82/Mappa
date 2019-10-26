import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// import * as convert from 'xml-js';

import * as parse from 'fast-xml-parser';
import './WMSCapabilitiesType';
import { Welcome, LayerElement } from './WMSCapabilitiesType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WMCapabilitiesService {

  constructor(private http: HttpClient) {
  }

  getCapabilities(url: string): Observable <LayerElement[]> {
    url = 'https://cors-anywhere.herokuapp.com/' + url;


    // const httpHeaders = new HttpHeaders()
    //   .set('X-Alt-Referer', 'wms.cartografia.agenziaentrate.gov.it');

    return this.http.get(url, {responseType: 'text'}).pipe(
      map (reponse => {
        const json: Welcome = parse.parse(reponse.toString());
        return json.WMS_Capabilities.Capability.Layer.Layer;
      })
    );
  }
}
