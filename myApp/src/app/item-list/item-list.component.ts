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
  public id: number;
  public name: string;
  public inventory: number;
  public price: number;
  public category: string;
  public items: any[] = [];
  public item = new Items();
  public term: string;
  constructor(
    public dataservice: DataService,
  ) { }

  public showData() {
    this.dataservice.getData().subscribe(
      (data: any[]) => {
        this.items = data;
      }
    );
  }
  ngOnInit() {
    return this.showData();
  }

  public addData() {
    this.dataservice.saveData(this.item).subscribe(
      (data) => this.showData()
    );
  }

  public clearData() {
    this.dataservice.deleteData(this.item).subscribe(
      (data) => this.showData()
    );
  }
}
