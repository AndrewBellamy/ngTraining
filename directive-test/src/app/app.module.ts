import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewsList } from './news-list/newsList.component';
import { NewsService } from './news-list/newsList.service';
import { NewsSearchPipe } from './news-list/newsSearch.pipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations:  [ NewsList, NewsSearchPipe ],
  providers: [NewsService],
  bootstrap:     [ NewsList ]
})
export class AppModule { }
