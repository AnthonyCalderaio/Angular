import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from '/Users/anthony/Desktop/Manifest/experiment1/src/server/server.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
