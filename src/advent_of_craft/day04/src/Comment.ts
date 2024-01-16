export class Comment {
    text: String;
    author: String;
    creationDate: Date;

    constructor(text: String, author: String, creationDate: Date) {
        this.text = text;
        this.author = author;
        this.creationDate = creationDate;
    }
}