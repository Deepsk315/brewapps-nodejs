import express from "express";
import {
  addBook,
  getBookList,
  getSingleBookData,
} from "../library/librarycontroller.js";

const router = express.Router();

router.route("/add-book").post(addBook);
router.route("/list").get(getBookList);
router.route("/book/:id").get(getSingleBookData);
// router.route("/edit-book").post(getLoggedUser);
// router.route("/delete").post(getAllUsers);

export default router;
