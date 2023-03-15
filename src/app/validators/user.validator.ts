import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UserValidator {
  private form: any;

  constructor() {}

  set formGroup(form: FormGroup) {
    this.form = form;
  }

  get usernameInvalid() {
    return (
      this.form.controls['username'].invalid &&
      (this.form.controls['username'].dirty ||
        this.form.controls['username'].touched)
    );
  }

  get usernameHasErrorRequired() {
    return this.form.controls['username'].hasError('required');
  }

  get usernameHasErrorMaxLength() {
    return this.form.controls['username'].hasError('maxlength');
  }

  get emailInvalid() {
    return (
      this.form.controls['email'].invalid &&
      (this.form.controls['email'].dirty || this.form.controls['email'].touched)
    );
  }

  get emailHasErrorRequired() {
    return this.form.controls['email'].hasError('required');
  }

  get emailHasErrorPattern() {
    return this.form.controls['email'].hasError('pattern');
  }

  get passwordInvalid() {
    return (
      this.form.controls['password'].invalid &&
      (this.form.controls['password'].dirty ||
        this.form.controls['password'].touched)
    );
  }

  get passwordHasErrorRequired() {
    return this.form.controls['password'].hasError('required');
  }

  get passwordHasErrorMinLength() {
    return this.form.controls['password'].hasError('minlength');
  }
}
