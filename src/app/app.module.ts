// Modules
// import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from 'ngx-contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, 
  MatDialogModule, MatMenuModule, 
  MatFormFieldModule, MatSidenavModule, 
  MatSelectModule, MatInputModule, 
  MatIconModule, MatIconRegistry 
} from '@angular/material';
import { NgxGraphModule } from '@swimlane/ngx-graph'
import { Routes, RouterModule } from '@angular/router';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { YoutubePlayerModule } from 'ngx-youtube-player';

// Guards
import { AuthGuard } from 'app/guards/auth.guard';
import { AdminGuard } from 'app/guards/admin.guard';

// Pipes
import { ImageFilterPipe } from 'app/filters/image-filter.pipe';
import { SignupFilterPipe } from 'app/filters/signup-filter.pipe';
import { ReadFilterPipe } from 'app/filters/read-filter.pipe';

// Services
import { AlertMultiService, AlertService, 
  AuthService, GalleryService, 
  LiveChatService, TrackService, UploadService, 
  UserService, VisualizerService } from 'app/services/_index';

// Pages
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from 'app/pages/page-not-found/page-not-found.component';
import { PlaygroundComponent } from 'app/pages/playground/playground.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VideoPlaylistComponent } from './components/video-playlist/video-playlist.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { ViewArtistComponent } from './components/view-artist/view-artist.component';
import { ViewTrackComponent } from './components/view-track/view-track.component';
import { ViewTracklistComponent } from './components/view-tracklist/view-tracklist.component';


// Initialize Firebase
// var firebaseConfig = {
//   apiKey: "AIzaSyC2Mn3EzXPCHZzhoSPUGmnhkqR_tf_YbVo",
//     authDomain: "ravenrepeat2.firebaseapp.com",
//     databaseURL: "https://ravenrepeat2.firebaseio.com",
//     projectId: "ravenrepeat2",
//     storageBucket: "ravenrepeat2.appspot.com",
//     messagingSenderId: "768701302969"
// };

var firebaseConfig = {
  apiKey: "AIzaSyDvq-x-CLBHIDaIQcVXz6BKtMFEdgsLt8o",
    authDomain: "crawl-63a5c.firebaseapp.com",
    databaseURL: "https://crawl-63a5c.firebaseio.com",
    projectId: "crawl-63a5c",
    storageBucket: "crawl-63a5c.appspot.com",
    messagingSenderId: "604192062922"
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'admin', canActivate: [AdminGuard], component: AdministrationComponent, children: [
  //   { path: "messages", component: AdminContactMessagesComponent},
  //   { path: "chat", component: LiveChatManagerComponent},
  //   { path: "faq", component: AdminFaqComponent},
  //   { path: "media", component: AdminMediaComponent},
  //   { path: "resources", component: AdminResourcesComponent},
  //   { path: "signups", component: AdminSignUpsComponent},
  //   { path: "testimonials", component: AdminTestimonialsComponent},
  //   { path: "teachers", component: AdminTeachersComponent},
  //   { path: "users", component: AdminUsersComponent},
  // ] },
  // { path: 'about', component: AboutComponent },
  // { path: 'announcements', component: AnnouncementsComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'gallery', component: GalleryComponent },
  // { path: 'gallery/image/:id', component: ImageGalleryDetailComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'home/:id', component: HomeComponent },
  // { path: 'learntoplay', component: LearntoplayComponent },
  // { path: 'learntoplay/:id', component: LearntoplayComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'resources', component: ResourcesComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'teachers', component: TeachersComponent },
  // { path: 'teachers/:id', component: TeacherDetailComponent },
  //   // children: [
  //   //   { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //     // { path: 'overview', component: Overview },
  //     // { path: 'specs', component: Specs }
  //   // ]
  // },
  // { path: 'testimonials', component: TestimonialsComponent },
  // { path: 'testing/youtube', component: YoutubeComponent },
  // { path: 'testing/upload', component: UploadComponent },
  // { path: 'testing/tree', component: TreeComponent },
  // { path: 'contact/thanks', component: ThanksComponent },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ImageFilterPipe,
    SignupFilterPipe,
    ReadFilterPipe,
    LoginComponent,
    PlaygroundComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProfileComponent,
    VideoPlaylistComponent,
    VideoItemComponent,
    ViewArtistComponent,
    ViewTrackComponent,
    ViewTracklistComponent
  ], 
  imports: [
    // AlertModule.forRoot(),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    ContextMenuModule,
    MatButtonModule, MatCheckboxModule, 
    MatDialogModule, MatMenuModule, 
    MatFormFieldModule, MatSidenavModule, 
    MatSelectModule, MatInputModule, 
    MatIconModule,
    NgxGraphModule,
    RouterModule.forRoot(routes),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    YoutubePlayerModule
  ],
  providers: [
    AngularFireAuth,
    AdminGuard,
    AuthGuard,
    AlertMultiService, AlertService, 
    AuthService, GalleryService, TrackService,
    LiveChatService, UploadService, 
    UserService, VisualizerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
