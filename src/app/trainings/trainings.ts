import { Component } from '@angular/core';

@Component({
  selector: 'app-trainings',
  imports: [],
  template: `
   <section id="trainings" class="section">
  <h2>Trainings & Certificates</h2>

  <div class="certificate-grid">
    <div class="certificate-card">
      <a href="./certificates/certiport-python.pdf" target="_blank">CERTIPORT (Python)</a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/certiport-networking.pdf" target="_blank">CERTIPORT (Networking)</a>
    </div>

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

    <div class="certificate-card">
      <a href="/certificates/querying-mysql.png" target="_blank">
        Querying Fundamentals with MySQL Essentials for Beginners
      </a>
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
      <a href="/certificates/intro-cybersecurity.pdf" target="_blank">
        Introduction to Cybersecurity
      </a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/junior-cyber-analyst.pdf" target="_blank">
        Junior Cybersecurity Analyst
      </a>
    </div>
    <div class="certificate-card">
      <a href="/certificates/network-defense.pdf" target="_blank">
        Network Defense
      </a>
    </div>
  </div>
</section>
  `,
  styles: ``,
})
export class Trainings {

}
