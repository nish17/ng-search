import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryURL = 'https://movie-search-project.herokuapp.com//?format=json';
  private searchURL = 'https://movie-search-project.herokuapp.com/movie?q=';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    const headers = new HttpHeaders().set('Content-type', 'application/json')
    return this.http.get<string[]>(this.categoryURL, { headers: headers }).pipe(pluck('categories'));
    // .pipe(
    //   catchError(this.handleError<string[]>('getCategories', []))
    // );
  }
}
