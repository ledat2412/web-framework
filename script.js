// Danh sách các sản phẩm mẫu
const products = [
    { name: "Giày thể thao Li-Ning", id: 1 },
    { name: "Áo thun thể thao", id: 2 },
    { name: "Quần shorts tập gym", id: 3 },
    { name: "Áo khoác gió", id: 4 },
    { name: "Balo thể thao", id: 5 },
    { name: "Tất thể thao Li-Ning", id: 6 },
    { name: "suckmydick", id: 7 },
    { name: "phắc du", id: 8 },
    { name: "an ba to com", id: 9 },
];

// Hàm tìm kiếm sản phẩm
function searchProduct() {
    const searchBox = document.getElementById('search-box');
    const searchTerm = searchBox.value.toLowerCase();
    const searchResults = document.getElementById('search-results');

    // Xóa kết quả cũ
    searchResults.innerHTML = '';

    if (searchTerm === '') {
        return; // Nếu không có từ khóa, không hiển thị kết quả
    }

    // Lọc sản phẩm phù hợp
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    // Hiển thị kết quả tìm kiếm
    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('search-item');
        div.textContent = product.name;
        div.onclick = () => {
            alert(`Bạn đã chọn sản phẩm: ${product.name}`);
            // Bạn có thể chuyển hướng tới trang chi tiết sản phẩm hoặc thực hiện hành động khác tại đây
        };
        searchResults.appendChild(div);
    });

    if (filteredProducts.length === 0) {
        searchResults.innerHTML = '<div class="search-item">Không tìm thấy sản phẩm</div>';
    }
}


    // Hàm chỉ cho phép chọn một checkbox
    function onlyOne(checkbox) {
        const checkboxes = document.getElementsByName('product');
        checkboxes.forEach((item) => {
            if (item !== checkbox) item.checked = false;
        });
    }


// -------------------------------------------

{/* <iframe src="htmlA.html"></iframe> */}

