import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Admin = () => {
  const [bookData, setBookData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    title: "",
  });

  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);

  // 📌 Handle Input
  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  // 📌 Fetch All Books
  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3000/book");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 📌 Add / Update Book
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(
          `http://localhost:3000/book/${editId}`,
          bookData
        );
        alert("Book Updated");
      } else {
        await axios.post(
          "http://localhost:3000/book",
          bookData
        );
        alert("Book Added");
      }

      setBookData({
        name: "",
        price: "",
        category: "",
        image: "",
        title: "",
      });

      setEditId(null);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  // 📌 Delete Book
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/book/${id}`);
    fetchBooks();
  };

  // 📌 Edit Book
  const handleEdit = (book) => {
    setBookData(book);
    setEditId(book._id);
  };

  return (
   <>
   <Navbar/>
    <div className="max-w-screen-lg text-white mx-auto p-6 mt-10">
      <h1 className="text-3xl p-3 text-pink-500 font-bold mb-6">Admin Panel - Manage Books</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          name="name"
          placeholder="Book Name"
          value={bookData.name}
          onChange={handleChange}
          className="input input-bordered p-5 w-full"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={bookData.price}
          onChange={handleChange}
          className="input input-bordered p-5 w-full"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={bookData.category}
          onChange={handleChange}
          className="input input-bordered p-5 w-full"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={bookData.image}
          onChange={handleChange}
          className="input input-bordered p-5 w-full"
        />

        <textarea
          name="title"
          placeholder="Description"
          value={bookData.title}
          onChange={handleChange}
          className="textarea textarea-bordered p-5 w-full"
        />

        <button className="btn p-2 bg-pink-500 hover:bg-pink-700 text-white">
          {editId ? "Update Book" : "Add Book"}
        </button>
      </form>

      {/* BOOK LIST */}
      <div className="grid md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-xl"
          >
            <img
              src={book.image}
              alt={book.name}
              className="h-40 w-full object-cover rounded-md"
            />

            <h2 className="text-lg font-bold mt-3">{book.name}</h2>
            <p>{book.category}</p>
            <p className="text-gray-500 text-sm">{book.title}</p>
            <p className="font-semibold mt-2">${book.price}</p>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => handleEdit(book)}
                className="btn btn-sm p-2 bg-blue-500 hover:bg-blue-700 text-white"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(book._id)}
                className="btn btn-sm p-2 bg-red-500 hover:bg-red-700 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Admin;
