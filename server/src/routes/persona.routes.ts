import { Router } from 'express'
import { deletePersona, getPersona, getPersonas, postPersona, putPersonaPorApellido, putPersonaPorCorreo, putPersonaPorDocumento, putPersonaPorFecha, putPersonaPorNombre } from '../controllers/persona.controllers';


const router = Router();

router.get('/', getPersonas);
router.get('/:id', getPersona);
// ----
router.post('/', postPersona);
router.delete('/:id', deletePersona);
router.put('/editarNombre/:id', putPersonaPorNombre);
router.put('/editarApellido/:id', putPersonaPorApellido);
router.put('/editarCorreo/:id', putPersonaPorCorreo);
router.put('/editarDocumento/:id', putPersonaPorDocumento);
router.put('/editarFechaNacimiento/:id', putPersonaPorFecha);

export default router;