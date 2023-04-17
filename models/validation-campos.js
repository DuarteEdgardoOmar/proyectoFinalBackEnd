const { validationResult } = require('express-validator')

const validation_campos = (req,res,next)=>{

    const err = validationResult(req)

    if(!err.isEmpty()){ return res.status(400).json({ errors: err.array() });}

    next()
}

module.exports = {validation_campos}