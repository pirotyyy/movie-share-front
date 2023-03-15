import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../features/post/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://127.0.0.1:8000/api/posts';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/list`);
  }

  get(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/detail/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create/`, data);
  }

  getPostByUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/list/?author=${username}`);
  }

  update(data: any, id: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/detail/${id}/edit`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/detail/${id}/edit`);
  }
}
