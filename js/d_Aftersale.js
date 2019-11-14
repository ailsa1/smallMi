var oRight= document.querySelectorAll('.right ul li span');
var op= document.querySelectorAll('.right ul li p');
var oList = document.querySelectorAll('.one');
var big=document.querySelectorAll('.big1 .one')
var left_t=document.querySelector('.left_t')
var btn=document.querySelector('.btn')
var xu=document.querySelectorAll('.right ul li span')
// var big1 = document.querySelectorAll('.one')
// console.log(big)

if(localStorage.getItem('c_code')){
    var code=localStorage.getItem('c_code')
    ajax({
        url:'./data/c_shuju.json',
        type:'get',
        data:'',
        success:function(data){
            var json=JSON.parse(data)
            var str=''
            for(var i=0;i<json.length;i++){
                if(json[i].code==code){
                    str+=`<p>已选机型</p>
                    <h3>${json[i].type}</h3>
                    <img src="${json[i].imgurl}">`
                }
            }
            left_t.innerHTML=str
        }
    })
}
// 点击
for(var i=0;i<oList.length;i++){
    oList[i].onclick = function(){

    this.offsetParent.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.innerHTML=this.innerHTML
    this.offsetParent.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.style.color='red'
    this.offsetParent.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.setAttribute('xu','123')

    var k=0
    for(var j=0;j<xu.length;j++){
        if(xu[j].getAttribute('xu')){
            k++
        }
    }
        console.log(k)
        if(k==8){
            console.log(666)
            btn.style.background='rgb(245,102,0)'
        }


    this.parentNode.style.display='none'
    this.style.border='1px solid red'
        

        
    }
}

// 修改
for(var i=0;i<op.length;i++){
    op[i].onclick = function(){
    // console.log(666)
    // console.log(666);
    // oRight.innerHTML=this.innerHTML
    // console.log(this.parentNode.parentNode.nextSibling.nextSibling)
    // this.offsetParent.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.innerHTML=this.innerHTML
    this.parentNode.parentNode.nextSibling.nextSibling.style.display='block'
    // this.border.style..display = 'none'
    this.previousSibling.previousSibling.removeAttribute('xu')
    }
}

for(var i=0;i<big.length;i++){
    big[i].onclick = function(){
    // console.log(666);
    // oRight.innerHTML=this.innerHTML
    // console.log(this.parentNode.parentNode.nextSibling.nextSibling)
    // this.offsetParent.previousSibling.previousSibling.firstChild.nextSibling.firstChild.nextSibling.innerHTML=this.innerHTML
    // this.parentNode.parentNode.nextSibling.nextSibling.style.display='block'
    // this.style.display ="block";
    if(this.getAttribute("abc")){
        this.removeAttribute("abc")
        this.firstChild.style.color="gray";
        this.lastChild.style.display='none';
        this.style.borderColor='gray'
    }else{
        this.firstChild.style.color="rgb(245,102,0)";
        this.lastChild.style.display='block';
        this.setAttribute("abc",'1')
        this.style.borderColor='rgb(245,102,0)'
    }
    }
}



















