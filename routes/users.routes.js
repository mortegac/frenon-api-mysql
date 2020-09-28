const express = require('express');
const router = express.Router();
const dbConn = require('../db/connection')


router.get('/', async (req, res)=>{
    try {
        
        const sql = `SELECT * FROM app_user;`;
        dbConn.query(sql, null, function (error, results, fields) {

            //    condicion? (true) : (false)
            error?
                res.status(404).json({ message : error })
                :res.status(200).json(results)
        })
        
    } catch (error) {
        res.status(500).json({ message : error })
    }
   
})

router.get('/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    const userArray = [ parseInt(req.params.id) ];

    const sql = `SELECT * FROM app_user WHERE user_id=?;`;
    // EVITAR SQL INJECTION
    dbConn.query(sql, userArray, function (error, results, fields) {
        
        error?
            res.status(404).json({ message: error })
            :res.status(200).json(results)
    });
})


router.post('/', async (req, res) => {

    const user = req.body.user;
    // { user: { mail: '' , status: '' }}

    try{
        const sql = `INSERT INTO app_user(user_mail, user_status) VALUES ("${user.mail}", ${user.status})`
        dbConn.query(sql, null, function(error, results, fields){

            console.table(results);

            error?
                res.status(404).json({ message : error })
                :res.status(201).json({ message: 'Usuario creado'})
        })

    }catch(err){
        res.status(500).json({ message: err })
    }

})

router.put('/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    const user = req.body.user;
    const userArray = [ user.mail, user.status, id ];

    try{
        const sql=`UPDATE app_user SET user_mail=?, user_status=? WHERE user_id=?`;
        dbConn.query(sql, userArray, function (error, results, fields){

            console.table(results);

            error ?
                res.status(404).json( { mesagge: error} )
                :res.status(200).json( { message: `Usuario id:${id} fue Actualizado`})
        })


    }catch(err){
        res.status(500).json({ message : err })
    }

})


// ELIMINAR RECURSO
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const userArray = [ id ];

    try {
        
        const sql = `DELETE FROM app_user WHERE user_id = ?`
        dbConn.query(sql, userArray, function (error, results, fields){

            error?
                res.status(404).json({ message : error })
                :res.status(200).json({ message : `Usuario id: ${id} eliminado` })

        })

    } catch (error) {
        res.status(500).json({ message : error })
    }
})



module.exports = router;