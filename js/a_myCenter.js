
        // 删除订单
        function shanchu() {
            var a_order = document.querySelectorAll('.a_order');
            var iconshanchu = document.querySelectorAll('.iconshanchu');
            for (var i = 0, len = a_order.length; i < len; i++) {
                a_order[i].index = i;
                iconshanchu[i].index = i;
                a_order[i].onmouseenter = function () {
                    iconshanchu[this.index].style.display = 'block';
                    iconshanchu[this.index].style.cursor = 'pointer';
                }
                iconshanchu[i].onclick = function () {
                    a_order[this.index].style.display = 'none';
                }
                a_order[i].onmouseleave = function () {
                    iconshanchu[this.index].style.display = 'none';
                }
            }
        }
        shanchu()

        // 点击事件
        function listOnclick() {
            var Odt = document.querySelectorAll('.a_left dl dt');
            var a_right = document.querySelectorAll('.a_right')
            // console.log(Odt)
            a_right[0].style.display = "block";
            Odt[0].style.color = '#fe7a27'
            // a_right[5].style.display = "block";
            for (var i = 0, len = a_right.length; i < len; i++) {
                Odt[i].index = i;

                Odt[i].onclick = function () {


                    for (var i = 0, len = Odt.length; i < len; i++) {
                        a_right[i].style.display = "none";
                        Odt[i].style.color = '#666666'
                    }
                    a_right[this.index].style.display = "block";
                    this.style.color = '#fe7a27'
                    // location.reload();//刷新页面 

                }
            }
        }

        listOnclick()


        // 设置cookie
        function setCookie(key, val, day) {
            if (day) {
                var d = new Date();
                d.setDate(d.getDate() + day); //escape(val)编码
                document.cookie = key + '=' + val + ';expires=' + d;
            } else {                         //unescape(val) 解码           
                document.cookie = key + '=' + val;
            }
        }

        function getCookie(key) {
            var arr = document.cookie.split('; ');
            // console.log(arr);// ["user2=xiaowang", "user3=xiaohong", "user4=小红", "user1=xiaofang"]
            for (var i = 0, len = arr.length; i < len; i++) {
                var arr2 = arr[i].split('='); //["user1","xiaogong"]
                if (arr2[0] == key) {
                    // console.log(arr2[1]);
                    return arr2[1]
                }
            }
            return '没有该值';
        }
        //     document.cookie = 'user1 = xiaoming';
        //    console.log( setCookie('username', '小红', 7))
        //    console.log(getCookie('username'))

        var a_name = document.querySelector('.a_name')
        var a_time = document.querySelector('.a_time')
        var date = new Date()
        var hour = date.getHours()
        console.log(hour)
        a_name.innerHTML = getCookie('username')
        var arr = ["早上好~", "中午好~", "下午好~", "晚上好~"];
        // for (var i = 0, len = arr.length; i < len; i++) {
        if (hour >= 0 && hour < 10) {
            a_time.innerHTML = arr[0]
        }
        if (hour >= 10 && hour < 14) {
            a_time.innerHTML = arr[1]
        }
        if (hour >= 14 && hour < 19) {
            a_time.innerHTML = arr[2]
        }
        if (hour >= 19 && hour < 23) {
            a_time.innerHTML = arr[3]
        }
        // }