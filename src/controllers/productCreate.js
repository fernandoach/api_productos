import mongoose from "mongoose"
import { connectToDB, disconnectFromDB } from "../models/contextDB.js"
import { ProductModel } from "../models/productoModel.js"

async function productCreate(name, category, details, price, stock) {
  try {
    await connectToDB()
    const newProduct = new ProductModel({ name, category, details, price, stock })
    await newProduct.save()
    return newProduct
  } catch (error) {
    console.log(error)
  } finally {
    if(mongoose.connection.readyState === 1) {
      await disconnectFromDB()
    }
  }
}

export {productCreate}