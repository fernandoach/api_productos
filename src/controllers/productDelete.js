import mongoose from 'mongoose'
import { connectToDB, disconnectFromDB } from '../models/contextDB.js'
import { ProductModel } from '../models/productoModel.js'

async function productDelete(id) {
  try {
    await connectToDB()
    const product = await ProductModel.findOneAndDelete(
      { _id: id }
    ).exec()
    return product
  } catch (error) {
    console.log(error)
  } finally {
    if( mongoose.connection.readyState === 1 ) {
      await disconnectFromDB()
    }
  }
}
export { productDelete}