const express = require('express');
const Comentario = require('../models/comentario');


const router = express.Router()


router.get('/form-comentarios', (req,res) =>{
    Comentario.find()
        .then((formComentarios)=>{
            res.send(formComentarios);

        })
        .catch((error) => res.send(err));
});

router.post('/form-comentarios', (req,res) =>{
    const comentario = new Comentario (req.body)
    comentario.save()
        .then(() => {
            res.send(comentario);
        })
        .catch(() => {
            res.status(500).send(err)
        });
    

})
