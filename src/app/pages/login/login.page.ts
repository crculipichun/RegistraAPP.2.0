import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  user = {
    usuario: '',
    password: ''
  };
  loading = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }
  passwordTooShort = false;
  ingresar() {
    if (this.user.usuario.length >= 3 && this.user.password.length >= 8) {
      
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user 
          
        }
      };
      this.router.navigate(['/alumno'], navigationExtras);  
    } else {
      if (this.user.password.length < 8) {
        this.passwordTooShort = true; 
      } else {
        this.passwordTooShort = false;
      }
    }
  }
}
