import { Component, OnInit } from '@angular/core';
import {projectsData} from './projects_data.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  projectData: any;
  numbers: number[];

  constructor() { }

  ngOnInit() {
    this.projectData = projectsData;

    //https://stackoverflow.com/questions/34405878/way-to-ngfor-loop-defined-number-of-times-instead-of-repeating-over-array
    this.numbers = Array(Math.ceil(this.projectData.length/3)).fill(0).map((x,i)=>i)
  }

}
