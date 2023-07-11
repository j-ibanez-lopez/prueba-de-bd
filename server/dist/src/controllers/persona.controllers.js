"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonas = void 0;
const keys_1 = require("../keys");
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try
    // {
    const respuesta = yield keys_1.database.query('SELECT * FROM personas');
    // console.log(respuesta.rows);
    return res.status(200).json(respuesta.rows);
    // }
    // catch (err)
    // {
    //     console.log(err);
    //     return res.status(500).json('No hubo respuestas')
    // }
});
exports.getPersonas = getPersonas;
// Retorna todos las personas.
// export const getPersonas = async (req: Request, res: Response): Promise<Response> => 
// {
//     console.log('Ingresé bien aquí')
//     try 
//     {
//         // conexión con la bd.
//         const respuesta: QueryResult = await database.query('SELECT * FROM persona')
//         console.log()
//         console.log()
//         console.log('La respuesta es: ')
//         console.log(respuesta)
//         const valor = res.status(200).json(respuesta.rows)
//         console.log()
//         console.log()
//         console.log('Usando el status de la respuesta: ')
//         console.log(valor)
//         return valor;
//     }
//     catch(error) 
//     {
//         console.log(error);
//         return res.status(500).json('No hubo respuesta')
//     }
// }
// // Se regresa la persona que coincida con un 'id'.
// export const getPersona = async (req: Request, res: Response): Promise<Response> => 
// {
//     try
//     {
//         console.log('¿He llegado bien aquí?')
//         console.log()
//         console.log()
//         console.log()
//         const id = parseInt(req.params.id);
//         console.log(id);
//         // const { id } = req.params
//         // Aquí se hará una prueba de cual query funciona apropiadamente. Se espera que la 2
//         // lo logre con total certeza.
//         // Método 1 
//         const respuesta: QueryResult = await database.query('Select * FROM persona where id = ' + id)
//         // Método 2 
//         console.log('checkpoint #2')
//         console.log()
//         console.log()
//         console.log()
//         console.log()
//         // const respuesta: QueryResult = await database.query('Select * FROM persona where id = $1', [id]);
//         // Por lo visto, funcionan los dos.
//         console.log('checkpoint #3')
//         console.log()
//         console.log()
//         console.log()
//         console.log()
//         const valor = res.status(200).json(respuesta);
//         console.log(valor);
//         console.log('checkpoint #4')
//         console.log()
//         console.log()
//         console.log()
//         console.log()
//         const resultado = res.json(respuesta.rows);
//         console.log(resultado);
//         console.log('checkpoint #5')
//         console.log()
//         console.log()
//         console.log()
//         console.log()
//         return resultado;
//     }
//     catch(error)
//     {
//         console.error('Se ha presenciado el siguiente error: ' + error)
//         return res.status(500).json('No se pudo conectar.')
//     }
// }
// export const deletePersona = async (req: Request, res: Response) => 
// {
//     console.log()
//     const { id } = req.params
//     try 
//     {
//         const respuesta: QueryResult = await database.query('drop persona where id = ' + id);
//         const valor = res.status(200).json(respuesta);
//         console.log(valor);
//         res.json({
//             msg: 'Borrar persona',
//             id: id
//         })
//         return valor;
//     }
//     catch(error)
//     {
//         console.log(error);
//         return res.status(500).json('No hubo respuesta')
//     }
// }
// // export const postPersona = async (req: Request, res: Response, datos: persona) => 
// export const postPersona = (req: Request, res: Response) => 
// {
//     console.log(req.body)
//     // try {
//     //     const respuesta: QueryResult = await database.query('INSERT INTO' +
//     //         ' persona(nombre, apellidos, correo, "tipoDocumento", documento,"fechaNacimiento")'+
//     //         ' VALUES(' + datos.nombre + ', ' + datos.apellido + ', ' + datos.correo +
//     //         ', ' + datos.tipoDocumento + ', ' + datos.documento + ', ' + datos.fechaNacimiento + ')')
//     //     const valor = res.status(200).json(respuesta)
//         res.json({
//             msg: 'Post persona',
//             body: req.body
//         })
//         // return valor
//     // }
//     // catch(err) 
//     // {
//     //     console.log('Error en agregar una persona a la bd: ' + err)
//     //     return res.status(500).json('Error en agregar.')
//     // }
// }
// export const putPersona = (req: Request, res: Response) => 
// {
//     const { body } = req
//     const { id }   = req.params
//     console.log(body)
//     res.json({
//         msg: 'Put persona',
//         id: id,
//         body: body
//     })
// }
