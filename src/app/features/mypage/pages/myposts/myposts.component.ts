import { Component, OnInit } from '@angular/core';
import { Post } from '../../../post/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css'],
})
export class MypostsComponent implements OnInit {
  cuurentUser = JSON.parse(localStorage.getItem('auth_meta') || '{}').username;
  posts?: Post[];
  constructor(private readonly postService: PostService) {}

  ngOnInit(): void {
    this.retrieveMyPosts(this.cuurentUser);
  }

  retrieveMyPosts(username: string): void {
    this.postService.getPostByUsername(username).subscribe({
      next: (data) => {
        this.posts = data;
      },
    });
  }

  arrayNumberLength(number: number): number[] {
    return [...Array(number)];
  }
}
