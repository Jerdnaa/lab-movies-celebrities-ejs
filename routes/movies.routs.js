const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')


// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
router.get("/", async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.render("movies/movies", {allMovies})
    } catch (error) {
        console.log(error);
    }
}) 

router.get("/create", async (req, res) => {
    try {
        const allCelebs = await Celebrity.find()
        res.render("movies/new-movies", {allCelebs})
    } catch(error) {
        console.log(error)
    }
})

router.post("/create", async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        await Movie.create(data)
        res.redirect("/movies")
    }   catch (error) {
        console.log(error);
    }
})

router.get("/:id",async (req, res) => {
    const movieId = req.params.id;
    console.log(movieId)
    try {
        const oneMovie = await Movie.findById(movieId)
        console.log(oneMovie)
        res.render("movies/movie-details", {oneMovie})
    } catch (error) {
        console.log(error)
    }
})

router.post("/:id/delete", async (req, res) => {
    const id = req.params.id
    try{
       await Movie.findByIdAndDelete(id)
       res.redirect("/movies")
    } catch(error) {
        console.log(error)
    }
})



module.exports = router