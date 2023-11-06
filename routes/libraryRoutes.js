import express from "express";
import {
  addBook,
  editBook,
  getBookList,
  getSingleBookData,
  deleteBook,
} from "../library/librarycontroller.js";

const router = express.Router();

router.route("/add-book").post(addBook);
router.route("/list").get(getBookList);
router.route("/book/:id").get(getSingleBookData);
router.route("/edit-book/:id").post(editBook);
router.route("/delete-book/:id").post(deleteBook);

export default router;
