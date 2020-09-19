import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { SubjectComponent } from './components/subject/subject.component';
import { RxjsModule } from './rxjs/rxjs.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ReactiveComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    RxjsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
