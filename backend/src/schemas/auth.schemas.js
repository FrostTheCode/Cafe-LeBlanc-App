import {z} from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Nombre de usuario requerido"
    }),
    email: z.string({
        required_error: "Nombre de usuario requerido"
    }).email({message:"Email no valido"}),
    password: z.string({
        required_error: "contraseña requerida"
    }).min(6,{message: "el password debe de tener al menos 6 caracteres"})
})//fin del schema de datos.

export const loginSchema = z.object({
    email: z.string({
        required_error: "Nombre de usuario requerido"
    }).email({message:"Email no valido"}),
    password: z.string({
        required_error: "contraseña requerida"
    }).min(6,{message: "el password debe de tener al menos 6 caracteres"})
})//fin del schema de datos.

