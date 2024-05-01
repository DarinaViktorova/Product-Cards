
function getProductCartElement(button) {
    const product = button.closest(".product");
    const cart = product.querySelector(".cart");
    return cart;
  }

  function moveCartCenter(button) {
    const cart = getProductCartElement(button);
    cart.classList.add("active");
  }

  function leaveCartCenter(button) {
    const cart = getProductCartElement(button);
    cart.classList.remove("active");
  }

  function moveCartRight(button) {
    const cart = getProductCartElement(button);

    setTimeout(() => {
      cart.classList.add("right");
      incrementCartCount(cart.closest(".product"));
    }, 50);
  }

  function updateCloseButtonVisibility(product) {
    const circleElement = product.querySelector(".cart-circle");
    const closeButtonContainer = product.querySelector(
      ".close-icon-container"
    );

    if (closeButtonContainer) {
      let count = parseInt(circleElement.textContent);
      closeButtonContainer.style.display = count > 0 ? "block" : "none";
    }
  }

  function incrementCartCount(product) {
    const circleElement = product.querySelector(".cart-circle");
    let count = parseInt(circleElement.textContent);
    circleElement.textContent = count + 1;
    updateCloseButtonVisibility(product);
  }

  function decrementCartCount(event, product) {
    const circleElement = product.querySelector(".cart-circle");
    let count = parseInt(circleElement.textContent);

    if (count > 0) {
      circleElement.textContent = count - 1;
    }

    updateCloseButtonVisibility(product);

    if (count === 1) {
      moveCartLeft(product);
    }
  }

  function moveCartLeft(product) {
    const cart = product.querySelector(".cart");
    cart.classList.remove("right");
    cart.classList.remove("active");
  }