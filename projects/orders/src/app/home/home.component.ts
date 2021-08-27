import { Component, OnInit } from '@angular/core';
import {MessageBusService} from "message-bus";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messageBus: MessageBusService) {
    this.messageBus.event.subscribe(msg => console.log('Message received in Orders: ', msg));
  }

  ngOnInit(): void {
  }

}
