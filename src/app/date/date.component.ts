import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.trial.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message : string;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.message = currentDate.toDateString() + "  " + currentDate.toLocaleTimeString();
    }, 1000);


  }

  ngOnInit() {
  }

}
