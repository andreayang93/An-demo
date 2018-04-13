import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {
  @Input() childStock: string;
  @Input() childAmout: string;
  debugger;
  public birthday = new Date();
  constructor() { }
  ngOnInit() {
  }
}
