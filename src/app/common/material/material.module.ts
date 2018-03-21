import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
  ],
  declarations: [],
  exports: [
    CdkTableModule
  ]
})
export class MaterialModule { }
