import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
@Component({
  selector: 'app-result-feed',
  templateUrl: './result-feed.component.html',
  styleUrls: ['./result-feed.component.css']
})
export class ResultFeedComponent implements OnInit {
  @Input() results: string[] = [];
  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit() {
  }

}
