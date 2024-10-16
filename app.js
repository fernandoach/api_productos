import express from 'express';
import { createSchema } from './src/schemas/createSchema.js';
import { updateSchema } from './src/schemas/updateSchema.js';
import { getProducts } from './src/controllers/productRead.js';
import { productCreate } from './src/controllers/productCreate.js';
import { productDelete } from './src/controllers/productDelete.js';

const app = express();

app.use(express.json())


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

      return res.json({ message: `ACTUALIZAR PRODUCTO ${req.params.id} - ${req.body}` })
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