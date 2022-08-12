require('dotenv').config()
const express = require('express')
var cors = require('cors')

const { breakpoints } = require("./helpers/constants")

const app = express()
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(cors())

app.use(require("./routes/index"))
app.use("/public", express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render("index", { breakpoints })
})
app.listen(port, () => {
  console.log(`App on port ${port}`)
})