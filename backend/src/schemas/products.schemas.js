import {z} from 'zod'

export const productSchemas = z.object({
    name: z.string({
        required_error: 'nombre del producto requerido'
    }),
    price: z.number({
        required_error: 'precio del producto debe ser numero'
    }).optional(),
    year: z.number({
        required_error: 'el año debe ser numero'
    }).optional()
})//fin del productsSchema