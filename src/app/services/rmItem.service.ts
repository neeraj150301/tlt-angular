import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map } from "rxjs";
import { RmItem } from "../Model/tltRmItemModel";
import { environment } from "../environment";

@Injectable({
    providedIn:'root'
})

export class RmItemService{
    http = inject(HttpClient);

    createRmItem(data: RmItem) {
        this.http
          .post(
            `${environment.apiBaseUrl}/rm-item`,
            data
          )
          .subscribe((res) => {
            // console.log(res);
          });
          this.getRmItems();
      }
      getRmItems() {
        return this.http.get<any>(`${environment.apiBaseUrl}/rm-item`);
    }
}