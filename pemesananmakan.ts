interface Order {
  id: number
  customer: string
  menu: string
  qty: number
  price: number
}

const orders: Order[] = [
  { id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000 },
  { id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000 },
  { id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000 },
  { id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000 },
];

// 1. Menghitung total harga untuk setiap pesanan
const totalPerOrder = orders.map(order => ({
  ...order,
  total: order.qty * order.price
}));

console.log("NOMOR 1 : ");
console.log("Total per order:", totalPerOrder);
console.log("===============================================");

// 2. Array nama customer + total harga pesanannya
const customerTotal = orders.map(order => ({
  customer: order.customer,
  total: order.qty * order.price
}));

console.log("NOMOR 2");
console.log("Customer + Total:", customerTotal);
console.log("================================================");

// 3. Daftar pesanan dengan qty lebih dari 1
const qtyLebihDariSatu = orders.filter(order => order.qty > 1);

console.log("NOMOR 3");
console.log("Pesanan qty > 1:", qtyLebihDariSatu);  
console.log("===================================================");