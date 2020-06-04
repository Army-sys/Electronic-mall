$(function(){
$('.allSel').change(function(){
    //获取选中状态值
    let bool = $(this).prop('checked')
    //  赋值状态给其他值
    $('.allSel,.sigSel').prop('checked',bool)
    allTota()
})
    // 全选
    $('.sigSel').change(function(){
        // 获取商品长度
        let sileng = $('.sigSel:checked').length;
        //获取一共长度
        let alleng=$('.allSel').length;
        if(sileng == alleng){
            $('.allSel').prop('checked',true)
        }else{
            $('.allSel').prop('checked',false)
        }
        allTota();
    })
//   增加数量
     $('.add').click(function(){
         //获取value的数量
          let num = $(this).siblings('.inp').val();
          ++num;
          $(this).siblings('.inp').val(num);


        subpri(this,num);
        allTota();
     })
//    减少数量
         $('.re').click(function(){
            //  获取value的数量
           let num= $(this).siblings('.inp').val();
           if(num==1) return;
           --num;
           $(this).siblings('.inp').val(num)

             //   小计
         subpri(this,num);
         allTota();
      })


    //   封装
    function subpri(obj,prenum){
      // 获取价格文本
       let sig = $(obj).closest('ul').find('.sig').text();
            //    渲染到小计
         $(obj).closest('ul').find('.select').text((sig * prenum).toFixed(2))
    }



    // 计算总量和总价
    function allTota(){

        //定义变量保存总价
        let allPrice = 0;

        //定义变量保存总数量
        let allNum = 0;

        $('.sigSel:checked').each(function (index, dom){

            //获取选中商品的小计
            let subTotal = parseFloat( $(dom).closest('ul').find('.select').text() )
            
            //累加总价
            allPrice += subTotal;
           

            //获取选中商品的数量
            let proNum = parseInt( $(dom).closest('ul').find('.inp').val() );
            
            //累加总数量
            allNum += proNum;

        })

        //得到总价,并渲染到页面中
        $('.allPrice').text( allPrice.toFixed(2) );
        
        //得到总数量，并渲染到页面中
        $('.allNum').text( allNum )
    }


})