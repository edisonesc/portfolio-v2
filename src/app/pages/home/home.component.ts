import { Technology } from './../../models/technology.model';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { projects } from 'src/app/providers/projects.provider';
import { Experience } from 'src/app/models/experience.model';
import { experiences } from 'src/app/providers/experience.provider';
import { user } from 'src/app/providers/user.provider';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User = user;
  projects: Project[] = projects;
  work_experiences: Experience[] = experiences.filter(
    (experience) => experience.type == 'WORK'
  );
  education_experiences: Experience[] = experiences.filter(
    (experience) => experience.type == 'EDUCATION'
  );
  experiences = [this.work_experiences, this.education_experiences];

  analytics = {
    mostUsedTechnologies: {
      data: [],
      limit: 10
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.initAnalytics();
  }

  initAnalytics() {
    let projectTechnologies: {
      technology: Technology,
      usage: number
    }[] = []
    this.projects.forEach(project => project.technologies.forEach(technology => {
      let projectTechnologyFilterList = projectTechnologies.filter(pt => pt.technology == technology);
      if (projectTechnologyFilterList.length > 0) {
        projectTechnologies[projectTechnologies.indexOf(projectTechnologyFilterList[0])].usage += 1;
      } else {
        projectTechnologies.push({technology, usage: 1});
      }
    }))
    this.analytics.mostUsedTechnologies.data = this.sortMostUsedProjects(projectTechnologies);
  }

  sortMostUsedProjects(list: {
    technology: Technology,
    usage: number
  }[]) {
    list.sort((i1, i2) => {
      if(i1.usage < i2.usage) {
        return 1;
      }
      if(i1.usage > i2.usage){
        return -1;
      }
      return 0;
    });
    return list;
  }

  open(url) {
    url && window.open(url, '_black')
  }
}
