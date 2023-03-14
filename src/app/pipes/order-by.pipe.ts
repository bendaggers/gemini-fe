import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], key: string): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const direction = key.startsWith('-') ? -1 : 1;
    const prop = key.startsWith('-') ? key.substring(1) : key;

    return value.sort((a, b) => {
      if (a[prop] < b[prop]) {
        return direction * 1;
      } else if (a[prop] > b[prop]) {
        return direction * -1;
      } else {
        return 0;
      }
    });
  }
}
