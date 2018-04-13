import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ourmap',
  templateUrl: './ourmap.component.html',
  styleUrls: ['./ourmap.component.css']
})
export class OurmapComponent implements OnInit {
  public stock;
  public amount;
  constructor() { }

  ngOnInit() {
  }

}
