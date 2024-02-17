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
  styleUrl: './rms-issues.component.css',
})
export class RmsIssuesComponent {
  constructor(
    private rmIssueService: RmIssueService,
    private rmService: RmService
  ) {}
  issueItems: any = [];

  async getDocs() {
    for (const issueItem of this.issueItems) {
      const rmdoc = await this.rmService
        .getSingleRm(issueItem.issuedDocumentId)
        .toPromise();
      issueItem.documentNo = rmdoc.documentNo;
      issueItem.pgNonPg = rmdoc.pgNonPg;
    }
  }

   ngOnInit() {
    this.rmIssueService.getIssueItem().subscribe( (items) => {
      this.issueItems = items;
      console.log(this.issueItems);
      this.getDocs();
    });
  }

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
