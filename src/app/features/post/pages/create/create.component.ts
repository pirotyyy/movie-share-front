import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

import { PostValidator } from 'src/app/validators/post.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createForm = new FormGroup({
    post_title: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    author: new FormControl(
      JSON.parse(localStorage.getItem('auth_meta') || '{}').username,
      []
    ),
    movie: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    evaluation: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    impression: new FormControl('', [
      Validators.required,
      Validators.maxLength(2000),
    ]),
  });

  errors: any = [];

  constructor(
    private readonly postService: PostService,
    private readonly router: Router,
    public v: PostValidator
  ) {}

  ngOnInit(): void {
    this.v.formGroup = this.createForm;
  }

  create(): void {
    this.postService.create(this.createForm.value).subscribe({
      next: () => {
        this.router.navigate(['/post/myposts']);
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
