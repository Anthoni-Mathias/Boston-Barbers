// Scroll to nav function
$('a[href^=#services').click(function () {
  let findPage = document.getElementById("services");
  findPage = scrollIntoView();
});
$('a[href^=#gallery').click(function () {
  let findPage = document.getElementById("gallery");
  findPage = scrollIntoView();
});
$('a[href^=#book').click(function () {
  let findPage = document.getElementById("book");
  findPage = scrollIntoView();
});
$('a[href^=#contact').click(function () {
  let findPage = document.getElementById("contact");
  findPage = scrollIntoView();
});