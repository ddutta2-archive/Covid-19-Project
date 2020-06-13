import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidworldsummaryComponent } from './covidworldsummary/covidworldsummary.component';
import { CovidcountrysummaryComponent } from './covidcountrysummary/covidcountrysummary.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DatePipe } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CovidworldsummaryComponent,
    CovidcountrysummaryComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    {provide: LocationStrategy, useClass: HashLocationStrategy}    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
