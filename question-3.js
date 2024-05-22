// Question #3
// - สมมุติว่ามี Variable `userPassword` ที่บรรจุรหัสผ่านของผู้ใช้งาน
// - ให้เขียนฟังก์ชัน `checkPasswordStrength` ซึ่งรับ `userPassword` เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้
// น้อยกว่า 6
// “Weak”
// ตั้งแต่ 6 จนถึง 10
// “Medium”
// มากกว่า 10
// “Strong”

// เริ่มเขียนโค้ดตรงนี้
const checkPasswordStrength = (userPassword) => {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
};

let userPassword = "jreffyIsHappy";
console.log(checkPasswordStrength(userPassword));
// let userPassword = "Taylor";
// console.log(checkPasswordStrength(userPassword));
// let userPassword = "JaMes";
// console.log(checkPasswordStrength(userPassword));
