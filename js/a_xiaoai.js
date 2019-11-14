
            var a_banner = document.querySelector('.a_banner')
            var a_box = document.querySelector('.a_box')
            var oAs = document.querySelectorAll('.a_btn>a')
            var a_xiaoaibtn = document.querySelector('.a_xiaoaibtn')

            var a_index = 0
            oAs[0].style.background = '#ffffff'
            oAs[0].style.width = '24px'
            function a_btn1() {
                oAs[0].onclick = function () {
                    this.style.width = '24px'
                    this.style.background = '#ffffff'
                    oAs[1].style.background = '#6e5791'
                    oAs[2].style.background = '#6e5791'
                    oAs[1].style.width = '16px'
                    oAs[2].style.width = '#16px'
                    clearInterval(timer)
                    if (a_index == 1920 || a_index == 3840) {
                        var timer = setInterval(function () {
                            a_index -= 40
                            a_box.style.left = -a_index + 'px';
                            if (a_index == 0) {
                                clearInterval(timer)
                            }
                        }, 1)
                    } else {
                        // clearInterval(timer)
                    }
                }
            }
            function a_btn2() {
                oAs[1].onclick = function () {
                    this.style.width = '24px'
                    this.style.background = '#ffffff'
                    oAs[0].style.background = '#6e5791'
                    oAs[2].style.background = '#6e5791'
                    oAs[0].style.width = '16px'
                    oAs[2].style.width = '16px'
                    clearInterval(timer)
                    if (a_index == 0) {
                        var timer = setInterval(function () {
                            a_index += 40
                            a_box.style.left = -a_index + 'px';
                            if (a_index == 1920) {
                                clearInterval(timer)
                            }
                        }, 1)
                    } else if (a_index > 1920 && a_index <= 3840) {
                        var timer = setInterval(function () {
                            a_index -= 40
                            a_box.style.left = -a_index + 'px';
                            if (a_index == 1920) {
                                clearInterval(timer)
                            }
                        }, 1)
                    }
                }
            }
            function a_btn3() {
                oAs[2].onclick = function () {
                    this.style.width = '24px'
                    this.style.background = '#ffffff'
                    oAs[0].style.background = '#6e5791'
                    oAs[1].style.background = '#6e5791'
                    oAs[0].style.width = '16px'
                    oAs[1].style.width = '16px'
                    clearInterval(timer)
                    if (a_index == 0 || a_index == 1920) {
                        var timer = setInterval(function () {
                            a_index += 40
                            a_box.style.left = -a_index + 'px';
                            if (a_index == 3840) {
                                clearInterval(timer)
                            }

                        }, 1)
                    } else {
                        clearInterval(timer)
                    }
                }
            }
            a_btn1()
            a_btn2()
            a_btn3()

  

            window.onscroll = function () {
                var a_xiaoai = document.documentElement || document.body;
                console.log(a_xiaoai.scrollTop)
                if (a_xiaoai.scrollTop >= 400) {
                    a_xiaoaibtn.style.display = 'block'
                }
                if (a_xiaoai.scrollTop < 400 && a_xiaoai.scrollTop >= 0) {
                    a_xiaoaibtn.style.display = 'none'
                }
            }
            var timer
            a_xiaoaibtn.onclick = function () {
                timer = setInterval(function () {
                    document.documentElement.scrollTop = document.documentElement.scrollTop - 100
                    if (document.documentElement.scrollTop <= 0) {
                        clearInterval(timer)
                    }
                }, 10)
                return
            }
