import { Component ,OnInit} from '@angular/core';
import { MovieServiceService } from './movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movieApp';
  ngOnInit(){
    
  }

  
}
