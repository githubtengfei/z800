var _createClass=function(){function e(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}!function(){function t(){_classCallCheck(this,t),this.user=$("#main form ul li input").eq(0),this.pass=$("#main form ul li input").eq(1),this.sub=$("#main form ul li span"),this.drag=$("#main form ul li .sliding_block"),this.slide=$("#main form ul li .slide_box"),this.userswitch=!1,this.passswitch=!1,this.dragswitch=!1}(new(_createClass(t,[{key:"init",value:function(){var i=this;this.drag.on("mousedown",function(t){t=t||window.event,i.down(t),$(document).on("mousemove",function(t){return t=t||window.event,i.move(t),$(document).on("mouseup",function(){i.up()}),!1})}),this.sub.on("click",function(){return""!=i.user.val()&&(i.userswitch=!0),""!=i.pass.val()&&(i.passswitch=!0),i.loginAuthentication(),!1})}},{key:"down",value:function(t){this.sx=t.offsetX}},{key:"move",value:function(t){var i=t.clientX-this.slide.offset().left-this.sx;i<0?i=0:i>this.slide.width()-this.drag.width()&&(i=this.slide.width()-this.drag.width()),this.drag.css("left",i),i==this.slide.width()-this.drag.width()&&(this.slide.html("验证通过"),this.slide.css({background:"#80ff00",color:"#fff"}),this.dragswitch=!0)}},{key:"up",value:function(){$(document).off("mousemove"),$(document).off("mouseup")}},{key:"loginAuthentication",value:function(){var i=this;1==this.userswitch&&1==this.passswitch&&1==this.dragswitch?$.ajax({url:"http://10.31.163.20/zhe800/projectname/php/login.php",type:"POST",data:{user:i.user.val(),pass:i.pass.val()},success:function(t){Boolean(t)?($.cookie("zhe800accountNumber",i.user.val(),{expires:7}),window.location.href="http://10.31.163.20/zhe800/projectname/src/index.html"):alert("用户名或密码错误,请重试")}}):alert("请输入通行证用户名、密码和滑块验证")}}]),t)).init()}();