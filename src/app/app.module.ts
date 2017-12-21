// Modules
import { AlertModule } from 'ngx-bootstrap';
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

// Guards
import { AuthGuard } from 'app/guards/auth.guard';
import { AdminGuard } from 'app/guards/admin.guard';

// Pipes
import { ImageFilterPipe } from 'app/filters/image-filter.pipe';
import { SignupFilterPipe } from 'app/filters/signup-filter.pipe';
import { ReadFilterPipe } from 'app/filters/read-filter.pipe';

// Services
// import { AlertMultiService, AlertService, 
//   AuthService, GalleryService, 
//   LiveChatService, UploadService, 
//   UserService, VisualizerService } from 'app/services/_index';

// Pages
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from 'app/pages/page-not-found/page-not-found.component';
import { PlaygroundComponent } from 'app/pages/playground/playground.component';


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBfuu59n7nSf6956xaKwFBniRM2V3-SoG0",
  authDomain: "ravenrepeat-600f4.firebaseapp.com",
  databaseURL: "https://ravenrepeat-600f4.firebaseio.com",
  projectId: "ravenrepeat-600f4",
  storageBucket: "ravenrepeat-600f4.appspot.com",
  messagingSenderId: "278606493546"
};

const routes: Routes = [
  // { path: '', component: HomeComponent },
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
  // { path: 'login', component: LoginComponent },
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
    ReadFilterPipe
  ],
  imports: [
    AlertModule.forRoot(),
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
    RouterModule
  ],
  providers: [
    AngularFireAuth,
    AdminGuard,
    AuthGuard,
    // AlertMultiService, AlertService, 
    // AuthService, GalleryService, 
    // LiveChatService, UploadService, 
    // UserService, VisualizerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
