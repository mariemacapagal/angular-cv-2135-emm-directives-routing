import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  yourName = ''; // ng Model / Two-way data binding
  myName = 'Ed Marie May Macapagal';
  myInfo = 'Web Developer';

  constructor() {}

  ngOnInit() {}
}
