import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  email: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  private getUserData(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.email = user.email;
  }

  signOut(): void {
    this.authService.signOut();
  }
}
