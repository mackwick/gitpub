//********Dependencies
const express = require("express")
const app = express()
const port = 3000


//********Routes

//To root
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Gitpub App!</h1>")
})


//********Server listen
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})