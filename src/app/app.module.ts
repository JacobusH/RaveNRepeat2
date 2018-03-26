// Modules
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { SitePlansModule } from './modules/site-plans/site-plans.module';
import { SiteSectionsModule } from './modules/site-sections/site-sections.module';
import { PlaygroundModule } from './modules/playground/playground.module';
import { SharedModule } from './modules/shared/shared.module';
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from 'ngx-contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, 
  MatDialogModule, MatMenuModule, 
  MatFormFieldModule, MatSidenavModule, 
  MatSelectModule, MatInputModule, 
  MatIconModule, MatIconRegistry, MatDialogConfig, MAT_DIALOG_DATA
} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxGraphModule } from '@swimlane/ngx-graph'
import { Routes, RouterModule } from '@angular/router';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { YoutubePlayerModule } from 'ngx-youtube-player';


// Routing
import { routing } from './app.routing';

// Guards
import { AuthGuard } from 'app/guards/auth.guard';
import { AdminGuard } from 'app/guards/admin.guard';

// Pipes
import { ImageFilterPipe } from 'app/filters/image-filter.pipe';
import { SignupFilterPipe } from 'app/filters/signup-filter.pipe';
import { ReadFilterPipe } from 'app/filters/read-filter.pipe';

// Services
import { AlertMultiService, AlertService,  GalleryService, 
  LiveChatService, TrackService, UploadService, 
  UserService, VisualizerService, VideoService } from 'app/services/_index';

// Pages
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from 'app/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoPlaylistComponent } from './components/videos/video-playlist/video-playlist.component';
import { VideoItemComponent } from './components/videos/video-item/video-item.component';
import { ViewArtistComponent } from './components/view-artist/view-artist.component';
import { ViewTrackComponent } from './components/view-track/view-track.component';
import { ViewTracklistComponent } from './components/view-tracklist/view-tracklist.component';
import { RatingComponent } from './components/rating/rating.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RaveRepeaterComponent } from './components/rave-repeater/rave-repeater.component';
import { CanvasComponent } from './components/rave-repeater/canvas/canvas.component';
import { SvgLineComponent } from './components/rave-repeater/svg-line/svg-line.component';
import { SvgCircleComponent } from './components/rave-repeater/svg-circle/svg-circle.component';
import { VideosComponent } from './components/videos/videos.component';

var firebaseConfig = {
  apiKey: "AIzaSyDvq-x-CLBHIDaIQcVXz6BKtMFEdgsLt8o",
    authDomain: "crawl-63a5c.firebaseapp.com",
    databaseURL: "https://crawl-63a5c.firebaseio.com",
    projectId: "crawl-63a5c",
    storageBucket: "crawl-63a5c.appspot.com",
    messagingSenderId: "604192062922"
};

@NgModule({
  exports: [
    
  ],
  entryComponents: [
    
  ],
  declarations: [
    AppComponent,
    ImageFilterPipe,
    SignupFilterPipe,
    ReadFilterPipe,
    PageNotFoundComponent,
    HomeComponent,
    VideoPlaylistComponent,
    VideoItemComponent,
    ViewArtistComponent,
    ViewTrackComponent,
    ViewTracklistComponent,
    RatingComponent,
    HeaderComponent,
    RaveRepeaterComponent,
    CanvasComponent,
    SvgLineComponent,
    SvgCircleComponent,
    VideosComponent
  ], 
  imports: [
    routing,
    AuthenticationModule,
    UserProfileModule,
    SitePlansModule,
    SiteSectionsModule,
    PlaygroundModule,
    SharedModule,
    // AlertModule.forRoot(),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ContextMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, 
    MatDialogModule, MatMenuModule, 
    MatFormFieldModule, MatSidenavModule, 
    MatSelectModule, MatInputModule, 
    MatIconModule,
    NgbModule.forRoot(),
    NgxGraphModule,
    // RouterModule.forRoot(routes),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    YoutubePlayerModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    AngularFireAuth,
    AdminGuard,
    AuthGuard,
    AlertMultiService, AlertService, 
    GalleryService, TrackService,
    LiveChatService, UploadService, 
    UserService, VisualizerService,
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 