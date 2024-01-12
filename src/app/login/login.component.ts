import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    name: [''],
    password: [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ],
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm.reset();
  }

  loginUser() {
    debugger;
    if (this.loginForm.invalid)
      return console.log('Please enter valid username and password');
    if (
      this.loginForm?.get('name')?.value === 'admin' &&
      this.loginForm?.get('password')?.value === 'Admin@123'
    ) {
      this.authService.login(this.loginForm.value);
    } else {
    }
  }
}
