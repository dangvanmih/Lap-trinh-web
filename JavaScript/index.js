// câu lệnh js viết ở đây
// alert('Hello Word');
// khai báo biến
// var myFirstVariable = "Hello World!";
// alert(myFirstVariable)
//khai báo hằng
// const pi = 3.14;
// alert(pi);
//Toán tử
// var soA = 10;
// var soB = 5;
// var ketQua = 0;
//phép cộng
// ketQua = soA + soB;
// phép trừ
// ketQua = soA - soB;
// phép nhân
// ketQua = soA * soB;
// phép chia
// ketQua = soA / soB;
// chia lấy dư
// ketQua = soA % 3;
// Increment
// ketQua = ++soA
//Decrement
// ketQua = --soA
// phép so sánh
// ketQua = soA == soB;
// ketQua = soA !== "10";
// ketQua = soA < soB;
//>=
// ketQua = soA >= soB
//<=
// ketQua = soA <= soB;
//&&
// ketQua = (soA!= 0) && (soB < 10) &&(soA < soB);
//||
// ketQua = (soA != 0) && (soB < 10) || (soA < soB);
//!
// var bien = 0;
// ketQua = !bien
//kiểu dữ liệu
//string
// var ten = "Đặng Văn Minh"
// //number
// var tuoi = 20;
// //boolearn
// var coBeoKhong = false;
// //Đổi dữ liệu
// var year = 2024;
// var namSinh = 0;
// var tuoi = "20";
// namSinh = year - tuoi;
// ;namSinh = year - tuoi;
// // var ten = ten.replace("Đặng", "Nguyễn")
// //Viết thường
// ten = ten.toLowerCase();
// //Viết hoa
// // ten = ten.toUpperCase();
// var thongTinSinhVien = {
//     hoVaTen: "Đặng Văn Minh",
//     tuoi: 20,
//     gioiTinh: true,

//     diaChi: {
//         thanhPho: "Hà Nội",
//         quanHuyen: "Bắc Từ Liêm",
//         phuongXa:"Đức Thắng",
//     }
// }
// // var ketQua = "Xin chào tôi tên là " + thongTinSinhVien.hoVaTen + "tôi năm nay " +thongTinSinhVien.tuoi + "tôi sống ở " + thongTinSinhVien.diaChi.thanhPho;
// // typeof:kiểm tra kiểu dữ liệu
// // length: độ dài chuỗi
// // var ketQua = typeof(thongTinSinhVien.hoVaTen);
// // var ketQua = (thongTinSinhVien.hoVaTen.length);
// // var ketQua = (thongTinSinhVien.hoVaTen)[2]; đánh chỉ số index
// // slice: hàm cắt chuỗi
// var myString = "Hello";
// var ketQua = myString.slice(1,4)
// // replace: hàm thay thế chuỗi'
// // replaceAll: thay thế tất cả các kí tự có trong chuỗi
// var ketQua = (thongTinSinhVien.hoVaTen.replace("Văn" ," "));
// var ketQua = (thongTinSinhVien.hoVaTen.replaceAll("n" ,"L"));
// // toUperCase: viết in hoa
// // toLowerCase: viết in thường
// var ketQua = thongTinSinhVien.hoVaTen.toLowerCase();
// // tìm kiếm ký tự trong chuỗi:
// // includes kiểm tra sự tồn tại
// // indexof kiểm tra vị trí đầu tiên
// var ketQua = thongTinSinhVien.hoVaTen.includes("M");
// var ketQua = thongTinSinhVien.hoVaTen.indexOf("M");
// var ketQua =  thongTinSinhVien.hoVaTen.split('n') //cắt chuỗi
// var ketQua = `tôi năm nay ${tuoi} tuổi`;

