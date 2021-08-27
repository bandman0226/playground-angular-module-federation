import { Component } from '@angular/core';
import {MessageBusService} from "message-bus";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main';

  constructor(private messageBus: MessageBusService) {
    this.messageBus.event.next('Hello from the shell!');
  }
}
