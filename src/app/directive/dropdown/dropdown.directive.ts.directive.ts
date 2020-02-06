import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}

  /* Another way to do it (comment above and uncomment below) */
  // constructor(private elementRef: ElementRef) { }
  //
  // @HostListener('click') toggleDropdown() {
  //   const buttonEl = this.elementRef.nativeElement;
  //   const isOpen = buttonEl.classList.contains('open');
  //   buttonEl.classList.toggle('open', !isOpen);
  // }
}
