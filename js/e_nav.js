$(function () { //自执行




    var show_ul = document.querySelector('.show_ul');
    var show_li = document.querySelectorAll('.show-li');
    var show_li1 = document.querySelectorAll('.show-li1');
    var show = document.querySelector('.show');
    // console.log(show_li[0])
    var n = 0


    function ajaxover(n) {
        ajax({
            url: './data/e_homepage.json',
            type: 'get',
            data: '',
            success: function (data) {
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
                        <p>${json.show[i].price}元</p>
                        <div class="new">
                            <p>新品</p>
                        </div>
                    </li>`
                }
                show_ul.innerHTML = str;
            }
        })
    }



    show_li[0].onmouseover = function () {
        n = 0
        ajaxover(n)
    }
    show_li[1].onmouseenter = function () {
        n = 6
        ajaxover(n)
    }
    show_li[2].onmouseenter = function () {
        n = 12
        ajaxover(n)
    }
    show_li[3].onmouseenter = function () {
        n = 18
        ajaxover(n)
    }
    show_li[4].onmouseenter = function () {
        n = 24
        ajaxover(n)
    }
    show_li[5].onmouseenter = function () {
        n = 30
        ajaxover(n)
    }
    show_li[6].onmouseenter = function () {
        n = 36
        ajaxover(n)

        show_li1[0].onmouseenter = function () {
            // console.log(987);
            show.style.display = "none";
        }
    }



    //菜单栏展示
    $('#Nav').on('mouseenter', $('.nav ul .show-li'), function () {
        for (var i = 0; i < $('.nav ul .show-li').length; i++) {
            // console.log($('.nav ul .show-li').length);
            $('.nav ul .show-li').eq(i).hover(function () {
                $('.show').slideDown(200, 'swing', function () { })
            }, function () {
                $('.show').mouseleave(function () {
                    $('.show').slideUp(200, 'swing', function () { })
                });
            });
        }
    });
    $('#Nav').on('mouseleave', $('.nav ul .show-li'), function () {
        $('.show').slideUp(200, 'swing', function () { })
    });



    


    //logo转换
    var newImage = new Image(); //预载入图片 
    var oldImage = $('.logo1').attr('src');
    newImage.src = './img/home_page.jpg';
    $('.logo1').hover(function () { //鼠标滑过图片切换 
        $('.logo1').attr('src', newImage.src);
    },
        function () {
            $('.logo1').attr('src', oldImage);
        });

    $('.ipt input').focus(function () {
        $('.search_hot a').css({ display: 'none' })
    })
    $('.ipt input').blur(function () {
        if ($('.ipt input').val()) {
            $('.search_hot a').css({ display: 'none' })
        } else {
            $('.search_hot a').css({ display: 'inline-block' })
        }
    })


})