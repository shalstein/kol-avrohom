import { Component, OnInit } from '@angular/core';
import {DafYomiCalculaterService} from '../services/day-yomi-calculater/daf-yomi-calculater.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isDafYomiCurrentTab = true;
  todaysTractate = {};
  yesterdaysTractate = {};
  tomorrowsTractate = {};
  constructor(private dafYomiCalculater: DafYomiCalculaterService) {
  }
  sedarim = ['זרעים', 'מועד', 'נשים', 'נזקין', 'קדשים', 'טהרות' ];

  ngOnInit() {
    this.todaysTractate = this.dafYomiCalculater.calculateDafYomiToday(0);
    this.yesterdaysTractate = this.dafYomiCalculater.calculateDafYomiToday(-1);
    this.tomorrowsTractate = this.dafYomiCalculater.calculateDafYomiToday(1);
  }

   handleSegementChange = (ev: any)  => {
     if (ev.detail.value === 'dafYomi') {
     this.isDafYomiCurrentTab = true;
    } else {
       this.isDafYomiCurrentTab = false;
    }
   }
}
