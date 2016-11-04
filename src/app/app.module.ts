import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule,
         JsonpModule }      from '@angular/http';

import { AppComponent }     from './app.component';
import { Search }           from './search.component';

import { WikiService }      from './wiki.service';

@NgModule({
  declarations: [
    AppComponent,
    Search
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
