import { Pipe, PipeTransform } from '@angular/core';
import dafConverter from 'daf-converter';

@Pipe({
  name: 'gematria'
})
export class GematriaPipe implements PipeTransform {

  transform(pageValue: any) {
    const numberToConvert = parseInt(pageValue, 10);

    if (isNaN(numberToConvert)) {
      return null;
    }
    return dafConverter(pageValue);
  }

}