// var num ="123.5";
// Number(num) + 1;
// var ketQua = Number(num) + 1;
// // Thuộc tính của Number
// // parseInt() và parseFloat()
// // parseInt: chuyển đổi chuỗi thành số nguyên
// // parseInt: chuyển đổi chuỗi thành số thực
// var ketQua = parseInt(num);
// var ketQua = parseFloat(num);
// // toFixed() để xác định dạng số với số chữ số thập phân nhất định
// var pi = 3.14159;
// var ketQua = pi.toFixed(2); // lấy ra hai số sau dấu phẩy
// // kiểm tra số
// // isNaN();
// // isFinite();
// var ketQua = new Date();//kiểm tra ngày giờ hiện tại
// var ketQua = new Date('2023-09-23'); //kiểm tra ngày giờ của thời điểm bất kì
// var ketQua = new Date().getDate()// lấy ra ngày hiện tại
// //getday lấy ra thứ

// // var nam = 2024
// // ketQua = (nam-thongTinSinhVien.tuoi)
// // var toDay = new Date();
// // var yesTerDay = new Date("2024-09-24");
// // var ketQua = toDay > yesTerDay;
// var arr = [1,2,3,4,5,2];
// var ketQua =arr.lastIndexOf(2) //kiểm tra vị trí của phần tử trong mảng
// var ketQua = Array.isArray(arr)//kiểm tra mảng có tồn tại không
// var ketQua = arr[3] //lấy ra phần tử trong mảng
// arr[5] = 1; // gán giá trị cho phần tử trong mảng
// var ketQua = arr.join("/"); //thay thế kí tự phân cách các phần tử trong mảng
// var ketQua = arr.pop() // xóa phần tử cuối cùng và in ra phần tử đó
// arr.push("Minh");//đẩy thêm một phần tử vào cuối mảng
// arr.reverse();// đảo ngược ví trí trong mảng
// arr.shift();//xóa phần tử đầu tiên của mảng
// arr.unshift("Đặng")//thêm phần tử vào đầu mảng
// var ketQua = arr;

//concat: dùng để nối chuỗi
// var a,b,c,d;
// a = new Array(1,2,3);
// b = "JScript"
// c = new Array (42,"VBscript");
// d = a.concat(b,c)
// var ketQua = d;
// var ketQua = "Chào buổi"
// var time = new Date().getHours();
// if(time > 1 && time <= 6) {
//     ketQua = ketQua + " đêm";
// }
// else if(time > 6 && time <=12){
//     ketQua = ketQua + " Sáng"
// }
// else if(time > 12 && time < 18) {
//     ketQua = ketQua + " Chiều"
// } 
// else {
//     ketQua = ketQua + " Tối"
// }
// var k = 69;
// if(k < 66 ) {
//     ketQua = "Bạn đã tốt nghiệp"
// }
// else if(k < 67) {
//     ketQua = "Bạn là sinh viên năm 4"
// }
// else if(k < 68) {
//     ketQua = "Bạn là sinh viên năm 3"
// }
// else if(k < 69) {
//     ketQua = "Bạn là sinh viên năm 2"
// }
// else if (k < 70) {
//     ketQua = "Bạn là sinh viên năm 1"
// }
// else {
//     ketQua = "Bạn không thuộc diện này"
// }
// nhập vào năm sinh in ra khóa
// var yearBirth = 2004;
// if(yearBirth < 2003)
//     ketQua = "Bạn đã tốt nghiệp"
// else if(yearBirth < 2004)
//     ketQua = "Bạn là sinh viên năm 4"
// else if(yearBirth < 2005)
//     ketQua = "Bạn là sinh viên năm 3"
// else if(yearBirth < 2006)
//     ketQua = "Bạn là sinh viên năm 2"
// else if(yearBirth < 2007)
//     ketQua = "Bạn là sinh viên năm 1"
// else if(yearBirth < 2008)
//     ketQua = "Bạn không thuộc diện này"
// kiểm tra số chẵn hay số lẻ
// var a = 22;
// var soCuoi = so[so.leng -1];

// if(soCuoi%2==0) {
//     ketQua = a + "Đây là số chẵn"
// }
// else {
//     ketQua = a+  "Đây là số lẻ"
// }

