import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  imports: [],
  template: `
    <div class="skill-item">
      <h3>{{ name }}</h3>
      <p>{{ level }}</p>
    </div>
  `,
  styles: ``,
})
export class SkillItem {
  @Input() name!: string;
  @Input() level!: string;
}
