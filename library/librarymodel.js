import mongoose from "mongoose";

const LibrarySchema = mongoose.Schema(
  {
    book_id: { type: Number, unique: true },
    title: { type: String },
    author: { type: String },
    summary: { type: String },
  },
  { timestamps: true }
);

LibrarySchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const Library = this.model("Library");
      const latestBook = await Library.findOne(
        {},
        {},
        { sort: { book_id: -1 } }
      );
      this.book_id = latestBook ? latestBook.book_id + 1 : 1;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const Library = mongoose.model("Library", LibrarySchema);

export default Library;
