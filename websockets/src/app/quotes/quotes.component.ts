import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent  {
  quotes: Array<{}> = [];
  status: number = 0; // 0=closed, 1=open
  statusText: string[] = ['Closed', 'Open'];
  url: string = 'ws://localhost:4000';

  constructor(private webSocketService: WebsocketService){}

  startWebsocketCommunications(){
    let obs: Observable<{}> = this.webSocketService.getMessages()

    this.status = 1 //Means open
    obs.subscribe((msg: string) => {
      console.log('msg: ' + msg)
      this.quotes.push(JSON.parse(msg))
    })
  }

  stopWebsocketCommunications(){
    this.webSocketService.stopMessages()
    this.status = 0 //Means closed
  }

  resetMessages(){
    if (this.status === 1) {
      this.stopWebsocketCommunications()
      this.quotes = []
    } else {
      this.quotes = []
    }
  }

}
