import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-rm-qr-code',
  standalone: true,
  imports: [RouterModule,QRCodeModule],
  templateUrl: './rm-qr-code.component.html',
  styleUrl: './rm-qr-code.component.css'
})
export class RmQrCodeComponent {

}
