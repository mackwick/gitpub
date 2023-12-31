//********Dependencies */
const express = require("express")
const app = express()
const drinks = require("./models/drinks.js")


//********Global variables */
const port = 3000


//********Routes */

//Root route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Gitpub App!</h1>")
})

//Index route
app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks})
})

//Show route
app.get("/drinks/:id", (req, res) => {
    const id = req.params.id
    const drink = drinks[id]
    res.render("show.ejs", {drink, id})
})


//********Server listen */
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})