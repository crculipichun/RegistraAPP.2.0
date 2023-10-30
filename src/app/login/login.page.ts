import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  async iniciarSesion() {
    try {
      const result = await this.usuarioService.iniciarSesion(this.email, this.password);

      if (result) {
        // Inicio de sesión exitoso, redirige a la página principal o a donde desees
        this.router.navigate(['/home']);
      } else {
        // Las credenciales son incorrectas, muestra un mensaje de error
        this.mostrarToast('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Maneja el error apropiadamente
      this.mostrarToast('Error al iniciar sesión');
    }
  }

  irARegister() {
    this.router.navigate(['/registrar']);
  }

  Recuperar() {
    this.router.navigate(['/recuperar']);
  }
}