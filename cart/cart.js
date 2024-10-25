//--------------- shopcart
 // Giá sản phẩm ban đầu
 const productPrice = 1900000;

 // Cập nhật giỏ hàng
 function updateCart() {
   // Lấy số lượng sản phẩm
   const quantity = parseInt(document.getElementById('quantity').value);

   // Tính tạm tính sản phẩm
   const itemSubtotal = productPrice * quantity;
   document.getElementById('item-subtotal').innerText = itemSubtotal.toLocaleString('vi-VN') + ' ₫';

   // Cập nhật tạm tính
   document.getElementById('cart-subtotal').innerText = itemSubtotal.toLocaleString('vi-VN') + ' ₫';

   // Lấy phương thức vận chuyển
   const shippingCost = parseInt(document.querySelector('input[name="shipping"]:checked').value);

   // Tính tổng tiền
   const total = itemSubtotal + shippingCost;
   document.getElementById('cart-total').innerText = total.toLocaleString('vi-VN') + ' ₫';
 }