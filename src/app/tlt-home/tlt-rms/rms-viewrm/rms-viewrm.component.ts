import { Component, signal } from '@angular/core';
import { RmService } from '../../../services/rawMaterial.service';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';
import { RmItem } from '../../../Model/tltRmItemModel';
import { RmItemService } from '../../../services/rmItem.service';

@Component({
  selector: 'app-rms-viewrm',
  standalone: true,
  imports: [],
  templateUrl: './rms-viewrm.component.html',
  styleUrl: './rms-viewrm.component.css'
})
export class RmsViewrmComponent {
  isexpanded = signal(false);
  
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

constructor(private rmItemService: RmItemService) {}

rmItems: RmItem[] = [];
ngOnInit() {
  this.fetchRmItems();
}
fetchRmItems() {
  this.rmItemService.getRmItems().subscribe((items) => {
      this.rmItems = items;
  });
}
isExpanded(){
 this.isexpanded.set(!this.isexpanded());
}


}