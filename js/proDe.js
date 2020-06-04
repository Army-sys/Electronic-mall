$(function (){

    //初始化插件
    var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 340,//承载容器宽
		height : 260,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);


	/* 
		种类选择
	*/
	$('#book .book-rightcb li').click(function (){
		
		$(this).addClass('active').siblings('li').removeClass('active')
	})


  $('#book .inc').click(function(){
	  let num = $(this).closest('div').siblings('div').find('input').val();
	   ++num;
	   $(this).closest('div').siblings('div').find('input').val(num)
  })

  $('#book .redu').click(function(){
	  let num = $(this).closest('div').siblings('div').find('input').val();
	  
	  if(num == 1) return;
	  --num;
	  $(this).closest('div').siblings('div').find('input').val(num);
  })
})