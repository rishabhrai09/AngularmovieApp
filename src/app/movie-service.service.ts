import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface movieInterface{
  movie:[]
}
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { 

  }
  
 upcoming="upcoming";
 topRated="top_rated";
 API="4caa27c6a263df51e63758353cfb1dca"
  
  getUpcommingMovies(){
   return this.http.get<movieInterface>(`https://api.themoviedb.org/3/movie/${this.upcoming}?api_key=${this.API}&language=en-US&page=1`)
  }

  getTopRatedMovie(){
    return this.http.get<movieInterface>(`https://api.themoviedb.org/3/movie/${this.topRated}?api_key=${this.API}&language=en-US&page=1`)
  }


}
