import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-famous-movie',
  templateUrl: './famous-movie.component.html',
  styleUrls: ['./famous-movie.component.css']
})
export class FamousMovieComponent implements OnInit,OnDestroy {
  movieSubs:Subscription

  movies=[];
  constructor(private mService:MovieServiceService){}
  ngOnInit(){
 this.movieSubs=this.mService.getTopRatedMovie().subscribe(
   (data:any)=>{
     this.movies=data.results
     console.log(data.results)
   }
 )

  }
  


ngOnDestroy(){
  this.movieSubs.unsubscribe()
}  

}
