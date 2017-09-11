;(function($){
  $.fn.nav = function(options){
    //默认数据
    var defaults = "";
    //用传递进来的值替换默认值
    var options = $.extend({},defaults, options);
    //重置导航和二级菜单
    function addList(data,_self) {
      for(var i in data){
        //定义
        var a = "",li = "",ul = "";
        li = $("<li></li>");//创建一个子节点li
        //判定
        if(data[i].url == ""){
          //判断url为空的情况下,设为javascript:void(0);
          a = $('<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">'+data[i].text+'<b class="caret"></b></a>');//创建一个子节点a
          ul = $('<ul class="dropdown-menu"></ul>');//创建一个子节点ul
        }else{
          a = $('<a href="'+data[i].url+'">'+data[i].text+'</a>');//创建一个子节点a
        }

        //添加数据
        // var a = $('<a href="'+data[i].url+'">'+data[i].text+'</a>');//创建一个子节点a


        li.append(a);
        li.append(ul).appendTo(_self);
        addList(data[i].menus,ul);
        //验证如果ul为空的话,则删除ul
        if(li.children("ul").find("li").length == 0){
          li.children("ul").remove();
        }
      }
    }
    addList(options,this);
  }
})(jQuery)