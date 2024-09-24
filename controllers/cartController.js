//add product to user cart

import UserModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await UserModel.findById(userId);
    const cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await UserModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await UserModel.findById(userId);
    const cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await UserModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "updated the  cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await UserModel.findById(userId);
    const cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
