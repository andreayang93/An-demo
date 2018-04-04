import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;
  public imgUrl: string;
  constructor() {
  }

  ngOnInit() {
    this.imgUrl = 'http://placehold.it/250x150';
    this.products = [
      new Product(1, '第一个商品', 899, 3.5, '这是一个电脑', ['电子产品', '家电']),
      new Product(2, '第二个商品', 799, 2.5, '这是一个衣服', ['电子产品', '家电']),
      new Product(3, '第三个商品', 859, 4.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new Product(4, '第四个商品', 699, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new Product(5, '第五个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new Product(6, '第六个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new Product(7, '第七个商品', 699, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new Product(8, '第八个商品', 599, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new Product(9, '第九个商品', 199, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    ];
  }
}


