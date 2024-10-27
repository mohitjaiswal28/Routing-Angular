import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './home.component.html',
})

export class HomeComponent {
  pathBookSearch!: number;
  pathAuthorSearch: string = '';
  querySearch: string = '';

  constructor(private router: Router) { }

  redirectUsingPath() {
    if (this.pathBookSearch && this.pathAuthorSearch) {
      this.router.navigate(['home', 'book', this.pathBookSearch, 'author', this.pathAuthorSearch]);
    } else {
      alert('Please enter both a Book ID and Author name.');
    }
  }

  redirectUsingQuery() {
    if (this.querySearch) {
      this.router.navigate(['home', 'product'], { queryParams: { search: this.querySearch } });
    } else {
      alert('Please enter product name.');
    }
  }
}
