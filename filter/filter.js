 // JavaScript để lọc sản phẩm
 document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const products = document.querySelectorAll('.product');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Xóa lớp "active" khỏi tất cả các nút
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Thêm lớp "active" vào nút đã chọn
            this.classList.add('active');

            // Lọc sản phẩm
            products.forEach(product => {
                if (filter === 'all') {
                    product.classList.add('show');
                } else if (product.classList.contains(filter)) {
                    product.classList.add('show');
                } else {
                    product.classList.remove('show');
                }
            });
        });
    });

    // Hiển thị tất cả sản phẩm mặc định
    products.forEach(product => product.classList.add('show'));
});