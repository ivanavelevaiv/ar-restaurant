const dishData = [
    {
        name: "Wagyu Steak",
        calories: 780,
        protein: 52,
        carbs: 48,
        fat: 42,
        allergens: ["Gluten (wheat/fries)", "Dairy (demi-glace)"]
    },
    {
        name: "Creamy Garlic Shrimp Pasta",
        calories: 320,
        protein: 14,
        carbs: 49,
        fat: 6,
        allergens: ["Shellfish", "Gluten (wheat)", "Dairy"]
    },
    {
        name: "Nova Scotia Lobster Bisque",
        calories: 420,
        protein: 24,
        carbs: 32,
        fat: 22,
        allergens: ["Shellfish", "Dairy"]
    }
];

// Reference maxima used to scale the macro bars to 100%
const MAX_PROTEIN = 100;
const MAX_CARBS   = 120;
const MAX_FAT     = 80;

const overlay      = document.getElementById('nutritionModal');
const modalClose   = document.getElementById('modalClose');
const modalName    = document.getElementById('modalDishName');
const modalCals    = document.getElementById('modalCalories');
const proteinBar   = document.getElementById('proteinBar');
const carbsBar     = document.getElementById('carbsBar');
const fatBar       = document.getElementById('fatBar');
const proteinVal   = document.getElementById('proteinVal');
const carbsVal     = document.getElementById('carbsVal');
const fatVal       = document.getElementById('fatVal');
const allergenList = document.getElementById('allergensList');

function openModal(index) {
    const dish = dishData[index];

    modalName.textContent  = dish.name;
    modalCals.textContent  = dish.calories;
    proteinVal.textContent = dish.protein + 'g';
    carbsVal.textContent   = dish.carbs   + 'g';
    fatVal.textContent     = dish.fat     + 'g';

    // Reset bars so the animation replays each time
    proteinBar.style.width = '0%';
    carbsBar.style.width   = '0%';
    fatBar.style.width     = '0%';

    allergenList.innerHTML = '';
    if (dish.allergens.length === 0) {
        const none = document.createElement('span');
        none.className   = 'allergen-none';
        none.textContent = 'No known allergens';
        allergenList.appendChild(none);
    } else {
        dish.allergens.forEach(name => {
            const tag = document.createElement('span');
            tag.className   = 'allergen-tag';
            tag.textContent = name;
            allergenList.appendChild(tag);
        });
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Trigger bar animations after the modal has faded in
    requestAnimationFrame(() => {
        setTimeout(() => {
            proteinBar.style.width = (dish.protein / MAX_PROTEIN * 100) + '%';
            carbsBar.style.width   = (dish.carbs   / MAX_CARBS   * 100) + '%';
            fatBar.style.width     = (dish.fat      / MAX_FAT     * 100) + '%';
        }, 120);
    });
}

function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Nutrition buttons
document.querySelectorAll('.btn-nutrition').forEach(btn => {
    btn.addEventListener('click', () => openModal(parseInt(btn.dataset.dish, 10)));
});

// Close button
modalClose.addEventListener('click', closeModal);

// Click outside modal content closes it
overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
});

// Escape key closes it
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
        closeOrderPanel();
    }
});

// ── Cart ──────────────────────────────────────────────────────────────────
const cart = {}; // { dishId: { name, price, qty } }

const cartBtn       = document.getElementById('cartBtn');
const cartCount     = document.getElementById('cartCount');
const orderOverlay  = document.getElementById('orderOverlay');
const orderClose    = document.getElementById('orderClose');
const orderItems    = document.getElementById('orderItems');
const orderEmpty    = document.getElementById('orderEmpty');
const orderFooter   = document.getElementById('orderFooter');
const orderTotal    = document.getElementById('orderTotal');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const orderConfirm  = document.getElementById('orderConfirm');

function cartItemCount() {
    return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}

function cartTotalPrice() {
    return Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateBadge() {
    cartCount.textContent = cartItemCount();
    cartCount.classList.remove('bump');
    void cartCount.offsetWidth; // force reflow so animation replays
    cartCount.classList.add('bump');
}

function renderOrderPanel() {
    const entries = Object.entries(cart);
    if (entries.length === 0) {
        orderEmpty.style.display = 'flex';
        orderItems.innerHTML = '';
        orderFooter.style.display = 'none';
    } else {
        orderEmpty.style.display = 'none';
        orderFooter.style.display = '';
        orderTotal.textContent = '$' + cartTotalPrice();
        orderItems.innerHTML = entries.map(([id, item]) => `
            <div class="order-item">
                <div class="order-item-info">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-price">$${item.price} each</div>
                </div>
                <div class="order-qty">
                    <button class="qty-btn" data-id="${id}" data-delta="-1">&#8722;</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" data-id="${id}" data-delta="1">+</button>
                </div>
                <button class="order-item-remove" data-id="${id}" aria-label="Remove ${item.name}">&#10005;</button>
            </div>
        `).join('');
    }
}

function openOrderPanel() {
    renderOrderPanel();
    orderOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderPanel() {
    orderOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(id, name, price) {
    if (cart[id]) {
        cart[id].qty++;
    } else {
        cart[id] = { name, price, qty: 1 };
    }
    updateBadge();
}

// Open panel
cartBtn.addEventListener('click', openOrderPanel);

// Close panel
orderClose.addEventListener('click', closeOrderPanel);

// Click backdrop to close
orderOverlay.addEventListener('click', e => {
    if (e.target === orderOverlay) closeOrderPanel();
});

// Quantity and remove buttons (event delegation)
orderItems.addEventListener('click', e => {
    const qtyBtn    = e.target.closest('.qty-btn');
    const removeBtn = e.target.closest('.order-item-remove');

    if (qtyBtn) {
        const id    = qtyBtn.dataset.id;
        const delta = parseInt(qtyBtn.dataset.delta, 10);
        cart[id].qty += delta;
        if (cart[id].qty <= 0) delete cart[id];
        updateBadge();
        renderOrderPanel();
    }

    if (removeBtn) {
        const id = removeBtn.dataset.id;
        delete cart[id];
        updateBadge();
        renderOrderPanel();
    }
});

// Add to Order buttons
document.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', () => {
        const id    = btn.dataset.dishId;
        const name  = btn.dataset.dishName;
        const price = parseInt(btn.dataset.dishPrice, 10);

        addToCart(id, name, price);

        // "Added ✓" feedback for 1.5 s
        const savedHTML = btn.innerHTML;
        btn.classList.add('added');
        btn.innerHTML = '&#10003; Added';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = savedHTML;
            btn.classList.remove('added');
            btn.disabled = false;
        }, 1500);
    });
});

// Place Order
placeOrderBtn.addEventListener('click', () => {
    orderConfirm.classList.add('active');
    setTimeout(() => {
        Object.keys(cart).forEach(k => delete cart[k]);
        updateBadge();
        orderConfirm.classList.remove('active');
        closeOrderPanel();
    }, 2500);
});
