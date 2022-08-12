const { createCanvas } = require('canvas')

const themeOne = ({ width, height, heading, subHeading, author }) => {
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  var gradient = context.createLinearGradient(-250, -500, 600, 500);
  gradient.addColorStop(0, "#2B2B2B");
  gradient.addColorStop(1, "#0E0E0E");
  context.fillStyle = gradient
  context.fillRect(0, 0, width, height)

  context.font = 'bold 36px Menlo'
  context.textAlign = 'left'
  context.textBaseline = 'center'
  context.fillStyle = '#fff'
  const center = height * .5
  const leftMargin = 100
  context.fillText(heading, leftMargin, parseInt(center - 50))

  context.font = '28px Menlo'
  context.fillText(subHeading, leftMargin, parseInt(center))

  context.font = '24px Menlo'
  context.fillText(author, leftMargin, parseInt(center + 75))

  const buffer = canvas.toBuffer('image/png')
  return buffer
}

module.exports = {
  themeOne
}