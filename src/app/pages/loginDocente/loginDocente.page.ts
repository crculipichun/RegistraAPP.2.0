import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgForOf } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLinkWithHref, } from '@angular/router';
import { IUserLogin } from '../../models/IUserLogin';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/UserModel';
import { HttpClientModule } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-loginDocente',
  templateUrl: './loginDocente.page.html',
  styleUrls: ['./loginDocente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule, HttpClientModule, NgFor, NgForOf],
  providers: [UserService]
})

export class LoginDocentePage implements OnInit { //OnDestroy

  userLoginModal: IUserLogin = {
    correo: '',
    password: ''
  };

  public userExists?: UserModel;
  public userList: UserModel[] = [];

  constructor(private route: Router, private _usuarioService: UserService) {
  }

  ngOnInit(): void {
    this.userLoginModalRestart();
  }

  async setObject(user: UserModel) {
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(user)
    });
  }

  async userLogin(userLoginInfo: IUserLogin) {
    try {
      const user_id = await lastValueFrom(this._usuarioService.getLoginUser(userLoginInfo));
  
      if (user_id) {
        console.log("Usuario existe...");
        if ( this.userLoginModal.correo.toLowerCase().endsWith('@profesor.duoc.cl'))
          console.log("Usuario es de tipo docente...");
  
       
        await Preferences.set({ key: 'userId', value: user_id.toString() });
  
        this.route.navigate(['/user-type-menu-Docente'], { state: { userInfo: user_id }});
      } else {
        console.error('Usuario no existe o Correo no válido para docente');
        
      }
    } catch (error) {
      console.error("Hubo un error durante el inicio de sesión:", error);
    }
  }

  userLoginModalRestart(): void {
    this.userLoginModal.correo = '';
    this.userLoginModal.password = '';
  }
  recuperar(){
    this.route.navigate(['/recuperar'])

  }

  
}

