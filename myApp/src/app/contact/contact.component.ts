import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private myLocation: Location) { }

  ngOnInit() {
  }
  public goBack() {
    this.myLocation.back();
  }
}
