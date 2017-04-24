/**
 * Created by Administrator on 2017/4/20 0020.
 */
$(function(){



    /*1.监听gps滚动*/
    var index= 0
    var timer= null;

    showAndHideEle(index);


    $('.gps li').on('click',function(){

        //获取索引
        index = $(this).index();

        //切换选中页面
        $(this).addClass('current').siblings().removeClass('current');
        $('section').eq(index).show().siblings('section').hide();


        //???????? 后面的'section'???
        //控制页面元素
        showAndHideEle(index);

        //清除落空类
        setTimeout(function(){
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10)

        //此处的'section' 不是必须的???

    })


    /*2.监听鼠标滚动*/
    $(window).mousewheel(function(event,delta){
        //console.log(delta);
        //用一次定时器节流
        clearTimeout(timer);
        timer= setTimeout(function(){
            //2.1求出当前的索引
            index -= delta;
            //2.2判断索引范围
            if(index > $('section').length -1){
                index= $('section').length -1;
            }else if(index < 0){
                index= 0;
            }
            //2.3切换页面
            $('.gps li').eq(index).addClass('current').siblings().removeClass('current');
            $('section').eq(index).show().siblings('section').hide();
            //2.4控制
            showAndHideEle(index);

            //2.5 清除落空类
            setTimeout(function(){
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },10);
        },400);
    })
})


/*
* 控制页面元素的显示与隐藏
* */
function showAndHideEle(index){
    if(index == 0){
        $('.top-left-logo').hide();
        $('.scroll').show();
    }else{
        $('.top-left-logo').show();
        $('.scroll').hide();
    }
}