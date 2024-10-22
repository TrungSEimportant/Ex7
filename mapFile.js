// Tạo map để lưu các giá trị 
let myMap = new Map();
// Thêm các phần tử vào Map (Key, value)
myMap.set('Trung',20);
myMap.set('Johnny',40);
myMap.set('Alice',18);
myMap.set('Johnny',40); // K lặp lại phần tử đã set
myMap.set('Worf',30);

//In các cặp key , value
console.log(`Tên và tuổi:`);
myMap.forEach((value,key) =>{
    console.log(`${key} : ${value}`);
});

let check = "Trung";
if(myMap.has(check)){
    console.log(`Có tên: ${check} trong danh sách`);
}else{
    console.log(`Không có trong danh sách`);
}