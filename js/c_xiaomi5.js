if (localStorage.getItem('goods')) {
    var code = localStorage.getItem('goods')
    console.log(code)
    $(function () {
        $.ajax({
            //请求方式为get
            type: "GET",
            //json文件位置
            url: "./data/f_more.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function (data) {
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                var str = '',
                    str1, str2, str3, str4;


                $.each(data, function (i, n) {
                    if (code == n['code']) {
                        str += '<span code="' + n['code'] + '">' + n['type'] +
                            '</span>|<span code="' + n['code'] + '" >' + n['type'] +
                            '</span>|<span code="' + n['code'] + '">' + n['type'] + '</span>'
                        // console.log(str)
                        str1 = '<h2 code="' + n['code'] + '">' + n['type'] + '</h2>'
                        str2 = '<p class="c_p1" code="' + n['code'] + '">' + n['title'] + '</p>'
                        str3 = '<img code="' + n['code'] + '" src="' + n['imgurl'] + '" class="c_img2 c_imgb" alt="">' +
                            '<img code="' + n['code'] + '" src="' + n['imgurl'] + '" class="c_img2 c_imgb" alt="">' +
                            '<img code="' + n['code'] + '" src="' + n['imgurl'] + '" class="c_img2 c_imgb" alt="">' +
                            '<img code="' + n['code'] + '" src="' + n['imgurl'] + '" class="c_img2 c_imgb" alt="">' +
                            '<img code="' + n['code'] + '" src="' + n['imgurl'] + '" class="c_img2 c_imgb" alt="">' +
                            '<img code="' + n['code'] + '" src="' + n['imgurl'] + '" class="c_img2 c_imgb" alt="">'
            
                        str4 = '<p "' + n['code'] + '" class="c_p3">' + n['Nprice']+'元'+ '</p>'
                        str5 = '<span code="' + n['code'] + '">' + n['type'] + '</span>'
                        str6='<i code="'+n[code]+'">'+n['Nprice']+'元'+ '</i>'
                    }

                })

                $(".c_left").html(str);
                $('.c_text>h2').html(str1)
                $('.c_text .c_p1').html(str2)
                // $('.c_imm').html(str3)
                $('.c_text .c_p3').html(str4)
                $('.c_box5 span').html(str5)
                $('.c_box5 i').html(str6)



                //localStorage -> shop : '{"code":['abc1','abc4','abc6']}'







            }
        });
    });



    // ajax({
    //     url:'./data/c_shuju.json',
    //     type:'get',
    //     data:'',
    //     success:function(data){
    //         var json=JSON.parse(data)
    //         var str=''
    //         for(var i=0;i<json.length;i++){
    //             if(json[i].code==code){
    //                 str+=`<p>已选机型</p>
    //                 <h3>${json[i].type}</h3>
    //                 <img src="${json[i].imgurl}">`
    //             }
    //         }
    //         left_t.innerHTML=str
    //     }
    // })
}

var c_Bspan = document.querySelector('.c_box6 .c_an')
var c_Bi = document.querySelector('.c_box6 i')

c_Bi.onclick = function () {
    c_Bi.style.background = 'rgb(229,57,53)'
}


c_Bspan.onclick = function () {
    console.log(666)
    if (localStorage.getItem("shop")) {
        arrCode = JSON.parse(localStorage.getItem('shop')).code
        num = JSON.parse(localStorage.getItem('shop')).num
    } else {
        var arrCode = []
        var num = []
    }
    if (arrCode.indexOf(code) < 0) {
        arrCode.push(code)
        num.push(1)
        alert('商品添加成功')
    } else {
        var ind = num[arrCode.indexOf(code)]
        num.splice(arrCode.indexOf(code), 1, ind - 0 + 1)
        alert('商品添加成功')

    }
    var Json = JSON.stringify({
        'code': arrCode,
        'num': num
    })
    localStorage.setItem('shop', Json)
    location.href = './b_shopcar.html';


}