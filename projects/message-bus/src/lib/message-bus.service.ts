import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  public event = new BehaviorSubject<string>('init');

  constructor() { }
}
