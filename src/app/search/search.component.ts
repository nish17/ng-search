import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() categories;
  fetchedCategories: string[];
  SearchForm: FormGroup;
  searchTerm: string;
  controlArr: FormControl[];
  formArr: FormArray;
  constructor(private categoryService: CategoryService, private fb: FormBuilder) { }

  ngOnInit() {
    this.SearchForm = this.fb.group({
      search: new FormControl(''),
      categoryfilters: this.formArr
      // new FormArray(this.controlArr)
    });
    this.getCategories();
    this.SearchForm.valueChanges.subscribe(console.log);
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.fetchedCategories = categories;
      // this.controlArr = [new FormArray(new Array(this.fetchedCategories.length).fill(new FormControl('false')))];
      this.controlArr = new Array(this.fetchedCategories.length).fill(new FormControl('false'));
      this.formArr = new FormArray(this.controlArr);
      console.log(this.controlArr);
      console.log(this.formArr);
    });
  }
}
