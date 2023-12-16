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

//JSON db route
app.get("/drinks", (req, res) => {
    res.send(drinks)
})


//********Server listen */
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})