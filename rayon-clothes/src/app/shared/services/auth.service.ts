import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;
  userStatusChanges: Subject<string> = new Subject<string>();

  constructor(private afAuth: AngularFireAuth,
    private afFireStore: AngularFirestore,
    private router: Router,
    private notification: NotificationsService) { }

  login(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.afFireStore.collection('users').ref.where('id', '==', user.user.uid).onSnapshot(snap => {
          snap.forEach(userRef => {
            this.notification.showInfo('Allowed','Login');
            this.currentUser = userRef.data();
            if (this.currentUser.role === 'admin' && this.currentUser.access) {
              localStorage.setItem('admin', JSON.stringify(this.currentUser));
              this.router.navigateByUrl('/admin');
              this.userStatusChanges.next('admin');
            }
            else if (this.currentUser.role === 'user') {
              localStorage.setItem('user', JSON.stringify(this.currentUser));
              this.router.navigateByUrl('/profile');
              this.userStatusChanges.next('profile');
            }
          })
        })
      })
      .catch(error => this.notification.showError('Is not allowed','Login'))
  }

  signOut(): void {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('admin');
      localStorage.removeItem('user');
      this.router.navigateByUrl('home');
      this.userStatusChanges.next('logout');
    })
  }

  signUp(email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(userResponse => {
        const user = {
          id: userResponse.user.uid,
          email: userResponse.user.email,
          role: 'user',
          access: false,
          firstName: '',
          lastName: '',
          description: '',
          cloth: [],
          image: ''
        }
        // const user = {
        //   id: userResponse.user.uid,
        //   email: userResponse.user.email,
        //   role: 'user',
        //   access: false
        // };
        this.afFireStore.collection('users').add(user)
          .then(() => {
            this.notification.showInfo('Success','Registration');
          })
          .catch(error => console.log(error));
      })
      .catch(error => this.notification.showError('Something went wrong','Registration'));
  }

}
