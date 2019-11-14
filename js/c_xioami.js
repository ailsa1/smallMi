var c_icon1 = document.querySelector(".c_img .c_icon1")
var c_icon2 = document.querySelector(".c_img .c_icon2")
var c_imgAll = document.querySelectorAll('.c_img .c_img2')
var c_img = document.querySelector('.c_img')

var c_liAll = document.querySelectorAll('.c_img ul li')


c_icon2.onclick = function () {
    for (var i = 0; i < c_imgAll.length; i++) {
        c_liAll[i].style.background = '#cccccc'
        if (c_imgAll[i].classList.contains('c_imgb')) {
            // console.log(c_imgAll[i]);
            if (i == 5) {
                c_imgAll[5].classList.remove("c_imgb");
                c_imgAll[0].classList.add("c_imgb");
                c_liAll[0].style.background = '#A3A3A3'
                
                break
            }
            $(document).ready(function(){
                $("button").click(function(){
                  $("#div1").fadeToggle(100);
                  $("#div2").fadeToggle("slow");
                  $("#div3").fadeToggle(3000);
                });
              });
        c_imgAll[i].classList.remove("c_imgb");
        c_imgAll[i + 1].classList.add("c_imgb");
        c_liAll[i + 1].style.background = '#A3A3A3'
   
           

            // console.log(c_imgAll[i + 1])
            break

        }
    }

}

c_icon1.onclick = function () {
    for (var i = 0; i < c_imgAll.length; i++) {
        c_liAll[i].style.background = '#cccccc'

        if (c_imgAll[i].classList.contains('c_imgb')) {

            // console.log(c_imgAll[i]);
            if (i == 0) {
                c_imgAll[0].classList.remove("c_imgb");
                c_imgAll[5].classList.add("c_imgb");
                c_liAll[5].style.background = '#A3A3A3'

                break
            }
            c_imgAll[i].classList.remove("c_imgb");
            c_imgAll[i - 1].classList.add("c_imgb");
            // console.log(c_imgAll[i - 1])
            c_liAll[i - 1].style.background = '#A3A3A3'

            break

        }
    }

}

for (var i = 0; i < c_liAll.length; i++) {
    c_liAll[i].index = i

    // console.log(c_liAll.index)
    c_liAll[i].onclick = function () {
        // console.log(this.index)

        for (var j = 0; j < c_imgAll.length; j++) {
            c_liAll[j].style.background = '#cccccc'

            c_imgAll[j].classList.remove("c_imgb");
            // console.log(666)
        }
        c_imgAll[this.index].classList.add("c_imgb");
        this.style.background = '#A3A3A3'


    }

}
function fn(){
 var ti = setInterval(function () {
    for (var i = 0; i < c_imgAll.length; i++) {

        c_liAll[i].style.background = '#cccccc'
        if (c_imgAll[i].classList.contains('c_imgb')) {
            // console.log(c_imgAll[i]);
            if (i == 5) {
                c_imgAll[5].classList.remove("c_imgb");
                c_imgAll[0].classList.add("c_imgb");
                c_liAll[0].style.background = '#A3A3A3'

                break
            }
            c_imgAll[i].classList.remove("c_imgb");

            c_imgAll[i + 1].classList.add("c_imgb");
            c_liAll[i + 1].style.background = '#A3A3A3'
            break
        }
    }
}, 3000)
c_img.onmouseover = function () {
    // console.log(66)
    clearInterval(ti)
}
}
fn()

c_img.onmouseout = function () {
    fn()
}
