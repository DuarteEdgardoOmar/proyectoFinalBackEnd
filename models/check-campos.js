const { check } = require('express-validator')

const check_campos = [
    check('familia')
        .not().isEmpty().withMessage('el campo familia es requerido, verifique...'),
    check('marca')
        .not().isEmpty().withMessage('el campo marca es requerido, verifique...'),
    check('descripcion')
        .not().isEmpty().withMessage('el campo descripcion es requerido, verifique...'),
    check('precio')
        .not().isEmpty().withMessage('el campo precio es requerido, verifique...').isNumeric().withMessage('el dato debe ser numerico'),
    check('stock')
        .not().isEmpty().withMessage('el campo stock es requerido, verifique...').isNumeric().withMessage('el dato debe ser numerico'),
    check('activo')
        .not().isEmpty().withMessage('el campo activo es requerido, verifique...').isBoolean().withMessage('el dato debe ser true o false')
]

module.exports = { check_campos }