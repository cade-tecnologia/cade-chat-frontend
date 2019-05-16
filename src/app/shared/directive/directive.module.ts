import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './auto-focus.directive';

const DIRECTIVES = [
  AutoFocusDirective,
];

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
})
export class DirectiveModule { }
