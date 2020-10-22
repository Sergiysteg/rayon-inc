import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signEmail: string;
  signPassword: string;
  regEmail: string;
  regPassword: string;
  regConfirmPass: string;
  title = 'toaster-not';

  constructor(private authService: AuthService,
              private notService: NotificationsService) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.authService.login(this.signEmail, this.signPassword);
    // this.notService.showSuccess('Registration success', 'Some');
    this.resetForm();
  }

  registerUser(): void {
    if (this.regPassword === this.regConfirmPass){
      this.authService.signUp(this.regEmail, this.regPassword);
      this.resetForm();
    }
    else {
      console.log('Wrong password');
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.signEmail = '';
    this.signPassword = '';
    this.regEmail = '';
    this.regPassword = '';
    this.regConfirmPass = '';
  }

}
