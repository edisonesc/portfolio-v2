import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input('project') project: Project;
  constructor() {}

  ngOnInit(): void {}

  getProjectAvatar() {
    return this.project?.name.split('')[0].toUpperCase();
  }

  open(url) {}
}
