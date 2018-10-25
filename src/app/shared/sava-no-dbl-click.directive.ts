import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[sava-no-dbl-click]'
})
export class SavaNoDblClickDirective {

  constructor() {
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    let element: any = undefined;
    if (event.srcElement.localName === 'button') {
      element = event.srcElement;
    } else {
      element = event.srcElement.offsetParent;
    }
    element.disabled = true;
    setTimeout(() => {
      element.disabled = false;
    }, 1000);
  }
}
