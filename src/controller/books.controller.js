import bookService from "../service/books.service.js";

class bookController {
  constructor() {
    this.bookService = new bookService();
  }
  async getBooksController(req, res) {
    try {
      const data = await this.bookService.getBooks();
      res.statusCode = 200;
      res.send({
        message: "Books found",
        books: data,
      });
    } catch ({ message }) {
      if (message === "books-not-found") {
        res.statusCode = 404;
        res.send({
          message: "Books not found",
          books: null,
        });
      }
    }
  }
  async postBooksController(req, res) {
    try {
      const body = req.body;
      const data = await this.bookService.postBook(body);
      if (data) {
        res.statusCode = 200;
        res.send({
          message: "Book poste",
          success: true,
        });
      }
    } catch (error) {
      res.statusCode = error.status;
      res.send({
        message: error.message,
        success: false,
      });
    }
  }
  async getBookController(req, res) {
    try {
      const { id } = req.params;
      const data = await this.bookService.getBook(id);
      res.statusCode = 200;
      res.send(data);
    } catch (error) {
      res.statusCode = 404;
      res.send({
        message: error.message,
      });
    }
  }
  async updateBooksController(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await this.bookService.updateBook(id, body);
      if (data) {
        res.statusCode = 200;
        res.send({
          message: "Book updated",
          success: true,
        });
      }
    } catch (error) {
      res.statusCode = 404;
      res.send({
        message: error.message,
        success: false,
      });
    }
  }
  async deleteBooksController(req, res) {
    try {
      const { id } = req.params;
      const data = await this.bookService.deleteBook(id);
      if (data) {
        res.statusCode = 200;
        res.send({
          message: "Book  deleted",
          success: true,
        });
      }
    } catch (error) {
      res.statusCode = 404;
      res.send({
        message: error.message,
        success: false,
      });
    }
  }
  async getBookQueryController(req, res) {
    try {
      const query = req.query;
      const data = await this.bookService.getBookQuery(query);
      res.statusCode = 200;
      res.send({
        message: "Books found",
        success: true,
        books: data,
      });
    } catch (error) {
      if (error.message === "books-not-found") {
        res.statusCode = 404;
        res.send({
          message: "Books not found",
          success: false,
        });
      } else {
        res.statusCode = 500;
        res.send({
          message: error.message,
          success: false,
        });
      }
    }
  }
}
export default bookController;