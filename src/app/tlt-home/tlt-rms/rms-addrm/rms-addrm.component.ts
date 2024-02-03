import { Component } from '@angular/core';
import { DatePickerComponent } from '../../../widget/date-picker/date-picker.component';
import { RmItemService } from '../../../services/rmItem.service';
import { RmItem } from '../../../Model/tltRmItemModel';

@Component({
  selector: 'app-rms-addrm',
  standalone: true,
  templateUrl: './rms-addrm.component.html',
  styleUrl: './rms-addrm.component.css',
  imports: [DatePickerComponent],
})
export class RmsAddrmComponent {
  showSuccessMessage: boolean = false;
  showItemList: boolean = false;
  Date!: string;
  constructor(private rmItemService: RmItemService) {}
  RmItems: RmItem[] = [];
  ngOnInit() {
    this.fetchRmItems();
  }
  fetchRmItems() {
    this.rmItemService.getRmItems().subscribe((items) => {
        this.RmItems = items;
    });
}
  showitemList(){
    this.showItemList = !this.showItemList;
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
    const receivedPcs = receivedPcsElement.value;
    console.log(receivedPcs);

    const receivedQtyElement = form.elements.namedItem(
      'receivedQty'
    ) as HTMLInputElement;
    const receivedQty = receivedQtyElement.value;
    console.log(receivedQty);

    const maxLenElement = form.elements.namedItem('maxLen') as HTMLInputElement;
    const maxLen = maxLenElement.value;
    console.log(maxLen);

    const minLenElement = form.elements.namedItem('minLen') as HTMLInputElement;
    const minLen = minLenElement.value;
    console.log(minLen);

    const avglengthElement = form.elements.namedItem(
      'avglength'
    ) as HTMLInputElement;
    const avglength = avglengthElement.value;
    console.log(avglength);

    const lengthElement = form.elements.namedItem('length') as HTMLInputElement;
    const length = lengthElement.value;
    console.log(length);

    const widthElement = form.elements.namedItem('width') as HTMLInputElement;
    const width = widthElement.value;
    console.log(width);

    const costCenterElement = form.elements.namedItem(
      'costCenter'
    ) as HTMLInputElement;
    const costCenter = costCenterElement.value;
    console.log(costCenter);
    console.log(this.Date);


    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000);
    form.reset();

    const RawMaterial = {
      warehouse: warehouseName,
      documentNo: docNO,
      documentDate: this.Date,
      vendorName: vendorName,
      receivedPiece: receivedPcs,
      receivedQuantity: receivedQty,
      maxLength: maxLen,
      minLength: minLen,
      averageLength: avglength,
      length: length,
      width: width,
      costCenter: costCenter,

      //  pgNonPg : string,
      //  itemName : string,
      //  section : string,
      //  itemId : string,
    };
  }
}
