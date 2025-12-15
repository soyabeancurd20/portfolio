import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  template: `
    <div class="project-card">
      <img [src]="image" [alt]="title">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a [href]="link" target="_blank">View Project</a>
    </div>
  `,
  styles: ``,
})
export class ProjectCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() link!: string;
}
