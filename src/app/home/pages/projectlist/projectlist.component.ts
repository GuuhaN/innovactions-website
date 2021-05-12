import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = projectService.getProjects();
  }

  ngOnInit(): void {
  }

  goToProject(id: number) {
    this.router.navigate(['/project', id]);
  }

}
