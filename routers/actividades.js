const express = require('express');
const Actividad= require('../models/actividades');

const router = express.Router()


router.get('/administrador', (req,res) =>{
    Actividad.find()
        .then((actividades)=>{
            res.send(actividades);

        })
        .catch((error) => res.send(err));
});

router.post('/administrador', (req,res) =>{
    const actividad = new Actividad (req.body)
    actividad.save()
        .then(() => {
            res.send(actividad);
        })
        .catch(() => {
            res.status(500).send(err)
        });
    

})

router.get('/administrador/id', (req,res) => {
    const {id} = req.params
    Actividad.findByIdç(id)
        .then((actividad) => {
            res.send(actividad);
        })
        .catch((err) => {res.send(err)});
})

// router.patch('actividades/:id', (req, res) => {
//     const { id } = req.params;
//     getClient((err, db) => {
//         if(err) return res.status(500).send(err);
        
//         db.collection('actividades').updateOne(
//             { _id: new ObjectId(id)}, 
//             { $set: { price } },
//             (err, result) => {
//                 if(err) return res.status(500).send(err);
//                 return res.send(result);
//             }
//         );
//     });
// })

// router.delete('actividades/:id', (req, res) => {
//     const id = req.params;
//     getClient((err, db) => {
//         if (err) return res.status(500).send(err);
//         db.collection('actividades').deleteOne({
//             _id: new ObjectId(id)
//         }, (err, result) =>{
//             if(err) return res.status(500).send(err);
//             return res.send(result);
//         });
//     });
// })

module.exports = router