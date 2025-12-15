import { Component } from '@angular/core';
import { TrainingCard } from './training-card/training-card';

@Component({
    selector: 'app-trainings',
    standalone: true,
    imports: [TrainingCard],
    template: `
    <section>
      <h2>Trainings & Workshops</h2>
      <div class="trainings-grid">
        <app-training-card
          title="Angular Bootcamp"
          provider="Tech Academy"
          date="2024"
          certificate="assets/certificates/angular-bootcamp.pdf">
        </app-training-card>

        <app-training-card
          title="Web Development Workshop"
          provider="Google Dev Group"
          date="2023">
        </app-training-card>
      </div>
    </section>
  `
})
export class Trainings { }
