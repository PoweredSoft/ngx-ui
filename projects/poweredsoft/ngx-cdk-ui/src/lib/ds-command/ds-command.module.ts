import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsCommandComponent } from './ds-command.component';
import { DsCommandContentDirective } from './directives/ds-command-content.directive';
import { DsCommandSubmitDirective } from './directives/ds-command-submit.directive';
import { DsCommandValidationDirective } from './directives/ds-command-validation.directive';
import { DsCommandFooterDirective } from './directives/ds-command-footer.directive';
import { DsCommandErrorDirective } from './directives/ds-command-error.directive';
import { DsCommandNoCommandDirective } from './directives/ds-command-no-command.directive';



@NgModule({
  declarations: [DsCommandComponent, DsCommandContentDirective, DsCommandSubmitDirective, DsCommandValidationDirective, DsCommandFooterDirective, DsCommandErrorDirective, DsCommandNoCommandDirective],
  imports: [
    CommonModule
  ],
  exports: [DsCommandComponent, DsCommandContentDirective, DsCommandSubmitDirective, DsCommandValidationDirective, DsCommandFooterDirective, DsCommandErrorDirective, DsCommandNoCommandDirective]
})
export class DsCommandModule { }
