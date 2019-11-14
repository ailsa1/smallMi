
$(document).ready(function () {
  $(".c_testI").click(function () {
    $(".c_test").slideUp("slow");
  });
});

var c_a = document.getElementById("c_a");
var c_hezi = document.getElementById("c_hezi");
$(".c_box2 p a").click(function () {
  c_a.style.display = 'block'
  c_a.className = "c_a";
  c_hezi.style.display = 'block'

  $(" .c_b2").click(function () {
    c_a.style.display = 'none'
    c_a.className = null;
    c_hezi.style.display = 'none'

  })

  $(" .c_b3").click(function () {
    c_a.style.display = 'none'
    c_a.className = null;
    c_hezi.style.display = 'none'

  })


  // $(function () {
  $(document).bind("click", function (e) {
    //id为menu的是菜单，id为open的是打开菜单的按钮            
    // if($(e.target).closest("c_input").length == 0 && $(e.target).closest("#open").length == 0){
    //点击id为menu之外且id不是不是open，则触发
    if ($(e.target).closest(".c_input").length == 0) {
      open();
    } else {
      close()
    }
  })

  function close() {
    //close menu...
    $("#c_hezi").height(130)
    console.log(000)
    $(".c_d").css("display", "none")

  }

  function open() {
    $("#c_hezi").height(230)
    $(".c_d").css("display", "block")
  }




})

// $("c_input").change(function(){
//   console.log(777)

// })

$(".c_input").on('input', function (e) {
  $(".c_b").css("display", 'block')
  var val = $(this).val()
  $(".c_b").click(function (e) {
    $(".c_input").val(null)
    $(".c_b").css("display", 'none')
  })
  if (!val) {
    $(".c_b").css("display", 'none')
  }
});

$(".c_ip0").click(function () {
  $(".c_hezi").css("display", 'none')
  $(".c_hezi2").css("display", 'block')
  $(".c_b2").css("display", 'none')
  $(".c_b3").css("display", 'block')

  $(".c_ip2").click(function () {
    $(".c_b3").css("display", 'none')
    $(".c_b2").css("display", 'block')

    $(".c_hezi2").css("display", 'none')
    $(".c_hezi").css("display", 'block')

  })

})
var c_hezi2 = document.querySelector(".c_hezi2")

var c_dizhi = document.querySelector(".c_dizhi")
var c_di = document.querySelectorAll('.c_dizhi li')

var c_h2 = document.querySelector(".c_hezi2 h2 ")

// function fn(){
//   console.log(555005)
// for(var i=0;i<c_di.length;i++){
//   c_di[i].onclick=function(){
//     console.log(this)
// var c_dis1=document.querySelector('.dis1')
// c_dis1.innerText=this.innerText
// c_h2.innerHTML='选择城市/地区';
// var c_a=c_dizhi.innerHTML;
//     // var n=false
//     // if(n){
//     //   fn()
//     // }

//     this.innerHTML=this.innerHTML.replace(this.innerText,'')
//     var c_b=this.innerHTML;
//     c_dizhi.innerHTML=c_b;
//     c_dis1.onclick=function(){
//       c_dis1.innerText=null;
//       c_h2.innerHTML='选择省份/自治区'
//     c_dizhi.innerHTML=c_a
//     fn()


//     }
//   }

// }}
// fn()
var num = 0
var c_dis1 = document.querySelector('.dis1')
var c_dis2 = document.querySelector('.dis2')
var c_dis3 = document.querySelector('.dis3')
var c_dis4 = document.querySelector('.dis4')

c_dizhi.onclick = function (e) {
  num++
  if (e.target) {
    var n = e.target;
    e.stopPropagation();
    if (num == 1) {
      c_h2.innerHTML = '选择城市/地区';
      c_dis1.innerText = n.innerText
      var c_a1 = c_dizhi.innerHTML;
     dian(c_a1)


    } else if (num == 2) {
      c_h2.innerHTML = '选择区县';

      c_dis2.innerText = n.innerText
      var c_a2 = c_dizhi.innerHTML;


      dian()

    } else if (num == 3) {
      c_h2.innerHTML = '选择配送区域';

      c_dis3.innerText = n.innerText
      var c_a3 = c_dizhi.innerHTML;


      dian()
    } else {
      c_h2.innerHTML ='.' ;
      c_a.style.display = 'none'
      c_a.className = null;
      c_hezi.style.display = 'none'
      c_dis4.innerText = n.innerText
      var c_a4 = c_dizhi.innerHTML;

      dian()

    }

    function dian() {
    


      n.innerHTML = n.innerHTML.replace(n.innerText, '')
      var c_b = n.innerHTML;
      
      c_dizhi.innerHTML = c_b;



      c_dis1.onclick = function () {
       
        var c_a0 = c_a1;
        c_dis1.innerText = null;
        c_dis2.innerText = null;
        c_dis3.innerText = null;
        c_dis4.innerText = null;
console.log(c_a0)

        wu(c_a0)
      }
      c_dis2.onclick = function () {
        c_a0 = c_a2;
        c_dis2.innerText = null;
        c_dis3.innerText = null;
        c_dis4.innerText = null;


        wu(c_a0)

      }
      c_dis3.onclick = function () {
        c_a0 = c_a3;
        c_dis3.innerText = null;
        c_dis4.innerText = null;
        wu(c_a0)
      }
      c_dis4.onclick = function () {

        c_a0 = c_a4;
        c_dis4.innerText = null;

        wu(c_a0)
       

      }

      function wu(c_a0) {
        c_h2.innerHTML = '选择省份/自治区'
        c_dizhi.innerHTML = c_a0
      }
    }



  }
}