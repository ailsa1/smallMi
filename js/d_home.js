$(function () {
    //加载商品列表的数据
    $.ajax({
        url: 'data/d_miTV.json',
        type: 'get',
        datatype: 'json',
        cache: false,
        success: function (json) {
            var results = '';
            var results2 = '';
            var results3 = '';
            var results4 = '';
            var results5 = '';
            var results6 = '';
            var results7 = '';
            var results8 = '';
            var results9 = '';
            var resultsz = '';
            var resultsy = '';
            var resultsb = '';
            var resultsc = '';
            var resultsd = '';
            // console.log(json)
            for(var i = 0; i < 16;i++){
                results +=`<li code="${json[i].code}">
                                <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                                <div class="item-con">
                                    <a href="#"><img src="${json[i].img}"></a>
                                    <div class="con-l">
                                        <h3><a href="#">${json[i].type}</a></h3>
                                        <p>${json[i].title}</p>
                                    </div>
                                    <div class="con-r">
                                        <sup>${json[i].price}</sup>
                                        <span>${json[i].Yprice}</span>
                                    <a href="javascript:;">
                                        <div class="btn">
                                            <p>立即购买</p>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                            </li>`
            }
            for(var i = 16; i < 17;i++){
                results2 +=`<div class="supert_l">
                        <img src="${json[i].imgurl}">
                        </div>
                        <div class="supert_r">
                            <a href="#">
                            <h3>${json[i].type}</h3>
                            </a>
                            <p>${json[i].title}</p>
                            <sup>${json[i].Yprice}</sup><span>${json[i].price}</span>
                        <a href="javascript">
                            <div class="btn">
                            <h6>立即购买</h6>
                            </div>
                        </a>
                        </div>`
                    // console.log(json[i].imgurl)
            }
            // console.log(results2)

             for(var i = 17; i < 23;i++){
                results3 +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
            }
            // console.log(results3)
            for(var i = 23; i < 24;i++){
                results4 +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <a href="#"><img src="${json[i].img}"></a>
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }
            for(var i = 24; i < 32;i++){
                results5 +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <a href="#"><img src="${json[i].img}"></a>
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }
            for(var i = 32; i < 38;i++){
                results6 +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }

            for(var i = 38; i < 44;i++){
                results7 +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <a href="#"><img src="${json[i].img}"></a>
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }
            for(var i = 44; i < 52;i++){
                results8 +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }

            for(var i = 52; i < 53;i++){
                results9 +=`<div class="supert">
                    <div class="supert_l">
                    <img src="${json[i].imgurl}">
                    </div>
                    <div class="supert_r">
                    <a href="#">
                    <h3>${json[i].type}</h3>
                    </a>
                    <p>${json[i].title}</p>
                    <sup>${json[i].Yprice}</sup><span>${json[i].price}</span>
                    <a href="javascript">
                    <div class="btn">
                    <h6>立即购买</h6>
                    </div>
                    </div>
                    </div>`
                    // console.log(json[i].imgurl)
            }

            for(var i = 53; i < 55;i++){
                resultsz +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }

            for(var i = 55; i < 57;i++){
                resultsy +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }

            for(var i = 57; i < 59;i++){
                resultsb +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }
            for(var i = 59; i < 60;i++){
                resultsc +=`<div class="supert">
                    <div class="supert_l">
                    <img src="${json[i].imgurl}">
                    </div>
                    <div class="supert_r">
                    <a href="#">
                    <h3>${json[i].type}</h3>
                    </a>
                    <p>${json[i].title}</p>
                    <sup>${json[i].Yprice}</sup><span>${json[i].price}</span>
                    <a href="javascript">
                    <div class="btn">
                    <h6>立即购买</h6>
                    </div>
                    </div>
                    </div>`
                    console.log(resultsc)
            }
            for(var i = 60; i < 62;i++){
                resultsd +=`<li code="${json[i].code}">
                    <div class="mitu"><img src="${json[i].imgurl}" alt=""></div>
                    <div class="item-con">
                    <div class="con-l">
                    <h3><a href="#">${json[i].type}</a></h3>
                    <p>${json[i].title}</p>
                    </div>
                    <div class="con-r">
                    <sup>${json[i].price}</sup>
                    <a href="javascript">
                    <div class="btn">
                    <p>立即购买</p>
                    </div>
                    </a>
                    </div>
                    </div>
                    </li>`
                    // console.log(json[i].imgurl)
            }

            $('.left ul').eq(0).html(results);
            $('.supert').eq(0).html(results2);

            $('.left ul').eq(1).html(results3);
            //人工智能
            $('.supert').eq(1).html(results4);
            $('.left ul').eq(2).html(results5);
            // //设计天堂
            $('.left ul').eq(3).html(results6);
            //超窄边
            $('.left ul').eq(4).html(results7);
            //金属机身
            $('.left ul').eq(5).html(results8);
            //超薄
            $('.supert').eq(2).html(results9);
            //超薄2
            $('.left ul').eq(6).html(resultsz);
            //投影
            $('.left ul').eq(7).html(resultsy);
            //高清
            $('.left ul').eq(8).html(resultsb);
            //配件
            // console.log($('.supert').eq(3))
            $('.supert').eq(4).html(resultsc);
            //配件2
            $('.left ul').eq(9).html(resultsd);
        }
    });
    //点击立即购买
    $('.left').on('click','.con-r a',function (){
        var code = $(this).parent().parent().parent().attr('code');
        console.log(code)
        console.log($(this).parent().parent().parent());
        localStorage.setItem('goods',code);
        location.href='c_xiaomi.html';
    })
    
})
