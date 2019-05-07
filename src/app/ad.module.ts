import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdRoutingModule } from './ad-routing.module';

import { AdComponent } from './ad.component';

@NgModule({
  declarations: [
    AdComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AdRoutingModule,
  ],
  providers: [],
  bootstrap: [AdComponent]
})
export class AdModule { }
