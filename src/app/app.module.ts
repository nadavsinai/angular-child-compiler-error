import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// @ts-ignore
const worker = require('worker-loader!./worker');
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { constructor() {
  console.log(worker);
}}
