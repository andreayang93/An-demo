import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../shared/websocket.service';
@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {

  constructor( private wsSevice: WebsocketService) { }

  ngOnInit() {
    this.wsSevice.createObservableSocket('ws://localhost:8085')
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('end')
    );
  }
  sendMessageToServer () {
    this.wsSevice.sendMessage('hello from clients');
  }
}
