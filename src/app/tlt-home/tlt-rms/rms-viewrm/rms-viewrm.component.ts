import { Component, signal } from '@angular/core';
import { RmService } from '../../../services/rawMaterial.service';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';
import { RmItem } from '../../../Model/tltRmItemModel';
import { RmItemService } from '../../../services/rmItem.service';
import { QRCodeModule } from 'angularx-qrcode';
import { RouterModule } from '@angular/router';
import { RmQrCodeComponent } from "../../../widget/rm-qr-code/rm-qr-code.component";
@Component({
    selector: 'app-rms-viewrm',
    standalone: true,
    templateUrl: './rms-viewrm.component.html',
    styleUrl: './rms-viewrm.component.css',
    imports: [QRCodeModule, RouterModule, RmQrCodeComponent]
})
export class RmsViewrmComponent {
  expandedStates: boolean[] = [];
  // constructor(private rawMaterialService: RmService) {}

  rawMaterials: RawMaterial[] = [];

  // ngOnInit() {
    // this.fetchRm();
  // }
  // fetchRm() {
  //   this.rawMaterialService.getRm().subscribe((items) => {
  //       this.rawMaterials = items;
  //   });
// }
constructor(private rmItemService: RmItemService) {
}
rmItems: RmItem[] = [];
ngOnInit() {
  this.fetchRmItems();
  this.expandedStates = this.rmItems.map(() => false);
}
fetchRmItems() {
  this.rmItemService.getRmItems().subscribe((items) => {
      this.rmItems = items;
  });
}
toggleExpanded(index: number) {
  this.expandedStates[index] = !this.expandedStates[index];
}

}