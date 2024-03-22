import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Output() searchEvent = new EventEmitter<string>();
  userData: any;

  searchQuery: string = '';

  constructor(private github: GithubService){}


  ngOnInit(): void {
  }


  search(): void{
    console.log(this.searchQuery);
  }

}
