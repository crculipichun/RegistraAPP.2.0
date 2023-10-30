import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-asistencia',
  templateUrl: 'asistencia.page.html',
  styleUrls: ['asistencia.page.scss']
})
export class AsistenciaPage {
  asistencias: any[]; // Debes cargar esta variable con los datos de las materias a las que asistió el alumno

  constructor(private router: Router) {
    // Simulación de datos de asistencias (debes obtener estos datos de tu fuente de datos)
    this.asistencias = [
      { nombre: 'Calida de Software' },
      { nombre: 'Etica para el trabajo' },
      { nombre: 'Programacion de aplicaciones moviles' }
    ];
  }

  cerrarSesion() {
    console.log("Cerrando sesión..."); 
    this.router.navigate(['/login']); 
  }
}