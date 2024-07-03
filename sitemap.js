var h1 = document.querySelector(".heading")
var h1text = document.querySelector("#h1")



h1text.classList.add("heading-color")
h1.classList.add("heading-up")

///js for sticky
window.addEventListener("scroll",function(){
    var header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY)
})
