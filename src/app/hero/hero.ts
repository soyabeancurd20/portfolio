import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section id="hero" class="hero">
  <div class="hero-content">
    <h1>Hello, I'm <span>Gerald</span></h1>
    <p>
      A passionate web developer specializing in Angular and modern web technologies.
    </p>
    <button class="cv-btn" (click)="downloadCV()">Download CV</button>
  </div>

  <img src="./profile.png" alt="Profile image" class="hero-img">
</section>
  `,
  styles: ``,
})
export class Hero {

  downloadCV() {
    window.open('./RESUME_COSTALES.pdf', '_blank');
  }

}
