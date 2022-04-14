import { experiences } from './../../providers/experience.provider';
import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import * as moment from 'moment'
@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent implements OnInit {
  @Input('experiences') experiences: Experience[];
  constructor() {}

  ngOnInit(): void {}

  getTenureDuration(experience : Experience) {

    const startedAt = moment(experience.started_at, "MMMM YYYY");
    const finishedAt = moment(experience.finished_at,  "MMMM YYYY");

    if(startedAt.isValid() && finishedAt.isValid()) {
     
      const duration = moment.duration(finishedAt.diff(startedAt)).asYears();
      const tenure = this.getTenure(duration);

      return `${tenure}`;
    }
    return null;
  }

  getTenure(years: number) {
    // if(years > 1) {
    //   return {duration: years.toFixed(1), unit: "Years"}
    // } else {
    //   return {duration: (years * 10).toFixed(), unit: "Months"}
    // } 
    let dateResult = []
    let units = ["month", "year"];

    let yearSplit = years.toFixed(1).split(".").reverse();
    yearSplit.forEach(param => {
      const paramToNumber = Number(param);
      if(paramToNumber != 0) {
        const index = yearSplit.indexOf(param)
        dateResult.push(`${param} ${paramToNumber == 1 ? units[index]: `${units[index]}s`}`)
      }
    })
    return dateResult.reverse().join(" ");
  }
}
