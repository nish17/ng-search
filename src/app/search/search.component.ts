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
  controlArr: FormControl[] = [];
  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
    this.getCategories();
  }

  ngOnInit() {
    this.SearchForm = new FormGroup({
      search: new FormControl(''),
      categoryfilters: new FormArray(this.controlArr)
      // new FormArray(this.controlArr)
    });
    this.SearchForm.valueChanges.subscribe(
      () => { console.log(this.SearchForm.get('search').value, this.SearchForm.get('categoryfilters').value) });
  }


  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.fetchedCategories = categories;
      this.fetchedCategories.forEach(() => this.controlArr.push(new FormControl(false)));
      this.SearchForm.setControl('categoryfilters', new FormArray(this.controlArr));
      // console.log(this.controlArr);
    });
  }
}
