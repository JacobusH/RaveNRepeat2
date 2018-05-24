import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'app/models/_index';
import { UserService } from 'app/services/_index';
import { AlertMultiService } from 'app/modules/shared/alert/alert-multi.service';
import { AuthService } from 'app/modules/authentication/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as firebase from 'firebase/app';


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
    private alertMultiService: AlertMultiService,
    private authService: AuthService,
    private userService: UserService,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
  }
  
  facebookLogin() {
    this.authService.facebookLogin().then(authData => {
      this.dialogRef.close();
      this.router.navigate(['/profile']);
    })
    .catch(error => {
      this.alertMultiService.error(error.message);
    });
  }

  emailLogin() {
    console.log(this.model.email)
    this.authService.afAuth.auth.signInWithEmailAndPassword(this.model.email, this.model.password)
    .then(authData => {
      this.dialogRef.close();
      this.router.navigate(['/profile']);
    })
    .catch(err => {
      if(err.message.indexOf('no user record') > 1)
      {
        err.message = 'There is no user with these credentials. Please try again';
      }
      this.alertMultiService.error(err.message);
    });
  }

  emailRegiser() {
    this.authService.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.password)
    .then(authData => {
      this.dialogRef.close();
      this.router.navigate(['/profile']);
    })
    .catch(err => {
      this.alertMultiService.error(err.message);
    });
  }

  logout() {
    this.authService.logout();
  }

}