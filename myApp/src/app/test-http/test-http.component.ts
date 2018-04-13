import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {
  // dataSource: Observable<any>;
  // products: Array<any>;
  products: Observable<any>;
  constructor(private http: Http) {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'basic 12345');
    // this.dataSource = this.http.get('/api/products')
    // .map((res) => res.json());
    this.products = this.http.get('/api/products', {headers: myHeaders})
    .map((res) => res.json());
  }
/*利用异步管道 在模板中*/

  ngOnInit() {
    // this.dataSource.subscribe(
    //   (data) => this.products = data
    // );
  }

}
