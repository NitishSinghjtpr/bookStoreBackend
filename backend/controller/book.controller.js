import Book from "../model/book.model.js";

// ✅ GET ALL BOOKS
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ ADD BOOK (POST)
export const createBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;

    if (!name || !price || !category || !image || !title) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const book = await Book.create({
      name,
      price,
      category,
      image,
      title,
    });

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE BOOK (PUT)
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      updatedBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE BOOK
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH BOOKS
export const searchBooks = async (req, res) => {
  try {
    const { keyword } = req.query;

    const books = await Book.find({
      name: { $regex: keyword, $options: "i" },
    }).limit(5);   // suggestion ke liye limit 5

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
