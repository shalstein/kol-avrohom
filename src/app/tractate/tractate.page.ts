import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import dafConverter from 'daf-converter';


@Component({
  selector: 'app-tractate',
  templateUrl: './tractate.page.html',
  styleUrls: ['./tractate.page.scss'],
})
export class TractatePage implements OnInit {
  tractate: string;
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  tractateEnglishName: string;
  tractatePages = [];
  currentPage = '02';
  audioURL: string;
  tractatesMetadata = {
    // tslint:disable-next-line:max-line-length
    ברכות: {name: 'Brochos', lastPage: 64}, שבת: {name: 'Shabbos', lastPage: 157}, עירובין: {name: 'Eruvin', lastPage: 104}, פסחים: {name: 'Pesachim', lastPage: 120}, 'ראש השנה': {name: 'RoshHashana', lastPage: 35} , יומא : {name: 'Yuma', lastPage: 88}, סוכה: {name: 'Succah', lastPage: 56}, ביצה: {name: 'Beitzah', lastPage: 40}, תענית: {name: 'Taanis', lastPage: 31}, מגילה: {name: 'Megillah', lastPage: 32}, 'מועד קטן': {name: 'MoedKatan', lastPage: 29}, חגיגה: {name: 'Chagigah', lastPage: 27}, יבמות: {name: 'Yevamos', lastPage: 122}, כתובות: {name: 'Kesubos', lastPage: 112}, נדרים: {name: 'Nedarim', lastPage: 91}, נזיר: {name: 'Nozir', lastPage: 66}, סוטה: {name: 'Sotah', lastPage: 49} , גיטין: {name: 'Gitin', lastPage: 90}, קידושין: {name: 'Kiddushin', lastPage: 82}, 'בבא קמא': {name: 'BabaKama', lastPage: 119}, 'בבא מציעא': {name: 'BabaMetzia', lastPage: 119}, 'בבא בתרא': {name: 'BabaBasra', lastPage: 176}, סנהדרין: {name: 'Sanhedrin', lastPage: 113}, מכות: {name: 'Makot', lastPage: 24}, שבועות: {name: 'Shevuot', lastPage: 49}, 'עבודה זרה': {name: 'AvodaZarah', lastPage: 76}, הוריות: {name: 'Horayos', lastPage: 14}, זבחים: {name: 'Zevachim', lastPage: 120}, מנחות: {name: 'Menachos', lastPage: 110}, חולין: {name: 'Chulin', lastPage: 64}, בכורות: {name: 'Bechoros', lastPage: 61}, ערכין: {name: 'Erchin', lastPage: 34}, תמורה: {name: 'Temura', lastPage: 34}, כריתות: {name: 'Kerisus', lastPage: 28}, מעילה: {name: 'Meilah', lastPage: 22}, נידה: {name: 'Niddah', lastPage: 73}
  };




  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const tractateName: string = this.route.snapshot.params.name;
    const tractatePageNumber: string = this.route.snapshot.params.pageNumber;
    console.log(tractatePageNumber);

    this.tractate = tractateName;
    this.tractateEnglishName = this.tractatesMetadata[this.tractate].name;
    this.audioURL = `http://download.kolavrohom.com/${this.tractateEnglishName}/${this.currentPage}.mp3`;
    this.tractatePages = this.generateTractatePages(this.tractatesMetadata[this.tractate].lastPage);
    // const pageValueParam = this.navParams.get('pageValue');
    if (tractatePageNumber) {
      const pageNumberPrefix = parseInt(tractatePageNumber, 10) <= 9 ? '0' : '';
      this.currentPage =  pageNumberPrefix + tractatePageNumber;
      this.handleSelectDafChange(this.audioPlayer.nativeElement);
    }
 }

 generateTractatePages = (lastPage) => {
  const pages = [];
  for (let i = 2; i <= lastPage; i++) {
    pages.push(dafConverter(i));
  }
  return pages;
  }

  handleSelectDafChange = audioPlayer => {
    this.audioURL = `http://download.kolavrohom.com/${this.tractateEnglishName}/${this.currentPage}.mp3`;
    audioPlayer.load();
    audioPlayer.play();
  }

}









