import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-result-feed',
  templateUrl: './result-feed.component.html',
  styleUrls: ['./result-feed.component.css']
})
export class ResultFeedComponent implements OnInit {
  @Input() results;
  @Input() previousURL: string;
  @Input() nextURL: string;
  // private nextURL: string = this.results.next;
  // private previousURL:string = this.results.previous;

  constructor() { }

  ngOnInit() {
    // console.log(`Inside result-feed component==>${JSON.stringify(this.results)}`);

  }
  onScroll() {
    console.log('Scrolled');
    console.log(this.previousURL, this.nextURL);
  }
}
