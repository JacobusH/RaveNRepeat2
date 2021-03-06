// My Modules
import './shared/rxjs-operator';
import { AuthenticationModule } from './modules/authentication/authentication.module';
// import { MusicModule } from './modules/music/music.module';
// import { UserProfileModule } from './modules/user-profile/user-profile.module';
// import { SitePlansModule } from './modules/site-plans/site-plans.module';
// import { SiteSectionsModule } from './modules/site-sections/site-sections.module';
import { PlaygroundModule } from './modules/playground/playground.module';
// import { SharedModule } from './modules/shared/shared.module';
// import { TrackerModule } from './modules/tracker/tracker.module';
// Modules
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
import { GalleryService, 
  LiveChatService, UploadService, 
  UserService, VisualizerService } from 'app/services/_index';

// Pages
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from 'app/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RaveRepeaterComponent } from './components/rave-repeater/rave-repeater.component';
import { CanvasComponent } from './components/rave-repeater/canvas/canvas.component';
import { SvgLineComponent } from './components/rave-repeater/svg-line/svg-line.component';
import { SvgCircleComponent } from './components/rave-repeater/svg-circle/svg-circle.component';

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
    HeaderComponent,
    RaveRepeaterComponent,
    CanvasComponent,
    SvgLineComponent,
    SvgCircleComponent,
  ], 
  imports: [
    routing,
    // TrackerModule,
    AuthenticationModule,
    // MusicModule,
    // UserProfileModule,
    // SitePlansModule,
    // SiteSectionsModule,
    // PlaygroundModule,
    // SharedModule,
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
    GalleryService,
    LiveChatService, UploadService, 
    UserService, VisualizerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 