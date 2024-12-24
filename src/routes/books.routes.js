import { Router } from "express";
import bookController from "../controller/books.controller.js";

const bookRouter = Router();
const bookControl = new bookController();

bookRouter.get("/books", (req, res) => {
  const query = req.query;
  if (new Set(Object.entries(query)).size >= 1) {
    bookControl.getBookQueryController(req, res);
  } else {
    bookControl.getBooksController(req, res);
  }
});
bookRouter.post("/book", (req, res) => bookControl.postBooksController(req, res));
bookRouter.get("/book/:id", (req, res) => bookControl.getBookController(req, res));
bookRouter.put("/book/:id", (req, res) => bookControl.updateBooksController(req, res));
bookRouter.delete("/book/:id", (req, res) => bookControl.deleteBooksController(req, res));
export default bookRouter;