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
    ברכות: {name: 'Brochos', lastPage: 64}, שבת: {name: 'Shabbos', lastPage: 157}, עירובין: {name: 'Eruvin', lastPage: 104}, פסחים: {name: 'Pesachim', lastPage: 120}, 'ראש השנה': {name: 'RoshHashana', lastPage: 35} , יומא : {name: 'Yuma', lastPage: 88}, סוכה: {name: 'Succah', lastPage: 56}, ביצה: {name: 'Beitzah', lastPage: 40}, תענית: {name: 'Taanis', lastPage: 31}, מגילה: {name: 'Megillah', lastPage: 32}, 'מועד קטן': {name: 'MoedKatan', lastPage: 29}, חגיגה: {name: 'Chagigah', lastPage: 27}, יבמות: {name: 'Yevamos', lastPage: 122}, כתובות: {name: 'Kesubos', lastPage: 112}, נדרים: {name: 'Nedarim', lastPage: 91}, נזיר: {name: 'Nozir', lastPage: 66}, סוטה: {name: 'Sotah', lastPage: 49} , גיטין: {name: 'Gitin', lastPage: 90}, קידושין: {name: 'Kiddushin', lastPage: 82}, 'בבא קמא': {name: 'BabaKama', lastPage: 119}, 'בבא מציעא': {name: 'BabaMetzia', lastPage: 119}, 'בבא בתרא': {name: 'BabaBasra', lastPage: 176}, סנהדרין: {name: 'Sanhedrin', lastPage: 113}, מכות: {name: 'Makot', lastPage: 24}, שבועות: {name: 'Shevuot', lastPage: 49}, 'עבודה זרה': {name: 'AvodaZarah', lastPage: 76}, הוריות: {name: 'Horayos', lastPage: 14}, זבחים: {name: 'Zevachim', lastPage: 120}, מנחות: {name: 'Menachos', lastPage: 110}, חולין: {name: 'Chulin', lastPage: 64}, בכורות: {name: 'Bechoros', lastPage: 61}, ערכין: {name: 'Erchin', lastPage: 34}, תמורה: {name: 'Temura', lastPage: 34}, כריתות: {name: 'Kerisus', lastPage: 28}, מעילה: {name: 'Meilah', lastPage: 22}, נדה: {name: 'Niddah', lastPage: 73}
  };

  pageValues = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
  '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
  '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
  '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54',
  '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68',
  '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82',
  '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96',
  '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108',
  '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120',
  '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132',
  '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144',
  '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156',
  '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168',
  '169', '170', '171', '172', '173', '174', '175'];




  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const tractateName: string = this.route.snapshot.params.name;
    const tractatePageNumber: string = this.route.snapshot.params.pageNumber;
    this.tractate = tractateName;
    this.tractateEnglishName = this.tractatesMetadata[this.tractate].name;
    this.audioURL = `http://download.kolavrohom.com/${this.tractateEnglishName}/${this.currentPage}.mp3`;
    this.tractatePages = this.generateTractatePages(this.tractatesMetadata[this.tractate].lastPage);
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









