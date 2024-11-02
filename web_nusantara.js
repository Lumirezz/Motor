// Array untuk menyimpan motor yang dibeli
let purchases = [];

// Fungsi untuk menambahkan motor ke dalam keranjang
function addToCart(CBR250RR, price) {
    purchases.push({ model: CBR250RR, price: price });
    alert(`Anda telah menambahkan ${price} ${CBR250RR} ke keranjang!`);
}
// Fungsi untuk menghitung total harga
function calculateTotal() {
    let total = 0; // atau 10 jika itu memang yang diinginkan
    purchases.forEach(item => {
        total += item.price; // asumsikan 'price' adalah nama properti
    });
    alert(`Total pembelian Anda adalah Rp. ${total.toLocaleString()}`);
}
// Event listener untuk tombol "Beli Sekarang"
document.querySelectorAll('.motorcycle-item button').forEach((button, index) => {
    button.addEventListener('click', function() {
        const motorName = this.parentElement.querySelector('h3').innerText;
        const motorPrice = parseInt(this.parentElement.querySelector('p').innerText.replace(/[^0-9]/g, ''));
        addToCart(motorName, motorPrice);
    });
});

// Fungsi untuk menyimpan pembelian ke localStorage
function savePurchases() {
    localStorage.setItem('purchases', JSON.stringify(purchases));
}

// Fungsi untuk memuat pembelian dari localStorage
function loadPurchases() {
    const savedPurchases = JSON.parse(localStorage.getItem('purchases'));
    if (savedPurchases) {
        purchases = savedPurchases;
    }
}

// Memuat pembelian saat halaman dimuat
window.onload = loadPurchases;