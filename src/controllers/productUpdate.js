import mongoose from "mongoose";
import { connectToDB, disconnectFromDB } from "../models/contextDB.js";
import { ProductModel } from "../models/productoModel.js";

async function productUpdate(id, name, category, details, price, stock) {
  try {
    await connectToDB()
    const product = await ProductModel.findOneAndUpdate(
      { _id: id },
      {
        name, category, details, price, stock
      },
      { new: true }
    ).exec()
    return product
  } catch (error) {
    console.log(error)
  } finally {
    if (mongoose.connection.readyState === 1) {
      await disconnectFromDB()
    }
  }
}

export { productUpdate }