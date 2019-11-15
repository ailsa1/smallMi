$(function() { //自执行

    //判断用户是否登录
    if (localStorage.getItem('user')) { //如果有user缓存，即用户已登录
        $('.denglu').css('display', 'block') //显示登录的状态
        $('.username a').html(localStorage.getItem('user')) //登录页面保存cookie
        $('.login').on('mouseenter', '.denglu', function() {
            $('.dlcg').slideDown(200, 'swing', function() {}) //列表下拉
        });
        $('.login').on('mouseleave', '.denglu', function() {
            $('.dlcg').slideUp(200, 'swing', function() {}) //列表上移
        });
        $('.login').on('click', '.exit', function() { //退出登录
            $('.denglu').css('display', 'none'); //隐藏登录状态
            localStorage.removeItem('user'); //清除cookie
            window.location.reload(); //页面重载->看需求
        })
    } else {
        $('.denglu').css('display', 'none')
    }



    // 购物车数字
    var b_numbers=document.querySelector('.numbers')
    console.log(b_numbers)
    var b_num=JSON.parse(localStorage.getItem('shop')).code.length
    console.log(b_num)
    b_numbers.innerHTML='('+b_num+')'
    


 

    //城市切换
    var oSiteLeft = document.querySelector(".siteLeft");
    var oShow = document.querySelector("#show"); //地图标
    var oShow_text = document.querySelector("#show_text"); //显示地区
    var oList_city = document.querySelector(".list_city"); //城市列表父级
    var oList = document.querySelector('#list')
    var lis = oList.children;

    oSiteLeft.onmouseover = function(e) {

        oList_city.style.display = "block";
        oList.onclick = function(e) {

            var ev = window.event || e;
            var target = ev.target || ev.srcElement;

            if (target.nodeName == 'A') {
                oShow_text.innerHTML = target.innerHTML;
                console.log(target.innerHTML);

                oList_city.style.display = 'none';
            }

            if (target.id != 'show_text' && target.id != 'list') {
                oList_city.style.display = 'none';
            }
        }
    };

    oSiteLeft.onmouseout = function() {

        oList_city.style.display = "none";

    };


    
})