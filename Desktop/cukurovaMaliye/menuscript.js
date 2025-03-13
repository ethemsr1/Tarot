function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.querySelector('.menu-icon');
    const body = document.body;
    const menuItems = menu.querySelectorAll('li');

    menu.classList.toggle('active');
    icon.classList.toggle('open');

    // Menü açıldığında sayfanın kaymasını engelle
    if (menu.classList.contains('active')) {
        body.classList.add('menu-open');

        // Menü öğelerini tek tek sırayla görünür yap
        menuItems.forEach((item, index) => {
            item.style.animation = `fadeSlideIn 0.5s ease-in-out forwards`;
            item.style.animationDelay = `${0.1 * (index + 1)}s`;
        });

    } else {
        body.classList.remove('menu-open');

        // Menü kapanırken animasyonu sıfırla
        menuItems.forEach(item => {
            item.style.animation = '';
        });
    }
}
