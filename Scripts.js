let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    alert(productName + " has been added to your cart.");
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart');
    const totalDiv = document.getElementById('total');
    cartDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        cartDiv.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
                <button class="remove-btn" onclick="removeOneFromCart('${item.name}')">Remove One</button>
            </div>
        `;
        total += item.price * item.quantity;
    });
    totalDiv.innerText = total.toFixed(2);
}

function removeOneFromCart(productName) {
    let product = cart.find(item => item.name === productName);
    if (product && product.quantity > 1) {
        product.quantity--;
    } else {
        cart = cart.filter(item => item.name !== productName);
    }
    updateCart();
}

function displayCheckout() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutDiv = document.getElementById('checkout');
    let total = 0;
    checkoutDiv.innerHTML = '';
    cart.forEach(item => {
        checkoutDiv.innerHTML += `
            <div class="checkout-item">
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
            </div>
        `;
        total += item.price * item.quantity;
    });
    checkoutDiv.innerHTML += `<p class="total">Total: $${total.toFixed(2)}</p>`;
}

function completePurchase(event) {
    event.preventDefault();
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('You Have No Items In Your Cart To Purchase');
    } else {
        alert('Thank You For Using Our Online Book Store');
        cart = [];
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith('cart.html')) {
        displayCart();
    } else if (window.location.pathname.endsWith('checkout.html')) {
        displayCheckout();
    }

    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
