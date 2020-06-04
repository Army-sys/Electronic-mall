
//文档加载事件
$(function (){
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1000,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
    //电子书轮播
    $('#ebook .ebook-slide').slidebox({
        boxh: 218,//盒子的高度
        w: 328,//图片的宽度
        h: 218,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 6,//控制按钮高度
        radius: 6//控制按钮圆角度数
    }); 
    // 服装
    $('#cloth .cloth-slide').slidebox({
        boxh: 340,//盒子的高度
        w: 426,//图片的宽度
        h: 340,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 6,//控制按钮高度
        radius: 6//控制按钮圆角度数
    }); 
    // 户外运动
    $('#outsp .outsp-slide').slidebox({
        boxh: 340,//盒子的高度
        w: 426,//图片的宽度
        h: 340,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 6,//控制按钮高度
        radius: 6//控制按钮圆角度数
    }); 

     // 童婴装
     $('#chba .chba-slide').slidebox({
        boxh: 340,//盒子的高度
        w: 426,//图片的宽度
        h: 340,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 6,//控制按钮高度
        radius: 6//控制按钮圆角度数
    }); 
    // 电子书选项
    $("#ebook .ebook-left .ebook-ul>li").mouseenter(function(){
       //  增加
             $(this).addClass('active').siblings().removeClass('active')

          //    获取索引
         let index = $(this).index();
         $('#ebook .ebook-cent').hide().eq(index).show();
        // $('#ebook .ebook-cent').eq(index).addClass('cur').siblings().removeClass('cur');

       })
       //电子书-手风琴效果
    /* 
        鼠标移入li：
            当前li: 显示当前li下面的内容div， 隐藏当前li下面的标题h4
            其他li: 隐藏其他li下面的内容div， 显示其他li下面的标题h4
    */
        $('#ebook .ebook-right li').mouseenter(function(){
           $('h4',this).hide();
           $('div',this).show();
        // 其他
        $(this).siblings('li').find('div').hide();
        $(this).siblings('li').find('h4').show();

        })

    //  衣服选项卡
    $('#cloth .clothtop li').mouseenter(function(){
       $(this).addClass('active').siblings().removeClass('active')
       //获取索引
           let index = $(this).index();
        //    同步二级
        $('#cloth .cloth-right').eq(index).addClass('cur').siblings().removeClass('cur')
    })


     //  户外运动选项卡
     $('#outsp .outsptop li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active')
        //获取索引
            let index = $(this).index();
         //    同步二级
         $('#outsp .outsp-right').eq(index).addClass('cur').siblings().removeClass('cur')
     })

    //  童婴装选项卡
    $("#chba .chbatop li ").mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active')
        // 获取索引
        let index = $(this).index();
        // 获取二级内容
        $("#chba .chba-right").eq(index).addClass('cur').siblings().removeClass('cur')
    })
 
    //  滚动框
    $('#footr li').hover(function(){
        //    改变颜色
        //    获取颜色
        let bgc = $(this).attr('bgcf')
   
        // 设置颜色
        $(this).css({
            'background-color':bgc,
            // 设置推片位置
            'background-position-x':'-40px',
            // 设置超出显示
             'width':'80px'

        })
    },function(){
       $(this).css({
        'background':'',
        // 设置图片位置
        'background-position-x':0,
        // 超出隐藏
        'width':'40px'
       }).click(function(){
        //    获取索引
            let index = $(this).index();
            // 获取偏移offset
            let move = $('.move').eq(index).offset().top
            //  设置浏览器滚动
            //$('body,html').scrollTop(move)   直接到达
            $('body,html').animate({scrollTop:move-80},500)
       })
  
    })        
    //    搜索框
       $(window).scroll(function(){
        //    获取滚动的距离
           let sTop = $('body,html').scrollTop();
          
        if(sTop > 500){
            $('#fixTop').slideDown();
            // 移入输入框
            $('.sour-box').appendTo("#fixTop")
        }else{
           $('#fixTop').slideUp();
        //    移除放回输入框
        $("#fixTop .sour-box").appendTo('.sour-boxs')
        }
       })
        
})

