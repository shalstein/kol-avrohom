import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageOptionValue'
})
export class PageOptionValuePipe implements PipeTransform {

  transform(index: number) {
    const pageNumber = index + 2;
    const numberString = pageNumber <= 9 ? '0' : '';
    return numberString + pageNumber;
  }

}
