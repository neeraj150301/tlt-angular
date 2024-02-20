import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RmService } from '../../../services/rawMaterial.service';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rms-qr',
  standalone: true,
  imports: [ZXingScannerModule, FormsModule, CommonModule],
  templateUrl: './rms-qr.component.html',
  styleUrl: './rms-qr.component.css',
})
export class RmsQrComponent {
  scanResult: string = '';
  scannerView: boolean = true;
  issueButton: boolean = true;
  issueForm: boolean = false;
  itemView: boolean = false;
  scannedRm!: RawMaterial;
  issuePcsEntered: number = 0;
  balPcsEntered: number = 0;
  perPcWt: number = 0;
  issuedQty: number = 0;
  issuedPcs: number = 0;
  balQty: number = 0;
  balPcs: number = 0;
  errorr: boolean = false;
  

  constructor(public router: Router, public rmService: RmService) {}
  ngOnInit(): void {}

  issueRM(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const pcs = form.elements.namedItem('issuePcsEntered') as HTMLInputElement;
    const pcss = pcs.value;
    console.log('pcs:', pcss);
    this.issuePcsEntered = parseInt(pcss);
    console.log('bal:', this.balPcsEntered);
    console.log('issuePcs:', this.issuePcsEntered);
   
    if (this.issuePcsEntered > this.balPcsEntered || this.issuePcsEntered < 1 || !this.issuePcsEntered) {
      // console.log('Error: Issue quantity cannot exceed balance quantity.');
      this.errorr = true;
      return;
    }
    this.perPcWt =
      this.scannedRm.receivedQuantity / this.scannedRm.receivedPieces;
    this.issuedQty = this.perPcWt * this.issuePcsEntered;
    this.issuedPcs = this.scannedRm.issuedPieces! + this.issuePcsEntered;
    this.balQty =
      this.scannedRm.balanceQuantity! - this.perPcWt * this.issuePcsEntered;
    this.balPcs = this.scannedRm.balancePieces! - this.issuePcsEntered;
    // console.log('perPcWt:', this.perPcWt);
    // console.log('issuedQty:', this.issuedQty);
    // console.log('issuedPcs:', this.issuedPcs);
    // console.log('balQty:', this.balQty);

    // console.log('balPcs:', this.balPcs);
    this.scannedRm.issuedQuantity = this.scannedRm.issuedQuantity! + this.perPcWt * this.issuePcsEntered;
    this.scannedRm.issuedPieces = this.issuedPcs;
    this.scannedRm.balanceQuantity = this.balQty;
    this.scannedRm.balancePieces = this.balPcs;

    this.rmService.issueRm(this.scannedRm);
    this.router.navigate(['./rms/rms-issues']);

  }

  showIssueRmForm() {
    this.issueButton = false;
    this.issueForm = true;
  }

  onCodeResult(result: string) {
    this.scanResult = result;
    this.rmService.getSingleRm(result).subscribe((res) => {
      // console.log('Item details:', res);

      this.scannedRm = res;
      this.balPcsEntered = this.scannedRm.balancePieces!;
    });
    this.scannerView = false;
    this.itemView = true;
  }

  formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
