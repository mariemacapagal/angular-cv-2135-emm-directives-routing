import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //ngFor

  education = [
    {
      school: 'Porac Elementary School',
      level: 'Elementary',
      year: '2008 - 2014',
    },
    {
      school: 'Pulung Santol National High School',
      level: 'Junior High School',
      year: '2014 - 2018',
    },
    {
      school: 'Holy Angel University',
      level:
        'Senior High School - Science, Technology, Engineering, and Mathematics',
      year: '2018 - 2020',
    },
    {
      school: 'Holy Angel University',
      level: 'Bachelor of Science in Information Technology - Web Development',
      year: '2020 - 2024',
    },
  ];
}
