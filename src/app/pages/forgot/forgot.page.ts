import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  ngOnInit() {
  }
  email: string = '';

  constructor() {}

  restablecerContrasena() {
    if (this.email) {
      // Lógica para enviar correo de restablecimiento de contraseña
      console.log('Enviar correo a: ' + this.email);
    }
  }
}
