import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  user = {
    nombre: '',
    correo: '',
    avatar: ''
  };

  constructor(private usuarioService: UsuarioService,private router: Router) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.usuarioService.getUsuarioActual().subscribe((userData) => {
      this.user.nombre = userData.nombre;
      this.user.correo = userData.correo;}
      
  );

}
cerrarSesion() {
  console.log("Cerrando sesión..."); 
  this.router.navigate(['/login']); 
}
}