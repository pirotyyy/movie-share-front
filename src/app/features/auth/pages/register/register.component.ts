import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserValidator } from 'src/app/validators/user.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$'
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  errors: any = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    public v: UserValidator
  ) {}

  ngOnInit(): void {
    this.v.formGroup = this.registerForm;
  }

  register(): void {
    this.auth.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        if (JSON.stringify(this.errors) !== JSON.stringify([])) {
          this.errors = [];
        }
        this.errors.push(error.error.detail);
        this.router.navigate(['/auth/register']);
      },
    });
  }
}
