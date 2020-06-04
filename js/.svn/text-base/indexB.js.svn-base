$(function() {
    $("#rota .slider").slidebox({
        boxh: 420, //盒子的高度
        w: 1000, //图片的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 0, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });
    $('#rota .rota-right li').mouseenter(function() {
        $('p', this).hide();
        $('div', this).show();

        //    其他
        $(this).siblings('li').find('div').hide();
        $(this).siblings('li').find('p').show();
    });

    //    搜索框
    $(window).scroll(function() {
        //  获取距离
        let sTop = $('html,body').scrollTop();
        if (sTop > 200) {
            //超过两百显示
            $('#fixTop').stop().slideDown();
            // 追加输入框
            $('.sour-box').appendTo('#fixTop')
        } else {
            // 低于两百隐藏
            $('#fixTop').stop().slideUp();
            // 追加回输入框
            $(".sour-box").appendTo('.sour-boxs')
        }

    })

    // 新书手风琴
    $('#nbook .nbook-right li').mouseenter(function() {
        $('div', this).show();
        $('h4', this).hide();
        // 其他
        $(this).siblings('li').find('div').hide();
        $(this).siblings('li').find('h4').show();

    })

    $("#provide .pro-slider").slidebox({
        boxh: 540, //盒子的高度
        w: 1200, //图片的宽度
        h: 486, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 0, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });

    //   获取索引
      let index = 0;
    //获取ul的高度
          let uheight =$('#like .likebox .likey .likeul').outerHeight();
           
    //获取ul的长度
         let len = $('#like .likebox .likey .likeul').length
         
    //追加第一个ul到尾部
    $('#like .likebox .likey .likeul').eq(0).clone(true).appendTo('.likey')
 
    // 换一下
    $('#like .change').click(function(){
       index++;


        // 判断索引与ul的长度
    if(index === $('#like .likebox .likey .likeul').length){
         index=0
      }

   //   运动ul
     $('#like .likebox .likey').stop().animate({
         
              top: -index * uheight

    },800,function(){
         if(index === len){
             index=0;
             $('#like .likebox .likey').css('top',0)
         } 
  

        }) 
 
    })


})