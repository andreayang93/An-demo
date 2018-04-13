import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  itemsId: number;
  constructor(private itemRouter: ActivatedRoute) { }

  ngOnInit() {
    this.itemsId = this.itemRouter.snapshot.params['itemID'];
  }

}
