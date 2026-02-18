import express from 'express'
import {
  signup,
  login,
  buyBook,
  updateProfile,
  changePassword,
  getPurchasedBooks,
  addToCart,
  getCart,
  removeFromCart,
} from "../controller/userController.js";


const router=express.Router()

router.post("/signup",signup)  
router.post("/login",login)
router.post("/buy", buyBook);
router.put("/update-profile", updateProfile);
router.put("/change-password", changePassword);
router.get("/purchased/:userId", getPurchasedBooks);
router.post("/cart", addToCart);
router.get("/cart/:userId", getCart);
router.post("/cart/remove", removeFromCart);


export default router;
