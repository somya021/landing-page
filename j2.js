// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add a click event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
