var _createClass=function(){function e(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}!function(){function t(){_classCallCheck(this,t),this.activity_navigation=$("#activity_navigation"),this.header=$("#header"),this.search=$("#search"),this.nav=$("nav"),this.top=this.header.height()+this.search.height()+this.nav.height()+2*parseInt(this.search.css("padding-top"))}(new(_createClass(t,[{key:"init",value:function(){this.scrollTop()}},{key:"scrollTop",value:function(){var t=this;$(window).on("scroll",function(){$(window).scrollTop()>=t.top?$(this.activity_navigation).show():$(this.activity_navigation).hide()})}}]),t)).init()}(),function(){function t(){_classCallCheck(this,t),this.banner=$("#banner"),this.banner_pic=$(".banner_pic"),this.btn=$(".banner_pic p span"),this.num=0}(new(_createClass(t,[{key:"init",value:function(){this.banner_pic.find("ul").width(5*this.banner_pic.width()),this.buttonClick(),this.selfMotion()}},{key:"buttonClick",value:function(){var t=this;this.btn.on("click",function(){t.num=$(this).index(),t.btn.removeClass("active"),t.btn.eq(t.num).addClass("active"),t.banner_pic.find("ul").animate({left:-$(this).index()*$(".banner_pic ul li").width()})})}},{key:"selfMotion",value:function(){var t=this,n=this,i=setInterval(function(){t.num++,t.num==t.btn.length&&(t.num=0),n.btn.removeClass("active"),n.btn.eq(n.num).addClass("active"),t.banner_pic.find("ul").animate({left:-n.num*$(".banner_pic ul li").width()})},3e3);this.banner_pic.hover(function(){clearInterval(i)},function(){i=setInterval(function(){n.num++,n.num==n.btn.length&&(n.num=0),n.btn.removeClass("active"),n.btn.eq(n.num).addClass("active"),n.banner_pic.find("ul").animate({left:-n.num*$(".banner_pic ul li").width()})},4e3)})}}]),t)).init()}(),function(){function t(){_classCallCheck(this,t),this.update=$("#update"),this.data_information=$("#update .wrapper .update_product .data_information"),this.arrydata=""}(new(_createClass(t,[{key:"init",value:function(){this.getdata()}},{key:"getdata",value:function(){var i=this;$.ajax({url:"http://10.31.163.20/zhe800/projectname/php/homePagegetdata.php",dataType:"json",success:function(n){$.each(n,function(t){i.arrydata+='\n                        <li>\n                            <a href="details.html?sid='+n[t].sid+'" target="_blank">\n                                <img class="lazy" data-original="'+n[t].indeximgurl+'" width="283px" height="283px">\n                                <p href="#" title="'+n[t].indextitle+'">'+n[t].indextitle+"</p>\n                                <span>¥<em>"+n[t].indexprice+"</em></span>\n                                <i>剩余<strong>"+n[t].indextime+"</strong>天</i>\n                            </a>\n                        </li>\n                        ",i.data_information.find("ul").html(i.arrydata),$(function(){$("img.lazy").lazyload({effect:"fadeIn"})})})}})}}]),t)).init()}(),function(){function t(){_classCallCheck(this,t),this.cartnum=$("#header ul a strong"),this.sidercartnum=$("#sidebar .sidebar_top em"),this.sidarr=[]}(new(_createClass(t,[{key:"init",value:function(){$.cookie("sid")&&$.cookie("zhe800accountNumber")?(this.sidarr=$.cookie("sid").split(","),this.cartnum.html(this.sidarr.length),this.sidercartnum.html(this.sidarr.length)):(this.cartnum.html(0),this.sidercartnum.html(0))}}]),t)).init()}(),function(){function t(){_classCallCheck(this,t),this.carthref=$("#header ul li").eq(2).find("a")}(new(_createClass(t,[{key:"init",value:function(){$.cookie("zhe800accountNumber")?this.carthref.attr("href","http://10.31.163.20/zhe800/projectname/dist/cart.html"):(this.carthref.on("click",function(){alert("还没登录，请登录")}),this.carthref.attr("href","http://10.31.163.20/zhe800/projectname/dist/login.html"))}}]),t)).init()}();