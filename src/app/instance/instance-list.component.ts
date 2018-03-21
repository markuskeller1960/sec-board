import { Component, OnInit } from '@angular/core';

import { InstanceService } from './instance.service';
import { InstanceListDataSource } from './instance-list-data-source';

@Component({
  selector: 'app-instance-list',
  templateUrl: './instance-list.component.html',
  styleUrls: ['./instance-list.component.scss']
})
export class InstanceListComponent implements OnInit {

  instanceDataSource: InstanceListDataSource;
  displayedColumns = ['number', 'u_instance_name', 'sys_updated_on', 'sys_updated_by', 'u_used_for', 'u_is_private'];

  constructor(public instanceService: InstanceService) {}

  ngOnInit() {
    this.instanceDataSource = new InstanceListDataSource(this.instanceService);
  }

  selectRow(row) {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX' + row.number);
  }
}
