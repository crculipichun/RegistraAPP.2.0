import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/UserModel';
import { Observable, Subscription } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-type-menu-Docente',
  templateUrl: './user-type-menu-Docente.page.html',
  styleUrls: ['./user-type-menu-Docente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,ReactiveFormsModule, FormsModule],
  
})
export class UserTypeMenuDocentePage implements OnInit, OnDestroy {
  

  userInfo$: Observable<UserModel>;
  user_id: string;

  user: UserModel | null = null;
  userSubscription: Subscription | null = null; 
  constructor( private navCtrl: NavController,private router: Router, private _userService: UserService ) { 
    this.user_id = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
    this.userInfo$ = this._userService.getUser(this.user_id);
  }

  ngOnInit() {
    
    this.userSubscription = this.userInfo$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.saludarUsuario();
      }
    });
  }


  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

 
 

   
  goToQr() {
    this.router.navigate(['/qr']);
  }


  goToProfile() {
    this.router.navigate(['/profile'], { state: { userInfo: this.user_id}});
  }

  
  logout() {
    this.navCtrl.navigateRoot(['/login'], { replaceUrl: true });
    this.clearUserIdFromPreferences();
  }


  async clearUserIdFromPreferences() {
    try {
      await Preferences.remove({ key: 'userId' });
      console.log("user_id borrado exitosamente");
    } catch (error) {
      console.error("Error al borrar user_id: ", error);
    }
  }


  async checkSession() {
    const user = await Preferences.get({ key: 'user' });
    if (!user || !user.value) {
      console.log("La sesión se cerró correctamente");
    } else {
      console.log("La sesión no se cerró correctamente");
    }
  }
  
  
  async saludarUsuario() {
    const userId = this.user_id;
    if (userId) {
      const nombreUsuario = await this._userService.getUser(userId);
      if (nombreUsuario) {
        console.log(`Bienvenido ${nombreUsuario}`);
        
      } else {
        console.log('Usuario no encontrado');
      }
    }
  }  

}