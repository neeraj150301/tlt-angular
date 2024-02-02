import { Component } from '@angular/core';
import { SideBarComponent } from "../../widget/side-bar/side-bar.component";
import { BottomNavComponent } from "../../widget/bottom-nav/bottom-nav.component";

@Component({
    selector: 'app-tlt-admin',
    standalone: true,
    templateUrl: './tlt-admin.component.html',
    styleUrl: './tlt-admin.component.css',
    imports: [SideBarComponent, BottomNavComponent]
})
export class TltAdminComponent {

}