// ép kiểu BigInt: thêm n vào cuối toán hạng
// 2000000000000000000000000001n % 2n == 0n ?
// document.write('Số chẵn') : document.write("Số lẻ");
// kiểm tra số lớn nhất
// var soA = 11, soB = 12, soC = 13;
// if(soA > soB && soA > soC)
// {
//     document.write("Số A là max")
// }
// else if(soB > soA && soB > soC)
// {
//     document.write("Số B là số max")
// }
// else {
//     document.write("Số C là max")
// }
// nhập điểm từ 0-10, in ra điểm chữ tương ứng
// var diem = 10;
// if(diem >= 9 && diem <= 10) 
// {
//     document.write("A+")
// }
// else if(diem >=8.5)
// {
//     document.write("A")
// }
// else if(diem >= 8) 
// {
//     document.write("B+")
// }
// else if(diem >= 7)
// {
//     document.write("B")
// }
// else if(diem >=6.5)
// {
//     document.write("C+")
// }
// else if(diem >=5.5)
// {
//     document.write("C")
// }
// else if(diem >=5)
// {
//     document.write("D+")
// }
// else if(diem >= 4)
// {
//     document.write("D")
// }
// else
// {
//     document.write("Trượt")
// }
//SWITCH-CASE
// var d = new Date();
// theDay = d.getDay();
// switch (theDay) {
//     case 5:
//         document.write("Finally Friday");
//         break;
//     case 6:
//         document.write("Super Saturday");
//         break;
//     case 0:
//         document.write("Sleepy Sunday");
//     default:
//         document.write("I'm looking forward to this weekend");
//         break;
// }
// Tháng 1,3,5,7,8,10,12 có 31 ngày
// Tháng 4,6,9,11 có 30 ngày
// tháng 2 có 29 ngày
// var d = new Date()
// theMonth = d.getMonth() + 1;
// document.write("Tháng ",theMonth)
// switch(theMonth) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         document.write(" Có 31 ngày");
//         break;
//     case 4: case 6: case 9: case 11:
//         document.write(" Có 30 ngày")
//         break;
//     case 2: 
//         document.write(" Có 29 ngày")
//     default:
//         document.write(" Không có tháng này")
//         break;
// }
// vòng lặp for
// var arr = ["Nguyễn Thị Diệu An",
//             "Nguyễn Văn An",
//             "Lê Công Thái Anh",
//             "Đỗ Việt Anh"]
// for (var i = 0; i < arr.length; i++) {
//     document.write("Xin chao " + arr[i] + "<br>")
// }

