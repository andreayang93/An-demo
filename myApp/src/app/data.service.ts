import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, HttpModule} from '@angular/http';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { Product } from './product/Product';

@Injectable()
export class DataService {
  private products: Product[] = [
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
  private comments: Comment[] = [
    new Comment(1, 1, 'cdscds', 3, 'haig'),
    new Comment(2, 1, 'yang', 3, 'ying'),
    new Comment(3, 2, 'cd', 5, 'cdcd')
  ];
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
  deleteData(data) {
    return this.http.delete<any[]>(this._deleteUrl);
  }
  public getProducts(): Product[] {
    return this.products;
  }
  public getProduct(id: number): Product {
    return this.products.find( (product) =>
    product.id === id
  );
  }
  public getCommentForProduct(id: number): Comment[] {
    return this.comments.filter((comments: Comment) => comments.productId === id);
  }
}
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timeStamp: string,
    public rating: number,
    public content: string
  ) {}
}

