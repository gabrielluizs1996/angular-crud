import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  constructor(private container: ViewContainerRef, 
    private template: TemplateRef<any>) {}
  
    ngOnInit(): void {
  }
}
