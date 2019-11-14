var li_btn = document.querySelectorAll('.li_btn')
var oUl = document.querySelector('.b_content>ul')
var li1 = document.querySelector('.li1')
var li2 = document.querySelector('.li2')
var li3 = document.querySelector('.li3')
var li4 = document.querySelector('.li4')
var li5 = document.querySelector('.li5')
var b_djs = document.querySelector('.b_djs')




$('.b_content>ul').on('click', 'li', function () {

    for (var i = 0; i < $('.em').length; i++) {
        $('.b_content>ul>li')[i].classList.remove('bgcol')
    }

    $(this).addClass('bgcol')
})


ajax({
    url: './data/b_seckill.json',
    type: 'get',
    data: '',
    success: function (data) {
        var json = JSON.parse(data)
        var str = ''
        for (var i = 0, len = 6; i < len; i++) {
            str += `<li class="b_shop">
            <div class="li_left">
                <img src="${json[i].imgurl}" alt="">
            </div>
            <div class="li_right clearfix">
                <div class="li_name">小米蓝牙耳机青春版</div>
                <div class="li_desc">6.5 克轻巧，高清通话音质</div>
                <div class="li_price">29.50元 <i>59元</i></div>
                <div class="li_btn">登入后抢购</div>
            </div>
        </li>`
        }
        $('.b_shang ul').html(str)
        if (getCookie('username')) {
            $('.li_btn').text('立即抢购')
        } else {
            $('.li_btn').text('登入后抢购')
        }
    }
})



var em = document.querySelectorAll('.em')
var date2 = new Date('2019/11/12 10:00')
var dom = em[0]
setInterval(function () {
    var date1 = new Date()
    // var date2=new Date('2019/11/11 22:00')
    var timestamp = (date2 - date1) / 1000
    var h = parseInt(timestamp % (60 * 60 * 24) / 60 / 60)
    var m = parseInt(timestamp % (60 * 60) / 60)
    var s = parseInt(timestamp % 60)
    if (m < 10 && s < 10) {
        var str = '距结束0' + h + ':0' + m + ':0' + s
    } else if (m < 10 && s >= 10) {
        var str = '距结束0' + h + ':0' + m + ':' + s
    } else if (m >= 10 && s < 10) {
        var str = '距结束0' + h + ':' + m + ':0' + s
    } else {
        var str = '距结束0' + h + ':' + m + ':' + s
    }
    if (timestamp < 0) {
        dom.parentElement.parentElement.parentElement.remove()
        var em = document.querySelectorAll('.em')
        dom = em[0]
        dom.parentElement.previousSibling.previousSibling.innerHTML = '抢购中'
        var da = parseInt(dom.parentElement.parentElement.previousSibling.previousSibling.innerHTML)
        date2.setHours(da)
        dom.parentElement.parentElement.parentElement.classList.add('bgcol')

        var self=dom.parentElement.parentElement.parentElement

        ajax({
            url: './data/b_seckill.json',
            type: 'get',
            data: '',
            success: function (data) {
                var json = JSON.parse(data)
                var str = ''
                var len=0;
                if($(self).attr('abc')=='b1'){
                    len=0
                }
                if($(self).attr('abc')=='b2'){
                    len=6
                }
                if($(self).attr('abc')=='b3'){
                    len=12
                }
                if($(self).attr('abc')=='b4'){
                    len=18
                }
                if($(self).attr('abc')=='b5'){
                    len=24
                }
                // console.log($(self).attr('abc'))
                // console.log(len)
                for (var i = len; i < len+6; i++) {
                    str += `<li class="b_shop">
                    <div class="li_left">
                        <img src="${json[i].imgurl}" alt="">
                    </div>
                    <div class="li_right clearfix">
                        <div class="li_name">小米蓝牙耳机青春版</div>
                        <div class="li_desc">6.5 克轻巧，高清通话音质</div>
                        <div class="li_price">29.50元 <i>59元</i></div>
                        <div class="li_btn">登入后抢购</div>
                    </div>
                </li>`
                }
                $('.b_shang ul').html(str)
                if (getCookie('username')) {
                    $('.li_btn').text('立即抢购')
                } else {
                    $('.li_btn').text('登入后抢购')
                }
            }
        })


    } else {
        dom.innerHTML = str
    }

}, 1000)

$('.b_content>ul').on('click', 'li', function () {
    // if($(this).attr('abc')=='b1'){

    // }
    var self=this

    ajax({
        url: './data/b_seckill.json',
        type: 'get',
        data: '',
        success: function (data) {
            var json = JSON.parse(data)
            var str = ''
            var len=0;
            if($(self).attr('abc')=='b1'){
                len=0
            }
            if($(self).attr('abc')=='b2'){
                len=6
            }
            if($(self).attr('abc')=='b3'){
                len=12
            }
            if($(self).attr('abc')=='b4'){
                len=18
            }
            if($(self).attr('abc')=='b5'){
                len=24
            }
            // console.log($(self).attr('abc'))
            // console.log(len)
            for (var i = len; i < len+6; i++) {
                str += `<li class="b_shop">
                <div class="li_left">
                    <img src="${json[i].imgurl}" alt="">
                </div>
                <div class="li_right clearfix">
                    <div class="li_name">小米蓝牙耳机青春版</div>
                    <div class="li_desc">6.5 克轻巧，高清通话音质</div>
                    <div class="li_price">29.50元 <i>59元</i></div>
                    <div class="li_btn">登入后抢购</div>
                </div>
            </li>`
            }
            $('.b_shang ul').html(str)
            if (getCookie('username')) {
                // console.log($('.b_content ul li')[0],self)
                if($('.b_content ul li')[0]==self){
                    $('.li_btn').text('立即抢购')
                }else{
                    $('.li_btn').text('提醒我')
                }
            }else {
                $('.li_btn').text('登入后抢购')
            }
        }
    })
})


