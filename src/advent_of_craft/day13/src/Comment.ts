export class Comment {
  text: string;
  author: string;
  creationDate: Date;

  constructor(init?: Partial<Comment>) {
    Object.assign(this, init);
  }
}
