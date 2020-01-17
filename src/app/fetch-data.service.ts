import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private categoryURL = 'https://movie-search-project.herokuapp.com//?format=json';
  private searchURL = 'https://movie-search-project.herokuapp.com/movie?q=';
  constructor(private http: HttpClient) { }

  getMovies(searhTerm: string) {
    const URL = this.searchURL + searhTerm;
    return this.http.get<object[]>(URL).pipe(pluck('results'));
  }
}
