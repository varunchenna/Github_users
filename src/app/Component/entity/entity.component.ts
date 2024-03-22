import { Component,Input,OnInit ,} from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  
  @Input() username!: String;
  
  userData:any;

  constructor(private github: GithubService){
  }

  ngOnInit(): void {
  }

  getUser(){
    this.github.getuser(this.username).subscribe((data) => {
      console.log(data);
      this.userData = data;
    },(error) =>{
      console.log('Error fetching user data:',error);
    }
    );

  }
  

  }


