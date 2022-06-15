import { Directive, ElementRef } from '@angular/core';

import { FormControlName } from '@angular/forms';

@Directive({
  selector: '[formControlName]',
})
export class ShowErrorDirective {
  constructor(private eleRef: ElementRef) {
    const input = this.eleRef.nativeElement;
    const hostElem = this.eleRef.nativeElement.parentNode.parentNode;

    // let isInvalid = false;
    // if (input.hasClass('ng-invalid')) {
    //   isInvalid = true;
    // }

    // console.log(isInvalid);

    // let p = document.createElement('p');
    // hostElem.append('Some text', p);
  }
}
