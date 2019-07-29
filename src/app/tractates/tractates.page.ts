import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {ParamMap, ActivatedRoute, Params} from '@angular/router';
import {Observable, observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-tractates',
  templateUrl: './tractates.page.html',
  styleUrls: ['./tractates.page.scss'],
})
export class TractatesPage implements OnInit, OnDestroy {
  currentSeder = 'taharos';
  // tslint:disable-next-line:max-line-length
  mesechtos = {זרעים: ['ברכות'], מועד: ['שבת', 'עירובין', 'פסחים' , 'ראש השנה', '	יומא', 'סוכה', 'ביצה', 'תענית', 'מגילה', 'מועד קטן',   'חגיגה'], נשים: ['יבמות', 'כתובות', 'נדרים', 'נזיר', 'סוטה', 'גיטין', 'קידושין'  ], נזקין: ['בבא קמא', 'בבא מציעא', 'בבא בתרא', 'סנהדרין', 'מכות', 'שבועות', 'עבודה זרה', 'הוריות' ], קדשים: ['זבחים', 'מנחות', 'חולין', 'בכורות', 'ערכין', 'תמורה', 'כריתות', 'מעילה', ], טהרות: ['נידה']};
  // seder$: Observable<string> = this.route.params.pipe(map(p => p.seder));
  routeSubscription: Subscription ;
  constructor(private route: ActivatedRoute, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
     const seder: string = this.route.snapshot.params.seder;
     this.currentSeder = seder;
  }

  ngOnDestroy() {
  }





  // handleTractateClick = (tractate : string) : void => {
  //   // this.navCtrl.push(TractatePage, {tractate});
  // }


}
