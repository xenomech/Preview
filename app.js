require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const { breakpoints, themes } = require("./helpers/constants")
app.set("view engine", "ejs")

app.use(cors())
app.use(require("./routes/index"))

app.use("/public", express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render("index", { breakpoints, themes })
})
app.listen(port, () => {
  console.log(`App on port ${port}`)
})