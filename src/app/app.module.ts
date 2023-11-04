import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AmazonComponent } from './amazon/amazon.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent,
    FlipkartComponent,
    AmazonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
