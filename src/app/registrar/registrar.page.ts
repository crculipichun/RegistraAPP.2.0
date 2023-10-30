import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/supabase.service';
import { Usuario } from '../registrar/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  registrar() {
    // Aquí puedes acceder a los valores capturados desde el formulario
    console.log('Rut:', this.usuario.rut);
    console.log('Nombre:', this.usuario.nombre);
    console.log('Apellidos:', this.usuario.apellidos);
    console.log('Correo:', this.usuario.correo);
    console.log('Contraseña:', this.usuario.password);
    console.log('Tipo de Usuario:', this.usuario.tipoUsuario); // Nuevo campo agregado para el tipo de usuario

    const datosUsuario = {
      rut: this.usuario.rut,
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellidos,
      correo: this.usuario.correo,
      password: this.usuario.password,
      repetirContrasena: this.usuario.repetirContrasena,
      tipoUsuario: this.usuario.tipoUsuario, 
    };

    this.usuarioService.registrarUsuario(datosUsuario, this.usuario.tipoUsuario)
    .then(() => {
    console.log('Usuario registrado con éxito.');
    this.mostrarToast('Usuario registrado con éxito.');
  })
  .catch((error:any) => {
    console.error('Error al registrar usuario:', error);
    this.mostrarToast('Error al registrar usuario');
  });
  }

  irAInicioSesion() {
    this.router.navigate(['/login']);
  }
}