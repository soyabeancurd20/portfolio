import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-download',
  imports: [],
  template: `
    <section>
      <button (click)="downloadCV()">Download CV</button>
    </section>
  `,
  styles: ``,
})
export class CvDownload {
  downloadCV() {
    
  }
}
