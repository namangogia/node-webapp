import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    LessonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }