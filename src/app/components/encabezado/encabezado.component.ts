import { Component, OnInit } from '@angular/core';
import { IonicToastService } from 'src/app/services/ionic-toast.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {

  constructor(
    private ionicToastService: IonicToastService
  ) {}
  ngOnInit() { }
  showMyToast() {
    this.ionicToastService.showToast();
  }
  hideMyToast() {
    this.ionicToastService.hideToast();
  }
}
