var _createClass=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){function e(){_classCallCheck(this,e),this.em=$("#main form dl dd em"),this.input=$("#main dl dd input"),this.label=$("#main dl dd label"),this.drag=$("#main dl dd .sliding_block"),this.slide=$("#main dl dd .slide_box"),this.checkbox=$("#main dl dd .checkbox"),this.submit=$("#main dl dd i"),this.sx=null,this.telswitch=!1,this.passwordswitch=!1,this.confirmswitch=!1,this.dragswitch=!1}(new(_createClass(e,[{key:"init",value:function(){var t=this;this.verification(),this.drag.on("mousedown",function(e){e=e||window.event,t.down(e),$(document).on("mousemove",function(e){return e=e||window.event,t.move(e),$(document).on("mouseup",function(){t.up()}),!1})}),this.submit.on("click",function(){t.submitInformation()})}},{key:"verification",value:function(){var e=this;this.input.eq(0).focus(function(){e.label.eq(0).html("为了您的账号安全，请填写常用手机号"),e.label.eq(0).css("color","#666")}),this.input.eq(0).blur(function(){""!=e.input.eq(0).val()?/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/.test(e.input.eq(0).val())?(e.em.eq(0).show(),e.label.eq(0).html(""),e.telswitch=!0):(e.em.eq(0).hide(),e.label.eq(0).html("手机号码格式错误"),e.label.eq(0).css("color","#e02f2f")):(e.label.eq(0).html("请输入手机号码"),e.label.eq(0).css("color","#e02f2f"))}),this.input.eq(1).focus(function(){e.label.eq(1).html("6-24位字母、数字或半角符号"),e.label.eq(1).css("color","#666")}),this.input.eq(1).blur(function(){""!=e.input.eq(1).val()?/(?!^[0-9]{6,24}$)^[0-9A-Za-z\u0020-\u007e]{6,24}$/.test(e.input.eq(1).val())?(e.em.eq(1).show(),e.label.eq(1).html(""),e.passwordswitch=!0):(e.em.eq(1).hide(),e.input.eq(1).val().split("").length<6?e.label.eq(1).html("密码过短，最短支持6个字符"):24<e.input.eq(1).val().split("").length?e.label.eq(1).html("密码过长，最长支持24个字符"):e.label.eq(1).html("密码应为字母、数字或半角符号的组合"),e.label.eq(1).css("color","#e02f2f")):(e.label.eq(1).html("请输入密码"),e.label.eq(1).css("color","#e02f2f"))}),this.input.eq(2).focus(function(){e.label.eq(2).html("请再次输入您的密码"),e.label.eq(2).css("color","#666")}),this.input.eq(2).blur(function(){""!=e.input.eq(2).val()?e.input.eq(2).val()==e.input.eq(1).val()?(e.em.eq(2).show(),e.label.eq(2).html(""),e.confirmswitch=!0):(e.em.eq(2).hide(),e.label.eq(2).html("两次密码输入不一致"),e.label.eq(2).css("color","#e02f2f")):(e.label.eq(2).html("确认密码不能为空"),e.label.eq(2).css("color","#e02f2f"))})}},{key:"down",value:function(e){this.sx=e.offsetX,console.log(this.sx)}},{key:"move",value:function(e){var t=e.clientX-this.slide.offset().left-this.sx;t<0?t=0:t>this.slide.width()-this.drag.width()&&(t=this.slide.width()-this.drag.width()),this.drag.css("left",t),t==this.slide.width()-this.drag.width()&&(this.slide.html("验证通过"),this.slide.css({background:"#80ff00",color:"#fff"}),this.em.eq(3).show(),this.em.eq(3).css({right:"-27px",top:"3px"}),this.dragswitch=!0)}},{key:"up",value:function(){$(document).off("mousemove"),$(document).off("mouseup")}},{key:"submitInformation",value:function(){var t=this;this.checkbox.get(0).checked?1==this.telswitch&&1==this.passwordswitch&&1==this.confirmswitch&&1==this.dragswitch?$.ajax({url:"http://10.31.163.20/zhe800/projectname/php/register.php",type:"POST",data:{usertel:t.input.eq(0).val(),password:t.input.eq(1).val()},success:function(e){console.log(e),"true"==e?window.location.href="http://10.31.163.20/zhe800/projectname/src/login.html":(t.label.eq(0).html('用户名已存在，<a href="http://10.31.163.20/zhe800/projectname/src/login.html">去登录</a>'),t.label.eq(0).css("color","#e02f2f"))}}):alert("请完成注册"):1==this.telswitch&&1==this.passwordswitch&&1==this.confirmswitch&&1!=this.dragswitch||alert("请完成注册")}}]),e)).init()}(),function(){function e(){_classCallCheck(this,e),this.showMore=$("#main .form_right .third_party_login .showmore"),this.showMoreul=$("#main .form_right .third_party_login ul")}(new(_createClass(e,[{key:"init",value:function(){var e=this;this.showMore.on("click",function(){e.show()})}},{key:"show",value:function(){this.showMoreul.height()<=45?this.showMoreul.height(2*this.showMoreul.find("li").height()):this.showMoreul.height(45)}}]),e)).init()}();