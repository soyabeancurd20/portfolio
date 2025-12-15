import { Component } from '@angular/core';

import { IntroSection } from './intro-section/intro-section';
import { CvDownload } from './cv-download/cv-download';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [IntroSection, CvDownload],
    template: `
    <app-intro-section></app-intro-section>
    <app-cv-download></app-cv-download>
`
})
export class Home { }