const { createCanvas } = require('canvas')

const themeOne = ({ width, height, heading, subHeading, author }) => {
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.fillStyle = '#000'
  context.fillRect(0, 0, width, height)

  context.font = 'bold 36px Menlo'
  context.textAlign = 'left'
  context.textBaseline = 'center'
  context.fillStyle = '#fff'
  const center = height * .5
  const leftMargin = 50
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