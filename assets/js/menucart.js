$("#beard-button").click(function () {
  document.getElementById("beard-button").classList.add("btn-success");
  const gents = document.getElementById("gents-button");
  gents.classList.remove("btn-success");
  const highlight = document.getElementById("highlight-button");
  highlight.classList.remove("btn-success");
  const homeservices = document.getElementById("homeservices-button");
  homeservices.classList.remove("btn-success");
  document.getElementById("shop-thing").innerHTML = `
  <div class="shop-item">
  <span class="shop-item-title"> Beard Design </span>
  <div class="shop-item-details">
      <p>
          Beard design will trim & moustache to your desidered look. We use cut throat razor to line the beard to ensure the best shape to suit you. Finished with product to suit your beard type.                       
      </p>
      <span class="shop-item-price"> €20 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>

<div class="shop-item">
  <span class="shop-item-title"> Beard trim </span>
  <div class="shop-item-details">
      <p>
            This service will trim & tidy your beard *this service is a regular dry beard trim*(if you wish to have "Beard Design" witch is using the cut throat razor to line around the beard & reshape - please select service "Beard Design)                  
      </p>
      <span class="shop-item-price"> €10 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>

<div class="shop-item">
  <span class="shop-item-title">
      Hot towel Shave                     
  </span>
  <div class="shop-item-details">
      <p>
        Your face is then prepared with a hot towel treatment, followed by the application of the shaving cream of your choice (and we have a wide range)-, whipped up into a rich lather and applied using a traditional badger hair shaving brush. One of our master barbers will then perform the shave itself.                   
      </p>
      <span class="shop-item-price"> €30 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>`;
  ready();
});

// Get highlight button and on click change to highlight menu
// Credit to kelysbarber for some part of the content for highlight 
$("#highlight-button").click(function () {
  document.getElementById("highlight-button").classList.add("btn-success");
  const gents = document.getElementById("gents-button");
  gents.classList.remove("btn-success");
  const beard = document.getElementById("beard-button");
  beard.classList.remove("btn-success");
  const homeservices = document.getElementById("homeservices-button");
  homeservices.classList.remove("btn-success");
  document.getElementById("shop-thing").innerHTML = `
  <div class="shop-item">
  <span class="shop-item-title"> Highlights Beard color </span>
  <div class="shop-item-details">
      <p>
          Beard color will trim & moustache to your desidered look. We use cut throat razor to line the beard to ensure the best shape to suit you. Finished with product to suit your beard type.                       
      </p>
      <span class="shop-item-price"> €20 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>`;
  ready();
});

// Get homeservices button and on click change to homeservices menu
$("#homeservices-button").click(function () {
  document.getElementById("homeservices-button").classList.add("btn-success");
  const gents = document.getElementById("gents-button");
  gents.classList.remove("btn-success");
  const beard = document.getElementById("beard-button");
  beard.classList.remove("btn-success");
  const highlight = document.getElementById("highlight-button");
  highlight.classList.remove("btn-success");
  document.getElementById("shop-thing").innerHTML = `
  <div class="shop-item">
  <span class="shop-item-title"> Home Regular Cut</span>
  <div class="shop-item-details">
      <p>
          This service includes a consultation, followed by machine back & sides and scissors on top.                           
      </p>
      <span class="shop-item-price"> €25 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>

<div class="shop-item">
  <span class="shop-item-title">Home Skinfade/Bald fade</span>
  <div class="shop-item-details">
      <p>
          Also know as a bald fade or zero fade, the skin fade haircut comes in a variety of forms, including the hight, mid. and low skin fade                       
      </p>
      <span class="shop-item-price"> €30 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>

<div class="shop-item">
  <span class="shop-item-title">
      Home Scissors Precision cut/ Hot towel tonic  finish                     
  </span>
  <div class="shop-item-details">
      <p>
          A Precision cut, cut and an intensive scalp treatment to stimulate dry and irritable scalp finished off with refreshing hot towel.                        
      </p>
      <span class="shop-item-price"> €35 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>
<div class="shop-item">
  <span class="shop-item-title">All over Machine Buzz cut</span>
  <div class="shop-item-details">
      <p>
         Home Machine all over, no scissors used in this service.                         
      </p>
      <span class="shop-item-price"> €20 </span>
      <button class="btn btn-primary shop-item-button" type="button">
          Add to cart
      </button>
  </div>
</div>`;
  ready();
});

// Get gents button and on click change back to gents menu
$("#gents-button").click(function () {
  document.getElementById("gents-button").classList.add("btn-success");
  const highlight = document.getElementById("highlight-button");
  highlight.classList.remove("btn-success");
  const beard = document.getElementById("beard-button");
  beard.classList.remove("btn-success");
  const homeservices = document.getElementById("homeservices-button");
  homeservices.classList.remove("btn-success");
  document.getElementById("shop-thing").innerHTML = `
  <div class="shop-item">
                    <span class="shop-item-title">Regular Cut</span>
                    <div class="shop-item-details">
                        <p>
                            This service includes a consultation, followed by machine back & sides and scissors on top.                           
                        </p>
                        <span class="shop-item-price">€20</span>
                        <button class="btn btn-primary shop-item-button" type="button">
                            Add to cart
                        </button>
                    </div>
                </div>

                <div class="shop-item">
                    <span class="shop-item-title">Skinfade/Bald fade</span>
                    <div class="shop-item-details">
                        <p>
                            Also know as a bald fade or zero fade, the skin fade haircut comes in a variety of forms, including the hight, mid. and low skin fade                       
                        </p>
                        <span class="shop-item-price">€24</span>
                        <button class="btn btn-primary shop-item-button" type="button">
                            Add to cart
                        </button>
                    </div>
                </div>

                <div class="shop-item">
                    <span class="shop-item-title">
                        Scissors Precision cut/ Hot towel tonic  finish                     
                    </span>
                    <div class="shop-item-details">
                        <p>
                            A Precision cut, cut and an intensive scalp treatment to stimulate dry and irritable scalp finished off with refreshing hot towel.                        
                        </p>
                        <span class="shop-item-price">€25</span>
                        <button class="btn btn-primary shop-item-button" type="button">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">All over Machine Buzz cut</span>
                    <div class="shop-item-details">
                        <p>
                            Machine all over, no scissors used in this service.                         
                        </p>
                        <span class="shop-item-price">€15</span>
                        <button class="btn btn-primary shop-item-button" type="button">
                            Add to cart
                        </button>
                    </div>
                </div>`;
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

//Modal after purchase clicked and items removed from cart.
function purchaseClicked() {
  document.getElementById("myPurchase").style.display = "block";
  let cartItems = document.getElementsByClassName('cart-items')[0];
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

// closing modal after purchased click
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
      document.getElementById("cart-msg").classList.add("errorMsg-cart");
      document.getElementById("cart-msg").innerHTML = "This item is already added to the cart";
      let findPage = document.getElementById("menu");
      findPage.scrollIntoView();
      setTimeout(function () {
        document.getElementById("cart-msg").classList.remove("errorMsg-cart");
        document.getElementById("cart-msg").innerHTML = "";
      }, 2500);
      return;
    }    
  }
  let cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" id="removeBtn" type="button">Remove</button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);      
}

// Adding cart item price together and updates total amount
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0];
  let cartRows = cartItemContainer.getElementsByClassName('cart-row');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i];
      let priceElement = cartRow.getElementsByClassName('cart-price')[0];
      let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      let price = parseFloat(priceElement.innerText.replace('€', ''));
      let quantity = quantityElement.value;
      total = total + (price * quantity);
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total;
}