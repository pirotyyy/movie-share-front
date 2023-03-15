import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

import { PostValidator } from 'src/app/validators/post.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');

  editForm = new FormGroup({
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

  constructor(
    private readonly postService: PostService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public v: PostValidator
  ) {}

  errors: any = [];

  ngOnInit(): void {
    this.v.formGroup = this.editForm;
    this.initForm(this.id);
  }

  initForm(id: any): void {
    this.postService.get(id).subscribe({
      next: (data) => {
        this.editForm.setValue({
          post_title: data.post_title,
          author: data.author,
          movie: data.movie,
          evaluation: Number(data.evaluation),
          impression: data.impression,
        });
      },
    });
  }

  update(): void {
    this.postService.update(this.editForm.value, this.id).subscribe({
      next: () => {
        this.router.navigate(['mypage/']);
      },
    });
  }

  delete(): void {
    this.postService.delete(this.id).subscribe({
      next: () => {
        this.router.navigate(['mypage/']);
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
