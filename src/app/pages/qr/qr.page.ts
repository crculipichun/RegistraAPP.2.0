import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, QRCodeModule,FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class QRPage implements OnInit {

  qrCodeString= 'vacio'; 
  scannedResult:any;
  constructor() { }

  ngOnInit() {
  }

 

  usuario={
    nom:'',
    sec:'',
    fec:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
    this.qrCodeString=this.qrCodeString.concat('-/-');
    this.qrCodeString=this.qrCodeString.concat(this.usuario.sec);
    this.qrCodeString=this.qrCodeString.concat('-/-');
    this.qrCodeString=this.qrCodeString.concat(this.usuario.fec);
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }
  
}