// var n = 25;
// for(var i = 0;i < n; i++) {
//     if(i%2==0)
//         document.write("Các số chẵn là: " + i + "<br>")
// }
// var number = [2,3,6,9,13,27];
// var soChan = [];
// var soLe = [];
// for(var i = 0; i < number.length;i++) {
//     if(number[i] % 2 == 0) {
//         number[i]*=2;
//         soChan.push(number[i]);
//     }
//     else {
//         number[i]*=3;
//         soLe.push(number[i]);
//     }
// }
// document.write("day mang moi : " + number + "<br>")
// document.write("So chan: " + soChan + "<br>")
// document.write("So le: " + soLe)
// var ketqua = [false,true,false,true,false,true,true,true,false]
// var quaMon = 0;
// var truotMon = 0;
// for(let i = 0; i < ketqua.length;i++)
// {
//     if(ketqua[i])
//         quaMon++;
//     else
//         truotMon++;
// }
// document.write("Qua mon: " + quaMon + "<br>" + "Truot mon " + truotMon)
// let stt = 0;
// var dem = 0;
// var ten = ["Nguyễn Thị Diệu An","Phạm Văn An ","Đỗ Việt Anh ","Lê Công Thái Anh ","Nguyễn Bùi Quang Anh ","Nguyễn Lê Minh Anh ","Phạm Quốc Bảo ","Hoàng Thị Tân Bình ","Nguyễn Đức Chính ","Bùi Văn Công ","Vũ Thành Công ","Nguyễn Minh Cường ","Phạm Quốc Cường ","Trần Mạnh Cường ","Phạm Thu Dung ","Trần Mạnh Dũng ","Lê Hoàng Dương ","Nguyễn Đình Dương ","Trần Ngọc Đại ","Trần Mạnh Đạt ","Đào Bá Đức ","Đặng Văn Đức ","Trần Vĩnh Giáp ","Đặng Cao Hậu ","Nguyễn Trung Hiếu ","Trần Mỹ Hoa ","Lê Văn Hồ ","Nguyễn Thế Hơn ","Đoàn Văn Hùng ","Nguyễn Thị Huyền ","Nguyễn Văn Kiên ","Bùi Thế Linh ","Hồ Văn Luân ","Dương Đức Mạnh ","Đậu Bá Mạnh ","Đặng Văn Minh ","Nguyễn Quang Minh ","Vũ Đức Minh ","Tô Hoàng Nam ","Vũ Thị Kim Ngân ","Nguyễn Khả Nguyên ","Đinh Duy Nhất ","Trần Thị Yến Nhi ","Bùi Đức Nhương ","Mai Văn Phong ","Phạm Duy Phong ","Trần Duy Phong ","Nguyễn Huy Phúc ","Nguyễn Như Quỳnh ","Hoàng Minh Thành ","Bùi Trung Thông ","Bùi Việt Tiến ","Nguyễn Đình Trọng ","Phạm Xuân Trường ","Nguyễn Anh Tú ","Hoàng Công Tuấn ","Đỗ Mạnh Tường ","Nguyễn Thái Vinh ","Nguyễn Thế Vinh ","Nguyễn Đình Vượng ","Nguyễn Hà Vy "];
// for(let i = 0;i < ten.length;i++)
// {
//     if(!ten[i].startsWith("Nguyễn"))
//     {
//         ++dem;
//         stt ++;
//         document.write(  stt + " " + ten[i] + "<br>")
//     }
// }
// document.write("So nguoi co ho Nguyen: " + dem)

// var danhSach = [
//     {
//         Ten: "Nguyễn Thị Diệu An",
//         monHoc: {
//             java: {
//                 diemA: 10,
//                 diemB: 6,
//                 diemC: 7,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 5,
//                 diemC: 7,
//                 diemChu: ""
//             },
//         },
//     },
//     {
//         Ten: "Phạm Văn An",
//         monHoc: {
//             java: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//         },

//     },
//     {
//         Ten: "Nguyễn Lê Minh Anh",
//         monHoc: {
//             java: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//         },

//     }
// ];
// var dem = 0;
// for (let i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].Ten.startsWith("Nguyễn")) {
//         var monJava = danhSach[i].monHoc.java;
//         var monDotNet = danhSach[i].monHoc.dotNet;
//         // Tính điểm cho môn Java
//         var diemSo = monJava.diemA * 0.6 + monJava.diemB * 0.3 + monJava.diemC * 0.1
//         if (diemSo >= 9) {
//             monJava.diemChu = "A+";
//         }
//         else if (diemSo >= 8.5 && diemSo < 9) {
//             monJava.diemChu = "A";
//         }
//         else if (diemSo >= 7.5 && diemSo < 8.5) {
//             monJava.diemChu = "B+";
//         }
//         else if (diemSo >= 7 && diemSo < 8) {
//             monJava.diemChu = "B";
//         }
//         else if (diemSo >= 6.5 && diemSo < 7) {
//             monJava.diemChu = "C+";
//         }
//         else if (diemSo >= 5.5 && diemSo < 6.5) {
//             monJava.diemChu = "C"
//         }
//         else if (diemSo >= 5 && diemSo < 5.5) {
//             monJava.diemChu = "D+"
//         }
//         else if (diemSo >= 4 && diemSo < 5) {
//             monJava.diemChu = "D"
//         }
//         // Tính điểm cho môn DotNet
//         var diemSo = monDotNet.diemA * 0.6 + monDotNet.diemB * 0.3 + monDotNet.diemC * 0.1
//         if (diemSo >= 9) {
//             monDotNet.diemChu = "A+";
//         }
//         else if (diemSo >= 8.5 && diemSo < 9) {
//             monDotNet.diemChu = "A";
//         }
//         else if (diemSo >= 7.5 && diemSo < 8.5) {
//             monDotNet.diemChu = "B+";
//         }
//         else if (diemSo >= 7 && diemSo < 8) {
//             monDotNet.diemChu = "B";
//         }
//         else if (diemSo >= 6.5 && diemSo < 7) {
//             monDotNet.diemChu = "C+";
//         }
//         else if (diemSo >= 5.5 && diemSo < 6.5) {
//             monDotNet.diemChu = "C"
//         }
//         else if (diemSo >= 5 && diemSo < 5.5) {
//             monDotNet.diemChu = "D+"
//         }
//         else if (diemSo >= 4 && diemSo < 5) {
//             monDotNet.diemChu = "D"
//         }
//     }
//     console.log(danhSach);
// }
// var so = 0;
// do{
//     document.write(so);
//     so++;
// }
// while(so < 5)


