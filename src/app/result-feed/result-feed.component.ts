import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-result-feed',
  templateUrl: './result-feed.component.html',
  styleUrls: ['./result-feed.component.css']
})
export class ResultFeedComponent implements OnInit {
  @Input() results: [string];
  @Input() previousURL: string;
  @Input() nextURL: string;
  // private nextURL: string = this.results.next;
  // private previousURL:string = this.results.previous;

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit() {
    // console.log(`Inside result-feed component==>${JSON.stringify(this.results)}`);

  }
  onScroll() {
    console.log('Scrolled');
    // console.log(`this.results=====>${JSON.stringify(this.results)}`);
    // console.log(`previousURL: ${this.previousURL}`, `nextURL: ${this.nextURL}`);
    if (this.nextURL) {
      this.fetchDataService.fetchMovies(this.nextURL).pipe(debounceTime(200)).subscribe((movies) => {
        // this.results.push.apply(movies['results'], movies['results']);
        const newMovies = movies['results'];
        this.results.push(...newMovies);
        this.nextURL = movies['next'];
        this.previousURL = movies['previous'];
      });
    }
    // this.fetchDataService.fetchMovies(this.nextURL).subscribe((movies: any) => { this.results = [...this.results, ...movies.results]; });
  }
}
