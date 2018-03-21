import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Instance } from './instance.model';

@Injectable()
export class InstanceService {

  private instancesSubject: BehaviorSubject<Instance[]>;

  constructor(private http: HttpClient) {
    this.instancesSubject = new BehaviorSubject<Instance[]>(new Array<Instance>());
    this.loadInstances().subscribe(instances => this.instancesSubject.next(instances) );
  }

  getInstances(): Observable<Instance[]> {
    return this.instancesSubject.asObservable();
  }

  private loadInstances(): Observable<Instance[]> {
    return this.readInstancesFromURL()
      .map((result) => result.records);
  }

  private readInstancesFromURL(): Observable<any> {
    return this.http.get('././assets/data/security_measurement.json');
  }
}

