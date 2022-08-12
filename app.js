require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(require("./routes/index"))
app.get('/', (req, res) => {
  res.send("success")
})
app.listen(port, () => {
  console.log(`App on port ${port}`)
})