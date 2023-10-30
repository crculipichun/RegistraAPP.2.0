import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';


const supabaseUrl = 'https://jyxfrscpqvisubsoflyl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eGZyc2NwcXZpc3Vic29mbHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMDMyNjMsImV4cCI6MjAxMzY3OTI2M30.QzkoVqITCKW7meTrpZV3N1afr_L8EfmEWzEb-joBIuk'
const supabase = createClient(supabaseUrl, supabaseKey)
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private supabase = createClient(supabaseUrl, supabaseKey);
  private autenticado: boolean = false;
  user: { name: string; email: string; } = { name: '', email: '' };
  constructor() {
    this.supabase = createClient('https://jyxfrscpqvisubsoflyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eGZyc2NwcXZpc3Vic29mbHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMDMyNjMsImV4cCI6MjAxMzY3OTI2M30.QzkoVqITCKW7meTrpZV3N1afr_L8EfmEWzEb-joBIuk');
  }

  async registrarUsuario(usuarios: any, tipoUsuario: string) {

    const { data, error } = await this.supabase
      .from('usuarios')
      .upsert([
        {
          rut: usuarios.rut,
          nombre: usuarios.nombre,
          apellido: usuarios.apellido,
          password: usuarios.password,
          correo: usuarios.correo,
          tipo_usuario: tipoUsuario,
        },
      ])
      .select();

    if (error) {
      console.error('Error insertando datos:', error);
    } else {
      console.log('Datos insertados con éxito:', data);
    }
  }

  async iniciarSesion(correo: string, password: string) {
    const { data, error } = await this.supabase
      .from('usuarios')
      .select()
      .eq('correo', correo)
      .eq('password', password);

    if (error) {
      console.error('Error al verificar las credenciales:', error);
      return false;
    }

    const usuarioValido = data && data.length > 0;

    if (usuarioValido) {
      const tipoUsuario = data[0].tipo_usuario;

      if (tipoUsuario === 'docente') {

      } else if (tipoUsuario === 'alumno') {

      }
    }

    return usuarioValido;
  }
  getUsuarioActual(): Observable<any> {
    return new Observable((observer) => {
      const usuarioAutenticado = this.supabase.auth.getUser();
  
      if (usuarioAutenticado) {
        const userId = usuarioAutenticado;
        this.supabase
          .from('usuarios')
          .select('nombre, correo')
          .eq('rut', userId)
          .then(({ data, error }) => {
            if (error) {
              observer.error(error);
            } else {
              const userData = data[0]; // Verifica si hay datos antes de acceder a las propiedades
              if (userData) {
                observer.next(userData);
                observer.complete();
              } else {
                observer.error('Datos de usuario no encontrados');
              }
            }
          });
      } else {
        observer.error('Usuario no autenticado');
      }
    });
  }}