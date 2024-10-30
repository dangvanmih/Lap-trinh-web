
//     function showVideo(videoId) {
//     // Lấy phần tử .screen
//     const screen = document.getElementById('screen');
    
//     // Lấy URL của iframe theo ID
//     const videoSrc = document.getElementById(videoId).src;
    
//     // Cập nhật nội dung của .screen với iframe của video
//     screen.innerHTML = `<iframe width="100%" height="460px" src="${videoSrc}" allowfullscreen></iframe>`;
    
//     // Đảm bảo .screen hiển thị
//     screen.style.display = "block";
// }
        function showVideo(text) {
            document.getElementById("screen").innerHTML = document.getElementById(text).innerHTML;
 }
   