import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [],
  templateUrl: './query.component.html',
})

export class QueryComponent {
  querySearch1: string = '';
  querySearch2: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);

    // Using snapshot (static)
    this.querySearch1 = this.route.snapshot.queryParams['search'];

    this.route.queryParams.subscribe(params => {
      this.querySearch2 = params['search'];
    });
  }

}
