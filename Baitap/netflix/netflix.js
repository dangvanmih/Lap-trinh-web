var Dark = true;
function doiCheDo() {
    if(Dark == true){
        document.getElementsByTagName("body")[0].style = " background-color: white;";
        Dark = false;
    } 
    else{
        document.getElementsByTagName("body")[0].style = " background-color: black;";
        Dark =true;
    }
}
// function showVideo(text) {
//     document.getElementById("wallpaper").innerHTML = document.getElementById(text).innerHTML;
// }

