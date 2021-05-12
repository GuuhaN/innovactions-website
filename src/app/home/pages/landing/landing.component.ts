import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router, NavigationExtras } from '@angular/router';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  pIndex: number;
  projects: Project[];
  casesBreakpoint: number;
  partnerBreakpoint: number;

  ngOnInit(): void {
    this.casesRowResize(window.innerWidth);
    console.log(this.pIndex);
  }

  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = projectService.getProjects();
  }

  onResize(event) {
    this.casesRowResize(event.target.innerWidth);
  }

  casesRowResize(innerWidth: any) {
    if (innerWidth > 1200) {
      this.casesBreakpoint = 3;
      this.partnerBreakpoint = 6;
    }
    else if (innerWidth > 800 && innerWidth <= 1200) {
      this.casesBreakpoint = 2;
      this.partnerBreakpoint = 3;
    }
    else if (innerWidth <= 800) {
      this.casesBreakpoint = 1;
      this.partnerBreakpoint = 2;
    }

  }

  goToProject(id: number) {
    this.router.navigate(['/project', id]);
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
