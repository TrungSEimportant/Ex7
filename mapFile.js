//Là một cấu trúc dữ liệu ánh xạ mỗi key tới một value.
//Key có thể là bất kỳ loại dữ liệu nào (number, string, object), trong khi value có thể là bất kỳ giá trị nào.
// Tạo map để lưu các giá trị 
let myMap = new Map();
// Thêm các phần tử vào Map (Key, value)
myMap.set('Trung',20);
myMap.set('Johnny',40);
myMap.set('Alice',18);
myMap.set('Johnny',40); // Phần tử sẽ nhận 1 giá trị duy nhất 
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