import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: Project;
  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) {
    this.project = this.projectService.getProjectById(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  ngOnInit(): void {
  }
}
