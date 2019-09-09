import { Component, OnInit, ViewChildren } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {AudioService} from './audio.service';
import {IonButton} from '@ionic/angular';

@Component({
  selector: 'app-tractate',
  templateUrl: './tractate.page.html',
  styleUrls: ['./tractate.page.scss'],
})
export class TractatePage implements OnInit {
  @ViewChildren('seeker-button') SeekButton: IonButton;
  tractate: string;
  onSeekState: boolean;
  tractateEnglishName: string;
  tractatePages = [];
  currentPage = '02';
  audioURL: string;
  audioState: any = {metadata: {durationSec: 0, duration: ''}, canplay: false, playing: false, time: {timeSec: '', time: '00:00:00'},
  loadStart: false};
  tractatesMetadata = {
    ברכות: {name: 'Brochos', lastPage: 64}, שבת: {name: 'Shabbos',
     lastPage: 157}, עירובין: {name: 'Eruvin', lastPage: 104}, פסחים: {name: 'Pesachim', lastPage: 120}, 'ראש השנה': {name: 'RoshHashana',
      lastPage: 35} , יומא : {name: 'Yuma', lastPage: 88},
     סוכה: {name: 'Succah', lastPage: 56}, ביצה: {name: 'Beitzah',
      lastPage: 40}, תענית: {name: 'Taanis', lastPage: 31},
       מגילה: {name: 'Megillah', lastPage: 32},
    'מועד קטן': {name: 'MoedKatan', lastPage: 29},
     חגיגה: {name: 'Chagigah', lastPage: 27},
     יבמות: {name: 'Yevamos', lastPage: 122},
     כתובות: {name: 'Kesubos', lastPage: 112},
     נדרים: {name: 'Nedarim', lastPage: 91},
     נזיר: {name: 'Nozir', lastPage: 66},
     סוטה: {name: 'Sotah', lastPage: 49} ,
     גיטין: {name: 'Gitin', lastPage: 90},
     קידושין: {name: 'Kiddushin', lastPage: 82},
     'בבא קמא': {name: 'BabaKama', lastPage: 119},
     'בבא מציעא': {name: 'BabaMetzia', lastPage: 119},
     'בבא בתרא': {name: 'BabaBasra', lastPage: 176},
      סנהדרין: {name: 'Sanhedrin', lastPage: 113},
       מכות: {name: 'Makot', lastPage: 24},
        שבועות: {name: 'Shevuot', lastPage: 49},
       'עבודה זרה': {name: 'AvodaZarah', lastPage: 76},
        הוריות: {name: 'Horayos', lastPage: 14},
        זבחים: {name: 'Zevachim', lastPage: 120},
        מנחות: {name: 'Menachos', lastPage: 110},
        חולין: {name: 'Chulin', lastPage: 142},
        בכורות: {name: 'Bechoros', lastPage: 61},
       ערכין: {name: 'Erchin', lastPage: 34},
       תמורה: {name: 'Temura', lastPage: 34},
       כריתות: {name: 'Kerisus', lastPage: 28}, מעילה: {name: 'Meilah', lastPage: 22}, נדה: {name: 'Niddah', lastPage: 73}
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


  pages = ['ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב', 'יג',
  'יד', 'טו', 'טז', 'יז', 'יח', 'יט', 'כ', 'כא', 'כב', 'כג', 'כד', 'כה',
  'כו', 'כז', 'כח', 'כט', 'ל', 'לא', 'לב', 'לג', 'לד', 'לה', 'לו', 'לז',
  'לח', 'לט', 'מ', 'מא', 'מב', 'מג', 'מד', 'מה', 'מו', 'מז', 'מח', 'מט',
  'נ', 'נא', 'נב', 'נג', 'נד', 'נה', 'נו', 'נז', 'נח', 'נט', 'ס', 'סא',
  'סב', 'סג', 'סד', 'סה', 'סו', 'סז', 'סח', 'סט', 'ע', 'עא', 'עב', 'עג',
  'עד', 'עה', 'עו', 'עז', 'עח', 'עט', 'פ', 'פא', 'פב', 'פג', 'פד', 'פה',
  'פו', 'פז', 'פח', 'פט', 'צ', 'צא', 'צב', 'צג', 'צד', 'צה', 'צו', 'צז',
  'צח', 'צט', 'ק', 'קא', 'קב', 'קג', 'קד', 'קה', 'קו', 'קז', 'קח', 'קט',
  'קי', 'קיא', 'קיב', 'קיג', 'קיד', 'קטו', 'קטז', 'קיז', 'קיח', 'קיט',
  'קכ', 'קכא', 'קכב', 'קכג', 'קכד', 'קכה', 'קכו', 'קכז', 'קכח', 'קכט',
  'קל', 'קלא', 'קלב', 'קלג', 'קלד', 'קלה', 'קלו', 'קלז', 'קלח', 'קלט',
  'קמ', 'קמא', 'קמב', 'קמג', 'קמד', 'קמה', 'קמו', 'קמז', 'קמח', 'קמט',
  'קנ', 'קנא', 'קנב', 'קנג', 'קנד', 'קנה', 'קנו', 'קנז', 'קנח', 'קנט',
  'קס', 'קסא', 'קסב', 'קסג', 'קסד', 'קסה', 'קסו', 'קסז', 'קסח', 'קסט',
  'קע', 'קעא', 'קעב', 'קעג', 'קעד', 'קעה'];
  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private audioService: AudioService,
    ) { }

