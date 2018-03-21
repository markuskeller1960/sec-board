import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';

const mockProperties = [
  {
    id: '1',
    name: 'Property 1',
    description: 'Description property 1',
    value: 'A',
    recommendedValue: 'A1',
    modifyDate: '12.12.2018',
    modifyUser: 'Miro'
  },
  {
    id: '2',
    name: 'Property 2',
    description: 'Description property 2',
    value: 'B'
  },
  {
    id: '3',
    name: 'Property 3',
    description: 'Description property 3',
    value: 'C'
  }
];

@Injectable()
export class PropertiesService {

  constructor(private http: HttpClient) {
  }

  /**
   * @param instance
   * @returns {Observable<any>}
   */
  public load(instance): Observable<any> {
    return of(mockProperties);
  }
}
