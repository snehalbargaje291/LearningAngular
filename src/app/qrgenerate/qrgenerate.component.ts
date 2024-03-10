import { Component } from '@angular/core';

@Component({
  selector: 'app-qrgenerate',
  standalone: true,
  imports: [],
  templateUrl: './qrgenerate.component.html',
  styleUrl: './qrgenerate.component.css'
})
export class QrgenerateComponent {
  
  generateQR(): void {
    const qrImg = document.getElementById('qrImg') as HTMLImageElement;
    const qrText = (document.getElementById('qrText') as HTMLInputElement).value;
    const imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
    qrImg.src = imgSrc;
  }
  
}
