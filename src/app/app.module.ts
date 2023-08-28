import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { NajahPipe } from './najah.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { EmbeddedviewtestComponent } from './embeddedviewtest/embeddedviewtest.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NajahPipe,
    FavoriteComponent,
    LikeComponent,
    EmbeddedviewtestComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
