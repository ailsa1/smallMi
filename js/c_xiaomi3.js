var c_div3 = document.querySelectorAll('.c_box3 div')
var c_i3 = document.querySelectorAll('.c_box3 i')
var c_s3 = document.querySelectorAll('.c_box3 span')

var c_div4 = document.querySelectorAll('.c_box4  div')
var c_b5 = document.querySelector('.c_box5 span b')
var c_strong5 = document.querySelector('.c_box5 span strong')
var c_i5 = document.querySelector('.c_box5 i')
var c_box3 = document.querySelector('.c_box3')
for (var i = 0; i < c_div3.length; i++) {
    c_div3[i].index = i;
    c_div3[i].onclick = function () {
        for (var j = 0; j < c_div3.length; j++) {
            c_div3[j].classList.remove('red');
            c_i3[j].classList.remove('hui');
        }
        c_i3[this.index].classList.add('hui')
        this.classList.add('red')
        if (this.index == 1) {
            c_b5.innerHTML = c_s3[this.index].innerHTML
            c_i5.innerHTML =c_i3[this.index].innerHTML

        } else if (this.index == 0) {
            c_b5.innerHTML = c_s3[this.index].innerHTML
            c_i5.innerHTML =c_i3[this.index].innerHTML
            
        } else {
           
            c_b5.innerHTML =c_s3[this.index].innerHTML
            // c_i5.innerHTML = '2799元'
            c_i5.innerHTML =c_i3[this.index].innerHTML
            console.log(this.innerHTML)

        }
    }
    c_div3[i].onmousedown = function () {
        // 这段代码表示阴影的水平位置为右移10px； 垂直位置为下移10px； 第三个10px代表阴影的模糊程度blur，我们也将它设置成20px； 第四个10px是阴影半径的意思；最后一个规定了阴影的颜色为rgba(255, 255, 0, 0.5)。 
        // box-shadow:  2px 0px 2px 2px #E0E0E0 inset;
        // box-shadow:0px 15px 10px -15px #E0E0E0 inset;
        for (var j = 0; j < c_div3.length; j++) {
            c_div3[j].style.boxShadow = null
        }
        this.style.boxShadow = '0px 15px 10px -17px #B0B0B0 inset'

        this.onmouseup = function () {
            this.style.boxShadow = null

        }
    }
    

}

for (var i = 0; i < c_div4.length; i++) {
    c_div4[i].index = i;

    c_div4[i].onclick = function () {
        // c_div4[i].classList.remove('red');
        for (var j = 0; j < c_div4.length; j++) {
            c_div4[j].classList.remove('red');
        }
        this.classList.add('red')
        if (this.index == 1) {
            c_strong5.innerHTML = ' 暗夜魅影 '

        } else if (this.index == 0) {


            c_strong5.innerHTML = ' 魔法绿镜 '
        } else {
            c_strong5.innerHTML = ' 冰雪极光 '

        }

    }
    c_div4[i].onmousedown = function () {
        // 这段代码表示阴影的水平位置为右移10px； 垂直位置为下移10px； 第三个10px代表阴影的模糊程度blur，我们也将它设置成20px； 第四个10px是阴影半径的意思；最后一个规定了阴影的颜色为rgba(255, 255, 0, 0.5)。 
        // box-shadow:  2px 0px 2px 2px #E0E0E0 inset;
        // box-shadow:0px 15px 10px -15px #E0E0E0 inset;
        for (var j = 0; j < c_div4.length; j++) {
            c_div4[j].style.boxShadow = null
        }
        this.style.boxShadow = '0px 15px 10px -17px #B0B0B0 inset'
        
        this.onmouseup = function () {
            this.style.boxShadow = null

        }
    }

}


var c_div41=document.querySelectorAll('.c_box41 div');
for(var i=0;i<c_div41.length;i++){
c_div41[i].onclick=function(){

    for(var j=0;j<c_div41.length;j++){
        c_div41[j].className=null    
    }
   this.className='red'
}}


var c_div42=document.querySelectorAll('.c_b42');
var c_inp42=document.querySelectorAll('.input1');
var c_in42=document.querySelectorAll('.input2');
var x=0

for(var i=0;i<c_div42.length;i++){
    c_div42[i].index=i
c_div42[i].onclick=function(){
x++
// if(){
    for(var j=0;j<c_div42.length;j++){
        c_div42[j].classList.remove('c_fu')   
        
   c_inp42[j].style.background='white'
   c_in42[j].style.background='white'
    }
   c_inp42[this.index].style.background='#FF6700'
   c_in42[this.index].style.background='#FF6700'


this.classList.add('c_fu')
}
}



