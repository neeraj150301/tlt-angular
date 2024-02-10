import { Component } from '@angular/core';
import { RmService } from '../../../services/rawMaterial.service';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';
import { QRCodeModule } from 'angularx-qrcode';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { RmQrCodeComponent } from '../../../widget/rm-qr-code/rm-qr-code.component';
import { SafeUrl } from '@angular/platform-browser';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-rms-viewrm',
  standalone: true,
  templateUrl: './rms-viewrm.component.html',
  styleUrl: './rms-viewrm.component.css',
  imports: [RouterLink,QRCodeModule, RouterModule, RmQrCodeComponent],
})
export class RmsViewrmComponent {

  expandedStates: boolean[] = [];
  showModal = false;
  public qrCodeDownloadLink: SafeUrl = '';
  constructor(private rawMaterialService: RmService, public router: Router) {}

  rawMaterials: RawMaterial[] = [];

  ngOnInit() {
    this.fetchRm();
    this.expandedStates = this.rawMaterials.map(() => false);
  }
  fetchRm() {
    this.rawMaterialService.getRm().subscribe((items) => {
      this.rawMaterials = items;
    });
  }
  formatDate(dateString: string | Date) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US',{
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  toggleExpanded(index: number) {
    this.expandedStates = this.rawMaterials.map(() => false);
    this.expandedStates[index] = !this.expandedStates[index];
  }

  showQR() {
    this.showModal = !this.showModal;
    
    // this.rawMaterialService.rawmaterial.set(rawMaterial);
    // this.router.navigate(['./rms/rms-qr']);
  }
  
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
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
        window.open(pdf.output('bloburl'));
      }); 
    }
}
