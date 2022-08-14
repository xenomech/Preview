const { generate } = require("../helpers/generate")

const get = (req, res) => {
  try {
    const height = parseInt(req.query.height) || 630;
    const width = parseInt(req.query.width) || 1200;
    const theme = req.query.theme || "Blackberry";
    const heading = req.query.heading || "";
    const subHeading = req.query.sub_heading || "";
    const author = req.query.author || "";
    const breakpoint = req.query.breakpoint;

    const buffer = generate({ width, height, breakpoint, theme, heading, subHeading, author });
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(buffer);

  } catch (err) {
    console.log(err)
    res.send("An error has occurred! Please check the parameters")
  }
}

module.exports = {
  get
}