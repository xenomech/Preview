const { generate } = require("../helpers/generate")

const get = (req, res) => {
  const height = parseInt(req.query.height) || 630;
  const width = parseInt(req.query.width) || 1200;
  const theme = req.query.theme || "themeOne";
  const heading = req.query.heading || "";
  const subHeading = req.query.sub_heading || "";
  const author = req.query.author || "";
  const buffer = generate({ width, height, theme, heading, subHeading, author });
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(buffer);
}

module.exports = {
  get
}