import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-path',
  standalone: true,
  imports: [],
  templateUrl: './path.component.html',
  styleUrl: './path.component.css'
})

export class PathComponent {

  curretBookID: number = 0;
  currentAuthor: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    console.log(this.route.snapshot.params);

    // Using snapshot (static)
    this.curretBookID = this.route.snapshot.params['bookID'];

    // Using observable (dynamic)
    this.route.params.subscribe(params => {
      this.currentAuthor = params['author'];
    })
  }
}
