import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';
import { IUser } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  cloth: Array<ICloth>;
  description: string;

  constructor(private afFireStore: AngularFirestore) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    const user = JSON.parse(localStorage.getItem('user')); 
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.id = user.id;
    this.cloth = user.cloth;
    this.description = user.description;
  }
}
