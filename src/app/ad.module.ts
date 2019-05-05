import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdRoutingModule } from './ad-routing.module';

import { AdComponent } from './ad.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdRoutingModule,
  ],
  providers: [],
  bootstrap: [AdComponent]
})
export class AdModule { }
