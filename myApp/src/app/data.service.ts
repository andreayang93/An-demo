import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, HttpModule} from '@angular/http';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class DataService {
  private _getUrl = 'http://localhost:8081/item';
  private _postUrl = 'http://localhost:8081/newitem';
  private _deleteUrl = 'http://localhost:8081/deleteitem';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any[]>(this._getUrl);
  }
  saveData(data) {
    return this.http.post<any[]>(this._postUrl, data);
  }
  deleteData() {
    return this.http.delete<any[]>(this._deleteUrl);
  }
}
