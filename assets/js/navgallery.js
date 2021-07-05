// Scroll to nav function
$('a[href^=#services').click(function () {
  let findPage = document.getElementById("services");
  findPage = scrollIntoView();
});