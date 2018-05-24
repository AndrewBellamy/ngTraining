import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>App Component</h3>
    <input type="button" [routerLink]="['/home']" value="Home" >
    <input type="button" [routerLink]="['/message']" value="Message" >
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {}
