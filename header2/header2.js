// script.js
window.onscroll = function () {
    const header = document.querySelector('.headermove');
    const banner = document.querySelector('.banner');
    const bannerHeight = banner.offsetHeight;

    // Tính toán vị trí cuộn cần thiết (30% chiều cao banner)
    const scrollPositionToShowHeader = bannerHeight * 0.58;

    // Kiểm tra nếu vị trí cuộn đã qua 30% chiều cao banner
    if (window.pageYOffset > scrollPositionToShowHeader) {
        header.classList.add('show-header'); // Thêm lớp để hiển thị header
    } else {
        header.classList.remove('show-header'); // Xóa lớp để ẩn header
    }
};

// Tạo hình tròn cho con trỏ
const cursorCircle = document.createElement('div');
cursorCircle.className = 'cursor-circle';
document.body.appendChild(cursorCircle);

// Di chuyển hình tròn theo chuột và thay đổi màu sắc khi di chuyển trong banner
const banner = document.querySelector('.banner');

banner.addEventListener('mousemove', (e) => {
    const bannerRect = banner.getBoundingClientRect();
    const bannerWidth = bannerRect.width;
    const bannerLeft = bannerRect.left;

    // Cập nhật vị trí của hình tròn
    cursorCircle.style.left = `${e.pageX}px`;
    cursorCircle.style.top = `${e.pageY}px`;
    cursorCircle.style.display = 'block'; // Luôn hiện hình tròn

    // Kiểm tra vị trí của chuột để xác định nửa trái hay nửa phải
    if (e.clientX > bannerLeft + bannerWidth / 2) {
        cursorCircle.style.backgroundColor = 'red'; // Đổi màu thành đỏ
    } else {
        cursorCircle.style.backgroundColor = 'green'; // Đổi màu thành xanh lá
    }
});

// Khi ra khỏi banner, vẫn giữ nguyên màu nhưng không đổi vị trí
banner.addEventListener('mouseleave', () => {
    cursorCircle.style.display = 'none'; // Ẩn hình tròn khi ra khỏi banner
});

