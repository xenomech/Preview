const { breakpoints } = require("./constants");
const { Theme } = require("./themes");


const generate = ({ width, height, breakpoint, theme, heading, subHeading, author }) => {
  var options = { width, height, breakpoint, theme, heading, subHeading, author }
  try {
    if (breakpoint) {
      const getPoint = breakpoints.filter(item => item.breakpoint === breakpoint)
      options.height = parseInt(getPoint[0].height)
      options.width = parseInt(getPoint[0].width)
    }
    return Theme(options)
  } catch (err) {
    throw err
  }
}

module.exports = {
  generate
}