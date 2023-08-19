const cartItems = [
  {
    seller: 'John Doe',
    items: [
      {
        description: 'T-shirt',
        quantity: 2,
        days: 3,
        price: 30,
      },
    ],
    total: 180,
  },
  {
    seller: 'John Carter',
    items: [
      {
        description: 'T-shirt',
        quantity: 2,
        days: 3,
        price: 30,
      },
    ],
    total: 180,
  },
];

function openSidebar() {
  document.getElementById('myCart').style.display = 'block';
}

function closeSidebar() {
  document.getElementById('myCart').style.display = 'none';
}

function goToCheckout() {
  window.location.href = './checkout.html';
}

document.getElementById('myCart').innerHTML = `
    <div class="sidebar">
    <div class="sidebar-header">
        <span style="cursor: pointer;" onclick="closeSidebar()">
            <i class="fa fa-angle-left" style="font-size:24px"></i>
        </span>
        <h2>Tienes 2 carritos</h2>
    </div>
    <div class="sidebar-content">
        ${cartItems.map((item) => renderCartItem(item)).join('')}
    </div>
    </div>
`;

function renderCartItem({ seller, items, total }) {
  return `
    <div class="cart-item" onclick="goToCheckout()">
    <i class="fa fa-user" style="font-size: 24px;"></i>
    <div class="cart-item-content">
        <div class="cart-item-header">
            <h3>Arrendatario: ${seller}</h3>
            <span style="cursor: pointer;">
                <i class="fa fa-trash" style="font-size: 24px;"></i>
            </span>
        </div>
        <div class="cart-item-details">
            <h4>Items</h4>
            ${Array.from(items)
              .map(
                (item) => `
            <p>${item.description}</p>
            <p>2 items ${item.price} c/u por ${item.days} días.</p>
            `
              )
              .join('')}
        </div>
        <div class="cart-item-details">
            <h4>Fechas</h4>
            <p>23-26 de agosto</p>
        </div>
        <div class="cart-item-details flex-reverse">
            <h4>Total</h4>
            <p>GTQ${Number(total).toFixed(2)}</p>
        </div>
    </div>
</div>
    `;
}
