import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgForOf } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLinkWithHref, } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/UserModel';
import { HttpClientModule } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule, HttpClientModule, NgFor, NgForOf],
  providers: [UserService]
})

export class RegisterPage implements OnInit { //OnDestroy

  userRegisterModal: Partial<UserModel> = {
    nombre: '',
    apellido: '',
    tipo_usuario: '',
    correo: '',
    password: ''
  };

  public userExists?: UserModel;
  public userList: UserModel[] = [];

  constructor(private route: Router, private _usuarioService: UserService) {
  }

  //ngOnDestroy(): void {
  //  throw new Error('Method not implemented.');
  //}

  ngOnInit(): void {
    this.userRegisterModalRestart();
  }

  async setObject(user: UserModel) {
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(user)
    });
  }

  async registerUser() {
    if(this.userRegisterModal.correo && this.userRegisterModal.password && this.userRegisterModal.nombre && this.userRegisterModal.apellido ) {
        try {
            const response = await lastValueFrom(this._usuarioService.addNewUser(this.userRegisterModal));
            console.log(response);
            alert('Usuario registrado con éxito!');
            this.goToLogin();
        } catch(error) {
            console.error(error);
            alert('Hubo un error al registrar el usuario. Por favor, intenta nuevamente.');
        }
    } else {
        alert('Por favor, completa todos los campos.');
    }
  }


  userRegisterModalRestart(): void {
    this.userRegisterModal.correo = '';
    this.userRegisterModal.password = '';
  }

  goToLogin(): void {
    this.route.navigate(['/login']); 
  }

}
