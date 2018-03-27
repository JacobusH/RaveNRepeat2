import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'app/models/_index';
import { UserService, AlertMultiService } from 'app/services/_index';
import { AuthService } from 'app/modules/authentication/auth.service';
import { MatSnackBar } from '@angular/material';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertMultiService: AlertMultiService,
    private userService: UserService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  facebookLogin() {
    this.authService.facebookLogin().then(authData => {
      console.log("Facebook auth data");
      console.log(authData);
      this.router.navigate(['']);
    })
    .catch(error => {
      console.log(error);
      this.alertService.error(error.message);
    });
  }

  emailLogin() {
    this.authService.afAuth.auth.signInWithEmailAndPassword(this.model.email, this.model.password)
    .then(authData => {
      console.log("Email auth data");
      console.log(authData);
      this.router.navigate(['']);
    })
    .catch(err => {
      console.log(err.message);
      this.alertMultiService.error(err.message);
    });
  }

  emailRegiser() {
    this.authService.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password)
    .then(authData => {
      console.log("Email Register auth data");
      console.log(authData);
      this.router.navigate(['']);
    })
    .catch(err => {
      console.log(err.message);
      this.alertMultiService.error(err.message);
    });
  }

  logout() {
    this.authService.logout();
  }

}