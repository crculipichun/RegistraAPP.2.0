import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class RecuperarPage implements OnInit {

  correo: string = '';
  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  Login() {
    this.navCtrl.navigateRoot(['/login']); 
      }
    
      limpiarCampos() {
        this.correo = '';
      }
      async mostrarAlerta(titulo: string, mensaje: string) {
        const alert = await this.alertController.create({
          header: titulo,
          message: mensaje,
          buttons: ['OK'],
        });
    
        await alert.present();
      }
    }


