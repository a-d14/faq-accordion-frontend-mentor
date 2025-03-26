document.querySelectorAll('.accordion__item-heading').forEach(el => el.addEventListener('click', () => {
    const img = el.querySelector('.accordion__item-heading__action > img');
    el.classList.toggle('open');

    if(el.classList.contains('open')) {
        img.src = 'assets/images/icon-minus.svg';
        img.alt = 'hide information';    
    } else {
        setTimeout(() => {
            img.src = 'assets/images/icon-plus.svg';
            img.alt = 'show information';
        }, 300);
    }
}));