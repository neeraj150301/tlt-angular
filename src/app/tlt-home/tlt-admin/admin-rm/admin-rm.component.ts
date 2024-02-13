import { Component } from '@angular/core';
import { RmsViewrmComponent } from "../../tlt-rms/rms-viewrm/rms-viewrm.component";

@Component({
    selector: 'app-admin-rm',
    standalone: true,
    templateUrl: './admin-rm.component.html',
    styleUrl: './admin-rm.component.css',
    imports: [RmsViewrmComponent]
})
export class AdminRmComponent {

}
