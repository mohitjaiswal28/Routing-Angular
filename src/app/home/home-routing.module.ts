import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PathComponent } from './components/path/path.component';
import { QueryComponent } from './components/query/query.component';
import { PageNotFoundComponent } from '../../shared/404/404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:bookID/author/:author', component: PathComponent },
  { path: 'product', component: QueryComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
