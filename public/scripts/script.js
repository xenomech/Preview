
const auto = document.getElementById("auto")
const selectedAuto = document.getElementById("selectedAuto")
const selectedManual = document.getElementById("selectedManual")
const breakpoints = document.getElementById("breakpoints")
const url = document.getElementById("url")
const image = document.getElementById("image")

//url components
let options = {}
let gen_url = "https://preview-generate.herokuapp.com/get"
const renderSelection = (e) => {
  e.preventDefault()
  console.log(e)
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
  options.breakpoint = e.target.getAttribute("breakpoint")
}
breakpoints.addEventListener('click', renderBreakpoints)

