import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEarning',
})
export class CurrencyEarning implements PipeTransform {
  transform(value: any, args?: any): any {
    let currencyIcon = '';
    switch (args) {
      case 'en-US':
        currencyIcon = '$';
        break;
      case 'fr-FR':
        currencyIcon = '€';
        break;
      case 'ja-JP':
        currencyIcon = '¥';
        break;
      default:
        console.log(4);

        break;
    }
    return currencyIcon + value.toLocaleString(args);
  }
}
