window.addEventListener('load', function () {
            let user = document.querySelector('#user') //获取用户名
            let passed = document.querySelector('#passed') //获取密码框
            let yy = document.querySelector('.yy')
            let mm = document.querySelector('.mm')
            let sub = document.querySelector('.sub')


            // 定义标杆
            let flog = {
                flog1: false,
                flog2: false
            }

            // 定义用户事件
            user.addEventListener('blur', function () {
                //    获取用户名内容
                let usering = user.value

                // 设置验证规则
                let userd = /^[a-zA-Z0-9_-]{4,16}$/;
                // 检验规则
                let use = userd.test(usering);
                // 判断
                if (use) {
                    user.style.border = "1px solid green"
                    yy.innerHTML = ""
                    flog.flog1 = true;

                } else {
                    user.style.border = "1px solid red"
                    yy.innerHTML = "输入错误(6-16位)"
                    flog.flog1= false;
                }

            })

            //定义密码事件
            passed.addEventListener('blur', function () {
                // 获取密码内容
                let passeds = passed.value

                // 定义规则
                let pass = /^[a-zA-Z0-9_-]{6,16}$/;

                // 检验规则
                let pad = pass.test(passeds)

                // 判断
                if (pad) {
                    passed.style.border = "1px solid green" //正确边框变绿
                    mm.innerHTML = ""
                    flog.flog2 = true;
                } else {
                    passed.style.border = "1px solid red" //错误边框变红
                    mm.innerHTML = "输出错误(6-16位)"
                    flog.flog2 = false;
                }
            })
            //点击登录按钮，触发onsubmit事件验证用户名和密码是否合法
            sub.addEventListener('submit', function (event) {
                if (!flog.flog1) {
                    event.preventDefault(); //阻止浏览器的默认行为
                    user.style.border = "1px solid red"
                    yy.innerHTML = "输入错误(6-16位)"
                    flog.flog=false;
                } else if (!flog.flog2) {
                    event.preventDefault();
                    passed.style.border="1px solid red"
                    mm.innerHTML="输入错误(6-16位)"
                    flog.flog2=false;
                }



            })

        //    登录交换事件

        $('#sign .signbox .signbox-to .signsd2').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
                $('#sign .signboxcen1').css('display','none')
                $('#sign .signboxcen2').css('display','block')

        })

           
        $('#sign .signbox .signbox-to .signsd1').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('#sign .signboxcen1').css('display','block')
            $('#sign .signboxcen2').css('display','none')

    })
         $('#sign .sign2 p:first-child>img').click(function(){
               user.value=""
         })

         $('.signbox').hover(function(){
               $('.simg').stop().animate({left:80},500)
           $('.simg2').hide();
          },function(){
             
                    $('.simg').stop().animate({left:0},500,function(){
                             $('.simg2').stop().fadeIn(300)
                    })
          
              
               
            
          })

    })