import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-upcomming-movie',
  templateUrl: './upcomming-movie.component.html',
  styleUrls: ['./upcomming-movie.component.css']
})
export class UpcommingMovieComponent implements OnInit ,OnDestroy{
  movieSubs:Subscription
  movies=[];
  constructor(private mService:MovieServiceService){}
  ngOnInit(){
 this.movieSubs=this.mService.getUpcommingMovies().subscribe(
  (data:any)=>{
    this.movies=data.results;
  }
  
)
  }
  ngOnDestroy(){
this.movieSubs.unsubscribe()
  }
}
