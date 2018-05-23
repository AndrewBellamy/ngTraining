import { Component } from '@angular/core';

@Component({
    selector: 'my-spa',
    templateUrl: './spa.html'
})
export class MySPA {
    
}

@Component({
    selector: 'home-directive',
    template: `
    <h2>Home</h2>
    <p>This is the home page</p>`
})
export class Home {} 

@Component({
    selector: 'about-directive',
    template: `
    <h2>About</h2>
    <p>About our company</p>`
})
export class About {} 

@Component({
    selector: 'news-directive',
    template: `
    <h2>New</h2>
    <p>Latest news</p>`
})
export class News {} 