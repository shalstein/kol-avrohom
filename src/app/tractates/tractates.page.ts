import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tractates',
  templateUrl: './tractates.page.html',
  styleUrls: ['./tractates.page.scss'],
})
export class TractatesPage implements OnInit {
  currentSeder: string;
  // tslint:disable-next-line:max-line-length
  mesechtos = {זרעים: ['ברכות'], מועד: ['שבת', 'עירובין', 'פסחים' , 'ראש השנה', 'יומא', 'סוכה', 'ביצה', 'תענית', 'מגילה', 'מועד קטן',   'חגיגה'], נשים: ['יבמות', 'כתובות', 'נדרים', 'נזיר', 'סוטה', 'גיטין', 'קידושין'  ], נזקין: ['בבא קמא', 'בבא מציעא', 'בבא בתרא', 'סנהדרין', 'מכות', 'שבועות', 'עבודה זרה', 'הוריות' ], קדשים: ['זבחים', 'מנחות', 'חולין', 'בכורות', 'ערכין', 'תמורה', 'כריתות', 'מעילה', ], טהרות: ['נדה']};

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
     const seder: string = this.route.snapshot.params.seder;
     this.currentSeder = seder;
  }

}
