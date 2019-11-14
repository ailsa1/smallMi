var cUl = document.querySelector('.cx_main ul')
var cLi = document.querySelector('.cx_main ul li')


console.log(6333)
var n = 0
cUl.onclick = function (e) {
        n++
    
    var cli = e.target;
    if(cli==cUl){
        n--
    }else{
    if (n > 1) {
        last.style.borderBottom = null;
    }
    cli.style.borderBottom = '2px solid #FF6700';
    last = cli
}}
// var c_up=document.querySelector('.cx_main3 ul')

// c_up.onclick=function(e){
// var c_pp2= e.target

// if(c_pp2.nodeName=='P'){
//    console.log(c_pp2.innerText)
//    var c_txtP=c_pp2.innerText
//    var c_imgP=c_pp2.previousSibling
//    console.log(c_pp2.previousSibling)

// }else if(c_pp2.nodeName=="IMG"){
//     console.log(c_pp2)
//     console.log(c_pp2.nextSibling.innerText)
//     var c_txtP=c_pp2.nextSibling.innerText
//     var c_imgP=c_pp2

// }else if(c_pp2.nodeName=="LI"){
// console.log(c_pp2.firstChild)
// console.log(c_pp2.lastChild.innerText)
//  var c_txtP=c_pp2.lastChild.innerText
//  var c_imgP=c_pp2.firstChild


// }
// //存储数据：
//  var myObj = {};
// myObj.push
// // myJSON =  JSON.stringify(myObj);
// // localStorage.setItem("testJSON", myJSON);

// }
