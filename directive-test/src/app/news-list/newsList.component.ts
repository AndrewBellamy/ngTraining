import { Component } from '@angular/core';
import { NewsService } from './newsList.service';

@Component({
    selector: "news-list",
    styleUrls: ["./newsList.component.css"],
    templateUrl: "./newsList.component.html"
})
export class NewsList {
    newsItems: {title:string,body:string}[] = []

    selectedNewsId:number

    constructor(private newsSvc: NewsService) {
        newsSvc.getNewsItems().subscribe(res => {
            this.newsItems = res.json()
        },
        error => {
            alert("Sorry. There was a problem getting data.")
        })
    }

    expandNews(id: number) {
        this.selectedNewsId = id

        return false;
    }
}