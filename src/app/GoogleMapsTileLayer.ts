import * as L from 'leaflet';

export enum GoogleMapsType {
    roadOnly,
    standardRoadMap,
    terrain,
    sateliteOnly,

    terrainOnly,

    hybrid

}

export class GoogleMapsTileLayer extends L.TileLayer {
    private _url =  'https://{s}.google.com/vt/lyrs={type}&x={x}&y={y}&z={z}';
    //private _url =  'https://mobilemaps-pa.googleapis.com/vt/lyrs={type}&x={x}&y={y}&z={z}';
    
    constructor(idMappa: GoogleMapsType) {
        super('', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="https://www.google.it/">Google</a>',
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
          });

        this._url = this._url.replace('{type}', this.getGoogleMapsParameter(idMappa));
        super.setUrl(this._url);
    }


    getGoogleMapsParameter(idTipo: GoogleMapsType) {
        switch (idTipo) {
            case GoogleMapsType.roadOnly:
                return 'h';
            case GoogleMapsType.standardRoadMap:
                return 'm';
            case GoogleMapsType.terrain:
                return 'p';
            case GoogleMapsType.sateliteOnly:
                return 's';
            case GoogleMapsType.terrainOnly:
                return 't';
            case GoogleMapsType.hybrid:
                return 'y';
            default:
                return '';
        }
    }
}
