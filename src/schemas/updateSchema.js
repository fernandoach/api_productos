import joi from 'joi'

const updateSchema = joi.object(
  {
    value: joi.string()
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
      })
  }
)

export { updateSchema }
