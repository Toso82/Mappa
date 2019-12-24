import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule, MatListModule, 
  MatDividerModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonToggleModule, 
  MatRadioModule,
  MatSelectModule,
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material';
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
    MatButtonModule,
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
