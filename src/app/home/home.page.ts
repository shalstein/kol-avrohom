import { Component, OnInit } from '@angular/core';
import {DafYomiCalculaterService} from '../services/day-yomi-calculater/daf-yomi-calculater.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  segmentValue: string;
  todaysTractate = {};
  yesterdaysTractate = {};
  tomorrowsTractate = {};
  constructor(private dafYomiCalculater: DafYomiCalculaterService, private route: ActivatedRoute) { }
  sedarim = ['זרעים', 'מועד', 'נשים', 'נזקין', 'קדשים', 'טהרות' ];

  ngOnInit() {
    this.todaysTractate = this.dafYomiCalculater.calculateDafYomiToday(0);
    this.yesterdaysTractate = this.dafYomiCalculater.calculateDafYomiToday(-1);
    this.tomorrowsTractate = this.dafYomiCalculater.calculateDafYomiToday(1);

    const  segment = this.route.snapshot.params.segment;
    this.segmentValue = segment === undefined || segment === 'dafYomi' ? 'dafYomi' : 'selectDaf';
  }

   handleSegementChange = (ev: any)  => {
     if (ev.detail.value === 'dafYomi') {
     this.segmentValue = 'dafYomi';
    } else {
       this.segmentValue = 'selectDaf';
    }
   }
}
