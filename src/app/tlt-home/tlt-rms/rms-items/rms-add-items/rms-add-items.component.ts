import { Component,inject } from '@angular/core';
import { RmItemService } from '../../../../services/rmItem.service';

@Component({
  selector: 'app-rms-add-items',
  standalone: true,
  imports: [],
  templateUrl: './rms-add-items.component.html',
  styleUrl: './rms-add-items.component.css',
})
export class RmsAddItemsComponent {
  // RmItemSerivce = inject(RmItemService);
  constructor(private rmItemService: RmItemService) {}

  showSuccessMessage: boolean = false;
  
  addItem(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const itemNameElement = form.elements.namedItem('itemname') as HTMLInputElement;
    const ItemName = itemNameElement.value;
    console.log(ItemName)
    
    const pgnonpgElement = form.elements.namedItem('pgnonpg') as HTMLInputElement;
    const pgnonpg = pgnonpgElement.value;
    console.log(pgnonpg)
    
    const sectionElement = form.elements.namedItem('section') as HTMLInputElement;
    const section = sectionElement.value;
    console.log(section)
    
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000);
    form.reset();
    
    const RmItem ={
      itemName: ItemName,
      pgNonPg: pgnonpg,
      section: section,
      stockAmount:0,
      createdBy:'',

    }
    this.rmItemService.createRmItem(RmItem);
  }
}