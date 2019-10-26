import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule, MatListModule, 
  MatDividerModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonToggleModule, 
  MatRadioModule} from '@angular/material';
import { CatastoComponent } from './components/catasto/catasto.component';
import { MaterialZoomComponent } from './components/material-zoom/material-zoom.component';
import { createCustomElement } from '@angular/elements';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CatastoComponent,
    MaterialZoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CatastoComponent, MaterialZoomComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const ZoomElement = createCustomElement(MaterialZoomComponent, { injector: this.injector});
    customElements.define('app-material-zoom', ZoomElement);

    library.add(faLayerGroup);
  }

}
