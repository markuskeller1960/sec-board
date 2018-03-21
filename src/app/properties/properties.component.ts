import { Component } from '@angular/core';

import { PropertiesService } from './properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

  public properties;

  constructor(public propertiesService: PropertiesService) {
    propertiesService.load({}).subscribe(res => this.properties = res);
  }
}
