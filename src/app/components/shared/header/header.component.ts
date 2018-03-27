import { Component, OnInit, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { UserService } from 'app/services/_index';
import { AuthService } from 'app/modules/authentication/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/models/user.model';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from 'app/modules/authentication/login/login.component';
// import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  user: Observable<User>;

  isIn = false;
  state: string = 'in';
  currentUser: any;


  constructor(private authService: AuthService
    , private userService: UserService
    , private route: Router
    , public dialog: MatDialog) { 

  }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(user => {
      if(user) {
          this.userService.users.doc(user.uid).valueChanges().subscribe(x => {
            this.isLoggedIn = true;
            var us = x as User;
            if(us.roles['admin']) {
              this.isAdmin = true;
            }
          })
      }
      else {
        this.isAdmin = false;
        this.isLoggedIn = false;
      }
    });
  }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false; 
  }

  logout() {
    this.authService.logout();
  }

  showLoginModal() {
    const dialogRef = this.dialog;
    this.dialog.open(LoginComponent, {
      height: '80% !important'
    }).afterClosed().subscribe(result => {
      // 
    });
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (number > 100) {
  //     console.log('You are 100px from the top to bottom');
  //   } else if (number > 500) {
  //       console.log('You are 500px from the top to bottom');
  //   }

  // }

}
