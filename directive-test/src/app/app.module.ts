import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NewsList } from './news-list/newsList.component';
import { NewsService } from './news-list/newsList.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations:  [ NewsList ],
  providers: [NewsService],
  bootstrap:     [ NewsList ]
})
export class AppModule { }
