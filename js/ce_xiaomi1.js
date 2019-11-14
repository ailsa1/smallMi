
 $(function(){
   $.ajax({
   //请求方式为get
   type:"GET",
   //json文件位置
   url:"./data/shuju.json",
   //返回数据格式为json
   dataType: "json",
   //请求成功完成后要执行的方法
   success: function(data){
    //使用$.each方法遍历返回的数据date,插入到id为#result中
    var str="<ul>";
    $.each(data.list,function(i,n){
     str+="<li>"+n["item"]+"</li>";
    })
    str+="</ul>";
    $("#test").append(str);
   }
  });
 });
