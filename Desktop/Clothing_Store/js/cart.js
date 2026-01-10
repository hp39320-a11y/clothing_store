function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id, name, category, price){
    let cart = getCart();
    let Product = cart.find(item => item.id === id);

    if (Product) {
        Product.qty += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            category: category,
            price: price,
            qty: 1
        });
    }

    saveCart(cart);
    alert(name + " added to the cart");
    updateCartCount();
}

function loadCart(){
    let cartItems = document.getElementById("cartItems");
    let grandTotal = 0;
    let cart = getCart();

    if(!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach((item, index) =>{
        let total = item.price * item.qty;
        grandTotal += total;

        cartItems.innerHTML += `
        <tr>
         
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>₹${item.price}</td>
            <td>${item.qty}</td>
            <td>₹${total}</td>
            <td>
                <button onclick="removeItem(${index})">Remove</button>
            </td>
        </tr>`;
    });

    document.getElementById("grandTotal").innerText =
        "Grand Total : ₹" + grandTotal;
}

function removeItem(index){
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCart();
    updateCartCount();
}

function updateCartCount(){
    let cart = getCart();
    let count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelector(".cart-icon").innerText = "🛒 " + count;
}
