;(function($){
  $.fn.nav = function(options){

    //默认数据
    var defaults = "";

    //用传递进来的值替换默认值
    var opts = $.extend({},defaults, options);
    var _self = this;

    //遍历数据
    $.each(opts,function(index,data){
      //循环添加数据
      if(data.url == ""){
        var li = $('<li class="layui-nav-item"></li>');
        var a  = $('<a href="javascript:;">'+data.text+'</a>');
        var ul = $('<ul style="display: none;"></ul>');
        li.append(a);
        li.append(ul).appendTo(_self);

        //添加二级菜单
        $.each(data.menus,function(index,subnav){
          if(subnav.url == ""){
            var li = $('<li class="layui-nav-item"></li>');
            var a  = $('<a href="javascript:;">'+subnav.text+'<span class="layui-nav-more"></span></a>');
            var dl = $('<dl class="layui-nav-child"></dl>');
            li.append(a);
            li.append(dl).appendTo(ul);

            //添加三级菜单
            $.each(subnav.menus,function(index,thnav){
              var dd = $('<dd><a id="frame_'+thnav.id+'" url="'+thnav.url+'">'+thnav.text+'</a></dd>');
              dl.append(dd);
            });
          }else{
            var li = $('<li class="layui-nav-item"></li>');
            var a  = $('<a url="javascript:;">'+subnav.text+'</a>');
            li.append(a).appendTo(ul);
          }
        });
      }else{
        var li = $('<li class="layui-nav-item"></li>');
        var a  = $('<a href="javascript:;" url="'+data.url+'">'+data.text+'</a>');
        li.append(a).appendTo(_self);
      }
    });

  }
})(jQuery)