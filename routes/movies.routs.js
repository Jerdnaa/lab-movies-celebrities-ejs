const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const { route } = require('./celebrities.routs')

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
    try {
        await Movie.create(data)
        res.redirect("/movies")
    }   catch (error) {
        console.log(error);
    }
})

router.get("/:id", (req, res) => {
    const movieId = req.params.id;
    console.log(movieId)
    try {
        const oneMovie = Movie.findById(movieId)
        // console.log(oneMovie)
        res.render("movies/movie-details", {oneMovie})
    } catch (error) {
        console.log(error)
    }
})



module.exports = router