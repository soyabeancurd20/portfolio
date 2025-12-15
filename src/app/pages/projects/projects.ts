import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [ProjectCard],
    template: `
    <section>
      <h2>Projects</h2>
      <div class="projects-grid">
        <app-project-card
          title="Portfolio Website"
          description="A personal portfolio built with Angular."
          image="assets/projects/portfolio.png"
          link="https://github.com/user/portfolio">
        </app-project-card>

        <app-project-card
          title="Task Manager"
          description="A task tracking app using Firebase."
          image="assets/projects/task-manager.png"
          link="https://github.com/user/task-manager">
        </app-project-card>
      </div>
    </section>
  `
})
export class Projects { }
