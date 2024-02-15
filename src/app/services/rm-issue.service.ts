import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class RmIssueService {

  constructor() { }
  http = inject(HttpClient);

    getIssueItem() {
        this.http
          .get(
            `${environment.apiBaseUrl}/rm-issue`
            
          )
          .subscribe((res) => {
            console.log(res);
          });
         
      }
      
}
