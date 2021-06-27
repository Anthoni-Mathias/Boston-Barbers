$("beard-button").click(function () {
  document.getElementById("beard-button").classList.add("btn-success");
  const gentsCut = document.getElementById("gents-haircut");
  gentsCut.classList.remove("btn-success");
  const colorHighlight = document.getElementById("color-button");
  colorHighlight.classList.remove("btn-success");
  const homeServices = document.getElementById("homeservices-button");
  homeServices.classList.remove("btn-success");
  document.getElementById("shop-thing").innerHTML
});