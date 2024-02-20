import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { environment } from "../environment";
import { RawMaterial } from "../Model/tltRawMaterialModel";

@Injectable({
    providedIn:'root'
})

export class RmService{
    http = inject(HttpClient);
    public rawmaterial = signal(RawMaterial);

    createRm(data: RawMaterial) {
        this.http
          .post(
            `${environment.apiBaseUrl}/tlt-rms`,
            data
          )
          .subscribe((res) => {
            // console.log(res);
          });
          this.getRm();
      }
      getRm() {
        return this.http.get<any>(`${environment.apiBaseUrl}/tlt-rms`);
    }
    getSingleRm(id : string){
      return this.http.get<any>(`${environment.apiBaseUrl}/tlt-rms/${id}`)
    }
    issueRm(model : RawMaterial){
      // console.log('scannedRm:',model);
      this.http.post(`${environment.apiBaseUrl}/tlt-rms/issue`,model).subscribe((res)=>{
// console.log(res);
      } );
    }
}