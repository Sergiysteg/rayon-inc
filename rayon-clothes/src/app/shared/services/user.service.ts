import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICloth } from '../interfaces/cloth.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afFireStore: AngularFirestore) { }

  getUserData(): void {
    
  }

  addUserCloth(cloth: ICloth): void {
    // this.afFireStore.collection('users').ref.where('  ')
  }
}
