import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../environment";
import { RawMaterial } from "../Model/tltRawMaterialModel";

@Injectable({
    providedIn:'root'
})

export class RmService{
    http = inject(HttpClient);

    createRm(data: RawMaterial) {
        this.http
          .post(
            `${environment.apiBaseUrl}/`,
            data
          )
          .subscribe((res) => {
            console.log(res);
          });
          this.getRm();
      }
      getRm() {
        return this.http.get<any>(`${environment.apiBaseUrl}/`);
    }
}