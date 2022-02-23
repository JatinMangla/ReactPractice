const express = require("express");
const router = express.Router()
const uss= require('../models/uss')

router.get('/', async(req,res) => {
    try{
           const aliens = await uss.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
 
})

router.post('/', async(req,res) => {
   // console.log(req.body)

    //const dis = new uss(req.body)
    const alien = new uss({
        username: req.body.username,
        password: req.body.password
    })

    //res.send("hello")

    try{
        const a1 = await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await uss.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await uss.findById(req.params.id) 
        alien.password = req.body.password
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})




module.exports = router