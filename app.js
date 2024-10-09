import express from 'express';
import { createSchema } from './src/schemas/createSchema.js';
import { updateSchema } from './src/schemas/updateSchema.js';
import { getProducts } from './src/controllers/productRead.js';

const app = express();

app.use(express.json())


app.post('/api/productos', 
  async (req, res)=>{
    try {
      await createSchema.validateAsync(req.body)
      return res.json({ message: `CREAR PRODUCTO ${req.body.name}` })
    } catch (error) {
      return res.json(error)
    }
  }
)

app.put('/api/productos/:id' ,
  async (req, res)=>{
    try {
      await updateSchema.validateAsync(req.body)
      return res.json({ message: `ACTUALIZAR PRODUCTO ${req.params.id} - ${req.body.value}` })
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
  (req, res)=>{
    return res.json({ message: `ELIMINAR PRODUCTO ${req.params. id}` })
  }
)

app.listen(3000, ()=> {
  console.log('Server on: http://localhost:3000');
})