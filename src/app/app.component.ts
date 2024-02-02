import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./widget/header/header.component";
import { BottomNavComponent } from "./widget/bottom-nav/bottom-nav.component";
import { SideBarComponent } from "./widget/side-bar/side-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink, BottomNavComponent, SideBarComponent]
})
export class AppComponent {
  title = 'tlt-angular';
}
