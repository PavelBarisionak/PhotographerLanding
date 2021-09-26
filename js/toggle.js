burgerbutton = document.querySelector('.slicknav_btn');
console.log(burgerbutton);
togglemenu = document.querySelector('.slicknav_nav');
console.log(togglemenu);
burgerbutton.addEventListener('click', function(e){
    togglemenu.classList.toggle('_active');
})