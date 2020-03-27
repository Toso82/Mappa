/***********
generated template classes for ./capabilities_1_3_0.xsd 26/3/2020, 09:59:31
***********/






export class Capabilities_1_3_0 {
    public wMS_Capabilities: WMS_Capabilities;
    public keywordList: KeywordList;
    public keyword: Keyword;
    public onlineResource: OnlineResource;
    public service: Service;
    public contactInformation: ContactInformation;
    public contactPersonPrimary: ContactPersonPrimary;
    public contactAddress: ContactAddress;
    public capability: Capability;
    public request: Request;
    public operationType: OperationType;
    public dCPType: DCPType;
    public hTTP: HTTP;
    public get: Get;
    public post: Post;
    public exception: Exception;
    public layer: Layer;
    public eX_GeographicBoundingBox: EX_GeographicBoundingBox;
    public boundingBox: BoundingBox;
    public dimension: Dimension;
    public attribution: Attribution;
    public logoURL: LogoURL;
    public metadataURL: MetadataURL;
    public authorityURL: AuthorityURL;
    public identifier: Identifier;
    public dataURL: DataURL;
    public featureListURL: FeatureListURL;
    public style: Style;
    public legendURL: LegendURL;
    public styleSheetURL: StyleSheetURL;
    public styleURL: StyleURL;

    public constructor(props?: Capabilities_1_3_0) {
        this["@class"] = ".Capabilities_1_3_0";

        (<any>Object).assign(this, <any> props);
    }
}

export class WMS_Capabilities {
    public Service: wms.Service;
    public Capability: wms.Capability;

    public constructor(props?: WMS_Capabilities) {
        this["@class"] = ".WMS_Capabilities";

        (<any>Object).assign(this, <any> props);
    }
}

export class KeywordList {
    public Keyword?: wms.Keyword[];

    public constructor(props?: KeywordList) {
        this["@class"] = ".KeywordList";

        (<any>Object).assign(this, <any> props);
    }
}

export class Keyword {
    public constructor(props?: Keyword) {
        this["@class"] = ".Keyword";

        (<any>Object).assign(this, <any> props);
    }
}

export class OnlineResource {
    public constructor(props?: OnlineResource) {
        this["@class"] = ".OnlineResource";

        (<any>Object).assign(this, <any> props);
    }
}

export class Service {
    public Title: wms.Title;
    public Abstract: wms.Abstract;
    public KeywordList: wms.KeywordList;
    public OnlineResource: wms.OnlineResource;
    public ContactInformation: wms.ContactInformation;
    public Fees: wms.Fees;
    public AccessConstraints: wms.AccessConstraints;
    public LayerLimit: wms.LayerLimit;
    public MaxWidth: wms.MaxWidth;
    public MaxHeight: wms.MaxHeight;

    public constructor(props?: Service) {
        this["@class"] = ".Service";

        (<any>Object).assign(this, <any> props);
    }
}

export class ContactInformation {
    public ContactPersonPrimary: wms.ContactPersonPrimary;
    public ContactPosition: wms.ContactPosition;
    public ContactAddress: wms.ContactAddress;
    public ContactVoiceTelephone: wms.ContactVoiceTelephone;
    public ContactFacsimileTelephone: wms.ContactFacsimileTelephone;
    public ContactElectronicMailAddress: wms.ContactElectronicMailAddress;

    public constructor(props?: ContactInformation) {
        this["@class"] = ".ContactInformation";

        (<any>Object).assign(this, <any> props);
    }
}

export class ContactPersonPrimary {
    public ContactPerson: wms.ContactPerson;
    public ContactOrganization: wms.ContactOrganization;

    public constructor(props?: ContactPersonPrimary) {
        this["@class"] = ".ContactPersonPrimary";

        (<any>Object).assign(this, <any> props);
    }
}

export class ContactAddress {
    public AddressType: wms.AddressType;
    public Address: wms.Address;
    public City: wms.City;
    public StateOrProvince: wms.StateOrProvince;
    public PostCode: wms.PostCode;
    public Country: wms.Country;

    public constructor(props?: ContactAddress) {
        this["@class"] = ".ContactAddress";

        (<any>Object).assign(this, <any> props);
    }
}

export class Capability {
    public Request: wms.Request;
    public Exception: wms.Exception;
    public _ExtendedCapabilities?: wms._ExtendedCapabilities[];
    public Layer: wms.Layer;

    public constructor(props?: Capability) {
        this["@class"] = ".Capability";

        (<any>Object).assign(this, <any> props);
    }
}

export class Request {
    public GetCapabilities: wms.GetCapabilities;
    public GetMap: wms.GetMap;
    public GetFeatureInfo: wms.GetFeatureInfo;
    public _ExtendedOperation?: wms._ExtendedOperation[];

    public constructor(props?: Request) {
        this["@class"] = ".Request";

        (<any>Object).assign(this, <any> props);
    }
}

export class OperationType {
    public Format?: wms.Format[];
    public DCPType?: wms.DCPType[];

    public constructor(props?: OperationType) {
        this["@class"] = ".OperationType";

        (<any>Object).assign(this, <any> props);
    }
}

export class DCPType {
    public HTTP: wms.HTTP;

