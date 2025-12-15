import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  template: `
    <section id="skills" class="section">
  <h2>Technical Skills</h2>

  <div class="skills-subsection">
    <h3>Programming</h3>
    <div class="skills-grid">
      <div class="skill-card">HTML</div>
      <div class="skill-card">CSS</div>
      <div class="skill-card">JavaScript</div>
      <div class="skill-card">TypeScript</div>
      <div class="skill-card">Angular</div>
      <div class="skill-card">Kotlin</div>
      <div class="skill-card">Java</div>
      <div class="skill-card">XML</div>
    </div>
  </div>

  <br>

  <div class="skills-subsection">
    <h3>Databases</h3>
    <div class="skills-grid">
      <div class="skill-card">MongoDB Atlas</div>
      <div class="skill-card">Firebase Realtime DB (basic)</div>
      <div class="skill-card">MSSQL</div>
    </div>
  </div>

  <br>

  <div class="skills-subsection">
    <h3>Tools</h3>
    <div class="skills-grid">
      <div class="skill-card">Visual Studio Code</div>
      <div class="skill-card">Android Studio</div>
      <div class="skill-card">Git/GitHub</div>
    </div>
  </div>

  <br>

  <div class="skills-subsection">
    <h3>Mobile Development</h3>
    <div class="skills-grid">
      <div class="skill-card">Basic Native Android (Java & Kotlin)</div>
    </div>
  </div>
</section>
  `,
  styles: ``,
})
export class Skills {

}
