import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  @ViewChild('scanner', { static: false })
  scanner!: ZXingScannerComponent;
  showContent: boolean = false;
  availableDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setupCamera();
  }

  setupCamera() {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.availableDevices = devices;
      this.selectedDevice = devices[0]; // Selecciona el primer dispositivo por defecto
      console.log('Cámaras detectadas:', devices);
    });
  }
  

  handleQrCodeResult(resultString: string) {
    console.log('Código QR escaneado:', resultString);

    // Puedes agregar lógica para redirigir según el contenido del código QR
    if (resultString) {
      this.router.navigate(['/ruta-de-redireccion', { qrContent: resultString }]);
    } else {
      console.log('Código QR no contiene datos válidos.');
      // Puedes manejar esto de acuerdo a tus necesidades, por ejemplo, redirigir a una página de error.
    }
  }

  onDeviceSelectChange(deviceId: string) {
    this.selectedDevice = this.availableDevices.find((device) => device.deviceId === deviceId);
  }

  // Función para mostrar el escáner
  startScanner() {
    this.showContent = true;
    console.log('Escáner iniciado');
  }
  volver(){
    this.router.navigate(['/home']); 
  }
}