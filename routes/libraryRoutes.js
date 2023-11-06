import express from "express";
import {
  addBook,
  editBook,
  getBookList,
  getSingleBookData,
} from "../library/librarycontroller.js";

const router = express.Router();

router.route("/add-book").post(addBook);
router.route("/list").get(getBookList);
router.route("/book/:id").get(getSingleBookData);
router.route("/edit-book/:id").post(editBook);
// router.route("/delete").post(getAllUsers);

export default router;
