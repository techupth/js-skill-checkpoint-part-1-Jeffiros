// Question #4
// ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
// ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้
// สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

function sortLeastQuantity(inventory, leastSearch) {
  let filterQuantity = (inventory) => {
    return inventory.quantity;
  };
  let quantity = inventory.map(filterQuantity);
  let sortedQuantity = quantity.toSorted((a, b) => a - b);
  leastSearch(sortedQuantity);
}

let leastSearch = (arr) => {
  for (let i in inventory) {
    if (inventory[i].quantity == arr[0]) {
      console.log(
        `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory[i].name} ซึ่งมี ${inventory[i].quantity} ชิ้น`
      );
    }
  }
};

sortLeastQuantity(inventory, leastSearch);
