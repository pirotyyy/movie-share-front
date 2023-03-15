import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserValidator } from 'src/app/validators/user.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  errors: any = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    public v: UserValidator
  ) {}

  ngOnInit(): void {
    this.v.formGroup = this.loginForm;
  }

  login(): void {
    this.auth.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/post/list']);
      },
      error: (error) => {
        if (JSON.stringify(this.errors) !== JSON.stringify([])) {
          this.errors = [];
        }
        this.errors.push(error.error.detail);
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
