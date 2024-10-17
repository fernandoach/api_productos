import express from 'express';
import { createSchema } from './src/schemas/createSchema.js';
import { updateSchema } from './src/schemas/updateSchema.js';
import { getProducts } from './src/controllers/productRead.js';
import { productCreate } from './src/controllers/productCreate.js';
import { productDelete } from './src/controllers/productDelete.js';
import { productUpdate } from './src/controllers/productUpdate.js';
import cors from 'cors'

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5500'],
}

app.use(express.json())
app.use(cors())

app.post('/api/productos',  
  async (req, res)=>{
    try {
      await createSchema.validateAsync(req.body)
      const { name, category, details, price, stock } = req.body
      const result = await productCreate(name, category, details, price, stock)
      return res.json(result)
    } catch (error) {
      return res.json(error)
    }
  }
)

app.put('/api/productos/:id' ,
  async (req, res)=>{
    try {
      const id = req.params.id
      const { name, category, details, price, stock } = req.body
      await updateSchema.validateAsync({ name, category, details, price, stock })
      const product = await productUpdate(id, name, category, details, price, stock)
      return res.json({ message: `Actualización exitosa`, product })
    } catch (error) {
      return res.json(error)
    }
  }
)

app.get('/api/productos', 
  async (req, res)=>{
    const data = await getProducts()
    return res.json(data)
  }
)

app.delete('/api/productos/:id', 
  async (req, res)=>{
    const id = req.params.id
    const result = await productDelete(id)
    return res.json(result)
  }
)

app.listen(3000, ()=> {
  console.log('Server on: http://localhost:3000');
})