import { Component } from '@angular/core';
import { RmIssueService } from '../../../services/rm-issue.service';
import { RmIssue } from '../../../Model/tltRmIssueModel';
import { RmService } from '../../../services/rawMaterial.service';
import { RawMaterial } from '../../../Model/tltRawMaterialModel';

@Component({
  selector: 'app-rms-issues',
  standalone: true,
  imports: [],
  templateUrl: './rms-issues.component.html',
  styleUrl: './rms-issues.component.css'
})
export class RmsIssuesComponent {
  constructor(private rmIssueService: RmIssueService, private rmService  : RmService) {}
  issueItems: any = []; 
  // doc : 
  docId: any =[];
  // RmIssue
  ngOnInit() {
    
    this.rmIssueService.getIssueItem().subscribe((items) => {
      this.issueItems = items;
      console.log(this.issueItems);
    
  });
  this.issueItems.forEach((item: any) => {
    const issuedDocumentId = item.issuedDocumentId;
    this.rmService.getSingleRm(issuedDocumentId).subscribe((rmdoc) => {
      this.docId = rmdoc;
      console.log('DOC',this.docId);
    });
});
    
  }
  // getdoc(id : string){
  //   this.rmService.getSingleRm(id).subscribe((rmdoc) => {
        
  //     this.docId = rmdoc;
  //     return this.docId.documentNo;
  //   });
  // }
  formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
