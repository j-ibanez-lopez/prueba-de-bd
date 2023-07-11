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
exports.putPersonaPorFecha = exports.putPersonaPorDocumento = exports.putPersonaPorCorreo = exports.putPersonaPorApellido = exports.putPersonaPorNombre = exports.deletePersona = exports.postPersona = exports.getPersona = exports.getPersonas = void 0;
const keys_1 = require("../db/keys");
// Recordatorio de que no se debe emitir dos respuestas por método (res). Limitarse a
// hacerlo sólo para el return
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield keys_1.database.query('SELECT * FROM persona');
        console.log('Mayor detalle sobre respuesta: ', typeof (respuesta.rows));
        // Posiblemente esta línea tiraba error.
        // console.log(respuesta.rows);
        return res.status(200).json(respuesta.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('No hubo respuestas');
    }
});
exports.getPersonas = getPersonas;
// Recordatorio de que no se debe emitir dos respuestas por método (res). Limitarse a
// hacerlo sólo para el return
// FUNCIÓN: Se regresa la persona que coincida con un 'id'.
const getPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const id_int = parseInt(id);
        // res.send('Funciona por el momento.')
        const respuesta = yield keys_1.database.query('select * from persona where id = $1', [id_int]);
        // Esto funciona. No borrar.
        // const persona: Persona = respuesta.rows[0];
        // console.log(persona)
        return res.status(200).json(respuesta.rows);
    }
    catch (error) {
        console.log('El error es: ' + error);
        return res.status(500).json('Tenemos problemas');
    }
});
exports.getPersona = getPersona;
// export const postPersona = async (req: Request, res: Response, datos: persona) => 
const postPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, correo, tipoDocumento, documento, fechaNacimiento } = req.body;
    try {
        // No se recomienda hacer un split de la query en múltiples líneas. Es muy probable que genere problemas.
        const respuesta = yield keys_1.database.query('INSERT INTO persona(nombre, apellido, correo, "tipoDocumento", documento, "fechaNacimiento") VALUES ($1, $2, $3, $4, $5, $6);', [nombre, apellido, correo, tipoDocumento, documento, fechaNacimiento]);
        // Esto NO funciona.
        // const respuesta: QueryResult = await database.query('INSERT INTO persona VALUES ($1);',
        //     [req.body])
        return res.status(200).json(respuesta);
    }
    catch (err) {
        console.log('Error en agregar una persona a la bd: ' + err);
        return res.status(500).json('Error en agregar.');
    }
});
exports.postPersona = postPersona;
const deletePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log('Eliminando una persona por el id: ' + id);
    try {
        const respuesta = yield keys_1.database.query('DELETE FROM persona WHERE id = ' + id);
        const valor = res.status(200).json(respuesta);
        return valor;
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('No hubo respuesta');
    }
});
exports.deletePersona = deletePersona;
const putPersonaPorNombre = (req, res) => {
    const { id } = req.params;
    // Esta es la forma correcta de llamarlo, si los datos JSON 
    // vienen con corchetes '[]'.
    console.log(req.body[0]);
    const { nombre } = req.body[0];
    console.log('El nombre obtenido es: ', nombre);
    try {
        if (nombre.trim() != '') {
            const respuesta_nombre = keys_1.database.query('UPDATE persona SET nombre = $1 WHERE id = $2', [nombre, id]);
            return res.status(200).json(respuesta_nombre);
        }
    }
    catch (error) {
        console.log('No se pudo editar el nombre. El error fue: ', error);
        return res.status(500).json('No hubo respuesta.');
    }
};
exports.putPersonaPorNombre = putPersonaPorNombre;
const putPersonaPorApellido = (req, res) => {
    const { id } = req.params;
    const { apellido } = req.body;
    try {
        if (apellido.trim() != '') {
            const respuesta_apellido = keys_1.database.query('UPDATE persona SET apellido = $1 WHERE id = $2', [apellido, id]);
            return res.status(200).json(respuesta_apellido);
        }
    }
    catch (error) {
        console.log('No se pudo editar el apellido. El error fue: ', error);
        return res.status(500).json('No se pudo conectar');
    }
};
exports.putPersonaPorApellido = putPersonaPorApellido;
const putPersonaPorCorreo = (req, res) => {
    const { id } = req.params;
    const { correo } = req.body;
    try {
        if (correo.trim() != '') {
            const respuesta_correo = keys_1.database.query('UPDATE persona SET correo = $1 WHERE id = $2', [correo, id]);
            return res.status(200).json(respuesta_correo);
        }
    }
    catch (error) {
        console.log('No se pudo editar el correo. El error fue: ', error);
        return res.status(500).json('No se pudo conectar');
    }
};
exports.putPersonaPorCorreo = putPersonaPorCorreo;
const putPersonaPorDocumento = (req, res) => {
    const { id } = req.params;
    let { documento } = req.body[0];
    console.log('Documento es: ' + documento + ' y su tipo es: ' + typeof (documento));
    if (!Number.isNaN(Number(documento))) {
        console.log('El documento es', Number(documento));
        documento = Number(documento);
    }
    // ESTE VALOR DEBIERA SER NUMËRICO. REVISAR SI LA RESPUESTA LO DEVUELVE COMO TAL.
    try {
        if (documento != null || documento != undefined || documento > 0) {
            const respuesta_doc = keys_1.database.query('UPDATE persona SET documento = $1 WHERE id = $2', [documento, id]);
            return res.status(200).json(respuesta_doc);
        }
        // Esto está comentado debido a que el tipo de 'documento' en la bd 
        // es númerico por lo que el método trim podría tirar problemas ya que 
        // le quita los espacios en blanco a los strings.
        // if (documento.trim() != '') 
        // {
        //     const respuesta_doc = database.query('ALTER persona SET documento = $1 WHERE id = $2', [documento, id]);
        //     return res.status(200).json(respuesta_doc)
        // }
    }
    catch (error) {
        console.log('No se pudo editar el documento. El error fue: ', error);
        return res.status(500).json('No se pudo conectar');
    }
};
exports.putPersonaPorDocumento = putPersonaPorDocumento;
const putPersonaPorFecha = (req, res) => {
    const { id } = req.params;
    const { fechaNacimiento } = req.body;
    try {
        if (fechaNacimiento.trim() != '') {
            const respuesta_fecha = keys_1.database.query('UPDATE persona SET fechaNacimiento = $1 WHERE id = $2', [fechaNacimiento, id]);
            return res.status(200).json(respuesta_fecha);
        }
    }
    catch (error) {
        console.log('No se pudo editar la fecha de nacimiento. El error fue: ', error);
        return res.status(500).json('No se pudo conectar');
    }
};
exports.putPersonaPorFecha = putPersonaPorFecha;
