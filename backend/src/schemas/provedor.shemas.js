import {z} from 'zod'

export const provedorSchemas = z.object({
    nombre: z.string({
        required_error: 'nombre del provedor requerido'
    }),
    email: z.string({
        required_error: 'email del provedor requerido'
    }).optional(),
    telephone: z.number({
        required_error: 'telefono del provedor requerido'
    }),
    direccion: z.string({
        required_error: 'direccion del provedor requerido'
    }).optional()
})