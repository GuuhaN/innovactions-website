import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { OfferteComponent } from './pages/offerte/offerte.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ProjectComponent } from './pages/project/project.component';
import { BoldtextPipe } from '../core/pipes/boldtext.pipe';
import { ProjectlistComponent } from './pages/projectlist/projectlist.component';


@NgModule({
  declarations: [LandingComponent, OfferteComponent, ProjectComponent, ProjectlistComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatStepperModule,
  ]
})
export class HomeModule { }
