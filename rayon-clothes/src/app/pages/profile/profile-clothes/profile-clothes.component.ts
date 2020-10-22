import { Component, OnInit } from '@angular/core';
import { ICloth } from 'src/app/shared/interfaces/cloth.interface';

@Component({
  selector: 'app-profile-clothes',
  templateUrl: './profile-clothes.component.html',
  styleUrls: ['./profile-clothes.component.scss']
})
export class ProfileClothesComponent implements OnInit {
  userCloth: Array<ICloth>;
  constructor() { }

  ngOnInit(): void {
    this.getUserCloth();
  }

  getUserCloth(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.userCloth = user.cloth;
  }
}
