const burgerMenuContainer = document.getElementById('burgerMenuContainer');
const burgerMenuCloseBtn = document.getElementById('burgerMenuCloseBtn');
const generalContainer = document.getElementById('generalContainer');
const burgerMenuOpenBtn = document.getElementById('burgerMenuOpenBtn');

burgerMenuOpenBtn.addEventListener('click', function() {
    generalContainer.style.display = 'none';
    burgerMenuContainer.style.display = 'block';
});
burgerMenuCloseBtn.addEventListener('click', function() {
    generalContainer.style.display = 'block';
    burgerMenuContainer.style.display = 'none';
});