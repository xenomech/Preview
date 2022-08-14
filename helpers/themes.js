const { createCanvas } = require('canvas')
const { themes } = require('./constants')

const Theme = ({ width, height, heading, subHeading, author, theme }) => {
  selectedTheme = themes.filter(item => item.name === theme)[0]
  try {
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    var gradient = context.createLinearGradient(-0, -0, height, width);
    gradient.addColorStop(0, selectedTheme.values.colorOne);
    gradient.addColorStop(1, selectedTheme.values.colorTwo);
    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)

    context.font = selectedTheme.values.hOneFont
    context.textAlign = 'left'
    context.textBaseline = 'center'
    context.fillStyle = selectedTheme.values.fontColor
    const center = height * .5
    const leftMargin = 100
    context.fillText(heading, leftMargin, parseInt(center - 50))

    context.font = selectedTheme.values.hTwoFont
    context.fillText(subHeading, leftMargin, parseInt(center))

    context.font = selectedTheme.values.hThreeFont
    context.fillText(author, leftMargin, parseInt(center + 75))

    const buffer = canvas.toBuffer('image/png')
    return buffer
  } catch (err) {
    throw err
  }
}

module.exports = {
  Theme
}