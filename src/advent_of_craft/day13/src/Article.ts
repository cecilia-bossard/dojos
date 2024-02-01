
import { Comment } from "./Comment";
import { CommentAlreadyExistException } from "./CommentAlredyExistException";

export class Article {
  name: string;
  content: string;
  comments: Array<Comment>;

  constructor(name: string, content: string) {
    this.name = name;
    this.content = content;
    this.comments = [];
  }

  addComment(text: string, author: string, creationDate: Date = new Date()) {
    const comment = new Comment({ text, author, creationDate });
    if (this.comments.includes(comment)) {
      throw new CommentAlreadyExistException();
    } else {
      this.comments.push(comment);
    }
  }

  getComments(): Array<Comment> {
    return this.comments;
  }
}
