$(function () {
    $.ajax({
        url: 'data/d_Miphones.json',
        type: 'get',
        datatype: 'json',
        cache: false,
        success: function (json) {
            var results = '';
           for(var i=0;i<json.length;i++){
                results += '<li><div class="mitu"  code="'+json[i].code+'"><img src="' + json[i].imgurl + '" alt=""></div><div class="describe"><a href="#"><h3>' + json[i].type + '</h3></a><p>' + json[i].title + '</p><sup>' + json[i].price + '</sup><span>' + json[i].Yprice + '</span><a href="#"><div class="btn"><p>立即购买</p></div></a></div></li>'
           }
            //     // if (json[i] != null) {
            //     results += '<li><div class="mitu"><img src="' + item.imgurl + '" alt=""></div><div class="describe"><a href="#"><h3>' + item.type + '</h3></a><p>' + item.title + '</p><sup>' + item.price + '</sup><span>' + item.Yprice + '</span><a href="#"><div class="btn"><p>立即购买</p></div></a></div></li>'
            //     // }
            // });
            $('.iphone ul').html(results);
        }
    });

    //点击立即购买
    $('.iphone').on('click','.describe a',function (){
        // console.log(666)
        var code = $(this).parent().attr('code');
        console.log(this);
        var codeArr = [];
        codeArr.push(code);
        var jsonStr = JSON.stringify({"code":codeArr});
        localStorage.setItem('describe',jsonStr);
        location.href='c_xiaomi.html';
    })
})         


