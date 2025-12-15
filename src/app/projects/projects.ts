import { Component, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  template: `
  <section id="projects" class="section">
  <h2>Projects</h2>

  <div class="project-grid">
    <!-- PROJECT CARD -->
    <div class="project-card" (click)="openProject()">
      <h3>{{ project.title }}</h3>
      <p>Automated Smart Feeder with Data Analytics (Capstone Project)</p>
      <span class="view-more">View Details</span>
    </div>
  </div>
</section>

<!-- PROJECT MODAL -->
<div
  class="modal-backdrop"
  [class.open]="isModalOpen()"
  (click)="closeModal()"
>
  <div class="modal" (click)="$event.stopPropagation()">
    <button class="close-btn" (click)="closeModal()">×</button>

    <!-- CLICKABLE IMAGE -->
    <img
      [src]="project.image"
      alt="AquaBite image"
      class="modal-img"
      (click)="openImage()"
    />

    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    
  </div>
</div>

<!-- IMAGE ENLARGE -->
<div
  class="image-backdrop"
  [class.open]="isImageOpen()"
  (click)="closeImage()"
>
  <img
    [src]="project.image"
    class="image-full"
    (click)="$event.stopPropagation()"
  />
</div>
  `,
  styles: [`.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: .25s;
  z-index: 1000;
}

.modal-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  background: #fff;
  max-width: 540px;
  width: 90%;
  padding: 20px;
  border-radius: 12px;
  position: relative;
}

.modal-img {
  width: 100%;
  border-radius: 8px;
  cursor: zoom-in;
  margin-bottom: 12px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 14px;
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
}

.hint {
  font-size: .8rem;
  color: #666;
}

/* ===== IMAGE ZOOM ===== */
.image-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: .25s;
  z-index: 1100;
}

.image-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.image-full {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  cursor: zoom-out;
}`],
})
export class Projects {
  project: Project = {
    title: 'AquaBite',
    description:
      'AquaBite is a smart aquaculture monitoring and feeding system designed to help fish owners maintain optimal water conditions and feeding schedules with ease. It tracks key water parameters in real time, automates feeding based on fish count, and sends alerts to ensure healthier fish, reduced waste, and efficient tank management.',
    image: './aquabite.png',
  };

  isModalOpen = signal(false);
  isImageOpen = signal(false);

  openProject() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.isImageOpen.set(false);
  }

  openImage() {
    this.isImageOpen.set(true);
  }

  closeImage() {
    this.isImageOpen.set(false);
  }
}
