import { Component } from '@angular/core';
import {  Router, } from '@angular/router';
import { RmService } from '../../../services/rawMaterial.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { QRCodeModule } from 'angularx-qrcode';
// import { ScanFolioCitaComponent } from './scan-folio-cita/scan-folio-cita.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';



@Component({
  selector: 'app-rms-qr',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './rms-qr.component.html',
  styleUrl: './rms-qr.component.css'
})
export class RmsQrComponent {

  constructor( public router: Router,public rmService: RmService) {}
  scanResult: string = '';
  scannerView : boolean = true;
  itemView : boolean = false;
  scannedRm! : RawMaterial;
  ngOnInit(): void {
    
    }
    
    onCodeResult(result: string) {
      this.scanResult = result;
      this.scannerView = false;
      this.itemView = true;
      this.rmService.getSingleRm(result).subscribe((res) => {
        console.log('Item details:', res);
        
        this.scannedRm = res;
      });
    }
  }
