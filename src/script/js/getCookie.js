;
(function() {
    class getCookie {
        constructor() {
            this.usercookie = $('#header ul .usercookie a');
            this.exit = $('#header ul .usercookie em');
        }
        init() {
            // console.log($.cookie('zhe800accountNumber'));
            if (Boolean($.cookie('zhe800accountNumber'))) {
                this.showUser()
            }
        }
        showUser() {
            let _this = this;
            this.usercookie.eq(0).html('您好');
            this.usercookie.eq(1).html($.cookie('zhe800accountNumber'));
            this.usercookie.eq(0).attr('href', 'http://10.31.163.20/zhe800/projectname/src/index.html');
            this.usercookie.eq(1).attr('href', 'http://10.31.163.20/zhe800/projectname/src/index.html');
            this.exit.css('opacity', '1');
            this.exit.on('click', function() {
                _this.removeCookie()
            })
        }
        removeCookie() {
            $.cookie('zhe800accountNumber', '');
            window.location.reload();
        }
    }
    new getCookie().init()
})();
/* 获取用户名cookie */