import { config } from "dotenv";
import mongoose, { connect, modelNames } from "mongoose";
import { ProductModel } from "./productoModel.js";

config()

const DB_URI = `${process.env.DB_SERVER}/${process.env.DB_NAME}`

let connectionState = false

const initDB = async () => {
  try {
    if(!modelNames().includes('Product')){
      await ProductModel.init()
      await ProductModel.createIndexes()
    }
  } catch (error) {
    console.log('Error al inicializar la base de datos')
  }
}


const connectToDB = async () => {
  if (connectionState) return
  try {
    await initDB()
    await connect(DB_URI)
    connectionState = true
  } catch (error) {
    console.log("Error al conectar a la base de datos")
  }
}

const disconnectFromDB = async () => {
  if(!connectionState) return
  try {
    await mongooseconnection.close()
    connectionState = false
  } catch (error) {
    console.log("Error al desconectar de la base de datos")
  }
}

export { connectToDB, disconnectFromDB }