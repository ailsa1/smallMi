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


    var show_ul = document.querySelector('.show_ul');
    var show_li = document.querySelectorAll('.show-li');
    console.log(show_li[0])
    var n = 0


    function ajaxover(n) {
        ajax({
            url: './data/e_homepage.json',
            type: 'get',
            data: '',
            success: function(data) {
                var json = JSON.parse(data)
                var str = ''
                for (var i = n; i < n + 6; i++) {
                    console.log(json.show[i].type)
                    str += `<li class="wzr-li img-click" code="${json.show[i].code}">
                        <div class="img">
                            <a href="javascript:void(0)"><img src="${json.show[i].imgurl}"></a>
                        </div>
                        <div class="phone">
                            <a href="javascript:void(0)">${json.show[i].type}</a>
                        </div>
                        <p>${json.show[i].price}</p>
                        <div class="new">
                            <p>新品</p>
                        </div>
                    </li>`
                }
                show_ul.innerHTML = str;


            }
        })
    }



    show_li[0].onmouseover = function() {
        n = 0
        ajaxover(n)
    }
    show_li[1].onmouseenter = function() {
        n = 6
        ajaxover(n)
    }
    show_li[2].onmouseenter = function() {
        n = 12
        ajaxover(n)
    }
    show_li[3].onmouseenter = function() {
        n = 18
        ajaxover(n)
    }
    show_li[4].onmouseenter = function() {
        n = 24
        ajaxover(n)
    }
    show_li[5].onmouseenter = function() {
        n = 30
        ajaxover(n)
    }
    show_li[6].onmouseenter = function() {
        n = 36
        ajaxover(n)
    }



    //菜单栏展示
    $('#Nav').on('mouseenter', $('.nav ul .show-li'), function() {
        for (var i = 0; i < $('.nav ul .show-li').length; i++) {
            // console.log($('.nav ul .show-li').length);
            $('.nav ul .show-li').eq(i).hover(function() {
                $('.show').slideDown(200, 'swing', function() {})
            }, function() {
                $('.show').mouseleave(function() {
                    $('.show').slideUp(200, 'swing', function() {})
                });
            });
        }
    });
    $('#Nav').on('mouseleave', $('.nav ul .show-li'), function() {
        $('.show').slideUp(200, 'swing', function() {})
    });


    // $('.show-li ').hover(function() {
    //     var index = $(this).index(); //索引值
    //     // $(this).addClass('active').siblings().removeClass('active');
    //     $('.show ul').eq(index).css('display', 'block').siblings().css('display', 'none');
    // })

    //二级菜单
    $('.b_menu>ul>li').hover(function() {
            $(this).children().eq(2).css('display', 'block');
        }, function() {
            $(this).children().eq(2).css('display', 'none');
        })
        //右侧固定栏
    window.onscroll = function() {
            var toTop = document.querySelector('.suspend_toTop')
            var scTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scTop >= 900) {
                toTop.style.display = "block";
            } else {
                toTop.style.display = "none";
            }
            toTop.onclick = function() {
                $(window).scrollTop('0');
            }
        }
        //logo转换
    var newImage = new Image(); //预载入图片 
    var oldImage = $('.logo1').attr('src');
    newImage.src = './img/home_page.jpg';
    $('.logo1').hover(function() { //鼠标滑过图片切换 
            $('.logo1').attr('src', newImage.src);
        },
        function() {
            $('.logo1').attr('src', oldImage);
        });

    //轮播图
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        autoplay: true,
        fadeEffect: {
            crossFade: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

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


    //选项卡切换
    //家电
    $('.jiadian_list').hover(function() {
        $('.tab1').css('display', 'block');
        $('.tab2').css('display', 'none');
    });
    $('.jiadian_list1').hover(function() {
        $('.tab2').css('display', 'block');
        $('.tab1').css('display', 'none');
    });
    //智能家居
    $('.jj1').hover(function() {
        $('.tab3').css('display', 'block');
        $('.tab4').css('display', 'none');
    });
    $('.jj2').hover(function() {
        $('.tab4').css('display', 'block');
        $('.tab3').css('display', 'none');
    });
    //搭配
    $('.dp1').hover(function() {
        $('.tab5').css('display', 'block');
        $('.tab6').css('display', 'none');
    });
    $('.dp2').hover(function() {
        $('.tab6').css('display', 'block');
        $('.tab5').css('display', 'none');
    });
    //配件
    $('.pj1').hover(function() {
        $('.tab7').css('display', 'block');
        $('.tab8').css('display', 'none');
    });
    $('.pj2').hover(function() {
        $('.tab8').css('display', 'block');
        $('.tab7').css('display', 'none');
    });
    //周边
    $('.zb1').hover(function() {
        $('.tab9').css('display', 'block');
        $('.tab10').css('display', 'none');
    });
    $('.zb2').hover(function() {
        $('.tab10').css('display', 'block');
        $('.tab9').css('display', 'none');
    });

    //闪购点击切换
    var i = 0;
    var len = $('.sgtwo2_li').length / 4;
    $('.btn_r').click(function() { //点击右键
        // console.log(555);
        i++;

        if (i <= len) {
            $('.btn_l').css('color', '#323232');
            $('.sgtwo2_li').css("left", (-(i * 992)) + 'px')
        }
        if (i >= len) {
            i = len - 1;
            $('.sgtwo2_li').css("left", (-(i * 992)) + 'px');
            $('.btn_r').css('color', '#e0e0e0');
        }
    })

    $('.btn_l').click(function() { //点击左键
        // console.log(777);

        if (i > 0) {
            $('.btn_r').css('color', '#323232');
            i--;
            $('.sgtwo2_li').css("left", (-(i * 992)) + 'px')
        } else {
            $('.btn_l').css('color', '#e0e0e0');
        }

    })


    // 倒计时
    setInterval(function() {

        var countdown1 = document.querySelectorAll('.countdown1');
        var date1 = new Date();
        var date2 = new Date('2019/11/15 24:00');
        var sjc = (date2 - date1) / 1000;
        var h = parseInt(sjc / 60 / 60);
        var m = parseInt(sjc % (60 * 60) / 60);
        var s = parseInt(sjc % 60);


        countdown1[0].innerHTML = h < 10 ? "0" + h : h;
        countdown1[1].innerHTML = m < 10 ? "0" + m : m;
        countdown1[2].innerHTML = s < 10 ? "0" + s : s;

    }, 1000)



})