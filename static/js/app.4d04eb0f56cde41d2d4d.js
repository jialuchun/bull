webpackJsonp([45, 43], {
    0: function(e, n, t) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.
                default = e, n
        }
        function i(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        function r() {
            location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + E.appid + "&redirect_uri=" + E.redirect_uri_base + "%2Fwx_login.php&response_type=code&scope=snsapi_userinfo&state=" + Q + "B" + D + "#wechat_redirect"
        }
        function a() {
            var e = ["10026", "60026", "10027", "60027", "10028", "60028", "10029", "60029", "10030", "60030", "10031", "60031", "10037", "60037", "10033", "60033", "10036", "60036", "10038", "60038", "10039", "60039", "10040", "60040", "10042", "60042"],
                n = !0;
            if (Q) for (var t in e) Q.indexOf(e[t]) > -1 && (n = !1);
            return !0
        }
        function u() {
            var e = ["10045", "60045"],
                n = !0;
            if (Q) for (var t in e) Q.indexOf(e[t]) > -1 && (n = !1);
            return n
        }
        function c() {
            var e = ["10023", "60023", "10026", "60026", "10027", "60027", "10028", "60028", "10029", "60029", "10030", "60030", "10031", "60031", "10033", "60033", "10037", "60037", "10033", "60033", "10036", "60036", "10038", "60038", "10039", "60039", "10040", "60040", "11004", "61004", "10042", "60042"],
                n = !0;
            if (Q) for (var t in e) Q.indexOf(e[t]) > -1 && (n = !1);
            var o = (new Date).getHours();
            return n = o < 6 || n
        }
        function s() {
            var e = ["10041", "60041", "10025", "60025"],
                n = !1;
            if (Q) for (var t in e) Q.indexOf(e[t]) > -1 && (n = !0);
            return n
        }
        function l(e) {
            var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                t = window.location.search.substr(1).match(n);
            return null != t ? t[2] : null
        }
        function d() {
            var e = navigator.userAgent.toLowerCase();
            return "micromessenger" == e.match(/MicroMessenger/i)
        }
        function f(e, n, t, o) {
            U.wecutLogin(e, n, t, function(e) {
                e = JSON.parse(e), 1 == e.state ? (W.setToken(e.data.token), V.set("userInfo", e.data), O.init(D), o()) : p(e.msg)
            }, function() {
                p()
            })
        }
        function p(e) {
            (0, M.MessageBox)({
                title: "温馨提示",
                message: e,
                confirmButtonText: "重新授权登录"
            }).then(function(e) {
                "confirm" == e && history.back()
            })
        }
        function m(e, n) {
            U.wxLogin(e, function(e) {
                if (e = JSON.parse(e), 1 == e.state) {
                    W.setToken(e.data.token), V.set("userInfo", e.data), d() ? V.set("tnway", "wx") : "";
                    var t = e.data.skin || 0;
                    (0, C.initSkin)(t), O.init(D), n()
                } else h()
            }, function() {
                h()
            })
        }
        function h() {
            (0, M.MessageBox)({
                title: "温馨提示",
                message: "微信登录失败！",
                confirmButtonText: "重新授权登录"
            }).then(function(e) {
                "confirm" == e && (location.href = W.getBaseWebappUrl())
            })
        }
        var g = t(44),
            v = i(g);
        t(171), t(279);
        var y = t(59),
            _ = i(y),
            w = t(124),
            b = (i(w), t(175)),
            T = i(b),
            x = t(486),
            I = i(x),
            k = t(172),
            S = i(k),
            M = t(6),
            C = t(23),
            L = t(11),
            O = o(L),
            A = t(341),
            P = i(A),
            E = t(105),
            R = t(5),
            U = o(R),
            B = t(4),
            W = o(B),
            N = t(3),
            V = o(N);
        _.
            default.use(M.InfiniteScroll), _.
            default.component(M.Spinner.name, M.Spinner), d() && (window.INIT_URL = window.location.href.split("#")[0]), "addEventListener" in document && document.addEventListener("DOMContentLoaded", function() {
            P.
                default.attach(document.body)
        }, !1), _.
            default.use(I.
                default);
        var J = new I.
                default ({
                routes: S.
                    default,
                mode:
                    "hash",
                strict: !1
            }),
            j = l("channel") || "",
            D = "",
            Q = "",
            q = "";
        j.indexOf("A") > -1 ? (j = j.split("A"), Q = j[0], q = j[1]):
            Q = j;
        var F = V.get("tnway") || "";
        F ? "" : V.set("tnway", "normal");
        var G = !0,
            z = {
                index: "taoniu",
                doll: "jiawawa"
            };
        J.beforeEach(function(e, n, t) {
            D = e.name, document.body.className += " " + D + "-wrap", void 0 !== (0, v.
                default)(e.meta.pageTitle) && (0, C.initTitleIcon)({
                title: e.meta.pageTitle
            });
            var o = z[e.name] || "";
            if (o ? U.countClick(o, Q) : "", d() && !l("token")) if ("transferPage_tiantuan" == e.name) t();
            else if ("wx" == V.get("tnway") || V.get("wechatToken")) location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + E.appid + "&redirect_uri=" + E.redirect_uri_base + "%2Fwx_login.php&response_type=code&scope=snsapi_userinfo&state=" + Q + "B" + D + "#wechat_redirect";
            else if (D.indexOf("recharge") > -1) {
                if (d() && !l("tmpflag")) {
                    var i = V.get("userInfo") || {},
                        r = i.uid || "",
                        a = E.redirect_uri_base + encodeURIComponent("/wxJmAuth.php?uid=" + r + "&url=" + W.getBaseWebappUrl() + "?tmpflag=1#" + e.path);
                    r ? location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + E.appid + "&redirect_uri=" + a + "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect" : (0, M.Toast)("请先登陆后登录充值。")
                }
            } else t();
            l("token") && l("token") != V.get("wechatToken") ? Q ? G ? (G = !1, V.set("token", l("token")), V.set("wechatToken", l("token")), m(l("token"), t)) : t() : d() && ("wx" == V.get("tnway") || V.get("wechatToken")) ? (V.set("token", l("token")), V.set("wechatToken", l("token")), m(l("token"), t)) : t() : !W.hasToken() && l("wecut_uid") && l("wecut_rand") && l("wecut_token") ? f(l("wecut_uid"), l("wecut_rand"), l("wecut_token"), t) : t()
        }), J.afterEach(function(e, n) {
            n.name && document.body.className.indexOf(n.name + "-wrap") > -1 && document.body.classList.remove(n.name + "-wrap")
        });
        var Z = a(),
            H = c();
        new _.
            default ({
            router: J,
            data: {
                channel: Q,
                inviteCode: q,
                platform_user: "",
                showDoll: Z,
                showShiwu: Z,
                showCenter: H,
                showExchange: s(),
                showShareBtn: u(),
                isWx: d(),
                auth: r
            },
            store: T.
                default
        }).$mount("#app");
        _.
            default.filter("formatTime", function(e, n) {
                if (!e) return "";
                var e = new Date(Number(e)),
                    t = {
                        M: e.getMonth() + 1,
                        d: e.getDate(),
                        h: e.getHours(),
                        m: e.getMinutes(),
                        s: e.getSeconds(),
                        q: Math.floor((e.getMonth() + 3) / 3),
                        S: e.getMilliseconds()
                    };
                return n = n.replace(/([yMdhmsqS])+/g, function(n, o) {
                    var i = t[o];
                    return void 0 !== i ? (n.length > 1 && (i = "0" + i, i = i.substr(i.length - 2)), i) : "y" === o ? (e.getFullYear() + "").substr(4 - n.length) : n
                })
            })
    },
    3: function(e, n, t) {
        var o, i;
        o = [], i = function() {
            function e() {
                var e = "test";
                try {
                    return a.setItem(e, "testValue"), a.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }
            function n(e, n) {
                a.setItem(e, u.stringify(n))
            }
            function t(e) {
                var n = u.parse(a.getItem(e));
                if (null != n) return n
            }
            function o() {
                a.clear()
            }
            function i(e) {
                a.removeItem(e)
            }
            function r(e) {
                0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                } catch (n) {
                    return e
                }
            }
            var a = window.localStorage,
                u = window.JSON,
                c = {
                    set: n,
                    get: t,
                    clear: o,
                    remove: i
                },
                s = {},
                l = {
                    stringify: function(e, n, t) {
                        var o = [e + "=" + encodeURIComponent(n)];
                        return isFinite(t) && "number" == typeof t ? o.push("Max-Age=" + t) : (t = t || {}, t.maxAge && o.push("Max-Age=" + t.maxAge), t.domain && o.push("Domain=" + t.domain), t.path && o.push("Path=" + t.path), t.expires && o.push("Expires=" + t.expires.toUTCString()), t.httpOnly && o.push("HttpOnly"), t.secure && o.push("Secure")), o.join("; ")
                    },
                    forEach: function(e) {
                        var n = String(document.cookie).split(/; */);
                        n.forEach(function(n) {
                            var t = n.indexOf("=");
                            if (t !== -1) {
                                var o = n.substr(0, t).trim(),
                                    i = n.substr(++t, n.length).trim();
                                e(o, r(i))
                            }
                        })
                    },
                    get: function(e) {
                        var n;
                        try {
                            l.forEach(function(t, o) {
                                if (t === e) throw n = o, ""
                            })
                        } catch (e) {}
                        return n
                    },
                    getAll: function() {
                        var e = {};
                        return l.forEach(function(n, t) {
                            n in e || (e[n] = t)
                        }), e
                    },
                    set: function(e, n, t) {
                        document.cookie = l.stringify.apply(0, arguments)
                    },
                    remove: function(e, n) {
                        n = n || {}, n.expires || (n.expires = new Date(1970, 0, 1)), l.set(e, "", n)
                    },
                    clear: function() {
                        l.forEach(function(e, n) {
                            l.remove(e)
                        })
                    }
                },
                d = l.get("cacheData") || u.stringify({});
            try {
                d = u.parse(d) || {}
            } catch (e) {
                d = {}
            }
            var f = {
                data: d,
                set: function(e, n) {
                    this.data[e] = n, l.set("cacheData", u.stringify(this.data))
                },
                get: function(e) {
                    return this.data[e]
                },
                clear: function() {
                    this.data = {}, l.set("cacheData", u.stringify(this.data))
                },
                remove: function(e) {
                    delete this.data[e], l.set("cacheData", u.stringify(this.data))
                }
            };
            return s = e() ? c : f
        }.apply(n, o), !(void 0 !== i && (e.exports = i))
    },
    4: function(e, n, t) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.
                default = e, n
        }
        function i(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        function r(e, n, t) {
            var o = document.createElement("script");
            o.type = "text/javascript", o.src = e, document.getElementsByTagName("head")[0].appendChild(o), o.onload = function() {
                "function" == typeof n ? n() : ""
            }, o.onerror = function() {
                "function" == typeof t ? t() : ""
            }
        }
        function a() {
            if (!f(A)) {
                var e = C.get("token");
                e && (A = e)
            }
            return A
        }
        function u() {
            return f(a())
        }
        function c() {
            return Boolean(C.get("userInfo"))
        }
        function s(e) {
            var n = encodeURIComponent(e),
                t = a();
            f(e) && n != t && (A = n, C.set("token", A))
        }
        function l() {
            A = "", C.set("token", ""), C.remove("token")
        }
        function d(e) {
            if (e = e || {}, C.get("userInfo")) {
                e.token = C.get("token");
                var n = C.get("userInfo") || {};
                e.uid = n.uid || ""
            }
            e.time = +new Date, e.app_key = P, e.sign && delete e.sign;
            var t = [];
            for (var o in e) t.push(o + "=" + encodeURIComponent(e[o]));
            t.sort();
            var i = t.join("&");
            return e.sign = (0, T.md5)(i), delete e.app_key, e
        }
        function f(e) {
            return p(e) && e.replace(/(^s*)|(s*$)/g, "").length > 0
        }
        function p(e) {
            return "string" == typeof e
        }
        function m() {
            return O.BaseApiUrl
        }
        function h() {
            return O.BaseApiUrl.replace("api.php", "bull_01/dist/")
        }
        function g(e, n, t, o) {
            var i = m();
            e.indexOf("http") >= 0 ? i = e : p(e) && (i += e);
            var r = d(n);
            return _("GET", i, {}, r, t, o)
        }
        function v(e, n, t, o) {
            var i = m();
            e.indexOf("http") >= 0 ? i = e : p(e) && (i += e);
            var r = d(n);
            return _("POST", i, r, {}, t, o)
        }
        function y() {
            var e = navigator.userAgent.toLowerCase();
            return "micromessenger" == e.match(/MicroMessenger/i)
        }
        function _(e, n, t, o, i, r) {
            var a = function() {},
                u = "function" == typeof i ? i : a,
                c = "function" == typeof r ? r : a;
            I.
                default.http.options.emulateJSON = !0, I.
                default.http({
                    url: n,
                    method: e,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: t,
                    params: o
                }).then(function(e) {
                    var n, t = e.data;
                    try {
                        n = JSON.parse(t).code
                    } catch (e) {}
                    return 308 == n ? (C.remove("userInfo"), L.Indicator.close(), void(y() || (0, L.Toast)("请先登录"))) : (t = (0, b.
                        default)(t), void u(t))
                }, c)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.hasToken = n.loadJs = n.removeToken = n.isLogin = n.getToken = n.setToken = n.post = n.get = n.getBaseWebappUrl = n.getBaseApiUrl = n.getDefaultParams = void 0;
        var w = t(29),
            b = i(w),
            T = t(177),
            x = t(59),
            I = i(x),
            k = t(485),
            S = i(k),
            M = t(3),
            C = o(M),
            L = t(6),
            O = t(105);
        n.getDefaultParams = d, n.getBaseApiUrl = m, n.getBaseWebappUrl = h, n.get = g, n.post = v, n.setToken = s, n.getToken = a, n.isLogin = c, n.removeToken = l, n.loadJs = r, n.hasToken = u, I.
            default.use(S.
                default);
        var A = encodeURIComponent(""),
            P = "sdhfgr783h2dherweopgjht03"
    },
    5: function(e, n, t) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.
                default = e, n
        }
        function i(e, n, t) {
            var o = "?method=user.quickLogin";
            return j.post(o, e, n, t)
        }
        function r(e, n, t, o, i, r, a) {
            var u = "?method=user.quickLogin",
                c = {
                    phone: e,
                    code: n,
                    task_id: t,
                    channel: o,
                    invite: i
                };
            return j.post(u, c, r, a)
        }
        function a(e, n, t) {
            var o = "?method=user.touristReg",
                i = {
                    channel: e
                };
            return j.post(o, i, n, t)
        }
        function u(e, n, t, o, i) {
            var r = "?method=user.bandPhone",
                a = {
                    phone: e,
                    task_id: n,
                    code: t
                };
            return j.post(r, a, o, i)
        }
        function c(e, n, t) {
            var o = "?method=user.getWelfare",
                i = {
                    type: e
                };
            return j.post(o, i, n, t)
        }
        function s(e, n, t) {
            var o = "?method=user.useSkin",
                i = {
                    skin: e
                };
            return j.post(o, i, n, t)
        }
        function l(e, n, t, o) {
            var i = "?method=user.modifyInfo",
                r = {
                    icon: n,
                    nick: e
                };
            return j.post(i, r, t, o)
        }
        function d(e, n, t, o) {
            var i = {
                    awardList: "?method=user.awardList",
                    friendList: "?method=user.friendList"
                },
                r = {
                    id: n
                };
            return j.post(i[e], r, t, o)
        }
        function f(e, n, t) {
            var o = "?method=bull.payState",
                i = {
                    order_num: e
                };
            return j.post(o, i, n, t)
        }
        function p(e, n) {
            var t = "?method=user.christmasPay",
                o = {};
            return j.post(t, o, e, n)
        }
        function m(e, n, t) {
            var o = "?method=user.loginGame",
                i = {
                    game: "taoniu",
                    channel: e
                };
            return j.post(o, i, n, t)
        }
        function h(e, n, t, o, i) {
            var r = "?method=user.wecutLogin",
                a = {
                    wecut_uid: e,
                    wecut_rand: n,
                    wecut_token: t
                };
            return j.post(r, a, o, i)
        }
        function g(e, n, t) {
            var o = "?method=user.wxLogin",
                i = Q.get("inviteCode") || "";
            i ? Q.remove("inviteCode") : "";
            var r = {
                token: e,
                code: i
            };
            return j.post(o, r, n, t)
        }
        function v(e, n, t) {
            var o = "?method=user.wxInit",
                i = {
                    url: e
                };
            return j.post(o, i, n, t)
        }
        function y(e, n, t, o) {
            var i = "?method=shop.exchangeList",
                r = {
                    type: e,
                    page: n
                };
            return j.post(i, r, t, o)
        }
        function _(e, n, t, o, i, r, a) {
            var u, c = {
                receiver: t,
                phone: o,
                address: i
            };
            switch (e) {
                case "tn":
                    u = "?method=shop.exchange", c.goods_id = n;
                    break;
                case "shiwu":
                    u = "?&method=shop.luckyExchange", c.id = n;
                    break;
                case "doll":
                    u = "?&method=doll.exchange", c.id = n
            }
            return j.post(u, c, r, a)
        }
        function w(e, n, t, o, i) {
            var r = "doll" == e ? "?&method=doll.exchangeCard" : "?&method=shop.exchangeCard",
                a = {
                    type: n
                };
            return "doll" == e ? a.id = t : a.goods_id = t, j.post(r, a, o, i)
        }
        function b(e, n, t, o, i, r) {
            var a = "?&method=shop.luckyExchange",
                u = {
                    id: e,
                    receiver: n,
                    phone: t,
                    address: o
                };
            return j.post(a, u, i, r)
        }
        function T(e, n, t, o) {
            var i = "?method=shop.goodsList",
                r = {
                    type: e,
                    page: n
                };
            return j.post(i, r, t, o)
        }
        function x(e, n, t, o) {
            var i = sessionStorage.getItem("fromGame"),
                r = q[i],
                a = "?method=bull.pay",
                u = {
                    pay_type: n,
                    money: e,
                    game_id: r
                };
            return j.post(a, u, t, o)
        }
        function I(e, n, t) {
            var o = sessionStorage.getItem("fromGame"),
                i = q[o],
                r = "?method=pay.union",
                a = {
                    game_id: i,
                    coin: e
                };
            return j.post(r, a, n, t)
        }
        function k(e, n, t, o, i) {
            var r = {
                    myRecord: "?method=bull.myRecord",
                    mySimRecord: "?method=bull.mySimRecord"
                },
                a = {
                    award: n,
                    last_time: t
                };
            return j.post(r[e], a, o, i)
        }
        function S(e, n, t, o, i, r) {
            var a = {
                    lucky: "?method=bull.lucky",
                    simLucky: "?method=bull.simLucky"
                },
                u = {
                    level: n,
                    coin: t,
                    multiple: o
                };
            return j.post(a[e], u, i, r)
        }
        function M(e, n, t, o) {
            var i = "?&method=bull2.lucky",
                r = {
                    coin: n,
                    activity_id: e
                };
            return j.post(i, r, t, o)
        }
        function C(e, n, t) {
            var o = "?&method=bull2.myRecord",
                i = {
                    page: e
                };
            return j.post(o, i, n, t)
        }
        function L(e, n, t) {
            var o = "?&method=bull2.recordDetail",
                i = {
                    order_num: e
                };
            return j.post(o, i, n, t)
        }
        function O(e, n) {
            var t = "?method=data.gameClick",
                o = Q.get("userInfo") ? Q.get("userInfo").uid : 0,
                i = function() {},
                r = function() {},
                a = {
                    game: e,
                    uid: o,
                    channel: n
                };
            return j.post(t, a, i, r)
        }
        function A(e, n) {
            var t = "?&method=user.myRecentlyGame",
                o = {};
            return j.post(t, o, e, n)
        }
        function P(e, n, t) {
            var o = {
                    myInfo: "?method=user.myInfo",
                    goodsTypeList: "?method=shop.goodsType",
                    congratulate: "?method=bull.congratulate",
                    userInfo: "?method=user.info",
                    friends: "?method=user.friends",
                    sign: "?method=user.sign",
                    allReceive: "?method=user.allReceive",
                    welfare: "?method=user.welfare",
                    share: "?method=user.share",
                    ygInfo: "?&method=bull2.activity",
                    getMyLucky: "?&method=bull2.myLucky",
                    doll_congratelate: "?&method=doll.congratulate",
                    maileLogin: "?&method=shop.maileLogin",
                    ranklist: "?&method=bull.ranking",
                    commentlist: "?&method=show.showList",
                    mynewsList: "?&method=show.msgList",
                    questionList: "?&method=show.questionsList",
                    getCoin: "?&method=bull.getCoin",
                    banner: "?&method=banner.banner",
                    games: "?&method=game.gameList"
                },
                i = {};
            return j.post(o[e], i, n, t)
        }
        function E(e, n, t, o, i, r, a, u, c) {
            var s = {
                    reg: "?method=user.reg",
                    find_pwd: "?method=user.forgetPassword"
                },
                l = {
                    phone: n,
                    code: o,
                    task_id: i,
                    password: t,
                    channel: r,
                    invite: a
                };
            return j.post(s[e], l, u, c)
        }
        function R() {
            return j.getBaseApiUrl()
        }
        function U(e, n, t, o) {
            var i = "?method=user.login",
                r = {
                    phone: e,
                    password: n
                };
            return j.post(i, r, t, o)
        }
        function B(e, n, t, o, i) {
            var r = "?method=user.sendSmsCode",
                a = {
                    task: e,
                    phone: n,
                    code: t
                };
            return j.post(r, a, o, i)
        }
        function W(e, n, t) {
            var o = "?&method=user.exchangeCoin",
                i = {
                    code: e
                };
            return j.post(o, i, n, t)
        }
        function N(e, n, t) {
            var o = "?&method=shop.conversion",
                i = {
                    code: e
                };
            return j.post(o, i, n, t)
        }
        function V(e, n, t, o) {
            var i = "?&method=bull.getFlow",
                r = {
                    phone: e,
                    rank_id: n
                };
            return j.post(i, r, t, o)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.myRecentlyGame = n.countClick = n.exchangeCard = n.libaoExchange = n.rankExchange = n.cmccExchange = n.ygExchange = n.shiwuRecord = n.shiwuDetail = n.shiwuLucky = n.platformData = n.quickLogin = n.touristReg = n.bindPhone = n.getWelfare = n.useSkin = n.modifyInfo = n.userFriends = n.payState = n.christmasPay = n.dataReport = n.wecutLogin = n.wxLogin = n.getWechatConfig = n.exchangeList = n.exchange = n.getBaseApiUrl = n.goodsList = n.platformPay = n.recharge = n.myRecord = n.lucky = n.reg = n.postNoParams = n.sendSmsCode = n.login = void 0;
        var J = t(4),
            j = o(J),
            D = t(3),
            Q = o(D);
        n.login = U, n.sendSmsCode = B, n.postNoParams = P, n.reg = E, n.lucky = S, n.myRecord = k, n.recharge = x, n.platformPay = I, n.goodsList = T, n.getBaseApiUrl = R, n.exchange = _, n.exchangeList = y, n.getWechatConfig = v, n.wxLogin = g, n.wecutLogin = h, n.dataReport = m, n.christmasPay = p, n.payState = f, n.userFriends = d, n.modifyInfo = l, n.useSkin = s, n.getWelfare = c, n.bindPhone = u, n.touristReg = a, n.quickLogin = r, n.platformData = i, n.shiwuLucky = M, n.shiwuDetail = L, n.shiwuRecord = C, n.ygExchange = b, n.cmccExchange = W, n.rankExchange = V, n.libaoExchange = N, n.exchangeCard = w, n.countClick = O, n.myRecentlyGame = A;
        var q = {
            index: 0,
            doll: 1
        }
    },
    11: function(e, n, t) {
        function o(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        var i, r, a = t(107),
            u = o(a),
            c = t(6);
        i = [t(27), t(5), t(4), t(3)], r = function(e, n, t, o) {
            function i() {
                var e = navigator.userAgent.toLowerCase();
                return "micromessenger" == e.match(/MicroMessenger/i)
            }
            function r() {
                var e = navigator.userAgent;
                return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            }
            function a(t, o) {
                function i(n) {
                    n = JSON.parse(n);
                    var t = n.state,
                        o = n.data;
                    if (1 == t) {
                        var i = o.appId,
                            r = o.timestamp,
                            a = o.nonceStr,
                            s = o.signature;
                        e.config({
                            debug: !1,
                            appId: i,
                            timestamp: r,
                            nonceStr: a,
                            signature: s,
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                        }), e.ready(function() {
                            u()
                        }), e.error(function(e) {})
                    } else(0, c.Toast)("初始化失败：" + n.msg)
                }
                function a(e, n) {
                    (0, c.Toast)("网络异常：状态码：" + e.statusText), s()
                }
                var u = "function" == typeof t ? t : function() {},
                    s = "function" == typeof o ? o : function() {},
                    l = location.href.split("#")[0];
                r(), n.getWechatConfig(l, i, a)
            }
            function s(n, t, o, i, r) {
                e.onMenuShareTimeline({
                    title: n,
                    link: t,
                    imgUrl: o,
                    success: function() {
                        i()
                    },
                    cancel: function() {
                        r()
                    }
                })
            }
            function l(n, t, o, i, r, a) {
                e.onMenuShareAppMessage({
                    title: n,
                    desc: t,
                    link: o,
                    imgUrl: i,
                    type: "link",
                    dataUrl: "",
                    success: function() {
                        r()
                    },
                    cancel: function() {
                        a()
                    }
                })
            }
            function d(n, t, o, i, r, a) {
                e.onMenuShareQQ({
                    title: n,
                    desc: t,
                    link: o,
                    imgUrl: i,
                    success: function() {
                        r()
                    },
                    cancel: function() {
                        a()
                    }
                })
            }
            function f(n, t, o, i, r, a) {
                e.onMenuShareWeibo({
                    title: n,
                    desc: t,
                    link: o,
                    imgUrl: i,
                    success: function() {
                        r()
                    },
                    cancel: function() {
                        a()
                    }
                })
            }
            function p(n, t, o, i, r, a) {
                e.onMenuShareQZone({
                    title: n,
                    desc: t,
                    link: o,
                    imgUrl: i,
                    success: function() {
                        r()
                    },
                    cancel: function() {
                        a()
                    }
                })
            }
            function m() {
                e.checkJsApi({
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"],
                    success: function(e) {
                        return e.chooseImage
                    }
                })
            }
            function h(e) {
                window.location.href = e
            }
            function g(e, n, t, o, i, r, a) {
                function u() {}
                function c() {
                    WeixinJSBridge.invoke("getBrandWCPayRequest", {
                        appId: e,
                        timeStamp: "" + (new Date).getTime(),
                        nonceStr: n,
                        package: "prepay_id=" + t,
                        signType: "MD5",
                        paySign: o
                    }, function(e) {
                        "get_brand_wcpay_request：ok" == e.err_msg ? s() : "get_brand_wcpay_request：cancel" == e.err_msg ? l() : "get_brand_wcpay_request：fail" == e.err_msg ? d() : ssjjLog.log("waiting wechat pay result……")
                    })
                }
                var s = "function" == typeof i ? i : u,
                    l = "function" == typeof r ? r : u,
                    d = "function" == typeof a ? a : u;
                "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", c, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", c), document.attachEvent("onWeixinJSBridgeReady", c)) : c()
            }
            function v(e, n, t, o, i, r) {
                s(e, t, o, i, r), l(e, n, t, o, i, r), d(e, n, t, o, i, r), f(e, n, t, o, i, r), p(e, n, t, o, i, r)
            }
            function y(e) {
                var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                    t = window.location.search.substr(1).match(n);
                return null != t ? t[2] : null
            }
            function _(e, n) {
                var r = y("channel") || "0";
                r.indexOf("A") > -1 && (r = r.split("A")[0]), r < 5e4 && (r = Number(r) + 5e4);
                var s = o.get("userInfo") || "",
                    l = s.invite || "",
                    d = {
                        isWxEnable: !1,
                        iswxConfigInit: !1
                    };
                switch (e) {
                    case "doll":
                        d = (0, u.
                            default)({
                            shareTitle: "夹娃娃",
                            shareContent: " 线上夹娃娃，夹中娃娃领话费、京东E卡！",
                            shareImgUrls: t.getBaseWebappUrl() + "static/img/icon/doll.png",
                            shareLink: t.getBaseWebappUrl() + "?channel=" + r + "A" + l + "#/doll"
                        }, d);
                        break;
                    case "index":
                        d = (0, u.
                            default)({
                            shareTitle: "欢乐套牛",
                            shareContent: "边套牛边赚豆豆，还能赢话费、京东E卡哦！",
                            shareImgUrls: t.getBaseWebappUrl() + "static/img/share_icon.png",
                            shareLink: t.getBaseWebappUrl() + "?channel=" + r + "A" + l + "#/index"
                        }, d);
                        break;
                    case "gameCenter":
                        d = (0, u.
                            default)({
                            shareTitle: "云乐游乐园",
                            shareContent: "小金豆赢大奖",
                            shareImgUrls: t.getBaseWebappUrl() + "static/img/gm_share.png",
                            shareLink: t.getBaseWebappUrl() + "?channel=" + r + "A" + l + "#/gameCenter"
                        }, d);
                        break;
                    default:
                        d = (0, u.
                            default)({
                            shareTitle: "云乐游乐园",
                            shareContent: "小金豆赢大奖",
                            shareImgUrls: t.getBaseWebappUrl() + "static/img/gm_share.png",
                            shareLink: t.getBaseWebappUrl() + "?channel=" + r + "A" + l + "#/gameCenter"
                        }, d)
                }
                i() && (d.isWxEnable = !0, m(), d.iswxConfigInit && "wx" == o.get("tnway") ? v(d.shareTitle, d.shareContent, d.shareLink, d.shareImgUrls, function() {
                    (0, c.Toast)("分享成功"), o.get("userInfo") && w(), n && n()
                }, function() {}) : a(function() {
                    d.iswxConfigInit = !0, v(d.shareTitle, d.shareContent, d.shareLink, d.shareImgUrls, function() {
                        (0, c.Toast)("分享成功"), o.get("userInfo") && w(), n && n()
                    }, function() {})
                }, function() {}))
            }
            function w() {
                n.postNoParams("share", function(e) {}, function(e) {})
            }
            return {
                isWxEnable: i,
                wxConfigInit: a,
                wxCheckIsSupport: m,
                wxPayByWebSpec: h,
                weChatPayByWxWeb: g,
                wxShareToTimeline: s,
                wxShareToAppMessage: l,
                wxShareToQQ: d,
                wxShareToWeibo: f,
                wxShareToQZone: p,
                wxShareAll: v,
                init: _
            }
        }.apply(n, i), !(void 0 !== r && (e.exports = r))
    },
    23: function(e, n) {
        "use strict";

        function t(e) {
            var n = {
                0: "skin-none",
                32: "skin-shengdan",
                33: "skin-yuandan"
            };
            document.getElementsByTagName("html")[0].className = n[e]
        }
        function o(e) {
            if (self == top) {
                var n = document;
                if (e.title && (n.title = e.title), e.url && e.sizes && e.rels) for (var t = 0; t < e.rels.length; t++) {
                    var o = n.createElement("link");
                    o.setAttribute("rel", e.rels[t]), o.setAttribute("sizes", e.sizes), o.setAttribute("href", e.url);
                    var r = n.getElementsByTagName("head");
                    r.length ? r[0].appendChild(o) : n.documentElement.appendChild(o)
                }
            }
            i()
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.initSkin = t, n.initTitleIcon = o;
        var i = function() {
            var e = navigator.userAgent;
            if (/\bMicroMessenger\/([\d\.]+)/.test(e) && /ip(hone|od|ad)/i.test(e)) {
                var n = document.createElement("iframe");
                n.src = "/favicon.ico", n.style.display = "none", n.onload = function() {
                    setTimeout(function() {
                        n.remove()
                    }, 100)
                }, document.body.appendChild(n)
            }
        }
    },
    27: function(e, n, t) {
        function o(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        var i, r = t(29),
            a = o(r);
        !
            function(o, r) {
                i = function() {
                    return r(o)
                }.call(n, t, n, e), !(void 0 !== i && (e.exports = i))
            }(window, function(e, n) {
                function t(n, t, o) {
                    e.WeixinJSBridge ? WeixinJSBridge.invoke(n, i(t), function(e) {
                        u(n, e, o)
                    }) : l(n, o)
                }
                function o(n, t, o) {
                    e.WeixinJSBridge ? WeixinJSBridge.on(n, function(e) {
                        o && o.trigger && o.trigger(e), u(n, e, t)
                    }) : o ? l(n, o) : l(n, t)
                }
                function i(e) {
                    return e = e || {}, e.appId = A.appId, e.verifyAppId = A.appId, e.verifySignType = "sha1", e.verifyTimestamp = A.timestamp + "", e.verifyNonceStr = A.nonceStr, e.verifySignature = A.signature, e
                }
                function r(e) {
                    return {
                        timeStamp: e.timestamp + "",
                        nonceStr: e.nonceStr,
                        package: e.package,
                        paySign: e.paySign,
                        signType: e.signType || "SHA1"
                    }
                }
                function u(e, n, t) {
                    var o, i, r;
                    switch (delete n.err_code, delete n.err_desc, delete n.err_detail, o = n.errMsg, o || (o = n.err_msg, delete n.err_msg, o = c(e, o), n.errMsg = o), t = t || {}, t._complete && (t._complete(n), delete t._complete), o = n.errMsg || "", A.debug && !t.isInnerInvoke && alert((0, a.
                        default)(n)), i = o.indexOf(":"), r = o.substring(i + 1)) {
                        case "ok":
                            t.success && t.success(n);
                            break;
                        case "cancel":
                            t.cancel && t.cancel(n);
                            break;
                        default:
                            t.fail && t.fail(n)
                    }
                    t.complete && t.complete(n)
                }
                function c(e, n) {
                    var t, o, i = e,
                        r = g[i];
                    return r && (i = r), t = "ok", n && (o = n.indexOf(":"), t = n.substring(o + 1), "confirm" == t && (t = "ok"), "failed" == t && (t = "fail"), -1 != t.indexOf("failed_") && (t = t.substring(7)), -1 != t.indexOf("fail_") && (t = t.substring(5)), t = t.replace(/_/g, " "), t = t.toLowerCase(), ("access denied" == t || "no permission to execute" == t) && (t = "permission denied"), "config" == i && "function not exist" == t && (t = "ok"), "" == t && (t = "fail")), n = i + ":" + t
                }
                function s(e) {
                    var n, t, o, i;
                    if (e) {
                        for (n = 0, t = e.length; t > n; ++n) o = e[n], i = h[o], i && (e[n] = i);
                        return e
                    }
                }
                function l(e, n) {
                    if (!(!A.debug || n && n.isInnerInvoke)) {
                        var t = g[e];
                        t && (e = t), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "")
                    }
                }
                function d() {
                    b || T || A.debug || "6.0.2" > S || O.systemType < 0 || M || (M = !0, O.appId = A.appId, O.initTime = L.initEndTime - L.initStartTime, O.preVerifyTime = L.preVerifyEndTime - L.preVerifyStartTime, R.getNetworkType({
                        isInnerInvoke: !0,
                        success: function(e) {
                            var n, t;
                            O.networkType = e.networkType, n = "http://open.weixin.qq.com/sdk/report?v=" + O.version + "&o=" + O.isPreVerifyOk + "&s=" + O.systemType + "&c=" + O.clientVersion + "&a=" + O.appId + "&n=" + O.networkType + "&i=" + O.initTime + "&p=" + O.preVerifyTime + "&u=" + O.url, t = new Image, t.src = n
                        }
                    }))
                }
                function f() {
                    return (new Date).getTime()
                }
                function p(n) {
                    x && (e.WeixinJSBridge ? n() : v.addEventListener && v.addEventListener("WeixinJSBridgeReady", n, !1))
                }
                function m() {
                    R.invoke || (R.invoke = function(n, t, o) {
                        e.WeixinJSBridge && WeixinJSBridge.invoke(n, i(t), o)
                    }, R.on = function(n, t) {
                        e.WeixinJSBridge && WeixinJSBridge.on(n, t)
                    })
                }
                var h, g, v, y, _, w, b, T, x, I, k, S, M, C, L, O, A, P, E, R;
                if (!e.jWeixin) return h = {
                    config: "preVerifyJSAPI",
                    onMenuShareTimeline: "menu:share:timeline",
                    onMenuShareAppMessage: "menu:share:appmessage",
                    onMenuShareQQ: "menu:share:qq",
                    onMenuShareWeibo: "menu:share:weiboApp",
                    onMenuShareQZone: "menu:share:QZone",
                    previewImage: "imagePreview",
                    getLocation: "geoLocation",
                    openProductSpecificView: "openProductViewWithPid",
                    addCard: "batchAddCard",
                    openCard: "batchViewCard",
                    chooseWXPay: "getBrandWCPayRequest"
                }, g = function() {
                    var e, n = {};
                    for (e in h) n[h[e]] = e;
                    return n
                }(), v = e.document, y = v.title, _ = navigator.userAgent.toLowerCase(), w = navigator.platform.toLowerCase(), b = !(!w.match("mac") && !w.match("win")), T = -1 != _.indexOf("wxdebugger"), x = -1 != _.indexOf("micromessenger"), I = -1 != _.indexOf("android"), k = -1 != _.indexOf("iphone") || -1 != _.indexOf("ipad"), S = function() {
                    var e = _.match(/micromessenger\/(\d+\.\d+\.\d+)/) || _.match(/micromessenger\/(\d+\.\d+)/);
                    return e ? e[1] : ""
                }(), M = !1, C = !1, L = {
                    initStartTime: f(),
                    initEndTime: 0,
                    preVerifyStartTime: 0,
                    preVerifyEndTime: 0
                }, O = {
                    version: 1,
                    appId: "",
                    initTime: 0,
                    preVerifyTime: 0,
                    networkType: "",
                    isPreVerifyOk: 1,
                    systemType: k ? 1 : I ? 2 : -1,
                    clientVersion: S,
                    url: encodeURIComponent(location.href)
                }, A = {}, P = {
                    _completes: []
                }, E = {
                    state: 0,
                    data: {}
                }, p(function() {
                    L.initEndTime = f()
                }), R = {
                    config: function(e) {
                        A = e, l("config", e);
                        var n = A.check !== !1;
                        p(function() {
                            var e, o, i;
                            if (n) t(h.config, {
                                verifyJsApiList: s(A.jsApiList)
                            }, function() {
                                P._complete = function(e) {
                                    L.preVerifyEndTime = f(), E.state = 1, E.data = e
                                }, P.success = function() {
                                    O.isPreVerifyOk = 0
                                }, P.fail = function(e) {
                                    P._fail ? P._fail(e) : E.state = -1
                                };
                                var e = P._completes;
                                return e.push(function() {
                                    d()
                                }), P.complete = function() {
                                    for (var n = 0, t = e.length; t > n; ++n) e[n]();
                                    P._completes = []
                                }, P
                            }()), L.preVerifyStartTime = f();
                            else {
                                for (E.state = 1, e = P._completes, o = 0, i = e.length; i > o; ++o) e[o]();
                                P._completes = []
                            }
                        }), A.beta && m()
                    },
                    ready: function(e) {
                        0 != E.state ? e() : (P._completes.push(e), !x && A.debug && e())
                    },
                    error: function(e) {
                        "6.0.2" > S || C || (C = !0, -1 == E.state ? e(E.data) : P._fail = e)
                    },
                    checkJsApi: function(e) {
                        var n = function e(n) {
                            var t, o, e = n.checkResult;
                            for (t in e) o = g[t], o && (e[o] = e[t], delete e[t]);
                            return n
                        };
                        t("checkJsApi", {
                            jsApiList: s(e.jsApiList)
                        }, function() {
                            return e._complete = function(e) {
                                if (I) {
                                    var t = e.checkResult;
                                    t && (e.checkResult = JSON.parse(t))
                                }
                                e = n(e)
                            }, e
                        }())
                    },
                    onMenuShareTimeline: function(e) {
                        o(h.onMenuShareTimeline, {
                            complete: function() {
                                t("shareTimeline", {
                                    title: e.title || y,
                                    desc: e.title || y,
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href,
                                    type: e.type || "link",
                                    data_url: e.dataUrl || ""
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareAppMessage: function(e) {
                        o(h.onMenuShareAppMessage, {
                            complete: function() {
                                t("sendAppMessage", {
                                    title: e.title || y,
                                    desc: e.desc || "",
                                    link: e.link || location.href,
                                    img_url: e.imgUrl || "",
                                    type: e.type || "link",
                                    data_url: e.dataUrl || ""
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareQQ: function(e) {
                        o(h.onMenuShareQQ, {
                            complete: function() {
                                t("shareQQ", {
                                    title: e.title || y,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareWeibo: function(e) {
                        o(h.onMenuShareWeibo, {
                            complete: function() {
                                t("shareWeiboApp", {
                                    title: e.title || y,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareQZone: function(e) {
                        o(h.onMenuShareQZone, {
                            complete: function() {
                                t("shareQZone", {
                                    title: e.title || y,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    },
                    startRecord: function(e) {
                        t("startRecord", {}, e)
                    },
                    stopRecord: function(e) {
                        t("stopRecord", {}, e)
                    },
                    onVoiceRecordEnd: function(e) {
                        o("onVoiceRecordEnd", e)
                    },
                    playVoice: function(e) {
                        t("playVoice", {
                            localId: e.localId
                        }, e)
                    },
                    pauseVoice: function(e) {
                        t("pauseVoice", {
                            localId: e.localId
                        }, e)
                    },
                    stopVoice: function(e) {
                        t("stopVoice", {
                            localId: e.localId
                        }, e)
                    },
                    onVoicePlayEnd: function(e) {
                        o("onVoicePlayEnd", e)
                    },
                    uploadVoice: function(e) {
                        t("uploadVoice", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    downloadVoice: function(e) {
                        t("downloadVoice", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    translateVoice: function(e) {
                        t("translateVoice", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    chooseImage: function(e) {
                        t("chooseImage", {
                            scene: "1|2",
                            count: e.count || 9,
                            sizeType: e.sizeType || ["original", "compressed"],
                            sourceType: e.sourceType || ["album", "camera"]
                        }, function() {
                            return e._complete = function(e) {
                                if (I) {
                                    var n = e.localIds;
                                    n && (e.localIds = JSON.parse(n))
                                }
                            }, e
                        }())
                    },
                    previewImage: function(e) {
                        t(h.previewImage, {
                            current: e.current,
                            urls: e.urls
                        }, e)
                    },
                    uploadImage: function(e) {
                        t("uploadImage", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    downloadImage: function(e) {
                        t("downloadImage", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    getNetworkType: function(e) {
                        var n = function e(n) {
                            var t, o, i, e = n.errMsg;
                            if (n.errMsg = "getNetworkType:ok", t = n.subtype, delete n.subtype, t) n.networkType = t;
                            else switch (o = e.indexOf(":"), i = e.substring(o + 1)) {
                                case "wifi":
                                case "edge":
                                case "wwan":
                                    n.networkType = i;
                                    break;
                                default:
                                    n.errMsg = "getNetworkType:fail"
                            }
                            return n
                        };
                        t("getNetworkType", {}, function() {
                            return e._complete = function(e) {
                                e = n(e)
                            }, e
                        }())
                    },
                    openLocation: function(e) {
                        t("openLocation", {
                            latitude: e.latitude,
                            longitude: e.longitude,
                            name: e.name || "",
                            address: e.address || "",
                            scale: e.scale || 28,
                            infoUrl: e.infoUrl || ""
                        }, e)
                    },
                    getLocation: function(e) {
                        e = e || {}, t(h.getLocation, {
                            type: e.type || "wgs84"
                        }, function() {
                            return e._complete = function(e) {
                                delete e.type
                            }, e
                        }())
                    },
                    hideOptionMenu: function(e) {
                        t("hideOptionMenu", {}, e)
                    },
                    showOptionMenu: function(e) {
                        t("showOptionMenu", {}, e)
                    },
                    closeWindow: function(e) {
                        e = e || {}, t("closeWindow", {}, e)
                    },
                    hideMenuItems: function(e) {
                        t("hideMenuItems", {
                            menuList: e.menuList
                        }, e)
                    },
                    showMenuItems: function(e) {
                        t("showMenuItems", {
                            menuList: e.menuList
                        }, e)
                    },
                    hideAllNonBaseMenuItem: function(e) {
                        t("hideAllNonBaseMenuItem", {}, e)
                    },
                    showAllNonBaseMenuItem: function(e) {
                        t("showAllNonBaseMenuItem", {}, e)
                    },
                    scanQRCode: function(e) {
                        e = e || {}, t("scanQRCode", {
                            needResult: e.needResult || 0,
                            scanType: e.scanType || ["qrCode", "barCode"]
                        }, function() {
                            return e._complete = function(e) {
                                var n, t;
                                k && (n = e.resultStr, n && (t = JSON.parse(n), e.resultStr = t && t.scan_code && t.scan_code.scan_result))
                            }, e
                        }())
                    },
                    openProductSpecificView: function(e) {
                        t(h.openProductSpecificView, {
                            pid: e.productId,
                            view_type: e.viewType || 0,
                            ext_info: e.extInfo
                        }, e)
                    },
                    addCard: function(e) {
                        var n, o, i, r, a = e.cardList,
                            u = [];
                        for (n = 0, o = a.length; o > n; ++n) i = a[n], r = {
                            card_id: i.cardId,
                            card_ext: i.cardExt
                        }, u.push(r);
                        t(h.addCard, {
                            card_list: u
                        }, function() {
                            return e._complete = function(e) {
                                var n, t, o, i = e.card_list;
                                if (i) {
                                    for (i = JSON.parse(i), n = 0, t = i.length; t > n; ++n) o = i[n], o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !! o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ;
                                    e.cardList = i, delete e.card_list
                                }
                            }, e
                        }())
                    },
                    chooseCard: function(e) {
                        t("chooseCard", {
                            app_id: A.appId,
                            location_id: e.shopId || "",
                            sign_type: e.signType || "SHA1",
                            card_id: e.cardId || "",
                            card_type: e.cardType || "",
                            card_sign: e.cardSign,
                            time_stamp: e.timestamp + "",
                            nonce_str: e.nonceStr
                        }, function() {
                            return e._complete = function(e) {
                                e.cardList = e.choose_card_info, delete e.choose_card_info
                            }, e
                        }())
                    },
                    openCard: function(e) {
                        var n, o, i, r, a = e.cardList,
                            u = [];
                        for (n = 0, o = a.length; o > n; ++n) i = a[n], r = {
                            card_id: i.cardId,
                            code: i.code
                        }, u.push(r);
                        t(h.openCard, {
                            card_list: u
                        }, e)
                    },
                    chooseWXPay: function(e) {
                        t(h.chooseWXPay, r(e), e)
                    }
                }, n && (e.wx = e.jWeixin = R), R
            })
    },
    105: function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var t = void 0,
            o = void 0,
            i = void 0;
        window.location.host;
        n.appid = t = "wx260fed58c1145d68", n.BaseApiUrl = o = "http://tn.uxi.me/api.php", n.redirect_uri_base = i = "http%3A%2F%2Ftna.uxi.me", n.BaseApiUrl = o, n.redirect_uri_base = i, n.appid = t
    },
    106: function(e, n) {
        "use strict";

        function t(e) {
            var n = {
                lt: "<",
                gt: ">",
                nbsp: " ",
                amp: "&",
                quot: '"'
            };
            return e.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(e, t) {
                return n[t]
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.browser = o, n.escape2Html = t;
        var o = {
            versions: function() {
                var e = navigator.userAgent;
                navigator.appVersion;
                return {
                    trident: e.indexOf("Trident") > -1,
                    presto: e.indexOf("Presto") > -1,
                    webKit: e.indexOf("AppleWebKit") > -1,
                    gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1,
                    mobile: !! e.match(/AppleWebKit.*Mobile.*/),
                    ios: !! e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                    iPhone: e.indexOf("iPhone") > -1,
                    iPad: e.indexOf("iPad") > -1,
                    webApp: e.indexOf("Safari") == -1
                }
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }
    },
    124: function(e, n, t) {
        var o, i;
        t(302), o = t(127);
        var r = t(458);
        i = o = o || {}, "object" != typeof o.
            default &&"function" != typeof o.
            default ||(i = o = o.
            default), "function" == typeof i && (i = i.options), i.render = r.render, i.staticRenderFns = r.staticRenderFns, e.exports = o
    },
    127: function(e, n, t) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.
                default = e, n
        }
        function i(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(15),
            a = i(r),
            u = t(5),
            c = o(u),
            s = t(23),
            l = t(3),
            d = (o(l), t(106)),
            f = (o(d), t(6), t(14));
        n.
            default = {
            data: function() {
                return {
                    channel: this.$root.channel
                }
            },
            methods: (0, a.
                default)({}, (0, f.mapActions)(["getUserInfo"]), (0, f.mapState)(["userInfo"])),
            created: function() {
                if (this.getUserInfo(), (0, s.initSkin)(this.userInfo.skin), c.dataReport(this.channel), sessionStorage.setItem("localCount", 0), location.host.indexOf("uxi.me")) {
                    "https:" == document.location.protocol ? " https://" : " http://"
                }
            }
        }
    },
    171: function(e, n) {
        "use strict";
        !
            function(e, n) {
                var t = e.documentElement,
                    o = "orientationchange" in window ? "orientationchange" : "resize",
                    i = function() {
                        var e = t.clientWidth;
                        if (800 == e) {
                            e = 320;
                            var n = document.createElement("style"),
                                o = "html{width:40%;margin:0 auto;}.roping-ft,.goback-btn,.topnavbar-fixed{width:40%;margin:0 auto;}";
                            n.type = "text/css", n.innerHTML = o, document.getElementsByTagName("head")[0].appendChild(n)
                        }
                        e && (t.style.fontSize = 100 * (e / 375) + "px")
                    };
                e.addEventListener && (n.addEventListener(o, i, !1), e.addEventListener("DOMContentLoaded", i, !1), i())
            }(document, window)
    },
    172: function(e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t(124),
            r = o(i);
        n.
            default = [{
            path: "/",
            component: r.
                default,
            children:
                [{
                    path: "",
                    redirect: "/index"
                }, {
                    path: "/index",
                    name: "index",
                    component: function(e) {
                        return t.e(1, function(n) {
                            var t = [n(412)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "欢乐套牛"
                    }
                }, {
                    path: "/rule",
                    name: "rule",
                    component: function(e) {
                        return t.e(34, function(n) {
                            var t = [n(432)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "玩法介绍"
                    }
                }, {
                    path: "/recharge/:money",
                    name: "recharge",
                    component: function(e) {
                        return t.e(21, function(n) {
                            var t = [n(419)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/rechargeAPP/:money",
                    name: "rechargeAPP",
                    component: function(e) {
                        return t.e(24, function(n) {
                            var t = [n(420)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "APP充值"
                    }
                }, {
                    path: "/recharge_yxjb/:money",
                    name: "recharge_yxjb",
                    component: function(e) {
                        return t.e(13, function(n) {
                            var t = [n(429)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_ttwyx/:money",
                    name: "recharge_ttwyx",
                    component: function(e) {
                        return t.e(14, function(n) {
                            var t = [n(428)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_haiww/:money",
                    name: "recharge_haiww",
                    component: function(e) {
                        return t.e(19, function(n) {
                            var t = [n(423)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_hxw/:money",
                    name: "recharge_hxw",
                    component: function(e) {
                        return t.e(18, function(n) {
                            var t = [n(424)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_g60/:money",
                    name: "recharge_g60",
                    component: function(e) {
                        return t.e(26, function(n) {
                            var t = [n(422)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_dayu/:money",
                    name: "recharge_dayu",
                    component: function(e) {
                        return t.e(20, function(n) {
                            var t = [n(421)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_tiantuan/:money",
                    name: "recharge_tiantuan",
                    component: function(e) {
                        return t.e(15, function(n) {
                            var t = [n(427)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_open_url/:money",
                    name: "recharge_open_url",
                    component: function(e) {
                        return t.e(17, function(n) {
                            var t = [n(425)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/recharge_open_url1/:money",
                    name: "recharge_open_url1",
                    component: function(e) {
                        return t.e(16, function(n) {
                            var t = [n(426)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/paySucc/:order_num",
                    name: "paySucc",
                    component: function(e) {
                        return t.e(42, function(n) {
                            var t = [n(415)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值成功"
                    }
                }, {
                    path: "/recordList/:sim/:tab",
                    name: "recordList",
                    component: function(e) {
                        return t.e(25, function(n) {
                            var t = [n(431)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "游戏记录"
                    }
                }, {
                    path: "/changeList",
                    name: "changeList",
                    component: function(e) {
                        return t.e(9, function(n) {
                            var t = [n(402)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "领奖中心"
                    }
                }, {
                    path: "/changeRecord",
                    name: "changeRecord",
                    component: function(e) {
                        return t.e(32, function(n) {
                            var t = [n(403)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "抽奖记录"
                    }
                }, {
                    path: "/recordInfo/:sim/:type/:data",
                    name: "recordInfo",
                    component: function(e) {
                        return t.e(23, function(n) {
                            var t = [n(430)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "记录详情"
                    }
                }, {
                    path: "/protocol",
                    name: "protocol",
                    component: function(e) {
                        return t.e(30, function(n) {
                            var t = [n(417)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "服务协议"
                    }
                }, {
                    path: "/problem",
                    name: "problem",
                    component: function(e) {
                        return t.e(31, function(n) {
                            var t = [n(416)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "遇到问题"
                    }
                }, {
                    path: "/userCenter",
                    name: "userCenter",
                    component: function(e) {
                        return t.e(5, function(n) {
                            var t = [n(438)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "个人中心"
                    }
                }, {
                    path: "/userInfo",
                    name: "userInfo",
                    component: function(e) {
                        return t.e(28, function(n) {
                            var t = [n(439)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "我的账号"
                    }
                }, {
                    path: "/modiNick",
                    name: "modiNick",
                    component: function(e) {
                        return t.e(35, function(n) {
                            var t = [n(413)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "修改昵称"
                    }
                }, {
                    path: "/bindPhone",
                    name: "bindPhone",
                    component: function(e) {
                        return t.e(39, function(n) {
                            var t = [n(400)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "绑定手机"
                    }
                }, {
                    path: "/friends",
                    name: "friends",
                    component: function(e) {
                        return t.e(41, function(n) {
                            var t = [n(410)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "我的好友"
                    }
                }, {
                    path: "/welfareCenter",
                    name: "welfareCenter",
                    component: function(e) {
                        return t.e(12, function(n) {
                            var t = [n(440)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "福利"
                    }
                }, {
                    path: "/contact",
                    name: "contact",
                    component: function(e) {
                        return t.e(37, function(n) {
                            var t = [n(405)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "联系我们"
                    }
                }, {
                    path: "/transferPage_tiantuan",
                    name: "transferPage_tiantuan",
                    component: function(e) {
                        return t.e(33, function(n) {
                            var t = [n(437)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "天团游戏"
                    }
                }, {
                    path: "/change/:type/:data",
                    name: "change",
                    component: function(e) {
                        return t.e(38, function(n) {
                            var t = [n(401)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "兑换"
                    }
                }, {
                    path: "/shiwu_game",
                    name: "shiwu_game",
                    component: function(e) {
                        return t.e(3, function(n) {
                            var t = [n(436)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "赢实物套牛"
                    }
                }, {
                    path: "/shiwu",
                    name: "shiwu",
                    component: function(e) {
                        return t.e(29, function(n) {
                            var t = [n(435)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "充值"
                    }
                }, {
                    path: "/doll",
                    name: "doll",
                    component: function(e) {
                        return t.e(0, function(n) {
                            var t = [n(125)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "夹娃娃"
                    }
                }, {
                    path: "/doll_test",
                    name: "doll_test",
                    component: function(e) {
                        return t.e(0, function(n) {
                            var t = [n(125)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "夹娃娃"
                    }
                }, {
                    path: "/doll_recordList",
                    name: "doll_recordList",
                    component: function(e) {
                        return t.e(27, function(n) {
                            var t = [n(407)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "娃娃记录"
                    }
                }, {
                    path: "/doll_guide",
                    name: "doll_guide",
                    component: function(e) {
                        return t.e(8, function(n) {
                            var t = [n(406)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "欢迎来到夹娃娃"
                    }
                }, {
                    path: "/gameCenter",
                    name: "gameCenter",
                    component: function(e) {
                        return t.e(2, function(n) {
                            var t = [n(411)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "游戏大厅"
                    }
                }, {
                    path: "rankList",
                    name: "rankList",
                    component: function(e) {
                        return t.e(4, function(n) {
                            var t = [n(418)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "排行榜"
                    }
                }, {
                    path: "exchangeList",
                    name: "exchangeList",
                    component: function(e) {
                        return t.e(36, function(n) {
                            var t = [n(408)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "获奖记录"
                    }
                }, {
                    path: "myNews",
                    name: "myNews",
                    component: function(e) {
                        return t.e(10, function(n) {
                            var t = [n(414)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "我的消息"
                    }
                }, {
                    path: "commonQuestion",
                    name: "commonQuestion",
                    component: function(e) {
                        return t.e(11, function(n) {
                            var t = [n(404)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "我的消息"
                    }
                }, {
                    path: "shareCenter",
                    name: "shareCenter",
                    component: function(e) {
                        return t.e(6, function(n) {
                            var t = [n(434)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "分享圈"
                    }
                }, {
                    path: "shareBox",
                    name: "shareBox",
                    component: function(e) {
                        return t.e(7, function(n) {
                            var t = [n(433)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "发贴"
                    }
                }, {
                    path: "fish",
                    name: "fish",
                    component: function(e) {
                        return t.e(22, function(n) {
                            var t = [n(409)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "捕鱼达人"
                    }
                }, {
                    path: "500",
                    name: "500",
                    component: function(e) {
                        return t.e(40, function(n) {
                            var t = [n(399)];
                            e.apply(null, t)
                        }.bind(this))
                    },
                    meta: {
                        pageTitle: "500"
                    }
                }]
        }]
    },
    173: function(e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t(41),
            r = o(i),
            a = t(40),
            u = o(a);
        t(5), n.
            default = {
            getUserInfo: function(e) {
                var n = this,
                    t = e.commit,
                    o = e.state;
                return (0, u.
                    default)(r.
                    default.mark(function e() {
                        return r.
                            default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t("INIT_USERINFO");
                                    case 2:
                                        o.islogin && (t("INIT_BASICINFO"), t("INIT_GAMEINFO"));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, n)
                    }))()
            }
        }
    },
    174: function(e, n) {
        "use strict";

        function t(e) {
            var n = ["10026", "60026", "10027", "60027", "10028", "60028", "10029", "60029", "10030", "60030", "10031", "60031", "10037", "60037", "10033", "60033", "10036", "60036", "10038", "60038", "10039", "60039", "10040", "60040", "10042", "60042"],
                t = !0;
            if (e) for (var o in n) e.indexOf(n[o]) > -1 && (t = !1);
            return t
        }
        function o(e) {
            var n = ["10045"],
                t = !0;
            if (e) for (var o in n) e.indexOf(n[o]) > -1 && (t = !1);
            return t
        }
        function i(e) {
            var n = ["10041", "60041", "10025", "60025"],
                t = !1;
            if (e) for (var o in n) e.indexOf(n[o]) > -1 && (t = !0);
            return t
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.
            default = {
            showShiwu: function(e, n) {
                return n.showDoll
            },
            showDoll: function(e) {
                return t(e.channel)
            },
            showShareBtn: function(e) {
                return o(e.channel)
            },
            showExchange: function(e) {
                return i(e.channel)
            }
        }
    },
    175: function(e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        function i(e) {
            var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                t = window.location.search.substr(1).match(n);
            return null != t ? t[2] : null
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(59),
            a = o(r),
            u = t(14),
            c = o(u),
            s = t(176),
            l = o(s),
            d = t(173),
            f = o(d),
            p = t(174),
            m = o(p);
        a.
            default.use(c.
                default);
        var h = i("channel") || "",
            g = "",
            v = "";
        h.indexOf("A") > -1 ? (h = h.split("A"), g = h[0], v = h[1]):
            g = h;
        var y = {
            channel: g,
            inviteCode: v,
            is_first: null,
            sim: null,
            userInfo: null,
            gameInfo: null,
            basicInfo: null,
            islogin: null
        };
        n.
            default = new c.
            default.Store({
                state: y,
                getters: m.
                    default,
                actions:
                    f.
                        default,
                mutations:
                    l.
                        default
            })
    },
    176: function(e, n, t) {
        "use strict";

        function o(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.
                default = e, n
        }
        function i(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, a = t(12),
            u = i(a),
            c = t(3),
            s = o(c),
            l = t(5),
            d = o(l),
            f = "INIT_USERINFO",
            p = "INIT_GAMEINFO",
            m = "INIT_BASICINFO",
            h = "RECORD_USERINFO",
            g = "OUT_LOGIN",
            v = "RECORD_BASICINFO",
            y = "RECORD_GAMEINFO",
            _ = "SET_CURRENTGAME";
        n.
            default = (r = {}, (0, u.
            default)(r, f, function(e) {
            var n = s.get("userInfo");
            n && (e.userInfo = n, e.islogin = !0, e.is_first = n.is_first)
        }), (0, u.
            default)(r, p, function(e) {
            if (e.islogin) {
                var n = s.get("gameInfo");
                n ? e.gameInfo = n : d.postNoParams("myInfo", function(n) {
                    n = JSON.parse(n), s.set("gameInfo", n.data), e.gameInfo = n.data
                })
            }
        }), (0, u.
            default)(r, m, function(e) {
            if (e.islogin) {
                var n = s.get("userInfo_1");
                n ? (e.basicInfo = n, e.sim = n.sim) : d.postNoParams("userInfo", function(n) {
                    n = JSON.parse(n), s.set("userInfo_1", n.data), e.basicInfo = n.data
                })
            }
        }), (0, u.
            default)(r, h, function(e, n) {
            s.set("userInfo", n), e.userInfo = n, e.islogin = !0, e.is_first = n.is_first
        }), (0, u.
            default)(r, v, function(e, n) {
            s.set("userInfo_1", n), e.basicInfo = n
        }), (0, u.
            default)(r, y, function(e, n) {
            s.set("gameInfo", n), e.gameInfo = n, e.sim = n.sim
        }), (0, u.
            default)(r, g, function(e) {
            e.userInfo = null, s.remove("userInfo"), s.remove("wechatToken"), s.set("tnway", "normal"), e.islogin = !1
        }), (0, u.
            default)(r, _, function(e, n) {
            e.currentGame = n, sessionStorage.setItem("fromGame", n)
        }), r)
    },
    177: function(e, n) {
        "use strict";

        function t(e) {
            return o(e)
        }
        function o(e) {
            return r(i(a(e)))
        }
        function i(e) {
            return c(s(u(e), 8 * e.length))
        }
        function r(e) {
            try {} catch (e) {
                v = 0
            }
            for (var n, t = v ? "0123456789ABCDEF" : "0123456789abcdef", o = "", i = 0; i < e.length; i++) n = e.charCodeAt(i), o += t.charAt(n >>> 4 & 15) + t.charAt(15 & n);
            return o
        }
        function a(e) {
            for (var n, t, o = "", i = -1; ++i < e.length;) n = e.charCodeAt(i), t = i + 1 < e.length ? e.charCodeAt(i + 1) : 0, 55296 <= n && n <= 56319 && 56320 <= t && t <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & t), i++), n <= 127 ? o += String.fromCharCode(n) : n <= 2047 ? o += String.fromCharCode(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? o += String.fromCharCode(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (o += String.fromCharCode(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));
            return o
        }
        function u(e) {
            for (var n = Array(e.length >> 2), t = 0; t < n.length; t++) n[t] = 0;
            for (var t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }
        function c(e) {
            for (var n = "", t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }
        function s(e, n) {
            e[n >> 5] |= 128 << n % 32, e[(n + 64 >>> 9 << 4) + 14] = n;
            for (var t = 1732584193, o = -271733879, i = -1732584194, r = 271733878, a = 0; a < e.length; a += 16) {
                var u = t,
                    c = o,
                    s = i,
                    l = r;
                t = d(t, o, i, r, e[a + 0], 7, -680876936), r = d(r, t, o, i, e[a + 1], 12, -389564586), i = d(i, r, t, o, e[a + 2], 17, 606105819), o = d(o, i, r, t, e[a + 3], 22, -1044525330), t = d(t, o, i, r, e[a + 4], 7, -176418897), r = d(r, t, o, i, e[a + 5], 12, 1200080426), i = d(i, r, t, o, e[a + 6], 17, -1473231341), o = d(o, i, r, t, e[a + 7], 22, -45705983), t = d(t, o, i, r, e[a + 8], 7, 1770035416), r = d(r, t, o, i, e[a + 9], 12, -1958414417), i = d(i, r, t, o, e[a + 10], 17, -42063), o = d(o, i, r, t, e[a + 11], 22, -1990404162), t = d(t, o, i, r, e[a + 12], 7, 1804603682), r = d(r, t, o, i, e[a + 13], 12, -40341101), i = d(i, r, t, o, e[a + 14], 17, -1502002290), o = d(o, i, r, t, e[a + 15], 22, 1236535329), t = f(t, o, i, r, e[a + 1], 5, -165796510), r = f(r, t, o, i, e[a + 6], 9, -1069501632), i = f(i, r, t, o, e[a + 11], 14, 643717713), o = f(o, i, r, t, e[a + 0], 20, -373897302), t = f(t, o, i, r, e[a + 5], 5, -701558691), r = f(r, t, o, i, e[a + 10], 9, 38016083), i = f(i, r, t, o, e[a + 15], 14, -660478335), o = f(o, i, r, t, e[a + 4], 20, -405537848), t = f(t, o, i, r, e[a + 9], 5, 568446438), r = f(r, t, o, i, e[a + 14], 9, -1019803690), i = f(i, r, t, o, e[a + 3], 14, -187363961), o = f(o, i, r, t, e[a + 8], 20, 1163531501), t = f(t, o, i, r, e[a + 13], 5, -1444681467), r = f(r, t, o, i, e[a + 2], 9, -51403784), i = f(i, r, t, o, e[a + 7], 14, 1735328473), o = f(o, i, r, t, e[a + 12], 20, -1926607734), t = p(t, o, i, r, e[a + 5], 4, -378558), r = p(r, t, o, i, e[a + 8], 11, -2022574463), i = p(i, r, t, o, e[a + 11], 16, 1839030562), o = p(o, i, r, t, e[a + 14], 23, -35309556), t = p(t, o, i, r, e[a + 1], 4, -1530992060), r = p(r, t, o, i, e[a + 4], 11, 1272893353), i = p(i, r, t, o, e[a + 7], 16, -155497632), o = p(o, i, r, t, e[a + 10], 23, -1094730640), t = p(t, o, i, r, e[a + 13], 4, 681279174), r = p(r, t, o, i, e[a + 0], 11, -358537222), i = p(i, r, t, o, e[a + 3], 16, -722521979), o = p(o, i, r, t, e[a + 6], 23, 76029189), t = p(t, o, i, r, e[a + 9], 4, -640364487), r = p(r, t, o, i, e[a + 12], 11, -421815835), i = p(i, r, t, o, e[a + 15], 16, 530742520), o = p(o, i, r, t, e[a + 2], 23, -995338651), t = m(t, o, i, r, e[a + 0], 6, -198630844), r = m(r, t, o, i, e[a + 7], 10, 1126891415), i = m(i, r, t, o, e[a + 14], 15, -1416354905), o = m(o, i, r, t, e[a + 5], 21, -57434055), t = m(t, o, i, r, e[a + 12], 6, 1700485571), r = m(r, t, o, i, e[a + 3], 10, -1894986606), i = m(i, r, t, o, e[a + 10], 15, -1051523), o = m(o, i, r, t, e[a + 1], 21, -2054922799), t = m(t, o, i, r, e[a + 8], 6, 1873313359), r = m(r, t, o, i, e[a + 15], 10, -30611744), i = m(i, r, t, o, e[a + 6], 15, -1560198380), o = m(o, i, r, t, e[a + 13], 21, 1309151649), t = m(t, o, i, r, e[a + 4], 6, -145523070), r = m(r, t, o, i, e[a + 11], 10, -1120210379), i = m(i, r, t, o, e[a + 2], 15, 718787259), o = m(o, i, r, t, e[a + 9], 21, -343485551), t = h(t, u), o = h(o, c), i = h(i, s), r = h(r, l)
            }
            return Array(t, o, i, r)
        }
        function l(e, n, t, o, i, r) {
            return h(g(h(h(n, e), h(o, r)), i), t)
        }
        function d(e, n, t, o, i, r, a) {
            return l(n & t | ~n & o, e, n, i, r, a)
        }
        function f(e, n, t, o, i, r, a) {
            return l(n & o | t & ~o, e, n, i, r, a)
        }
        function p(e, n, t, o, i, r, a) {
            return l(n ^ t ^ o, e, n, i, r, a)
        }
        function m(e, n, t, o, i, r, a) {
            return l(t ^ (n | ~o), e, n, i, r, a)
        }
        function h(e, n) {
            var t = (65535 & e) + (65535 & n),
                o = (e >> 16) + (n >> 16) + (t >> 16);
            return o << 16 | 65535 & t
        }
        function g(e, n) {
            return e << n | e >>> 32 - n
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.md5 = t;
        var v = 0
    },
    279: function(e, n) {},
    302: function(e, n) {},
    458: function(e, n) {
        e.exports = {
            render: function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("transition", {
                    attrs: {
                        name: "router-fade",
                        mode: "out-in"
                    }
                }, [t("router-view")], 1)
            },
            staticRenderFns: []
        }
    },
    487: function(e, n) {}
});