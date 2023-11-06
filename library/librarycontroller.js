import Library from "../library/librarymodel.js";

export const addBook = async (req, res) => {
  const { title, author, summary } = req.body;

  if (!title || title == "") {
    return res.status(404).json({ message: "Title is required" });
  }

  if (!author || author == "") {
    return res.status(404).json({ message: "Author is required" });
  }

  if (!summary || summary == "") {
    return res.status(404).json({ message: "Summary is required" });
  }

  try {
    const bookExists = await Library.findOne({ title: title });

    if (bookExists) {
      console.log(bookExists);
      return res.status(404).json({
        message:
          "Book Title Name already exists , Please choose different title",
      });
    }

    const new_book = await Library.create({
      title: title,
      author: author,
      summary: summary,
    });

    if (new_book) {
      return res
        .status(200)
        .json({ message: `Book by Title ${title} successfully added!` });
    }
  } catch (err) {
    console.log("something went wrong : ", err);
    return res.json(400).json({
      message: "Something went wrong , please check the error message : ",
      err,
    });
  }
};

export const getBookList = async (req, res) => {
  const booksCntQry = Library.count();
  const booksQry = Library.find();

  try {
    booksCntQry.exec(function (err, booksCount) {
      if (err) {
        return res
          .status(404)
          .json({ message: "Errors while fetching all book count" });
      } else {
        booksQry.exec(function (b_errs, booksList) {
          if (b_errs) {
            return res
              .status(404)
              .json({ message: "Errors while fetching books list" });
          } else {
            return res.status(200).json({
              message: "Total Books List",
              data: booksList,
              total: booksCount,
            });
          }
        });
      }
    });
  } catch (error) {
    console.log("something went wrong : ", error);
    return res.json(400).json({
      message: "Something went wrong , please check the error message : ",
      error,
    });
  }
};

export const getSingleBookData = async (req, res) => {
  const { id } = req.params;

  if (!id || id == "") {
    return res.status(404).json({ message: "Book id is required" });
  }

  try {
    const bookData = await Library.findOne({ book_id: id }).exec();

    if (bookData) {
      return res.status(200).json({ message: "Book Data", data: bookData });
    } else {
      return res
        .status(404)
        .json({ message: "Book id might br wrong or is unavailable" });
    }
  } catch (error) {
    console.log("something went wrong : ", error);
    return res.json(400).json({
      message: "Something went wrong , please check the error message : ",
      error,
    });
  }
};
