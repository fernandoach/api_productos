import mongoose from "mongoose"
import { connectToDB, disconnectFromDB } from "../models/contextDB.js"
import { ProductModel } from "../models/productoModel.js"

async function getProducts() {
  try {
    await connectToDB()
    const products = await ProductModel.find({}).exec()
    return products
  } catch (error) {
    console.log("Error durante la lectura de los productos")
  } finally {
    if (mongoose.connection.readyState === 1) {
      await disconnectFromDB()
    }
  }
}

export {getProducts}
