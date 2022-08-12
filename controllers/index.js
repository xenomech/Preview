const { generate } = require("../helpers/generate")

const get = (req, res) => {
  const height = parseInt(req.query.height);
  const width = parseInt(req.query.width);
  const theme = req.query.theme;
  const heading = req.query.heading;
  const subHeading = req.query.sub_heading;
  const author = req.query.author;

  const buffer = generate({ width, height, theme, heading, subHeading, author });
  res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': `immutable, no-transform, s-max-age=2592000, max-age=2592000` });
  res.end(buffer);
}

module.exports = {
  get
}