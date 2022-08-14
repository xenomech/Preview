
const auto = document.getElementById("auto")
const selectedAuto = document.getElementById("selectedAuto")
const selectedManual = document.getElementById("selectedManual")
const breakpoints = document.getElementById("breakpoints")
const height = document.getElementById("height")
const width = document.getElementById("width")

const heading = document.getElementById("heading")
const subHeading = document.getElementById("sub_heading")
const author = document.getElementById("author")
const theme = document.getElementById("theme")

const url = document.getElementById("url")
const image = document.getElementById("image")
const link = document.getElementById("link")

//url components
let options = {
  heading: "Insert heading here",
  sub_heading: "insert sub heading here",
  theme: "themeOne"
}
let gen_url = "https://preview-generate.herokuapp.com/get?"
const renderSelection = (e) => {
  e.preventDefault()
  auto.classList.toggle("active")
  if (auto.classList.contains("active")) {
    selectedAuto.classList.toggle("hidden")
    selectedManual.classList.toggle("hidden")
  }
  else {
    selectedAuto.classList.toggle("hidden")
    selectedManual.classList.toggle("hidden")
  }
}
auto.addEventListener("click", renderSelection)

const renderBreakpoints = (e) => {
  Array.from(breakpoints.children).map(item => item.classList.remove('active'))
  e.target.classList.toggle("active")
  delete options.height
  delete options.width
  options.breakpoint = e.target.getAttribute("breakpoint")
  url.innerHTML = genURL()
}
breakpoints.addEventListener('click', renderBreakpoints)

const genURL = () => {
  var str = [];
  for (var key in options)
    if (options.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(options[key]));
    }
  const params = str.join("&");
  return gen_url + params
}

[height, width, heading, subHeading, author, theme].map((item) => {
  item.addEventListener("change", (e) => {
    value = e.target.getAttribute("id")
    if (value === "height" || value === "width") {
      delete options.breakpoint
    }
    options[value] = e.target.value
    url.innerHTML = genURL()
  })
})

link.addEventListener("click", (e) => {
  image.src = genURL()
})
url.innerHTML = genURL()