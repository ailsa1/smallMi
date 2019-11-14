$(function () {
    $('.b_header').load('./e_head.html')
    $('.b_nav').load('./e_nav.html')
    $('.b_footer').load('./e_foot.html')

    if (localStorage.getItem('li')) {
        var code = localStorage.getItem('li')
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
                        str += `<div class="img_box">
                                    <img src="${data[i].imgurl}" alt="">
                                </div>
                                <h2>${data[i].type}</h2>
                                <p>数量 ×1</p>

                                <div class="rig">
                                    <span>回收预估价</span>
                                    <span>170元</span>
                                </div>`
                    }
                }

                $('.goods ul li').html(str)
            }
        })

    }

    $('.cx_header h6 .shouye').on('click', function () {
        // 跳转首页
        $(this).attr('href', 'e_homepage')
    })

    $('.cx_header h6 .miNew').on('click', function () {
        // 跳转依旧换新第一个页面
        $(this).attr('href', '###')
    })

    $('.liClick').on('click', function () {
        $('.mengban').css('display', 'block')
        $('.box1').css('display', 'block')

    })
    $('.save').on('click', function () {
        $('.mengban').css('display', 'none')
        $('.box1').css('display', 'none')
        var user_name = document.querySelector('.user_name')
        var tel = document.querySelector('.tel')
        var address = document.querySelector('.address')
        var str1 = `<dl>
                        <dt>${user_name.value}</dt>
                        <dd>${tel.value}</dd>
                        <dd>${address.value}</dd>
                    </dl>`
        console.log(str1);
        
        var lii = document.createElement('li')
        lii.classList.add('liMain')
        

    })

    $('.close').on('click', function () {
        $('.mengban').css('display', 'none')
        $('.box1').css('display', 'none')
    })

    $('.bo').on('click',function(){
        alert('提交成功')
    })

})
