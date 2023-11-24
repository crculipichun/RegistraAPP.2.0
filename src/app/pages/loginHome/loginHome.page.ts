import { Component,} from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {  RouterLinkWithHref, } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loginHome',
  templateUrl: './loginHome.page.html',
  styleUrls: ['./loginHome.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule],

})

export class LoginHomePage {
  constructor(private router: Router){}
  goTologinDocente() {
    this.router.navigate(['/loginDocente']);
  }
  goTologinAlumno() {
    this.router.navigate(['/login']);
    
  }
}

