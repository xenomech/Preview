require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(require("./routes/index"))
app.get('/', (req, res) => {
  res.render("index")
})
app.listen(port, () => {
  console.log(`App on port ${port}`)
})