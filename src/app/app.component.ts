import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-search';
  categories = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
}
