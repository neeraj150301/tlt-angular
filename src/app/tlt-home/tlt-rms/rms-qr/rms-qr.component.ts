import { Component } from '@angular/core';
import {  Router, } from '@angular/router';
import { RmService } from '../../../services/rawMaterial.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { QRCodeModule } from 'angularx-qrcode';


@Component({
  selector: 'app-rms-qr',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './rms-qr.component.html',
  styleUrl: './rms-qr.component.css'
})
export class RmsQrComponent {
  constructor( public router: Router,public rmService: RmService) {}
  rawMaterial!: any;
  ngOnInit(): void {
    // Retrieve rawMaterial 
    this.rawMaterial = this.rmService.rawmaterial();
    
    }
    printQR(divId:string)
    {
        let data = document.getElementById(divId);  
        html2canvas(data!).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
        let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
        pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
        // pdf.save('Filename.pdf');  
        
        pdf.autoPrint();
        window.open(pdf.output('bloburl'), '_blank');
      }); 
    }
  }

