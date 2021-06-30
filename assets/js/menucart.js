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

// modal after purchased click

$(".close").click(function () {
  document.getElementById("myPurchase").style.display = "none";
});

//remove item from cart when remove button clicked
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

// Set quantity to 1 if Nan, 0 or negative number is inserted
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0 ) {
    input.value = 1;
  }
  updateCartTotal();

}

//Get item title and price when add to cart is clicked
function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  addItemToCart(title, price);
  updateCartTotal();
}

// Add item to cart and show alert when same item tried to added more than once
function addItemToCart(title, price) {
  let cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  let cartItems = document.getElementsByClassName('cart-items')[0];
  let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      document.getElementById("cart-msg").classList.add("errorMsg-cart")
    }
  }
}