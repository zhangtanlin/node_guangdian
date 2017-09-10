;(function($){
  $.fn.nav = function(options){
    //默认数据
    var defaults = "";
    //用传递进来的值替换默认值
    var options = $.extend({},defaults, options);
    //重置导航和二级菜单
    function addList(data,_self) {
      for(var i in data){
        //console.log(data[i].menus.length);
        if(data[i].menus.length > 0){
          var la = $("<a></a>");//创建一个子节点a
          var li = $("<li></li>");//创建一个子节点li
          var ul = $("<ul></ul>");//创建一个子节点ul
          la.append(data[i].text);
          li.append(la);
          li.append(ul);
          _self.append(li);
          // addList(data[i].menus,ul);
        }else{
          var la = $("<a></a>");//创建一个子节点a
          var li = $("<li></li>");//创建一个子节点li
          la.append(data[i].text);
          li.append(la);
          _self.append(li);
        }
      }
    }
    addList(options,this);
  }
})(jQuery)