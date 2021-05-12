import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldtext'
})
export class BoldtextPipe implements PipeTransform {
  transform(textValue: string, subTextValue: string): string {
    return textValue.replace(new RegExp(`(${subTextValue})`, 'gi'), '<b>$1</b>');
  }
}
