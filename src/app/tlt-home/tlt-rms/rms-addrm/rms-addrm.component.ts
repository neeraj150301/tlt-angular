import { Component } from '@angular/core';
import { DatePickerComponent } from '../../../widget/date-picker/date-picker.component';
import { RmItemService } from '../../../services/rmItem.service';
import { RmItem } from '../../../Model/tltRmItemModel';
import { RmService } from '../../../services/rawMaterial.service';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../../../widget/search-bar/search-bar.component";

@Component({
    selector: 'app-rms-addrm',
    standalone: true,
    templateUrl: './rms-addrm.component.html',
    styleUrl: './rms-addrm.component.css',
    imports: [DatePickerComponent, SearchBarComponent]
})
export class RmsAddrmComponent {
  showSuccessMessage: boolean = false;
  showItemList: boolean = false;
  hideItemList: boolean = false;
  Date!: string;
  selectedRmItemSection!: string;
  selectedRmItemName!: string;
  selectedRmItemPgNonPg!: string;
  selectedRmItemId!: string;
  
  constructor(private rmItemService: RmItemService,private rawMaterialService: RmService) {}
  RmItems: RmItem[] = [];
  ngOnInit() {
    this.fetchRmItems();
  }
  fetchRmItems() {
    this.rmItemService.getRmItems().subscribe((items) => {
      this.RmItems = items;
    });
  }
  
  onSearch(query: string): void {
    if (query.trim() === '') {
      this.RmItems = [...this.RmItems]; 
    } else {
      this.RmItems = this.RmItems.filter(items =>
        items.itemName.toLowerCase().includes(query.toLowerCase())
      );
      }
  }
  showitemList() {
    this.showItemList = !this.showItemList;
  }
  selectedItem(rmItem: RmItem){ 
  this.selectedRmItemSection = rmItem.section;
  this.selectedRmItemName = rmItem.itemName;
  this.selectedRmItemPgNonPg = rmItem.pgNonPg;
  this.selectedRmItemId = rmItem._id!;
  this.showitemList();
  this.hideItemList = true;
  }
  onDatepickerValueChange(selectedDate: string) {
    this.Date = selectedDate;
  }

  addRm(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const warehouseElement = form.elements.namedItem(
      'warehouse'
    ) as HTMLInputElement;
    const warehouseName = warehouseElement.value;
    console.log(warehouseName);

    const docNOElement = form.elements.namedItem('docNO') as HTMLInputElement;
    const docNO = docNOElement.value;
    console.log(docNO);

    const vendorNameElement = form.elements.namedItem(
      'vendorName'
    ) as HTMLInputElement;
    const vendorName = vendorNameElement.value;
    console.log(vendorName);

    const receivedPcsElement = form.elements.namedItem(
      'receivedPcs'
    ) as HTMLInputElement;
    const receivedPcs = parseInt(receivedPcsElement.value);
    console.log(receivedPcs);

    const receivedQtyElement = form.elements.namedItem(
      'receivedQty'
    ) as HTMLInputElement;
    const receivedQty = parseInt(receivedQtyElement.value);
    console.log(receivedQty);

    const maxLenElement = form.elements.namedItem('maxLen') as HTMLInputElement;
    const maxLen = parseInt(maxLenElement.value);
    console.log(maxLen);

    const minLenElement = form.elements.namedItem('minLen') as HTMLInputElement;
    const minLen = parseInt(minLenElement.value);
    console.log(minLen);

    const avglengthElement = form.elements.namedItem(
      'avglength'
    ) as HTMLInputElement;
    const avglength = parseInt(avglengthElement.value);
    console.log(avglength);

    const lengthElement = form.elements.namedItem('length') as HTMLInputElement;
    const length = parseInt(lengthElement.value);
    console.log(length);

    const widthElement = form.elements.namedItem('width') as HTMLInputElement;
    const width = parseInt(widthElement.value);
    console.log(width);

    const costCenterElement = form.elements.namedItem(
      'costCenter'
    ) as HTMLInputElement;
    const costCenter = costCenterElement.value;
    console.log(costCenter);
    console.log(this.Date);
    

  console.log(this.selectedRmItemSection);
  console.log(this.selectedRmItemName);
  console.log(this.selectedRmItemPgNonPg);
  console.log(this.selectedRmItemId);

    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000);
    form.reset();
    this.hideItemList = false;

    const RawMaterial = {
      pgNonPg : this.selectedRmItemPgNonPg,
      itemName : this.selectedRmItemName,
      section : this.selectedRmItemSection,
      itemId : this.selectedRmItemId,
      warehouse: warehouseName,
      documentNo: docNO,
      documentDate: this.Date,
      vendorName: vendorName,
      receivedPieces: receivedPcs,
      receivedQuantity: receivedQty,
      issuedPieces:0,
      issuedQuantity:0,
      balancePieces:receivedPcs,
      balanceQuantity:receivedQty,
      
      pendingDays:0,
      maxLength: maxLen,
      minLength: minLen,
      averageLength: avglength,
      length: length,
      width: width,
      costCenter: costCenter,
      balanceAmount:0,
      unit: '',
      createdBy: '',
    }; 
    this.rawMaterialService.createRm(RawMaterial);

  }
}
