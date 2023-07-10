const Celebrity = require('../models/Celebrity.model')

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here

router.get("/", async (req, res) => {
    try {
        const allCelebs = await Celebrity.find()
        res.render("celebrities/celebrities", { allCelebs })
    } catch (error) {
        console.log(error)
    }
})

router.post("/create", async (req, res) => {
    const data = req.body;
    try{
        await Celebrity.create(data)
        res.redirect("/celebrities")
    } catch(error) {
        console.log(error);
    }
    
})

router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity")
})

module.exports = router