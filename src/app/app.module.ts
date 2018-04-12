import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA , ApplicationRef  } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { DirectionsMapDirective } from './google-map.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectionsMapDirective
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGxBc7Ei2xIYbeOCCN0C8maGVB3zfMWpM',
      libraries: ["places"]
    }),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
