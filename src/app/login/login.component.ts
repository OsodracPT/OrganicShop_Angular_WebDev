import { Component } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public afAuth: AngularFireAuth) { 
  }

  login() { 
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