  ngOnInit() {
    const tractateName: string = this.route.snapshot.params.name;
    const tractatePageNumber: string = this.route.snapshot.params.pageNumber;
    this.tractate = tractateName;
    this.tractateEnglishName = this.tractatesMetadata[this.tractate].name;
    this.audioURL = `http://download.kolavrohom.com/${this.tractateEnglishName}/${this.currentPage}.mp3`;
    this.tractatePages = this.pages.slice(0, (this.tractatesMetadata[this.tractate].lastPage - 1) );
    this.loadStream(this.audioURL);
    if (tractatePageNumber) {
      this.currentPage = this.pageValues[(+ tractatePageNumber) - 2];
      this.handleSelectDafChange();
    }
  }


  handleSelectDafChange = async () => {
    const loading = await this.loadingController.create({
      duration: 15000,
    });

    loading.present();
    this.audioURL = `http://download.kolavrohom.com/${this.tractateEnglishName}/${this.currentPage}.mp3`;
    try {
      const subscription = this.audioService.listenTocanPlay()
      .subscribe(() => {
        loading.dismiss();
        subscription.unsubscribe();
      });
      this.playStream(this.audioURL);
    } catch (error) {
        console.error(error);
    }
  }

  loadStream(url) {
    this.resetState();
    this.audioService.loadStream(url).subscribe(this.handleAudioStream);
  }

  playStream(url) {
    this.resetState();
    this.audioService.playStream(url).subscribe(this.handleAudioStream);
  }

  handleAudioStream = (event) => {
    const audioObj = event.target;

    switch (event.type) {
      case 'canplay':
      return this.audioState.canplay = true;
      case 'loadedmetadata':
        return this.audioState.metadata = {
          duration: this.audioService.formatTime(
            audioObj.duration * 1000,
            'HH:mm:ss'
          ),
          durationSec: audioObj.duration,
        };

      case 'playing':
        return this.audioState.playing = true;

      case 'pause':
        return this.audioState.playing = false;
      case 'timeupdate':
        return this.audioState.time = {
          timeSec: audioObj.currentTime,
          time: this.audioService.formatTime(
            audioObj.currentTime * 1000,
            'HH:mm:ss'
          )
        };

      case 'loadstart':
        this.audioState.canplay = false;
        return this.audioState.loadStart = true;
      }
  }


    pause() {
    this.audioService.pause();
  }

    play() {
    this.audioService.play();
  }

    stop() {
    this.audioService.stop();
  }

    onSeekChange(event) {
    this.audioState.time.time = this.audioService.formatTime(event.target.value * 1000, 'HH:mm:ss');
  }

  onSeekStart() {
    this.onSeekState = this.audioState.playing;
    if (this.onSeekState) {
      this.pause();
    }
  }


    onSeekEnd(event) {
      if (this.onSeekState) {
      this.audioService.seekTo(event.target.value);
      this.play();
    } else {
      this.audioService.seekTo(event.target.value);
    }

  }

    reset() {
    this.resetState();
  }

    resetState() {
    this.audioService.stop();
  }

  ionViewDidLeave() {
    this.stop();
  }

  rewindJump() {
    this.audioService.seekTo(this.audioState.time.timeSec - 15);
  }

  fastForwardJump() {
    this.audioService.seekTo(this.audioState.time.timeSec + 15);
  }


}
