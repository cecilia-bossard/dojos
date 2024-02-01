import { Article } from "../src/Article";
import { CommentAlreadyExistException } from "../src/CommentAlredyExistException";

describe('Article tests', () => {
    const AUTHOR: string = "Pablo Escobar";
    const COMMENT_TEXT: string = "Amazing article !!!";
    let article: Article;

    beforeEach(() => {
        article = new Article(
            "Lorem Ipsum",
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    );
      });

      it('should add comment in an article', () => {
        article.addComment(COMMENT_TEXT, AUTHOR);

        expect(article.getComments()).toHaveLength(1);
        
        let comment = article.getComments().at(0);
        expect(comment.text).toBe(COMMENT_TEXT);
        expect(comment.author).toBe(AUTHOR);
      })

      it('should add comment in an article containing already a comment', () => {
        let newComment = "Finibus Bonorum et Malorum";
        let newAuthor = "Al Capone";

        article.addComment(COMMENT_TEXT, AUTHOR);
        article.addComment(newComment, newAuthor);

        expect(article.getComments()).toHaveLength(2);
        
        let comment = article.getComments().pop();
        expect(comment.text).toBe(newComment);
        expect(comment.author).toBe(newAuthor);
      })

      it("should throw an exception when adding existing comment", () => {
        article.addComment(COMMENT_TEXT, AUTHOR);

        try {
          article.addComment(COMMENT_TEXT, AUTHOR);
        } catch (error) {
          expect(error).toBeInstanceOf(CommentAlreadyExistException);
        }
      });
})
