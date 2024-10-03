import joi from 'joi'

const createSchema = joi.object(
  {
    name: joi.string()
      .required()
      .min(3)
      .max(50)
      .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
      .messages(
        {
          'string.min': 'El nombre debe tener al menos 3 caracteres',
          'string.max': 'El nombre no puede tener mas de 50 caracteres',
          'string.pattern.base': 'El nombre solo puede contener letras y espacios',
          'any.required': 'El nombre es requerido',
          'string.empty': 'El nombre no puede estar vacio'
        }
      ),
    category: joi.string()
      .required()
      .min(3)
      .max(50)
      .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
      .messages({
        'string.min': 'La categoria debe tener al menos 3 caracteres',
        'string.max': 'La categoria no puede tener mas de 50 caracteres',
        'string.pattern.base': 'La categoria solo puede contener letras y espacios',
        'any.required': 'La categoria es requerida',
        'string.empty': 'La categoria no puede estar vacia'
      }),
    details: joi.string()
      .required()
      .min(20)
      .max(250)
      .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/)
      .messages(
        {
          'string.min': 'La descripcion debe tener al menos 20 caracteres',
          'string.max': 'La descripcion no puede tener mas de 250 caracteres',
          'string.pattern.base': 'La descripcion solo puede contener letras, numeros y espacios',
          'string.empty': 'La descripcion no puede estar vacia',
          'any.required': 'La descripcion es requerida'
        }
      ),
    price: joi.number()
      .required()
      .min(0)
      .messages({
        'number.min': 'El precio debe ser mayor a S/. 0',
        'any.required': 'El precio es requerido',
        'number.empty': 'El precio no puede estar vacio',
        'number.base': 'El precio debe ser un numero'
      }),
    stock: joi.number()
      .required()
      .min(0)
      .integer()
      .strict()
      .messages({
        'number.min': 'El stock debe ser mayor a 0 unidades',
        'any.required': 'El stock es requerido',
        'number.empty': 'El stock no puede estar vacio',
        'number.base': 'El stock debe ser un numero entero',
        'number.integer': 'El stock debe ser un numero entero'
      })
  }
)

export { createSchema }