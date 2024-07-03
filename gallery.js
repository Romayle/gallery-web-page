//  js for opening animation

var h1 = document.querySelector(".heading")
var h1text = document.querySelector("#h1")

h1text.classList.add("heading-color")
h1.classList.add("heading-up")


///js for sticky
window.addEventListener("scroll",function(){
    var header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY)
})

// js for changing bg color and font size
imgs = document.querySelectorAll(".imgsect")
pops = document.querySelectorAll(".pop-on-hover")

for (let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("mouseover",function(){
        pops[i].classList.add("active")
    })
    imgs[i].addEventListener("mouseout",function(){
        pops[i].classList.remove("active")
    })
}

btns = document.querySelectorAll(".btn")

    btns[0].addEventListener("click",function(){
        document.querySelector("body").style.backgroundColor = "rgb(95 90 211 / 50%)"
    })

    btns[1].addEventListener("click",function(){
        document.querySelector("body").style.backgroundColor = "rgb(229 218 13 / 86%)"
    })

    btns[2].addEventListener("click",function(){
        document.querySelector("body").style.backgroundColor = "white"
    })


    randombtn = document.querySelector("#random")
    

      
      randombtn.addEventListener("click", function(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
      });


    btns2 = document.querySelectorAll(".btn2")

    btns2[0].addEventListener("click",function(){
        document.querySelector("#hstry1").style.fontSize = "initial"
        document.querySelector("#hstry2").style.fontSize = "initial"
        document.querySelector("h1").style.fontSize = "initial"
    })

    btns2[1].addEventListener("click",function(){
        document.querySelector("#hstry1").style.fontSize = "x-large"
        document.querySelector("#hstry2").style.fontSize = "x-large"
        document.querySelector("h1").style.fontSize = "75px"
    })
    
    btns2[2].addEventListener("click",function(){
        document.querySelector("#hstry1").style.fontSize = "xx-large"
        document.querySelector("#hstry2").style.fontSize = "xx-large"
        document.querySelector("h1").style.fontSize = "95px"
    })