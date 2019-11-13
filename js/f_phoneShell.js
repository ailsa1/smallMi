$(function () {

    $.ajax({
        type: 'get',
        url: 'data/f_phoneShell.json',
        dataType: 'json',
        cache: 'false',
        success: function (json) {
            function getData(name) {
                var str = '';
                $.each(name, function (index, value) {
                    // console.log(value);
                    str += `<div class="item">
                                <div class="imgBox">
                                    <a href="#"><img src="" alt=""></a>  
                                </div>
                                <a href="#"><h2></h2></a>
                                <div class="goodsPrice">
                                    <span>${value.Nprice}元</span>
                                    <span>${value.Yprice}</span>
                                </div>
                                <div class="goodsColor">
                                    <ul>
    
                                    </ul>
                                </div>
                                <div class="flags">
                                    <span><img src="${value.pic}" alt="">${value.text}</span>
                                </div>
                            </div>`
                    $('.goodsShow').html(str);
                })
                var ulContent = document.querySelectorAll('.goodsColor ul')
                var imgUrl = document.querySelectorAll('.imgBox a img')
                var types = document.querySelectorAll('.item a h2 ')
                var spans = document.querySelectorAll('.flags span')
                var icons = document.querySelectorAll('.flags span img')

                // console.log(icons[0].src);
                var str = ''
                for (var i = 0; i < $('.goodsColor ul').length; i++) {

                    for (var j = 0; j < name[i].goodsColor.length; j++) {

                        str += `<li class="list" type="${name[i].goodsColor[j].type}"><img src="${name[i].goodsColor[j].color}" alt=""></li>`
                    }
                    ulContent[i].innerHTML = str
                    str = ''
                    imgUrl[i].src = name[i].goodsColor[0].color
                    types[i].setAttribute('code',name[i].code)
                    imgUrl[i].setAttribute('code',name[i].code)
                    types[i].innerHTML = name[i].goodsColor[0].type
                    if (!spans[i].innerText && icons[i].src) {
                        spans[i].style.backgroundColor = 'white'
                    }
                }
            }

            function goodsMouseColor() {
                // 鼠标滑过选择颜色
                $('.item').on('mouseenter', ' ul li', function () {
                    // console.log(999);
                    // siblings获取匹配元素集合中所有元素的同辈元素
                    // 滑过边框颜色改变，之前滑过的比那矿恢复颜色
                    $(this).css('border-color', '#ff6700').siblings().css('border-color', '#e0e0e0')


                    // 判断如果是只有一个商品颜色 在鼠标离开后 边框颜色恢复之前的
                    if (this.parentNode.children.length == 1) {
                        $(this).on('mouseleave', function () {
                            $(this).css('border-color', '#e0e0e0')
                        })
                    }

                    // 大图跟随小图的颜色文字变化
                    this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.src = $(this).children().attr('src')
                    
                    // 当前图片的图片src地址
                    // console.log($(this).children().attr('src'));


                    
                    this.parentNode.parentNode.parentNode.children[1].firstElementChild.innerHTML = this.getAttribute('type')
                })
            }

            getData(json.page1)
            goodsMouseColor()

            var spans = document.querySelectorAll('.pagenav span')
            var goodsShow = document.querySelector('.goodsShow')
            function pageScape(i, page) {
                spans[i].onclick = function () {
                    goodsShow.innerHTML = ' '
                    // console.log(99);
                    getData(page)
                    goodsMouseColor()
                    $(document).scrollTop(0)
                }
            }
            pageScape(0, json.page1)
            pageScape(1, json.page1)
            pageScape(2, json.page2)
            pageScape(3, json.page2)



            // 价格升序排列
            // console.log(json.page1);
            // console.log(json.page2);
            var priceArr = []
            for (var i = 0; i < json.page1.length; i++) {
                priceArr.push(json.page1[i])
            }
            for (var j = 0; j < json.page2.length; j++) {
                priceArr.push(json.page2[j])
            }
            priceArr.sort(function (a, b) {
                return a.Nprice - b.Nprice
            })


            function salesPage(start, end) {
                var str1 = ''
                goodsShow.innerHTML = ' '
                for (var i = start; i < end; i++) {
                    str1 += `<div class="item">
                            <div class="imgBox">
                                <a href="#"><img src="" alt=""></a>  
                            </div>
                            <a href="#"><h2></h2></a>
                            <div class="goodsPrice">
                                <span>${priceArr[i].Nprice}元</span>
                                <span>${priceArr[i].Yprice}</span>
                            </div>
                            <div class="goodsColor">
                                <ul>

                                </ul>
                            </div>
                            <div class="flags">
                                <span><img src="${priceArr[i].pic}" alt="">${priceArr[i].text}</span>
                            </div>
                        </div>`
                    $('.goodsShow').html(str1);
                }
            }

            function fn() {
                var str2 = ''
                var ulContent = document.querySelectorAll('.goodsColor ul')
                var imgUrl = document.querySelectorAll('.imgBox a img')
                var types = document.querySelectorAll('.item a h2')
                var spans = document.querySelectorAll('.flags span')
                var icons = document.querySelectorAll('.flags span img')
                for (var i = 0; i < $('.goodsColor ul').length; i++) {

                    for (var j = 0; j < priceArr[i].goodsColor.length; j++) {

                        str2 += `<li class="list" type="${priceArr[i].goodsColor[j].type}"><img src="${priceArr[i].goodsColor[j].color}" alt=""></li>`
                    }
                    ulContent[i].innerHTML = str2
                    str2 = ''
                    imgUrl[i].src = priceArr[i].goodsColor[0].color
                    types[i].setAttribute('code',priceArr[i].code)
                    imgUrl[i].setAttribute('code',priceArr[i].code)
                    types[i].innerHTML = priceArr[i].goodsColor[0].type
                    if (!spans[i].innerText && icons[i].src) {
                        spans[i].style.backgroundColor = 'white'
                    }
                }
                goodsMouseColor()
            }
            // 点击价格升序
            $('.sale span').on('click', function () {
                $(this).addClass('activeColor')
                $(this).parent().siblings().children().removeClass('activeColor')

                salesPage(0, 20)
                fn()
                function pageScape(i, page, pagege) {
                    spans[i].onclick = function () {
                        goodsShow.innerHTML = ' '
                        // console.log(99);
                        salesPage(page, pagege)
                        fn()
                        goodsMouseColor()
                        $(document).scrollTop(0)
                    }
                }
                pageScape(0, 0, 20)
                pageScape(1, 0, 20)
                pageScape(2, 20, 38)
                pageScape(3, 20, 38)

                $('.oneLi span').on('click', function () {
                    $(this).addClass('activeColor')
                    $(this).parent().siblings().children().removeClass('activeColor')
                    // $('.oneLi span').addClass('activeColor')
                    // $('.oneLi span').parent().siblings().children().removeClass('activeColor')
                    // console.log(99);
                    getData(json.page1)
                    goodsMouseColor()

                    var spans = document.querySelectorAll('.pagenav span')
                    var goodsShow = document.querySelector('.goodsShow')
                    function pageScape(i, page) {
                        spans[i].onclick = function () {
                            goodsShow.innerHTML = ' '
                            // console.log(99);
                            getData(page)
                            goodsMouseColor()
                            $(document).scrollTop(0)
                        }
                    }
                    pageScape(0, json.page1)
                    pageScape(1, json.page1)
                    pageScape(2, json.page2)
                    pageScape(3, json.page2)
                })

            })

            // 点击全部
            $('.all').on('click', function () {
                // console.log(999);

                $('.all a ').attr('href', 'f_phoneShell.html')
                // $('.sale span').on('click', function () {
                //     $(this).addClass('activeColor')
                //     $(this).parent().siblings().children().removeClass('activeColor')
                //     $('.oneLi span').addClass('activeColor')
                //     $('.oneLi span').parent().siblings().children().removeClass('activeColor')
                // })
            })

            // 点击配件
            $('.peijian a').on('click', function () {
                goodsShow.innerHTML = ' '
                $('.pagenav').css('display', 'block')
                $(this).addClass('activeColor')
                $(this).parent().siblings().children().removeClass('activeColor')
                $('.oneLi span').addClass('activeColor')
                $('.oneLi span').parent().siblings().children().removeClass('activeColor')
                // console.log(999);
                var peijianArr = []
                $.each(json.page1, function (index, value) {
                    peijianArr.push(value)
                })
                $.each(json.page2, function (index, value) {
                    peijianArr.push(value)
                })
                // console.log(peijianArr);
                var peijianArr1 = []
                for (var i = 0; i < peijianArr.length; i++) {
                    // console.log(peijianArr[i].class);
                    if (peijianArr[i].class == '配件') {
                        peijianArr1.push(peijianArr[i])
                    }
                }
                // console.log(peijianArr1);
                function peijian() {
                    var str = ''
                    goodsShow.innerHTML = ' '
                    for (var i = 0; i < peijianArr1.length; i++) {

                        str += `<div class="item">
                                <div class="imgBox">
                                    <a href="#"><img src="" alt=""></a>  
                                </div>
                                <a href="#"><h2></h2></a>
                                <div class="goodsPrice">
                                    <span>${peijianArr1[i].Nprice}元</span>
                                    <span>${peijianArr1[i].Yprice}</span>
                                </div>
                                <div class="goodsColor">
                                    <ul>
    
                                    </ul>
                                </div>
                                <div class="flags">
                                    <span><img src="${peijianArr1[i].pic}" alt="">${peijianArr1[i].text}</span>
                                </div>
                            </div>`
                        $('.goodsShow').html(str);
                    }
                    function fn() {
                        var str2 = ''
                        var ulContent = document.querySelectorAll('.goodsColor ul')
                        var imgUrl = document.querySelectorAll('.imgBox a img')
                        var types = document.querySelectorAll('.item a h2')
                        var spans = document.querySelectorAll('.flags span')
                        var icons = document.querySelectorAll('.flags span img')
                        for (var i = 0; i < $('.goodsColor ul').length; i++) {

                            for (var j = 0; j < peijianArr1[i].goodsColor.length; j++) {

                                str2 += `<li class="list" type="${peijianArr1[i].goodsColor[j].type}"><img src="${peijianArr1[i].goodsColor[j].color}" alt=""></li>`
                            }
                            ulContent[i].innerHTML = str2
                            str2 = ''
                            imgUrl[i].src = peijianArr1[i].goodsColor[0].color
                            types[i].setAttribute('code',peijianArr1[i].code)
                            imgUrl[i].setAttribute('code',peijianArr1[i].code)
                            types[i].innerHTML = peijianArr1[i].goodsColor[0].type
                            if (!spans[i].innerText && icons[i].src) {
                                spans[i].style.backgroundColor = 'white'
                            }
                        }
                        goodsMouseColor()
                    }
                    fn()
                }
                peijian()
                if ($('.goodsColor ul li').length <= 20) {
                    $('.pagenav').css('display', 'none')
                }
                peijianArr1.sort(function (a, b) {
                    return a.Nprice - b.Nprice
                })
                $('.sale span').on('click', function () {

                    // console.log(peijianArr1);
                    peijian()
                    $(this).addClass('activeColor')
                    $(this).parent().siblings().children().removeClass('activeColor')

                    $('.oneLi span').on('click', function () {
                        $(this).addClass('activeColor')
                        $(this).parent().siblings().children().removeClass('activeColor')
                        // console.log(000);
                        var peijianArr = []
                        $.each(json.page1, function (index, value) {
                            peijianArr.push(value)
                        })
                        $.each(json.page2, function (index, value) {
                            peijianArr.push(value)
                        })
                        // console.log(peijianArr);
                        var peijianArr1 = []
                        for (var i = 0; i < peijianArr.length; i++) {
                            // console.log(peijianArr[i].class);
                            if (peijianArr[i].class == '配件') {
                                peijianArr1.push(peijianArr[i])
                            }
                        }
                        // console.log(peijianArr1);
                        function peijian() {
                            var str = ''
                            goodsShow.innerHTML = ' '
                            for (var i = 0; i < peijianArr1.length; i++) {

                                str += `<div class="item">
                                        <div class="imgBox">
                                            <a href="#"><img src="" alt=""></a>  
                                        </div>
                                        <a href="#"><h2></h2></a>
                                        <div class="goodsPrice">
                                            <span>${peijianArr1[i].Nprice}元</span>
                                            <span>${peijianArr1[i].Yprice}</span>
                                        </div>
                                        <div class="goodsColor">
                                            <ul>
            
                                            </ul>
                                        </div>
                                        <div class="flags">
                                            <span><img src="${peijianArr1[i].pic}" alt="">${peijianArr1[i].text}</span>
                                        </div>
                                    </div>`
                                $('.goodsShow').html(str);
                            }
                            function fn() {
                                var str2 = ''
                                var ulContent = document.querySelectorAll('.goodsColor ul')
                                var imgUrl = document.querySelectorAll('.imgBox a img')
                                var types = document.querySelectorAll('.item a h2')
                                var spans = document.querySelectorAll('.flags span')
                                var icons = document.querySelectorAll('.flags span img')
                                for (var i = 0; i < $('.goodsColor ul').length; i++) {

                                    for (var j = 0; j < peijianArr1[i].goodsColor.length; j++) {

                                        str2 += `<li class="list" type="${peijianArr1[i].goodsColor[j].type}"><img src="${peijianArr1[i].goodsColor[j].color}" alt=""></li>`
                                    }
                                    ulContent[i].innerHTML = str2
                                    str2 = ''
                                    imgUrl[i].src = peijianArr1[i].goodsColor[0].color
                                    types[i].setAttribute('code',peijianArr1[i].code)
                                    imgUrl[i].setAttribute('code',peijianArr1[i].code)
                                    types[i].innerHTML = peijianArr1[i].goodsColor[0].type
                                    if (!spans[i].innerText && icons[i].src) {
                                        spans[i].style.backgroundColor = 'white'
                                    }
                                }
                                goodsMouseColor()
                            }
                            fn()
                        }
                        peijian()
                        if ($('.goodsColor ul li').length <= 20) {
                            $('.pagenav').css('display', 'none')
                        }
                    })
                })
            })


            // 点击手机保护壳
            $('.baohuke a').on('click', function () {
                var spans = document.querySelectorAll('.pagenav span')
                var goodsShow = document.querySelector('.goodsShow')
                // console.log(999);
                goodsShow.innerHTML = ''
                $(this).addClass('activeColor')
                $(this).parent().siblings().children().removeClass('activeColor')
                $('.oneLi span').addClass('activeColor')
                $('.oneLi span').parent().siblings().children().removeClass('activeColor')
                $('.pagenav').css('display', 'block')


                var phoneCell = []
                $.each(json.page1, function (index, value) {
                    phoneCell.push(value)
                })
                $.each(json.page2, function (index, value) {
                    phoneCell.push(value)
                })
                var phoneCell1 = []
                for (var i = 0; i < phoneCell.length; i++) {
                    if (phoneCell[i].class == '手机保护壳') {
                        phoneCell1.push(phoneCell[i])
                    }
                }
                // console.log(phoneCell1);
                // console.log(phoneCell1.length);
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < phoneCell1.length; i++) {
                    if (i < 20) {
                        arr1.push(phoneCell1[i])
                    } else {
                        arr2.push(phoneCell1[i])
                    }
                }
                // console.log(arr1);
                // console.log(arr2);
                getData(arr1)
                goodsMouseColor()
                var spans = document.querySelectorAll('.pagenav span')
                var goodsShow = document.querySelector('.goodsShow')
                function pageScape(i, page) {
                    spans[i].onclick = function () {
                        goodsShow.innerHTML = ' '
                        // console.log(99);
                        getData(page)
                        goodsMouseColor()
                        $(document).scrollTop(0)
                    }
                }
                pageScape(0, arr1)
                pageScape(1, arr1)
                pageScape(2, arr2)
                pageScape(3, arr2)

                $('.sale span').on('click', function () {
                    $(this).addClass('activeColor')
                    $(this).parent().siblings().children().removeClass('activeColor')
                    // goodsShow.innerHTML = ''
                    phoneCell1.sort(function (a, b) {
                        return a.Nprice - b.Nprice
                    })
                    // console.log(phoneCell1);
                    var arr1 = [];
                    var arr2 = [];
                    for (var i = 0; i < phoneCell1.length; i++) {
                        if (i < 20) {
                            arr1.push(phoneCell1[i])
                        } else {
                            arr2.push(phoneCell1[i])
                        }
                    }
                    getData(arr1)
                    goodsMouseColor()
                    var spans = document.querySelectorAll('.pagenav span')
                    var goodsShow = document.querySelector('.goodsShow')
                    function pageScape(i, page) {
                        spans[i].onclick = function () {
                            goodsShow.innerHTML = ' '
                            // console.log(99);
                            getData(page)
                            goodsMouseColor()
                            $(document).scrollTop(0)
                        }
                    }
                    pageScape(0, arr1)
                    pageScape(1, arr1)
                    pageScape(2, arr2)
                    pageScape(3, arr2)

                    $('.oneLi span').on('click', function () {
                        // console.log(999);
                        $(this).addClass('activeColor')
                        $(this).parent().siblings().children().removeClass('activeColor')
                        var spans = document.querySelectorAll('.pagenav span')
                        var goodsShow = document.querySelector('.goodsShow')
                        // console.log(999);
                        goodsShow.innerHTML = ''
                        var phoneCell = []
                        $.each(json.page1, function (index, value) {
                            phoneCell.push(value)
                        })
                        $.each(json.page2, function (index, value) {
                            phoneCell.push(value)
                        })
                        var phoneCell1 = []
                        for (var i = 0; i < phoneCell.length; i++) {
                            if (phoneCell[i].class == '手机保护壳') {
                                phoneCell1.push(phoneCell[i])
                            }
                        }
                        // console.log(phoneCell1);
                        // console.log(phoneCell1.length);
                        var arr1 = [];
                        var arr2 = [];
                        for (var i = 0; i < phoneCell1.length; i++) {
                            if (i < 20) {
                                arr1.push(phoneCell1[i])
                            } else {
                                arr2.push(phoneCell1[i])
                            }
                        }
                        // console.log(arr1);
                        // console.log(arr2);
                        getData(arr1)
                        goodsMouseColor()
                        var spans = document.querySelectorAll('.pagenav span')
                        var goodsShow = document.querySelector('.goodsShow')
                        function pageScape(i, page) {
                            spans[i].onclick = function () {
                                goodsShow.innerHTML = ' '
                                // console.log(99);
                                getData(page)
                                goodsMouseColor()
                                $(document).scrollTop(0)
                            }
                        }
                        pageScape(0, arr1)
                        pageScape(1, arr1)
                        pageScape(2, arr2)
                        pageScape(3, arr2)

                    })

                })

            })

            // 点击平板配件
            $('.pingban a').on('click', function () {
                $(this).addClass('activeColor')
                $(this).parent().siblings().children().removeClass('activeColor')
                $('.oneLi span').addClass('activeColor')
                $('.oneLi span').parent().siblings().children().removeClass('activeColor')

                goodsShow.innerHTML = ' '
                var pingbanArr = []
                $.each(json.page1, function (index, value) {
                    pingbanArr.push(value)
                })
                $.each(json.page2, function (index, value) {
                    pingbanArr.push(value)
                })
                // console.log(pingbanArr);
                var pingbanArr1 = []
                for (var i = 0; i < pingbanArr.length; i++) {
                    // console.log(pingbanArr[i].class);
                    if (pingbanArr[i].class == '平板配件') {
                        pingbanArr1.push(pingbanArr[i])
                    }
                }
                // console.log(pingbanArr1);
                function pingban() {
                    var str = ''
                    goodsShow.innerHTML = ' '
                    for (var i = 0; i < pingbanArr1.length; i++) {

                        str += `<div class="item">
                                <div class="imgBox">
                                    <a href="#"><img src="" alt=""></a>  
                                </div>
                                <a href="#"><h2></h2></a>
                                <div class="goodsPrice">
                                    <span>${pingbanArr1[i].Nprice}元</span>
                                    <span>${pingbanArr1[i].Yprice}</span>
                                </div>
                                <div class="goodsColor">
                                    <ul>
    
                                    </ul>
                                </div>
                                <div class="flags">
                                    <span><img src="${pingbanArr1[i].pic}" alt="">${pingbanArr1[i].text}</span>
                                </div>
                            </div>`
                        $('.goodsShow').html(str);
                    }
                    function fn() {
                        var str2 = ''
                        var ulContent = document.querySelectorAll('.goodsColor ul')
                        var imgUrl = document.querySelectorAll('.imgBox a img')
                        var types = document.querySelectorAll('.item a h2')
                        var spans = document.querySelectorAll('.flags span')
                        var icons = document.querySelectorAll('.flags span img')
                        for (var i = 0; i < $('.goodsColor ul').length; i++) {

                            for (var j = 0; j < pingbanArr1[i].goodsColor.length; j++) {

                                str2 += `<li class="list" type="${pingbanArr1[i].goodsColor[j].type}"><img src="${pingbanArr1[i].goodsColor[j].color}" alt=""></li>`
                            }
                            ulContent[i].innerHTML = str2
                            str2 = ''
                            imgUrl[i].src = pingbanArr1[i].goodsColor[0].color
                            types[i].setAttribute('code',pingbanArr1[i].code)
                            imgUrl[i].setAttribute('code',pingbanArr1[i].code)
                            types[i].innerHTML = pingbanArr1[i].goodsColor[0].type
                            if (!spans[i].innerText && icons[i].src) {
                                spans[i].style.backgroundColor = 'white'
                            }
                        }
                        goodsMouseColor()
                    }
                    fn()
                }
                pingban()
                if ($('.goodsColor ul li').length <= 20) {
                    $('.pagenav').css('display', 'none')
                }
                pingbanArr1.sort(function (a, b) {
                    return a.Nprice - b.Nprice
                })
                $('.sale span').on('click', function () {
                    $(this).addClass('activeColor')
                    $(this).parent().siblings().children().removeClass('activeColor')
                    // console.log(pingbanArr1);
                    pingban()
                    $('.oneLi span').on('click', function () {
                        $(this).addClass('activeColor')
                        $(this).parent().siblings().children().removeClass('activeColor')
                        goodsShow.innerHTML = ' '
                        var pingbanArr = []
                        $.each(json.page1, function (index, value) {
                            pingbanArr.push(value)
                        })
                        $.each(json.page2, function (index, value) {
                            pingbanArr.push(value)
                        })
                        // console.log(pingbanArr);
                        var pingbanArr1 = []
                        for (var i = 0; i < pingbanArr.length; i++) {
                            // console.log(pingbanArr[i].class);
                            if (pingbanArr[i].class == '平板配件') {
                                pingbanArr1.push(pingbanArr[i])
                            }
                        }
                        // console.log(pingbanArr1);
                        function pingban() {
                            var str = ''
                            goodsShow.innerHTML = ' '
                            for (var i = 0; i < pingbanArr1.length; i++) {

                                str += `<div class="item">
                                        <div class="imgBox">
                                            <a href="#"><img src="" alt=""></a>  
                                        </div>
                                        <a href="#"><h2></h2></a>
                                        <div class="goodsPrice">
                                            <span>${pingbanArr1[i].Nprice}元</span>
                                            <span>${pingbanArr1[i].Yprice}</span>
                                        </div>
                                        <div class="goodsColor">
                                            <ul>
            
                                            </ul>
                                        </div>
                                        <div class="flags">
                                            <span><img src="${pingbanArr1[i].pic}" alt="">${pingbanArr1[i].text}</span>
                                        </div>
                                    </div>`
                                $('.goodsShow').html(str);
                            }
                            function fn() {
                                var str2 = ''
                                var ulContent = document.querySelectorAll('.goodsColor ul')
                                var imgUrl = document.querySelectorAll('.imgBox a img')
                                var types = document.querySelectorAll('.item a h2')
                                var spans = document.querySelectorAll('.flags span')
                                var icons = document.querySelectorAll('.flags span img')
                                for (var i = 0; i < $('.goodsColor ul').length; i++) {

                                    for (var j = 0; j < pingbanArr1[i].goodsColor.length; j++) {

                                        str2 += `<li class="list" type="${pingbanArr1[i].goodsColor[j].type}"><img src="${pingbanArr1[i].goodsColor[j].color}" alt=""></li>`
                                    }
                                    ulContent[i].innerHTML = str2
                                    str2 = ''
                                    imgUrl[i].src = pingbanArr1[i].goodsColor[0].color
                                    types[i].setAttribute('code',pingbanArr1[i].code)
                                    imgUrl[i].setAttribute('code',pingbanArr1[i].code)        
                                    types[i].innerHTML = pingbanArr1[i].goodsColor[0].type
                                    if (!spans[i].innerText && icons[i].src) {
                                        spans[i].style.backgroundColor = 'white'
                                    }
                                }
                                goodsMouseColor()
                            }
                            fn()
                        }
                        pingban()
                        if ($('.goodsColor ul li').length <= 20) {
                            $('.pagenav').css('display', 'none')
                        }
                    })
                })
            })




        }
    })

  
    // // 选项卡点击 滑过的背景 字体颜色的设置 
    // $('.pagenav ').on('click', 'span', function () {
    //     // $(this).css({'background-color':'#757575','color':'#fff'})

    //     // $(this).siblings().css({'color':'#b0b0b0','background-color':''})
    //     $(this).addClass('colorChan')
    //     $(this).attr('panduan')

    // })
    // $('.pagenav').on('mouseenter', 'span', function () {

    //     $(this).css({ 'background-color': '#b0b0b0', 'color': '#fff' })

    //     $('.pagenav').on('mouseleave', 'span', function () {

    //         $(this).css({ 'color': '#b0b0b0', 'background-color': '' })
    //     })
    // })
    
    // 猜你喜欢
    $('.liLeft').on('click',function(){
        
        $('.picList').css('margin-left','0')
    })
    $('.liRight').on('click',function(){
        $('.picList').css('margin-left','-1240px')
    })

      // 本地存储数据
  // 假设本地存数数据为 goods : ' ['abc1']'
  $('.goodsShow').on('click', '.item a', function () {

    var code = $(this).children().attr('code')
        // console.log(code);
 
        localStorage.setItem("goods",code)
        // 跳转页面
        // $(this).attr('href','test.html') 
  })



})