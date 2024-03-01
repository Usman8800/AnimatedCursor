var main = document.querySelector("#main")
var cursor = document.querySelector(".cursor")


main.addEventListener("mousemove", function (dts) {
    cursor.style.left=dts.x+"px"
    cursor.style.top=dts.y+"px"


})