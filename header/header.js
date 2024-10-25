// ================menubar Animation ==================//
document.addEventListener('DOMContentLoaded', () => {
    const menuBar = document.getElementById('menu-bar');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    menuBar.addEventListener('click', () => {
        menuBar.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');// làm mờ tầm nhìn :))) //
        body.classList.toggle('no-scroll');// này để khoá cái con lăn lại //
    });
    overlay.addEventListener('click', () => {
        menuBar.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active'); // ẩn overlay
        body.classList.remove('no-scroll'); // mở cuộn
    });
});

window.onscroll = function() {
    const header = document.querySelector('.header');
    const bannerHeight = document.querySelector('.banner').offsetHeight; // Chiều cao của banner
    const headerHeight = header.offsetHeight; // Chiều cao của header

    // Kiểm tra xem phần dưới của header có qua banner hay không
    if (window.pageYOffset > bannerHeight - headerHeight) {
        header.classList.add('box-shadow'); // Thêm lớp box-shadow khi phần dưới header qua banner
    } else {
        header.classList.remove('box-shadow'); // Xóa lớp box-shadow khi quay lại trên banner
    }
};