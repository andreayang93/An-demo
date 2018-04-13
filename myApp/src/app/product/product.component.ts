import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime} from 'rxjs/operators';
import {DataService} from '../data.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public imageUrl = 'http://placehold.it/320x150';
  public keyword: string;
  searchInput: FormControl = new FormControl();
  constructor(private infoService: DataService) {
    /*可观察对象 发射 valueChanges */
    this.searchInput.valueChanges.debounceTime(500)
        .subscribe(value => this.keyword = value);
  }
  ngOnInit() {
    this.products = this.infoService.getProducts();
  }
}


