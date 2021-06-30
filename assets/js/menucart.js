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

function ready() {
  let removeCartItemButtons = document.getElementsByClassName('btn-danger');
  for (let i = 0; i < removeCartItemButtons.length; i++) {
      let button = removeCartItemButtons[i];
      button.addEventListener('click', removeCartItem);
  }
  let quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
  }
  let addToCartButtons = document.getElementsByClassName('shop-item-button');
  for (let i = 0; i < addToCartButtons.length; i++) {
      let button = addToCartButtons[i];
      button.addEventListener('click', addToCartClicked);
  }
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}