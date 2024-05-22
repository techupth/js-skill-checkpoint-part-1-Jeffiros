// Question #1
// ให้เขียนโปรแกรมดังนี้
// 1) เพิ่ม To-do ใหม่ชื่อว่า "Walk the dog"
// 2) ให้แก้ไขชื่อ Todo ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
// 3) ลบ To-do สุดท้ายที่อยู่ใน Array ออก
// 4) ให้แสดงข้อความของ To-do ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console
// ผลลัพธ์ควรจะแสดงบนหน้าจอแบบนี้
// To-do id: 4, Go to the gym

const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo[3].todo = "Go to the gym";
// console.log(myTodo);
let deleteObj = myTodo.splice(3, 1);
// console.log(myTodo);
// console.log(deleteItem);

let lastList = (arr) => {
  for (let i in arr) {
    if (i == arr.length - 1) {
      return `To-do id: ${arr[i].id}, ${arr[i].todo}`;
    }
  }
};
// console.log(lastList(myTodo));
console.log(lastList(deleteObj));
