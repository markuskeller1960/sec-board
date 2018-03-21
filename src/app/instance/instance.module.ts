import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material and layout stuff
import { MaterialModule } from '../common/material';

// Business stuff
import { InstanceListComponent } from './instance-list.component';
import { InstanceService } from './instance.service';

@NgModule({
  declarations: [
    InstanceListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    InstanceService
  ],
  exports: [
    InstanceListComponent,
  ]
})
export class InstanceModule { }
