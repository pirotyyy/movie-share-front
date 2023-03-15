export class Post {
  id: string;
  post_title: string;
  created_at: any;
  author: string;
  movie: string;
  evaluation: number;
  impression: string;

  constructor(
    id: string,
    post_title: string,
    created_at: any,
    author: string,
    movie: string,
    evaluation: number,
    impression: string
  ) {
    this.id = id;
    this.post_title = post_title;
    this.created_at = created_at;
    this.author = author;
    this.movie = movie;
    this.evaluation = evaluation;
    this.impression = impression;
  }
}
