;(function($){
  $.fn.nav = function(options){
    //默认数据
    var defaults = "";
    //用传递进来的值替换默认值
    var options = $.extend({},defaults, options);
    //重置导航和二级菜单
    function addList(data,_self){
      // var elelist = [
      //   "<li class='layui-nav-item'><a href='javascript:;'></a><ul></ul></li>",
      //   "<li class='layui-nav-item'></li>",
      //   "<a href=''></a>",
      //   "<dl class='layui-nav-child'></dl>",
      //   "<dd></dd>",
      //   "<a href=''></a>"
      // ],time = 0;
      // for(var i in data){
      //   if(data[i].url == ""){
      //     console.log(data[i].text);
      //     $(elelist[time]).children("a").html(data[i].text);
      //     _self.append($(elelist[time]));
      //     console.log($(elelist[time]).children("a"));
      //   }else{
      //     console.log(data[i].text);
      //     $(elelist[time]).children("a").html(data[i].text);
      //     _self.append($(elelist[time]));
      //     console.log($(elelist[time]).children("a"));
      //   }




        //判定
        if(data[i].url == ""){
          var a,dl,li
          //判断url为空的情况下,设为javascript:void(0);
          a = $('<a href="javascript:;">'+options[i].text+'<span class="layui-nav-more"></span></a>');
          dl = $('<dl class="layui-nav-child"></dl>');
          var j_meuns = options[i].menus;
          for(var j in j_meuns){
            console.log(j_meuns[j]);
            dd = $('<dd><a href="'+j_meuns[j].url+'">'+j_meuns[j].text+'</a></dd>');
            dl.append(dd);
          }
          li.append(a).appendTo(this);
          li.append(dl).appendTo(this);
        }else{
          a = $('<a href="'+options[i].url+'">'+options[i].text+'</a>');//创建一个子节点a
          li.append(a).appendTo(this);
        }

    }
    //调用
    addList(options,this);
  }
})(jQuery)