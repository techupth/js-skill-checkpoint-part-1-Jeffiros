// Question #5
// - ให้เขียนฟังก์ชันชื่อ `calculateTotalPrice` ที่รับ `products` และ `promotionCode` เป็น Argument
// - โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้
// "SALE20"
// ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า
// "SALE50"
// ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า
// ไม่มี
// ไม่ได้รับส่วนลด

// - ถ้า `promotionCode` มีค่าเป็น `""` ฟังก์ชันจะ Return ค่า `85`
// - ถ้า `promotionCode` มีค่าเป็น `"SALE20"` ฟังก์ชันจะ Return ค่า `68`
// - ถ้า `promotionCode` มีค่าเป็น `"SALE50"` ฟังก์ชันจะ Return ค่า `42.5`

const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

let promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = products.reduce((totalAcc, products) => {
    return totalAcc + products.price * products.quantity;
  }, 0);
  // console.log(totalPrice);
  let priceWithSale = 0;
  if (promotionCode == "SALE20") {
    return (priceWithSale = totalPrice * 0.8);
  } else if (promotionCode == "SALE50") {
    return (priceWithSale = totalPrice * 0.5);
  } else if (priceWithSale == "") {
    return totalPrice;
  }
}

console.log(calculateTotalPrice(products, promotionCode));
