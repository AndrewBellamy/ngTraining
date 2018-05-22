import { Component } from '@angular/core';

@Component({
  selector: 'quotes',
  template: `<div>
  WebSocket Status: <span [ngClass]='{closed: status===0, open:status===1}'>
  {{statusText[status]}}</span><br>
  <button (click)='startWebsocketCommunications()'>Start</button>
  <button (click)='stopWebsocketCommunications()'>Stop</button>
  <button (click)='resetMessages()'>Reset</button>
  <p *ngFor="let quote of quotes" >
    {{quote.ticker}},{{quote.price}},{{quote.change}}
  </p>
  </div>
  `,
  styles: [`
  div{background-color:antiquewhite;display: inline-block; padding:5px;}
  button{margin:5px;}
  span{font-weight:bold;}
  p{color:darkmagenta;margin:0px;background-color:#ddd; text-align:center;}
  .closed{color:crimson;}
  .open{color:#0c0;}
  `]
})
export class QuotesComponent  {
  quotes: Array<{}> = [];
  status: number = 0; // 0=closed, 1=open
  statusText: string[] = ['Closed', 'Open'];
  url: string = 'ws://localhost:4000';

  constructor(){}

  startWebsocketCommunications(){
    // add code here
    alert('not implemented yet');
  }

  stopWebsocketCommunications(){
    // add code here
    alert('not implemented yet');
  }

  resetMessages(){
    // add code here
    alert('not implemented yet');
  }

}
