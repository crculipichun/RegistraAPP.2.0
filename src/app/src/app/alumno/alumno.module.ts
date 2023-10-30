import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlumnoPageRoutingModule } from './alumno-routing.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner'; 
import { AlumnoPage } from './alumno.page'; 



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZXingScannerModule, 
    IonicModule,
    AlumnoPageRoutingModule,
   
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}
