import { Component } from '@angular/core';
import { SkillItem } from './skill-item/skill-item';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillItem],
  template: `
    <section>
      <h2>Skills</h2>
      <div class="skills-grid">
        <app-skill-item name="Angular" level="Advanced"></app-skill-item>
        <app-skill-item name="TypeScript" level="Advanced"></app-skill-item>
        <app-skill-item name="HTML/CSS" level="Expert"></app-skill-item>
      </div>
    </section>
  `,
})
export class Skills {}
