webpackJsonp([1, 43], {
    10: function(t, e, i) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.
                default = t, e
        }
        function n(t, e) {
            function i(e, i) {
                t.$router.push({
                    name: e,
                    params: {
                        money: i
                    }
                })
            }
            if (!o.isLogin()) return void(t.showLogin = !0);
            var a = r.get("userInfo") || {},
                n = a.platform_user || 0,
                s = {
                    zhihuo: !0,
                    youxun: !0,
                    flm: !0,
                    hehewan: !0,
                    qunhei: !0,
                    tianyi: !0,
                    heke: !0
                },
                l = {
                    huowu: !0
                };
            0 == n ? i("recharge", e) : n && s[n] ? i("recharge_open_url", e) : n && l[n] ? i("recharge_open_url1", e) : i("recharge_" + n, e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.goRechargePublic = n;
        var s = i(4),
            o = a(s),
            l = i(3),
            r = a(l)
    },
    17: function(t, e, i) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.
                default = t, e
        }
        function n(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(15),
            o = n(s),
            l = i(14),
            r = i(3),
            c = a(r),
            d = i(5),
            u = a(d),
            h = i(4),
            p = a(h),
            g = i(11),
            f = a(g),
            v = (i(23), i(6));
        e.
            default = {
            name: "login-reg",
            components: {
                Indicator: v.Indicator,
                Toast: v.Toast,
                MessageBox: v.MessageBox
            },
            props: {
                touristBtn: {
                    type: Boolean,
                    default:
                        !1
                },
                isShow: {
                    type: Boolean,
                    default:
                        !1
                }
            },
            data: function() {
                return {
                    channel: this.$root.channel,
                    phone: "",
                    code: "",
                    inviteCode: this.$root.inviteCode,
                    task_id: sessionStorage.getItem("task_id") || "",
                    codeBtn: "获取校验码",
                    isWx: this.$root.isWx,
                    countdown: 60
                }
            },
            computed: {
                showLogin: function() {
                    return this.isShow
                }
            },
            watch: {
                showLogin: function(t) {
                    //1 == t && _czc.push(["_trackEvent", this.currentGame, "登录", "弹出登录框"])
                }
            },
            created: function() {},
            methods: (0, o.
                default)({
                dataReport: function() {
                    var t = this;
                    u.dataReport(t.channel, function(t) {
                        c.set("first_in", !1)
                    }, function() {})
                },
                getPhoneCode: function() {
                    function t() {
                        0 == e.countdown ? (e.codeBtn = "获取校验码", e.countdown = 60) : (e.codeBtn = "重发(" + e.countdown + ")", e.countdown--, setTimeout(function() {
                            t()
                        }, 1e3))
                    }
                    var e = this;
                    "获取校验码" == e.codeBtn && e.checkPhone() && (e.isInGetCode || (e.isInGetCode = !0, u.sendSmsCode("quickLogin", e.phone, e.picCode, function(i) {
                        if (i = JSON.parse(i), e.isInGetCode = !1, 1 == i.state) {
                            var a = i.data.task_id;
                            e.task_id = a, sessionStorage.setItem("task_id", a), (0, v.Toast)("发送成功"), t()
                        } else(0, v.Toast)(i.msg)
                    }, function() {
                        e.isInGetCode = !1, (0, v.Toast)("发送失败")
                    })))
                }
            }, (0, l.mapMutations)(["RECORD_USERINFO", "RECORD_GAMEINFO"]), (0, l.mapState)(["currentGame"]), {
                login: function() {
                    function t() {
                        return e.phone && "" != e.phone ? !! /^1[3|4|5|7|8]\d{9}$/.test(e.phone) || ((0, v.Toast)("手机号格式不正确"), !1) : ((0, v.Toast)("请先输入手机号"), !1)
                    }
                    _czc.push(["_trackEvent", this.currentGame, "登录", "点击登录"]);
                    var e = this;
                    if (t()) {
                        if (!e.code || "" == e.code) return void(0, v.Toast)("请输入手机校验码");
                        v.Indicator.open({
                            text: "提交中...",
                            spinnerType: "fading-circle"
                        }), u.quickLogin(e.phone, e.code, e.task_id, e.channel, e.inviteCode, function(t) {
                            t = JSON.parse(t), v.Indicator.close(), e.isInGetCode = !1, 1 == t.state ? (p.setToken(t.data.token), c.set("tnway", "normal"), e.RECORD_USERINFO(t.data), (0, v.Toast)("登录成功"), f.init(), e.$emit("loginCallback", t)) : (0, v.Toast)(t.msg)
                        }, function() {
                            v.Indicator.close(), (0, v.Toast)("登录失败")
                        })
                    }
                },
                touristReg: function() {
                    if (!this.inTouristReg) {
                        this.inTouristReg = !0;
                        var t = this;
                        u.touristReg(t.channel, function(e) {
                            t.inTouristReg = !1, e = JSON.parse(e), 1 == e.state ? (p.setToken(e.data.token), t.RECORD_USERINFO(e.data), f.init(), t.$emit("touristCallback", e)) : (0, v.Toast)(e.msg)
                        }, function(e) {
                            t.inTouristReg = !1, v.Indicator.close()
                        })
                    }
                },
                getQueryString: function(t) {
                    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                        i = window.location.search.substr(1).match(e);
                    return null != i ? i[2] : null
                },
                orthersLogin: function(t) {
                    this.getQueryString("token");
                    "wx" == t && (c.set("tnway", "wx"), this.$root.auth())
                },
                wxLoginFail: function() {
                    (0, v.MessageBox)({
                        title: "温馨提示",
                        message: "微信登录失败！",
                        confirmButtonText: "重新授权登录"
                    }).then(function(t) {
                        "confirm" == t && (location.href = p.getBaseWebappUrl())
                    })
                },
                checkPhone: function() {
                    var t = this;
                    return t.phone && "" != t.phone ? !! /^1[3|4|5|7|8]\d{9}$/.test(t.phone) || ((0, v.Toast)("手机号格式不正确"), !1) : ((0, v.Toast)("请先输入手机号"), !1)
                },
                changePicCodeUrl: function() {}
            })
        }
    },
    18: function(t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, '.gray_mask[data-v-e184daa4]{background:#000;background-color:#000;background:rgba(0,0,0,.4)!important;filter:alpha(opacity=40);display:none;height:100%;left:0;overflow:hidden;position:fixed;_position:absolute;top:0;width:100%;z-index:110000}.authenticate-already[data-v-e184daa4],.authenticate-success[data-v-e184daa4],.bind-mobile-fail[data-v-e184daa4],.bind-mobile-success[data-v-e184daa4],.change-mobile-success[data-v-e184daa4],.modify-pwd-success[data-v-e184daa4],.no_sec_way[data-v-e184daa4],.set_password_success[data-v-e184daa4]{position:relative;top:100px}.sec-ways[data-v-e184daa4],.submit-btn[data-v-e184daa4],.top-tips[data-v-e184daa4],.u-form[data-v-e184daa4],.verify-msg[data-v-e184daa4]{padding:0 10px}.ipt-txt[data-v-e184daa4]{background:#fff;border:1px solid #e1e1e1;border-radius:5px;box-sizing:border-box;height:45px;line-height:normal;padding-left:8px}.ipt-txt[data-v-e184daa4],.mobile-code[data-v-e184daa4]{font-size:16px;vertical-align:middle;width:100%}.mobile-code[data-v-e184daa4]{background:#fff;border-radius:5px;border:1px solid #c2c2c2;box-sizing:border-box;height:40px;line-height:40px;margin-bottom:18px}.firstCode[data-v-e184daa4]{background-image:-webkit-gradient(linear,0 0,0 70%,from(#f5f5f5),to(#e6e6e6));position:relative;z-index:110001}.area-code[data-v-e184daa4]{border-radius:0;border:0;border-bottom:1px solid #e1e1e1;margin:0}.areaCodelist[data-v-e184daa4]{border-radius:0 0 5px 5px;height:280px;overflow:scroll;position:absolute;top:40px;width:100%;z-index:110001}.del_touch[data-v-e184daa4]{background-color:transparent;border:0;height:43px;right:0;top:0;width:33px}.del_touch[data-v-e184daa4],.err[data-v-e184daa4]{position:absolute;text-align:center}.err[data-v-e184daa4]{background-color:rgba(0,0,0,.85);border-radius:5px;-webkit-box-shadow:0 1px 10px rgba(0,0,0,.6);color:#fff;font-size:16px;left:50%;margin:-20px 0 0 -150px;overflow:hidden;padding:10px 20px;top:-40px;width:260px;z-index:1000}.responsive[data-v-e184daa4]{-webkit-box-orient:horizontal;box-orient:horizontal;display:-webkit-box;display:box;width:100%}.each-resone[data-v-e184daa4]{-webkit-box-flex:1;box-flex:1;display:block}.each-restwo[data-v-e184daa4]{-webkit-box-flex:2;box-flex:2;display:block}.each-resthree[data-v-e184daa4]{-webkit-box-flex:3;box-flex:3;display:block}.each-resfor[data-v-e184daa4]{-webkit-box-flex:4;box-flex:4;display:block}.each-resfive[data-v-e184daa4]{-webkit-box-flex:5;box-flex:5;display:block}.submit-btn[data-v-e184daa4]{margin-top:18px}.btn-big[data-v-e184daa4]{background:#06bf04;border:1px solid #06bf04;border-radius:5px;color:#fff;font-size:16px;height:45px;line-height:45px;width:100%}.btn-big[data-v-e184daa4],.graybtn-big[data-v-e184daa4]{display:inline-block;text-align:center}.graybtn-big[data-v-e184daa4]{background:#f0f0f0;background-image:-webkit-gradient(linear,0 0,0 70%,from(#f5f5f5),to(#e6e6e6));border:1px solid #c2c2c2;border-radius:5px;color:#41434a;display:table-cell;font-size:14px;padding:0 2px;width:122px}.graybtn-big[data-v-e184daa4],.greenbtn-big[data-v-e184daa4]{height:43px;line-height:43px;margin-left:10px;vertical-align:middle}.greenbtn-big[data-v-e184daa4]{background:#06bf04;border-radius:5px;color:#fff;display:inline-block;font-size:13px;padding:0 8px;text-align:center;width:114px}.step-menu[data-v-e184daa4]{background:#fff;-webkit-box-orient:horizontal;display:box;display:-webkit-box;display:-ms-flexbox;display:flex;height:9px;position:relative}.verify-msg[data-v-e184daa4]{font-size:16px;padding-top:20px;text-align:center}.send_tips[data-v-e184daa4],.sendEmail_tips[data-v-e184daa4]{padding:0 0 5px;text-align:center}.mobile_tips[data-v-e184daa4],.sendEmail_tips[data-v-e184daa4]{color:#06bf04;display:block;font-size:20px}.mobile_tips[data-v-e184daa4]{padding:0 0 5px;text-align:center}.right[data-v-e184daa4]{background-position:0 0}.error[data-v-e184daa4]{background-position:0 -53px}.txt-list2[data-v-e184daa4]{background:#fff;border:1px solid #e1e1e1;border-radius:5px;margin-top:10px;padding:0 10px}.infor[data-v-e184daa4]{font-size:14px;line-height:24px;margin-top:10px}.disabled[data-v-e184daa4]{background:#ddd!important;border:0!important;color:#a9a9a9!important}.btn-lskj[data-v-e184daa4]{background:#06bf04;border-radius:5px;color:#fff;float:right;font-size:12px;height:27px;line-height:27px;margin-right:10px;padding:0 8px;position:relative;top:-35px}.adaptive[data-v-e184daa4]{display:table}.kf_content[data-v-e184daa4]{font-family:\\\\5FAE\\8F6F\\96C5\\9ED1}.contact_support[data-v-e184daa4]{border:1px solid #e2e0e0;margin-top:10px}.u-form li[data-v-e184daa4]{box-sizing:border-box;margin-top:16px;padding:0;position:relative;width:100%;overflow:hidden}div.firstCode[data-v-e184daa4]{margin-bottom:0;position:relative}.err a[data-v-e184daa4]{font-weight:700;text-decoration:underline}.txt-list li[data-v-e184daa4]{background-image:-webkit-gradient(linear,0 0,0 70%,from(#f5f5f5),to(#e6e6e6));border:1px solid #d0d0d0;border-radius:5px;color:#41434a;font-size:14px;height:45px;line-height:45px;margin-top:10px;padding-left:8px;position:relative}.step-menu li[data-v-e184daa4],.txt-list li[data-v-e184daa4]{font-size:15px;position:relative}.step-menu li[data-v-e184daa4]{background-color:#e1e1e1;-webkit-box-flex:1;-moz-box-flex:1;color:#969696;-moz-flex:1;-ms-flex:1;flex:1;font-size:8px;height:8px;line-height:8px;margin:1px 1px 0 0}.txt-list2 li[data-v-e184daa4]{line-height:24px;padding:10px 0}.kf_content h3[data-v-e184daa4],.txt-list2 li[data-v-e184daa4]{border-bottom:1px solid #e2e0e0;font-size:14px}.kf_content h3[data-v-e184daa4]{color:#000;padding:15px 0 10px}.contact_support li[data-v-e184daa4]{border-bottom:1px solid #e2e0e0;font-size:14px;line-height:24px;padding:10px}.txt-list li a[data-v-e184daa4]{display:block}.input_account .tips[data-v-e184daa4]{padding:10px}.u-form .code[data-v-e184daa4]{display:block;height:38px;margin-left:10px}.responsive .ipt-txt[data-v-e184daa4]{margin-right:10px;width:auto}.mobile-code .left_tip[data-v-e184daa4]{color:#333;display:inline-block;float:left;margin-left:8px}.mobile-code .right_tip[data-v-e184daa4]{color:#666;display:inline-block;float:right;margin-right:30px}.del_touch .del_u[data-v-e184daa4]{background-color:#bbb;border:1px solid #bbb;border-radius:18px;box-sizing:border-box;display:inline-block;height:18px;margin-top:12px;position:relative;width:18px}.password .top-tips[data-v-e184daa4]{color:#41434a;font-size:14px;padding-top:20px;text-align:left}.password .tips[data-v-e184daa4]{color:#41434a;font-size:12px;overflow:hidden;padding:18px 10px 0;text-align:right}.infor .stress[data-v-e184daa4],.lnk[data-v-e184daa4]{color:#06bf04}.kf_content .question_content[data-v-e184daa4]{padding:10px 0 7px}.kf_content .question[data-v-e184daa4]{background:#fff;margin-bottom:15px;padding:0 15px}.u-form .code img[data-v-e184daa4]{height:38px;width:98px}.txt-list li[data-v-e184daa4]:after{border:solid #b4b4b4;border-width:2px 2px 0 0;content:" ";height:6px;position:absolute;right:10px;top:18px;-webkit-transform:rotate(45deg);width:6px}.txt-list li .stress[data-v-e184daa4]{color:#06bf04}.step-menu li.current[data-v-e184daa4]{background-color:#61bf60;color:#fff}.step-menu li[data-v-e184daa4]:last-child{margin:1px 0 0}.txt-list2 li[data-v-e184daa4]:last-child{border-bottom:none}.txt-list2 li .q[data-v-e184daa4]{color:#4cb700}.txt-list2 li .a[data-v-e184daa4]{color:#999}.contact_support li[data-v-e184daa4]:last-child{border-bottom:none}.contact_support li .q[data-v-e184daa4]{color:#06bf04}.contact_support li .a[data-v-e184daa4]{color:#999}.u-form .adaptive .ipt-txt[data-v-e184daa4]{display:table-cell;width:98%}.del_touch .del_u[data-v-e184daa4]:after,.del_touch .del_u[data-v-e184daa4]:before{background-color:#fff;border-radius:12px;content:"";height:2px;left:2px;overflow:hidden;position:absolute;top:7px;width:12px}.del_touch .del_u[data-v-e184daa4]:before{-webkit-transform:rotate(-45deg)}.del_touch .del_u[data-v-e184daa4]:after{-webkit-transform:rotate(45deg)}.u-form .adaptive .code[data-v-e184daa4]{display:table-cell;font-size:14px;margin-top:3px;padding:0;vertical-align:middle;width:108px}.kf_content .question .tips[data-v-e184daa4]{font-size:14px;line-height:24px;margin-left:0}.step-menu li.current[data-v-e184daa4]:after{background-color:#61bf60}.kf_content .question .tips span[data-v-e184daa4]{color:#06bf04}#wrap[data-v-e184daa4]{background-color:#f0f0f0;height:500px;width:100%}#head[data-v-e184daa4]{background-color:#06bf04;height:42px;line-height:42px;width:100%}#navtit[data-v-e184daa4]{color:#fff;font-size:18px;margin:0 auto;text-align:center;width:220px}#qt_global_text a[data-v-e184daa4]{color:#fff}#head .go-back-wap[data-v-e184daa4]{float:left;padding-left:20px;width:20px}#head .ico-back[data-v-e184daa4]{border:solid #fff;border-width:3px 0 0 3px;display:inline-block;height:12px;-webkit-transform:rotate(-45deg);vertical-align:middle;width:12px}@media screen and (max-height:400px){.thirdLogin[data-v-e184daa4]{background:red;display:none}}.thirdLogin[data-v-e184daa4]{bottom:15%;height:50px;left:50%;margin-left:-100px;position:absolute;text-align:center;width:200px}.thirdLogin .thirdLoginTip[data-v-e184daa4]{border-top:1px solid #d9d9d9;color:#9d9d9d;display:none;margin-bottom:15px;position:relative}.thirdLogin .thirdIcon[data-v-e184daa4]{background-repeat:no-repeat;background-position:0 0;background-size:150px 150px;display:none;height:50px;margin:0 5px;overflow:hidden;width:50px}.thirdLogin .weixin[data-v-e184daa4]{background-position:0 0}.thirdLogin .sina[data-v-e184daa4]{background-position:0 -50px}.thirdLogin .qq[data-v-e184daa4]{background-position:0 -101px}.thirdLogin .thirdLoginTip .thirdLoginTitle[data-v-e184daa4]{background:#f0f0f0;left:50%;margin-left:-55px;position:absolute;top:-10px;width:110px}.thirdLogin .weixin[data-v-e184daa4]:active{background-position:-101px 0}.thirdLogin .sina[data-v-e184daa4]:active{background-position:-101px -50px}.thirdLogin .qq[data-v-e184daa4]:active{background-position:-101px -101px}.btn-big[data-v-e184daa4],.greenbtn-big[data-v-e184daa4]{background:#b71e33;border:1px solid #b71e33}.lnk[data-v-e184daa4]{color:#2f5cdd}.verify-msg .key[data-v-e184daa4],.verify-msg .sendEmail_tips[data-v-e184daa4]{color:#e32116}.txt-list li .stress[data-v-e184daa4]{color:red}.step-menu li.current[data-v-e184daa4]{background-color:#ffbf63}.step-menu[data-v-e184daa4]:first-child:after{border-left-color:#ffbf63}#head[data-v-e184daa4]{background-color:#b71e33}.contact_support li .q[data-v-e184daa4],.infor .stress[data-v-e184daa4],.kf_content .question .tips a[data-v-e184daa4]{color:#b71e33}.btn-lskj[data-v-e184daa4]{background:#b71e33}.mobile_tips[data-v-e184daa4],.tips a.lnk[data-v-e184daa4],.txt-list2 li .q[data-v-e184daa4]{color:#b71e33}.get-sms-token-1[data-v-e184daa4]{width:70px;background:none;border:0;text-align:right}.orthersLogin[data-v-e184daa4]{margin:.1rem .15rem 0;border-top:1px solid #ccc;padding-top:.15rem}.oLogin[data-v-e184daa4]{width:.5rem;height:.5rem;display:inline-block;margin-right:.1rem}.fade-enter-active[data-v-e184daa4]{-webkit-animation:bounce-in .5s;animation:bounce-in .5s}.fade-leave-active[data-v-e184daa4]{-webkit-animation:bounce-out .5s;animation:bounce-out .5s}@-webkit-keyframes bounce-in{0%{margin-top:-100%}to{margin-top:0}}@keyframes bounce-in{0%{margin-top:-100%}to{margin-top:0}}@-webkit-keyframes bounce-out{0%{margin-top:0}to{margin-top:-100%}}@keyframes bounce-out{0%{margin-top:0}to{margin-top:-100%}}.orthersLogin[data-v-e184daa4]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.orthersLogin .wxLogin[data-v-e184daa4]{background:url(' + i(20) + ") no-repeat;background-size:100% 100%}", ""])
    },
    19: function(t, e, i) {
        var a = i(18);
        "string" == typeof a && (a = [
            [t.id, a, ""]
        ]);
        i(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    20: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAB41BMVEUAAAApvBAqvRApvRAqvBApvBApvBApvBAqvRApvRApvBAqvBApvBApuxAqvBAquxApvBAqvREqvBAqvBApvBApvBApvBApvBAqvBApvRAqvRAsvRAqvBApvBAqvBAquxApvBAovRApvBApvRApvBApvBApvRAqvBApvBApvBApvBAovBApvBApvBAqvRAqvBApvRAqvBApvBApvRApvBApuxAovRAovBApvBApvBAqvBH///8rvBIqvBAnuw4buAEZtwAXtQAduAMluwsguQYjugoiuQdjzkIjugn7/vv3/fb1/POx56fh9t216a0svRMTsgBRySwVtAD9//3t+urr+ejY89KS3YVZzEZVyUBSyT5KxzUxvxnH7r+r5Z9azDg8wiXx+/Dk9+DL78DC7Lm46bCt5qKK23x71mxcy0hNxyc4wSA1wB3p+OXc9NfV8s7S8cvD7by+67al45iN3HWG2XOA13FPyDpUyjBDxC5Awynv+uzm9+Ld9NXP8MnN8Mag4pWc4JCV3oeP3IGT3n131Wdx02Bp0Vhy01Rv0lFr0UxezUtezT1VyjJJxyQPsAD5/fi86rS06Kqm5JyM23+H2nllz0Wi4o+a34l+12Nu0V111Flkz1Nizk/V8tBgzk5XyjTtJ1mWAAAAOnRSTlMA7hAIy48x+lsi6t7UwqKBcvz05+PYxLyUeywdDAX2t7NCQCfPv6aYbmpWUUvwrJxgORaKdWNGNhqG4iGUBAAABqhJREFUaN6tmWdX2zAUhpUQ9h6FQpllzxa6ZScecUzYEHYSVtmj7F1o2ZvSvddPLQHqJLYcy4mfbzqHw4P06spXAuChL3t4ryIvUgevCY28lR8TfD8EaIb+bmxKZChEoIsqeJSbEbghvTI2KR76IDMlLDwwRW5RNFRGV1jqv+JOcBLEJPq+n4oHggIHQ5j6cIKKI6BKUtRutpwUqJ7QYL2aaQST0C+iyrAdaQboL6GpmI6wCBgAFXdwHLFGGBCRIcpx3IaBorurJCmAgZPguzIzBEdAhIb5Og0roDbE+9jKt6FWJFTK7iuoHRFP0I4SI9SQqCDktyMCakoMqkAMUGMeqQzdZHFhJFVJMiWlfzcUymClbc20leetvK2ZocwqRPnixYqSmQLFOLvGOj80utj+eOCwMJwRe4MUe0seQimkiaWm9us76gg37a96x40cZyLx9nG41/dcJ1VAmlrbeUFIqP293E+zTViWe56SGMRC2SY7Bwg0DaNNDCRxCj/NYyLlknmY6YMGQp5X3bQZYlDolgRDMaxpi/DJ2yWex5hLqDCV8EQognbOE0rUWyhSRSqp4rVijXOEMo08q2zJrJI5UEymegKHEdYKFYm7aeTEfw+zS7ipIbypaSUERinlujQgYycZe63wazr2jr/1eChefD0+GhG8tXZKsV4Srk4wvaivtnLu0Ger+/rO+2bcBX903tfX8l4Yz3EmJQkZ7JKUQi+MzC9CYLGvurr6zRdhPNRyOT5fFKbSesAoZp+cIV0ts9kj9b1Vl2RBGA+2nFVXt+y5Y3nHKtakzlUqydALrt/jMOk4apl4c7IpjOsWL8erg4RAnYOBSpQA8DRRJPlOeAb9ZWln0/N07F3c6yE8WGIUN9htAErivSOxfiBwGBje3T8d7/q5RrO82eQz/jw9eCbK3YJR7DXDP51mxtR1ONa582m/a9LE0RYfodwBMSKJuUFRUd9/KehtqLvJv7ZtaMxhZSwkREM+AVlqJdPjF5OjG4Q3rb3jlGxhloIolZIRC7PTTiAYXmNkokkFCeJMZnw6Ri/W5H6gbYxjSfT2giKJtdGXY/di/CUhywcz8tufJZHwn3x9QppP6wgfDFtRlmSxBHJdhCwd/Eqd0ueSk0qipRLnNCFHN/+cUOATbcKQmKglQob3zIL70Nr0yKZ9ulY4dxystMeTSCA1JfPn1nZPCmf88x8tJ+/+D15/Xv3W8X8wz0sOs0ipxMgsoyWvbSNC0S9OVJ//3byZ1I+J6pYjIaxTyVRSpBLSws2jS8TUJkiWJvpWW2Zv6uN44mz15KWQvQ2RidTCrm+g2jnHoUcHeXz2ubf1/6/9fHYy6O5hpzjJFg5FWCg7otHeYLc92/tBj+QaBts8ohunoTcFIBFKMTIOafgd9DyBxZhNcqwYkDcTZqVBkjvVgyf52Ay9KQLZEGUxUuvv3oqODGoOT9IpljyWvZDScFY0ExZzJssiSXwaSIVo2PWXokwu3mM5Wn+JGpjEO6AMfe01cmOEN8/pTizJi3VWdNJnAH0iWsIPXVXzyH7vbNt1QXSfYknmKNERGQsAyEJKLGt1rpahm6ZofuVweXtra2uFn8aRfBffjVxv7EXo3HcJYsHO0JCEJpZmmi/hsdbrlbgJS3Tds0OQq8UODdk5xvv9wdLfpizpEk8k6+pJMAohMU05SMkTh5FeVnR8pczIq1YccipmRH9j5ZTueT1mjhT1j0+vJGkQlyYKzvp2NEkaiQpwTTa2haT6Z3w5nDQpvThcEwbxYfuH5RsmJyVxROpvJPpb+BKStXyslWlgGZb08RoVB/Fp4m12dPzbiPvQrXRBEpQE8SGNtNXe217j2cdcdeAN/RSi13YTB1VhYfnJw4XBjvaBgYG2mcbOP5MH0646ZKAIXbjn62AeVIfRzDKU09Ft716BNpozM87ODWJUfDSScd7vnEaoFtLEszRNUxbSNeBs6wtDU1Zxm+JNDESgMqnuKdFMcsTv2wkwUI3ZapR9thMqUmtu6YGEYI0dCaj/O6TnaSuJAyhCdFo6YgCax/HaOVKCgAxhmlmS04EscVptrKfAB6naOBT+nflIgxUzVAEF7mcG6sjWA0XuJgW4dzMABrn5ASgyiwAmD/x2RFUCbHIMfinIwiqggqBYnXqHoQyoJCRbpSIpFfjB4wKIT0RsOPCPnGzMookskirwyQ2OIpUMiSlhehAgpYUGX8uUJaxTYKTnFN9Dtcvl0c/C0oCGVIVUFj/ITs7P05WXR+ZHR8c8LAkJTwd4/AMilVewaIvjSwAAAABJRU5ErkJggg=="
    },
    21: function(t, e, i) {
        var a, n;
        i(19), a = i(17);
        var s = i(22);
        n = a = a || {}, "object" != typeof a.
            default &&"function" != typeof a.
            default ||(n = a = a.
            default), "function" == typeof n && (n = n.options), n.render = s.render, n.staticRenderFns = s.staticRenderFns, n._scopeId = "data-v-e184daa4", t.exports = a
    },
    22: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showLogin,
                        expression: "showLogin"
                    }],
                    staticStyle: {
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        width: "100%",
                        height: "100%",
                        "z-index": "999",
                        "transform-origin": "0px 0px 0px",
                        opacity: "1",
                        transform: "scale(1, 1)"
                    }
                }, [i("div", {
                    staticClass: "passport-login-bk",
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        background: "#000",
                        opacity: "0.7"
                    },
                    on: {
                        click: function(e) {
                            t.showLogin = !1, t.$emit("close")
                        }
                    }
                }), t._v(" "), i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showLogin,
                        expression: "showLogin"
                    }],
                    staticClass: "main-form login-form",
                    staticStyle: {
                        "margin-top": "0px",
                        position: "fixed",
                        width: "100%",
                        "border-top-width": "0px",
                        top: "0px",
                        padding: "0 0 0.15rem"
                    },
                    attrs: {
                        id: "form-login"
                    }
                }, [i("header", {
                    staticClass: "topnavbar"
                }, [i("h2", {
                    staticClass: "nav-tit"
                }, [t._v("登录")]), t._v(" "), i("div", {
                    staticClass: "nav-wrap-right closs-btn",
                    staticStyle: {
                        padding: "0 0.1rem"
                    }
                }, [i("a", {
                    staticClass: "icon-uc",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            t.showLogin = !1, t.$emit("close")
                        }
                    }
                }, [t._v("关闭")])])]), t._v(" "), i("ul", {
                    staticClass: "u-form"
                }, [i("li", {
                    staticClass: "form-item"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.phone,
                        expression: "phone"
                    }],
                    staticClass: "ipt-txt",
                    attrs: {
                        type: "text",
                        name: "account",
                        placeholder: "请输入您的手机号"
                    },
                    domProps: {
                        value: t.phone
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.phone = e.target.value)
                        }
                    }
                }), t._v(" "), i("div", {
                    staticClass: "del_touch",
                    class: {
                        hide: 0 == t.phone.length
                    },
                    on: {
                        click: function(e) {
                            t.phone = ""
                        }
                    }
                }, [i("span", {
                    staticClass: "del_u"
                })])]), t._v(" "), i("li", {
                    staticClass: "form-item adaptive none"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.code,
                        expression: "code"
                    }],
                    staticClass: "ipt-txt",
                    attrs: {
                        type: "text",
                        name: "smsToken",
                        placeholder: "请输入手机校验码",
                        maxlength: "6"
                    },
                    domProps: {
                        value: t.code
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.code = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", {
                    staticClass: "graybtn-big get-sms-token",
                    on: {
                        click: function(e) {
                            t.getPhoneCode()
                        }
                    }
                }, [t._v(t._s(t.codeBtn))])]), t._v(" "), i("li", {
                    staticClass: "form-item"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inviteCode,
                        expression: "inviteCode"
                    }],
                    staticClass: "ipt-txt",
                    attrs: {
                        type: "text",
                        name: "inviteCode",
                        placeholder: "请输入邀请码（选填）"
                    },
                    domProps: {
                        value: t.inviteCode
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.inviteCode = e.target.value)
                        }
                    }
                }), t._v(" "), i("div", {
                    staticClass: "del_touch ",
                    class: {
                        hide: 0 == t.inviteCode.length
                    },
                    on: {
                        click: function(e) {
                            t.inviteCode = ""
                        }
                    }
                }, [i("span", {
                    staticClass: "del_u"
                })])])]), t._v(" "), i("div", {
                    staticClass: "btns btns-mt",
                    staticStyle: {
                        padding: "0 0.15rem"
                    }
                }, [i("a", {
                    staticClass: "btn btn-primary",
                    staticStyle: {
                        border: "1px solid #e61d38",
                        "background-color": "#fff",
                        color: "#e61d38"
                    },
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: t.login
                    }
                }, [t._v("一键登录")])]), t._v(" "), !t.isWx && t.touristBtn ? i("div", {
                    staticClass: "btns ",
                    staticStyle: {
                        padding: "0.15rem 0.15rem 0"
                    }
                }, [i("a", {
                    staticClass: "btn btn-primary",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            t.touristReg()
                        }
                    }
                }, [t._v("快速玩玩")])]) : t._e(), t._v(" "), t.isWx ? i("div", {
                    staticClass: "btns orthersLogin"
                }, [i("a", {
                    staticClass: "wxLogin oLogin",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            t.orthersLogin("wx")
                        }
                    }
                })]) : t._e()])])], 1)
            },
            staticRenderFns: []
        }
    },
    28: function(t, e, i) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.
                default = t, e
        }
        function n(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(41),
            o = n(s),
            l = i(40),
            r = n(l),
            c = i(12),
            d = n(c),
            u = i(5),
            h = a(u),
            p = i(4),
            g = a(p),
            f = i(3),
            v = a(f);
        e.
            default = {
            name: "congratulate",
            props: {
                type: {
                    type: String
                }
            },
            data: function() {
                var t = v.get("userInfo") || {};
                return (0, d.
                    default)({
                    mounted: !1,
                    platform_user: t.platform_user,
                    congratulateList: [],
                    scrollTimeoutId: null,
                    textTop: 0,
                    textTuration: "500ms"
                }, "congratulateList", [])
            },
            methods: {
                congratulate: function() {
                    var t = this;
                    return (0, r.
                        default)(o.
                        default.mark(function e() {
                            var i, a, n;
                            return o.
                                default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = t.type, i = "tn" == a || "gamecenter" == a ? "congratulate" : "doll_congratelate", n = t, h.postNoParams(i, function(t) {
                                                t = JSON.parse(t);
                                                var e = [];
                                                e = n.platform_user ? [{
                                                    type: 202,
                                                    title: '<span style="color:#0fff3f;">官方电话：<span>020-22093063</span></span>'
                                                }, {
                                                    type: 200,
                                                    title: "关注“云乐互娱”免费领取3颗幸运豆！"
                                                }] : [], n.congratulateList = e, n.congratulateList = n.congratulateList.concat(t);
                                                var i = n.congratulateList.length;
                                                if (i > 1) {
                                                    var s = function t(e) {
                                                            n.scrollTimeoutId = setTimeout(function() {
                                                                n.scrollTimeoutId = null, o = ++o % (i + 1);
                                                                var e = "gamecenter" == a ? -(35 * o / 100) : -(2 * o / 10);
                                                                0 == Math.abs(e) ? n.textTuration = "0ms" : n.textTuration = "500ms", n.textTop = e, t(1500)
                                                            }, e)
                                                        },
                                                        o = 0;
                                                    s(1500)
                                                }
                                            }, function() {});
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, t)
                        }))()
                },
                toShowFllowWechat: function() {
                    if (!this.platform_user) return g.isLogin() ? void this.$router.push({
                        name: "welfareCenter",
                        params: {}
                    }) : void(this.showLogin = !0)
                }
            },
            created: function() {},
            mounted: function() {
                this.congratulate()
            },
            beforeRouteLeave: function() {
                clearTimeout(this.scrollTimeoutId)
            }
        }
    },
    30: function(t, e) {
        "use strict";
        e.__esModule = !0, e.
            default = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    },
    31: function(t, e, i) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        e.__esModule = !0;
        var n = i(60),
            s = a(n);
        e.
            default = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var a = e[i];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, s.
                        default)(t, a.key, a)
                }
            }
            return function(e, i, a) {
                return i && t(e.prototype, i), a && t(e, a), e
            }
        }()
    },
    34: function(t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".u-congratulate .text-scroll-wrap{position:relative;top:0;background:#eee}.u-congratulate .text-scroll-1{background:transparent}.u-congratulate .text-scroll-1 .text-scroll-ul{color:#999}.u-congratulate .text-scroll-1 .text-scroll-ul .text-scroll-li span{color:#000}", ""])
    },
    35: function(t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".doll-notice img[data-v-15768b6a]{display:none}.doll-notice div[data-v-15768b6a]{height:.2rem;padding:0;text-align:center;overflow:hidden}.doll-notice div ul[data-v-15768b6a]{padding:0 .15rem;line-height:.2rem;text-align:left;overflow:hidden}.doll-notice div ul .icon-notice[data-v-15768b6a]{display:inline-block;vertical-align:middle;width:.32rem;height:.16rem;line-height:.16rem;padding-right:.06rem;text-align:center;color:#a85742;background:url(/static/img/doll/t01c1c9564aabf2d5a2.png) no-repeat;background-size:contain;color:red;background:#fff;margin:0 auto .03rem;border:1px solid red}.doll-notice div ul li[data-v-15768b6a]{height:.2rem}.doll-notice div ul a[data-v-15768b6a]{color:#fff}.tn-notice img[data-v-15768b6a]{display:none}.tn-notice div[data-v-15768b6a]{width:3.1rem;height:.2rem;margin:0 auto;overflow:hidden;border-radius:.05rem;background-color:rgba(0,0,0,.6);position:relative;text-align:center;line-height:.2rem}.tn-notice div ul[data-v-15768b6a]{height:auto;color:#fff;font-size:.12rem;top:0;position:absolute;left:0;right:0}.tn-notice div ul li[data-v-15768b6a]{height:100%;padding:0 .1rem}.tn-notice div ul li p[data-v-15768b6a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tn-notice div ul li span[data-v-15768b6a]{color:#ffd800}.gamecenter-notice[data-v-15768b6a]{background:#fff;padding:.12rem 0 .05rem;position:relative;top:0;left:0}.gamecenter-notice img[data-v-15768b6a]{position:absolute;top:.04rem;left:0;width:.58rem;height:.43rem;display:block}.gamecenter-notice div[data-v-15768b6a]{height:.35rem;padding:0;text-align:center;overflow:hidden;width:96%;margin:0 auto;background-color:#464646;border-radius:.17rem}.gamecenter-notice div ul[data-v-15768b6a]{padding:0 0 0 10%;line-height:.35rem;text-align:center;overflow:hidden}.gamecenter-notice div ul li[data-v-15768b6a]{height:100%;text-align:center}.gamecenter-notice div ul li p[data-v-15768b6a]{color:#fff}.gamecenter-notice div ul li p span[data-v-15768b6a]:first-child{color:#fc0;margin:.05rem}", ""])
    },
    36: function(t, e, i) {
        var a = i(34);
        "string" == typeof a && (a = [
            [t.id, a, ""]
        ]);
        i(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    37: function(t, e, i) {
        var a = i(35);
        "string" == typeof a && (a = [
            [t.id, a, ""]
        ]);
        i(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    38: function(t, e, i) {
        var a, n;
        i(37), i(36), a = i(28);
        var s = i(39);
        n = a = a || {}, "object" != typeof a.
            default &&"function" != typeof a.
            default ||(n = a = a.
            default), "function" == typeof n && (n = n.options), n.render = s.render, n.staticRenderFns = s.staticRenderFns, n._scopeId = "data-v-15768b6a", t.exports = a
    },
    39: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: t.type + "-notice",
                    staticStyle: {
                        "min-height": "0.35rem"
                    }
                }, [i("img", {
                    attrs: {
                        src: "static/img/textIcon.png"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "ctB"
                }, [t.congratulateList.length > 0 ? i("ul", {
                    style: {
                        transform: "translate(0," + t.textTop + "rem)",
                        "transition-duration": t.textTuration
                    }
                }, [t._l(t.congratulateList, function(e) {
                    return i("li", [2 == e.type ? i("p", [t._v("恭喜"), i("span", [t._v(t._s(e.phone))]), t._v("用"), i("span", [t._v(t._s(e.coin))]), t._v("豆豆套中"), i("span", [t._v(t._s(e.level))]), t._v("级牛，获得"), i("span", [t._v(t._s(e.award))]), t._v("豆豆")]) : t._e(), t._v(" "), 1 == e.type ? i("p", [t._v("恭喜"), i("span", [t._v(t._s(e.phone))]), t._v("兑换了"), i("span", [t._v(t._s(e.award))])]) : t._e(), t._v(" "), 3 == e.type ? i("p", [t._v("恭喜"), i("span", [t._v(t._s(e.phone))]), t._v("兑换了"), i("span", [t._v(t._s(e.award))])]) : t._e(), t._v(" "), 4 == e.type ? i("a", [t._v("恭喜"), i("span", [t._v(t._s(e.phone))]), t._v("获得了"), i("span", [t._v(t._s(e.award))])]) : t._e(), t._v(" "), 200 == e.type ? i("p", {
                        on: {
                            click: function(e) {
                                t.toShowFllowWechat()
                            }
                        }
                    }, [i("span", [t._v(t._s(e.title))])]) : t._e(), t._v(" "), 201 == e.type ? i("p", {
                        on: {
                            click: function(e) {
                                t.goRecharge(100)
                            }
                        }
                    }, [i("span", [t._v(t._s(e.title))])]) : t._e(), t._v(" "), 202 == e.type ? i("p", {
                        domProps: {
                            innerHTML: t._s(e.title)
                        }
                    }) : t._e()])
                }), t._v(" "), i("li", [2 == t.congratulateList[0].type ? i("p", [t._v("恭喜"), i("span", [t._v(t._s(t.congratulateList[0].phone))]), t._v("用"), i("span", [t._v(t._s(t.congratulateList[0].coin))]), t._v("豆豆套中"), i("span", [t._v(t._s(t.congratulateList[0].level))]), t._v("级牛，获得"), i("span", [t._v(t._s(t.congratulateList[0].award))]), t._v("豆豆")]) : t._e(), t._v(" "), 1 == t.congratulateList[0].type ? i("p", [t._v("恭喜"), i("span", [t._v(t._s(t.congratulateList[0].phone))]), t._v("兑换了"), i("span", [t._v(t._s(t.congratulateList[0].award))])]) : t._e(), t._v(" "), 3 == t.congratulateList[0].type ? i("p", [t._v("恭喜"), i("span", [t._v(t._s(t.congratulateList[0].phone))]), t._v("兑换了"), i("span", [t._v(t._s(t.congratulateList[0].award))])]) : t._e(), t._v(" "), 4 == t.congratulateList[0].type ? i("a", [t._v("恭喜"), i("span", [t._v(t._s(t.congratulateList[0].phone))]), t._v("获得了"), i("span", [t._v(t._s(t.congratulateList[0].award))])]) : t._e(), t._v(" "), 200 == t.congratulateList[0].type ? i("p", {
                    on: {
                        click: function(e) {
                            t.toShowFllowWechat()
                        }
                    }
                }, [i("span", [t._v(t._s(t.congratulateList[0].title))])]) : t._e(), t._v(" "), 201 == t.congratulateList[0].type ? i("p", {
                    on: {
                        click: function(e) {
                            t.goRecharge(100)
                        }
                    }
                }, [i("span", [t._v(t._s(t.congratulateList[0].title))])]) : t._e(), t._v(" "), 202 == t.congratulateList[0].type ? i("p", {
                    domProps: {
                        innerHTML: t._s(t.congratulateList[0].title)
                    }
                }) : t._e()])], 2) : t._e()])])
            },
            staticRenderFns: []
        }
    },
    43: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.
            default = {
            name: "share-guide",
            data: function() {
                return {
                    wechatGuide: !1,
                    browserguide: !1,
                    showFllowWechat: !1
                }
            },
            methods: {
                showShareGuide: function() {
                    var t = navigator.userAgent.toLowerCase();
                    "micromessenger" == t.match(/MicroMessenger/i) || t.indexOf("mqqbrowser") > -1 ? this.wechatGuide = !0 : this.browserguide = !0
                },
                showFollow: function() {
                    this.showFllowWechat = !0
                },
                hideGuide: function() {
                    this.browserguide = !1, this.wechatGuide = !1, this.showFllowWechat = !1
                },
                clickFllowWechat: function(t) {
                    t.stopPropagation()
                }
            }
        }
    },
    52: function(t, e, i) {
        var a, n;
        a = i(43);
        var s = i(53);
        n = a = a || {}, "object" != typeof a.
            default &&"function" != typeof a.
            default ||(n = a = a.
            default), "function" == typeof n && (n = n.options), n.render = s.render, n.staticRenderFns = s.staticRenderFns, t.exports = a
    },
    53: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [t.browserguide ? i("div", {
                    staticClass: "mask_share",
                    staticStyle: {
                        display: "block",
                        opacity: "1"
                    },
                    on: {
                        click: t.hideGuide
                    }
                }, [i("div", {
                    staticClass: "sharetips sharetips-wap"
                })]) : t._e(), t._v(" "), t.wechatGuide ? i("div", {
                    staticClass: "mask_share ",
                    staticStyle: {
                        display: "block",
                        opacity: "1"
                    },
                    on: {
                        click: t.hideGuide
                    }
                }, [i("div", {
                    staticClass: "sharetips sharetips-wx"
                })]) : t._e(), t._v(" "), t.showFllowWechat ? i("div", {
                    staticClass: "panel-reminder",
                    on: {
                        click: t.hideGuide
                    }
                }, [i("div", {
                    staticClass: "fllow-wechat",
                    staticStyle: {
                        top: "16%"
                    },
                    on: {
                        click: function(e) {
                            t.clickFllowWechat(e)
                        }
                    }
                }, [t._m(0)])]) : t._e()])
            },
            staticRenderFns: [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "box"
                }, [i("h3", [t._v("关注“麦子游戏”免费领取3颗幸运豆！")]), t._v(" "), i("p", [i("img", {
                    attrs: {
                        src: "static/img/wechat.png",
                        alt: ""
                    }
                })]), t._v(" "), i("p", [t._v("长按识别二维码")])])
            }]
        }
    },
    67: function(t, e, i) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.
                default = t, e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(10),
            s = i(4),
            o = a(s),
            l = i(6);
        e.
            default = {
            name: "progress-award",
            components: {
                Toast: l.Toast
            },
            props: {
                times: {
                    default:
                        0, type: Number
                },
                type: {
                    type: String,
                    default:
                        ""
                },
                coin: {
                    type: Number
                }
            },
            data: function() {
                return {
                    showAward: !1,
                    awardCoin: 0,
                    failText: ["我一定是手滑了，才让牛牛跑了", "小牛牛，这次先饶了你，下次等我再收拾你", "哎呀我就不信邪了，牛牛拿命来", "今天心情好，放你一条生路"],
                    rechargeDiscount: !1
                }
            },
            watch: {
                coin: function(t, e) {
                    t < 1 && (this.rechargeDiscount = !0)
                }
            },
            computed: {
                progressStyle: function() {
                    switch (this.type) {
                        case "doll":
                            return "left: .15rem;top: .45rem;z-index:21;";
                        case "bull":
                            return "bottom:0.6rem;right:0rem;transform:scale(0.8)"
                    }
                }
            },
            methods: {
                getAward: function() {
                    var t = this;
                    t.isGetting || (t.isGetting = !0, o.post("?&method=user.getPackage", {
                        type: t.type
                    }, function(e) {
                        e = JSON.parse(e), 1 == e.state ? (t.isGetting = !1, t.awardCoin = e.data.coin, t.showAward = !0, t.$emit("callback")) : (t.isGetting = !1, (0, l.Toast)(e.msg))
                    }))
                },
                goRecharge: function() {
                    (0, n.goRechargePublic)(this, 20)
                }
            }
        }
    },
    69: function(t, e, i) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        function n() {
            f = window.innerWidth, v = window.innerHeight, 800 == f && (f = 320)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Smog = e.Shake = e.Gatchbull = e.Arrow = e.ThrowRope = e.Bull1 = e.Bull = void 0;
        var s = i(73),
            o = a(s),
            l = i(76),
            r = a(l),
            c = i(75),
            d = a(c),
            u = i(30),
            h = a(u),
            p = i(31),
            g = a(p);
        e.resizeWH = n;
        var f = window.innerWidth,
            v = window.innerHeight;
        800 == f && (f = 320);
        var m = function() {
            function t(e, i, a, n, s, o, l, r) {
                (0, h.
                    default)(this, t), this.img = e, this.w = i, this.h = a, this.x = n, this.y = s, this.sx = o, this.sy = l, this.nowFrame = 0, this.maxFrame = r
            }
            return (0, g.
                default)(t, [{
                key: "nextFrame",
                value: function() {
                    this.nowFrame++
                }
            }, {
                key: "draw",
                value: function(t) {
                    t.save(), t.translate(this.x, this.y), this.nowFrame = this.nowFrame % this.maxFrame, this.img && t.drawImage(this.img, 0, this.nowFrame * this.h, this.w, this.h, this.sx, this.sy, this.w, this.h), t.restore()
                }
            }]), t
        }();
        e.Bull = function(t) {
            function e(t, i, a, n, s) {
                (0, h.
                    default)(this, e);
                var l = (0, r.
                    default)(this, (e.__proto__ || (0, o.
                    default)(e)).call(this, t, i, a, f + 100, v / 3 * 1.75 - Math.ceil(35 * Math.random()), -i / 2, -a / 2, n));
                return l.speed = s, l
            }
            return (0, d.
                default)(e, t), (0, g.
                default)(e, [{
                key: "move",
                value: function() {
                    this.x -= this.speed
                }
            }]), e
        }(m), e.Bull1 = function(t) {
            function e(t, i, a, n, s, l) {
                (0, h.
                    default)(this, e);
                var c = (0, r.
                    default)(this, (e.__proto__ || (0, o.
                    default)(e)).call(this, i, a, n, f + 100, v / 3 * 1.75 - Math.ceil(35 * Math.random()), -a / 2, -n / 2, s));
                return c.speed = l, c.ygInfo = t, c
            }
            return (0, d.
                default)(e, t), (0, g.
                default)(e, [{
                key: "move",
                value: function() {
                    this.x -= this.speed
                }
            }, {
                key: "draw",
                value: function(t) {
                    function e(t, e, i, a) {
                        return {
                            x: t,
                            y: e,
                            width: i,
                            height: a
                        }
                    }
                    function i(t, e, i) {
                        var n = a(t.x + e, t.y),
                            s = a(t.x + t.width, t.y),
                            o = a(t.x + t.width, t.y + t.height),
                            l = a(t.x, t.y + t.height),
                            r = a(t.x, t.y);
                        i.beginPath(), i.moveTo(n.x, n.y), i.arcTo(s.x, s.y, o.x, o.y, e), i.arcTo(o.x, o.y, l.x, l.y, e), i.arcTo(l.x, l.y, r.x, r.y, e), i.arcTo(r.x, r.y, n.x, n.y, e), i.stroke()
                    }
                    t.save(), t.translate(this.x, this.y), this.nowFrame = this.nowFrame % this.maxFrame, this.img && t.drawImage(this.img, 0, this.nowFrame * this.h, this.w, this.h, this.sx, this.sy, this.w, this.h), t.textAlign = "left", t.font = "20px Verdana", t.lineWidth = 3, t.strokeStyle = "#ffffff", t.strokeText(this.ygInfo.sub_title, this.sx + this.w / 2 - 75, this.sy + this.w / 2 - 90, 150), t.fillStyle = "#1270ff", t.fillText(this.ygInfo.sub_title, this.sx + this.w / 2 - 75, this.sy + this.w / 2 - 90, 150), t.font = "14px Verdana", t.lineWidth = 2, t.strokeText("第" + this.ygInfo.activity_id + "期", this.sx + this.w / 2 - 75, this.sy + this.w / 2 - 70, 150), t.fillText("第" + this.ygInfo.activity_id + "期", this.sx + this.w / 2 - 75, this.sy + this.w / 2 - 70, 150), t.strokeText("进度：" + this.ygInfo.progress, this.sx + this.w / 2, this.sy + this.w / 2 - 70, 150), t.fillText("进度：" + this.ygInfo.progress, this.sx + this.w / 2, this.sy + this.w / 2 - 70, 150), t.drawImage(this.ygInfo.img, this.sx + this.w / 2 - 25, this.sy + this.w / 2 - 50, 49, 49), t.strokeStyle = "#9f4000";
                    var a = function(t, e) {
                            return {
                                x: t,
                                y: e
                            }
                        },
                        n = e(this.sx + this.w / 2 - 25, this.sy + this.w / 2 - 50, 50, 50);
                    i(n, 5, t), t.restore()
                }
            }]), e
        }(m), e.ThrowRope = function(t) {
            function e(t, i, a, n, s) {
                (0, h.
                    default)(this, e);
                var l = (0, r.
                    default)(this, (e.__proto__ || (0, o.
                    default)(e)).call(this, t, i, a, n, s, -i / 2, -a / 2, 1));
                return l.speed = 8, l
            }
            return (0, d.
                default)(e, t), (0, g.
                default)(e, [{
                key: "move",
                value: function() {
                    this.y -= this.speed
                }
            }]), e
        }(m), e.Arrow = function(t) {
            function e(t, i, a, n, s, l) {
                return (0, h.
                    default)(this, e), (0, r.
                    default)(this, (e.__proto__ || (0, o.
                    default)(e)).call(this, t, i, a, 0, 0, n, s, l))
            }
            return (0, d.
                default)(e, t), e
        }(m), e.Gatchbull = function(t) {
            function e(t, i, a, n) {
                return (0, h.
                    default)(this, e), (0, r.
                    default)(this, (e.__proto__ || (0, o.
                    default)(e)).call(this, t, i, a, f / 2, v / 5 * 4, -i / 2, -a / 2, n))
            }
            return (0, d.
                default)(e, t), e
        }(m), e.Shake = function(t) {
            function e(t, i, a, n, s, l) {
                return (0, h.
                    default)(this, e), (0, r.
                    default)(this, (e.__proto__ || (0, o.
                    default)(e)).call(this, t, i, a, 0, 0, n, s, l))
            }
            return (0, d.
                default)(e, t), e
        }(m), e.Smog = function(t) {
            function e(t, i, a, n) {
                return (0, h.
                    default)(this, e), (0, r.
                    default)(this, (e.__proto__ || (0, o.
                    default)(e)).call(this, t, i, a, f / 2, v / 5 * 4, -i / 2, -a / 2, n))
            }
            return (0, d.
                default)(e, t), e
        }(m)
    },
    71: function(t, e, i) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LoadImages = void 0;
        var n = i(30),
            s = a(n),
            o = i(31),
            l = a(o);
        e.LoadImages = function() {
            function t(e, i, a, n, o) {
                (0, s.
                    default)(this, t), this.imageUrls = e, this.loadSuccesCount = 0, this.loadFail = {}, this.images = {}, this.loading = !1, this.reloadNum = o || 3, this.onsuccess = i, this.onfail = a, this.onprogress = n
            }
            return (0, l.
                default)(t, [{
                key: "getImage",
                value: function(t) {
                    return this.images[t] ? this.images[t] : null
                }
            }, {
                key: "addImage",
                value: function(t) {
                    this.loading || this.imageUrls.push(t)
                }
            }, {
                key: "startLoad",
                value: function() {
                    this.loading = !0;
                    for (var t = this, e = 0, i = this.imageUrls.length; e < i; e++)!
                        function(e) {
                            t._loadImage(t.imageUrls[e])
                        }(e)
                }
            }, {
                key: "_loadImage",
                value: function(t) {
                    var e = this,
                        i = new Image;
                    i.onload = function() {
                        var i = t.split(".")[0];
                        e.images[i] = this, e.loadSuccesCount++, e.loadFail[t] && delete e.loadFail[t];
                        var a = Math.floor(e.loadSuccesCount / e.imageUrls.length * 100);
                        e.onprogress && e.onprogress(a), e.loadSuccesCount == e.imageUrls.length && e.onsuccess(e.images)
                    }, i.onerror = function() {
                        return e.loadFail[t] ? e.loadFail[t]++ : e.loadFail[t] = 1, e.loadFail[t] >= e.reloadNum ? void e.onfail() : void e._loadImage(t)
                    }, i.src = "static/img/" + t
                }
            }]), t
        }()
    },
    72: function(t, e, i) {
        t.exports = {
            default:
                i(77), __esModule: !0
        }
    },
    73: function(t, e, i) {
        t.exports = {
            default:
                i(78), __esModule: !0
        }
    },
    74: function(t, e, i) {
        t.exports = {
            default:
                i(79), __esModule: !0
        }
    },
    75: function(t, e, i) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        e.__esModule = !0;
        var n = i(74),
            s = a(n),
            o = i(72),
            l = a(o),
            r = i(44),
            c = a(r);
        e.
            default = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, c.
                    default)(e)));
            t.prototype = (0, l.
                default)(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (s.
                default ?(0, s.
                default)(t, e):
                t.__proto__ = e)
        }
    },
    76: function(t, e, i) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        e.__esModule = !0;
        var n = i(44),
            s = a(n);
        e.
            default = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, s.
                default)(e)) && "function" != typeof e ? t : e
        }
    },
    77: function(t, e, i) {
        i(96);
        var a = i(13).Object;
        t.exports = function(t, e) {
            return a.create(t, e)
        }
    },
    78: function(t, e, i) {
        i(97), t.exports = i(13).Object.getPrototypeOf
    },
    79: function(t, e, i) {
        i(98), t.exports = i(13).Object.setPrototypeOf
    },
    87: function(t, e, i) {
        var a = i(25),
            n = i(13),
            s = i(46);
        t.exports = function(t, e) {
            var i = (n.Object || {})[t] || Object[t],
                o = {};
            o[t] = e(i), a(a.S + a.F * s(function() {
                    i(1)
                }), "Object", o)
        }
    },
    88: function(t, e, i) {
        var a = i(49),
            n = i(32),
            s = function(t, e) {
                if (n(t), !a(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ?
                function(t, e, a) {
                    try {
                        a = i(45)(Function.call, i(84).f(Object.prototype, "__proto__").set, 2), a(t, []), e = !(t instanceof Array)
                    } catch (t) {
                        e = !0
                    }
                    return function(t, i) {
                        return s(t, i), e ? t.__proto__ = i : a(t, i), t
                    }
                }({}, !1) : void 0),
            check: s
        }
    },
    96: function(t, e, i) {
        var a = i(25);
        a(a.S, "Object", {
            create: i(62)
        })
    },
    97: function(t, e, i) {
        var a = i(58),
            n = i(86);
        i(87)("getPrototypeOf", function() {
            return function(t) {
                return n(a(t))
            }
        })
    },
    98: function(t, e, i) {
        var a = i(25);
        a(a.S, "Object", {
            setPrototypeOf: i(88).set
        })
    },
    103: function(t, e, i) {
        var a, n;
        a = i(67);
        var s = i(104);
        n = a = a || {}, "object" != typeof a.
            default &&"function" != typeof a.
            default ||(n = a = a.
            default), "function" == typeof n && (n = n.options), n.render = s.render, n.staticRenderFns = s.staticRenderFns, t.exports = a
    },
    104: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", ["doll" == t.type ? i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showAward,
                        expression: "showAward"
                    }],
                    staticClass: "panel-mask",
                    on: {
                        click: function(e) {
                            t.showAward = !1
                        }
                    }
                }, [t._m(0), t._v(" "), i("div", {
                    staticClass: "panel-bonus-beans"
                }, [i("p", {
                    staticClass: "panel-bonus-word"
                }, [t._v("恭喜你！奖励"), i("b", {
                    staticClass: "red"
                }, [t._v(t._s(t.awardCoin))]), t._v("幸运豆")])])]) : t._e(), t._v(" "), "bull" == t.type ? i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showAward,
                        expression: "showAward"
                    }],
                    staticClass: "panel-reminder ",
                    on: {
                        click: function(e) {
                            t.showAward = !1
                        }
                    }
                }, [i("div", {
                    staticClass: "roping-winning a-bouncein"
                }, [i("span", {
                    staticClass: "gold"
                }, [t._v("+" + t._s(t.awardCoin))])])]) : t._e(), t._v(" "), t.rechargeDiscount ? i("div", {
                    staticClass: "panel-mask",
                    on: {
                        click: function(e) {
                            t.rechargeDiscount = !1
                        }
                    }
                }, [i("div", {
                    staticClass: "recharge-discount a-bouncein"
                }, [i("i", {
                    staticClass: "index-icon-n index-icon-n-discount-btn",
                    on: {
                        click: function(e) {
                            t.goRecharge()
                        }
                    }
                })])]) : t._e(), t._v(" "), i("div", {
                    staticClass: "doll-power",
                    style: t.progressStyle
                }, [i("div", {
                    staticClass: "doll-power-bd"
                }, [i("div", {
                    staticClass: "doll-power-bar",
                    class: "doll-power-" + t.times
                }, [i("span", {
                    staticClass: "doll-gift",
                    class: t.times < 5 ? "doll-gift-gray" : "doll-gift-full pulse",
                    on: {
                        click: function(e) {
                            t.times >= 5 && t.getAward()
                        }
                    }
                }), t._v(" "), i("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.times >= 5,
                        expression: "times>=5"
                    }],
                    staticClass: "change-entrance-line line-rotate",
                    staticStyle: {
                        left: "0.68rem",
                        top: "-0.35rem",
                        "background-size": "80% 80%"
                    }
                })])]), t._v(" "), t._m(1)])])
            },
            staticRenderFns: [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "jsBeanImg"
                    }
                }, [i("i", {
                    staticClass: "icon-bean jsBean01"
                }), t._v(" "), i("i", {
                    staticClass: "icon-bean jsBean02"
                }), t._v(" "), i("i", {
                    staticClass: "icon-bean jsBean03"
                }), t._v(" "), i("i", {
                    staticClass: "icon-bean jsBean04"
                }), t._v(" "), i("i", {
                    staticClass: "icon-bean jsBean05"
                }), t._v(" "), i("i", {
                    staticClass: "icon-bean jsBean06"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "doll-power-tips"
                }, [t._v("\n       不中"), i("em", {
                    staticClass: "yellow"
                }, [t._v("5次")]), t._v("获随机奖励\n     ")])
            }]
        }
    },
    142: function(t, e, i) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.
                default = t, e
        }
        function n(t) {
            return t && t.__esModule ? t : {
                default:
                    t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(30),
            o = n(s),
            l = i(31),
            r = n(l),
            c = i(15),
            d = n(c),
            u = i(71),
            h = i(23),
            p = i(69),
            g = i(3),
            f = a(g),
            v = i(5),
            m = a(v),
            b = i(4),
            w = a(b),
            _ = i(11),
            x = a(_),
            y = i(10),
            k = i(52),
            C = n(k),
            S = i(38),
            L = n(S),
            A = i(21),
            T = n(A),
            R = i(103),
            I = n(R),
            B = i(14),
            M = i(6),
            F = (function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                    function(t) {
                        window.setTimeout(t, 16)
                    }
            }(), window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelRequestAnimationFrame);
        e.
            default = {
            components: {
                "share-guide": C.
                    default,
                congratulate:
                    L.
                        default,
                "progress-award":
                    I.
                        default,
                "login-reg":
                    T.
                        default
            },
            data: function() {
                var t = f.get("money_muti");
                t || (f.set("money_muti", "1_1"), t = "1_1"), t = t.split("_");
                var e = null,
                    i = f.get("soundEffect") !== !1,
                    a = f.get("userInfo") || {};
                return {
                    innerWidth: 0,
                    innerHeight: 0,
                    minFrequency: 1,
                    maxFrequency: 3,
                    moneyList: [100, 50, 30, 10, 5, 1],
                    mutiList: [3, 2, 1],
                    bullGame: "",
                    showLoading: !0,
                    loadingProgress: 0,
                    showFail: !1,
                    panelTimeoutId: null,
                    showSucc: !1,
                    reword: 0,
                    showReword: !1,
                    muti: t[1] || 1,
                    showMutiSelect: !1,
                    showMoneySelect: !1,
                    money: t[0] || 1,
                    showMenu: !1,
                    myMoney: 0,
                    browserguide: !1,
                    wechatGuide: !1,
                    requestAnimationFrameId: null,
                    creatBullTimeoutId: null,
                    isLogin: w.isLogin(),
                    isWx: this.$root.isWx,
                    sim: 0,
                    simTimeoutId: e,
                    isWecut: 1 == a.no_logout || !1,
                    textTop: 0,
                    textTuration: "500ms",
                    scollTimeoutId: null,
                    congratulateList: [],
                    showGuide: !1,
                    guideText: "套中不同等级的牛",
                    guideText1: "获得不同倍数的幸运豆",
                    rechargeWord: "已经很熟练了，</br>充值进入真实套牛农场!",
                    bullCtrl: !1,
                    count: 0,
                    showRechargeGuide: !1,
                    phone: "",
                    inCount: !1,
                    countdown: 60,
                    codeBtn: "获取校验码",
                    code: "",
                    task_id: "",
                    showLogin: !1,
                    backgroundSound: null,
                    bullCall: null,
                    succSound: null,
                    failSound: null,
                    coinSound: null,
                    showShareCollect: !1,
                    hasFllowWechat: !1,
                    showFllowWechat: !1,
                    canChangeSkin: !1,
                    soundEffect: i,
                    guideStep: "step",
                    guideStepHeight: 0,
                    needGuideStep: !1,
                    inTouristReg: !1,
                    platform_user: a.platform_user || 0,
                    isTourist: !1,
                    showShiwu: this.$root.showShiwu,
                    showDoll: this.$root.showDoll,
                    showCenter: this.$root.showCenter,
                    showShareBtn: this.$root.showShareBtn,
                    progress: {
                        bull_times: 0
                    },
                    channel: this.$root.channel,
                    showSim: 1 == a.is_first && !f.get("gameInfo")
                }
            },
            beforeRouteEnter: function(t, e, i) {
                var a = {
                    title: "欢乐套牛",
                    url: "static/img/icon/Icon-128.png",
                    sizes: "128x128",
                    rels: ["icon", "shortcut", "apple-touch-icon"]
                };
                (0, h.initTitleIcon)(a), document.body.className = "index-wrap", i()
            },
            beforeRouteLeave: function(t, e, i) {
                document.body.className = "", this.requestAnimationFrameId && F(this.requestAnimationFrameId), this.creatBullTimeoutId && clearTimeout(this.creatBullTimeoutId), this.invokeNextFrameId && clearTimeout(this.invokeNextFrameId), this.scollTimeoutId && clearTimeout(this.scollTimeoutId), i()
            },
            created: function() {
                var t = this;
                if (x.init("index"), w.isLogin()) {
                    this.getMyInfo();
                    var e = f.get("userInfo") || {},
                        i = e.skin || 0;
                    (0, h.initSkin)(i)
                } else(0, h.initSkin)(0);
                this.showSim && (this.simTimeoutId = setTimeout(function() {
                    t.dealSim()
                }, 3e3)), this.SET_CURRENTGAME(this.$route.name)
            },
            computed: {},
            methods: (0, d.
                default)({
                getQueryString: function(t) {
                    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                        i = window.location.search.substr(1).match(e);
                    return null != i ? i[2] : null
                },
                iKnow: function() {
                    this.guideStep = "step", f.set("guideStep", !0)
                },
                nextStep: function() {
                    var t = this;
                    setTimeout(function() {
                        switch (t.guideStep) {
                            case "step0":
                                t.guideStep = "step1";
                                break;
                            case "step1":
                                t.guideStep = "step2";
                                break;
                            case "step2":
                                t.guideStep = "step3";
                                break;
                            case "step3":
                                t.guideStep = "step4";
                                break;
                            default:
                                t.guideStep = "step", f.set("guideStep", !0)
                        }
                    })
                },
                changeSoundEffect: function() {
                    this.soundEffect = !this.soundEffect, f.set("soundEffect", this.soundEffect), this.soundEffect ? this.backgroundSound.play() : this.backgroundSound.pause()
                },
                collectGuide: function() {
                    this.showShareCollect = !1, this.$refs.shareGuide.showShareGuide()
                },
                pShareGuide: function() {
                    this.showShareCollect = !1, this.$refs.shareGuide.showShareGuide()
                },
                hideShareCollect: function() {
                    this.showShareCollect = !1
                },
                hideRechargeGuide: function() {
                    this.showRechargeGuide = !1
                },
                dealGuide: function() {
                    this.showGuide = !1
                },
                dealSim: function() {
                    var t = this;
                    this.simTimeoutId && clearTimeout(t.simTimeoutId), this.showSim = !1, this.guideStep = "step0", this.needGuideStep = !0
                },
                quit: function() {
                    w.removeToken(), this.isLogin = !1, this.myMoney = 0, this.sim = 0
                }
            }, (0, B.mapMutations)(["RECORD_GAMEINFO", "SET_CURRENTGAME", "RECORD_BASICINFO"]), {
                getMyInfo: function() {
                    var t = this;
                    m.postNoParams("myInfo", function(e) {
                        e = JSON.parse(e), 1 == e.state ? (t.sim = e.data.sim || 0, t.RECORD_GAMEINFO(e.data), 0 == e.data.sim ? t.myMoney = Number(e.data.coin) : t.myMoney = Number(e.data.sim_coin), t.progress = e.data.send) : (0, M.Toast)(e.msg)
                    }, function() {
                        (0, M.Toast)("获取金币失败")
                    })
                },
                loginCallback: function(t) {
                    this.platform_user = t.data.platform_user, this.getMyInfo(), this.showLogin = !1, this.isLogin = !0;
                    var e = t.data.skin || 0;
                    (0, h.initSkin)(e), 1 == t.data.is_first && (this.showSim = !0)
                },
                touristCallback: function(t) {
                    this.getMyInfo(), this.showLogin = !1, this.isLogin = !0;
                    var e = t.data.skin || 0;
                    (0, h.initSkin)(e), this.platform_user = t.data.platform_user, 1 == t.data.is_first && (this.guideStep = "step0", this.needGuideStep = !0), this.isTourist = !0
                },
                setConfig: function(t) {
                    f.set("money_muti", t.join("_"))
                },
                shareBtn: function() {
                    this.$refs.shareGuide.showShareGuide(), this.showMenu = !1
                },
                jumpPage: function(t, e) {
                    return w.isLogin() || "gameCenter" == t ? void this.$router.push({
                        name: t,
                        params: {
                            sim: this.sim,
                            tab: e
                        }
                    }) : void(this.showLogin = !0)
                },
                goShiwu: function() {
                    var t = this;
                    1 == this.sim ? (0, M.MessageBox)({
                        title: "温馨提示",
                        message: "只有充值用户才可以进入哦！",
                        confirmButtonText: "确定"
                    }).then(function(e) {
                        "confirm" == e && t.goRecharge(100)
                    }) : t.jumpPage("shiwu_game")
                },
                goRecharge: function(t) {
                    (0, y.goRechargePublic)(this, t)
                },
                start: function() {
                    //if (!w.isLogin()) return void(this.showLogin = !0);
                    var t = this.money * this.muti - this.myMoney;
                    console.log(t);
                    t = 0
                    return t > 0 ? (t < 5 && (t = 5), void this.goRecharge(Math.ceil(t))) : void this.bullGame.start()
                },
                panelFailHide: function() {
                    this.showFail = !1
                },
                panelFailShow: function() {
                    this.showFail = !0
                },
                dealFail: function() {
                    this.panelTimeoutId && (clearTimeout(this.panelTimeoutId), this.panelTimeoutId = null), this.getMyInfo(), this.bullGame.clearGatchbull(), this.bullGame.creatShake(), this.bullGame.creatArrow(), this.bullGame.disabled = !1, this.panelFailHide(), 1 == this.sim && 2 == this.count && (this.showGuide = !0), 1 == this.sim && 10 == this.count && (this.showRechargeGuide = !0), 1 == this.sim && 20 == this.count && (this.rechargeWord = "演练场赢得的豆豆不参与奖品<br />兑换，充值套牛才能兑大奖哦", this.showRechargeGuide = !0), this.showShareBtn && 1 == this.sim && 7 == this.count && (this.showShareCollect = !0)
                },
                panelSuccHide: function() {
                    this.showSucc = !1
                },
                panelSuccShow: function(t) {
                    this.reword = t, this.showSucc = !0
                },
                dealSucc: function() {
                    this.panelTimeoutId && (clearTimeout(this.panelTimeoutId), this.panelTimeoutId = null), this.getMyInfo(), this.bullGame.clearGatchbull(), this.bullGame.creatShake(), this.bullGame.creatArrow(), this.bullGame.disabled = !1, this.panelSuccHide(), this.showReword = !0, this.soundEffect && this.coinSound.play(), 1 == this.sim && (2 == this.count && (this.showGuide = !0), 10 != this.count && this.count % 10 == 0 && (this.rechargeWord = "演练场赢得的豆豆不参与奖品<br />兑换，充值套牛才能兑大奖哦", this.showRechargeGuide = !0), 10 == this.count && (this.showRechargeGuide = !0), 7 == this.count && (this.showShareCollect = !0))
                },
                showMutiSelectClick: function() {
                    this.bullGame.disabled || (this.showMutiSelect = !this.showMutiSelect)
                },
                selectMuti: function(t) {
                    this.muti = t;
                    var e = f.get("money_muti") || "1_1";
                    e = e.split("_"), e[1] = t, this.setConfig(e)
                },
                showMoneySelectClick: function() {
                    this.bullGame.disabled || (this.showMoneySelect = !this.showMoneySelect)
                },
                selectMoney: function(t) {
                    this.money = t;
                    var e = f.get("money_muti") || "1_1";
                    e = e.split("_"), e[0] = t, this.setConfig(e)
                },
                showMenuClick: function() {
                    this.bullGame.disabled || (this.showMenu = !this.showMenu)
                },
                wrapClick: function(t) {
                    this.showMutiSelect && !("mutiBtn" == t.target.id || t.target.parentNode && "mutiBtn" == t.target.parentNode.id) && (this.showMutiSelect = !1), this.showMoneySelect && !("moneyBtn" == t.target.id || t.target.parentNode && "moneyBtn" == t.target.parentNode.id) && (this.showMoneySelect = !1), this.showMenu && "menuBtn" !== t.target.id && (this.showMenu = !1)
                },
                hideFllowWechat: function() {
                    this.showFllowWechat = !1
                },
                clickFllowWechat: function(t) {
                    t.stopPropagation()
                },
                changeSkin: function() {
                    var t = document.getElementsByTagName("html")[0],
                        e = t.className;
                    "skin-none" == e ? t.className = "skin-shengdan" : t.className = "skin-none"
                },
                christmasPay: function() {
                    var t = this;
                    m.christmasPay(function(e) {
                        e = JSON.parse(e), e.state && 1 == e.data.pay && (gameInfo ? (document.getElementsByTagName("html")[0].className = "skin-shengdan", t.canChangeSkin = !0) : document.getElementsByTagName("html")[0].className = "skin-none")
                    })
                },
                maileLogin: function() {
                    m.postNoParams("maileLogin", function(t) {
                        t = JSON.parse(t), location.href = t.data.url
                    })
                }
            }),
            mounted: function() {
                function t(t, e, i, a) {
                    return i.x < -a || i.x > t + a || i.y < -a || i.y > e + a
                }
                var e = this,
                    i = ["bull_1.png", "bull_2.png", "bull_3.png", "bull_4.png", "bull_5.png", "bull_6.png", "bull_7.png", "bull_8.png", "bull_success_1.png", "bull_success_2.png", "bull_success_3.png", "bull_success_4.png", "bull_success_5.png", "bull_success_6.png", "bull_success_7.png", "bull_success_8.png", "bull_fail_1.png", "bull_fail_2.png", "bull_fail_3.png", "bull_fail_4.png", "bull_fail_5.png", "bull_fail_6.png", "bull_fail_7.png", "bull_fail_8.png", "shake.png", "throw.png", "arrow.png", "smog.png", "roping-gold.png", "panle-win-bg.png", "panle-miss-bg.png", "sim.png", "guide.png"],
                    a = document.getElementById("canvas"),
                    n = a.getContext("2d"),
                    s = window.innerWidth,
                    l = window.innerHeight;
                800 == s && (s = 320), e.innerWidth = s, e.innerHeight = l, e.guideStepHeight = s * (1334 / 750), window.onresize = function() {
                    s = window.innerWidth, l = window.innerHeight, 800 == s && (s = 320), e.innerWidth = s, e.innerHeight = l, e.guideStepHeight = s * (1334 / 750), e.bullGame && (e.bullGame.resize(), (0, p.resizeWH)())
                };
                var c = function() {
                        function i(t, e, a, n, s) {
                            (0, o.
                                default)(this, i), this.ctx = t, this.domImages = e, this.shakeList = [], this.arrowList = [], this.smogList = [], this.catchbullList = [], this.throwRopeList = [], this.bullList = [], this.bullConfigIndex = 0, this.disabled = !1, this.maxFrequency = n || 1, this.minFrequency = a || 3, this.callback = s, this.localCount = parseInt(sessionStorage.getItem("localCount")), this.bullConfig = [
                                [{
                                    img: e.bull_1,
                                    speed: 2,
                                    w: 120,
                                    h: 113
                                }, {
                                    img: e.bull_2,
                                    speed: 2,
                                    w: 120,
                                    h: 113
                                }],
                                [{
                                    img: e.bull_1,
                                    speed: 2,
                                    w: 120,
                                    h: 113
                                }, {
                                    img: e.bull_2,
                                    speed: 2,
                                    w: 120,
                                    h: 113
                                }],
                                [{
                                    img: e.bull_3,
                                    speed: 2,
                                    w: 120,
                                    h: 113
                                }, {
                                    img: e.bull_4,
                                    speed: 2,
                                    w: 124,
                                    h: 113
                                }, {
                                    img: e.bull_5,
                                    speed: 2,
                                    w: 151,
                                    h: 139
                                }],
                                [{
                                    img: e.bull_3,
                                    speed: 2,
                                    w: 120,
                                    h: 113
                                }, {
                                    img: e.bull_4,
                                    speed: 2,
                                    w: 124,
                                    h: 113
                                }, {
                                    img: e.bull_5,
                                    speed: 2,
                                    w: 151,
                                    h: 139
                                }],
                                [{
                                    img: e.bull_6,
                                    speed: 2,
                                    w: 161,
                                    h: 134
                                }, {
                                    img: e.bull_7,
                                    speed: 1.5,
                                    w: 150,
                                    h: 120
                                }, {
                                    img: e.bull_8,
                                    speed: 1.5,
                                    w: 154,
                                    h: 139
                                }],
                                [{
                                    img: e.bull_6,
                                    speed: 2,
                                    w: 161,
                                    h: 134
                                }, {
                                    img: e.bull_7,
                                    speed: 1.5,
                                    w: 150,
                                    h: 120
                                }, {
                                    img: e.bull_8,
                                    speed: 1.5,
                                    w: 154,
                                    h: 139
                                }]
                            ], this.bullFailConfig = [{
                                img: e.bull_fail_1,
                                w: 58,
                                h: 204
                            }, {
                                img: e.bull_fail_2,
                                w: 65,
                                h: 180
                            }, {
                                img: e.bull_fail_3,
                                w: 64,
                                h: 194
                            }, {
                                img: e.bull_fail_4,
                                w: 61,
                                h: 207
                            }, {
                                img: e.bull_fail_5,
                                w: 71,
                                h: 202
                            }, {
                                img: e.bull_fail_6,
                                w: 99,
                                h: 206
                            }, {
                                img: e.bull_fail_7,
                                w: 91,
                                h: 208
                            }, {
                                img: e.bull_fail_8,
                                w: 66,
                                h: 217
                            }], this.bullSuccessConfig = [{
                                img: e.bull_success_1,
                                w: 71,
                                h: 190
                            }, {
                                img: e.bull_success_2,
                                w: 63,
                                h: 152
                            }, {
                                img: e.bull_success_3,
                                w: 68,
                                h: 190
                            }, {
                                img: e.bull_success_4,
                                w: 60,
                                h: 190
                            }, {
                                img: e.bull_success_5,
                                w: 71,
                                h: 190
                            }, {
                                img: e.bull_success_6,
                                w: 99,
                                h: 200
                            }, {
                                img: e.bull_success_7,
                                w: 91,
                                h: 190
                            }, {
                                img: e.bull_success_8,
                                w: 66,
                                h: 220
                            }]
                        }
                        return (0, r.
                            default)(i, [{
                            key: "creatShake",
                            value: function() {
                                var t = new p.Shake(this.domImages.shake, 131, 87, s / 2 - 65, l - 87 - Math.floor(window.getComputedStyle(document.querySelector("#ropingWrap"), null).getPropertyValue("height").replace("px", "")) + 8, 3);
                                this.clearShake(), this.shakeList.push(t)
                            }
                        }, {
                            key: "clearShake",
                            value: function() {
                                this.shakeList = []
                            }
                        }, {
                            key: "creatArrow",
                            value: function() {
                                var t = new p.Arrow(this.domImages.arrow, 42, 45, s / 2 - 21, l - 87 - Math.floor(window.getComputedStyle(document.querySelector("#ropingWrap"), null).getPropertyValue("height").replace("px", "")) - 45 + 8, 3);
                                this.clearArrow(), this.arrowList.push(t)
                            }
                        }, {
                            key: "clearArrow",
                            value: function() {
                                this.arrowList = []
                            }
                        }, {
                            key: "creatSmog",
                            value: function() {
                                var t = new p.Smog(this.domImages.smog, 68, 15, 2);
                                this.clearSmog(), this.smogList.push(t)
                            }
                        }, {
                            key: "clearSmog",
                            value: function() {
                                this.smogList = []
                            }
                        }, {
                            key: "creatGatchbull",
                            value: function(t, e) {
                                var i = new p.Gatchbull(t.img, t.w, t.h, e);
                                this.clearGatchbull(), this.catchbullList.push(i)
                            }
                        }, {
                            key: "clearGatchbull",
                            value: function() {
                                this.catchbullList = []
                            }
                        }, {
                            key: "creatThrowRope",
                            value: function() {
                                var t = new p.ThrowRope(this.domImages.
                                    throw ,76, 345, s / 2, l + 61);
                                this.clearThrowRope(), this.throwRopeList.push(t)
                            }
                        }, {
                            key: "clearThrowRope",
                            value: function() {
                                this.throwRopeList = []
                            }
                        }, {
                            key: "creatBull",
                            value: function() {
                                if (!(this.bullList.length >= 4)) {
                                    1 == e.sim && this._setSimBullConfig();
                                    var t = void 0;
                                    t = this.localCount < 20 && 4 == this.bullConfigIndex ? this.bullConfig[0] : this.bullConfig[this.bullConfigIndex], 1 == e.sim && e.bullCtrl && (t = [{
                                        img: this.domImages.bull_7,
                                        speed: 1.5,
                                        w: 150,
                                        h: 120
                                    }, {
                                        img: this.domImages.bull_8,
                                        speed: 1.5,
                                        w: 154,
                                        h: 139
                                    }]), this.bullConfigIndex++, this.bullConfigIndex >= this.bullConfig.length && (this.bullConfigIndex = 0);
                                    for (var i = t[Math.floor(Math.random() * t.length)], a = new p.Bull(i.img, i.w, i.h, 2, i.speed), n = 0, s = 0; s < this.bullList.length; s++) this.bullList[s].y <= a.y && (n = s);
                                    this.bullList.splice(n, 0, a)
                                }
                            }
                        }, {
                            key: "_setSimBullConfig",
                            value: function() {
                                var t = this.domImages;
                                this.bullConfig = [
                                    [{
                                        img: t.bull_1,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_2,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }],
                                    [{
                                        img: t.bull_2,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_3,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_4,
                                        speed: 2,
                                        w: 124,
                                        h: 113
                                    }],
                                    [{
                                        img: t.bull_1,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_3,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_5,
                                        speed: 2,
                                        w: 151,
                                        h: 139
                                    }],
                                    [{
                                        img: t.bull_2,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_3,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_6,
                                        speed: 2,
                                        w: 161,
                                        h: 134
                                    }],
                                    [{
                                        img: t.bull_1,
                                        speed: 2,
                                        w: 120,
                                        h: 113
                                    }, {
                                        img: t.bull_7,
                                        speed: 1.5,
                                        w: 150,
                                        h: 120
                                    }, {
                                        img: t.bull_8,
                                        speed: 1.5,
                                        w: 154,
                                        h: 139
                                    }]
                                ]
                            }
                        }, {
                            key: "clearBull",
                            value: function() {
                                this.bullList = []
                            }
                        }, {
                            key: "initBull",
                            value: function() {
                                var t = this;
                                e.creatBullTimeoutId = setTimeout(function() {
                                    t.creatBull(), e.creatBullTimeoutId = null, t.initBull()
                                }, 1e3 * (Math.random() * (t.maxFrequency - t.minFrequency + 1) + t.minFrequency))
                            }
                        }, {
                            key: "init",
                            value: function() {
                                this.creatArrow(), this.creatShake(), this.initBull(), this.draw(), this.invokeNextFrame()
                            }
                        }, {
                            key: "start",
                            value: function() {
                                this.disabled || (this.disabled = !0, this.clearArrow(), this.clearShake(), this.creatThrowRope(), this.localCount++)
                            }
                        }, {
                            key: "resize",
                            value: function() {
                                this.clearShake(), this.clearArrow(), this.clearThrowRope(), this.clearGatchbull(), this.clearSmog(), this.clearBull(), this.creatArrow(), this.creatShake()
                            }
                        }, {
                            key: "update",
                            value: function() {
                                var e = this;
                                e.bullList.length > 4 && (e.bullList.length = 4);
                                for (var i = 0; i < e.bullList.length; i++) t(s, l, e.bullList[i], 100) ? e.bullList.splice(i--, 1) : (e.bullList[i].move(), e.bullList[i].draw(e.ctx));
                                e.throwRopeList.length && (e.throwRopeList[0].y < l / 5 * 3.4 ? (e.clearThrowRope(), e.creatShake(), e.creatArrow(), this.disabled = !1) : (e.throwRopeList[0].move(), e.throwRopeList[0].draw(e.ctx))), e.shakeList.length && e.shakeList[0].draw(e.ctx), e.smogList.length && e.smogList[0].draw(e.ctx), e.catchbullList.length && e.catchbullList[0].draw(e.ctx), e.arrowList.length && e.arrowList[0].draw(e.ctx)
                            }
                        }, {
                            key: "invokeNextFrame",
                            value: function() {
                                var t = this;
                                e.invokeNextFrameId = setInterval(function() {
                                    for (var e = ["shakeList", "smogList", "catchbullList", "arrowList", "bullList"], i = 0, a = e.length; i < a; i++) for (var n = 0, s = t[e[i]].length; n < s; n++) t[e[i]][n].nextFrame()
                                }, 160)
                            }
                        }, {
                            key: "draw",
                            value: function() {
                                var t = this;
                                e.requestAnimationFrameId = setInterval(function() {
                                    (new Date).getTime();
                                    t.ctx.clearRect(0, 0, s, l), t.update();
                                    for (var i = 0; i < t.bullList.length; i++) for (var a = 0; a < t.throwRopeList.length; a++) t.testCircle(t.bullList[i], t.throwRopeList[a]) && !
                                        function() {
                                            e.bullCtrl && (e.bullCtrl = !1), e.soundEffect && e.bullCall.play(), t.clearThrowRope();
                                            var a = t.bullList[i].img.src.split("img/")[1].split("bull_")[1].split(".")[0],
                                                n = t.bullSuccessConfig[a - 1],
                                                s = t.bullFailConfig[a - 1];
                                            t.bullList.splice(i--, 1), t.creatGatchbull(n, 2), t.creatSmog(), e.myMoney = (100 * e.myMoney - e.money * e.muti * 100) / 100, setTimeout(function() {
                                                t.callback(a, function(i) {
                                                    t.creatGatchbull(n, 1), e.showReword = !1, setTimeout(function() {
                                                        e.panelSuccShow(i), e.myMoney = (100 * e.myMoney + 100 * i) / 100, e.soundEffect && e.succSound.play()
                                                    }, 1e3), e.panelTimeoutId = setTimeout(function() {
                                                        e.dealSucc()
                                                    }, 3e3)
                                                }, function(i) {
                                                    t.creatGatchbull(s, 1), e.soundEffect && e.failSound.play(), setTimeout(function() {
                                                        e.dealFail()
                                                    }, 1e3)
                                                })
                                            }, 2e3)
                                        }()
                                }, 16)
                            }
                        }, {
                            key: "testCircle",
                            value: function(t, e) {
                                var i = t.x - e.x,
                                    a = t.y - e.y,
                                    n = Math.sqrt(i * i + a * a);
                                return n <= t.w / 2 + e.w / 2
                            }
                        }]), i
                    }(),
                    d = new u.LoadImages(i, function(t) {
                        var i = new c(n, t, 1, 3, function(t, a, n) {
                            var s = void 0;
                            s = 0 == e.sim ? "lucky" : "simLucky", m.lucky(s, t, e.money, e.muti, function(t) {
                                t = JSON.parse(t), 1 == e.sim && (e.count = t.data.count, 2 == t.data.count && (e.bullCtrl = !0)), 1 == t.state ? (i.clearSmog(), a(t.data.award)) : 702 == t.code ? (i.clearSmog(), n()) : ((0, M.Toast)(t.msg), i.clearGatchbull(), i.clearSmog(), i.creatArrow(), i.creatShake(), e.getMyInfo(), i.disabled = !1)
                            }, function() {
                                (0, M.Toast)("获取失败"), i.clearGatchbull(), i.clearSmog(), i.creatArrow(), i.creatShake(), e.getMyInfo(), i.disabled = !1
                            })
                        });
                        e.showLoading = !1, i.init(), e.bullGame = i, e.backgroundSound = new h("./static/sound/bgm9.mp3", "backgroundSound", e.soundEffect, !0), e.bullCall = new h("./static/sound/bullCall.mp3", "bullCall", !1, !1), e.succSound = new h("./static/sound/succ.ogg", "succSound", !1, !1), e.coinSound = new h("./static/sound/coin.mp3", "coinSound", !1, !1), e.failSound = new h("./static/sound/fail.mp3", "failSound", !1, !1)
                    }, function() {
                        (0, M.Toast)("组件加载失败,请刷新")
                    }, function(t) {
                        e.loadingProgress = t
                    }, 3);
                d.startLoad();
                var h = function() {
                    function t(e, i, a, n) {
                        (0, o.
                            default)(this, t);
                        var s = document.createElement("audio");
                        s.src = e, n && (s.loop = "loop"), this.sound = s, document.getElementById(i).appendChild(s);
                        var l = this;
                        return a && l.play(), this
                    }
                    return (0, r.
                        default)(t, [{
                        key: "play",
                        value: function() {
                            this.sound.play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.sound.pause()
                        }
                    }]), t
                }()
            }
        }
    },
    274: function(t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".maile-icon[data-v-c0fd1ba4]{position:absolute;left:.2rem;top:.2rem}.maile-icon i[data-v-c0fd1ba4]{display:block}", ""])
    },
    337: function(t, e, i) {
        var a = i(274);
        "string" == typeof a && (a = [
            [t.id, a, ""]
        ]);
        i(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    412: function(t, e, i) {
        var a, n;
        i(337), a = i(142);
        var s = i(482);
        n = a = a || {}, "object" != typeof a.
            default &&"function" != typeof a.
            default ||(n = a = a.
            default), "function" == typeof n && (n = n.options), n.render = s.render, n.staticRenderFns = s.staticRenderFns, n._scopeId = "data-v-c0fd1ba4", t.exports = a
    },
    482: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "index-wrap",
                    class: {
                        "has-guide-step": t.needGuideStep
                    },
                    style: {
                        height: t.innerHeight + "px"
                    }
                }, [i("div", {
                    staticClass: "roping-cover",
                    on: {
                        click: function(e) {
                            t.wrapClick(e)
                        }
                    }
                }, [i("canvas", {
                    staticClass: "canvas",
                    attrs: {
                        id: "canvas",
                        width: t.innerWidth,
                        height: t.innerHeight
                    }
                }), t._v(" "), i("div", {
                    staticClass: "roping-tit"
                }), t._v(" "), i("div", {
                    staticClass: "roping-gold-total"
                }, [i("i", {
                    staticClass: "icon-gold"
                }), t._v(" "), i("span", {
                    staticClass: "gold-total jsBalance"
                }, [t._v(t._s(t.myMoney.toFixed(2)))]), t._v(" "), i("span", {
                    staticClass: "btn-add add-scale",
                    on: {
                        click: function(e) {
                            t.goRecharge(100)
                        }
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "i-u-s-ctrl",
                    staticStyle: {
                        "z-index": "100",
                        right: "0.05rem"
                    }
                }, [i("i", {
                    staticClass: "index-icon-n  sound-icon",
                    class: {
                        "index-icon-n-3": !t.soundEffect,
                        "index-icon-n-4": t.soundEffect
                    },
                    staticStyle: {
                        "margin-right": ".08rem"
                    },
                    on: {
                        click: t.changeSoundEffect
                    }
                }), t._v(" "), i("i", {
                    staticClass: "roping-record roping-tool-1",
                    staticStyle: {
                        "margin-right": "0.08rem"
                    }
                }, [i("i", {
                    staticClass: "index-icon-n index-icon-n-2",
                    attrs: {
                        id: "menuBtn"
                    },
                    on: {
                        click: t.showMenuClick
                    }
                }), t._v(" "), i("ul", {
                    staticClass: "roping-record-bd",
                    style: {
                        display: t.showMenu ? "block" : "none"
                    }
                }, [i("li", [i("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            t.jumpPage("recordList", 0)
                        }
                    }
                }, [i("i", {
                    staticClass: "icon-record-item icon-jcrecord"
                }), t._v(" 套牛记录")])]), t._v(" "), 0 == t.platform_user && t.showShareBtn ? i("li", [i("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            t.shareBtn()
                        }
                    }
                }, [i("i", {
                    staticClass: "icon-record-item icon-share"
                }), t._v(" 邀请有礼")])]) : t._e(), t._v(" "), i("li", [i("router-link", {
                    attrs: {
                        to: {
                            path: "/rule"
                        }
                    }
                }, [i("i", {
                    staticClass: "icon-record-item icon-rule"
                }), t._v(" 游戏规则")])], 1), t._v(" "), 0 == t.platform_user && t.showCenter ? i("li", [i("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            t.jumpPage("userCenter")
                        }
                    }
                }, [i("i", {
                    staticClass: "icon-record-item icon-gohome"
                }), t._v(" 个人中心")])]) : t._e(), t._v(" "), t._e()])]), t._v(" "), t.showCenter ? i("i", {
                    staticClass: "index-home",
                    staticStyle: {
                        width: ".25rem",
                        height: ".265rem",
                        "background-position": "0 0rem",
                        "background-image": "url(static/img/backH.png)",
                        "background-repeat": "no-repeat",
                        "background-size": "100% 100%",
                        display: "inline-block",
                        "vertical-align": "middle"
                    },
                    on: {
                        click: function(e) {
                            t.jumpPage("gameCenter", 0)
                        }
                    }
                }) : t._e()]), t._v(" "), i("div", {
                    staticClass: "js-top-nav roping-tool disFlex",
                    staticStyle: {
                        "z-index": "30"
                    }
                }, [t.showShiwu && !t.showDoll ? i("a", {
                    staticStyle: {
                        "padding-right": "0.1rem"
                    }
                }, [i("div", {
                    staticClass: "c-e-wrap"
                }, [i("i", {
                    staticClass: "index-icon-n index-icon-n-5",
                    on: {
                        click: function(e) {
                            t.goShiwu()
                        }
                    }
                })])]) : t._e(), t._v(" "), t.showDoll ? i("a", {
                    staticStyle: {
                        "padding-right": "0.02rem"
                    }
                }, [i("div", {
                    staticClass: "c-e-wrap"
                }, [i("i", {
                    staticClass: "index-icon-n index-icon-n-10",
                    on: {
                        click: function(e) {
                            t.$router.push({
                                name: "doll"
                            })
                        }
                    }
                })])]) : t._e(), t._v(" "), i("a", {
                    staticStyle: {
                        "padding-right": "0.08rem"
                    }
                }, [i("div", {
                    staticClass: "c-e-wrap"
                }, [i("i", {
                    staticClass: "index-icon-n index-icon-n-11",
                    on: {
                        click: function(e) {
                            t.jumpPage("welfareCenter")
                        }
                    }
                })])]), t._v(" "), i("a", {
                    on: {
                        click: function(e) {
                            t.jumpPage("changeList")
                        }
                    }
                }, [t._m(0)])]), t._v(" "), i("div", {
                    staticClass: "cloud-1 move1"
                }), t._v(" "), i("div", {
                    staticClass: "roping-ft",
                    attrs: {
                        id: "ropingWrap"
                    }
                }, [i("div", {
                    staticClass: "roping-sel amount-sel"
                }, [i("span", {
                    staticClass: "roping-sel-hd",
                    class: {
                        "roping-sel-show": t.showMoneySelect
                    },
                    attrs: {
                        id: "moneyBtn"
                    },
                    on: {
                        click: t.showMoneySelectClick
                    }
                }, [i("i", {
                    staticClass: "icon-arrow"
                }), i("em", {
                    staticClass: "num"
                }, [t._v(t._s(t.money))]), t._v("豆 ")]), t._v(" "), i("ul", {
                    staticClass: "roping-sel-bd",
                    style: {
                        display: t.showMoneySelect ? "block" : "none"
                    }
                }, [i("li", {
                    staticClass: "amount-sel-tit"
                }, [t._v("选择金额")]), t._v(" "), t._l(t.moneyList, function(e) {
                    return i("li", {
                        staticClass: "amount-sel-item",
                        on: {
                            click: function(i) {
                                t.selectMoney(e)
                            }
                        }
                    }, [i("em", {
                        staticClass: "num"
                    }, [t._v(t._s(e))]), t._v(" 豆")])
                })], 2)]), t._v(" "), i("div", {
                    staticClass: "roping-play-btn"
                }, [i("a", {
                    staticClass: "btn-play",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            console.log(e);
                            t.start()
                        }
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "roping-sel multiple-sel"
                }, [i("span", {
                    staticClass: "roping-sel-hd",
                    class: {
                        "roping-sel-show": t.showMutiSelect
                    },
                    attrs: {
                        id: "mutiBtn"
                    },
                    on: {
                        click: t.showMutiSelectClick
                    }
                }, [i("i", {
                    staticClass: "icon-arrow"
                }), t._v(" ×"), i("em", {
                    staticClass: "num"
                }, [t._v(t._s(t.muti))]), t._v("倍 ")]), t._v(" "), i("ul", {
                    staticClass: "roping-sel-bd",
                    style: {
                        display: t.showMutiSelect ? "block" : "none"
                    }
                }, [i("li", {
                    staticClass: "amount-sel-tit"
                }, [t._v("选择倍数")]), t._v(" "), t._l(t.mutiList, function(e) {
                    return i("li", {
                        staticClass: "amount-sel-item",
                        on: {
                            click: function(i) {
                                t.selectMuti(e)
                            }
                        }
                    }, [t._v("× "), i("em", {
                        staticClass: "num"
                    }, [t._v(t._s(e))]), t._v(" 倍")])
                })], 2)])]), t._v(" "), t.showSucc ? i("div", {
                    staticClass: "panel-reminder ",
                    on: {
                        click: t.dealSucc
                    }
                }, [i("div", {
                    staticClass: "roping-winning a-bouncein"
                }, [i("span", {
                    staticClass: "gold"
                }, [t._v("+" + t._s(t.reword))])])]) : t._e(), t._v(" "), t.showFail ? i("div", {
                    staticClass: "panel-reminder",
                    on: {
                        click: t.dealFail
                    }
                }, [t._m(1)]) : t._e(), t._v(" "), t.showReword ? i("div", {
                    staticClass: "icon-reward ",
                    class: {
                        reward: t.showReword
                    },
                    staticStyle: {
                        display: "block"
                    }
                }) : t._e(), t._v(" "), t.showLoading ? i("div", [i("div", {
                    staticClass: "mint-indicator-wrapper",
                    staticStyle: {
                        padding: "20px"
                    }
                }, [t._m(2), t._v(" "), i("span", {
                    staticClass: "mint-indicator-text"
                }, [t._v("游戏组件加载中：" + t._s(t.loadingProgress) + "%")])]), t._v(" "), i("div", {
                    staticClass: "mint-indicator-mask"
                })]) : t._e(), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "step0" == t.guideStep,
                        expression: "guideStep == 'step0'"
                    }],
                    staticClass: "panel-reminder half-bgc"
                }, [i("div", {
                    staticClass: "guide-step-0  a-bouncein"
                }, [i("p", {
                    staticClass: "text"
                }, [t._v("欢迎来到麦子农场，让我来介绍一下玩法吧")]), t._v(" "), i("div", {
                    staticClass: "text-center"
                }, [i("button", {
                    staticClass: " iknow-btn",
                    on: {
                        click: function(e) {
                            t.iKnow()
                        }
                    }
                }), t._v(" "), i("button", {
                    staticClass: " look-guide-btn",
                    on: {
                        click: function(e) {
                            t.nextStep()
                        }
                    }
                })])])]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "step1" == t.guideStep,
                        expression: "guideStep == 'step1'"
                    }],
                    staticClass: "guide-step guide-step-1 ",
                    style: {
                        height: t.guideStepHeight + "px"
                    },
                    on: {
                        click: function(e) {
                            t.nextStep()
                        }
                    }
                }), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "step2" == t.guideStep,
                        expression: "guideStep == 'step2'"
                    }],
                    staticClass: "guide-step guide-step-2",
                    style: {
                        height: t.guideStepHeight + "px"
                    },
                    on: {
                        click: function(e) {
                            t.nextStep()
                        }
                    }
                }), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "step3" == t.guideStep && t.showShiwu,
                        expression: "(guideStep == 'step3')&&(showShiwu)"
                    }],
                    staticClass: "guide-step ",
                    style: {
                        height: t.guideStepHeight + "px"
                    },
                    on: {
                        click: function(e) {
                            t.nextStep()
                        }
                    }
                }), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "step3" == t.guideStep && !t.showShiwu,
                        expression: "(guideStep == 'step3')&&(!showShiwu)"
                    }],
                    staticClass: "guide-step--1 ",
                    style: {
                        height: t.guideStepHeight + "px"
                    },
                    on: {
                        click: function(e) {
                            t.nextStep()
                        }
                    }
                }), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "step4" == t.guideStep,
                        expression: "guideStep == 'step4'"
                    }],
                    staticClass: "guide-step guide-step-3",
                    style: {
                        height: t.guideStepHeight + "px"
                    },
                    on: {
                        click: function(e) {
                            t.nextStep()
                        }
                    }
                }), t._v(" "), t.showSim ? i("div", {
                    staticClass: "panel-reminder ",
                    on: {
                        click: t.dealSim
                    }
                }, [t._m(3)]) : t._e(), t._v(" "), t.showGuide ? i("div", {
                    staticClass: "panel-reminder "
                }, [i("div", {
                    staticClass: "huide-bg  a-bouncein"
                }, [i("p", {
                    staticClass: "reg-sim-tip"
                }, [t._v(t._s(t.guideText))]), t._v(" "), i("p", {
                    staticClass: "reg-sim-word"
                }, [t._v(t._s(t.guideText1))]), t._v(" "), i("div", {
                    staticClass: "text-center"
                }, [i("button", {
                    staticClass: "try-btn",
                    on: {
                        click: t.dealGuide
                    }
                })])])]) : t._e(), t._v(" "), t.showRechargeGuide ? i("div", {
                    staticClass: "panel-reminder "
                }, [i("div", {
                    staticClass: "huide-bg  a-bouncein"
                }, [i("p", {
                    staticClass: "reg-sim-tip"
                }), t._v(" "), i("p", {
                    staticClass: "reg-sim-word",
                    domProps: {
                        innerHTML: t._s(t.rechargeWord)
                    }
                }), t._v(" "), i("div", {
                    staticClass: "text-center"
                }, [i("button", {
                    staticClass: " can-btn",
                    on: {
                        click: t.hideRechargeGuide
                    }
                }), t._v(" "), i("button", {
                    staticClass: " recharge-btn",
                    on: {
                        click: function(e) {
                            t.goRecharge(100)
                        }
                    }
                })])])]) : t._e(), t._v(" "), t.showShareCollect ? i("div", {
                    staticClass: "panel-reminder "
                }, [i("div", {
                    staticClass: "huide-bg  a-bouncein"
                }, [t.isWx ? i("p", {
                    staticClass: "reg-sim-tip",
                    staticStyle: {
                        "font-size": ".16rem"
                    }
                }, [t._v("分享可以提升套中几率")]) : t._e(), t._v(" "), t.isWx ? t._e() : i("p", {
                    staticClass: "reg-sim-tip",
                    staticStyle: {
                        "font-size": ".16rem"
                    }
                }, [t._v("收藏或分享可以提升套中几率")]), t._v(" "), i("p", {
                    staticClass: "reg-sim-word"
                }, [t._v("送您一次机会")]), t._v(" "), i("div", {
                    staticClass: "text-center"
                }, [t.isWx ? i("button", {
                    staticClass: "share-btn",
                    on: {
                        click: t.pShareGuide
                    }
                }) : t._e(), t._v(" "), t.isWx ? t._e() : i("button", {
                    staticClass: "collect-btn",
                    on: {
                        click: t.collectGuide
                    }
                })])])]) : t._e(), t._v(" "), t.showFllowWechat ? i("div", {
                    staticClass: "panel-reminder",
                    on: {
                        click: t.hideFllowWechat
                    }
                }, [i("div", {
                    staticClass: "fllow-wechat",
                    on: {
                        click: function(e) {
                            t.clickFllowWechat(e)
                        }
                    }
                }, [t._m(4)])]) : t._e()]), t._v(" "), i("congratulate", {
                    staticStyle: {
                        position: "absolute",
                        left: "0",
                        right: "0",
                        top: ".9rem",
                        "z-index": "99"
                    },
                    attrs: {
                        type: "tn"
                    }
                }), t._v(" "), i("share-guide", {
                    ref: "shareGuide"
                }), t._v(" "), i("progress-award", {
                    attrs: {
                        times: parseInt(t.progress.bull_times),
                        type: "bull"
                    },
                    on: {
                        callback: t.getMyInfo
                    }
                }), t._v(" "), i("login-reg", {
                    attrs: {
                        isShow: t.showLogin,
                        touristBtn: !0
                    },
                    on: {
                        close: function(e) {
                            t.showLogin = !1
                        },
                        loginCallback: t.loginCallback,
                        touristCallback: t.touristCallback
                    }
                }), t._v(" "), i("div", {
                    attrs: {
                        id: "backgroundSound"
                    }
                }), t._v(" "), i("div", {
                    attrs: {
                        id: "bullCall"
                    }
                }), t._v(" "), i("div", {
                    attrs: {
                        id: "succSound"
                    }
                }), t._v(" "), i("div", {
                    attrs: {
                        id: "failSound"
                    }
                }), t._v(" "), i("div", {
                    attrs: {
                        id: "coinSound"
                    }
                })], 1)
            },
            staticRenderFns: [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "c-e-wrap"
                }, [i("i", {
                    staticClass: "index-icon-n index-icon-n-8"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "roping-miss"
                }, [i("p", {
                    staticClass: "msg"
                }, [t._v("别灰心，再来一次")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("span", {
                    staticClass: "mint-indicator-spin"
                }, [i("div", {
                    staticClass: "mint-spinner-fading-circle circle-color-6",
                    staticStyle: {
                        width: "32px",
                        height: "32px"
                    }
                }, [i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle2"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle3"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle4"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle5"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle6"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle7"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle8"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle9"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle10"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle11"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle12"
                }), i("div", {
                    staticClass: "mint-spinner-fading-circle-circle is-circle13"
                })])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "reg-sim  a-bouncein"
                }, [i("p", {
                    staticClass: "reg-sim-tip"
                }, [t._v("注册成功！")]), t._v(" "), i("p", {
                    staticClass: "reg-sim-word"
                }, [t._v("赠送账户已获赠10个豆豆！")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "box"
                }, [i("h3", [t._v("关注“麦子游戏”免费领取3颗幸运豆！")]), t._v(" "), i("p", {
                    staticStyle: {
                        "font-size": ".09rem",
                        color: "#aaa",
                        "line-height": "1.5"
                    }
                }, [t._v("关注成功后，10分钟内直接到账，无需手动领取。")]), t._v(" "), i("p", [i("img", {
                    attrs: {
                        src: "static/img/wechat.png",
                        alt: ""
                    }
                })]), t._v(" "), i("p", [t._v("长按识别二维码")])])
            }]
        }
    }
});