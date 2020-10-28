import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamousMovieComponent } from './famous-movie/famous-movie.component';
import { UpcommingMovieComponent } from './upcomming-movie/upcomming-movie.component';

const routes: Routes = [
  {path:"" ,component:FamousMovieComponent},
  {path:'famous',component:FamousMovieComponent},
  {path:'upcomming',component:UpcommingMovieComponent},
  {path:"**",redirectTo:'/famous'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
