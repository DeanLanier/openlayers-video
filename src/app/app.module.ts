import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OlMapComponent } from './olMap/olMap.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  imports:      [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [ AppComponent, HelloComponent, OlMapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
