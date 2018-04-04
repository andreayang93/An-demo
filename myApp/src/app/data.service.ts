import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, HttpModule} from '@angular/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('public/item.json');
  }
}
