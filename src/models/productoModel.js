import mongoose, { model, Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid'

const productSchema = new Schema(
  {
    productId: {type: String, default: uuidv4, unique: true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    details: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
  },
  {
    timestamps: true
  }
)

const ProductModel = mongoose.models.Product || model("Product", productSchema)

export { ProductModel }
