$(document).scroll(function () {
    var c_img = document.querySelector('.c_img')
    var c_text = document.querySelector('.c_text')
    var res = c_text.clientHeight - c_img.clientHeight
    if (Math.ceil(scrollY) <= res) {
        c_img.style.marginTop = Math.ceil(scrollY) + 'px';
    }
    if (scrollY > 200) {
        $("#c_nav2").slideDown("slow");
    } else {
        $("#c_nav2").slideUp("slow");
    }
});


function zero(a){
    if(a<10){
  var  a='0'+a;}
 return a
}
// console.log(new Date())

function shi(b){
  b= b/1000;
  //60*60*24 一天
var day=parseInt(b/(60*60*24));
var   house=parseInt( (b%(60*60*24))/(60*60));
var minutes=parseInt( ((b%(60*60*24))%(60*60))/60);
var second=parseInt( ((b%(60*60*24))%(60*60))%60);
// 距离结束还有3天04时20分10秒
  var res ='距离结束还有'+zero(day)+'天'+zero(house)+'小时'+zero(minutes)+'分'+zero(second)+'秒'
  return res
}
var c_tm=document.querySelector('.tm')

var wTime=new Date('2019.11.16');

setInterval(function(){
var num1=wTime.getTime()-new Date().getTime() 
   c_tm.innerHTML=shi(num1)
},1000)






function myalert(str) {
    var div = '<div class="mark"></div>';
    $('body').append(div)
    $('.mark').html(str);
    $('.mark').show();
    setTimeout(function() {
      $('.mark').hide();
      $('.mark').remove();
    }, 5000)
}

$('.c_box7 i:eq(1)').click(function(){
    myalert('由小米发货')
})

var wenben='由小米(不含小米有品)发货的商品,单笔满150元免运费;'+"</br>"+'由小米有品发货的商品,免运费;'+"</br>"+'由第三方商家发货的商品,免运费;'+"</br>"+'特殊商品需要单独收取运费,具体以实际结算金额为准;优惠券等不能抵扣运费'+"</br>"+'金额;如需无理由退货,用户将承担该商品的退货物流费用;'
$('.c_box7 i:eq(2)').click(function(){
    myalert(wenben)
})



