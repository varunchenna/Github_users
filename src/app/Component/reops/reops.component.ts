import { Component, Input } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-reops',
  templateUrl: './reops.component.html',
  styleUrls: ['./reops.component.css']
})
export class ReopsComponent {
  @Input() username!:string;

  repositories: any[] = [];
  currentPage: number = 1;
  perPage: number = 4;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
  }

  getrepos(){
    this.loadRepositories();
  }


  loadRepositories(): void {
    this.githubService.getRepositories(this.username, this.currentPage, this.perPage).subscribe(
      (data) => {
        console.log(data);
        this.repositories = data;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }

  nextPage(): void {
    this.currentPage++;
    this.loadRepositories();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadRepositories();
    }
  }
}
