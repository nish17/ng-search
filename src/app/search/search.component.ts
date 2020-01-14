import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() categories;
  constructor() { }
  SearchForm = new FormGroup({
    search: new FormControl(''),
    category: new FormControl('')
  });
  ngOnInit() {
  }

  onCheckboxChange(category: string) {
    console.log(category);
  }
}
