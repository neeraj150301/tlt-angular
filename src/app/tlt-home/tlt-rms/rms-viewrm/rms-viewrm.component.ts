import { Component, signal } from '@angular/core';
import { RmService } from '../../../services/rawMaterial.service';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';
import { RmItem } from '../../../Model/tltRmItemModel';
import { RmItemService } from '../../../services/rmItem.service';
import { QRCodeModule } from 'angularx-qrcode';
import { Router, RouterModule } from '@angular/router';
import { RmQrCodeComponent } from '../../../widget/rm-qr-code/rm-qr-code.component';
import { SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-rms-viewrm',
  standalone: true,
  templateUrl: './rms-viewrm.component.html',
  styleUrl: './rms-viewrm.component.css',
  imports: [QRCodeModule, RouterModule, RmQrCodeComponent],
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
    this.expandedStates[index] = !this.expandedStates[index];
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
  
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
  
  
}
