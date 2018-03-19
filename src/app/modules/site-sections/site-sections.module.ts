import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { FavoriteComponent } from './favorite/favorite.component';

// Routing
import { routing } from './site-sections.routing';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HotComponent
    , NewComponent
    , FavoriteComponent
  ],
  exports: [
    HotComponent
    , NewComponent
    , FavoriteComponent
  ]
})
export class SiteSectionsModule { }
