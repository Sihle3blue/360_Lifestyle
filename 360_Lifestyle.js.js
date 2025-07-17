// Toggle category (Drinks, Food, etc.)
function toggleCategory(button) {
  const content = button.nextElementSibling;
  const allContents = document.querySelectorAll('.category-content');
  allContents.forEach(c => {
    if (c !== content) c.style.display = 'none';
  });
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Toggle subcategories (Beer, Vodka, etc.)
function toggleSubcategory(button) {
  const content = button.nextElementSibling;
  const allContents = document.querySelectorAll('.subcategory-content');
  allContents.forEach(c => {
    if (c !== content) c.style.display = 'none';
  });
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Redirect to payment page with ticket info
function redirectToPayment(artist, price) {
  const params = new URLSearchParams({ artist, price });
  window.location.href = `payment.html?${params.toString()}`;
}