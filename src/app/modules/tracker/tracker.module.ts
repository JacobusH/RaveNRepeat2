import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/modules/shared/shared.module';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { TrackerComponent } from './tracker.component';

// Routing
import { routing } from './tracker.routing';


@NgModule({
  imports: [
    routing,
    SharedModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUXVv45TIEeHtxkDIEy5ZEFsjmKKnAXiI'
    }),
    AgmSnazzyInfoWindowModule,
  ],
  exports: [
    TrackerComponent
  ],
  declarations: [TrackerComponent]
})
export class TrackerModule { }
