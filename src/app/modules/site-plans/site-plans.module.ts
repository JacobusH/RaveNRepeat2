import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsComponent } from './bugs/bugs.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

// Routing
import { routing } from './site-plans.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    BugsComponent
    , RoadmapComponent
  ],
  exports: [
    BugsComponent
    , RoadmapComponent
  ]
})
export class SitePlansModule { }
