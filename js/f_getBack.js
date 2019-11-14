$(function () {
    $('.b_header').load('./e_head.html')
    $('.b_nav').load('./e_nav.html')
    $('.b_footer').load('./e_foot.html')

    if (localStorage.getItem('xu')) {
        var code = localStorage.getItem('xu')
        $.ajax({
            type: 'get',
            url: 'data/c_shuju3.json',
            dataType: 'json',
            cache: false,
            success: function (json) {
                var data = JSON.parse(json)
                var str = ''
                for (var i = 0; i < data.length; i++) {
                    if (data[i].code == code) {
                        str += `<p>已选机型</p>
                                <h2>${data[i].type}</h2>
                                <div class="imgBox">
                                    <img src="${data[i].imgurl}" alt="">
                                </div>
                                <span><a href="#" class="xiugai">修改描述重新估价</a></span>`
                    }
                }

                $('.wrap_left').html(str)
                $('.back').attr('code', code)
            }
        })

    }

    $('.cx_header h6 .shouye').on('click', function () {
        // 跳转首页
        $(this).attr('href', 'e_homepage.html')
    })

    $('.cx_header h6 .miNew').on('click', function () {
        // 跳转以旧换新第一个页面
        $(this).attr('href', 'xiabian.html')
    })

    $('.wrap_left .xiugai').on('click', function () {
        // 跳转以旧换新第二个页面
        $(this).attr('href', 'd_Aftersale.html')
    })

    $('.back').on('click', function () {
        var code = $(this).attr('code')
        localStorage.setItem("li", code)
        $(this).attr('href', 'f_getReturn.html')
    })



})