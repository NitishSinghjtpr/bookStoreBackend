import User from '../model/user.model.js'
import book  from "../model/book.model.js";

import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Validation
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check existing user
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        //hashing password
        const hashPssword=await bcrypt.hash(password,10);

        // Create new user
        const createdUser = await User.create({
            fullname:fullname,
            email:email,
            password:hashPssword
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: createdUser
        });

    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

//for login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check password match
        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Success response
        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
// BUY BOOK
export const buyBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    const user = await User.findById(userId);

    if (!user.purchasedBooks.includes(bookId)) {
      user.purchasedBooks.push(bookId);
      await user.save();
    }

    res.status(200).json({ message: "Book purchased" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
  try {
    const { userId, fullname, email } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { fullname, email },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CHANGE PASSWORD
export const changePassword = async (req, res) => {
  try {
    const { userId, oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Old password wrong" });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.status(200).json({ message: "Password changed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET PURCHASED BOOKS
export const getPurchasedBooks = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate("purchasedBooks");

    res.status(200).json(user.purchasedBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Add to card

export const addToCart = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    const user = await User.findById(userId);

    const itemExists = user.cart.find(
      (item) => item.book.toString() === bookId
    );

    if (itemExists) {
      itemExists.quantity += 1;
    } else {
      user.cart.push({ book: bookId });
    }

    await user.save();

    res.status(200).json({ message: "Added to cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get card
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate("cart.book");

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//remove card

export const removeFromCart = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    const user = await User.findById(userId);

    user.cart = user.cart.filter(
      (item) => item.book.toString() !== bookId
    );

    await user.save();

    res.status(200).json({ message: "Removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



