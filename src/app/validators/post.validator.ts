import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class PostValidator {
  private form: any;

  constructor() {}

  set formGroup(form: FormGroup) {
    this.form = form;
  }

  get posttitleInvalid() {
    return (
      this.form.controls['post_title'].invalid &&
      (this.form.controls['post_title'].dirty ||
        this.form.controls['post_title'].touched)
    );
  }

  get posttitleHasErrorRequired() {
    return this.form.controls['post_title'].hasError('required');
  }

  get posttitleHasErrorMaxLength() {
    return this.form.controls['post_title'].hasError('maxlength');
  }

  get movieInvalid() {
    return (
      this.form.controls['movie'].invalid &&
      (this.form.controls['movie'].dirty || this.form.controls['movie'].touched)
    );
  }

  get movieHasErrorRequired() {
    return this.form.controls['movie'].hasError('required');
  }

  get movieHasErrorMaxLength() {
    return this.form.controls['movie'].hasError('maxlength');
  }

  get evaluationInvalid() {
    return (
      this.form.controls['evaluation'].invalid &&
      (this.form.controls['evaluation'].dirty ||
        this.form.controls['evaluation'].touched)
    );
  }

  get evaluationHasErrorRequired() {
    return this.form.controls['evaluation'].hasError('required');
  }

  get evaluationHasErrorMin() {
    return this.form.controls['evaluation'].hasError('min');
  }

  get evaluationHasErrorMax() {
    return this.form.controls['evaluation'].hasError('max');
  }

  get impressionInvalid() {
    return (
      this.form.controls['impression'].invalid &&
      (this.form.controls['impression'].dirty ||
        this.form.controls['impression'].touched)
    );
  }

  get impressionHasErrorRequired() {
    return this.form.controls['impression'].hasError('required');
  }

  get impressionHasErrorManLength() {
    return this.form.controls['impression'].hasError('maxlength');
  }
}
