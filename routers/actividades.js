const express = require('express');
const getClient = require('../db/mongodb');
const router = express.Router()


router.get('/actividades', (req,res) =>{
    // res.send('Obtengo una actividad')
    getClient((err, db) => {
        if (err) return res.send(err)
        db.collection('actividades').find().toArray((err, result) => {
            if (err) return res.send(err)
            return res.send(result)
        })
    })


});

router.post('/actividades', (req,res) =>{
    const ar = []
    ar.push(req.body);
    req.body.created = new Date()

    getClient((err, db) => {
        if (err) return res.send(err)
        db.collection('actividades').insertMany(ar, (err, result) => {
            if (err) return res.send(err)
            return res.send(result)
        })
    })

})

router.patch('actividades/:id', (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    getClient((err, db) => {
        if(err) return res.status(500).send(err);
        
        db.collection('actividades').updateOne(
            { _id: new ObjectId(id)}, 
            { $set: { price } },
            (err, result) => {
                if(err) return res.status(500).send(err);
                return res.send(result);
            }
        );
    });
})

router.delete('actividades/:id', (req, res) => {
    const id = req.params;
    getClient((err, db) => {
        if (err) return res.status(500).send(err);
        db.collection('actividades').deleteOne({
            _id: new ObjectId(id)
        }, (err, result) =>{
            if(err) return res.status(500).send(err);
            return res.send(result);
        });
    });
})

module.exports = router