import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material-module';
import { MarkerComponent } from './map/marker/marker.component';
import { PolygonComponent } from './map/polygon/polygon.component';
import { LineComponent } from './map/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent,
    PolygonComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
