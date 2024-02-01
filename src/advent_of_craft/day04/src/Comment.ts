export class Comment {
    text: String;
    author: String;
    creationDate: Date;

    constructor(init?:Partial<Comment>) {
        Object.assign(this, init);
    };
}