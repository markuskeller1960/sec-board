import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PropertiesComponent } from './properties.component';
import { PropertiesService } from './properties.service';

@NgModule({
  declarations: [
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PropertiesService
  ],
  exports: [
    PropertiesComponent
  ]
})
export class PropertiesModule { }
