import { Routes } from '@angular/router';
import { SubmittedDetailsComponent } from './submitted-component/submitted-component';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'submitted', component: SubmittedDetailsComponent }
];
