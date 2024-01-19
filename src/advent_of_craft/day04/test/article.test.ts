import { DEFAULT_EXTENSIONS } from "@babel/core";
import { Article } from "../src/Article"
import { CommentAlreadyExistException } from "../src/CommentAlreadyExistException";

describe('Article tests', () => {
    it('should add valid comment', () => {
        const article = new Article(
            "Lorem Ipsum",
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        );
        article.addComment("Amazing article !!!", "Pablo Escobar");
    });


    it('should add a comment with the given text', () => {
        const article = new Article(
                "Lorem Ipsum",
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        );

        let text = "Amazing article !!!";
        article.addComment(text, "Pablo Escobar");

        expect(article.getComments()).toHaveLength(1);
        expect(article.getComments().some(comment => comment.text === text));
    });

    it('should add a comment with the given author', () => {
        let article = new Article(
                "Lorem Ipsum",
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        );

        let author = "Pablo Escobar";
        article.addComment("Amazing article !!!", author);

        expect(article.getComments()).toHaveLength(1);
        expect(article.getComments().some(comment => comment.author === author));
    });

    it('should add a comment with the date of the day', () =>  {
        let article = new Article(
                "Lorem Ipsum",
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        );

        article.addComment("Amazing article !!!", "Pablo Escobar");
    });

    it('should throw an exception when adding existing comment', () => {
        let article = new Article(
                "Lorem Ipsum",
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        );

        try {
        article.addComment("Amazing article !!!", "Pablo Escobar");
        } catch(error) {
            expect(error).toBeInstanceOf(CommentAlreadyExistException);
        }
    });
})