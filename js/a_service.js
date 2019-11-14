var oImgs = document.querySelectorAll('.a_banner img')
var oLis = document.querySelectorAll('.a_anniu li')

var oHov = document.querySelectorAll('.a_hov')
var oIs = document.querySelectorAll('.a_hov .a_tsize')
var oIs2 = document.querySelectorAll('.a_hov .a_fsize')
var a_mright = document.querySelector('.a_mright')


function imgs() {
    var index = 0;

    var timer = setInterval(function () {
        index++;
        for (var i = 0, len = oImgs.length; i < len; i++) {
            oImgs[i].classList.remove('active');
            oLis[i].classList.remove('active');
        }

        if (index >= len) {
            index = 0;
        }
        oImgs[index].classList.add('active');
        oLis[index].classList.add('active');
    }, 2000)

    for (var i = 0, len = oImgs.length; i < len; i++) {
        oLis[i].index = i
        oLis[i].onclick = function () {
            index = this.index;
            for (var i = 0, len = oImgs.length; i < len; i++) {
                oImgs[i].classList.remove('active');
                oLis[i].classList.remove('active');
            }

            this.classList.add('active');
            oImgs[index].classList.add('active')
        }
    }
}
imgs();


//字体颜色改变
for (var i = 0, len = oHov.length; i < len; i++) {
    oHov[i].index = i
    oHov[i].onmouseenter = function () {
        oIs[this.index].style.color = '#fe7a27';
        oIs2[this.index].style.color = '#fe6606';

    }
    oHov[i].onmouseleave = function () {
        oIs[this.index].style.color = 'black';
        oIs2[this.index].style.color = '#959595';

    }
}
function code() {
    a_mright.onmouseenter = function () {
        this.innerHTML = '<img src="./img/a_nav4.png">';
        var img = document.querySelector('.a_mright img');
        img.style.left = 140 + 'px';
        img.style.top = 76 + 'px';
    }
    a_mright.onmouseleave = function () {
        this.innerHTML = '<img src="./img/a_nav3.png"><span class="a_style1">商城官方微信</span>';

    }
}
code();

// ajax 添加数据
$.ajax({
    //获取json返回的数据 并添加至html中
    url: 'data/a_list0.json',
    type: 'get',
    dataType: 'json',
    cache: false,//本地不缓存ajax结果
    success: function (json) {
        var results = ''
        // console.log(json)
        $.each(json, function (index, val) {
            results += ' <ul class="clearfix"> <li>• &nbsp;<a href="">' + val.title1 + '</a></li><li>• &nbsp;<a href="">' + val.title2 + '</a></li><li>• &nbsp;<a href="">' + val.title3 + '</a></li><li>• &nbsp;<a href="">' + val.title4 + '</a></li><li>• &nbsp;<a href="">' + val.title5 + '</a></li><li>• &nbsp;<a href="">' + val.title6 + '</a></li> </ul>  <div class="a_serMore"> 查看更多></div>'
        })
        $('.a_tBox').html(results)


    }
})
var a_tList = document.querySelectorAll('.a_tList ul li')
for (var i = 0, len = a_tList.length; i < len; i++) {
    a_tList[i].index = i
    a_tList[i].onmouseenter = function () {
        $.ajax({
            //获取json返回的数据 并添加至html中
            url: 'data/a_list' + this.index + '.json',
            type: 'get',
            dataType: 'json',
            cache: false,//本地不缓存ajax结果
            success: function (json) {
                var results = ''
                // console.log(json)
                $.each(json, function (index, val) {
                    results += ' <ul class="clearfix"> <li>• &nbsp;<a href="">' + val.title1 + '</a></li><li>• &nbsp;<a href="">' + val.title2 + '</a></li><li>• &nbsp;<a href="">' + val.title3 + '</a></li><li>• &nbsp;<a href="">' + val.title4 + '</a></li><li>• &nbsp;<a href="">' + val.title5 + '</a></li><li>• &nbsp;<a href="">' + val.title6 + '</a></li> </ul>  <div class="a_serMore"> 查看更多></div>'
                })
                $('.a_tBox').html(results)


            }
        })
    }
}

