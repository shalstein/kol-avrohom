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

  handleSederClick = (seder) => {
    console.log('clicked ' + seder);
    // this.navCtrl.push(TractatesPage, {seder: seder});
  }
  ngOnInit() {
    this.todaysTractate = this.dafYomiCalculater.calculateDafYomiToday(0);
    this.yesterdaysTractate = this.dafYomiCalculater.calculateDafYomiToday(-1);
    this.tomorrowsTractate = this.dafYomiCalculater.calculateDafYomiToday(1);
  }



   handleTabClick = (button) => {
    //  if (button._elementRef.nativeElement.name === 'dafYomi') {
    //  this.isDafYomiCurrentTab = true;
    // } else {
    //    this.isDafYomiCurrentTab = false;
    //  }
   }

   handleDafYomiButtonClick = (tractate ): void => {
      console.log(tractate);
      // const tractateName = tractate.tractateName;
      // const pageValuePrefix = tractate.pageNumber <= 9 ? '0' : '';
      // this.navCtrl.push(TractatePage, {tractate: tractateName, pageValue: pageValuePrefix + tractate.pageNumber})
   }

}
