import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DataService, Comment} from '../data.service';
import { Product } from '../product/Product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private picUrl: string;
  public product: Product;
  public comments: Comment[];
  constructor(private routerInfo: ActivatedRoute,
              private infoDetailService: DataService) { }
  ngOnInit() {
    this.picUrl = 'http://placehold.it/200x150';
    const productID: number = this.routerInfo.snapshot.params['prodid'];
    this.product = this.infoDetailService.getProduct(productID);
    this.comments = this.infoDetailService.getCommentForProduct(productID);
  }

}
