import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
// import { FetchDataService } from '../fetch-data.service';
import {SearchComponent} from '../search/search.component';
@Component({
  selector: 'app-result-feed',
  templateUrl: './result-feed.component.html',
  styleUrls: ['./result-feed.component.css']
})
export class ResultFeedComponent implements OnInit {
  @Input() results: string[] = [];
  @Input() searchTerm: string;
  constructor() {}

  ngOnInit() {
    console.log(`Inside result-feed component==>${JSON.stringify(this.results)}`);
  }
  ngOnChanges(changes: SimpleChanges){
    this.results = changes.results.currentValue;
    // console.log(changes);
  }
}
