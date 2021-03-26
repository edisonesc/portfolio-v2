import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectItemComponent } from '../components/project-item/project-item.component';
import { NgbAccordion, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { TimelineItemComponent } from '../components/timeline-item/timeline-item.component';

const components = [ProjectItemComponent, TimelineItemComponent];

@NgModule({
  declarations: [HomeComponent, ...components],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
