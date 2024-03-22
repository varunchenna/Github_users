import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) { }

  getuser(name: String):Observable<any[]>{
    console.log(this.url+"users/"+name);
    return this.http.get<any>(`${this.url}${name}`);
  }

  getRepositories(name:string ,page: number, perPage: number): Observable<any> {
    const url = `${this.url}${name}/repos?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }
}
