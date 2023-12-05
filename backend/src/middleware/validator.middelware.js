export const validateSchema = (schema) => (req,res,next) => {
    try {
        //esta funcion recibe un esque para validarlos
        //este esquema se valida con el metodo parse, validando los campos que se envian
        schema.parse(req.body);
        next();//si no hay error al validar se ejecuta el next.
    } catch (error) {
        //console.log(error)
        return res.status(400).json({message: error.errors.map((error)=>error.message)});
    }
}
