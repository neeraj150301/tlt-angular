import { Component } from '@angular/core';
import { TltAdminComponent } from "./tlt-admin/tlt-admin.component";

@Component({
    selector: 'app-tlt-home',
    standalone: true,
    templateUrl: './tlt-home.component.html',
    styleUrl: './tlt-home.component.css',
    imports: [TltAdminComponent]
})
export class TltHomeComponent {

}
