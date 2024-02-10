import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-rm-qr-code',
  standalone: true,
  imports: [RouterLink,RouterModule,QRCodeModule],
  templateUrl: './rm-qr-code.component.html',
  styleUrl: './rm-qr-code.component.css'
})
export class RmQrCodeComponent {

}
