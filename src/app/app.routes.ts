import { Routes } from '@angular/router';
import { SubmittedDetailsComponent } from './submitted-component/submitted-component';
import { Home } from './home/home';
import { LandingPage } from './landing-page/landing-page';


export const routes: Routes = [
  { path: '', component: LandingPage },
  {path:'add-employee' , component:Home},
  {path:'view-employee' , component:SubmittedDetailsComponent}
];
