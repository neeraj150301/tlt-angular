import { Component, inject } from '@angular/core';
import { RmItem } from '../../../../Model/tltRmItemModel';
import { RmItemService } from '../../../../services/rmItem.service';

@Component({
  selector: 'app-rms-view-items',
  standalone: true,
  imports: [],
  templateUrl: './rms-view-items.component.html',
  styleUrl: './rms-view-items.component.css'
})
export class RmsViewItemsComponent {
  // rmItemService = inject(RmItemService);
  constructor(private rmItemService: RmItemService) {}

  rmItems: RmItem[] = [];
  ngOnInit() {
    this.fetchRmItems();
  }
  fetchRmItems() {
    this.rmItemService.getRmItems().subscribe((items) => {
        this.rmItems = items;
    });
}}


