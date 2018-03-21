import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { InstanceService } from './instance.service';
import { Instance } from './instance.model';

export class InstanceListDataSource extends DataSource<any> {
  constructor(private instanceService: InstanceService) {
    super();
  }

  connect(): Observable<Instance[]> {
    return this.instanceService.getInstances();
  }

  disconnect() {}
}

