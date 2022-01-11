const express = require('express');
const Comentario = require('../models/comentario');


const router = express.Router()


router.get('/main', (req,res) =>{
    Comentario.find()
        .then((formComentarios)=>{
            res.send(formComentarios);

        })
        .catch((error) => res.send(err));
});

router.post('/main', (req,res) =>{
    const comentario = new Comentario (req.body)
    comentario.save()
        .then(() => {
            res.send(comentario);
        })
        .catch(() => {
            res.status(500).send(err)
        });
    

})
