import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RmService } from '../../../services/rawMaterial.service';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';
import { FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-rms-qr',
  standalone: true,
  imports: [ZXingScannerModule,FormsModule],
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
  issuedPcs: number =0;

  constructor(public router: Router, public rmService: RmService) {}
  ngOnInit(): void {}

  issueRM(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const pcs = form.elements.namedItem(
      'issuePcs'
    ) as HTMLInputElement;
    const pcss = pcs.value;
    console.log(pcss);
    this.issuedPcs = pcss;

  }
  

  showIssueRmForm() {
    this.issueButton = false;
    this.issueForm = true;
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
