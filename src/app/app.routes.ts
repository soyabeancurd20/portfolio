import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Trainings } from './trainings/training';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'skills',component: Skills},
    {path: 'projects', component: Projects},
    {path: 'trainings', component: Trainings}
];
