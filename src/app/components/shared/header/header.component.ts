import { Component, OnInit, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { UserService } from 'app/services/_index';
import { AuthService } from 'app/modules/authentication/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/models/user.model';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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


  constructor(private authService: AuthService, private userService: UserService, private route: Router) { 
    this.user = this.authService.user; // not logged in = null
    authService.getLoggedInName.subscribe(name => this.isLoggedIn = true);
    if(this.user) {
      this.isLoggedIn = true;
      this.user.subscribe(u => {
        if(u.roles['admin']) {
          this.isAdmin = true;
        }
      })
    }
  }

  ngOnInit() {
    this.authService.authstate.subscribe(user => {
      if(user) {
          this.user = user;
          this.userService.users.doc(user.uid).valueChanges().subscribe(x => {
            var us = x as User;
            if(us.roles['admin']) {
              this.isLoggedIn = true;
            }
          })

          
          // this.isAdmin = this.af.getUserRoles(user);
          // console.log("Logged in user is: " + user.email);
          // console.log("User photo: " + user.providerData[0].photoURL);
          // console.log("User name: " + user.providerData[0].displayName);
          // console.log(user);
      }
      else {
        this.user = null;
        this.isLoggedIn = false;
      }
    });

    
    
  }

  toggleState() {
    // this.isIn = !this.isIn;
    let bool = this.isIn;
    this.isIn = bool === false ? true : false; 
  }

  logout() {
    this.authService.logout();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      console.log('You are 100px from the top to bottom');
    } else if (number > 500) {
        console.log('You are 500px from the top to bottom');
    }

  }

}