//POPUP BOXES
//Confirm BOX:
// var r = confirm("Press a button")
//     if(r==true){
//         document.write("You pressed OK!")
//     }
//     else{
//         document.write("You pressed Cancel!")
//     }


//Prompt Box:
// prompt("someText","default value");
// var r = prompt("Test","type here");
// document.write(r);


// function tinhToan(number1, number2) {
//     var ketQua = number1 + number2;
//     document.write(ketQua);
// }
// tinhToan(10,3);
// var danhSach = [
//     {
//         Ten: "Nguyễn Thị Diệu An",
//         monHoc: {
//             java: {
//                 diemA: 10,
//                 diemB: 6,
//                 diemC: 7,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 5,
//                 diemC: 7,
//                 diemChu: ""
//             },
//         },
//     },
//     {
//         Ten: "Phạm Văn An",
//         monHoc: {
//             java: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//         },

//     },
//     {
//         Ten: "Nguyễn Lê Minh Anh",
//         monHoc: {
//             java: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//         },

//     }
// ];
// function tinhDiemChu(diemA, diemB, diemC){
//     var diemSo = diemA * 0.6 + diemB * 0.3 + diemC * 0.1;
//     var diemChu = "";
//     if(diemSo >= 8){
//         diemChu = "A"
//     } 
//     else if(diemSo >= 7 && diemSo < 8){
//         diemChu = "B"
//     }
//     else if(diemSo >= 6 && diemSo < 7){
//         diemChu = "C"
//     }
//     else if(diemSo >= 4 && diemSo < 6){
//         diemChu = "D"
//     }
//     else{
//         diemChu = "F"
//     }
//     return diemChu;
// }

// for (var i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].Ten.startsWith("Nguyễn")) {
//         var monJava = danhSach[i].monHoc.java;
//         var monDotNet = danhSach[i].monHoc.dotNet;    
//         monJava.diemChu = tinhDiemChu(monJava.diemA, monJava.diemB, monJava.diemC);
//         monDotNet.diemChu = tinhDiemChu(monDotNet.diemA, monDotNet.diemB, monDotNet.diemC);
//     }
//     console.log(danhSach[i]);
    
// }

//1. Sử dụng POPUP BOXES cho người dùng nhập thông tin vào.
//2. Viết 1 HÀM kiểm tra xem nội dung người nhập vào có phải số không?
//3.1. Nếu là số hiển thị ra màn hình "nội dung vừa nhập là số"
//3.2. Nếu là chữ cái thì hiển thị ra màn hình "nội dung vừa nhập là chữ"
var text;
var result = prompt("Gia trin vua nhap");
{
    function kiemTraSo(text) {
        if(isNaN(text)) {
            document.write("Nội dung vừa nhập là chữ")
        }
        else {
            document.write("Nội dung vừa nhập vào là chữ")
        }
    }

}
kiemTraSo(result);


