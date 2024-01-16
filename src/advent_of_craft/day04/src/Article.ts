import { Comment } from "./Comment";
import { CommentAlreadyExistException } from "./CommentAlreadyExistException";

export class Article {
    name: String;
    content: String;
    comments: Array<Comment>;

    constructor(name: String, content: String) {
        this.name = name;
        this.content = content;
        this.comments = [];
    }

    addComment(text: String, author: String, creationDate : Date = new Date()) {
        const comment = new Comment(text, author, creationDate);
        if(this.comments.includes(comment)) {
            throw new CommentAlreadyExistException();
        } else {
            this.comments.push(comment);
        }
    }

    getComments(): Array<Comment> {
        return this.comments;
    }
}