var menuIcon = document.querySelector(".menu-icon"); //Dòng này tìm phần tử HTML có class là .menu-icon và gán vào biến menuIcon

var sideBar = document.querySelector(".sidebar"); //Dòng này tìm phần tử HTML có class là .sidebar và gán vào biến sideBar

var container = document.querySelector(".container"); //Dòng này tìm phần tử HTML có class là .container và gán vào biến conTaiNer

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar"); 
    //classList cho phép thêm, xóa, kiểm tra, và chuyển đổi (toggle) các class của một phần tử
    //toggle thực hiện thao tác chuyển đổi (bật/tắt) một class cụ thể. Khi gọi toggle("small-sidebar"):
    //Nếu sidebar đã có class "small-sidebar":toggle sẽ xóa class này khỏi sidebar, nghĩa là sidebar sẽ quay lại kích thước hoặc kiểu hiển thị ban đầu.
    //Nếu sidebar không có class "small-sidebar":toggle sẽ thêm class "small-sidebar" vào sidebar, nghĩa là sidebar sẽ thu gọn hoặc thay đổi kiểu hiển thị theo định nghĩa của class "small-sidebar" trong CSS
    container.classList.toggle("large-container")
}  