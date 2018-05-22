import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent }  from './quotes.component';

@NgModule({
  imports:      [ CommonModule ],
  exports: [ QuotesComponent ],
  declarations: [ QuotesComponent ],
  providers: [ ]
})
export class QuotesModule { }