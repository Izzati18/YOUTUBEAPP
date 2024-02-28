import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchResultComponent } from './searchresult/searchresult.component';
import { ButtonsearchComponent } from './buttonsearch/buttonsearch.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'search', component:SearchResultComponent},
  {path: 'buttonsearch', component:ButtonsearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
