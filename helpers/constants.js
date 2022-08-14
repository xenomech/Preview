const breakpoints = [
  {
    breakpoint: "2xl",
    width: "1400",
    height: "800"
  },
  {
    breakpoint: "xl",
    width: "1200",
    height: "630"
  }, {
    breakpoint: "lg",
    width: "1000",
    height: "600"
  }, {
    breakpoint: "md",
    width: "800",
    height: "400"
  }, {
    breakpoint: "sm",
    width: "800",
    height: "400"
  },
]

const themes = [{
  name: "themeOne",
  values: {
    colorOne: "#2B2B2B",
    colorTwo: "#0E0E0E",
    fontColor: "#FFFFFF",
    hOneFont: "'bold 36px Menlo'",
    hTwoFont: "'28px Menlo'",
    hThreeFont: '22px Menlo',
  }
},
{
  name: "themeTwo",
  values: {
    colorOne: "#7303c0",
    colorTwo: "#ec38bc",
    fontColor: "#FFFFFF",
    hOneFont: "'bold 36px Menlo'",
    hTwoFont: "'28px Menlo'",
    hThreeFont: '22px Menlo',
  }
}]

module.exports = {
  breakpoints,
  themes
}