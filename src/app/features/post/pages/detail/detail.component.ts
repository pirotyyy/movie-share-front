import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  post: Post = new Post('', '', '', '', '', 0, '');

  constructor(
    private readonly postService: PostService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPost(this.route.snapshot.paramMap.get('id'));
  }

  getPost(id: any): void {
    this.postService.get(id).subscribe({
      next: (data) => {
        this.post = data;
      },
    });
  }

  arrayNumberLength(number: number): number[] {
    return [...Array(number)];
  }
}
