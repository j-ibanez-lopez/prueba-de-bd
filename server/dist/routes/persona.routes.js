"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_controllers_1 = require("../controllers/persona.controllers");
const router = (0, express_1.Router)();
router.get('/', persona_controllers_1.getPersonas);
router.get('/:id', persona_controllers_1.getPersona);
// ----
router.post('/', persona_controllers_1.postPersona);
router.delete('/:id', persona_controllers_1.deletePersona);
router.put('/editarNombre/:id', persona_controllers_1.putPersonaPorNombre);
router.put('/editarApellido/:id', persona_controllers_1.putPersonaPorApellido);
router.put('/editarCorreo/:id', persona_controllers_1.putPersonaPorCorreo);
router.put('/editarDocumento/:id', persona_controllers_1.putPersonaPorDocumento);
router.put('/editarFechaNacimiento/:id', persona_controllers_1.putPersonaPorFecha);
exports.default = router;
