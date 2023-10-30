import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private router: Router) {}

  qr() {
    this.router.navigate(['/alumno']); // Asegúrate de que la ruta '/qr' exista en tu aplicación
  }

  AsistenciaPage() {
    this.router.navigate(['/asistencia']); // Asegúrate de que la ruta '/asistencia' exista en tu aplicación
  }

  PerfilPage() {
    this.router.navigate(['/profile']); // Asegúrate de que la ruta '/perfil' exista en tu aplicación
  }
}