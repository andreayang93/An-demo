import { Component, OnInit } from '@angular/core';
import { Items } from './Items';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [DataService]
})
export class ItemListComponent implements OnInit {
  public item  = new Items(
    6, 'cd', 9999, 666, 'cdsc'
  );
  public id: number;
  public name: string;
  public inventory: number;
  public price: number;
  public category: string;
  constructor(
    public dataservice: DataService,
  ) { }

  public showData() {
    this.dataservice.getData().subscribe(
      (data: any) => {
        this.item = data;
      }
    );
  }
  ngOnInit() {
    return this.showData();
  }

}
