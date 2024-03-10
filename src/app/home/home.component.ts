import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  headerText = "";

  constructor() { }

  ngOnInit(): void {
    const txt = "Hi There! I'm Learning Angular";
    const speed = 150;
    this.typeWriter(txt, speed, (displayText: string) => {
      this.headerText = displayText;
    });
  }
  typeWriter(txt: string, speed: number, callback: (displayText: string) => void): void {
    let displayText = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < txt.length) {
        displayText += txt.charAt(i);
        i++;
        callback(displayText); 
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
}
