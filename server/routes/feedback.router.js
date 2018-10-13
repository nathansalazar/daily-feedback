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
                console.log('results',results);
            }).catch((error)=>{
                console.log('Error in POST:',error);
            })
})

module.exports = router;