    public constructor(props?: DCPType) {
        this["@class"] = ".DCPType";

        (<any>Object).assign(this, <any> props);
    }
}

export class HTTP {
    public Get: wms.Get;
    public Post: wms.Post;

    public constructor(props?: HTTP) {
        this["@class"] = ".HTTP";

        (<any>Object).assign(this, <any> props);
    }
}

export class Get {
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: Get) {
        this["@class"] = ".Get";

        (<any>Object).assign(this, <any> props);
    }
}

export class Post {
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: Post) {
        this["@class"] = ".Post";

        (<any>Object).assign(this, <any> props);
    }
}

export class Exception {
    public Format?: wms.Format[];

    public constructor(props?: Exception) {
        this["@class"] = ".Exception";

        (<any>Object).assign(this, <any> props);
    }
}

export class Layer {
    public Name: wms.Name;
    public Title: wms.Title;
    public Abstract: wms.Abstract;
    public KeywordList: wms.KeywordList;
    public CRS?: wms.CRS[];
    public EX_GeographicBoundingBox: wms.EX_GeographicBoundingBox;
    public BoundingBox?: wms.BoundingBox[];
    public Dimension?: wms.Dimension[];
    public Attribution: wms.Attribution;
    public AuthorityURL?: wms.AuthorityURL[];
    public Identifier?: wms.Identifier[];
    public MetadataURL?: wms.MetadataURL[];
    public DataURL?: wms.DataURL[];
    public FeatureListURL?: wms.FeatureListURL[];
    public Style?: wms.Style[];
    public MinScaleDenominator: wms.MinScaleDenominator;
    public MaxScaleDenominator: wms.MaxScaleDenominator;
    public Layer?: wms.Layer[];

    public constructor(props?: Layer) {
        this["@class"] = ".Layer";

        (<any>Object).assign(this, <any> props);
    }
}

export class EX_GeographicBoundingBox {
    public westBoundLongitude: wms.longitudeType;
    public eastBoundLongitude: wms.longitudeType;
    public southBoundLatitude: wms.latitudeType;
    public northBoundLatitude: wms.latitudeType;

    public constructor(props?: EX_GeographicBoundingBox) {
        this["@class"] = ".EX_GeographicBoundingBox";

        (<any>Object).assign(this, <any> props);
    }
}

export class BoundingBox {
    public CRS: string;
    public minx: number;
    public miny: number;
    public maxx: number;
    public maxy: number;
    public resx: number;
    public resy: number;

    public constructor(props?: BoundingBox) {
        this["@class"] = ".BoundingBox";

        (<any>Object).assign(this, <any> props);
    }
}

export class Dimension {
    public constructor(props?: Dimension) {
        this["@class"] = ".Dimension";

        (<any>Object).assign(this, <any> props);
    }
}

export class Attribution {
    public Title: wms.Title;
    public OnlineResource: wms.OnlineResource;
    public LogoURL: wms.LogoURL;

    public constructor(props?: Attribution) {
        this["@class"] = ".Attribution";

        (<any>Object).assign(this, <any> props);
    }
}

export class LogoURL {
    public Format: wms.Format;
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: LogoURL) {
        this["@class"] = ".LogoURL";

        (<any>Object).assign(this, <any> props);
    }
}

export class MetadataURL {
    public Format: wms.Format;
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: MetadataURL) {
        this["@class"] = ".MetadataURL";

        (<any>Object).assign(this, <any> props);
    }
}

export class AuthorityURL {
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: AuthorityURL) {
        this["@class"] = ".AuthorityURL";

        (<any>Object).assign(this, <any> props);
    }
}

export class Identifier {
    public constructor(props?: Identifier) {
        this["@class"] = ".Identifier";

        (<any>Object).assign(this, <any> props);
    }
}

export class DataURL {
    public Format: wms.Format;
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: DataURL) {
        this["@class"] = ".DataURL";

        (<any>Object).assign(this, <any> props);
    }
}

export class FeatureListURL {
    public Format: wms.Format;
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: FeatureListURL) {
        this["@class"] = ".FeatureListURL";

        (<any>Object).assign(this, <any> props);
    }
}

export class Style {
    public Name: wms.Name;
    public Title: wms.Title;
    public Abstract: wms.Abstract;
    public LegendURL?: wms.LegendURL[];
    public StyleSheetURL: wms.StyleSheetURL;
    public StyleURL: wms.StyleURL;

    public constructor(props?: Style) {
        this["@class"] = ".Style";

        (<any>Object).assign(this, <any> props);
    }
}

export class LegendURL {
    public Format: wms.Format;
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: LegendURL) {
        this["@class"] = ".LegendURL";

        (<any>Object).assign(this, <any> props);
    }
}

export class StyleSheetURL {
    public Format: wms.Format;
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: StyleSheetURL) {
        this["@class"] = ".StyleSheetURL";

        (<any>Object).assign(this, <any> props);
    }
}

export class StyleURL {
    public Format: wms.Format;
    public OnlineResource: wms.OnlineResource;

    public constructor(props?: StyleURL) {
        this["@class"] = ".StyleURL";

        (<any>Object).assign(this, <any> props);
    }
}
