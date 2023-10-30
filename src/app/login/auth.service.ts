import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    this.supabase = createClient('TU_URL_DE_SUPABASE', 'TU_CLAVE_DE_API');
  }

  login(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Realiza una consulta a la base de datos para verificar las credenciales
      this.supabase.from('usuarios')
        .select()
        .eq('correo', email)
        .eq('password', password)
        .then((response) => {
          if (response.error) {
            reject(response.error.message);
          } else if (response.data.length > 0) {
            // Usuario autenticado con éxito
            this.loggedIn.next(true);
            resolve();
          } else {
            // Credenciales incorrectas
            reject('Credenciales incorrectas');
          }
        })
        
    });
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }
}