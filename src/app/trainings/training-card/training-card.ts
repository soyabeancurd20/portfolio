import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-training-card',
  imports: [],
  template: `
    <div class="training-card">
      <h3>{{ title }}</h3>
      <p>{{ provider }} — {{ date }}</p>

      @if (certificate) {
  <a [href]="certificate" target="_blank">View Certificate</a>}
    </div>
  `,
  styles: ``,
})
export class TrainingCard {
  @Input() title!: string;
  @Input() provider!: string;
  @Input() date!: string;
  @Input() certificate?: string;
}
