import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { FamousMovieComponent } from './famous-movie/famous-movie.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpcommingMovieComponent } from './upcomming-movie/upcomming-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FamousMovieComponent,
    FamousMovieComponent,
    UpcommingMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
