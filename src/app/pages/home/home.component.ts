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
  constructor() {}

  ngOnInit(): void {}
}
