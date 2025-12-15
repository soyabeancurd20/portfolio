import { Component, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <header>
  <div class="logo">MyPortfolio</div>
  <nav>
    <a href="#hero">Home</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#trainings">Trainings</a>
  </nav>
  <button class="theme-toggle" (click)="toggleTheme(themeBtn)" #themeBtn>🌙 Dark Mode</button>

</header>

<main class="container">
  
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1>Hello, I'm <span>Gerald</span></h1>
      <p>A passionate web developer specializing in Angular and modern web technologies.</p>
      <button class="cv-btn" (click)="downloadCV()">Download CV</button>
    </div>
    <img src="./profile.png" alt="Profile image" class="hero-img">
  </section>

  
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

   <br>
  <section id="projects" class="section">
  <h2>Projects</h2>
  <div class="project-grid">
    
    <div class="project-card">
      
      <h3>AquaBite</h3>
      <p>Automated Smart Feeder with Data Analytics (Capstone Project)</p>
      <a href="#" target="_blank">View Project</a>
    </div>

    
    <div class="project-card">
      <h3>Chirpabet</h3>
      <p>Educational App (Kotlin, TTS)</p>
      <a href="#" target="_blank">View Project</a>
    </div>
  </div>
</section>

  
   <br>
 <section id="trainings" class="section">
  <h2>Trainings & Certificates</h2>

  <div class="certificate-grid">
    <!-- Certiport -->
    <div class="certificate-card">
      <a href="./certificates/certiport-python.pdf" target="_blank">CERTIPORT (Python)</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/certiport-networking.pdf" target="_blank">CERTIPORT (Networking)</a>
    </div>

    <!-- Seminars -->
    <div class="certificate-card">
      <a href="/certificates/blockchain.pdf" target="_blank">Blockchain Technology and Cryptocurrency</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/cloud-devops.pdf" target="_blank">Cloud Computing and DevOps</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/cyberresilience.pdf" target="_blank">Cyberresilience</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/data-science.pdf" target="_blank">Data Science and Big Data Analytics</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/future-destiny-robotics.pdf" target="_blank">Future Destiny Robotics</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/iot-smart-tech.pdf" target="_blank">Internet of Things and Smart Technologies</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/power-bi.pdf" target="_blank">Power Business Intelligence</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/threat-landscape-ai.pdf" target="_blank">The Current Threat Landscape: AI in Cybersecurity</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/dict-cert.png" target="_blank">How to Counter-Act When Hacked?</a>
    </div>

    <!-- Course Certificates -->
    <div class="certificate-card">
      <a href="/certificates/querying-mysql.png" target="_blank">Querying Fundamentals with MySQL Essentials for Beginners</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/angular.pdf" target="_blank">Frontend Development Using Angular</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/data-analytics.pdf" target="_blank">Data Analytics Essentials</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/endpoint-security.pdf" target="_blank">Endpoint Security</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/intro-cybersecurity.pdf" target="_blank">Introduction to Cybersecurity</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/junior-cyber-analyst.pdf" target="_blank">Junior Cybersecurity Analyst</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/network-defense.pdf" target="_blank">Network Defense</a>
    </div>
  </div>
</section>



</main>

<footer>
  <p>© 2025 Your Name — All rights reserved.</p>
</footer>

  `,
  styles: [],
})
export class App {
  
  downloadCV() {
    window.open('./RESUME_COSTALES.pdf', '_blank');
  }

  toggleTheme(button: HTMLButtonElement) {
    const isDark = document.body.classList.toggle('dark-theme');
    if (isDark) {
      button.textContent = '☀️ Light Mode';
    } else {
      button.textContent = '🌙 Dark Mode';
    }
  }
}

