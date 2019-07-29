import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.page.html',
  styleUrls: ['./phone-numbers.page.scss'],
})
export class PhoneNumbersPage implements OnInit {

  countries =   [
  { name: 'Australia', number: '(02) 8014 9900', extension: 'Chassidus via Telephone Extension: 121' },
  { name: 'Belgium', number: '3 218-6464', extension: 'Chassidus via Telephone Extension: 121' },
  { name: 'Brazil', number: '113 013-5400', extension: 'Chassidus via Telephone Extension: 121' },
  { name: 'England', number: '203 318 7700', extension: 'Chassidus via Telephone Extension: 121' },
  { name: 'France', number: '1 76 34 7777', extension: 'Ext 421' },
  { name: 'Israel', number: '02 538 1111', extension: 'Chassidus via Telephone Extension: 121' },
  { name: 'Support', number: '718.877.6485', extension: '' },
  { name: 'Main Office', number: '718.877.6485', extension: '' }
];


  northAmericaCities = [
  { name: 'New York', number: '718.467.5469', extension: ''  },

  { name: 'Catskills', number: '845.436.6700', extension: 'Chassidus via Telephone Extension: 12' } ,
  { name: 'Monroe', number: '845.928.3115', extension: 'Chassidus via Telephone Extension: 12' } ,
  { name: 'Monsey', number: '845.426.0610', extension: ''  },
  { name: 'Berkeley / Oakland',
    number: '510.336.4770',
    extension: 'Chassidus via Telephone Extension: 12' } ,
  { name: 'Long Beach', number: '562.977.5000', extension: 'Chassidus via Telephone Extension: 12' } ,

  { name: 'Los Angeles', number: '323.939.8672', extension: 'Chassidus via Telephone Extension: 12' } ,
  { name: 'Montreal', number: '514.341.6640',
  extension: 'Chassidus via Telephone Extension: 12' },
  { name: 'S. Diego', number: '858.956.3770', extension: 'Chassidus via Telephone Extension: 12' },
  { name: 'Simcha Monica',
    number: '310.453.4774',
    extension: 'Chassidus via Telephone Extension: 12' } ,

  { name: 'S.F. Valley', number: '818.301.4999', extension: 'Chassidus via Telephone Extension: 12' } ,
  { name: 'Toronto', number: '905.731.7777',
    extension: 'Chassidus via Telephone Extension: 12' },
  { name: 'Ventura / S. Barbara',
    number: '805.392.5000',
    extension: 'Chassidus via Telephone Extension: 12'  },
 { name: 'Miami', number: '305.531.8888', extension: 'Chassidus via Telephone Extension: 12' }  ];

  canadaCites = [
    { name: 'Montreal', number: '514.341.6640',
    extension: 'Chassidus via Telephone Extension: 12' }, { name: 'Toronto', number: '905.731.7777',
    extension: 'Chassidus via Telephone Extension: 12' }
  ];

  allCities = [...this.northAmericaCities, ...this.countries];

  constructor() { }

  ngOnInit() {
  }

}
