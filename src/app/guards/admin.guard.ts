
import {tap,  map, filter, scan, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from 'app/services/_index';
import { AuthService } from 'app/modules/authentication/auth.service';
import { User } from 'app/models/_index';
import { Observable } from 'rxjs';
 
 
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';



import * as _ from 'lodash';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private userService: UserService) {}

  canActivate(): Observable<boolean> | boolean {
    // ROLE BASED CHECK
    return this.auth.user.pipe(take(1),
      map(user => _.has(_.get(user, 'roles'), 'admin')),
      tap(authorized => {
        if(!authorized)   {
          console.log('access denied')
          this.router.navigate(['/login']);
        }
      }),)
  }

  // BASIC CHECK FOR IS LOGGED IN
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | boolean {
  //     let bleh = this.auth.user;

  //       return this.auth.user
  //       .take(1)
  //       .map(user => !!user)
  //       .do(loggedIn => {
  //         if (!loggedIn) {
  //           console.log('access denied')
  //           this.router.navigate(['/login']);
  //         }
  //         else {
  //           let b = 'te';
  //         }
  //     })
  // }



}