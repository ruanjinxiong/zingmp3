function onBlurBind(a, b) {
    $(document).click(function(c) {
        var d = $(a).offset();
        (c.pageY < d.top || c.pageY > d.top + $(a).height() || c.pageX < d.left || c.pageX > d.left + $(a).width()) && b(c)
    })
}

function isInputNumber(a) {
    return 32 !== a && (a < 47 || a < 58 || a > 95 && a < 106)
}

function dynamic() {
    var c, d, a = $(window).scrollTop(),
        b = a + $(window).height();
    $(".fn-dynamic").each(function() {
        if (c = $(this).offset().top, d = c + $(this).height(), d + 200 < a || c - 200 <= b) {
            var e = window[$(this).data("fn")];
            "undefined" != typeof e && e.dynamic.apply(e, [this])
        }
    })
}

function loginCallback(a, b) {
    zmp3Login.process(a, b)
}

function fA(a, b, c, d) {
    var e = $(a);
    if (e.length) {
        for (var f = 0; f < e.length; f++) {
            var g = $(e[f]),
                h = $(g.data("thumb")),
                i = $(g.data("link")),
                j = $(g.data("dname")),
                k = "http://me.zing.vn/u/";
            h.length && h.each(function() {
                "IMG" == this.tagName && $(this).attr("src", b).attr("alt", d)
            }), i.length && i.each(function() {
                "A" == this.tagName && $(this).attr("href", k + c).attr("title", d)
            }), j.length && j.each(function() {
                $(this).html(d), "A" == this.tagName && $(this).attr("href", k + c).attr("title", d)
            })
        }
        g.remove()
    }
}! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function c(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function d(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function e(a) {
        return c(h.json ? JSON.stringify(a) : String(a))
    }

    function f(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(b, " ")), h.json ? JSON.parse(a) : a
        } catch (a) {}
    }

    function g(b, c) {
        var d = h.raw ? b : f(b);
        return a.isFunction(c) ? c(d) : d
    }
    var b = /\+/g,
        h = a.cookie = function(b, f, i) {
            if (void 0 !== f && !a.isFunction(f)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = b ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
                var p = m[n].split("="),
                    q = d(p.shift()),
                    r = p.join("=");
                if (b && b === q) {
                    l = g(r, f);
                    break
                }
                b || void 0 === (r = g(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
}), ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10)
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
}),
function(a, b, c) {
    ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], a) : a(jQuery)
    }(function(c) {
        var d = "mCustomScrollbar",
            e = "mCS",
            f = ".mCustomScrollbar",
            g = {
                setWidth: !1,
                setHeight: !1,
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                autoHideScrollbar: !1,
                autoExpandScrollbar: !1,
                alwaysShowScrollbar: 0,
                snapAmount: null,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1,
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    enable: !1,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                advanced: {
                    autoExpandHorizontalScroll: !1,
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: !0,
                    updateOnSelectorChange: !1
                },
                theme: "light",
                callbacks: {
                    onScrollStart: !1,
                    onScroll: !1,
                    onTotalScroll: !1,
                    onTotalScrollBack: !1,
                    whileScrolling: !1,
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0,
                    onOverflowY: !1,
                    onOverflowX: !1,
                    onOverflowYNone: !1,
                    onOverflowXNone: !1
                },
                live: !1,
                liveSelector: null
            },
            h = 0,
            i = {},
            j = function(a) {
                i[a] && (clearTimeout(i[a]), n._delete.call(null, i[a]))
            },
            k = a.attachEvent && !a.addEventListener ? 1 : 0,
            l = !1,
            m = {
                init: function(a) {
                    var a = c.extend(!0, {}, g, a),
                        b = n._selector.call(this);
                    if (a.live) {
                        var d = a.liveSelector || this.selector || f,
                            k = c(d);
                        if ("off" === a.live) return void j(d);
                        i[d] = setTimeout(function() {
                            k.mCustomScrollbar(a), "once" === a.live && k.length && j(d)
                        }, 500)
                    } else j(d);
                    return a.setWidth = a.set_width ? a.set_width : a.setWidth, a.setHeight = a.set_height ? a.set_height : a.setHeight, a.axis = a.horizontalScroll ? "x" : n._findAxis.call(null, a.axis), a.scrollInertia = a.scrollInertia > 0 && a.scrollInertia < 17 ? 17 : a.scrollInertia, "object" != typeof a.mouseWheel && 1 == a.mouseWheel && (a.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), a.mouseWheel.scrollAmount = a.mouseWheelPixels ? a.mouseWheelPixels : a.mouseWheel.scrollAmount, a.mouseWheel.normalizeDelta = a.advanced.normalizeMouseWheelDelta ? a.advanced.normalizeMouseWheelDelta : a.mouseWheel.normalizeDelta, a.scrollButtons.scrollType = n._findScrollButtonsType.call(null, a.scrollButtons.scrollType), n._theme.call(null, a), c(b).each(function() {
                        var b = c(this);
                        if (!b.data(e)) {
                            b.data(e, {
                                idx: ++h,
                                opt: a,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: b.css("direction"),
                                cbOffsets: null,
                                trigger: null
                            });
                            var d = b.data(e).opt,
                                f = b.data("mcs-axis"),
                                g = b.data("mcs-scrollbar-position"),
                                i = b.data("mcs-theme");
                            f && (d.axis = f), g && (d.scrollbarPosition = g), i && (d.theme = i, n._theme.call(null, d)), n._pluginMarkup.call(this), m.update.call(null, b)
                        }
                    })
                },
                update: function(a) {
                    var b = a || n._selector.call(this);
                    return c(b).each(function() {
                        var a = c(this);
                        if (a.data(e)) {
                            var b = a.data(e),
                                d = b.opt,
                                f = c("#mCSB_" + b.idx + "_container"),
                                g = [c("#mCSB_" + b.idx + "_dragger_vertical"), c("#mCSB_" + b.idx + "_dragger_horizontal")];
                            if (!f.length) return;
                            b.tweenRunning && n._stop.call(null, a), a.hasClass("mCS_disabled") && a.removeClass("mCS_disabled"), a.hasClass("mCS_destroyed") && a.removeClass("mCS_destroyed"), n._maxHeight.call(this), n._expandContentHorizontally.call(this), "y" === d.axis || d.advanced.autoExpandHorizontalScroll || f.css("width", n._contentWidth(f.children())), b.overflowed = n._overflowed.call(this), n._scrollbarVisibility.call(this), d.autoDraggerLength && n._setDraggerLength.call(this), n._scrollRatio.call(this), n._bindEvents.call(this);
                            var h = [Math.abs(f[0].offsetTop), Math.abs(f[0].offsetLeft)];
                            "x" !== d.axis && (b.overflowed[0] ? g[0].height() > g[0].parent().height() ? n._resetContentPosition.call(this) : (n._scrollTo.call(this, a, h[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), b.contentReset.y = null) : (n._resetContentPosition.call(this), "y" === d.axis ? n._unbindEvents.call(this) : "yx" === d.axis && b.overflowed[1] && n._scrollTo.call(this, a, h[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== d.axis && (b.overflowed[1] ? g[1].width() > g[1].parent().width() ? n._resetContentPosition.call(this) : (n._scrollTo.call(this, a, h[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), b.contentReset.x = null) : (n._resetContentPosition.call(this), "x" === d.axis ? n._unbindEvents.call(this) : "yx" === d.axis && b.overflowed[0] && n._scrollTo.call(this, a, h[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), n._autoUpdate.call(this)
                        }
                    })
                },
                scrollTo: function(a, b) {
                    if ("undefined" != typeof a && null != a) {
                        var d = n._selector.call(this);
                        return c(d).each(function() {
                            var d = c(this);
                            if (d.data(e)) {
                                var f = d.data(e),
                                    g = f.opt,
                                    h = {
                                        trigger: "external",
                                        scrollInertia: g.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    i = c.extend(!0, {}, h, b),
                                    j = n._arr.call(this, a),
                                    k = i.scrollInertia > 0 && i.scrollInertia < 17 ? 17 : i.scrollInertia;
                                j[0] = n._to.call(this, j[0], "y"), j[1] = n._to.call(this, j[1], "x"), i.moveDragger && (j[0] *= f.scrollRatio.y, j[1] *= f.scrollRatio.x), i.dur = k, setTimeout(function() {
                                    null !== j[0] && "undefined" != typeof j[0] && "x" !== g.axis && f.overflowed[0] && (i.dir = "y", i.overwrite = "all", n._scrollTo.call(this, d, j[0].toString(), i)), null !== j[1] && "undefined" != typeof j[1] && "y" !== g.axis && f.overflowed[1] && (i.dir = "x", i.overwrite = "none", n._scrollTo.call(this, d, j[1].toString(), i))
                                }, i.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var a = n._selector.call(this);
                    return c(a).each(function() {
                        var a = c(this);
                        a.data(e) && n._stop.call(null, a)
                    })
                },
                disable: function(a) {
                    var b = n._selector.call(this);
                    return c(b).each(function() {
                        var b = c(this);
                        if (b.data(e)) {
                            var d = b.data(e);
                            d.opt;
                            n._autoUpdate.call(this, "remove"), n._unbindEvents.call(this), a && n._resetContentPosition.call(this), n._scrollbarVisibility.call(this, !0), b.addClass("mCS_disabled")
                        }
                    })
                },
                destroy: function() {
                    var a = n._selector.call(this);
                    return c(a).each(function() {
                        var b = c(this);
                        if (b.data(e)) {
                            var f = b.data(e),
                                g = f.opt,
                                h = c("#mCSB_" + f.idx),
                                i = c("#mCSB_" + f.idx + "_container"),
                                k = c(".mCSB_" + f.idx + "_scrollbar");
                            g.live && j(a), n._autoUpdate.call(this, "remove"), n._unbindEvents.call(this), n._resetContentPosition.call(this), b.removeData(e), n._delete.call(null, this.mcs), k.remove(), h.replaceWith(i.contents()), b.removeClass(d + " _" + e + "_" + f.idx + " mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
                        }
                    })
                }
            },
            n = {
                _selector: function() {
                    return "object" != typeof c(this) || c(this).length < 1 ? f : this
                },
                _theme: function(a) {
                    var b = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        d = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        e = ["minimal", "minimal-dark"],
                        f = ["minimal", "minimal-dark"],
                        g = ["minimal", "minimal-dark"];
                    a.autoDraggerLength = !(c.inArray(a.theme, b) > -1) && a.autoDraggerLength, a.autoExpandScrollbar = !(c.inArray(a.theme, d) > -1) && a.autoExpandScrollbar, a.scrollButtons.enable = !(c.inArray(a.theme, e) > -1) && a.scrollButtons.enable, a.autoHideScrollbar = c.inArray(a.theme, f) > -1 || a.autoHideScrollbar, a.scrollbarPosition = c.inArray(a.theme, g) > -1 ? "outside" : a.scrollbarPosition
                },
                _findAxis: function(a) {
                    return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
                },
                _findScrollButtonsType: function(a) {
                    return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
                },
                _pluginMarkup: function() {
                    var a = c(this),
                        b = a.data(e),
                        f = b.opt,
                        g = f.autoExpandScrollbar ? " mCSB_scrollTools_onDrag_expand" : "",
                        h = ["<div id='mCSB_" + b.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + b.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_vertical" + g + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + b.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + b.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + b.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_horizontal" + g + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + b.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        i = "yx" === f.axis ? "mCSB_vertical_horizontal" : "x" === f.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        j = "yx" === f.axis ? h[0] + h[1] : "x" === f.axis ? h[1] : h[0],
                        k = "yx" === f.axis ? "<div id='mCSB_" + b.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        l = f.autoHideScrollbar ? " mCS-autoHide" : "",
                        m = "x" !== f.axis && "rtl" === b.langDir ? " mCS-dir-rtl" : "";
                    f.setWidth && a.css("width", f.setWidth), f.setHeight && a.css("height", f.setHeight), f.setLeft = "y" !== f.axis && "rtl" === b.langDir ? "989999px" : f.setLeft, a.addClass(d + " _" + e + "_" + b.idx + l + m).wrapInner("<div id='mCSB_" + b.idx + "' class='mCustomScrollBox mCS-" + f.theme + " " + i + "'><div id='mCSB_" + b.idx + "_container' class='mCSB_container' style='position:relative; top:" + f.setTop + "; left:" + f.setLeft + ";' dir=" + b.langDir + " /></div>");
                    var o = c("#mCSB_" + b.idx),
                        p = c("#mCSB_" + b.idx + "_container");
                    "y" === f.axis || f.advanced.autoExpandHorizontalScroll || p.css("width", n._contentWidth(p.children())), "outside" === f.scrollbarPosition ? ("static" === a.css("position") && a.css("position", "relative"), a.css("overflow", "visible"), o.addClass("mCSB_outside").after(j)) : (o.addClass("mCSB_inside").append(j), p.wrap(k)), n._scrollButtons.call(this);
                    var q = [c("#mCSB_" + b.idx + "_dragger_vertical"), c("#mCSB_" + b.idx + "_dragger_horizontal")];
                    q[0].css("min-height", q[0].height()), q[1].css("min-width", q[1].width())
                },
                _contentWidth: function(a) {
                    return Math.max.apply(Math, a.map(function() {
                        return c(this).outerWidth(!0)
                    }).get())
                },
                _expandContentHorizontally: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = b.opt,
                        f = c("#mCSB_" + b.idx + "_container");
                    d.advanced.autoExpandHorizontalScroll && "y" !== d.axis && f.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(f[0].getBoundingClientRect().right + .4) - Math.floor(f[0].getBoundingClientRect().left),
                        position: "relative"
                    }).unwrap()
                },
                _scrollButtons: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = b.opt,
                        f = c(".mCSB_" + b.idx + "_scrollbar:first"),
                        g = ["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],
                        h = ["x" === d.axis ? g[2] : g[0], "x" === d.axis ? g[3] : g[1], g[2], g[3]];
                    d.scrollButtons.enable && f.prepend(h[0]).append(h[1]).next(".mCSB_scrollTools").prepend(h[2]).append(h[3])
                },
                _maxHeight: function() {
                    var a = c(this),
                        b = a.data(e),
                        f = (b.opt, c("#mCSB_" + b.idx)),
                        g = a.css("max-height"),
                        h = g.indexOf("%") !== -1,
                        i = a.css("box-sizing");
                    if ("none" !== g) {
                        var j = h ? a.parent().height() * parseInt(g) / 100 : parseInt(g);
                        "border-box" === i && (j -= a.innerHeight() - a.height() + (a.outerHeight() - a.innerHeight())), f.css("max-height", Math.round(j))
                    }
                },
                _setDraggerLength: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = c("#mCSB_" + b.idx),
                        f = c("#mCSB_" + b.idx + "_container"),
                        g = [c("#mCSB_" + b.idx + "_dragger_vertical"), c("#mCSB_" + b.idx + "_dragger_horizontal")],
                        h = [d.height() / f.outerHeight(!1), d.width() / f.outerWidth(!1)],
                        i = [parseInt(g[0].css("min-height")), Math.round(h[0] * g[0].parent().height()), parseInt(g[1].css("min-width")), Math.round(h[1] * g[1].parent().width())],
                        j = k && i[1] < i[0] ? i[0] : i[1],
                        l = k && i[3] < i[2] ? i[2] : i[3];
                    g[0].css({
                        height: j,
                        "max-height": g[0].parent().height() - 10
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": i[0] + "px"
                    }), g[1].css({
                        width: l,
                        "max-width": g[1].parent().width() - 10
                    })
                },
                _scrollRatio: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = c("#mCSB_" + b.idx),
                        f = c("#mCSB_" + b.idx + "_container"),
                        g = [c("#mCSB_" + b.idx + "_dragger_vertical"), c("#mCSB_" + b.idx + "_dragger_horizontal")],
                        h = [f.outerHeight(!1) - d.height(), f.outerWidth(!1) - d.width()],
                        i = [h[0] / (g[0].parent().height() - g[0].height()), h[1] / (g[1].parent().width() - g[1].width())];
                    b.scrollRatio = {
                        y: i[0],
                        x: i[1]
                    }
                },
                _onDragClasses: function(a, b, c) {
                    var d = c ? "mCSB_dragger_onDrag_expanded" : "",
                        e = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag"],
                        f = a.closest(".mCSB_scrollTools");
                    "active" === b ? (a.toggleClass(e[0] + " " + d), f.toggleClass(e[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(e[0]), f.removeClass(e[1])) : (a.addClass(e[0]), f.addClass(e[1])))
                },
                _overflowed: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = c("#mCSB_" + b.idx),
                        f = c("#mCSB_" + b.idx + "_container"),
                        g = null == b.overflowed ? f.height() : f.outerHeight(!1),
                        h = null == b.overflowed ? f.width() : f.outerWidth(!1);
                    return [g > d.height(), h > d.width()]
                },
                _resetContentPosition: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = b.opt,
                        f = c("#mCSB_" + b.idx),
                        g = c("#mCSB_" + b.idx + "_container"),
                        h = [c("#mCSB_" + b.idx + "_dragger_vertical"), c("#mCSB_" + b.idx + "_dragger_horizontal")];
                    if (n._stop(a), ("x" !== d.axis && !b.overflowed[0] || "y" === d.axis && b.overflowed[0]) && (h[0].add(g).css("top", 0), n._scrollTo(a, "_resetY")), "y" !== d.axis && !b.overflowed[1] || "x" === d.axis && b.overflowed[1]) {
                        var i = dx = 0;
                        "rtl" === b.langDir && (i = f.width() - g.outerWidth(!1), dx = Math.abs(i / b.scrollRatio.x)), g.css("left", i), h[1].css("left", dx), n._scrollTo(a, "_resetX")
                    }
                },
                _bindEvents: function() {
                    function f() {
                        g = setTimeout(function() {
                            c.event.special.mousewheel ? (clearTimeout(g), n._mousewheel.call(a[0])) : f()
                        }, 1e3)
                    }
                    var a = c(this),
                        b = a.data(e),
                        d = b.opt;
                    if (!b.bindEvents) {
                        if (n._draggable.call(this), d.contentTouchScroll && n._contentDraggable.call(this), d.mouseWheel.enable) {
                            var g;
                            f()
                        }
                        n._draggerRail.call(this), n._wrapperScroll.call(this), d.advanced.autoScrollOnFocus && n._focus.call(this), d.scrollButtons.enable && n._buttons.call(this), d.keyboard.enable && n._keyboard.call(this), b.bindEvents = !0
                    }
                },
                _unbindEvents: function() {
                    var a = c(this),
                        d = a.data(e),
                        f = e + "_" + d.idx,
                        g = ".mCSB_" + d.idx + "_scrollbar",
                        h = c("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + g + " .mCSB_draggerContainer,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + g + ">a"),
                        i = c("#mCSB_" + d.idx + "_container");
                    d.bindEvents && (c(b).unbind("." + f), h.each(function() {
                        c(this).unbind("." + f)
                    }), clearTimeout(a[0]._focusTimeout), n._delete.call(null, a[0]._focusTimeout), clearTimeout(d.sequential.step), n._delete.call(null, d.sequential.step), clearTimeout(i[0].onCompleteTimeout), n._delete.call(null, i[0].onCompleteTimeout), d.bindEvents = !1)
                },
                _scrollbarVisibility: function(a) {
                    var b = c(this),
                        d = b.data(e),
                        f = d.opt,
                        g = c("#mCSB_" + d.idx + "_container_wrapper"),
                        h = g.length ? g : c("#mCSB_" + d.idx + "_container"),
                        i = [c("#mCSB_" + d.idx + "_scrollbar_vertical"), c("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                        j = [i[0].find(".mCSB_dragger"), i[1].find(".mCSB_dragger")];
                    "x" !== f.axis && (d.overflowed[0] && !a ? (i[0].add(j[0]).add(i[0].children("a")).css("display", "block"), h.removeClass("mCS_no_scrollbar_y mCS_y_hidden")) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[0].add(i[0].children("a")).css("display", "none"), h.removeClass("mCS_y_hidden")) : (i[0].css("display", "none"), h.addClass("mCS_y_hidden")), h.addClass("mCS_no_scrollbar_y"))), "y" !== f.axis && (d.overflowed[1] && !a ? (i[1].add(j[1]).add(i[1].children("a")).css("display", "block"), h.removeClass("mCS_no_scrollbar_x mCS_x_hidden")) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[1].add(i[1].children("a")).css("display", "none"), h.removeClass("mCS_x_hidden")) : (i[1].css("display", "none"), h.addClass("mCS_x_hidden")), h.addClass("mCS_no_scrollbar_x"))), d.overflowed[0] || d.overflowed[1] ? b.removeClass("mCS_no_scrollbar") : b.addClass("mCS_no_scrollbar")
                },
                _coordinates: function(a) {
                    var b = a.type;
                    switch (b) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return [a.originalEvent.pageY, a.originalEvent.pageX];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                            return [c.pageY, c.pageX];
                        default:
                            return [a.pageY, a.pageX]
                    }
                },
                _draggable: function() {
                    function q(a) {
                        var b = i.find("iframe");
                        if (b.length) {
                            var c = a ? "auto" : "none";
                            b.css("pointer-events", c)
                        }
                    }

                    function r(b, c, e, g) {
                        if (i[0].idleTimer = f.scrollInertia < 233 ? 250 : 0, m.attr("id") === h[1]) var j = "x",
                            k = (m[0].offsetLeft - c + g) * d.scrollRatio.x;
                        else var j = "y",
                            k = (m[0].offsetTop - b + e) * d.scrollRatio.y;
                        n._scrollTo(a, k.toString(), {
                            dir: j,
                            drag: !0
                        })
                    }
                    var m, o, p, a = c(this),
                        d = a.data(e),
                        f = d.opt,
                        g = e + "_" + d.idx,
                        h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                        i = c("#mCSB_" + d.idx + "_container"),
                        j = c("#" + h[0] + ",#" + h[1]);
                    j.bind("mousedown." + g + " touchstart." + g + " pointerdown." + g + " MSPointerDown." + g, function(d) {
                        if (d.stopImmediatePropagation(), d.preventDefault(), n._mouseBtnLeft(d)) {
                            l = !0, k && (b.onselectstart = function() {
                                return !1
                            }), q(!1), n._stop(a), m = c(this);
                            var e = m.offset(),
                                g = n._coordinates(d)[0] - e.top,
                                h = n._coordinates(d)[1] - e.left,
                                i = m.height() + e.top,
                                j = m.width() + e.left;
                            g < i && g > 0 && h < j && h > 0 && (o = g, p = h), n._onDragClasses(m, "active", f.autoExpandScrollbar)
                        }
                    }).bind("touchmove." + g, function(a) {
                        a.stopImmediatePropagation(), a.preventDefault();
                        var b = m.offset(),
                            c = n._coordinates(a)[0] - b.top,
                            d = n._coordinates(a)[1] - b.left;
                        r(o, p, c, d)
                    }), c(b).bind("mousemove." + g + " pointermove." + g + " MSPointerMove." + g, function(a) {
                        if (m) {
                            var b = m.offset(),
                                c = n._coordinates(a)[0] - b.top,
                                d = n._coordinates(a)[1] - b.left;
                            if (o === c) return;
                            r(o, p, c, d)
                        }
                    }).add(j).bind("mouseup." + g + " touchend." + g + " pointerup." + g + " MSPointerUp." + g, function(a) {
                        m && (n._onDragClasses(m, "active", f.autoExpandScrollbar), m = null), l = !1, k && (b.onselectstart = null), q(!0)
                    })
                },
                _contentDraggable: function() {
                    function A(a, b) {
                        var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
                        return a > 90 ? b > 4 ? c[0] : c[3] : a > 60 ? b > 3 ? c[3] : c[2] : a > 30 ? b > 8 ? c[1] : b > 6 ? c[0] : b > 4 ? b : c[2] : b > 8 ? b : c[3]
                    }

                    function B(b, c, d, e, f, g) {
                        b && n._scrollTo(a, b.toString(), {
                            dur: c,
                            scrollEasing: d,
                            dir: e,
                            overwrite: f,
                            drag: g
                        })
                    }
                    var j, k, m, o, r, s, t, u, v, w, y, a = c(this),
                        b = a.data(e),
                        d = b.opt,
                        f = e + "_" + b.idx,
                        g = c("#mCSB_" + b.idx),
                        h = c("#mCSB_" + b.idx + "_container"),
                        i = [c("#mCSB_" + b.idx + "_dragger_vertical"), c("#mCSB_" + b.idx + "_dragger_horizontal")],
                        p = [],
                        q = [],
                        x = 0,
                        z = "yx" === d.axis ? "none" : "all";
                    h.bind("touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(a) {
                        if (n._pointerTouch(a) && !l) {
                            var b = h.offset();
                            j = n._coordinates(a)[0] - b.top, k = n._coordinates(a)[1] - b.left
                        }
                    }).bind("touchmove." + f + " pointermove." + f + " MSPointerMove." + f, function(a) {
                        if (n._pointerTouch(a) && !l) {
                            a.stopImmediatePropagation(), s = n._getTime();
                            var c = g.offset(),
                                e = n._coordinates(a)[0] - c.top,
                                f = n._coordinates(a)[1] - c.left,
                                m = "mcsLinearOut";
                            if (p.push(e), q.push(f), b.overflowed[0]) var o = i[0].parent().height() - i[0].height(),
                                r = j - e > 0 && e - j > -(o * b.scrollRatio.y);
                            if (b.overflowed[1]) var t = i[1].parent().width() - i[1].width(),
                                u = k - f > 0 && f - k > -(t * b.scrollRatio.x);
                            (r || u) && a.preventDefault(), w = "yx" === d.axis ? [j - e, k - f] : "x" === d.axis ? [null, k - f] : [j - e, null], h[0].idleTimer = 250, b.overflowed[0] && B(w[0], x, m, "y", "all", !0), b.overflowed[1] && B(w[1], x, m, "x", z, !0)
                        }
                    }), g.bind("touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(b) {
                        if (n._pointerTouch(b) && !l) {
                            b.stopImmediatePropagation(), n._stop(a), r = n._getTime();
                            var c = g.offset();
                            m = n._coordinates(b)[0] - c.top, o = n._coordinates(b)[1] - c.left, p = [], q = []
                        }
                    }).bind("touchend." + f + " pointerup." + f + " MSPointerUp." + f, function(a) {
                        if (n._pointerTouch(a) && !l) {
                            a.stopImmediatePropagation(), t = n._getTime();
                            var c = g.offset(),
                                e = n._coordinates(a)[0] - c.top,
                                f = n._coordinates(a)[1] - c.left;
                            if (!(t - s > 30)) {
                                v = 1e3 / (t - r);
                                var i = "mcsEaseOut",
                                    j = v < 2.5,
                                    k = j ? [p[p.length - 2], q[q.length - 2]] : [0, 0];
                                u = j ? [e - k[0], f - k[1]] : [e - m, f - o];
                                var x = [Math.abs(u[0]), Math.abs(u[1])];
                                v = j ? [Math.abs(u[0] / 4), Math.abs(u[1] / 4)] : [v, v];
                                var C = [Math.abs(h[0].offsetTop) - u[0] * A(x[0] / v[0], v[0]), Math.abs(h[0].offsetLeft) - u[1] * A(x[1] / v[1], v[1])];
                                w = "yx" === d.axis ? [C[0], C[1]] : "x" === d.axis ? [null, C[1]] : [C[0], null], y = [4 * x[0] + d.scrollInertia, 4 * x[1] + d.scrollInertia];
                                var D = parseInt(d.contentTouchScroll) || 0;
                                w[0] = x[0] > D ? w[0] : 0, w[1] = x[1] > D ? w[1] : 0, b.overflowed[0] && B(w[0], y[0], i, "y", z, !1), b.overflowed[1] && B(w[1], y[1], i, "x", z, !1)
                            }
                        }
                    })
                },
                _mousewheel: function() {
                    function l(a) {
                        var b = null;
                        try {
                            var c = a.contentDocument || a.contentWindow.document;
                            b = c.body.innerHTML
                        } catch (a) {}
                        return null !== b
                    }
                    var a = c(this),
                        b = a.data(e);
                    if (b) {
                        var d = b.opt,
                            f = e + "_" + b.idx,
                            g = c("#mCSB_" + b.idx),
                            h = [c("#mCSB_" + b.idx + "_dragger_vertical"), c("#mCSB_" + b.idx + "_dragger_horizontal")],
                            i = c("#mCSB_" + b.idx + "_container").find("iframe"),
                            j = g;
                        i.length && i.each(function() {
                            var a = this;
                            l(a) && (j = j.add(c(a).contents().find("body")))
                        }), j.bind("mousewheel." + f, function(e, f) {
                            if (n._stop(a), !n._disableMousewheel(a, e.target)) {
                                var i = "auto" !== d.mouseWheel.deltaFactor ? parseInt(d.mouseWheel.deltaFactor) : k && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100;
                                if ("x" === d.axis || "x" === d.mouseWheel.axis) var j = "x",
                                    l = [Math.round(i * b.scrollRatio.x), parseInt(d.mouseWheel.scrollAmount)],
                                    m = "auto" !== d.mouseWheel.scrollAmount ? l[1] : l[0] >= g.width() ? .9 * g.width() : l[0],
                                    o = Math.abs(c("#mCSB_" + b.idx + "_container")[0].offsetLeft),
                                    p = h[1][0].offsetLeft,
                                    q = h[1].parent().width() - h[1].width(),
                                    r = e.deltaX || e.deltaY || f;
                                else var j = "y",
                                    l = [Math.round(i * b.scrollRatio.y), parseInt(d.mouseWheel.scrollAmount)],
                                    m = "auto" !== d.mouseWheel.scrollAmount ? l[1] : l[0] >= g.height() ? .9 * g.height() : l[0],
                                    o = Math.abs(c("#mCSB_" + b.idx + "_container")[0].offsetTop),
                                    p = h[0][0].offsetTop,
                                    q = h[0].parent().height() - h[0].height(),
                                    r = e.deltaY || f;
                                "y" === j && !b.overflowed[0] || "x" === j && !b.overflowed[1] || (d.mouseWheel.invert && (r = -r), d.mouseWheel.normalizeDelta && (r = r < 0 ? -1 : 1), (r > 0 && 0 !== p || r < 0 && p !== q || d.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), n._scrollTo(a, (o - r * m).toString(), {
                                    dir: j
                                }))
                            }
                        })
                    }
                },
                _disableMousewheel: function(a, b) {
                    var d = b.nodeName.toLowerCase(),
                        f = a.data(e).opt.mouseWheel.disableOver,
                        g = ["select", "textarea"];
                    return c.inArray(d, f) > -1 && !(c.inArray(d, g) > -1 && !c(b).is(":focus"))
                },
                _draggerRail: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = e + "_" + b.idx,
                        f = c("#mCSB_" + b.idx + "_container"),
                        g = f.parent(),
                        h = c(".mCSB_" + b.idx + "_scrollbar .mCSB_draggerContainer");
                    h.bind("touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function(a) {
                        l = !0
                    }).bind("touchend." + d + " pointerup." + d + " MSPointerUp." + d, function(a) {
                        l = !1
                    }).bind("click." + d, function(d) {
                        if (c(d.target).hasClass("mCSB_draggerContainer") || c(d.target).hasClass("mCSB_draggerRail")) {
                            n._stop(a);
                            var e = c(this),
                                h = e.find(".mCSB_dragger");
                            if (e.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!b.overflowed[1]) return;
                                var i = "x",
                                    j = d.pageX > h.offset().left ? -1 : 1,
                                    k = Math.abs(f[0].offsetLeft) - j * (.9 * g.width())
                            } else {
                                if (!b.overflowed[0]) return;
                                var i = "y",
                                    j = d.pageY > h.offset().top ? -1 : 1,
                                    k = Math.abs(f[0].offsetTop) - j * (.9 * g.height())
                            }
                            n._scrollTo(a, k.toString(), {
                                dir: i,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                _focus: function() {
                    var a = c(this),
                        d = a.data(e),
                        f = d.opt,
                        g = e + "_" + d.idx,
                        h = c("#mCSB_" + d.idx + "_container"),
                        i = h.parent();
                    h.bind("focusin." + g, function(d) {
                        var e = c(b.activeElement),
                            g = h.find(".mCustomScrollBox").length,
                            j = 0;
                        e.is(f.advanced.autoScrollOnFocus) && (n._stop(a), clearTimeout(a[0]._focusTimeout), a[0]._focusTimer = g ? (j + 17) * g : 0, a[0]._focusTimeout = setTimeout(function() {
                            var b = [e.offset().top - h.offset().top, e.offset().left - h.offset().left],
                                c = [h[0].offsetTop, h[0].offsetLeft],
                                d = [c[0] + b[0] >= 0 && c[0] + b[0] < i.height() - e.outerHeight(!1), c[1] + b[1] >= 0 && c[0] + b[1] < i.width() - e.outerWidth(!1)],
                                g = "yx" !== f.axis || d[0] || d[1] ? "all" : "none";
                            "x" === f.axis || d[0] || n._scrollTo(a, b[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: g,
                                dur: j
                            }), "y" === f.axis || d[1] || n._scrollTo(a, b[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: g,
                                dur: j
                            })
                        }, a[0]._focusTimer))
                    })
                },
                _wrapperScroll: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = e + "_" + b.idx,
                        f = c("#mCSB_" + b.idx + "_container").parent();
                    f.bind("scroll." + d, function(a) {
                        f.scrollTop(0).scrollLeft(0)
                    })
                },
                _buttons: function() {
                    var a = c(this),
                        b = a.data(e),
                        d = b.opt,
                        f = b.sequential,
                        g = e + "_" + b.idx,
                        i = (c("#mCSB_" + b.idx + "_container"), ".mCSB_" + b.idx + "_scrollbar"),
                        j = c(i + ">a");
                    j.bind("mousedown." + g + " touchstart." + g + " pointerdown." + g + " MSPointerDown." + g + " mouseup." + g + " touchend." + g + " pointerup." + g + " MSPointerUp." + g + " mouseout." + g + " pointerout." + g + " MSPointerOut." + g + " click." + g, function(e) {
                        function h(b, c) {
                            f.scrollAmount = d.snapAmount || d.scrollButtons.scrollAmount, n._sequentialScroll.call(this, a, b, c)
                        }
                        if (e.preventDefault(), n._mouseBtnLeft(e)) {
                            var g = c(this).attr("class");
                            switch (f.type = d.scrollButtons.scrollType, e.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === f.type) return;
                                    l = !0, b.tweenRunning = !1, h("on", g);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" === f.type) return;
                                    l = !1, f.dir && h("off", g);
                                    break;
                                case "click":
                                    if ("stepped" !== f.type || b.tweenRunning) return;
                                    h("on", g)
                            }
                        }
                    })
                },
                _keyboard: function() {
                    var a = c(this),
                        d = a.data(e),
                        f = d.opt,
                        g = d.sequential,
                        h = e + "_" + d.idx,
                        i = c("#mCSB_" + d.idx),
                        j = c("#mCSB_" + d.idx + "_container"),
                        k = j.parent(),
                        l = "input,textarea,select,datalist,keygen,[contenteditable='true']";
                    i.attr("tabindex", "0").bind("blur." + h + " keydown." + h + " keyup." + h, function(e) {
                        function q(b, c) {
                            g.type = f.keyboard.scrollType, g.scrollAmount = f.snapAmount || f.keyboard.scrollAmount, "stepped" === g.type && d.tweenRunning || n._sequentialScroll.call(this, a, b, c)
                        }
                        switch (e.type) {
                            case "blur":
                                d.tweenRunning && g.dir && q("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var h = e.keyCode ? e.keyCode : e.which,
                                    i = "on";
                                if ("x" !== f.axis && (38 === h || 40 === h) || "y" !== f.axis && (37 === h || 39 === h)) {
                                    if ((38 === h || 40 === h) && !d.overflowed[0] || (37 === h || 39 === h) && !d.overflowed[1]) return;
                                    "keyup" === e.type && (i = "off"), c(b.activeElement).is(l) || (e.preventDefault(), e.stopImmediatePropagation(), q(i, h))
                                } else if (33 === h || 34 === h) {
                                    if ((d.overflowed[0] || d.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                        n._stop(a);
                                        var m = 34 === h ? -1 : 1;
                                        if ("x" === f.axis || "yx" === f.axis && d.overflowed[1] && !d.overflowed[0]) var o = "x",
                                            p = Math.abs(j[0].offsetLeft) - m * (.9 * k.width());
                                        else var o = "y",
                                            p = Math.abs(j[0].offsetTop) - m * (.9 * k.height());
                                        n._scrollTo(a, p.toString(), {
                                            dir: o,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else if ((35 === h || 36 === h) && !c(b.activeElement).is(l) && ((d.overflowed[0] || d.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                    if ("x" === f.axis || "yx" === f.axis && d.overflowed[1] && !d.overflowed[0]) var o = "x",
                                        p = 35 === h ? Math.abs(k.width() - j.outerWidth(!1)) : 0;
                                    else var o = "y",
                                        p = 35 === h ? Math.abs(k.height() - j.outerHeight(!1)) : 0;
                                    n._scrollTo(a, p.toString(), {
                                        dir: o,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                        }
                    })
                },
                _sequentialScroll: function(a, b, d) {
                    function k(b) {
                        var c = "stepped" !== h.type,
                            d = b ? c ? g.scrollInertia / 1.5 : g.scrollInertia : 1e3 / 60,
                            e = b ? c ? 7.5 : 40 : 2.5,
                            j = [Math.abs(i[0].offsetTop), Math.abs(i[0].offsetLeft)],
                            l = [f.scrollRatio.y > 10 ? 10 : f.scrollRatio.y, f.scrollRatio.x > 10 ? 10 : f.scrollRatio.x],
                            m = "x" === h.dir[0] ? j[1] + h.dir[1] * (l[1] * e) : j[0] + h.dir[1] * (l[0] * e),
                            o = "x" === h.dir[0] ? j[1] + h.dir[1] * parseInt(h.scrollAmount) : j[0] + h.dir[1] * parseInt(h.scrollAmount),
                            p = "auto" !== h.scrollAmount ? o : m,
                            q = b ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                            r = !!b;
                        return b && d < 17 && (p = "x" === h.dir[0] ? j[1] : j[0]), n._scrollTo(a, p.toString(), {
                            dir: h.dir[0],
                            scrollEasing: q,
                            dur: d,
                            onComplete: r
                        }), b ? void(h.dir = !1) : (clearTimeout(h.step), void(h.step = setTimeout(function() {
                            k()
                        }, d)))
                    }

                    function l() {
                        clearTimeout(h.step), n._stop(a)
                    }
                    var f = a.data(e),
                        g = f.opt,
                        h = f.sequential,
                        i = c("#mCSB_" + f.idx + "_container"),
                        j = "stepped" === h.type;
                    switch (b) {
                        case "on":
                            if (h.dir = ["mCSB_buttonRight" === d || "mCSB_buttonLeft" === d || 39 === d || 37 === d ? "x" : "y", "mCSB_buttonUp" === d || "mCSB_buttonLeft" === d || 38 === d || 37 === d ? -1 : 1], n._stop(a), n._isNumeric(d) && "stepped" === h.type) return;
                            k(j);
                            break;
                        case "off":
                            l(), (j || f.tweenRunning && h.dir) && k(!0)
                    }
                },
                _arr: function(a) {
                    var b = c(this).data(e).opt,
                        d = [];
                    return "function" == typeof a && (a = a()), a instanceof Array ? d = a.length > 1 ? [a[0], a[1]] : "x" === b.axis ? [null, a[0]] : [a[0], null] : (d[0] = a.y ? a.y : a.x || "x" === b.axis ? null : a,
                        d[1] = a.x ? a.x : a.y || "y" === b.axis ? null : a), "function" == typeof d[0] && (d[0] = d[0]()), "function" == typeof d[1] && (d[1] = d[1]()), d
                },
                _to: function(a, b) {
                    if (null != a && "undefined" != typeof a) {
                        var d = c(this),
                            f = d.data(e),
                            g = f.opt,
                            h = c("#mCSB_" + f.idx + "_container"),
                            i = h.parent(),
                            j = typeof a;
                        b || (b = "x" === g.axis ? "x" : "y");
                        var k = "x" === b ? h.outerWidth(!1) : h.outerHeight(!1),
                            l = "x" === b ? h.offset().left : h.offset().top,
                            o = "x" === b ? h[0].offsetLeft : h[0].offsetTop,
                            p = "x" === b ? "left" : "top";
                        switch (j) {
                            case "function":
                                return a();
                            case "object":
                                if (a.nodeType) var q = "x" === b ? c(a).offset().left : c(a).offset().top;
                                else if (a.jquery) {
                                    if (!a.length) return;
                                    var q = "x" === b ? a.offset().left : a.offset().top
                                }
                                return q - l;
                            case "string":
                            case "number":
                                if (n._isNumeric.call(null, a)) return Math.abs(a);
                                if (a.indexOf("%") !== -1) return Math.abs(k * parseInt(a) / 100);
                                if (a.indexOf("-=") !== -1) return Math.abs(o - parseInt(a.split("-=")[1]));
                                if (a.indexOf("+=") !== -1) {
                                    var r = o + parseInt(a.split("+=")[1]);
                                    return r >= 0 ? 0 : Math.abs(r)
                                }
                                if (a.indexOf("px") !== -1 && n._isNumeric.call(null, a.split("px")[0])) return Math.abs(a.split("px")[0]);
                                if ("top" === a || "left" === a) return 0;
                                if ("bottom" === a) return Math.abs(i.height() - h.outerHeight(!1));
                                if ("right" === a) return Math.abs(i.width() - h.outerWidth(!1));
                                if ("first" === a || "last" === a) {
                                    var s = h.find(":" + a),
                                        q = "x" === b ? c(s).offset().left : c(s).offset().top;
                                    return q - l
                                }
                                if (c(a).length) {
                                    var q = "x" === b ? c(a).offset().left : c(a).offset().top;
                                    return q - l
                                }
                                return h.css(p, a), void m.update.call(null, d[0])
                        }
                    }
                },
                _autoUpdate: function(a) {
                    function s() {
                        clearTimeout(g[0].autoUpdate), g[0].autoUpdate = setTimeout(function() {
                            return f.advanced.updateOnSelectorChange && (l = v(), l !== k) ? (w(), void(k = l)) : (f.advanced.updateOnContentResize && (p = [g.outerHeight(!1), g.outerWidth(!1), h.height(), h.width(), j()[0], j()[1]], p[0] === o[0] && p[1] === o[1] && p[2] === o[2] && p[3] === o[3] && p[4] === o[4] && p[5] === o[5] || (w(), o = p)), f.advanced.updateOnImageLoad && (r = t(), r !== q && (g.find("img").each(function() {
                                u(this.src)
                            }), q = r)), void((f.advanced.updateOnSelectorChange || f.advanced.updateOnContentResize || f.advanced.updateOnImageLoad) && s()))
                        }, 60)
                    }

                    function t() {
                        var a = 0;
                        return f.advanced.updateOnImageLoad && (a = g.find("img").length), a
                    }

                    function u(a) {
                        function c(a, b) {
                            return function() {
                                return b.apply(a, arguments)
                            }
                        }

                        function d() {
                            this.onload = null, w()
                        }
                        var b = new Image;
                        b.onload = c(b, d), b.src = a
                    }

                    function v() {
                        f.advanced.updateOnSelectorChange === !0 && (f.advanced.updateOnSelectorChange = "*");
                        var a = 0,
                            b = g.find(f.advanced.updateOnSelectorChange);
                        return f.advanced.updateOnSelectorChange && b.length > 0 && b.each(function() {
                            a += c(this).height() + c(this).width()
                        }), a
                    }

                    function w() {
                        clearTimeout(g[0].autoUpdate), m.update.call(null, b[0])
                    }
                    var b = c(this),
                        d = b.data(e),
                        f = d.opt,
                        g = c("#mCSB_" + d.idx + "_container");
                    if (a) return clearTimeout(g[0].autoUpdate), void n._delete.call(null, g[0].autoUpdate);
                    var l, p, r, h = g.parent(),
                        i = [c("#mCSB_" + d.idx + "_scrollbar_vertical"), c("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                        j = function() {
                            return [i[0].is(":visible") ? i[0].outerHeight(!0) : 0, i[1].is(":visible") ? i[1].outerWidth(!0) : 0]
                        },
                        k = v(),
                        o = [g.outerHeight(!1), g.outerWidth(!1), h.height(), h.width(), j()[0], j()[1]],
                        q = t();
                    s()
                },
                _snapAmount: function(a, b, c) {
                    return Math.round(a / b) * b - c
                },
                _stop: function(a) {
                    var b = a.data(e),
                        d = c("#mCSB_" + b.idx + "_container,#mCSB_" + b.idx + "_container_wrapper,#mCSB_" + b.idx + "_dragger_vertical,#mCSB_" + b.idx + "_dragger_horizontal");
                    d.each(function() {
                        n._stopTween.call(this)
                    })
                },
                _scrollTo: function(a, b, d) {
                    function x(a) {
                        return f && g.callbacks[a] && "function" == typeof g.callbacks[a]
                    }

                    function y() {
                        return [g.callbacks.alwaysTriggerOffsets || q >= r[0] + t, g.callbacks.alwaysTriggerOffsets || q <= -u]
                    }

                    function z() {
                        var b = [k[0].offsetTop, k[0].offsetLeft],
                            c = [o[0].offsetTop, o[0].offsetLeft],
                            e = [k.outerHeight(!1), k.outerWidth(!1)],
                            f = [j.height(), j.width()];
                        a[0].mcs = {
                            content: k,
                            top: b[0],
                            left: b[1],
                            draggerTop: c[0],
                            draggerLeft: c[1],
                            topPct: Math.round(100 * Math.abs(b[0]) / (Math.abs(e[0]) - f[0])),
                            leftPct: Math.round(100 * Math.abs(b[1]) / (Math.abs(e[1]) - f[1])),
                            direction: d.dir
                        }
                    }
                    var f = a.data(e),
                        g = f.opt,
                        h = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: !1,
                            dur: g.scrollInertia,
                            overwrite: "all",
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        },
                        d = c.extend(h, d),
                        i = [d.dur, d.drag ? 0 : d.dur],
                        j = c("#mCSB_" + f.idx),
                        k = c("#mCSB_" + f.idx + "_container"),
                        l = g.callbacks.onTotalScrollOffset ? n._arr.call(a, g.callbacks.onTotalScrollOffset) : [0, 0],
                        m = g.callbacks.onTotalScrollBackOffset ? n._arr.call(a, g.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (f.trigger = d.trigger, "_resetY" !== b || f.contentReset.y || (x("onOverflowYNone") && g.callbacks.onOverflowYNone.call(a[0]), f.contentReset.y = 1), "_resetX" !== b || f.contentReset.x || (x("onOverflowXNone") && g.callbacks.onOverflowXNone.call(a[0]), f.contentReset.x = 1), "_resetY" !== b && "_resetX" !== b) {
                        switch (!f.contentReset.y && a[0].mcs || !f.overflowed[0] || (x("onOverflowY") && g.callbacks.onOverflowY.call(a[0]), f.contentReset.x = null), !f.contentReset.x && a[0].mcs || !f.overflowed[1] || (x("onOverflowX") && g.callbacks.onOverflowX.call(a[0]), f.contentReset.x = null), g.snapAmount && (b = n._snapAmount(b, g.snapAmount, g.snapOffset)), d.dir) {
                            case "x":
                                var o = c("#mCSB_" + f.idx + "_dragger_horizontal"),
                                    p = "left",
                                    q = k[0].offsetLeft,
                                    r = [j.width() - k.outerWidth(!1), o.parent().width() - o.width()],
                                    s = [b, 0 === b ? 0 : b / f.scrollRatio.x],
                                    t = l[1],
                                    u = m[1],
                                    v = t > 0 ? t / f.scrollRatio.x : 0,
                                    w = u > 0 ? u / f.scrollRatio.x : 0;
                                break;
                            case "y":
                                var o = c("#mCSB_" + f.idx + "_dragger_vertical"),
                                    p = "top",
                                    q = k[0].offsetTop,
                                    r = [j.height() - k.outerHeight(!1), o.parent().height() - o.height()],
                                    s = [b, 0 === b ? 0 : b / f.scrollRatio.y],
                                    t = l[0],
                                    u = m[0],
                                    v = t > 0 ? t / f.scrollRatio.y : 0,
                                    w = u > 0 ? u / f.scrollRatio.y : 0
                        }
                        s[1] < 0 || 0 === s[0] && 0 === s[1] ? s = [0, 0] : s[1] >= r[1] ? s = [r[0], r[1]] : s[0] = -s[0], a[0].mcs || z(), clearTimeout(k[0].onCompleteTimeout), !f.tweenRunning && (0 === q && s[0] >= 0 || q === r[0] && s[0] <= r[0]) || (n._tweenTo.call(null, o[0], p, Math.round(s[1]), i[1], d.scrollEasing), n._tweenTo.call(null, k[0], p, Math.round(s[0]), i[0], d.scrollEasing, d.overwrite, {
                            onStart: function() {
                                d.callbacks && d.onStart && !f.tweenRunning && (x("onScrollStart") && (z(), g.callbacks.onScrollStart.call(a[0])), f.tweenRunning = !0, n._onDragClasses(o), f.cbOffsets = y())
                            },
                            onUpdate: function() {
                                d.callbacks && d.onUpdate && x("whileScrolling") && (z(), g.callbacks.whileScrolling.call(a[0]))
                            },
                            onComplete: function() {
                                if (d.callbacks && d.onComplete) {
                                    "yx" === g.axis && clearTimeout(k[0].onCompleteTimeout);
                                    var b = k[0].idleTimer || 0;
                                    k[0].onCompleteTimeout = setTimeout(function() {
                                        x("onScroll") && (z(), g.callbacks.onScroll.call(a[0])), x("onTotalScroll") && s[1] >= r[1] - v && f.cbOffsets[0] && (z(), g.callbacks.onTotalScroll.call(a[0])), x("onTotalScrollBack") && s[1] <= w && f.cbOffsets[1] && (z(), g.callbacks.onTotalScrollBack.call(a[0])), f.tweenRunning = !1, k[0].idleTimer = 0, n._onDragClasses(o, "hide")
                                    }, b)
                                }
                            }
                        }))
                    }
                },
                _tweenTo: function(b, c, d, e, f, g, h) {
                    function t() {
                        b._mcsstop || (o || i.call(), o = n._getTime() - l, u(), o >= b._mcstime && (b._mcstime = o > b._mcstime ? o + m - (o - b._mcstime) : o + m - 1, b._mcstime < o + 1 && (b._mcstime = o + 1)), b._mcstime < e ? b._mcsid = r(t) : k.call())
                    }

                    function u() {
                        e > 0 ? (b._mcscurrVal = x(b._mcstime, p, s, e, f), q[c] = Math.round(b._mcscurrVal) + "px") : q[c] = d + "px", j.call()
                    }

                    function v() {
                        m = 1e3 / 60, b._mcstime = o + m, r = a.requestAnimationFrame ? a.requestAnimationFrame : function(a) {
                            return u(), setTimeout(a, .01)
                        }, b._mcsid = r(t)
                    }

                    function w() {
                        null != b._mcsid && (a.requestAnimationFrame ? a.cancelAnimationFrame(b._mcsid) : clearTimeout(b._mcsid), b._mcsid = null)
                    }

                    function x(a, b, c, d, e) {
                        switch (e) {
                            case "linear":
                            case "mcsLinear":
                                return c * a / d + b;
                            case "mcsLinearOut":
                                return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
                            case "easeInOutSmooth":
                                return a /= d / 2, a < 1 ? c / 2 * a * a + b : (a--, -c / 2 * (a * (a - 2) - 1) + b);
                            case "easeInOutStrong":
                                return a /= d / 2, a < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--, c / 2 * (-Math.pow(2, -10 * a) + 2) + b);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return a /= d / 2, a < 1 ? c / 2 * a * a * a + b : (a -= 2, c / 2 * (a * a * a + 2) + b);
                            case "easeOutSmooth":
                                return a /= d, a--, -c * (a * a * a * a - 1) + b;
                            case "easeOutStrong":
                                return c * (-Math.pow(2, -10 * a / d) + 1) + b;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var f = (a /= d) * a,
                                    g = f * a;
                                return b + c * (.499999999999997 * g * f + -2.5 * f * f + 5.5 * g + -6.5 * f + 4 * a)
                        }
                    }
                    var m, r, h = h || {},
                        i = h.onStart || function() {},
                        j = h.onUpdate || function() {},
                        k = h.onComplete || function() {},
                        l = n._getTime(),
                        o = 0,
                        p = b.offsetTop,
                        q = b.style;
                    "left" === c && (p = b.offsetLeft);
                    var s = d - p;
                    b._mcsstop = 0, "none" !== g && w(), v()
                },
                _getTime: function() {
                    return a.performance && a.performance.now ? a.performance.now() : a.performance && a.performance.webkitNow ? a.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                },
                _stopTween: function() {
                    var b = this;
                    null != b._mcsid && (a.requestAnimationFrame ? a.cancelAnimationFrame(b._mcsid) : clearTimeout(b._mcsid), b._mcsid = null, b._mcsstop = 1)
                },
                _delete: function(a) {
                    try {
                        delete a
                    } catch (b) {
                        a = null
                    }
                },
                _mouseBtnLeft: function(a) {
                    return !(a.which && 1 !== a.which)
                },
                _pointerTouch: function(a) {
                    var b = a.originalEvent.pointerType;
                    return !(b && "touch" !== b && 2 !== b)
                },
                _isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                }
            };
        c.fn[d] = function(a) {
            return m[a] ? m[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void c.error("Method " + a + " does not exist") : m.init.apply(this, arguments)
        }, c[d] = function(a) {
            return m[a] ? m[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void c.error("Method " + a + " does not exist") : m.init.apply(this, arguments)
        }, c[d].defaults = g, a[d] = !0, c(a).load(function() {
            c(f)[d]()
        })
    })
}(window, document),
function(a) {
    function d(b, c) {
        this.opts = a.extend({
            handleKeys: !0,
            scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
        }, c), this.$container = b, this.$document = a(document), this.lockToScrollPos = [0, 0], this.disable()
    }
    var b, c;
    c = d.prototype, c.disable = function() {
        var a = this;
        a.lockToScrollPos = [a.$container.scrollLeft(), a.$container.scrollTop()], a.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", a._handleWheel), a.$container.on("scroll.disablescroll", function() {
            a._handleScrollbar.call(a)
        }), a.opts.handleKeys && a.$document.on("keydown.disablescroll", function(b) {
            a._handleKeydown.call(a, b)
        })
    }, c.undo = function() {
        var a = this;
        a.$container.off(".disablescroll"), a.opts.handleKeys && a.$document.off(".disablescroll")
    }, c._handleWheel = function(a) {
        a.preventDefault()
    }, c._handleScrollbar = function() {
        this.$container.scrollLeft(this.lockToScrollPos[0]), this.$container.scrollTop(this.lockToScrollPos[1])
    }, c._handleKeydown = function(a) {
        for (var b = 0; b < this.opts.scrollEventKeys.length; b++)
            if (a.keyCode === this.opts.scrollEventKeys[b]) return void a.preventDefault()
    }, a.fn.disablescroll = function(a) {
        b || "object" != typeof a && a ? b && b[a] && b[a].call(b) : b = new d(this, a)
    }, window.UserScrollDisabler = d
}(jQuery), String.prototype.trim = function() {
    var a = String.prototype.trim.arguments[0];
    if (a) {
        a = "^[" + a + "]+|[" + a + "]+$";
        var b = new RegExp(a, "gi"),
            c = this.replace(b, "")
    } else var c = this.replace(/^[ ]+|[ ]+$/g, "");
    return c = c.replace(/^[\r\n]+|[\r\n]+$/g, ""), c = c.replace(/^[ ]+|[ ]+$/g, "")
}, String.prototype.tripSpace = function() {
    return this.replace(/(\s\s+)/g, " ")
}, String.prototype.repeat = function() {
    var c, a = String.prototype.repeat.arguments[0],
        b = "";
    for (c = 0; c < a; c++) b += this;
    return b
}, String.prototype.filter = function() {
    for (var c, a = String.prototype.filter.arguments[0], b = String.prototype.filter.arguments[1], d = this, e = 0; e < a.length; e++) c = new RegExp(a[e], "gi"), d = d.replace(c, b.repeat(a[e].length));
    return d
}, String.prototype.replaceString = function() {
    for (var b, a = String.prototype.replaceString.arguments, c = this, d = 0; d < a.length; d++) b = new RegExp("%s", "i"), c = c.replace(b, a[d]);
    return c
}, String.prototype.stripViet = function() {
    var replaceChr = String.prototype.stripViet.arguments[0],
        stripped_str = this,
        viet = [];
    i = 0, viet[i++] = new Array("a", "/Ã¡|Ã |áº£|Ã£|áº¡|Äƒ|áº¯|áº±|áº³|áºµ|áº·|Ã¢|áº¥|áº§|áº©|áº«|áº­/g"), viet[i++] = new Array("o", "/Ã³|Ã²|á»|Ãµ|á»|Æ¡|á»›|á»|á»Ÿ|á»¡|á»£|Ã´|á»‘|á»“|á»•|á»—|á»™/g"), viet[i++] = new Array("e", "/Ã©|Ã¨|áº»|áº½|áº¹|Ãª|áº¿|á»|á»ƒ|á»…|á»‡/g"), viet[i++] = new Array("u", "/Ãº|Ã¹|á»§|Å©|á»¥|Æ°|á»©|á»«|á»­|á»¯|á»±/g"), viet[i++] = new Array("i", "/Ã­|Ã¬|á»‰|Ä©|á»‹/g"), viet[i++] = new Array("y", "/Ã½|á»³|á»·|á»¹|á»µ/g"), viet[i++] = new Array("d", "/Ä‘/g");
    for (var i = 0; i < viet.length; i++) stripped_str = stripped_str.replace(eval(viet[i][1]), viet[i][0]), stripped_str = stripped_str.replace(eval(viet[i][1].toUpperCase().replace("G", "g")), viet[i][0].toUpperCase());
    return replaceChr ? stripped_str.replace(/[\W]|_/g, replaceChr).replace(/\s/g, replaceChr).replace(/^\-+|\-+$/g, replaceChr) : stripped_str
};
var zmp3Img = {
        dynamic: function(a) {
            $($(a).data("selector")).each(function() {
                $(this).attr("src", $(this).data("src"))
            }), $(a).remove()
        }
    },
    zmp3Number = {
        format: function(a) {
            a += "", x = a.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
            for (var b = /(\d+)(\d{3})/; b.test(x1);) x1 = x1.replace(b, "$1,$2");
            return x1 + x2
        }
    },
    zmp3String = {
        substr: function(a, b) {
            return a.length > b && (a = a.substring(0, b), a.lastIndexOf(" ") != -1 && (a = a.substring(0, a.lastIndexOf(" "))), a += "..."), a
        }
    },
    zmp3DateTime = {
        format: function(a) {
            var b = [
                    [11, "sÃ¡ng"],
                    [14, "trÆ°a"],
                    [19, "chiá»u"]
                ],
                c = ["Chá»§ Nháº­t", "Thá»© Hai", "Thá»© Ba", "Thá»© TÆ°", "Thá»© NÄƒm", "Thá»© SÃ¡u", "Thá»© Báº£y"],
                d = new Date,
                e = new Date(1e3 * a),
                f = Math.floor(d.getTime() / 1e3) - a;
            if (f < 60) return (f < 0 ? 0 : f).toString() + " giÃ¢y trÆ°á»›c";
            if (f < 3600) return Math.floor(f / 60) + " phÃºt trÆ°á»›c";
            if (f < 43200) return Math.floor(f / 3600) + " tiáº¿ng trÆ°á»›c";
            var g = e.getHours(),
                h = this.fill2(e.getMinutes());
            if (f < 518400) {
                for (var i = "tá»‘i", j = 0; j < 3; j++)
                    if (g < b[j][0]) {
                        i = b[j][1];
                        break
                    }
                f = (d.getDay() + 7 - e.getDay()) % 7;
                var k = "";
                return k = 0 == f ? "hÃ´m nay" : 1 == f ? "hÃ´m qua" : c[e.getDay()], (g > 12 ? g % 12 : g).toString() + ":" + h + " " + i + " " + k
            }
            return g = this.fill2(g), g + ":" + h + " " + this.fill2(e.getDate()) + "/" + this.fill2(e.getMonth() + 1) + "/" + e.getFullYear()
        },
        fill2: function(a) {
            return a < 10 ? "0" + a : a
        }
    },
    zmp3Share = {
        url: "",
        share: function(a) {
            var b = a.attr("href");
            switch (a.data("net")) {
                case "gp":
                    url = "https://plus.google.com/share?url=" + b;
                    break;
                case "zm":
                    url = "http://link.apps.zing.vn/share?u=" + b;
                    break;
                default:
                    url = "https://www.facebook.com/dialog/share?app_id=1603079626622346&display=popup&caption=mp3.zing.vn&redirect_uri=http://" + location.host + "/link/fb-redirect&href=" + b
            }
            return window.open(url, "share", "height=600,width=600"), !1
        }
    },
    zmp3Tab = {
        init: function() {
            if (MP3.ZALO_ID && !MP3.VIP) {
                var a = $("#tabService"),
                    b = a.data("panel");
                zmp3SongTool.buildDlBox(a, $(b), function(c) {
                    if (c) {
                        for (var d in c.data)
                            if (c.data[d].vip) {
                                $(".fn-" + d, $(b)).removeClass("ghost-button");
                                var e = $(".fn-size-" + d, $(b)).parent();
                                e.html(e.html().replace("miá»…n phÃ­", "VIP"))
                            }
                        c.msg && ($(".fn-list", $(b)).addClass("none"), $(".fn-download-off", $(b)).removeClass("none"))
                    }
                    zmp3Tab.showTab(a)
                })
            }
            $(".fn-tab").click(function() {
                var a = $(this),
                    b = a.data("panel");
                return ".fn-tab-panel-addto" == b ? zmp3Login.show(function() {
                    zmp3SongTool.buildPlaylistBox(a, $(b), function() {
                        zmp3Tab.showTab(a)
                    })
                }) : ".fn-tab-panel-service" == b ? zmp3SongTool.buildDlBox(a, $(b), function(c) {
                    if (c) {
                        for (var d in c.data)
                            if (c.data[d].vip) {
                                $(".fn-" + d, $(b)).removeClass("ghost-button");
                                var e = $(".fn-size-" + d, $(b)).parent();
                                e.html(e.html().replace("miá»…n phÃ­", "VIP"))
                            }
                        c.msg && ($(".fn-list", $(b)).addClass("none"), $(".fn-download-off", $(b)).removeClass("none"))
                    }
                    zmp3Tab.showTab(a)
                }) : zmp3Tab.showTab(a), !1
            }), $(".fn-closetab").click(function() {
                return zmp3Tab.showTab($($(this).data("tab"))), !1
            })
        },
        showTab: function(a) {
            var b = a.data("panel"),
                c = $('.fn-tab[data-group="' + a.data("group") + '"]');
            c.removeClass("active"), a.parent().siblings().removeClass("active"), $(a.data("group")).addClass("none"), c.each(function() {
                $($(this).data("panel")).addClass("none")
            }), a.data("show") ? ($(b).addClass("none"), c.data("show", !1), a.parent().removeClass("active")) : (c.data("show", !1), a.data("show", !0), a.parent().addClass("active"), a.addClass("active"), $(b).removeClass("none"))
        }
    },
    zmp3ChangePath = {
        clickCb: function(a) {
            location.pathname = $(a).data("path")
        }
    };
$(document).ready(function() {
    $(window).load(function() {
        $(window).height() > $("body").height() ? $("body").addClass("fixed-footer") : $("body").removeClass("fixed-footer"), zmp3UI.sidebar(), dynamic()
    }), $(window).resize(function() {
        $(window).height() > $("body").height() ? $("body").addClass("fixed-footer") : $("body").removeClass("fixed-footer"), zmp3UI.sidebar(), dynamic(), zmp3Suggest.resize()
    }), $(document).scroll(function(a) {
        dynamic(), zmp3UI.sidebar()
    }), zmp3UI.init(), zmp3Login.init(), zmp3Suggest.init(), zmp3SongTool.init(), zmp3User.init(), zmp3Tab.init(), $("a.fn-version3").length > 0 && $("a.fn-version3").attr("href", "//v3.mp3.zing.vn" + location.pathname + location.search), MP3.VIP || "undefined" == typeof ZVip || $(".fn-viprequire").click(function(a) {
        if (!MP3.VIP) return ZVip.Fpackage($(this).data("step")), !1
    })
}), zmp3User = {
    init: function() {
        $(".fn-login").click(function() {
            if (!MP3.ACCOUNT_ID) return zmp3Login.show(), !1
        })
    },
    submitCb: function(a) {}
};
var zmp3SongTool = {
        item: !1,
        init: function() {
            $(".fn-dlsong").click(function(a) {
                return zmp3SongTool.showDlBox($(this)), !1
            }), $(".fn-share").click(function(a) {
                return zmp3SongTool.showShareBox($(this)), !1
            }), $(".fn-add").each(function() {
                var a = this;
                "fav" == $(a).data("from") && $.get("/xhr/mydata/check-exists", $(a).data(), function(b) {
                    b.exists && $(a).addClass("added").html($(a).html().replace("ThÃªm vÃ o", "ÄÃ£ thÃªm"))
                }), $(a).click(function() {
                    return zmp3Login.show() && (zmp3SongTool.item = $(this), zmp3SongTool.addPlaylistItem($(this))), !1
                })
            }), $(".fn-addto").click(function(a) {
                return zmp3Login.show() && zmp3SongTool.showAddBox($(this)), !1
            }), $(".fn-addfav").click(function() {
                var a = $($(this).data("item"));
                if (zmp3Login.show()) {
                    var b = $(a).data(),
                        c = parseInt(a.data("added")),
                        d = (new Date).getTime();
                    this.item;
                    (isNaN(c) || c + 800 < d) && (a.data("added", d), $.post("/xhr/mydata/add-playlist-item", b, function(b) {
                        b.code < 1 && a.addClass("added"), zmp3UI.showMsg(b.msg, b.code)
                    }))
                }
                return !1
            }), $("form.fn-playlist").submit(function(a) {
                var b = this;
                return b.name.value.trim().length < 1 ? zmp3UI.showMsg("Vui lÃ²ng nháº­p tÃªn playlist!", 1) : $(b).attr("disabled") || ($(b).attr("disabled", !0), this.item_id.value = zmp3SongTool.item.data("id"), $.post($(b).attr("action"), $(b).serialize(), function(a) {
                    $(b).attr("disabled", !1), a.code < 1 && zmp3SongTool.buildPlaylistItem(a.data, $($(b).data("playlist-box"))), zmp3UI.showMsg(a.msg, a.code)
                })), !1
            }), $(".fn-rmitem").click(function() {
                return zmp3SongTool.removeItem($($(this).data("item"))), !1
            }), onBlurBind("#playlistBox", function(a) {
                zmp3SongTool.item && ($("#playlistBox").addClass("none"), zmp3SongTool.item.data("active") && $(".fn-" + zmp3SongTool.item.data("type")).removeClass(zmp3SongTool.item.data("active")), $(".fn-songbox").addClass("none"))
            })
        },
        showPlaylistBox: function(a, b) {
            var c = $("#playlistBox"),
                d = this.item.data("pids") ? this.item.data("pids").split(",") : [];
            $(".fn-add", c).removeClass("added"), $("input", c).prop("checked", !1);
            for (var e in d) d[e].length > 1 && $("input", $("[data-pid=" + d[e] + "]", c).addClass("added")).prop("checked", !0);
            c.removeClass("none").css("top", a).css("left", b).css("display", "block")
        },
        addPlaylistItem: function(a) {
            var b = $(a).data(),
                c = !1,
                d = parseInt(a.data("added")),
                e = (new Date).getTime(),
                f = this.item,
                g = [];
            try {
                b.id = f.data("id"), f.data("pids") && (g = f.data("pids").split(","))
            } catch (a) {}
            for (var h in g)
                if (g[h] === b.pid) {
                    c = !0;
                    break
                }
            a.hasClass("added") ? zmp3SongTool.removeItem($(a.data("item")), function() {
                a.removeClass("added").html(a.html().replace("ÄÃ£ thÃªm", "ThÃªm vÃ o")), $("input", a).length > 0 && $("input", a).removeAttr("checked")
            }, !0) : !c && (isNaN(d) || d + 800 < e) && (a.data("added", e), $.post("/xhr/mydata/add-playlist-item", b, function(c) {
                if (c.code < 1) {
                    $("input", a).length > 0 && $("input", a).attr("checked", "checked"), a.addClass("added").html(a.html().replace("ThÃªm vÃ o", "ÄÃ£ thÃªm")), g.push(b.pid);
                    try {
                        f.data("pids", g.join(","))
                    } catch (a) {}
                }
                zmp3UI.showMsg(c.msg, c.code)
            }))
        },
        removeItem: function(a, b, c) {
            var d = $(a).data(),
                e = this,
                f = "Báº¡n cháº¯c cháº¯n muá»‘n xÃ³a ";
            f += "song" == d.type ? "bÃ i hÃ¡t" : "artist" == d.type ? "nghá»‡ sÄ©" : d.type, zmp3UI.bodyMask(1), zmp3UI.confirm("XÃ¡c nháº­n", d.name && !d.pid ? f + " <strong>" + d.name + "</strong> ra khá»i danh sÃ¡ch?" : f + " nÃ y ra khá»i danh sÃ¡ch?", function(f) {
                if (f) {
                    (!d.id || d.id.length < 4) && (d.id = e.item.data("id"));
                    for (var g in d) "string" != typeof d[g] && "number" != typeof d[g] && delete d[g];
                    a.data("removed") || (a.data("removed", !0), $.post("/xhr/mydata/remove-item", d, function(d) {
                        if (d.code < 1) {
                            var e = $(".fn-follow", a.parent());
                            if (e.length > 0) {
                                e.removeClass("none").removeClass("active");
                                var f = $(".fn-rmitem", a.parent());
                                f.addClass("none")
                            } else e = $(".fn-ufollow", a.parent()), e.length > 0 ? e.removeClass("none") : c || a.remove()
                        } else a.data("removed", !1);
                        zmp3UI.showMsg(d.msg, d.code), $.isFunction(b) && b(d)
                    }))
                }
                zmp3UI.bodyMask(0)
            })
        },
        showAddBox: function(a) {
            this.item = $(a.data("item"));
            var b = $(a).offset(),
                c = this.item.data("type");
            b.top += $(a).height() + 8, b.left += $(a).width() / 2, $(".fn-songbox").addClass("none"), this.item.data("active") && ($(".fn-" + c).removeClass(this.item.data("active")), this.item.addClass(this.item.data("active"))), "song" != c && "playlist" != c || ($(a).data("rendered") ? zmp3SongTool.showPlaylistBox(b.top, b.left) : ($(".fn-addto").data("rendered", !0), this.buildPlaylistBox(this.item, $("#playlistBox"), function() {
                zmp3SongTool.showPlaylistBox(b.top, b.left)
            })))
        },
        showDlBox: function(a) {
            this.item = $(a.data("item"));
            var b = this.item.data("type") || "song",
                c = a.offset(),
                d = this.item.data("active"),
                e = "dlbox" + b + this.item.data("id"),
                f = $("#" + e);
            $(".fn-" + b).removeClass(d), this.item.addClass(d), $(".fn-box" + b).addClass("none"), f.length > 0 ? f.css({
                left: c.left + 2 - f.width() / 2 + "px",
                top: c.top + 28 + "px"
            }).removeClass("none") : (f = $(document.getElementById("dlbox" + b).cloneNode(!0)), f.attr("id", e), $("body").append(f), f.css({
                left: c.left + 2 - f.width() / 2 + "px",
                top: c.top + 28 + "px"
            }), this.buildDlBox(this.item, f, function(a) {
                f.removeClass("none"), a.msg && ($(".box-tooltip.box-download.fn-boxsong").addClass("none"), zmp3UI.showMsg(a.msg, 1)), MP3.VIP || "undefined" == typeof ZVip || $(".fn-viprequire", f).click(function(a) {
                    if (!MP3.VIP) return f.addClass("none"), ZVip.Fpackage(), !1
                }), onBlurBind(zmp3SongTool.item, function() {
                    $(".fn-" + zmp3SongTool.item.data("type")).removeClass(zmp3SongTool.item.data("active")), f.addClass("none")
                })
            }))
        },
        showShareBox: function(a) {
            this.item = $($(a).data("item"));
            var b = a.offset(),
                c = "shareSongBox" + this.item.data("id"),
                d = $("#" + c);
            $(".fn-" + this.item.data("type")).removeClass(this.item.data("active")), this.item.addClass(this.item.data("active")), $(".fn-songbox").addClass("none"), d.length > 0 ? d.css("top", b.top + 28).css("left", b.left - 80 + d.width() / 2).removeClass("none") : (d = $(document.getElementById("shareSongBox").cloneNode(!0)), d.attr("id", c), $("body").append(d), $(".fn-sharelink", d).attr("href", a.attr("href")).attr("data-id", this.item.data("id")).removeClass("none").click(function() {
                return zmp3Share.share($(this)), !1
            }), d.css("top", b.top + 28).css("left", b.left - 80 + d.width() / 2).removeClass("none"), onBlurBind(zmp3SongTool.item, function() {
                $(".fn-" + zmp3SongTool.item.data("type")).removeClass(zmp3SongTool.item.data("active")), d.addClass("none")
            }))
        },
        buildDlBox: function(a, b, c) {
            this.item = a;
            var d = a.data("code");
            if (d !== b.data("build-dl")) {
                b.data("build-dl", d);
                var e = a.data("type") || "song";
                $(".fn-list a", b).each(function() {
                    $(this).parent().addClass("none")
                }), $.get("/xhr/" + e + "/get-download", a.data(), function(d) {
                    if (d.data) {
                        for (var e in d.data) $(".fn-" + e, b).parent().removeClass("none"), $(".fn-size-" + e, b).parent().removeClass("none"), $(".fn-" + e, b).attr("data-id", a.data().id), $(".fn-" + e, b).attr("data-bit", e), "128" == e ? $(".fn-" + e, b).attr("href", d.data[e].link).click(function(a) {
                            if (d.data[e].vip && !MP3.VIP) return ZVip.Fpackage($(this).data("step")), !1
                        }) : $(".fn-" + e, b).attr("href", d.data[e].link).click(function(a) {}), d.data[e].size > 0 && $(".fn-size-" + e, b).html((d.data[e].size / 1048576).toFixed(2));
                        d.qr && $(".fn-qr", b).attr("src", "data:image/png;base64," + d.qr)
                    }
                    $.isFunction(c) && c(d)
                })
            } else $.isFunction(c) && c()
        },
        buildPlaylistItem: function(a, b) {
            var c = 0 === a.id ? $(".fn-fav", b)[0].cloneNode(!0) : $(".fn-item", b)[0].cloneNode(!0);
            $(".fn-name", c).html(a.name), $(".fn-link", c).attr("href", a.link), $(".fn-total", c).length > 0 && ($(".fn-total", c).html(a.total), 0 == a.id && "playlist" == a.type && $(".fn-total", c).parent("span").remove()), $(c).attr("id", a.id), a.added && ($(".fn-add", c).addClass("added"), $("input", c).length > 0 && $("input", c).prop("checked", !0)), $(".fn-add", c).attr("data-pid", a.id).attr("data-from", "playlist").attr("data-item", "#" + a.id + " .fn-add").attr("data-name", a.name).attr("data-type", a.type).attr("data-title", a.name).attr("data-pid", a.id).click(function(a) {
                a.preventDefault(), zmp3SongTool.addPlaylistItem($(this));
                $(this).data();
                return !1
            }), $(c).removeClass("none"), $(".fn-list", b).append(c)
        },
        buildPlaylistBox: function(a, b, c) {
            this.item = a, b.data("build-playlist") ? $.isFunction(c) && c() : (b.data("build-playlist", 1), $.get(MP3.MP3_URL + "/xhr/mydata/get-playlist", a.data(), function(a) {
                if (a.data) {
                    for (x in a.data) zmp3SongTool.buildPlaylistItem(a.data[x], b);
                    $.isFunction(c) && c()
                }
            }))
        }
    },
    zmp3Login = {
        succCallback: "",
        error: 0,
        isZalo: !1,
        init: function() {
            var a = $("#loginBox");
            $(".fn-zalo", a).click(function() {
                return zmp3Login.isZalo = !0, zmp3Login.show(), !1
            }), $(".fn-zingid", a).click(function() {
                return zmp3Login.isZalo = !1, zmp3Login.show(), !1
            })
        },
        show: function(a) {
            if (this.succCallback = a, !MP3.ACCOUNT_NAME) {
                var b = $("#loginBox");
                return this.isZalo ? ($(".fn-zingid", b).removeClass("active"), $(this).addClass("active"), $(".fn-content", b).html('<iframe src="' + MP3.MP3_URL + '/auth/zalo/access_token" style="border:none;"></iframe>')) : ($(".fn-zalo", b).removeClass("active"), $(this).addClass("active"), loadScript("http://id.zaloapp.com/open-widget?f=3U9FGM10004"), $.get("/xhr/mydata/get-loginbox", function(a) {
                    a.html ? ($(".fn-content", b).html(a.html), b.removeClass("none"), zmp3UI.bodyMask(1), $("input[name=u]").focus(), $("form", b).submit(function() {
                        var a = $("input[name=u]"),
                            b = $("input[name=p]");
                        return a.val().trim().length < 2 ? (zmp3Login.showMsg("TÃªn Ä‘Äƒng nháº­p khÃ´ng há»£p lá»‡."), a.focus(), !1) : b.val().trim().length < 2 ? (zmp3Login.showMsg("Vui lÃ²ng nháº­p máº­t kháº©u."), b.focus(), !1) : void($("#longtime").prop("checked") ? ($("#u1").val($("#u1").val() + "&longtime=1"), $("#fp").val($("#fp").val() + "&longtime=1")) : ($("#u1").val($("#u1").val() + "&longtime=0"), $("#fp").val($("#fp").val() + "&longtime=0")))
                    })) : a.userid && zmp3UI.buildInfo(a)
                }, "json")), !1
            }
            return $.isFunction(this.succCallback) && this.succCallback(), !0
        },
        showMsg: function(a) {
            $("#loginBox").removeClass("none"), $("#loginBox .fn-msg").removeClass("none").html(a)
        },
        process: function(a, b) {
            this.error = a, 0 != a ? a == -114 ? ($.getJSON("http://me.zing.vn/cp?url=" + MP3.MP3_URL + "&callback=?", function() {
                location.href = location.href
            }), setTimeout(function() {
                location.href = location.href
            }, 1e3)) : this.showMsg(b) : zmp3UI.profile(!0)
        }
    },
    zmp3Suggest = {
        lastQ: "",
        tplArtist: null,
        lastcall: 0,
        tplAlbum: null,
        tplSong: null,
        tplVideo: null,
        init: function() {
            var a = $("#sug"),
                b = $(".fn-result", a);
            MP3.IS_PC && $('input[name="q"]').focus(), location.pathname.search("/tim-kiem/") != -1 && $("form", a).attr("action", location.pathname), $(window).disablescroll(), $(window).disablescroll("undo");
            var c = new RegExp("q=(.*?)(&|$)"),
                d = c.exec(location.search);
            d && $("input[name=q]", a).val(decodeURIComponent(decodeURI(d[1]).replace(new RegExp("\\+", "g"), " "))), tplArtist = document.getElementById("tplSugArtist").cloneNode(!0), tplAlbum = document.getElementById("tplSugAlbum").cloneNode(!0), tplSong = document.getElementById("tplSugSong").cloneNode(!0), tplVideo = document.getElementById("tplSugVideo").cloneNode(!0), b.mCustomScrollbar({
                scrollInertia: 0,
                scrollbarPosition: "outside",
                autoHideScrollbar: !0,
                autoExpandScrollbar: !0,
                keyboard: {
                    enable: !0
                },
                mouseWheel: {
                    preventDefault: !0
                }
            }), this.clearResult(), onBlurBind('input[name="q"]', function() {
                b.addClass("none")
            }), $("form", a).submit(function() {
                var a = $(".fn-list .fn-item.active", b);
                return a.length > 0 ? (location.href = $(".fn-link", a).attr("href"), !1) : !($.trim($('input[name="q"]').val()).length < 1) && void 0
            }), $('input[name="q"]', a).keydown(function(a) {
                if (13 === a.keyCode) {
                    var c = $(".fn-list .fn-item.active", b);
                    if (c.length > 0) return !1
                } else {
                    var d = $(".fn-list .fn-item", b);
                    if (38 === a.keyCode || 40 === a.keyCode) {
                        if (d.length > 0) {
                            for (var e = -1, f = 0; f < d.length; f++)
                                if ($(d[f]).hasClass("active")) {
                                    e = f;
                                    break
                                }
                            switch (d.removeClass("active"), a.keyCode) {
                                case 38:
                                    e > 0 ? $(d[e - 1]).addClass("active") : $(d[d.length - 1]).addClass("active");
                                    break;
                                case 40:
                                    e < d.length - 1 ? $(d[e + 1]).addClass("active") : $(d[0]).addClass("active")
                            }
                        }
                        return !1
                    }
                    a.keyCode < 65 && a.shiftKey || a.keyCode > 165 && a.keyCode < 200 || this.value.length < 1 && 32 == a.keyCode
                }
            }).keyup(function(a) {
                a.keyCode < 65 && a.shiftKey || a.keyCode > 165 && a.keyCode < 200 || this.value.length < 1 && 32 == a.keyCode || zmp3Suggest.suggest($(this))
            }).focus(function() {
                zmp3Suggest.suggest($(this))
            }).click(function() {
                zmp3Suggest.suggest($(this))
            }), b.height($(window).height() - 42)
        },
        clearResult: function() {
            $("#sugResult").data("current", -1), $("#tplSugArtist").remove(), $("#tplSugAlbum").remove(), $("#tplSugSong").remove(), $("#tplSugVideo").remove()
        },
        resize: function() {
            $("#sugResult").height("auto")
        },
        suggest: function(a) {
            if (a.val().length > 1) {
                var b = $.now();
                this.lastQ !== a.val().trim() && this.lastcall + 50 < b ? (zmp3Suggest.lastQ = a.val().trim(), zmp3Suggest.lastcall = b, $.getJSON("http://ac.mp3.zing.vn/complete?type=artist,album,video,song&num=3&callback=?", {
                    query: zmp3Suggest.lastQ
                }, function(b) {
                    if (zmp3Suggest.lastQ === a.val().trim() && ($("#sugSong .fn-list").empty(), $("#sugAlbum .fn-list").empty(), $("#sugVideo .fn-list").empty(), $("#sugArtist .fn-list").empty(), b.data)) {
                        if ($(tplArtist).data("highlight", a.val()), $(tplSong).data("highlight", a.val()), $(tplAlbum).data("highlight", a.val()), $(tplVideo).data("highlight", a.val()), b.data[0].artist.length > 0) {
                            for (x in b.data[0].artist) {
                                var c = b.data[0].artist[x],
                                    d = tplArtist.cloneNode(!0),
                                    e = "/nghe-si/" + (c.name_stripviet ? c.name_stripviet : c.name.stripViet("-"));
                                $(".fn-name", d).addClass("fn-highlight").data("highlight", a.val()).html(c.name), $("a.fn-link", d).attr("title", c.name).attr("href", e), $("img.fn-thumb", d).attr("src", "http://image.mp3.zdn.vn/thumb/94_94/" + c.thumb).attr("alt", c.name), $(d).removeClass("none"), $("#sugArtist .fn-list").append(d)
                            }
                            $("#sugArtist").removeClass("none")
                        } else $("#sugArtist").addClass("none");
                        if (b.data[1].album.length > 0) {
                            for (x in b.data[1].album) {
                                var c = b.data[1].album[x],
                                    d = tplAlbum.cloneNode(!0);
                                $(".fn-name", d).addClass("fn-highlight").data("highlight", a.val()).html(c.name), $(".fn-artist", d).addClass("fn-highlight").data("highlight", a.val()).html(c.artist);
                                var f = "/album/" + c.name.stripViet("-") + "-" + c.artist.stripViet("-") + "/" + c.id + ".html";
                                $("a.fn-link", d).attr("title", c.name + " - " + c.artist).attr("href", f), $("img.fn-thumb", d).attr("src", "http://image.mp3.zdn.vn/thumb/94_94/" + c.thumb).attr("alt", c.name), $(d).removeClass("none"), $("#sugAlbum .fn-list").append(d)
                            }
                            $("#sugAlbum").removeClass("none")
                        } else $("#sugAlbum").addClass("none");
                        if (b.data[2].video.length > 0) {
                            for (x in b.data[2].video) {
                                var c = b.data[2].video[x],
                                    d = tplVideo.cloneNode(!0);
                                $(".fn-name", d).addClass("fn-highlight").data("highlight", a.val()).html(c.name), $(".fn-artist", d).addClass("fn-highlight").data("highlight", a.val()).html(c.artist);
                                var f = "/video-clip/" + c.name.stripViet("-") + "-" + c.artist.stripViet("-") + "/" + c.id + ".html";
                                $("a.fn-link", d).attr("title", c.name + " - " + c.artist).attr("href", f), $("img.fn-thumb", d).attr("src", "http://image.mp3.zdn.vn/thumb/128_72/" + c.thumb).attr("alt", c.name), $(d).removeClass("none"), $("#sugVideo .fn-list").append(d)
                            }
                            $("#sugVideo").removeClass("none")
                        } else $("#sugVideo").addClass("none");
                        if (b.data[3].song.length > 0) {
                            for (x in b.data[3].song) {
                                var c = b.data[3].song[x],
                                    d = tplSong.cloneNode(!0);
                                $(".fn-name", d).addClass("fn-highlight").data("highlight", a.val()).html(c.name), $(".fn-artist", d).addClass("fn-highlight").data("highlight", a.val()).html(c.artist);
                                var f = "/bai-hat/" + c.name.stripViet("-") + "-" + c.artist.stripViet("-") + "/" + c.id + ".html";
                                $("a.fn-link", d).attr("title", c.name + " - " + c.artist).attr("href", f), $(d).removeClass("none"), $("#sugSong .fn-list").append(d)
                            }
                            $("#sugSong").removeClass("none")
                        } else $("#sugSong").addClass("none");
                        $("#sugResult").removeClass("none"), zmp3UI.highlight()
                    }
                    zmp3Suggest.resize()
                })) : ($("#sugResult").removeClass("none"), zmp3Suggest.resize())
            } else this.clearResult()
        }
    },
    ZMEInfo = {
        size: 120,
        uid: [],
        elId: [],
        listId: [],
        listUname: [],
        renderZMEAvatar: function() {
            for (var a = $(".fn_zme_info"), b = 0; b < a.length; b++) {
                var c = $(a[b]);
                if (c.attr("data_uid")) {
                    var d = parseInt(c.attr("data_uid"));
                    if (d > 0) {
                        var e = c.data("ref") ? c.data("ref") : ".fn_zme_info[data_uid=" + c.attr("data_uid") + "]";
                        this.listId.push(c.attr("data_uid") + "?" + e)
                    }
                } else if (c.attr("data_uname") && c.attr("data_uname").length > 2) {
                    var e = c.data("ref") ? c.data("ref") : ".fn_zme_info[data_uname='" + c.attr("data_uname") + "']";
                    this.listUname.push(c.attr("data_uname") + "?" + e)
                }
                c.data("thumbsize") && (this.size = parseInt(c.data("thumbsize")))
            }
            if (this.listId.length || this.listUname.length) {
                var f = "http://widget.me.zing.vn/api/widget?method=getMixEx&size=" + this.size + "&displaylist=&displaylist_ex=&ava_list=" + this.listUname.join("|,") + "&ava_list_id=" + this.listId.join("|,");
                loadScript(f), this.listId = [],
                    this.listUname = []
            }
        }
    },
    zmp3UI = {
        init: function() {
            this.profile(), this.followInit(), $(".fn-tooltip").click(function() {
                $(this).data("show") ? ($($(this).data("box")).addClass("none"), $(this).data("show", !1)) : ($($(this).data("box")).removeClass("none"), $(this).data("show", !0))
            }), $(".fn-show").length > 0 && $(".fn-show").click(function() {
                return zmp3UI.showhide($($(this).data("box"))), !1
            }), $(".fn-showhere").length > 0 && $(".fn-showhere").click(function() {
                var a = $(this).offset(),
                    b = a.top,
                    c = $($(this).data("box")).removeClass("none");
                return b + c.height() + 20 > $(window).height() + $(window).scrollTop() ? b -= c.height() + 12 : b += $(this).height(), c.css({
                    top: b + "px",
                    left: a.left + 6 - c.width() / 2 + "px"
                }), $(this).data("show") ? ($($(this).data("box")).addClass("none"), $(this).data("show", !1)) : $(this).data("show", !0), !1
            }), $(".fn-showhide").length > 0 && $(".fn-showhide").click(function() {
                return $($(this).data("show")).removeClass("none"), $($(this).data("hide")).addClass("none"), !1
            }), $(".fn-cb").length && $(".fn-cb").click(function() {
                var a = window[$(this).data("fn")];
                return "undefined" != typeof a && a.clickCb.apply(a, [this]), !1
            }), $(".fn-expand").each(function() {
                var a = $($(this).data("box")),
                    b = parseInt(a.data("min"));
                b >= a[0].scrollHeight && (a.css("height", "auto"), $(this).remove())
            }), $(".fn-expand").click(function() {
                var a = $($(this).data("box"));
                return a.data("expand") ? (a.css("height", a.data("min")), a.data("expand", 0), $(this).html("Xem thÃªm"), $(window).scrollTop($(this).data("top"))) : ($(this).data("top", $(window).scrollTop()), a.css("height", a.data("max")), a.data("expand", 1), $(this).html("RÃºt gá»n")), !1
            }), $(".fn-number").each(function() {
                $(this).html(zmp3Number.format($(this).html()))
            }), $(".fn-date").each(function() {
                $(this).html(zmp3DateTime.format($(this).html()))
            }), $(".fn-scrollbar").mCustomScrollbar({
                scrollInertia: 0,
                scrollbarPosition: "outside",
                autoHideScrollbar: !0,
                autoExpandScrollbar: !0,
                mouseWheel: {
                    preventDefault: !0
                }
            }), $(".fn-sharelink").click(function() {
                return zmp3Share.share($(this)), !1
            }), $("form.fn-ajax").submit(function() {
                var a = "undefined";
                if ($(this).data("cb")) var a = window[$(this).data("cb")];
                return $.post($(this).attr("action"), $(this).serialize(), function(b) {
                    "undefined" != typeof a && a.submitCb.apply(a, [b, this])
                }), !1
            }), $(".fn-close").click(function() {
                var a = window[$(this).data("cb")];
                return "undefined" != typeof a && a.closeCb.apply(a, [this]), zmp3UI.bodyMask(0), $($(this).data("box")).addClass("none"), !1
            }), $(".fn-param").click(function() {
                return location.href = zmp3UI.replaceUrlParam($(this)), !1
            });
            for (var a = $(".fn-bar"), b = 0, c = 0; c < a.length; c++) {
                var d = $(a[c]),
                    e = parseInt(d.data("total"));
                !isNaN(e) && b < e && (b = e)
            }
            for (var c = 0; c < a.length; c++) {
                var d = $(a[c]),
                    e = parseInt(d.data("total"));
                isNaN(e) || (e = 100 * e / b, e < 95 && (e += 4), d.css("width", e + "%"))
            }
            zmp3Toolbar.init(), ZMEInfo.renderZMEAvatar(), $(".fn-time").each(function() {
                $(this).html(zmp3DateTime.format($(this).html()))
            }), location.host.search("lt.mp3.zing.vn") === -1 && ! function(a, b, c) {
                var d, e = a.getElementsByTagName(b)[0];
                a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1603079626622346&version=v2.7", e.parentNode.insertBefore(d, e))
            }(document, "script", "facebook-jssdk"), this.highlight(), $(".fn-banner-off").click(function() {
                return MP3.VIP ? zmp3UI.setBannerOff(!MP3.BANNER_OFF, !0) : "undefined" != typeof ZVip && ZVip.Fpackage(), !1
            }), $(".fn-total-play").each(function() {
                if ($(this).data("id")) {
                    var a = this;
                    $.get("/xhr/song/get-total-play", $(this).data(), function(b) {
                        b.total_play >= 0 && $(a).html(zmp3Number.format(b.total_play))
                    })
                }
            }), $(".fn-slide-show").each(function() {
                var a = this,
                    b = {
                        dots: !1,
                        prevArrow: $(".fn-prev", this),
                        nextArrow: $(".fn-next", this),
                        infinite: !0,
                        speed: 1500,
                        slidesToShow: 6,
                        slidesToScroll: 6
                    };
                if (null !== $(this).data() && $.extend(b, b, $(this).data()), null !== $(this).data("customNav")) {
                    var c = $($(this).data("customNav"));
                    $(".fn-slide", this).slick(b).on("beforeChange", function(a, d, e, f) {
                        c.removeClass("active"), $(c[f / b.slidesToShow]).addClass("active")
                    }), $(c[0]).addClass("active"), c.click(function() {
                        return $(".fn-slide", a).slick("slickGoTo", $(this).data("ord")), !1
                    })
                } else $(".fn-slide", this).slick(b);
                null !== $(a).data("cb") && "undefined" != typeof window[$(a).data("cb")] && $(".fn-slide", a).on("afterChange", function(b, c, d) {
                    var e = window[$(a).data("cb")];
                    "undefined" != typeof e && e.afterChange.apply(e, [c, d])
                })
            }), $("a[tracking]").click(function() {
                return zmp3Common.trackingOn($(this), "/tracking")
            });
            var f = (new Date).getHours();
            f > 18 && f < 21 && $(".fn-ytsubscribe").removeClass("none")
        },
        bodyMask: function(a) {
            a ? $(".body-mask").removeClass("none") : $(".body-mask").addClass("none")
        },
        showmodal: function(a) {
            return this.showhide($($(a).data("box")), function(a) {
                zmp3UI.bodyMask(a)
            }), !1
        },
        showhide: function(a, b) {
            a.hasClass("none") && (a.css("display", "none"), a.removeClass("none")), a.slideToggle(200, function() {
                $.isFunction(b) && b(!1)
            })
        },
        highlight: function() {
            var a = $(".fn-highlight");
            if (a.length) {
                for (var b = 0; b < a.length; b++) {
                    var c = $(a[b]);
                    if (c.data("highlight")) {
                        var d = c.html().split("/"),
                            e = this.matchMaker(d.length > 1 ? d[1].trim() : d[0], c.data("highlight").stripViet().toLowerCase());
                        e && c.html((d.length > 1 ? d[0] + "/ " : "") + e)
                    }
                }
                a.removeClass("fn-highlight")
            }
        },
        matchMaker: function(a, b) {
            var c = a.stripViet().toLowerCase(),
                d = c.indexOf(b);
            return d > -1 && a.substr(0, d) + '<strong class="mark">' + a.substr(d, b.length) + "</strong>" + a.substr(d + b.length, a.length)
        },
        replaceUrlParam: function(a) {
            var b, c, d = a.attr("href"),
                e = a.data("param"),
                f = a.data("value");
            if ((!d || d.length < 10) && (d = location.href), "genre" == e && ("-1" != d.indexOf("?genre=") && (d = d.replace(/genre=[0-9]&/g, "?"), d = d.replace(/genre=[0-9]/g, "")), "-1" != d.indexOf("&genre=") && (d = d.replace(/&genre=[0-9]/g, ""))), "remove" == a.data("op")) b = new RegExp("(\\&|\\?)" + e + "=" + f), c = d.replace(b, "$1").replace("&&", "&").replace(new RegExp("\\&$"), "&");
            else if ("add" == a.data("op")) b = new RegExp("(\\&|\\?)" + e + "=" + f), b.test(d) || (c = d + (d.indexOf("?") > -1 ? "&" : "?") + e + "=" + f);
            else {
                var b = new RegExp("(\\&|\\?)(" + e + "=).*?(&|$)");
                b.test(d) ? c = f && f.length > 0 ? d.replace(b, "$1$2" + f + "$3") : d.replace(b, "$3") : "undefined" != typeof f && (c = d + (d.indexOf("?") ? "&" : "?") + e + "=" + f), c === d && (c = c + (c.indexOf("?") > 0 ? "&" : "?") + e + "=" + f)
            }
            return c = c.replace("??", "?")
        },
        setBannerOff: function(a, b) {
            MP3.BANNER_OFF = a, $.cookie("BANNER_OFF", MP3.BANNER_OFF ? 1 : 0, {
                path: "/",
                domain: "zing.vn"
            }), MP3.BANNER_OFF ? ($("._bannerAds").remove(), $(".fn-banner-off").removeClass("active").each(function() {
                $(this).html($(this).html().replace("Táº¯t", "Báº­t"))
            }), "undefined" != typeof zmp3Player && "undefined" != typeof zmp3Player.player && "undefined" != typeof zmp3Player.player.removeTextAd && zmp3Player.player.removeTextAd()) : b && location.reload()
        },
        showMsg: function(a, b, c) {
            b = 0 == b ? "success" : "error", c || (c = 5e3);
            var d = $("#msgBox .fn-item")[0].cloneNode(!0);
            $("#msgBox").append(d), $(d).removeAttr("id").addClass(b).removeClass("none"), $(".fn-content", d).html(a), setTimeout(function() {
                $(d).fadeOut("slow", function() {
                    $(d).remove()
                })
            }, c)
        },
        confirm: function(a, b, c) {
            var d = $("#confirmBox .fn-item")[0].cloneNode(!0);
            $("#confirmBox").append(d), $(d).removeAttr("id").removeClass("none"), $(".fn-title", d).html(a), $(".fn-content", d).html(b), $(".fn-ok", d).click(function() {
                return $(d).remove(), $.isFunction(c) && c(!0), !1
            }), $(".fn-close", d).click(function() {
                return $(d).remove(), $.isFunction(c) && c(!1), !1
            })
        },
        sidebar: function() {
            var a = $(".fn-sidebar-fixed");
            if (a.length > 0) {
                var b = $(window).scrollTop(),
                    c = 0,
                    d = $(window).height(),
                    e = $(".quick-link").height(),
                    f = a.siblings("div").offset().top;
                b < f + e ? a.css("margin-top", b > 20 ? 20 - b : b + "px") : (a.css("margin-top", 20 - f + "px"), $("footer").offset().top - b < d && (c = $("footer").height() + 20 + e));
                for (var g = $(".fn-scrollbar", a), h = 0; h < g.length; h++) {
                    var i = $(g[h]),
                        j = c + i.offset().top - b;
                    i.height(d - j - 30 + "px")
                }
            }
        },
        buildItem: function(a, b, c) {
            var d = (c ? c : "song") + b.id;
            $(a).attr("id", d).data("id", b.id).data("code", b.code || 0).removeClass("none"), $(a).attr("data-id", b.id), $(a).attr("data-code", b.code || 0), $(".fn-link", a).attr("href", b.link).attr("title", b.name + " - " + b.artist), $(".fn-name", a).html(b.name), b.video_link ? $(".fn-video_link", a).attr("href", b.video_link).attr("title", "Xem MV " + b.name + " - " + b.artist) : $(".fn-video_link", a).remove();
            var e = $(".fn-artist", a);
            $(".fn-artist_list", a).empty();
            for (var f in b.artist_list) {
                var g = e[0].cloneNode(!0);
                $(g).empty().append('<a href="' + b.artist_list[f].link + '" title="' + (b.artist_list.length < 2 ? b.artist : b.artist_list[f].name) + '">' + b.artist_list[f].name + "</a>"), $(".fn-artist_list", a).append(g), parseInt(f) < b.artist_list.length - 1 && $(".fn-artist_list", a).append("<span>, </span>")
            }
            return $(".fn-thumb", a).attr("src", MP3.IMG_URL + b.thumb), $(".fn-addto", a).length && ($(".fn-dlsong", a).data("item", "#" + d), $(".fn-addto", a).data("item", "#" + d), $(".fn-share", a).data("item", "#" + d).attr("href", MP3.MP3_URL + b.link)), a
        },
        getContentWidth: function() {
            return $(".wrap-body .wrap-content").width()
        },
        followInit: function() {
            var a = $(".fn-followed");
            if (a.length > 0) {
                for (var b = [], c = [], d = [], e = 0; e < a.length; e++) $(a[e]).data("id") ? b.push($(a[e]).data("id")) : $(a[e]).data("rid") ? c.push($(a[e]).data("rid")) : $(a[e]).data("uid") && d.push($(a[e]).data("uid"));
                $.get("/xhr/artist/get-follow", {
                    ids: b.join(","),
                    rids: c.join(","),
                    uids: d.join(",")
                }, function(b) {
                    if (b.data)
                        for (var c = 0; c < a.length; c++) {
                            var d = $(a[c]).data("id") || $(a[c]).data("rid") || $(a[c]).data("uid"),
                                e = b.data[d];
                            e >= 0 && $(a[c]).html(zmp3Number.format(e))
                        }
                }), MP3.ACCOUNT_ID && $.get("/xhr/mydata/get-favartist", function(a) {
                    if (a.data)
                        for (var b = 0; b < a.data.length; b++) {
                            var c = $(".fn-follow[data-id=" + a.data[b].id + "]");
                            if (c.length > 0) {
                                var d = $(".fn-rmitem", c.parent());
                                d.length > 0 ? (c.addClass("none"), d.removeClass("none")) : c.addClass("active")
                            }
                        }
                }), $(".fn-follow").click(function() {
                    var a = $(this);
                    return zmp3Login.show(function() {
                        var b = $(".fn-followed[data-id=" + a.data("id") + "]");
                        a.hasClass("active") ? zmp3SongTool.removeItem(a, function(c) {
                            a.removeClass("active");
                            var d = parseInt(b.html());
                            d > 0 && b.html(d - 1)
                        }) : $.post("/xhr/mydata/follow", a.data(), function(b) {
                            if (b.data) {
                                a.addClass("active"), $(".fn-followed[data-id=" + a.data("id") + "]").html(b.data.total);
                                var c = $(".fn-rmitem", a.parent());
                                c.length > 0 ? (a.addClass("none"), c.removeClass("none")) : a.addClass("active")
                            }
                        })
                    }), !1
                })
            }
            this.ufollowInit()
        },
        ufollowInit: function() {
            var a = $(".fn-ufollowed");
            if (a.length > 0) {
                for (var b = [], e = 0; e < a.length; e++) $(a[e]).data("id") && b.push($(a[e]).data("id"));
                $.get("/xhr/follow/get-ufollow-num", {
                    ids: b.join(",")
                }, function(b) {
                    if (b.data)
                        for (var c = 0; c < a.length; c++) {
                            var d = $(a[c]).data("id"),
                                e = b.data[d];
                            e >= 0 && $(a[c]).html(e)
                        }
                }), MP3.ACCOUNT_ID && $.get("/xhr/mydata/get-ufollow-list", function(a) {
                    if (a.data)
                        for (var b = 0; b < a.data.length; b++) {
                            var c = $(".fn-ufollow[data-id=" + a.data[b].id + "]");
                            if (c.length > 0) {
                                var d = $(".fn-rmitem", c.parent());
                                d.length > 0 ? (c.addClass("none"), d.removeClass("none")) : c.addClass("active")
                            }
                        }
                }), $(".fn-ufollow").click(function() {
                    var a = $(this);
                    return zmp3Login.show(function() {
                        var b = $(".fn-ufollowed[data-id=" + a.data("id") + "]");
                        a.hasClass("active") ? zmp3SongTool.removeItem(a, function(c) {
                            a.removeClass("active");
                            var d = parseInt(b.html());
                            d > 0 && b.html(d - 1)
                        }) : $.post("/xhr/mydata/follow", a.data(), function(b) {
                            if (b.data) {
                                a.addClass("active"), $(".fn-ufollowed[data-id=" + a.data("id") + "]").html(b.data.total);
                                var c = $(".fn-rmitem", a.parent());
                                c.length > 0 ? (a.addClass("none"), c.removeClass("none")) : a.addClass("active")
                            }
                        })
                    }), !1
                })
            }
        },
        showHide: function(a) {
            a.hasClass("none") ? a.removeClass("none") : a.addClass("none")
        },
        profile: function(a) {
            $.get("http://mp3.zing.vn/xhr/mydata/get-profile", {
                is_login: a ? 1 : 0
            }, function(b) {
                zmp3UI.buildInfo(b, a)
            }, "json")
        },
        buildInfo: function(a, b) {
            if (a.userid || a.zaloid) MP3.ACCOUNT_NAME = a.username, MP3.ACCOUNT_ID = a.userid, MP3.ZALO_ID = a.zaloid, MP3.DISPLAY_NAME = a.name, $("a.fn-my-channel").attr("href", $("a.fn-my-channel").attr("href") + a.zalousername), $("#userBox a.fn-profile").attr("href", "http://me.zing.vn/u/" + a.username), $("#userBox a.fn-logout").attr("href", a.logout), $(".fn-userbox").removeClass("none"), $(".fn-guestbox").remove(), $("#loginBox").remove(), zmp3UI.bodyMask(0), $("#userBox").append('<i class="fn_zme_info" style="display: none;" data_uid="' + a.userid + '" data-thumb="#userBox .fn-thumb" data-thumbsize="120"></i>'), a.is_vip ? ((null == $.cookie("BANNER_OFF") || b) && zmp3UI.setBannerOff(!0), MP3.VIP = 1, $(".fn-vip").removeClass("none"), $(".fn-notvip").addClass("none"), a.noti_flag && (zmp3UI.bodyMask(1), $("#loginNotiBox .fn-dname").html(a.name), $("#loginNotiBox").removeClass("none"))) : (zmp3UI.setBannerOff(!1, !1), $(".fn-vip").addClass("none"), $(".fn-notvip").removeClass("none"), MP3.VIP = 0), a.is_mod && (MP3.MOD = 1, $(".fn-mod").removeClass("none")), ZMEInfo.renderZMEAvatar(), b && $.isFunction(zmp3Login.succCallback) && zmp3Login.succCallback();
            else if ($(".fn-guestbox").removeClass("none"), $(".fn-userbox").addClass("none"), $(".fn-vip").addClass("none"), $(".fn-notvip").removeClass("none"), b) $.getJSON("http://me.zing.vn/cp?url=" + MP3.MP3_URL + "&callback=?", function() {
                location.href = location.href
            }), setTimeout(function() {
                location.href = location.href
            }, 1e3);
            else if ("undefined" != typeof $.cookie("__vngauth")) {
                var c = parseInt($.cookie("__vngauth"));
                !isNaN(c) && c < 2 && ($.cookie("__vngauth", c + 1), location.href = "http://id.mp3.zing.vn/zingsession?type=ss&f=3U9FGM10004&cbUrl=" + encodeURIComponent(location.href))
            }
        }
    },
    zmp3Storage = {
        getParam: function(a, b) {
            return "undefined" != typeof localStorage && null != localStorage.getItem(a) ? localStorage.getItem(a) : b
        },
        setParam: function(a, b) {
            return "undefined" != typeof localStorage ? localStorage.setItem(a, b) : null
        }
    },
    zmp3Comment = {
        timer: null,
        delay: 0,
        type: "",
        id: "",
        tpl: null,
        dynamic: function(a) {
            var b = $(a).data();
            $(a).remove(), b.id && b.type && this.init(b.id, b.type)
        },
        remove: function(a) {
            $.post(MP3.INTER_URL + "/comment/remove?callback=?", {
                oid: this.id,
                cid: a.data("id"),
                type: this.type
            }, function(b) {
                a.remove(), zmp3UI.showMsg(b.note, b.is_error ? 1 : 0)
            }, "json")
        },
        pagination: function(a) {
            a.removeClass("none");
            var d, b = parseInt(.999 + a.data("total")),
                c = parseInt(a.data("page")),
                e = 5;
            $(".fn-page", a).addClass("none"), c < b ? ($(".fn-last", a).removeClass("none").data("page", b), $(".fn-next", a).removeClass("none").data("page", c + 1)) : c = b, c > 1 && (e = c > 2 ? c + 2 : c + 3, $(".fn-first", a).removeClass("none").data("page", 1), $(".fn-prev", a).removeClass("none").data("page", c - 1)), d = c - 2, b < e && (d -= e - b, e = b), d < 1 && (d = 1);
            for (var f = 1; f <= 5 & d <= e; f++, d++) $(".fn-page" + f, a).removeClass("none"), d == c ? $(".fn-page" + f, a).addClass("active").data("page", d).html(d) : $(".fn-page" + f, a).removeClass("active").data("page", d).html(d)
        },
        init: function(a, b) {
            this.id = a, this.type = b, tpl = document.getElementById("tplComment").cloneNode(!0), $(tpl).removeClass("none"), $("#tplComment").remove(), $("#pagination .fn-page").click(function() {
                return $(this).hasClass("active") || zmp3Comment.load($(this).data("page")), !1
            }), $("form.fn-comment").submit(function() {
                return zmp3Comment.add(this), !1
            }), this.load(1)
        },
        load: function(a, b) {
            var c = "#commentList .fn-page";
            b && $(c + a).length > 0 && $(c + a).remove(), $(c + a).length > 0 ? ($(c).addClass("none"), $(c + a).removeClass("none"), $("#pagination").data("page", a), this.pagination($("#pagination"))) : $.getJSON(MP3.INTER_URL + "/comment/get-list?callback=?", {
                op: "get",
                type: this.type,
                id: this.id.toUpperCase(),
                page: a,
                length: 10
            }, function(b) {
                $("#commentCounter").html(b.total), b.data && zmp3Comment.build(a, b)
            })
        },
        build: function(a, b) {
            $("#commentList .fn-page").addClass("none");
            for (var c in b.data) {
                var d = tpl.cloneNode(!0),
                    e = b.data[c],
                    f = "zmp3" + e.commentId;
                $(d).attr("id", f).data("id", e.commentId), $(d).addClass("fn-page fn-page" + a), $(".fn-content", d).html(e.content), $(".fn-time", d).html(zmp3DateTime.format(e.time)), $(".fn-delete", d).data("item", "#" + f).click(function() {
                    return zmp3Comment.remove($($(this).data("item"))), !1
                }), $(d).append('<i class="fn_zme_info fn' + e.ownerId + '" style="display: none;" data-ref=".fn' + e.ownerId + '" data_uid="' + e.ownerId + '" data-thumb="#' + f + ' .fn-thumb" data-dname="#' + f + ' .fn-dname" data-link="#' + f + ' .fn-link"></i>'), $("#commentList").append(d)
            }
            b.total > 10 && (b.total > 200 && (b.total = 200), $("#pagination").data("total", b.total / 10).data("page", a), this.pagination($("#pagination"))), ZMEInfo.renderZMEAvatar()
        },
        add: function(a) {
            if (this.delay > 0) return !1;
            if (zmp3Login.show()) {
                var b = a.content.value;
                b = b.trim(), a.content.value = b, b === a.content.defaultValue ? zmp3UI.showMsg("Báº¡n cáº§n nháº­p ná»™i dung bÃ¬nh luáº­n.", 1) : b.length < 50 ? zmp3UI.showMsg("Ná»™i dung bÃ¬nh luáº­n cáº§n Ã­t nháº¥t 50 kÃ½ tá»±.", 1) : b.length > 900 ? zmp3UI.showMsg("Ná»™i dung bÃ¬nh luáº­n chá»‰ cho phÃ©p tá»‘i Ä‘a 900 kÃ½ tá»±.", 1) : zmp3Comment.loading || (zmp3Comment.loading = !0, $.post(MP3.INTER_URL + "/comment/add-v4?callback=?", $(a).serialize(), function(b) {
                    zmp3Comment.loading = !1, b.is_error || (b.data && b.data.length > 0 && zmp3Comment.build(1, b), a.content.value = "", zmp3Comment.countdown(a)), zmp3UI.showMsg(b.msg, b.is_error ? 1 : 0), zmp3Comment.charsCounter(a)
                }, "json"))
            }
        },
        charsCounter: function(a) {
            var b = a.content.value.length;
            b > 0 && 32 === a.content.value.charCodeAt(b - 1) && b--
        },
        countdown: function(a) {
            this.delay = 15, $(a).addClass("disabled"), $(a.btnSubmit).html("Vui lÃ²ng chá» 15 giÃ¢y"), this.timer = setInterval(function() {
                zmp3Comment.delay > 0 ? ($(a.btnSubmit).html("Vui lÃ²ng chá» " + zmp3Comment.delay + " giÃ¢y"), zmp3Comment.delay--) : ($(a).removeClass("disabled"), $(a.btnSubmit).html("BÃ¬nh luáº­n"), clearInterval(zmp3Comment.timer))
            }, 1e3)
        }
    },
    zmp3Toolbar = {
        init: function() {
            if ($(window).width() > 1300) {
                var a = $("#toolbar");
                $(".fn-toolbar", a).click(function() {
                    var b = this;
                    return zmp3Login.show(function() {
                        if ($(b).hasClass("active")) $("#toolbar .fn-box").addClass("none"), $(".fn-toolbar", a).removeClass("active"), zmp3UI.bodyMask(0);
                        else switch (zmp3UI.bodyMask(1), $(".fn-toolbar", a).removeClass("active"), $(b).addClass("active"), $(b).data("box")) {
                            case "playlist":
                                zmp3Toolbar.playlistbox();
                                break;
                            case "fav":
                                zmp3Toolbar.favbox();
                                break;
                            case "his":
                                zmp3Toolbar.hisbox();
                                break;
                            case "follow":
                                zmp3Toolbar.followbox()
                        }
                    }), !1
                }), $(".fn-box[data-box=fav] .fn-group", a).click(function() {
                    return zmp3Toolbar.favbox($(this).data("group")), $(".fn-group", a).removeClass("active"), $(this).addClass("active"), !1
                }), $(".fn-box[data-box=follow] .fn-group", a).click(function() {
                    return zmp3Toolbar.followbox($(this).data("group")), $(".fn-group", a).removeClass("active"), $(this).addClass("active"), !1
                }), $("#toolbar .fn-box").each(function() {
                    var a = this;
                    onBlurBind(this, function() {
                        var b = $("#toolbar .fn-toolbar[data-box=" + $(a).data("box") + "]");
                        b.hasClass("active") && (b.removeClass("active"), zmp3UI.bodyMask(0)), $(a).addClass("none")
                    })
                });
                var b = $(".box-scroll", a);
                b.length > 0 && (b.css("max-height", $(window).height() - 80 + "px"), b.mCustomScrollbar({
                    scrollInertia: 0,
                    scrollbarPosition: "outside",
                    autoHideScrollbar: !0,
                    autoExpandScrollbar: !0,
                    mouseWheel: {
                        preventDefault: !0
                    }
                }))
            }
        },
        playlistbox: function() {
            var a = $("#toolbar"),
                b = $(".fn-box[data-box=playlist]");
            zmp3Login.show(function() {
                var a = $(".fn-list", b);
                a.data("time") || (a.data("time", (new Date).getTime()), $.get(MP3.MP3_URL + "/xhr/mydata/get-playlist", function(c) {
                    if (c.data) {
                        var d = $(".fn-item", a)[0].cloneNode(!0);
                        for (x in c.data) {
                            var e = c.data[x];
                            if (e.id.length > 2) {
                                var f = d.cloneNode(!0);
                                $(".fn-name", f).html(e.name), e.artist && $(".fn-artist", f).html(e.artist.length > 60 ? "Nhiá»u nghá»‡ sÄ©" : e.artist), $(".fn-link", f).attr("href", MP3.MP3_URL + e.link), $(".fn-edit-link", f).attr("href", e.edit_link), $(".fn-thumb", f).attr("src", MP3.IMG_URL + e.thumb).attr("alt", e.name), $(".fn-play", f).length > 0 && $(".fn-play", f).html(e.play), $(f).removeClass("none"), a.append(f)
                            }
                        }
                        $(".fn-total", b).html(c.total)
                    }
                }))
            }), $(".fn-box", a).addClass("none"), b.removeClass("none")
        },
        favbox: function(a) {
            a || (a = "song");
            var b = $("#toolbar"),
                c = $(".fn-box[data-box=fav]", b),
                d = $(".fn-list[data-group=" + a + "]", c);
            zmp3Login.show(function() {
                d.data("time") || (d.data("time", (new Date).getTime()), $.get(MP3.MP3_URL + "/xhr/mydata/get-fav" + a, function(a) {
                    if (a.data) {
                        var b = $(".fn-item", d)[0].cloneNode(!0);
                        for (x in a.data) {
                            var c = a.data[x];
                            if (c.id.length > 2) {
                                var e = b.cloneNode(!0);
                                $(".fn-name", e).html(c.name), c.artist && $(".fn-artist", e).html(c.artist.length > 60 ? "Nhiá»u nghá»‡ sÄ©" : c.artist), $(".fn-link", e).attr("href", MP3.MP3_URL + c.link), $(".fn-thumb", e).attr("src", MP3.IMG_URL + c.thumb).attr("alt", c.name), $(e).removeClass("none"), d.append(e)
                            }
                        }
                    }
                }))
            }), $(".fn-list", c).addClass("none"), $(".fn-box", b).addClass("none"), c.removeClass("none"), d.removeClass("none")
        },
        followbox: function(a) {
            a || (a = "artist");
            var b = $("#toolbar"),
                c = $(".fn-box[data-box=follow]", b),
                d = $(".fn-list[data-group=" + a + "]", c);
            zmp3Login.show(function() {
                d.data("time") || (d.data("time", (new Date).getTime()), $.get(MP3.MP3_URL + "/xhr/mydata/get-follow-list?type=" + a, function(b) {
                    if (b.data) {
                        var c = $(".fn-item", d)[0].cloneNode(!0);
                        for (x in b.data) {
                            var e = b.data[x];
                            if (e.id.length > 2) {
                                var f = c.cloneNode(!0),
                                    g = a + "follow" + e.id;
                                $(f).attr("id", g), $(".fn-name", f).html(e.name), $(".fn-link", f).attr("href", MP3.MP3_URL + e.link), $(".fn-thumb", f).attr("src", MP3.IMG_URL + e.thumb).attr("alt", e.name), $(".fn-total", f).html(zmp3Number.format(e.total)), $(f).data("type", a).data("id", e.id).data("name", e.name), $(".fn-remove", f).data("item", "#" + g).click(function() {
                                    return zmp3SongTool.removeItem($($(this).data("item"))), !1
                                }), $(f).removeClass("none"), d.append(f)
                            }
                        }
                    }
                }))
            }), $(".fn-list", c).addClass("none"), $(".fn-box", b).addClass("none"), c.removeClass("none"), d.removeClass("none")
        },
        hisbox: function(a) {
            a || (a = "play");
            var b = $("#toolbar"),
                c = $(".fn-box[data-box=his]", b),
                d = $(".fn-list[data-group=" + a + "]", c);
            zmp3Login.show(function() {
                d.data("time") || (d.data("time", (new Date).getTime()), $.get(MP3.MP3_URL + "/xhr/mydata/get-history", {
                    start: 0,
                    length: 20
                }, function(a) {
                    if (a.data) {
                        var b = $(".fn-item", d)[0].cloneNode(!0);
                        for (x in a.data) {
                            var c = a.data[x];
                            if (c.id.length > 2) {
                                var e = b.cloneNode(!0),
                                    f = c.type,
                                    g = "history" + c.id + c.time;
                                $(e).attr("id", g).data(c).data("from", "history"), $(".fn-name", e).html(c.name), $(".fn-artist", e).html(c.artist.length > 60 ? "Nhiá»u nghá»‡ sÄ©" : c.artist);
                                var h = c.artist;
                                switch ($(".fn-" + c.type, e).removeClass("none"), c.type) {
                                    case "video":
                                        f = "video-clip";
                                        break;
                                    case "playlist":
                                        h = c.username;
                                        break;
                                    case "song":
                                        f = "bai-hat"
                                }
                                $(".fn-link", e).attr("title", c.name + " - " + c.artist).attr("href", MP3.MP3_URL + "/" + f + "/" + c.name.stripViet("-") + "-" + h.stripViet("-") + "/" + c.id + ".html"), $(".fn-thumb", e).attr("src", MP3.IMG_URL + c.thumb).attr("alt", c.name), $(".fn-remove", e).data("item", "#" + g).click(function() {
                                    var a = $($(this).data("item")),
                                        b = a.data("order");
                                    return zmp3SongTool.removeItem(a, function(a) {
                                        if (a.code < 1)
                                            for (var c = d.children(".fn-item"), e = 0; e < c.length; e++) {
                                                var f = $(c[e]).data("order");
                                                b < f && $(c[e]).data("order", f - 1)
                                            }
                                    }), !1
                                }), $(e).removeClass("none"), d.append(e)
                            }
                        }
                    }
                }))
            }), $(".fn-list", c).addClass("none"), $(".fn-box", b).addClass("none"), c.removeClass("none"), d.removeClass("none")
        }
    },
    zmp3Common = {
        trackPageview: function(a) {
            "undefined" != typeof ga && ga("send", "pageview", a), "undefined" != typeof ZA && ZA.trackPageview(a)
        },
        tracking: function(a) {
            "undefined" != typeof ga && ga("mp3.send", "pageview", a)
        },
        trackingOn: function(a, b, c) {
            b || (b = "");
            var d = a.attr("suglog"),
                e = a.attr("href");
            if (e) {
                var f = a.attr("tracking");
                e.search(MP3.MP3_URL) != -1 && (e = "/" + e.replace(MP3.MP3_URL, "")), f && (e += "?" + f), zmp3Common.tracking(b + e)
            }
            return !d || ($.get(MP3.LOG_URL + d), c && (c.ctrlKey || c.button > 0) || setTimeout(function() {
                location.href = a.attr("href")
            }, 400), !1)
        },
        trackingDoneTrack: function(a, b, c, d) {
            try {
                var e = !1;
                if ("undefined" != typeof ga && c.totalTrack >= a) {
                    switch (b) {
                        case 0:
                        case 2:
                            c.currentTrack == a - 1 && c.nextTrack == a && (e = !0);
                            break;
                        case 1:
                        case 3:
                            c.totalPlayed == a + 1 && (e = !0);
                            break;
                        default:
                            d && console.log("Not mapping any repeat mode.")
                    }
                    e && ga("send", "event", {
                        eventCategory: "SaleReport",
                        eventAction: "DoneTrack" + a,
                        eventLabel: b
                    })
                } else d && console.log("ga <google analytics> is undefined.")
            } catch (a) {
                d && console.log(a)
            }
        }
    },
    zmp3FeedBack = {
        url: "/xhr/feed-back",
        flVer: "",
        frm: "",
        init: function() {
            $("._feedBackBtn").click(function(a) {
                return zmp3FeedBack.displayForm(), !1
            })
        },
        displayForm: function() {
            zmp3Login.show(zmp3FeedBack.displayForm)
        },
        hOk: function(a) {},
        post: function(a, b, c, d) {
            zmp3FeedBack.flVer.length < 1 ? (zmp3FeedBack.flVer = Browser.getFlashVersion(), zmp3FeedBack.post(a, b, c, d)) : $.post(zmp3FeedBack.url, {
                subject: a,
                content: b,
                link: c,
                flVer: zmp3FeedBack.flVer,
                browser: navigator.userAgent
            }, function(a) {
                return d(a)
            }, "json")
        }
    },
    zmp3BlockChart = {
        dynamic: function(a) {
            var b = $(a).data();
            $(a).remove(), this.load(b), this.init()
        },
        init: function() {
            $(".fn-chart").click(function() {
                if (!$(this).hasClass("active")) {
                    var a = $(this).data();
                    zmp3BlockChart.load(a)
                }
                return !1
            })
        },
        load: function(a) {
            var b = a.group ? a.group : "_chart_" + a.type,
                c = $("#" + b + a.id);
            $('.fn-chart[data-group="' + a.group + '"]').removeClass("active");
            var d = $('.fn-chart[data-id="' + a.id + '"]').addClass("active");
            if ($("a.fn-detail_link." + b + a.id).attr("href", d.attr("href")).attr("title", d.attr("title")), $(".fn-item", c).length > 0 && $(".fn-item", c).length < 4) {
                var e = $(".fn-item", c)[0].cloneNode(!0),
                    f = $(".fn-first", c)[0].cloneNode(!0);
                $(".fn-item", c).remove(), $(".fn-first", c).remove(), $.getJSON("/xhr/charts", {
                    op: "get",
                    type: a.type,
                    id: a.id
                }, function(d) {
                    if (d.data) {
                        for (var g in d.data) {
                            g = parseInt(g);
                            var h = 0 === g ? f.cloneNode(!0) : e.cloneNode(!0),
                                i = d.data[g],
                                j = "chartitem" + a.type + i.id;
                            $(h).attr("id", j).data("id", i.id).data("code", i.code).data("type", a.type).removeClass("none");
                            var k = $(".fn-artist", h);
                            $(".fn-artist_list", h).empty();
                            for (var l in i.artist_list) {
                                var m = k[0].cloneNode(!0);
                                $(m).empty().append('<a href="' + i.artist_list[l].link + '" title="' + (i.artist_list.length < 2 ? i.artist : i.artist_list[l].name) + '">' + i.artist_list[l].name + "</a>"), $(".fn-artist_list", h).append(m), parseInt(l) < i.artist_list.length - 1 && $(".fn-artist_list", h).append("<span>, </span>")
                            }
                            $(".fn-order", h).addClass("rank-" + i.order).html(i.order), $(".fn-link", h).attr("href", MP3.MP3_URL + i.link).attr("title", i.name + " - " + i.artist), $(".fn-name", h).html(i.name), $(".fn-score", h).length && $(".fn-score", h).html(zmp3Number.format(i.score)), $(".fn-addto", h).length && ($(".fn-dlsong", h).data("item", "#" + j), $(".fn-addto", h).data("item", "#" + j), $(".fn-share", h).data("item", "#" + j).attr("href", MP3.MP3_URL + i.link)), $(".fn-thumb", h).length && (0 === g && (i.thumb = i.thumb.replace(/thumb\/\d+_\d+/, "")), $(".fn-thumb", h).attr("src", MP3.IMG_URL + i.thumb)), $(".fn-list", c).append(h)
                        }
                        $("." + b).addClass("none"), $("." + b + a.id).removeClass("none"), zmp3SongTool.init(), d.play_link && $("a.fn-play_link." + b + a.id).attr("href", d.play_link)
                    }
                })
            } else $("." + b).addClass("none"), $("." + b + a.id).removeClass("none")
        }
    },
    loginNoti = {
        closeCb: function() {
            $.post("/xhr/mydata/update-noti-flag")
        }
    },
    z3Log = {
        timer: null,
        urlLog1: MP3.LOG_URL + "log/index",
        urlLog2: MP3.LOG_URL + "log/mp3log",
        urlLog4: MP3.LOG_URL + "logv4/mp3log",
        urlLogv2: MP3.LOG_URL + "logv2/mp3log",
        start: function(a, b, c) {
            null !== this.timer && clearTimeout(this.timer), this.data = this.data4 = "", $.get("/xhr/log/info", {
                id: a,
                type: b
            }, function(a) {
                a.data && a.data4 && ($.getJSON(MP3.LOG_URL + "log/index?sessid=" + $.cookie("__mp3sessid") + "&callback=?"), $.getJSON(MP3.LOG_URL + "logv4/mp3log?sessid=" + $.cookie("__mp3sessid") + "&callback=?"), z3Log.timer = setTimeout(function() {
                    $.getJSON(MP3.LOG_URL + "log/mp3log?sessid=" + $.cookie("__mp3sessid") + "&data=" + a.data + "&callback=?"), $.getJSON(MP3.LOG_URL + "logv4/mp3log?sessid=" + $.cookie("__mp3sessid") + "&data=" + a.data4 + "&callback=?")
                }, 3500)), a.data && ($.getJSON(MP3.LOG_URL + "logv2/index?sessid=" + $.cookie("__mp3sessid") + "&callback=?"), z3Log.timer = setTimeout(function() {
                    $.getJSON(MP3.LOG_URL + "logv2/mp3log?sessid=" + $.cookie("__mp3sessid") + "&data=" + a.data + "&callback=?")
                }, 35e3))
            })
        },
        writeLog: function(a, b) {
            a && $.getJSON(b + "?sessid=" + $.cookie("__mp3sessid") + "&callback=?", "", "dataType:text")
        },
        writeLogInfo: function(a, b) {
            if (b || (b = this.urlLog2), a) try {
                $.getJSON(b + "?sessid=" + $.cookie("__mp3sessid") + "&data=" + a + "&callback=?", "", "dataType:text")
            } catch (a) {}
        },
        getUid: function() {
            return "xxxxxxxxxxxx".replace(/[x]/g, function(a) {
                var b = 16 * Math.random() | 0,
                    c = "x" == a ? b : 3 & b | 8;
                return c.toString(16)
            }).toUpperCase()
        }
    };
if ("undefined" == typeof $.cookie("__mp3sessid") && $.cookie("__mp3sessid", z3Log.getUid(), {
        domain: "mp3.zing.vn",
        path: "/"
    }), MP3.LOG_INFO) {
    var type = 0,
        fromId = "",
        fromBox = 0,
        delay = 0,
        referrer = document.referrer,
        pattern = /[a-z0-9-]+\//gi;
    if (referrer && referrer.indexOf(MP3.MP3_URL) > -1) switch (referrer = referrer.replace(MP3.MP3_URL, ""), 0 == referrer.indexOf("/") && (referrer = referrer.substr(1)), referrer = referrer.substr(0, referrer.indexOf(".")), arr = referrer.split("/"), fromId = referrer.replace(pattern, ""), !0) {
        case 0 == referrer.indexOf("bai-hat"):
            type = 1;
            break;
        case 0 == referrer.indexOf("video-clip"):
            type = 3;
            break;
        case 0 == referrer.indexOf("album"):
        case 0 == referrer.indexOf("playlist"):
            type = 2
    }
    var lastPos = location.pathname.lastIndexOf("/"),
        arrPiece = location.pathname.substring(1, lastPos).toLowerCase().split("/").slice(0, 2);
    switch (path = arrPiece.join("/"), arrPiece[0]) {
        case "bai-hat":
        case "album":
        case "playlist":
        case "video-clip":
            delay = 35e3;
            break;
        default:
            delay = 0
    }
    MP3.LOG_INFO += "&fromId=" + fromId + "&type=" + type + "&fromBox=" + fromBox, delay > 0 ? (z3Log.writeLog(MP3.LOG_INFO, z3Log.urlLog1), z3Log.writeLog(MP3.LOG_INFO, z3Log.urlLogv2), setTimeout("z3Log.writeLogInfo(MP3.LOG_INFO)", delay), setTimeout("z3Log.writeLogInfo(MP3.LOG_INFO4, z3Log.urlLog4)", delay), setTimeout("z3Log.writeLogInfo(MP3.LOG_INFO, z3Log.urlLogv2)", delay)) : z3Log.writeLogInfo(MP3.LOG_INFO)
}
var zmp3LogCommon = {
        mediaId: "",
        pageId: "",
        pageName: "",
        userName: "",
        userId: "",
        zaloId: "",
        constants: {
            HOME_PAGE_NAME: "home",
            TOPIC_PAGE_NAME: "chu-de",
            SONG_PAGE_NAME: "bai-hat",
            VIDEO_PAGE_NAME: "video-clip",
            ALBUM_PAGE_NAME: "album",
            PLAYLIST_PAGE_NAME: "playlist",
            SEARCH_PAGE_NAME: "tim-kiem"
        },
        getMediaId: function() {
            return this.setMediaId(), this.mediaId
        },
        setMediaId: function() {
            this.isValidParam(zmp3HTML5) && this.isValidParam(zmp3HTML5.currentItem) && this.isValidParam(zmp3HTML5.currentItem.id) ? this.mediaId = zmp3HTML5.currentItem.id : this.mediaId = ""
        },
        getPageId: function() {
            return zmp3LogCommon.isValidParam(this.pageId) || this.setPageId(), this.pageId
        },
        setPageId: function() {
            var a = window.location.href,
                b = a.split("/");
            if (b.length >= 6) {
                var c = b[5],
                    d = c.substring(0, 8);
                zmp3LogCommon.isValidParam(d) && (this.pageId = d)
            }
        },
        getPageName: function() {
            return this.isValidParam(this.pageName) || this.setPageName(), this.pageName
        },
        setPageName: function() {
            try {
                var a = window.location.href,
                    b = window.location.origin + "/";
                if (a === b) this.pageName = zmp3LogCommon.constants.HOME_PAGE_NAME;
                else {
                    var c = a.split("/");
                    zmp3LogCommon.isValidParam(c) && (c.length >= 4 && (this.pageName = c[3]), 4 === c.length && (this.pageName = this.pageName.substring(0, this.pageName.length - 5)))
                }
            } catch (a) {
                console.log("Exception at zmp3LogCommon.setPageName: ", a)
            }
        },
        getUsername: function() {
            return this.isValidParam(this.username) || this.setUsername(), this.username
        },
        setUsername: function() {
            this.isValidParam(MP3) && this.isValidParam(MP3.ACCOUNT_NAME) ? this.username = MP3.ACCOUNT_NAME : this.username = ""
        },
        getUserId: function() {
            return this.isValidParam(this.userId) || this.setUserId(), this.userId
        },
        setUserId: function() {
            this.isValidParam(MP3) && this.isValidParam(MP3.ACCOUNT_ID) ? this.userId = MP3.ACCOUNT_ID : this.userId = ""
        },
        getZaloId: function() {
            return this.isValidParam(this.zaloId) || this.setZaloId(), this.zaloId
        },
        setZaloId: function() {
            this.isValidParam(MP3) && this.isValidParam(MP3.ZALO_ID) ? this.zaloId = MP3.ZALO_ID : this.zaloId = ""
        },
        isValidParam: function(a) {
            if (null === a || "undefined" == typeof a) return !1;
            var b = typeof a;
            return "string" === b || "array" === b ? a.length > 0 : "number" === b ? a > 0 : !!("function" === b || "object" === b && a) && Object.keys(a).length > 0
        },
        encode: function(a) {
            if (this.isValidParam(a)) try {
                a = JSON.stringify(a), a = a.replace(/\+/g, "-"), a = a.replace(/\//g, "_"), a = a.replace(/\=/g, " ");
                var b = window.btoa(a);
                return b
            } catch (a) {
                return console.log("Exception at zmp3LogCommon.encode: ", a), ""
            }
            return ""
        },
        push: function(a, b) {
            if (this.isValidParam(a) && this.isValidParam(b)) try {
                if (!this.isValidParam(MP3) || !this.isValidParam(MP3.LOG_URL)) return null;
                var c = MP3.LOG_URL + "logv2/" + b + "?data=" + a + "&ts=" + (new Date).getTime(),
                    d = new Image;
                d.src = c
            } catch (a) {
                console.log("Exception at zmp3LogCommon.push: ", a)
            }
        }
    },
    zmp3LogListenTime = {
        listenTime: 0,
        counterListenTime: "",
        genres: "",
        artists: "",
        getGenres: function() {
            return zmp3LogCommon.isValidParam(this.genres) || this.setGenres(), this.genres
        },
        setGenres: function() {
            var a = "";
            a = $(".genre-track-log");
            var b = "";
            try {
                if (zmp3LogCommon.isValidParam(a) && a.length > 0)
                    for (var c = 0; c < a.length; c++) b += $(a[c]).attr("data-id"), c < a.length - 1 && (b += ",");
                this.genres = b
            } catch (a) {
                console.log("Exception at zmp3LogListenTime.setGenres: ", a)
            }
        },
        getArtists: function() {
            return zmp3LogCommon.isValidParam(this.artists) || this.setArtists(), this.artists
        },
        setArtists: function() {
            var a = "";
            a = $(".artist-track-log");
            var b = "";
            try {
                if (zmp3LogCommon.isValidParam(a) && a.length > 0)
                    for (var c = 0; c < a.length; c++) b += $(a[c]).attr("data-id"), c < a.length - 1 && (b += ",");
                this.artists = b
            } catch (a) {
                console.log("Exception at zmp3LogListenTime.setArtists: ", a)
            }
        },
        constants: {
            LOG_CATEGORY_LISTEN_TIME: "log-listen-time",
            CYCLE_UPDATE_LISTEN_TIME: 3e4
        },
        getListenTime: function() {
            return this.setListenTime(), this.listenTime
        },
        setListenTime: function() {
            zmp3LogCommon.isValidParam(zmp3HTML5) && zmp3LogCommon.isValidParam(zmp3HTML5.currentTime) && (this.listenTime = parseInt(zmp3HTML5.currentTime))
        },
        funcTrackLog: function() {
            if (zmp3LogCommon.isValidParam(zmp3HTML5)) {
                var a = {};
                a.pageName = zmp3LogCommon.getPageName(), a.mediaId = zmp3LogCommon.getMediaId(), a.username = zmp3LogCommon.getUsername(), a.userId = zmp3LogCommon.getUserId(), a.zaloId = zmp3LogCommon.getZaloId(), a.genres = this.getGenres(), a.artists = this.getArtists(), a.pageName !== zmp3LogCommon.constants.ALBUM_PAGE_NAME && a.pageName !== zmp3LogCommon.constants.PLAYLIST_PAGE_NAME || (a.playlistId = zmp3LogCommon.getPageId()), a.listenTime = zmp3LogListenTime.getListenTime();
                var b = zmp3LogCommon.encode(a);
                zmp3LogCommon.isValidParam(b) && zmp3LogCommon.push(b, zmp3LogListenTime.constants.LOG_CATEGORY_LISTEN_TIME)
            }
        },
        handlingListenTimeLog: function() {
            try {
                null !== this.counterListenTime && window.clearInterval(this.counterListenTime), this.funcTrackLog(), this.counterListenTime = setInterval(function() {
                    zmp3HTML5.isPaused || zmp3LogListenTime.funcTrackLog()
                }, this.constants.CYCLE_UPDATE_LISTEN_TIME)
            } catch (a) {
                console.log("Exception at zmp3LogListenTime.handlingListenTimeLog: ", a)
            }
        }
    },
    zmp3LogRecommend = {
        order: 1,
        recIds: [],
        posOfLastItem: 0,
        constants: {
            LOG_CATEGORY_RECOMMEND: "log-recommend"
        },
        getOrder: function() {
            return this.order
        },
        increaseOrder: function() {
            this.order++
        },
        getRecIds: function() {
            return this.recIds
        },
        setRecIds: function(a) {
            "" != a && this.recIds.push(a)
        },
        getPosOfLastItem: function() {
            return this.posOfLastItem
        },
        setPosOfLastItem: function(a) {
            a > 0 && (this.posOfLastItem = a)
        },
        genRecIds: function() {
            var a = $(".widget-content > ul > li");
            if ("object" == typeof a) {
                for (var b = this.getPosOfLastItem(), c = b; c < a.length; c++) this.setRecIds($(a[c]).attr("data-id"));
                this.setPosOfLastItem(a.length)
            }
        },
        reset: function() {
            this.recIds = []
        },
        handlingRecomendLog: function() {
            try {
                var a = {};
                a.order = this.getOrder(), a.pageName = zmp3LogCommon.getPageName(), a.mediaId = zmp3LogCommon.getPageId(), a.username = zmp3LogCommon.getUsername(), a.userId = zmp3LogCommon.getUserId(), a.zaloId = zmp3LogCommon.getZaloId(), this.genRecIds(), arrRecIds = this.getRecIds(), a.recIds = arrRecIds.join();
                var b = zmp3LogCommon.encode(a);
                zmp3LogCommon.isValidParam(b) && zmp3LogCommon.push(b, this.constants.LOG_CATEGORY_RECOMMEND), this.increaseOrder(), this.reset()
            } catch (a) {
                console.log("Exception at zmp3LogRecommend.handlingRecomendLog: ", a)
            }
        }
    };
if ("undefined" != typeof zmp3LogRecommend && null !== zmp3LogRecommend && "function" == typeof zmp3LogRecommend.handlingRecomendLog) try {
    "undefined" != typeof zmp3LogCommon && null !== zmp3LogCommon && (zmp3LogCommon.getPageName() !== zmp3LogCommon.constants.SONG_PAGE_NAME && zmp3LogCommon.getPageName() !== zmp3LogCommon.constants.VIDEO_PAGE_NAME && zmp3LogCommon.getPageName() !== zmp3LogCommon.constants.ALBUM_PAGE_NAME && zmp3LogCommon.getPageName() !== zmp3LogCommon.constants.PLAYLIST_PAGE_NAME || zmp3LogRecommend.handlingRecomendLog())
} catch (a) {
    console.log("Exception at zmp3LogRecommend.handlingRecomendLog: ", a)
}
var zmp3LogRef = {
    redirectPageName: "",
    redirectMediaId: "",
    order: "",
    constants: {
        LOG_CATEGORY_REF: "log-ref",
        SELECT_SESSION_SEARCH_SUGGEST: "#sugSong, #sugAlbum, #sugVideo",
        SESSION_NAME_SEARCH_SUGGEST: "search-suggest",
        SELECT_SESSION_PLAY_RECOMMEND: "#songRec, #videoRec, #playlistRec",
        SESSION_NAME_SONG_RECOMMEND: "song-recommend",
        SESSION_NAME_VIDEO_RECOMMEND: "video-recommend",
        SESSION_NAME_ALBUM_RECOMMEND: "album-recommend",
        SELECT_SESSION_ALBUM_RELATIVE: "#albumOfArtist",
        SESSION_NAME_ALBUM_RELATIVE: "album-relative",
        SELECT_SESSION_VIDEO_RELATIVE: "#videoOfArtist",
        SESSION_NAME_VIDEO_RELATIVE: "video-relative",
        SELECT_SESSION_PLAYLIST_COLLECTION: "#albumCollection",
        SESSION_NAME_PLAYLIST_COLLECTION: "playlist-collect",
        SELECT_SESSION_PLAYLIST_ITEMS_ICON_REDIRECT: "#playlistItems .direct",
        SESSION_NAME_PLAYLIST_ITEMS_ICON_REDIRECT: "playlist-items-icon-redirect",
        SELECT_SESSION_PLAY_ICON_JUMP_MV: "#html5player .zm-jump-mv",
        SESSION_NAME_PLAY_ICON_JUMP_MV: "icon-jump-mv",
        SELECT_SESSION_PLAYLIST_ITEMS_ICON_JUMP_MV: "#playlistItems .video",
        SESSION_NAME_PLAYLIST_ITEMS_ICON_JUMP_MV: "pl-icon-jump-mv",
        SELECT_SESSION_HOME_SLIDES_BANNER: "#feature",
        SESSION_NAME_HOME_SLIDES_BANNER: "home-banner",
        SELECT_SESSION_HOME_ALBUM_HOT: "#albumHot",
        SESSION_NAME_HOME_ALBUM_HOT: "home-album-hot",
        SELECT_SESSION_HOME_PLAYLIST_COLLECTION: "#albumCollection",
        SESSION_NAME_HOME_PLAYLIST_COLLECTION: "home-playlist-collection",
        SELECT_SESSION_HOME_VIDEO_HOT: "#videohot",
        SESSION_NAME_HOME_VIDEO_HOT: "home-video-hot",
        SELECT_SESSION_HOME_VIET_HOT_SONG: "#viet-hot-song",
        SESSION_NAME_HOME_VIET_HOT_SONG: "home-viet-hot",
        SELECT_SESSION_HOME_VIET_NEW_SONG: "#viet-new-song",
        SESSION_NAME_HOME_VIET_NEW_SONG: "home-viet-new",
        SELECT_SESSION_HOME_CHART_VIET_SONG: "#_chart_songIWZ9Z08I",
        SESSION_NAME_HOME_CHART_VIET_SONG: "home-chart-viet-song",
        SELECT_SESSION_HOME_CHART_AUMY_SONG: "#_chart_songIWZ9Z0BW",
        SESSION_NAME_HOME_CHART_AUMY_SONG: "home-chart-aumy-song",
        SELECT_SESSION_HOME_CHART_HAN_SONG: "#_chart_songIWZ9Z0BO",
        SESSION_NAME_HOME_CHART_HAN_SONG: "home-chart-han-song",
        SELECT_SESSION_HOME_CHART_VIET_SONG_ICON_PLAY_ALL: "._chart_songIWZ9Z08I.icon-play-all",
        SESSION_NAME_HOME_CHART_VIET_SONG_ICON_PLAY_ALL: "home-chart-viet-song-icon-play-all",
        SELECT_SESSION_HOME_CHART_AUMY_SONG_ICON_PLAY_ALL: "._chart_songIWZ9Z0BW.icon-play-all",
        SESSION_NAME_HOME_CHART_AUMY_SONG_ICON_PLAY_ALL: "home-chart-aumy-song-icon-play-all",
        SELECT_SESSION_HOME_CHART_HAN_SONG_ICON_PLAY_ALL: "._chart_songIWZ9Z0BO.icon-play-all",
        SESSION_NAME_HOME_CHART_HAN_SONG_ICON_PLAY_ALL: "home-chart-han-song-icon-play-all",
        SELECT_SESSION_HOME_CHART_VIET_VIDEO: "#_chart_videoIWZ9Z08W",
        SESSION_NAME_HOME_CHART_VIET_VIDEO: "home-chart-viet-video",
        SELECT_SESSION_HOME_CHART_AUMY_VIDEO: "#_chart_videoIWZ9Z0BU",
        SESSION_NAME_HOME_CHART_AUMY_VIDEO: "home-chart-aumy-video",
        SELECT_SESSION_HOME_CHART_HAN_VIDEO: "#_chart_videoIWZ9Z0BZ",
        SESSION_NAME_HOME_CHART_HAN_VIDEO: "home-chart-han-video",
        SELECT_SESSION_HOME_CHART_VIET_VIDEO_ICON_PLAY_ALL: "._chart_videoIWZ9Z08W.icon-play-all",
        SESSION_NAME_HOME_CHART_VIET_VIDEO_ICON_PLAY_ALL: "home-chart-viet-video-icon-play-all",
        SELECT_SESSION_HOME_CHART_AUMY_VIDEO_ICON_PLAY_ALL: "._chart_videoIWZ9Z0BU.icon-play-all",
        SESSION_NAME_HOME_CHART_AUMY_VIDEO_ICON_PLAY_ALL: "home-chart-aumy-video-icon-play-all",
        SELECT_SESSION_HOME_CHART_HAN_VIDEO_ICON_PLAY_ALL: "._chart_videoIWZ9Z0BZ.icon-play-all",
        SESSION_NAME_HOME_CHART_HAN_VIDEO_ICON_PLAY_ALL: "home-chart-han-video-icon-play-all",
        SELECT_SESSION_HOME_CHART_VIET_ALBUM: "#_chart_albumIWZ9Z08O",
        SESSION_NAME_HOME_CHART_VIET_ALBUM: "home-chart-viet-album",
        SELECT_SESSION_HOME_CHART_AUMY_ALBUM: "#_chart_albumIWZ9Z0B6",
        SESSION_NAME_HOME_CHART_AUMY_ALBUM: "home-chart-aumy-album",
        SELECT_SESSION_HOME_CHART_HAN_ALBUM: "#_chart_albumIWZ9Z0B7",
        SESSION_NAME_HOME_CHART_HAN_ALBUM: "home-chart-han-album",
        SELECT_SESSION_TOPIC_COLLECTION: ".page-hottopic",
        SESSION_NAME_TOPIC_DETAILT_COLLECTION: "topic-detail-collection",
        SESSION_NAME_TOPIC_PLAYLIST_COLLECTION: "topic-playlist-collection",
        SESSION_NAME_TOPIC_VIDEO_COLLECTION: "topic-video-collection",
        SELECT_SESSION_SEARCH_SONG: "#song-search-rs",
        SESSION_NAME_SEARCH_SONG_SONG: "search-song",
        SELECT_SESSION_SEARCH_VIDEO: "#video-search-rs",
        SESSION_NAME_SEARCH_VIDEO: "search-video",
        SELECT_SESSION_SEARCH_ALBUM: "#playlist-search-rs",
        SESSION_NAME_SEARCH_ALBUM: "topic-album"
    },
    getRedirectPageName: function() {
        return this.redirectPageName
    },
    setRedirectPageName: function(a) {
        this.redirectPageName = a
    },
    getRedirectMediaId: function() {
        return this.redirectMediaId
    },
    setRedirectMediaId: function(a) {
        this.redirectMediaId = a
    },
    getOrder: function() {
        return this.order
    },
    setOrder: function(a, b) {
        if (zmp3LogCommon.isValidParam(a)) {
            var c = a.split("_");
            if (c.length > 0) {
                var d = c[c.length - 1];
                try {
                    $.isNumeric(d) && (this.order = d)
                } catch (a) {
                    console.log("Exception at zmp3LogRef.setOrder")
                }
            }
        } else if (zmp3LogCommon.isValidParam(b)) try {
            $.isNumeric(b) && (this.order = b)
        } catch (a) {
            console.log("Exception at zmp3LogRef.setOrder")
        }
    },
    setRedirectParams: function(a) {
        var b = a.split("/");
        if (6 === b.length) {
            var c = b[3];
            zmp3LogCommon.isValidParam(c) && this.setRedirectPageName(c);
            var d = b[5],
                e = d.substring(0, 8);
            zmp3LogCommon.isValidParam(e) && this.setRedirectMediaId(e)
        } else if (4 === b.length) {
            var c = b[1];
            zmp3LogCommon.isValidParam(c) && this.setRedirectPageName(c);
            var d = b[3],
                e = d.substring(0, 8);
            zmp3LogCommon.isValidParam(e) && this.setRedirectMediaId(e)
        }
    },
    checkTypeRedirect: function(a) {
        var b = 0;
        if (zmp3LogCommon.isValidParam(a)) switch (a.which) {
            case 1:
                b = a.ctrlKey ? 2 : 1;
                break;
            case 2:
                b = 2;
                break;
            case 3:
                b = 0;
                break;
            default:
                b = 1
        }
        return b
    },
    handlingRedirect: function(a, b) {
        try {
            1 === b && (window.location = a), 2 === b && window.open(a, "_blank")
        } catch (a) {
            console.log("Exception at zmp3LogRef.handlingRedirect", a)
        }
    },
    getJsonFromUrl: function() {
        var a = location.search.substr(1),
            b = {};
        return a.split("&").forEach(function(a) {
            var c = a.split("=");
            b[c[0]] = decodeURIComponent(c[1])
        }), b
    },
    commonEventListener: function(a, b, c, d) {
        zmp3LogCommon.isValidParam(a) && zmp3LogCommon.isValidParam(c) && $(a).on("click", b, function(a) {
            try {
                var b = 0;
                if (b = zmp3LogCommon.isValidParam(this.target) && "_blank" === this.target ? 2 : zmp3LogRef.checkTypeRedirect(a), 0 !== b && zmp3LogCommon.isValidParam(this.href)) {
                    var e = this.href;
                    if (zmp3LogCommon.isValidParam(e) && (a.preventDefault(), d = d || {}, zmp3LogCommon.isValidParam(e))) {
                        if (zmp3LogRef.setRedirectParams(e), d.mediaId = zmp3LogRef.getRedirectMediaId(), !zmp3LogCommon.isValidParam(d.mediaId)) return null;
                        d.pageName = zmp3LogRef.getRedirectPageName(), d.username = zmp3LogCommon.getUsername(), d.userId = zmp3LogCommon.getUserId(), d.zaloId = zmp3LogCommon.getZaloId(), d.fromPage = zmp3LogCommon.getPageName(), d.fromSession = c, d.fromMediaId = zmp3LogCommon.getPageId();
                        var f = $(this).attr("tracking"),
                            g = $(this).attr("order");
                        (zmp3LogCommon.isValidParam(f) || zmp3LogCommon.isValidParam(g)) && (zmp3LogRef.setOrder(f, g), zmp3LogCommon.isValidParam(zmp3LogRef.getOrder()) && (d.order = zmp3LogRef.getOrder())), zmp3LogCommon.isValidParam($("#sug form input").val()) && (d.fromKeySearch = $("#sug form input").val());
                        var h = zmp3LogCommon.encode(d);
                        zmp3LogCommon.isValidParam(h) && zmp3LogCommon.push(h, zmp3LogRef.constants.LOG_CATEGORY_REF)
                    }
                }
            } catch (a) {
                console.log("Exception at zmp3LogRef.commonHandlingEvent", a)
            } finally {
                zmp3LogCommon.isValidParam(this.href) && zmp3LogCommon.isValidParam(b) && zmp3LogRef.handlingRedirect(this.href, b)
            }
        })
    },
    eventSessionSearchSuggest: function() {
        function i(a) {
            if (!zmp3LogCommon.isValidParam(a)) return null;
            var b = {};
            if (zmp3LogRef.setRedirectParams(a), b.mediaId = zmp3LogRef.getRedirectMediaId(), !zmp3LogCommon.isValidParam(b.mediaId)) return null;
            b.pageName = zmp3LogRef.getRedirectPageName(), b.username = zmp3LogCommon.getUsername(), b.userId = zmp3LogCommon.getUserId(), b.zaloId = zmp3LogCommon.getZaloId(), b.fromPage = zmp3LogCommon.getPageName(), b.fromSession = zmp3LogRef.constants.SESSION_NAME_SEARCH_SUGGEST, b.fromMediaId = zmp3LogCommon.getPageId(), b.fromKeySearch = $("#sug form input").val();
            var c = zmp3LogCommon.encode(b);
            zmp3LogCommon.isValidParam(c) && zmp3LogCommon.push(c, zmp3LogRef.constants.LOG_CATEGORY_REF)
        }
        var a = 0,
            b = "";
        try {
            var c = this.constants.SELECT_SESSION_SEARCH_SUGGEST,
                d = "a.track-log",
                e = zmp3LogRef.constants.SESSION_NAME_SEARCH_SUGGEST,
                f = {};
            f.fromKeySearch = $("#sug form input").val(), this.commonEventListener(c, d, e, f);
            var g = $("#sug"),
                h = $(".fn-result", g);
            $('input[name="q"]', g).keydown(function(c) {
                var d = $(".fn-list .fn-item.active", h);
                d.length > 0 && 13 === c.keyCode && (a = 1, b = $(".fn-link", d).attr("href"), i(b), zmp3LogCommon.isValidParam(b) && zmp3LogRef.handlingRedirect(b, a))
            })
        } catch (a) {
            console.log("Exception at zmp3LogRef.listenSessionRecommend: ", a)
        }
    },
    eventSessionRecommend: function() {
        try {
            var a = this.constants.SELECT_SESSION_PLAY_RECOMMEND,
                b = "a.track-log",
                c = "",
                d = zmp3LogCommon.getPageName();
            zmp3LogCommon.isValidParam(d) && (d === zmp3LogCommon.constants.SONG_PAGE_NAME && (c = zmp3LogRef.constants.SESSION_NAME_SONG_RECOMMEND), d === zmp3LogCommon.constants.VIDEO_PAGE_NAME && (c = zmp3LogRef.constants.SESSION_NAME_VIDEO_RECOMMEND), d === zmp3LogCommon.constants.ALBUM_PAGE_NAME && (c = zmp3LogRef.constants.SESSION_NAME_ALBUM_RECOMMEND)), this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionRecommend", a)
        }
    },
    eventSessionPlaylistItems: function() {
        try {
            var a = this.constants.SELECT_SESSION_PLAYLIST_ITEMS_ICON_REDIRECT,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_PLAYLIST_ITEMS_ICON_REDIRECT;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionRecommend", a)
        }
    },
    eventSessionAlbumRelative: function() {
        try {
            var a = this.constants.SELECT_SESSION_ALBUM_RELATIVE,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_ALBUM_RELATIVE;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionAlbumRelative", a)
        }
    },
    eventSessionVideoRelative: function() {
        try {
            var a = this.constants.SELECT_SESSION_VIDEO_RELATIVE,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_VIDEO_RELATIVE;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionVideoRelative", a)
        }
    },
    eventSessionPlaylistCollection: function() {
        try {
            var a = this.constants.SELECT_SESSION_PLAYLIST_COLLECTION,
                b = "a",
                c = zmp3LogRef.constants.SESSION_NAME_PLAYLIST_COLLECTION;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionPlaylistCollection", a)
        }
    },
    eventSessionJumpMV: function() {
        try {
            var a = this.constants.SELECT_SESSION_PLAY_ICON_JUMP_MV,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_PLAY_ICON_JUMP_MV;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionJumpMV", a)
        }
    },
    eventSessionJumpMVInPlaylistItems: function() {
        try {
            var a = this.constants.SELECT_SESSION_PLAYLIST_ITEMS_ICON_JUMP_MV,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_PLAYLIST_ITEMS_ICON_JUMP_MV;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionJumpMVInPlaylistItems", a)
        }
    },
    eventSessionHomeSlideBanner: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_SLIDES_BANNER,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_SLIDES_BANNER;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeSlideBanner", a)
        }
    },
    eventSessionHomeAlbumHot: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_ALBUM_HOT,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_ALBUM_HOT;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeAlbumHot", a)
        }
    },
    eventSessionHomePlaylistCollection: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_PLAYLIST_COLLECTION,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_PLAYLIST_COLLECTION;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomePlaylistCollection", a)
        }
    },
    eventSessionHomeVideoHot: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_VIDEO_HOT,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_VIDEO_HOT;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeVideoHot", a)
        }
    },
    eventSessionHomeVietHotSong: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_VIET_HOT_SONG,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_VIET_HOT_SONG;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeVietHotSong", a)
        }
    },
    eventSessionHomeVietNewSong: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_VIET_NEW_SONG,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_VIET_NEW_SONG;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeVietNewSong", a)
        }
    },
    eventSessionHomeChartSong: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_CHART_VIET_SONG,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_VIET_SONG;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_AUMY_SONG,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_AUMY_SONG;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_HAN_SONG,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_HAN_SONG;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_VIET_SONG_ICON_PLAY_ALL,
                b = "",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_VIET_SONG_ICON_PLAY_ALL;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_AUMY_SONG_ICON_PLAY_ALL,
                b = "",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_AUMY_SONG_ICON_PLAY_ALL;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_HAN_SONG_ICON_PLAY_ALL,
                b = "",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_HAN_SONG_ICON_PLAY_ALL;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeChartSong", a)
        }
    },
    eventSessionHomeChartVideo: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_CHART_VIET_VIDEO,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_VIET_VIDEO;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_AUMY_VIDEO,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_AUMY_VIDEO;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_HAN_VIDEO,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_HAN_VIDEO;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_VIET_VIDEO_ICON_PLAY_ALL,
                b = "",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_VIET_VIDEO_ICON_PLAY_ALL;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_AUMY_VIDEO_ICON_PLAY_ALL,
                b = "",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_AUMY_VIDEO_ICON_PLAY_ALL;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_HAN_VIDEO_ICON_PLAY_ALL,
                b = "",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_HAN_VIDEO_ICON_PLAY_ALL;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeChartVideo", a)
        }
    },
    eventSessionHomeChartAlbum: function() {
        try {
            var a = this.constants.SELECT_SESSION_HOME_CHART_VIET_ALBUM,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_VIET_ALBUM;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_AUMY_ALBUM,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_AUMY_ALBUM;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_HOME_CHART_HAN_ALBUM,
                b = "a.track-log",
                c = zmp3LogRef.constants.SESSION_NAME_HOME_CHART_HAN_ALBUM;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionHomeChartAlbum", a)
        }
    },
    eventSessionTopic: function() {
        try {
            var a = this.constants.SELECT_SESSION_TOPIC_COLLECTION,
                b = "a.track-log",
                c = "",
                d = this.getJsonFromUrl();
            zmp3LogCommon.isValidParam(d) && zmp3LogCommon.isValidParam(d.view) ? "playlist" === d.view ? c = this.constants.SESSION_NAME_TOPIC_PLAYLIST_COLLECTION : "video" === d.view && (c = this.constants.SESSION_NAME_TOPIC_VIDEO_COLLECTION) : c = this.constants.SESSION_NAME_TOPIC_DETAILT_COLLECTION, this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionTopic", a)
        }
    },
    eventSessionSearchPage: function() {
        try {
            var a = this.constants.SELECT_SESSION_SEARCH_SONG,
                b = "a.track-log",
                c = this.constants.SESSION_NAME_SEARCH_SONG_SONG;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_SEARCH_VIDEO,
                b = "a.track-log",
                c = this.constants.SESSION_NAME_SEARCH_VIDEO;
            this.commonEventListener(a, b, c, "");
            var a = this.constants.SELECT_SESSION_SEARCH_ALBUM,
                b = "a.track-log",
                c = this.constants.SESSION_NAME_SEARCH_ALBUM;
            this.commonEventListener(a, b, c, "")
        } catch (a) {
            console.log("Exception at zmp3LogRef.eventSessionSearchPage", a)
        }
    },
    handlingRefLog: function() {
        try {
            switch (zmp3LogCommon.getPageName()) {
                case zmp3LogCommon.constants.HOME_PAGE_NAME:
                    this.eventSessionHomeSlideBanner(), this.eventSessionHomeAlbumHot(), this.eventSessionHomePlaylistCollection(), this.eventSessionHomeVideoHot(), this.eventSessionHomeVietHotSong(), this.eventSessionHomeVietNewSong(), this.eventSessionHomeChartSong(), this.eventSessionHomeChartVideo(), this.eventSessionHomeChartAlbum();
                    break;
                case zmp3LogCommon.constants.SONG_PAGE_NAME:
                    this.eventSessionRecommend(), this.eventSessionAlbumRelative(), this.eventSessionVideoRelative(), this.eventSessionPlaylistCollection(), this.eventSessionJumpMV();
                    break;
                case zmp3LogCommon.constants.VIDEO_PAGE_NAME:
                    this.eventSessionRecommend(), this.eventSessionAlbumRelative(), this.eventSessionVideoRelative();
                    break;
                case zmp3LogCommon.constants.ALBUM_PAGE_NAME:
                case zmp3LogCommon.constants.PLAYLIST_PAGE_NAME:
                    this.eventSessionRecommend(), this.eventSessionAlbumRelative(), this.eventSessionVideoRelative(), this.eventSessionPlaylistCollection(), this.eventSessionPlaylistItems(), this.eventSessionJumpMV(), this.eventSessionJumpMVInPlaylistItems();
                    break;
                case zmp3LogCommon.constants.TOPIC_PAGE_NAME:
                    this.eventSessionTopic();
                    break;
                case zmp3LogCommon.constants.SEARCH_PAGE_NAME:
                    this.eventSessionSearchPage()
            }
            this.eventSessionSearchSuggest()
        } catch (a) {
            console.log("Exception at zmp3LogRef.handlingRefLog: ", a)
        }
    }
};
if ("undefined" != typeof zmp3LogRef && null !== zmp3LogRef && "function" == typeof zmp3LogRef.handlingRefLog) try {
    zmp3LogRef.handlingRefLog()
} catch (a) {
    console.log("Exception at zmp3LogRef.handlingRefLog: ", a)
}
var zmp3LogSearch = {
    constants: {
        LOG_CATEGORY_SEARCH: "log-search",
        LOG_ACTION_ID_PARAMS: "params"
    },
    parseSearchParamsObjectFromURL: function() {
        var a = {},
            b = "q",
            c = "t",
            d = "sort",
            e = "upload",
            f = "filter",
            g = "genre",
            h = location.search;
        if (zmp3LogCommon.isValidParam(h)) {
            h = h.substring(1, h.length);
            for (var i = h.split("&"), j = [], k = [], l = [], m = [], n = [], o = [], p = 0; p < i.length; p++) {
                var q = i[p].split("=");
                if (zmp3LogCommon.isValidParam(q) && zmp3LogCommon.isValidParam(q[0]) && zmp3LogCommon.isValidParam(q[1])) {
                    var r = q[0],
                        s = q[1];
                    if (zmp3LogCommon.isValidParam(s)) switch (r) {
                        case b:
                            j.push(s);
                            break;
                        case c:
                            k.push(s);
                            break;
                        case d:
                            l.push(s);
                            break;
                        case e:
                            m.push(s);
                            break;
                        case f:
                            n.push(s);
                            break;
                        case g:
                            o.push(s)
                    }
                }
            }
            return zmp3LogCommon.isValidParam(j) && (a[b] = j), zmp3LogCommon.isValidParam(k) && (a[c] = k), zmp3LogCommon.isValidParam(l) && (a[d] = l), zmp3LogCommon.isValidParam(m) && (a[e] = m), zmp3LogCommon.isValidParam(n) && (a[f] = n), zmp3LogCommon.isValidParam(o) && (a[g] = o), a
        }
    },
    handlingParamsSearchLog: function() {
        try {
            if ("tim-kiem" !== zmp3LogCommon.getPageName()) return null;
            if (urlParams = window.location.search.substring(1), !zmp3LogCommon.isValidParam(urlParams)) return null;
            var a = this.parseSearchParamsObjectFromURL();
            if (zmp3LogCommon.isValidParam(a)) {
                var b = {};
                b.pageName = zmp3LogCommon.getPageName(), b.username = zmp3LogCommon.getUsername(), b.userId = zmp3LogCommon.getUserId(), b.zaloId = zmp3LogCommon.getZaloId();
                for (var c in a) zmp3LogCommon.isValidParam(c) && a.hasOwnProperty(c) && zmp3LogCommon.isValidParam(a[c]) && "undefined" !== a[c] && (b[c] = a[c]);
                var d = zmp3LogCommon.encode(b);
                if (zmp3LogCommon.isValidParam(d)) {
                    var e = this.constants.LOG_CATEGORY_SEARCH + "/" + this.constants.LOG_ACTION_ID_PARAMS;
                    zmp3LogCommon.push(d, e)
                }
            }
        } catch (a) {
            console.log("Exception at handlingRefLog.handlingRefLog: ", a)
        }
    }
};
if ("undefined" != typeof zmp3LogSearch && null !== zmp3LogSearch && "function" == typeof zmp3LogSearch.handlingParamsSearchLog) try {
    zmp3LogSearch.handlingParamsSearchLog()
} catch (a) {
    console.log("Exception at initLog.zmp3LogSearch.handlingParamsSearchLog: ", a)
}