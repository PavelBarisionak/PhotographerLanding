burgerbutton = document.querySelector('.slicknav_btn');
togglemenu = document.querySelector('.slicknav_nav');
burgerbutton.addEventListener('click', function(e){
    togglemenu.classList.toggle('_active');
})