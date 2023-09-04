import { Component, OnInit } from '@angular/core';
import { IonicToastService } from '../../services/ionic-toast.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

    constructor(
      private ionicToastService: IonicToastService
    ) {}
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    showMyToast() {
      this.ionicToastService.showToast();
    }
    hideMyToast() {
      this.ionicToastService.hideToast();
    }
  }
  