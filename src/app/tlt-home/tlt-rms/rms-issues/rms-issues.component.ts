import { Component } from '@angular/core';
import { RmIssueService } from '../../../services/rm-issue.service';

@Component({
  selector: 'app-rms-issues',
  standalone: true,
  imports: [],
  templateUrl: './rms-issues.component.html',
  styleUrl: './rms-issues.component.css'
})
export class RmsIssuesComponent {
  constructor(private rmIssueService: RmIssueService) {}
  ngOnInit() {
    
    this.rmIssueService.getIssueItem
  }
}
