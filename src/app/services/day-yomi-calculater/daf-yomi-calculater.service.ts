import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DafYomiCalculaterService {

  constructor() { }

  calculateDafYomiToday(add) {

    function fromJSDate(d) {
      return { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() };
    }

    function fromTriple(year, month, day) {
        return { y: year, m: month, d: day };
    }

    function last_day_of_gregorian_month(month, year) {
        const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const ym400 = year % 400;
        if (month === 2 && (year % 4) === 0 && ym400 !== 100 && ym400 !== 200 && ym400 !== 300) {
          return 29;
        } else {
          return monthDays[month - 1];
        }
    }

    function abs_from_gregorian(date) {
      let abs = date.d;  /* days so far this month */

      /* Add days for months prior to this one */
      for (let m = 1; m < date.m; m++) {
      abs += last_day_of_gregorian_month(m, date.y);
      }
      /* Add days for years prior to this one */
      abs += 365 * (date.y - 1);

      /* Add Julian leap days for prior years */
      abs += Math.floor((date.y - 1) / 4);

      /* Minus prior century years */
      abs -= Math.floor((date.y - 1) / 100);

      /* ... and prior years divisible by 400 */
      abs += Math.floor((date.y - 1) / 400);

      return abs;
    }

    const DAF_COUNT = 2711;

    const getCycleStart = () => {
        const thisCycle = abs_from_gregorian(fromTriple(2005, 3, 2));
        return thisCycle  - (11 * DAF_COUNT);
    };

    const tractateMeta = [
      {pages: 63, name: 'ברכות'},
      {pages: 156, name: 'שבת'},
      {pages: 104, name: 'עירובין'},
      {pages: 120, name: 'פסחים'},
      {pages: 21, name: 'שקלים'},
      {pages: 87, name: 'יומא'},
      {pages: 55, name: 'סוכה'},
      {pages: 39, name: 'ביצה'},
      {pages: 34, name: 'ראש השנה'},
      {pages: 30, name: 'תענית'},
      {pages: 31, name: 'מגילה'},
      {pages: 28, name: 'מועד קטן'},
      {pages: 26, name: 'חגיגה'},
      {pages: 121, name: 'יבמות'},
      {pages: 111, name: 'כתובות'},
      {pages: 90, name: 'נדרים'},
      {pages: 65, name: 'נזיר'},
      {pages: 48, name: 'סוטה'},
      {pages: 89, name: 'גיטין'},
      {pages: 81, name: 'קידושין'},
      {pages: 118, name: 'בבא קמא'},
      {pages: 118, name: 'בבא מציעא'},
      {pages: 175, name: 'בבא בתרא'},
      {pages: 112, name: 'סנהדרין'},
      {pages: 23, name: 'מכות'},
      {pages: 48, name: 'שבועות'},
      {pages: 75, name: 'עבודה זרה'},
      {pages: 13, name: 'הוריות'},
      {pages: 119, name: 'זבחים'},
      {pages: 109, name: 'מנחות'},
      {pages: 141, name: 'חולין'},
      {pages: 60, name: 'בכורות'},
      {pages: 33, name: 'ערכין'},
      {pages: 33, name: 'תמורה'},
      {pages: 27, name: 'כריתות'},
      {pages: 36, name: 'מעילה'},
      {pages: 72, name: 'נדה'},
    ];

    let tractateNumber;
    let pageNumber;
    const thisDate = new Date();
    thisDate.setDate(thisDate.getDate() + add);

    const today = abs_from_gregorian(fromJSDate(thisDate));
    let days = today - getCycleStart();
    let i = 0;

    days = days % DAF_COUNT;

    while (days > tractateMeta[i].pages - 1) {
      days -= tractateMeta[i].pages;
      i++;
      if (i > tractateMeta.length) {
        tractateNumber = 0;
        pageNumber = -1;
        break;
      }
    }

    tractateNumber = i;
    pageNumber = days + 2;
    return {tractateName: tractateMeta[tractateNumber].name, pageNumber};
  }
}
