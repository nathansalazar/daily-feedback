const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/',(req,res)=>{
    console.log('req.body:',req.body);
    pool.query(`INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments")
        VALUES ($1,$2,$3,$4);`,
        [req.body.feeling, req.body.understanding, req.body.supported, 
            req.body.comments]).then((results) => {
                res.sendStatus(201);
            }).catch((error)=>{
                console.log('Error in POST:',error);
            })
})

router.get('/',(req,res)=>{
    pool.query(`SELECT * FROM "feedback";`).then((results)=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error in GET:',error);
    })
})

router.delete('/:id',(req,res)=>{
    pool.query(`DELETE FROM "feedback" 
    WHERE "id"=$1`,[req.params.id]).then((results)=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error in DELETE:',error);
    })
})

module.exports = router;