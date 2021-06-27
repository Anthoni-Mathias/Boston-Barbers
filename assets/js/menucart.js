$("beard-button").click(function () {
  document.getElementById("beard-button").classList.add("btn-success");
  const gentsCut = document.getElementById("gents-haircut");
  gentsCut.classList.remove("btn-success");
  const colorHighlight = document.getElementById("color-button");
  colorHighlight.classList.remove("btn-success");
  const homeServices = document.getElementById("homeservices-button");
  homeServices.classList.remove("btn-success");
  document.getElementById("shop-thing").innerHTML = `
  <div class="shop-item">
    <span class="shop-item-title">Regular Cut</span>
    <div class="shop-item-details">
        <p>
          This service includes a consultation, followed by machine back & sides and scissors on top.                           
        </p>
        <span class="shop-item-price">€18 - €20</span>
        <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
        </button>
    </div>
</div> `;
ready();
});
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}