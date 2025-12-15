import { Component, signal } from '@angular/core';
import { Hero } from "./hero/hero";
import { Projects } from "./projects/projects";
import { Trainings } from "./trainings/trainings";
import { Skills } from "./skills/skills";

interface Project {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-root',
  imports: [Hero, Projects, Trainings, Skills],
  template: `
    <header>
  <div class="logo">MyPortfolio</div>
  <nav>
    <a href="#hero">Home</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#trainings">Trainings</a>
  </nav>
</header>

<main class="container">
  <app-hero></app-hero>
  <app-skills></app-skills>
  <app-projects></app-projects>
  <app-trainings></app-trainings>
</main>

<footer>
  <p>© 2025 Gerald Costales — All rights reserved.</p>
</footer>
  `,
  styles: [],
})
export class App {
}

