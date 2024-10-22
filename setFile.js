// Tạo một Set để lưu các số nguyên duy nhất
let mySet = new Set();

// Thêm các phần tử vào Set
mySet.add(5);
mySet.add(10);
mySet.add(15);
mySet.add(10); // Phần tử sẽ nhận 1 giá trị duy nhất 
mySet.add(20);
mySet.delete(20);// Xóa phần tử 20


// In các phần tử trong Set
console.log("Các phần tử trong Set:");
mySet.forEach(value => {
    console.log(value);
});

let check = 10;
if(mySet.has(check)){
    console.log(`Có phần tử: ${check}`)
}else{
    console.log(`Error..`)
}

