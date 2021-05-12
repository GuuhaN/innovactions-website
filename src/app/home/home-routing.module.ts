import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferteComponent } from './pages/offerte/offerte.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectlistComponent } from './pages/projectlist/projectlist.component';


const routes: Routes = [
  {
    path: "", component: LandingComponent
  },
  {
    path: "offerte", component: OfferteComponent
  },
  {
    path: "project/:id", component: ProjectComponent
  },
  {
    path: "projects", component: ProjectlistComponent
  }
];

export const homeRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
