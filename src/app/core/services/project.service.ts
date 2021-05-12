import { Injectable } from '@angular/core';
import { PROJECTS } from '../mocks/project-data';
import { Project } from 'src/app/shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = PROJECTS;

  constructor() { 

  }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.projects[id];
  }
}
