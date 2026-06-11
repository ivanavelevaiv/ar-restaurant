const dishData = [
    {
        name: "Black Truffle Risotto",
        calories: 680,
        protein: 18,
        carbs: 89,
        fat: 24,
        allergens: ["Dairy", "Gluten"]
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
    if (e.key === 'Escape') closeModal();
});
