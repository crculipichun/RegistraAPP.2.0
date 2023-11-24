import { Routes } from '@angular/router';
import { AuthGuardGuard } from './services/guards/auth.guard.guard';
import { canActivateUsuario } from './services/guards/new-guard';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'loginHome',
    loadComponent: () => import('./pages/loginHome/loginHome.page').then(m => m.LoginHomePage)
  },
  {
    path: 'loginDocente',
    loadComponent: () => import('./pages/loginDocente/loginDocente.page').then(m => m.LoginDocentePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
    //canActivate: [canActivateUsuario]
  }, 
  {
    path: 'user-type-menu',
    loadComponent: () => import('./pages/user-type-menu/user-type-menu.page').then(m => m.UserTypeMenuPage)
  },
  {
    path: 'user-type-menu-Docente',
    loadComponent: () => import('./pages/user-type-menu-Docente/user-type-menu-Docente.page').then(m => m.UserTypeMenuDocentePage)
  },
  {
    path: 'scanner',
    loadComponent: () => import('./pages/scanner/scanner.page').then(m => m.ScannerPage)
  },
  {
    path: 'qr',
    loadComponent: () => import('./pages/qr/qr.page').then(m => m.QRPage)
  },
  {
    path: 'recuperar',
    loadComponent: () => import('./pages/recuperar/recuperar.page').then(m => m.RecuperarPage)
  },
  {
    path: '**',
    redirectTo: 'splash'
  }

];