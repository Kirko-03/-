import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CounterComponent } from './app.component';

@NgModule({
  declarations: [
    CounterComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CounterComponent]
})
export class AppModule { }
