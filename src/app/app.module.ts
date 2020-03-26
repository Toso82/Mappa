import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldDefaultOptions , MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


import { CatastoComponent } from './components/catasto/catasto.component';
import { LayerControlComponent } from './components/layer-control/layer-control.component';
import { createCustomElement } from '@angular/elements';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AskingPriceComponent } from './components/asking-price/asking-price.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatSliderModule } from '@angular/material/slider';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'fill'
};


@NgModule({
  declarations: [
    AppComponent,
    CatastoComponent,
    LayerControlComponent,
    AskingPriceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientJsonpModule,
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatSelectModule,
    ServiceWorkerModule.register('.ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CatastoComponent, LayerControlComponent,AskingPriceComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const LayerElement = createCustomElement(LayerControlComponent,
      { injector: this.injector, registrationStrategy: 'registerImmediately'});
    customElements.define('app-layer-control', LayerElement);


  }

}
