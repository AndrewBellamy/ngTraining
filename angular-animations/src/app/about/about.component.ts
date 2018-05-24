import { Component, OnInit, HostBinding } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [ Animations.page, Animations.shadow ]
})

export class AboutComponent implements OnInit {

  public state = 'off'

  @HostBinding('@routeAnimation') anyProperty = 'anything'

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'off' ? 'on' : 'off'
  }

}
