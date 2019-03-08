
import {map, switchMap} from 'rxjs/operators';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable ,  BehaviorSubject } from 'rxjs';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';
import * as firebase from 'firebase/app';


import { provideForRootGuard } from '@angular/router/src/router_module';

@Injectable()
export class AuthService {
  user: Observable<User>;
  isAdmin = false;

  constructor(public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private userService: UserService,
    private router: Router) { 
      // this.authstate = this.afAuth.authState;

      this.user = this.afAuth.authState.pipe(switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`!Users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null)
        }
      }))
    }

    emailLogin(username, pass) {
      const provider = new firebase.auth.EmailAuthProvider()
      this.afAuth.auth.signInWithEmailAndPassword(username, pass).then(x => {
        // worked, afAuth.authState will change now
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log("EMAIL LOGIN ERROR");
        console.log(err);
      })
    }

    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      return this.oAuthLogin(provider);
    }

    facebookLogin(): Promise<void> {
      const provider = new firebase.auth.FacebookAuthProvider()
      return this.oAuthLogin(provider);
    }

    oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user, provider)
      })
      .catch(err => {
        console.log('login error: ' + err);
      })
    }
 
    updateUserData(userAuthCreds, provider) {
      const data: User = {
        authID: userAuthCreds.uid,
        authMethod: provider.providerId,
        authDisplayName: userAuthCreds.displayName,
        authPhotoUrl: userAuthCreds.photoURL,
        key: userAuthCreds.uid,
        name: userAuthCreds.displayName,
        email: userAuthCreds.email,
        password: '',
        roles: ['user'], 
        isActive: true, 
        createdAt: new Date(),
        updatedAt: new Date()
      } 

      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userAuthCreds.uid}`);
      userRef.snapshotChanges().pipe(map(action => action.payload.exists))
        .subscribe(exists => exists 
          ? console.log('user exists')//userRef.update(data)
          : userRef.set(data))
    }

    logout() {
      this.afAuth.auth.signOut().then(() => {
          this.router.navigate(['/']);
      });
    }

}
