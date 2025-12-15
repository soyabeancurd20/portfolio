import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <header>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/skills">Skills</a>
        <a routerLink="/projects">Projects</a>
        <a routerLink="/trainings">Trainings</a>
      </nav>
    </header>
  `,
  styles: ``,
})
export class Header {

}
