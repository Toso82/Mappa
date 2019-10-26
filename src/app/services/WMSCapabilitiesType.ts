export interface Welcome {
    WMS_Capabilities: WMSCapabilities;
}

export interface WMSCapabilities {
    Service:    Service;
    Capability: Capability;
}

export interface Capability {
    Request:                           Request;
    Exception:                         Exception;
    'sld:UserDefinedSymbolization':    string;
    'inspire_vs:ExtendedCapabilities': InspireVsExtendedCapabilities;
    Layer:                             CapabilityLayer;
}

export interface Exception {
    Format: string[];
}

export interface CapabilityLayer {
    Name:                     string;
    Title:                    string;
    Abstract:                 string;
    KeywordList:              KeywordList;
    CRS:                      string[];
    EX_GeographicBoundingBox: EXGeographicBoundingBox;
    BoundingBox:              string;
    Style:                    Style;
    Layer:                    LayerElement[];
}

export interface EXGeographicBoundingBox {
    westBoundLongitude: number;
    eastBoundLongitude: number;
    southBoundLatitude: number;
    northBoundLatitude: number;
}

export interface KeywordList {
    Keyword: string[];
}

export interface LayerElement {
    Name:                      string;
    Title:                     string;
    Abstract:                  string;
    EX_GeographicBoundingBox?: EXGeographicBoundingBox;
    BoundingBox?:              string;
    MetadataURL?:              URL;
    Style:                     Style;
    MinScaleDenominator?:      number;
    MaxScaleDenominator?:      number;
    Layer?:                    LayerElement[];
}

export interface URL {
    Format:         InspireCommonMediaType;
    OnlineResource: string;
}

export enum InspireCommonMediaType {
    ApplicationVndOgcCswCapabilitiesResponseXML = 'application/vnd.ogc.csw.capabilities.response_xml',
    ImagePNG = 'image/png',
}

export interface Style {
    Name:      Name;
    Title:     Name;
    LegendURL: URL;
}

export enum Name {
    Default = 'default',
}

export interface Request {
    GetCapabilities: GetCapabilities;
    GetMap:          GetFeatureInfoClass;
    GetFeatureInfo:  GetFeatureInfoClass;
}

export interface GetCapabilities {
    Format:  string;
    DCPType: DCPType;
}

export interface DCPType {
    HTTP: HTTP;
}

export interface HTTP {
    Get:  Get;
    Post: Get;
}

export interface Get {
    OnlineResource: string;
}

export interface GetFeatureInfoClass {
    Format:  string[];
    DCPType: DCPType;
}

export interface InspireVsExtendedCapabilities {
    'inspire_common:MetadataUrl':        InspireCommonMetadataURL;
    'inspire_common:SupportedLanguages': InspireCommonSupportedLanguages;
    'inspire_common:ResponseLanguage':   InspireCommonLanguage;
}

export interface InspireCommonMetadataURL {
    'inspire_common:URL':       string;
    'inspire_common:MediaType': InspireCommonMediaType;
}

export interface InspireCommonLanguage {
    'inspire_common:Language': string;
}

export interface InspireCommonSupportedLanguages {
    'inspire_common:DefaultLanguage': InspireCommonLanguage;
}

export interface Service {
    Name:               string;
    Title:              string;
    Abstract:           string;
    KeywordList:        KeywordList;
    OnlineResource:     string;
    ContactInformation: ContactInformation;
    Fees:               string;
    AccessConstraints:  string;
    MaxWidth:           number;
    MaxHeight:          number;
}

export interface ContactInformation {
    ContactPersonPrimary:         ContactPersonPrimary;
    ContactPosition:              string;
    ContactElectronicMailAddress: string;
}

export interface ContactPersonPrimary {
    ContactPerson:       string;
    ContactOrganization: string;
}
