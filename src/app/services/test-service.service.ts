import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedMap } from '../models/SharedMap';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpclient: HttpClient) { }

  getValori() {
    const url ='https://www.formaps.it/WS/SharedMap/GetMapState/bd9a93f6928641a9';
    /*const url = './assets/Ascoli.json';
    return this.httpclient.get(url).pipe(
    );*/
    return this.httpclient.jsonp(url,'callback').pipe(
      map(x => JSON.parse(x.toString()) as SharedMap)
    );
  }

}
