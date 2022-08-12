const { themeOne } = require("./themes");


const generate = ({ width, height, theme, heading, subHeading, author }) => {
  switch (theme) {
    case "themeOne":
      return themeOne({ width, height, heading, subHeading, author })
    default:
      break;
  }
}

module.exports = {
  generate
}