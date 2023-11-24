import { Component, NgZone, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Barcode,
  BarcodeFormat,
  BarcodeScanner,
  LensFacing, } from '@capacitor-mlkit/barcode-scanning';
import { IonicModule } from '@ionic/angular';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { BarcodeScanningModalComponent } from './scanner-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-scanner',
  templateUrl:'./scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule,ReactiveFormsModule,],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
 
})

export class ScannerPage implements OnInit {
  public readonly barcodeFormat = BarcodeFormat;
 

  public formGroup = new UntypedFormGroup({
    formats: new UntypedFormControl([]),
    googleBarcodeScannerModuleInstallState: new UntypedFormControl(0),
    googleBarcodeScannerModuleInstallProgress: new UntypedFormControl(0),
  });
  public barcodes: Barcode[] = [];
  public isSupported = false;
  public isPermissionGranted = false;

  

  constructor(
    private readonly dialogService: DialogService,
    private readonly ngZone: NgZone
  ) {}

  public ngOnInit(): void {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
    BarcodeScanner.checkPermissions().then((result) => {
      this.isPermissionGranted = result.camera === 'granted';
    });
    BarcodeScanner.removeAllListeners().then(() => {
      BarcodeScanner.addListener(
        'googleBarcodeScannerModuleInstallProgress',
        (event) => {
          this.ngZone.run(() => {
            console.log('googleBarcodeScannerModuleInstallProgress', event);
            const { state, progress } = event;
            this.formGroup.patchValue({
              googleBarcodeScannerModuleInstallState: state,
              googleBarcodeScannerModuleInstallProgress: progress,
            });
          });
        }
      );
    });
  }
  

  public async scan(): Promise<void> {
    const formats = this.formGroup.get('formats')?.value || [];
    const { barcodes } = await BarcodeScanner.scan({
      formats,
    });
    console.log(barcodes);

    const qrInfo = barcodes.map((barcode) => {
      if ('text' in barcode) {
        return barcode.text;
      } else if ('displayValue' in barcode) {
        return barcode.displayValue;
      } else {
        return 'N/A';
      }
    }).join(', ');

    this.enviarCorreo(qrInfo);
    this.barcodes = barcodes;
  }
  private enviarCorreo(qrInfo: string): void {
    const destinatario = 'dalas0615@gmail.com'; // Reemplaza con la dirección de correo del docente
    const asunto = 'Información del Código QR';
    const contenidoCorreo = `Información del código QR:\n${qrInfo}`;
    const uri = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(
      contenidoCorreo
    )}`;

    // Abre el cliente de correo predeterminado del usuario
    window.location.href = uri;
  }

  public async installGoogleBarcodeScannerModule(): Promise<void> {
    await BarcodeScanner.installGoogleBarcodeScannerModule();
  }

  public async requestPermissions(): Promise<void> {
    await BarcodeScanner.requestPermissions();
  }

}