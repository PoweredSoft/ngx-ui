import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[psbxInputValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: InputValidatorDirective, multi: true }]
})
export class InputValidatorDirective implements Validator{    

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

}
