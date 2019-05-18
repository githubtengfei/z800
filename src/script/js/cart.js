;
(function() {
    class GetCookie {
        constructor() {
            this.table = $('#cart_main table');
            this.tabletr = $('#cart_main table tr')
            this.tablestr = '';
            this.img = $('#cart_main table tr td img');
            this.title = $('#cart_main table tr td p a');
            this.color = $('#cart_main table tr td .type .color i');
            this.size = $('#cart_main table tr td .type .size i');
            this.price = $('#cart_main table tr .price i');
            this.number = $('#cart_main table tr .number input');
            this.money = $('#cart_main table tr .money');
            this.sidarr = [];
            this.sizearr = [];
            this.numarr = [];
            this.colorarr = [];
        }
        init() {
            this.getData();
        }
        getData() {
            let _this = this;
            this.sidarr = $.cookie('sid').split(',');
            this.sizearr = $.cookie('size').split(',');
            this.numarr = $.cookie('number').split(',');
            this.colorarr = $.cookie('color').split(',');
            // console.log(this.sidarr)
            $.each(this.sidarr, function(index, value) {
                $.ajax({
                    url: "../php/cartgetdata.php",
                    data: {
                        id: value,
                    },
                    dataType: "json",
                    success: function(data) {
                        // console.log(data.indeximgurl)
                        // console.log(data)
                        _this.tablestr += `
                                        <tr class="s_${data.sid}">
                                            <td><input type="checkbox" class="check"></td>
                                            <td>
                                                <img src="${data.indeximgurl}">
                                                <p>
                                                    <a href="#">${data.indextitle}</a>
                                                    <span><em></em><em></em></span>
                                                </p>
                                                <div class="type">
                                                    <span>颜色: ${_this.colorarr[index]}</span>
                                                    <span>尺码: ${_this.sizearr[index]}</span>
                                                    <em>修改</em>
                                                </div>
                                            </td>
                                            <td class="price">
                                                <i>${data.indexprice}</i>
                                                <del>4999.00</del>
                                            </td>
                                            <td class="number">
                                                <p><em class="num_left"></em><input type="text" value="${_this.numarr[index]}" name="count"><em class="num_right"></em></p>
                                            </td>
                                            <td class="money">
                                                ${(data.indexprice*_this.numarr[index]).toFixed(2)}
                                            </td>
                                            <td>
                                                <a href="javascript:;" class="delete">删除</a>
                                                <a href="javascript:;">移入收藏</a>
                                            </td>
                                        </tr>
                                        `;
                        _this.table.html(_this.tablestr);


                    }
                })
            });

        }
    }
    new GetCookie().init();
})();
/* 获取cookie进行购物车页面渲染 */
;
(function() {
    class Alleffect {
        constructor() {
            this.table = $('#cart_main table');
            this.check_all = $('#cart_main .cart_title #check_all');
            this.check_all_bottom = $('#cart_main .close_an_account #check_all');
            this.prices = $('#cart_main .close_an_account p strong em');
            this.settleAccounts = $('#cart_main .close_an_account p a');
            this.close_an_account = $('#cart_main .close_an_account');
            this.tr = '';
            this.td = '';
            this.inputCheck = '';
            this.totalPrices = 0;
            this.num = 0;

        }
        init() {
            let _this = this;
            this.check_all.on('click', function() {
                _this.checkAll();
                _this.trInputcheck();
            });
            this.check_all_bottom.on('click', function() {
                _this.checkAllbottom();
                _this.trInputcheck();
            });
            this.table.on('click', function(ev) {
                _this.trInputcheck(ev);
                // ev.stopPropagation()
            })
        }
        checkAll() {
            this.tr = this.table.find('tr');
            if (this.check_all.prop('checked')) {
                for (let i = 0; i < this.tr.length; i++) {
                    this.tr.eq(i).find('td').eq(0).find('input').prop('checked', true)
                };
                this.check_all_bottom.prop('checked', true);


            } else {

                this.check_all_bottom.prop('checked', false);
                for (let i = 0; i < this.tr.length; i++) {
                    this.tr.eq(i).find('td').eq(0).find('input').prop('checked', false)
                };
                this.totalPrices = 0;

                this.prices.html(this.totalPrices.toFixed(2))

            }

        }
        checkAllbottom() {
            this.tr = this.table.find('tr');
            if (this.check_all_bottom.prop('checked')) {
                for (let i = 0; i < this.tr.length; i++) {
                    this.tr.eq(i).find('td').eq(0).find('input').prop('checked', true)
                };
                this.check_all.prop('checked', true);



            } else {

                for (let i = 0; i < this.tr.length; i++) {
                    this.tr.eq(i).find('td').eq(0).find('input').prop('checked', false)
                };
                this.totalPrices = 0;
                this.check_all.prop('checked', false);
                this.prices.html(this.totalPrices.toFixed(2))

            }

        }
        trInputcheck(ev) {
            var ev = ev || window.event;
            var element = ev.target || ev.srcElement;
            this.tr = this.table.find('tr');
            this.inputCheck = this.tr.find('.check');
            // this.totalPrices += parseFloat(this.tr.find('.check:checked').parent('td').siblings('.money').html())
            // this.prices.html(this.totalPrices.toFixed(2))


            if (this.tr.length == this.tr.find('.check:checked').length) {
                this.check_all.prop('checked', true);
                this.check_all_bottom.prop('checked', true);
                this.settleAccounts.css({
                    'background': '#e11e19',
                    'color': '#fff',
                });
                this.close_an_account.css('border-color', '#e11e19');

            } else {
                this.check_all.prop('checked', false);
                this.check_all_bottom.prop('checked', false);
                this.settleAccounts.css({
                    'background': '#ddd',
                    'color': '#999',
                });
                this.close_an_account.css('border-color', '#f3f3f3');
            }

            if (this.tr.find('.check:checked').length >= 1) {
                this.settleAccounts.css({
                    'background': '#e11e19',
                    'color': '#fff',
                });
                this.close_an_account.css('border-color', '#e11e19');
            }

        }
    }
    new Alleffect().init()
})()
/* 全选效果 计算总价 */
;
(function() {
    class Deletetr {
        constructor() {
            this.table = $('#cart_main table');
            this.delsid = '';
            this.sidarr = [];
            this.sizearr = [];
            this.numarr = [];
            this.colorarr = [];
            this.del = '';
        }
        init() {
            let _this = this;
            this.table.on('click', function(ev) {
                _this.delete(ev)
            })
        }
        delete(ev) {
            var ev = ev || window.event;
            var element = ev.target || ev.srcElement;
            // console.log(this.table.find('tr').find('td').find('.delete'))
            this.sidarr = $.cookie('sid').split(',');
            this.sizearr = $.cookie('size').split(',');
            this.numarr = $.cookie('number').split(',');
            this.colorarr = $.cookie('color').split(',');
            if (element.nodeName == 'A' && $(element).hasClass('delete')) {
                $(element).parents('tr').attr('class');
                // console.log($(element).parents('tr').attr('class'))
                this.delsid = $(element).parents('tr').attr('class').split('_')[1];
                // console.log(this.delsid)
                // console.log(this.sidarr.indexOf(this.delsid)) //0
                this.del = this.sidarr.indexOf(this.delsid);
                this.sidarr.splice(this.del, 1);
                this.sizearr.splice(this.del, 1);
                this.numarr.splice(this.del, 1);
                this.colorarr.splice(this.del, 1);
                $.cookie('sid', this.sidarr);
                $.cookie('size', this.sizearr);
                $.cookie('number', this.numarr);
                $.cookie('color', this.colorarr);
                $(element).parents('tr').hide()
            }
        }
    }
    new Deletetr().init()
})();
/* deletetr点击删除tr */
;
(function() {
    class Increase {
        constructor() {
            this.table = $('#cart_main table');
            this.increasenum = '';
            this.newmoney = '';
            this.numarr = [];
            /* this.indexarr = [];  如果数量大于1的话给num_left 减效果的背景 这个把大于1的索引存起来 做匹配*/

        }
        init() {
            let _this = this;
            this.table.on('click', function(ev) {
                _this.increaseNumber(ev)
            });
            // this.numarr = $.cookie('number').split(',');
            // for (var i = 0; i < this.numarr.length; i++) {
            //     if (this.numarr[i] > 1) {
            //         this.indexarr.push(i)
            //     }
            // }
            // console.log(this.indexarr)

            // this.subtract()
        }
        increaseNumber(ev) {
            var ev = ev || window.event;
            var element = ev.target || ev.srcElement;
            this.increasenum = $(element).parent('p').find('input').val();
            // console.log(this.increasenum)
            if (element.nodeName == 'EM' && $(element).hasClass('num_right')) {
                this.increasenum++;
                if (this.increasenum > 1) {
                    $(element).parent('p').find('.num_left').css({
                        'background-img': "url(../img/p_Spirit6.b652a725.png)",
                        'background-position': "-1px -210px"
                    })
                };
                $(element).parent('p').find('input').val(this.increasenum);
                // console.log(parseFloat($(element).parents('tr').find('.price').find('i').html()))
                this.newmoney = parseFloat($(element).parents('tr').find('.price').find('i').html());
                $(element).parents('tr').find('.money').html((this.newmoney * parseInt(this.increasenum)).toFixed(2));
                /* 接下来把更新的数量存cookie 暂未做*/
            } else if (element.nodeName == 'EM' && $(element).hasClass('num_left')) {
                if (this.increasenum > 1) {
                    $(element).css({
                        'background-img': "url(../img/p_Spirit6.b652a725.png)",
                        'background-position': "-1px -210px"
                    })
                    this.increasenum--;
                    $(element).parent('p').find('input').val(this.increasenum);
                    this.newmoney = parseFloat($(element).parents('tr').find('.price').find('i').html());
                    $(element).parents('tr').find('.money').html((this.newmoney * parseInt(this.increasenum)).toFixed(2));
                };
                if (this.increasenum <= 1) {
                    $(element).css({
                        'background-img': "url(../img/p_Spirit6.b652a725.png)",
                        'background-position': "-1px -179px"
                    })
                }
            }
        }
    }
    new Increase().init()
})();
/* increase点击增加商品数量 */
;
(function() {
    class Quantityofgoods {
        constructor() {
            this.cartnum = $('#header ul a strong');
            this.sidarr = [];
        }
        init() {
            if ($.cookie('sid')) {
                this.sidarr = $.cookie('sid').split(',');
                this.cartnum.html(this.sidarr.length)
            }
        }
    }
    new Quantityofgoods().init()
})()
/* 购物车商品数量显示 */