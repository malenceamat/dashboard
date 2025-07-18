/* Template Name: Bnker. - Banking and Loan HTML Templates
   Author: Acavo
   Version: 1.0.0
   Created: May 2021
   File Description: Plugins js file of the template
*/


/*============================================*/
//
//         01 -- scrollspy
//         02 -- Scrollup
//         03 -- Nice Select
//         04 -- Wow
//         05 -- Owl carousel
//         06 -- SyoTimer
//         07 -- Sticky Sidebar
//         08 -- MeanMenu
//         09 -- Calculation
//         10 -- Parallax
//
/*===========================================*/


/*============================================

                01 -- scrollspy

==============================================*/
!function (p, r, u) {
    p.fn.extend({
        scrollspy: function (l) {
            var t = {
                namespace: "scrollspy",
                activeClass: "active",
                animate: !1,
                duration: 1e3,
                offset: 0,
                container: r,
                replaceState: !1
            };
            l = p.extend({}, t, l);

            function s(t, e) {
                return parseInt(t, 10) + parseInt(e, 10)
            }

            function c(t) {
                for (var e = 0; e < t.length; e++) p(t[e]).parent().removeClass(l.activeClass)
            }

            var h = "";
            return this.each(function () {
                for (var o = this, t = p(l.container), i = p(o).find("a"), e = 0; e < i.length; e++) {
                    var a = i[e];
                    p(a).on("click", function (t) {
                        var e, a = p(this).attr("href"), n = p(a);
                        0 < n.length && (e = s(n.offset().top, l.offset), l.animate ? p("html, body").animate({scrollTop: e}, l.duration) : r.scrollTo(0, e), t.preventDefault())
                    })
                }
                c(i);

                function n() {
                    for (var t, e = {
                        top: s(p(this).scrollTop(), Math.abs(l.offset)),
                        left: p(this).scrollLeft()
                    }, a = 0; a < f.length; a++) {
                        var n = f[a];
                        if (e.top >= n.top && e.top < n.bottom) {
                            var r = n.hash;
                            if (t = function (t, e) {
                                for (var a = 0; a < t.length; a++) {
                                    var n = p(t[a]);
                                    if (n.attr("href") === e) return n
                                }
                            }(i, r)) {
                                l.onChange && h !== r && (l.onChange(n.element, p(o), e), h = r), l.replaceState && history.replaceState({}, "", "/" + r), c(i), t.parent().addClass(l.activeClass);
                                break
                            }
                        }
                    }
                    !t && "exit" !== h && l.onExit && (l.onExit(p(o), e), c(i), h = "exit", l.replaceState && history.replaceState({}, "", "/"))
                }

                var f = function (t) {
                    for (var e = [], a = 0; a < t.length; a++) {
                        var n, r, o = t[a], i = p(o).attr("href"), f = p(i);
                        0 < f.length && (r = (n = Math.floor(f.offset().top)) + Math.floor(f.outerHeight()), e.push({
                            element: f,
                            hash: i,
                            top: n,
                            bottom: r
                        }))
                    }
                    return e
                }(i);
                t.bind("scroll." + l.namespace, function () {
                    n()
                }), p(u).ready(function (t) {
                    n()
                })
            })
        }
    })
}(jQuery, window, document);


/*============================================

                02 -- Scrollup

==============================================*/

/*
 *
 * scrollup
 * Url: http://markgoodyear.com/labs/scrollup/
 * v2.4.1
 *
 */
!function (a, d, p) {
    "use strict";
    a.fn.scrollUp = function (l) {
        a.data(p.body, "scrollUp") || (a.data(p.body, "scrollUp", !0), a.fn.scrollUp.init(l))
    }, a.fn.scrollUp.init = function (l) {
        var o, e, r, s, t, c = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, l), i = !1,
            n = c.scrollTrigger ? a(c.scrollTrigger) : a("<a/>", {id: c.scrollName, href: "#top"});
        switch (c.scrollTitle && n.attr("title", c.scrollTitle), n.appendTo("body"), c.scrollImg || c.scrollTrigger || n.html(c.scrollText), n.css({
            display: "none",
            position: "fixed",
            zIndex: c.zIndex
        }), c.activeOverlay && a("<div/>", {id: c.scrollName + "-active"}).css({
            position: "absolute",
            top: c.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + c.activeOverlay,
            zIndex: c.zIndex
        }).appendTo("body"), c.animation) {
            case "fade":
                o = "fadeIn", e = "fadeOut", r = c.animationSpeed;
                break;
            case "slide":
                o = "slideDown", e = "slideUp", r = c.animationSpeed;
                break;
            default:
                o = "show", e = "hide", r = 0
        }
        s = "top" === c.scrollFrom ? c.scrollDistance : a(p).height() - a(d).height() - c.scrollDistance, a(d).scroll(function () {
            a(d).scrollTop() > s ? i || (n[o](r), i = !0) : i && (n[e](r), i = !1)
        }), c.scrollTarget ? "number" == typeof c.scrollTarget ? t = c.scrollTarget : "string" == typeof c.scrollTarget && (t = Math.floor(a(c.scrollTarget).offset().top)) : t = 0, n.click(function (l) {
            l.preventDefault(), a("html, body").animate({scrollTop: t}, c.scrollSpeed, c.easingType)
        })
    }, a.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, a.fn.scrollUp.destroy = function (l) {
        a.removeData(p.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), 7 <= a.fn.jquery.split(".")[1] ? a(d).off("scroll", l) : a(d).unbind("scroll", l)
    }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);


/*============================================

               03 -- Nice Select

==============================================*/

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(), n = t.find("option"), i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this), i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }

        if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this), n = e(this).next(".nice-select"), i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this), s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function () {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this), n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this), n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click"); else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);


/*===========================================

                04 -- Wow

=============================================*/

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
    function e(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    var i, t, n, a, o, r = [].indexOf || function (t) {
        for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
        return -1
    };

    function s(t) {
        null == t && (t = {}), this.scrollCallback = e(this.scrollCallback, this), this.scrollHandler = e(this.scrollHandler, this), this.resetAnimation = e(this.resetAnimation, this), this.start = e(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }

    function l() {
        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }

    function u() {
        this.keys = [], this.values = []
    }

    function h() {
    }

    h.prototype.extend = function (t, e) {
        var n, i;
        for (n in e) i = e[n], null == t[n] && (t[n] = i);
        return t
    }, h.prototype.isMobile = function (t) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
    }, h.prototype.createEvent = function (t, e, n, i) {
        var o;
        return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
    }, h.prototype.emitEvent = function (t, e) {
        return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
    }, h.prototype.addEvent = function (t, e, n) {
        return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
    }, h.prototype.removeEvent = function (t, e, n) {
        return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
    }, h.prototype.innerHeight = function () {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, t = h, n = this.WeakMap || this.MozWeakMap || (u.prototype.get = function (t) {
        for (var e, n = this.keys, i = e = 0, o = n.length; e < o; i = ++e) if (n[i] === t) return this.values[i]
    }, u.prototype.set = function (t, e) {
        for (var n, i = this.keys, o = n = 0, s = i.length; n < s; o = ++n) if (i[o] === t) return void (this.values[o] = e);
        return this.keys.push(t), this.values.push(e)
    }, u), i = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (l.notSupported = !0, l.prototype.observe = function () {
    }, l), a = this.getComputedStyle || function (n, t) {
        return this.getPropertyValue = function (t) {
            var e;
            return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function (t, e) {
                return e.toUpperCase()
            }), (null != (e = n.currentStyle) ? e[t] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = (s.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null
    }, s.prototype.init = function () {
        var t;
        return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, s.prototype.start = function () {
        var o, t, e, n, r;
        if (this.stopped = !1, this.boxes = function () {
            for (var t = this.element.querySelectorAll("." + this.config.boxClass), e = [], n = 0, i = t.length; n < i; n++) o = t[n], e.push(o);
            return e
        }.call(this), this.all = function () {
            for (var t = this.boxes, e = [], n = 0, i = t.length; n < i; n++) o = t[n], e.push(o);
            return e
        }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (t = 0, e = (n = this.boxes).length; t < e; t++) o = n[t], this.applyStyle(o, !0);
        return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new i((r = this, function (t) {
            for (var o, s, e = [], n = 0, i = t.length; n < i; n++) s = t[n], e.push(function () {
                for (var t = s.addedNodes || [], e = [], n = 0, i = t.length; n < i; n++) o = t[n], e.push(this.doSync(o));
                return e
            }.call(r));
            return e
        })).observe(document.body, {childList: !0, subtree: !0}) : void 0
    }, s.prototype.stop = function () {
        return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, s.prototype.sync = function (t) {
        return i.notSupported ? this.doSync(this.element) : void 0
    }, s.prototype.doSync = function (t) {
        var e, n, i, o, s;
        if (null == t && (t = this.element), 1 === t.nodeType) {
            for (s = [], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n < i; n++) e = o[n], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
            return s
        }
    }, s.prototype.show = function (t) {
        return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
    }, s.prototype.applyStyle = function (t, e) {
        var n, i = t.getAttribute("data-wow-duration"), o = t.getAttribute("data-wow-delay"),
            s = t.getAttribute("data-wow-iteration");
        return this.animate((n = this, function () {
            return n.customStyle(t, e, i, o, s)
        }))
    }, s.prototype.animate = "requestAnimationFrame" in window ? function (t) {
        return window.requestAnimationFrame(t)
    } : function (t) {
        return t()
    }, s.prototype.resetStyle = function () {
        for (var t, e = this.boxes, n = [], i = 0, o = e.length; i < o; i++) t = e[i], n.push(t.style.visibility = "visible");
        return n
    }, s.prototype.resetAnimation = function (t) {
        var e;
        return 0 <= t.type.toLowerCase().indexOf("animationend") ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
    }, s.prototype.customStyle = function (t, e, n, i, o) {
        return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), o && this.vendorSet(t.style, {animationIterationCount: o}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
    }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet = function (o, t) {
        var s, r, l, e = [];
        for (s in t) r = t[s], o["" + s] = r, e.push(function () {
            for (var t = this.vendors, e = [], n = 0, i = t.length; n < i; n++) l = t[n], e.push(o["" + l + s.charAt(0).toUpperCase() + s.substr(1)] = r);
            return e
        }.call(this));
        return e
    }, s.prototype.vendorCSS = function (t, e) {
        for (var n, i = a(t), o = i.getPropertyCSSValue(e), s = this.vendors, r = 0, l = s.length; r < l; r++) n = s[r], o = o || i.getPropertyCSSValue("-" + n + "-" + e);
        return o
    }, s.prototype.animationName = function (e) {
        var n;
        try {
            n = this.vendorCSS(e, "animation-name").cssText
        } catch (t) {
            n = a(e).getPropertyValue("animation-name")
        }
        return "none" === n ? "" : n
    }, s.prototype.cacheAnimationName = function (t) {
        return this.animationNameCache.set(t, this.animationName(t))
    }, s.prototype.cachedAnimationName = function (t) {
        return this.animationNameCache.get(t)
    }, s.prototype.scrollHandler = function () {
        return this.scrolled = !0
    }, s.prototype.scrollCallback = function () {
        var o;
        return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
            for (var t = this.boxes, e = [], n = 0, i = t.length; n < i; n++) (o = t[n]) && (this.isVisible(o) ? this.show(o) : e.push(o));
            return e
        }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, s.prototype.offsetTop = function (t) {
        for (var e; void 0 === t.offsetTop;) t = t.parentNode;
        for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
        return e
    }, s.prototype.isVisible = function (t) {
        var e = t.getAttribute("data-wow-offset") || this.config.offset,
            n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            i = n + Math.min(this.element.clientHeight, this.util().innerHeight()) - e, o = this.offsetTop(t),
            s = o + t.clientHeight;
        return o <= i && n <= s
    }, s.prototype.util = function () {
        return null != this._util ? this._util : this._util = new t
    }, s.prototype.disabled = function () {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, s)
}).call(this);


/*===========================================

            05 -- Owl carousel

=============================================*/
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-carousel",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl,
                e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null,
                d = this._items.length, e = !this.settings.autoWidth, f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a = this.settings.stagePadding, b = this._coordinates, c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
            if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function (a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function (b, c) {
        var d = -1, e = 30, f = this.width(), g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b
        })
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) ;
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length,
            h = this.minimum(), i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function () {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : a < c;
            case">":
                return d ? a < c : a > c;
            case">=":
                return d ? a <= c : a >= c;
            case"<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = {item: {count: this._items.length, index: this.current()}},
            i = a.camelCase(a.grep(["on", b, d], function (a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function (a) {
        var c = {x: null, y: null};
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y}
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b)
                }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {lazyLoad: !1}, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        var b = this._core._current, c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
        a.each(d, function (b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
        var c = function () {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function (b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function () {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0),
            g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f) break;
                b = 0, ++c
            }
            b += this._core.mergers(this._core.relative(a))
        }
    }, e.prototype.draw = function () {
        var b, c = this._core.settings, d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }

    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, j = {
        csstransforms: function () {
            return !!e("transform")
        }, csstransforms3d: function () {
            return !!e("perspective")
        }, csstransitions: function () {
            return !!e("transition")
        }, cssanimations: function () {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/*============================================

                06 -- SyoTimer

==============================================*/


/**
 * SyoTimer v.2.1.2 | under MIT licence
 * http://syomochkin.xyz/folio/syotimer/demo.html
 */
!function (i, e) {
    "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), i(t), t
    } : i(e)
}(function (l) {
    var m = "day", a = "hour", s = "minute", d = "second", n = {d: m, h: a, m: s, s: d}, u = {
        list: [d, s, a, m], next: function (e) {
            var t = this.list.indexOf(e);
            return t < this.list.length && this.list[t + 1]
        }, prev: function (e) {
            var t = this.list.indexOf(e);
            return 0 < t && this.list[t - 1]
        }
    }, o = {
        year: 2034,
        month: 7,
        day: 31,
        hour: 0,
        minute: 0,
        second: 0,
        timeZone: "local",
        ignoreTransferTime: !1,
        layout: "dhms",
        periodic: !1,
        periodInterval: 7,
        periodUnit: "d",
        doubleNumbers: !0,
        effectType: "none",
        lang: "eng",
        headTitle: "",
        footTitle: "",
        afterDeadline: function (e) {
            e.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>')
        }
    }, r = {second: !1, minute: !1, hour: !1, day: !1}, c = {
        init: function (e) {
            var t = l.extend({}, o, e || {});
            t.itemTypes = y.getItemTypesByLayout(t.layout), t._itemsHas = l.extend({}, r);
            for (var i = 0; i < t.itemTypes.length; i++) t._itemsHas[t.itemTypes[i]] = !0;
            return this.each(function () {
                l(this).data("syotimer-options", t), c._render.apply(this, []), c._perSecondHandler.apply(this, [])
            })
        }, _render: function () {
            for (var e = l(this), t = e.data("syotimer-options"), i = y.getTimerItem(), n = l("<div/>", {class: "syotimer__head"}).html(t.headTitle), o = l("<div/>", {class: "syotimer__body"}), r = l("<div/>", {class: "syotimer__footer"}).html(t.footTitle), a = {}, s = 0; s < t.itemTypes.length; s++) {
                var d = i.clone();
                d.addClass("syotimer-cell_type_" + t.itemTypes[s]), o.append(d), a[t.itemTypes[s]] = d
            }
            var u = {headBlock: n, bodyBlock: o, footBlock: r};
            e.data("syotimer-blocks", u).data("syotimer-items", a).addClass("syotimer").append(n).append(o).append(r)
        }, _perSecondHandler: function () {
            var e = l(this), t = e.data("syotimer-options");
            l(".syotimer-cell > .syotimer-cell__value", e).css("opacity", 1);
            var i = new Date, n = new Date(t.year, t.month - 1, t.day, t.hour, t.minute, t.second),
                o = y.getDifferenceWithTimezone(i, n, t), r = y.getSecondsToDeadLine(o, t);
            0 <= r ? (c._refreshUnitsDom.apply(this, [r]), c._applyEffectSwitch.apply(this, [t.effectType])) : (e = l.extend(e, e.data("syotimer-blocks")), t.afterDeadline(e))
        }, _refreshUnitsDom: function (e) {
            var t = l(this), i = t.data("syotimer-options"), n = t.data("syotimer-items"), o = i.itemTypes,
                r = y.getUnitsToDeadLine(e);
            i._itemsHas.day || (r.hour += 24 * r.day), i._itemsHas.hour || (r.minute += 60 * r.hour), i._itemsHas.minute || (r.second += 60 * r.minute);
            for (var a = 0; a < o.length; a++) {
                var s = o[a], d = r[s], u = n[s];
                u.data("syotimer-unit-value", d), l(".syotimer-cell__value", u).html(y.format2(d, s !== m && i.doubleNumbers)), l(".syotimer-cell__unit", u).html(l.syotimerLang.getNumeral(d, i.lang, s))
            }
        }, _applyEffectSwitch: function (e, t) {
            t = t || d;
            var i, n, o, r = this, a = l(r);
            "none" === e ? setTimeout(function () {
                c._perSecondHandler.apply(r, [])
            }, 1e3) : "opacity" !== e || (i = a.data("syotimer-items")[t]) && (n = u.next(t), o = i.data("syotimer-unit-value"), l(".syotimer-cell__value", i).animate({opacity: .1}, 1e3, "linear", function () {
                c._perSecondHandler.apply(r, [])
            }), n && 0 === o && c._applyEffectSwitch.apply(r, [e, n]))
        }
    }, y = {
        getTimerItem: function () {
            var e = l("<div/>", {class: "syotimer-cell__value", text: "0"}),
                t = l("<div/>", {class: "syotimer-cell__unit"}), i = l("<div/>", {class: "syotimer-cell"});
            return i.append(e).append(t), i
        }, getItemTypesByLayout: function (e) {
            for (var t = [], i = 0; i < e.length; i++) t.push(n[e[i]]);
            return t
        }, getSecondsToDeadLine: function (e, t) {
            var i, n, o, r, a = e / 1e3, a = Math.floor(a),
                s = t.periodic ? (r = e / (1e3 * (o = y.getPeriodUnit(t.periodUnit))), r = Math.ceil(r), r = Math.abs(r), 0 <= a ? (n = 0 === (n = r % t.periodInterval) ? t.periodInterval : n, --n) : n = t.periodInterval - r % t.periodInterval, 0 == (i = a % o) && a < 0 && n--, Math.abs(n * o + i)) : a;
            return s
        }, getUnitsToDeadLine: function (e) {
            var t = m, i = {};
            do {
                var n = y.getPeriodUnit(t);
                i[t] = Math.floor(e / n), e %= n
            } while (t = u.prev(t));
            return i
        }, getPeriodUnit: function (e) {
            switch (e) {
                case"d":
                case m:
                    return 86400;
                case"h":
                case a:
                    return 3600;
                case"m":
                case s:
                    return 60;
                case"s":
                case d:
                    return 1
            }
        }, getDifferenceWithTimezone: function (e, t, i) {
            var n = t.getTime() - e.getTime(), o = 0, r = 0;
            return "local" !== i.timeZone && (o = 1e3 * (parseFloat(i.timeZone) * y.getPeriodUnit(a) - -e.getTimezoneOffset() * y.getPeriodUnit(s))), i.ignoreTransferTime && (r = 1e3 * (-e.getTimezoneOffset() * y.getPeriodUnit(s) - -t.getTimezoneOffset() * y.getPeriodUnit(s))), n - (o + r)
        }, format2: function (e, t) {
            return t = !1 !== t, e <= 9 && t ? "0" + e : "" + e
        }
    }, i = {
        setOption: function (e, t) {
            var i = l(this), n = i.data("syotimer-options");
            n.hasOwnProperty(e) && (n[e] = t, i.data("syotimer-options", n))
        }
    };
    l.fn.syotimer = function (e) {
        if ("string" == typeof e && "setOption" === e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                i[e].apply(this, t)
            })
        }
        if (null == e || "object" == typeof e) return c.init.apply(this, [e]);
        l.error("SyoTimer. Error in call methods: methods is not exist")
    }, l.syotimerLang = {
        rus: {
            second: ["ÑÐµÐºÑƒÐ½Ð´Ð°", "ÑÐµÐºÑƒÐ½Ð´Ñ‹", "ÑÐµÐºÑƒÐ½Ð´"],
            minute: ["Ð¼Ð¸Ð½ÑƒÑ‚Ð°", "Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹", "Ð¼Ð¸Ð½ÑƒÑ‚"],
            hour: ["Ñ‡Ð°Ñ", "Ñ‡Ð°ÑÐ°", "Ñ‡Ð°ÑÐ¾Ð²"],
            day: ["Ð´ÐµÐ½ÑŒ", "Ð´Ð½Ñ", "Ð´Ð½ÐµÐ¹"],
            handler: "rusNumeral"
        },
        eng: {
            second: ["second", "seconds"],
            minute: ["minute", "minutes"],
            hour: ["hour", "hours"],
            day: ["day", "days"]
        },
        por: {
            second: ["segundo", "segundos"],
            minute: ["minuto", "minutos"],
            hour: ["hora", "horas"],
            day: ["dia", "dias"]
        },
        spa: {
            second: ["segundo", "segundos"],
            minute: ["minuto", "minutos"],
            hour: ["hora", "horas"],
            day: ["dÃ­a", "dÃ­as"]
        },
        heb: {
            second: ["×©× ×™×”", "×©× ×™×•×ª"],
            minute: ["×“×§×”", "×“×§×•×ª"],
            hour: ["×©×¢×”", "×©×¢×•×ª"],
            day: ["×™×•×", "×™×ž×™×"]
        },
        universal: function (e) {
            return 1 === e ? 0 : 1
        },
        rusNumeral: function (e) {
            var t = 4 < e % 100 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5];
            return t
        },
        getNumeral: function (e, t, i) {
            var n = this[l.syotimerLang[t].handler || "universal"](e);
            return l.syotimerLang[t][i][n]
        }
    }
}, window.jQuery);


/*============================================

                07 -- Sticky Sidebar

==============================================*/


/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.0
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 **/
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e()
}(0, function () {
    "use strict";

    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    var e = function () {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
        }
    }(), i = function () {
        var i = ".stickySidebar", n = {
            topSpacing: 0,
            bottomSpacing: 0,
            containerSelector: !1,
            innerWrapperSelector: ".inner-wrapper-sticky",
            stickyClass: "is-affixed",
            resizeSensor: !0,
            minWidth: !1
        };
        return function () {
            function s(e) {
                var i = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t(this, s), this.options = s.extend(n, o), this.sidebar = "string" == typeof e ? document.querySelector(e) : e, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
                this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
                    transform: !1,
                    transform3d: !1
                }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this._resizeListeners = [], this.dimensions = {
                    translateY: 0,
                    topSpacing: 0,
                    lastTopSpacing: 0,
                    bottomSpacing: 0,
                    lastBottomSpacing: 0,
                    sidebarHeight: 0,
                    sidebarWidth: 0,
                    containerTop: 0,
                    containerHeight: 0,
                    viewportHeight: 0,
                    viewportTop: 0,
                    lastViewportTop: 0
                }, ["handleEvent"].forEach(function (t) {
                    i[t] = i[t].bind(i)
                }), this.initialize()
            }

            return e(s, [{
                key: "initialize", value: function () {
                    var t = this;
                    if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
                        var e = document.createElement("div");
                        for (e.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(e); this.sidebar.firstChild != e;) e.appendChild(this.sidebar.firstChild);
                        this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                    }
                    if (this.options.containerSelector) {
                        var i = document.querySelectorAll(this.options.containerSelector);
                        if ((i = Array.prototype.slice.call(i)).forEach(function (e, i) {
                            e.contains(t.sidebar) && (t.container = e)
                        }), !i.length) throw new Error("The container does not contains on the sidebar.")
                    }
                    "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
                }
            }, {
                key: "bindEvents", value: function () {
                    window.addEventListener("resize", this, {passive: !0}), window.addEventListener("scroll", this, {passive: !0}), this.sidebar.addEventListener("update" + i, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
                }
            }, {
                key: "handleEvent", value: function (t) {
                    this.updateSticky(t)
                }
            }, {
                key: "calcDimensions", value: function () {
                    if (!this._breakpoint) {
                        var t = this.dimensions;
                        t.containerTop = s.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebar.offsetWidth, t.viewportHeight = window.innerHeight, this._calcDimensionsWithScroll()
                    }
                }
            }, {
                key: "_calcDimensionsWithScroll", value: function () {
                    var t = this.dimensions;
                    t.sidebarLeft = s.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing
                }
            }, {
                key: "isSidebarFitsViewport", value: function () {
                    return this.dimensions.sidebarHeight < this.dimensions.viewportHeight
                }
            }, {
                key: "observeScrollDir", value: function () {
                    var t = this.dimensions;
                    if (t.lastViewportTop !== t.viewportTop) {
                        var e = "down" === this.direction ? Math.min : Math.max;
                        t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                    }
                }
            }, {
                key: "getAffixType", value: function () {
                    var t = this.dimensions, e = !1;
                    this._calcDimensionsWithScroll();
                    var i = t.sidebarHeight + t.containerTop, n = t.viewportTop + t.topSpacing,
                        s = t.viewportBottom - t.bottomSpacing;
                    return "up" === this.direction ? n <= t.containerTop ? (t.translateY = 0, e = "STATIC") : n <= t.translateY + t.containerTop ? (t.translateY = n - t.containerTop, e = "VIEWPORT-TOP") : !this.isSidebarFitsViewport() && t.containerTop <= n && (e = "VIEWPORT-UNBOTTOM") : this.isSidebarFitsViewport() ? t.sidebarHeight + n >= t.containerBottom ? (t.translateY = t.containerBottom - i, e = "CONTAINER-BOTTOM") : n >= t.containerTop && (t.translateY = n - t.containerTop, e = "VIEWPORT-TOP") : t.containerBottom <= s ? (t.translateY = t.containerBottom - i, e = "CONTAINER-BOTTOM") : i + t.translateY <= s ? (t.translateY = s - i, e = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= n && (e = "VIEWPORT-UNBOTTOM"), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.lastViewportTop = t.viewportTop, e
                }
            }, {
                key: "_getStyle", value: function (t) {
                    if (void 0 !== t) {
                        var e = {inner: {}, outer: {}}, i = this.dimensions;
                        switch (t) {
                            case"VIEWPORT-TOP":
                                e.inner = {
                                    position: "fixed",
                                    top: i.topSpacing,
                                    left: i.sidebarLeft - i.viewportLeft,
                                    width: i.sidebarWidth
                                };
                                break;
                            case"VIEWPORT-BOTTOM":
                                e.inner = {
                                    position: "fixed",
                                    top: "auto",
                                    left: i.sidebarLeft,
                                    bottom: i.bottomSpacing,
                                    width: i.sidebarWidth
                                };
                                break;
                            case"CONTAINER-BOTTOM":
                            case"VIEWPORT-UNBOTTOM":
                                var n = this._getTranslate(0, i.translateY + "px");
                                e.inner = n ? {transform: n} : {
                                    position: "absolute",
                                    top: i.translateY,
                                    width: i.sidebarWidth
                                }
                        }
                        switch (t) {
                            case"VIEWPORT-TOP":
                            case"VIEWPORT-BOTTOM":
                            case"VIEWPORT-UNBOTTOM":
                            case"CONTAINER-BOTTOM":
                                e.outer = {height: i.sidebarHeight, position: "relative"}
                        }
                        return e.outer = s.extend({
                            height: "",
                            position: ""
                        }, e.outer), e.inner = s.extend({
                            position: "relative",
                            top: "",
                            left: "",
                            bottom: "",
                            width: "",
                            transform: this._getTranslate()
                        }, e.inner), e
                    }
                }
            }, {
                key: "stickyPosition", value: function (t) {
                    if (!this._breakpoint) {
                        t = this._reStyle || t || !1;
                        var e = this.getAffixType(), n = this._getStyle(e);
                        if ((this.affixedType != e || t) && e) {
                            var o = "affix." + e.toLowerCase().replace("viewport-", "") + i;
                            s.eventTrigger(this.sidebar, o), "STATIC" === e ? s.removeClass(this.sidebar, this.options.stickyClass) : s.addClass(this.sidebar, this.options.stickyClass);
                            for (var r in n.outer) this.sidebar.style[r] = n.outer[r];
                            for (var a in n.inner) {
                                var c = "number" == typeof n.inner[a] ? "px" : "";
                                this.sidebarInner.style[a] = n.inner[a] + c
                            }
                            var p = "affixed." + e.toLowerCase().replace("viewport-", "") + i;
                            s.eventTrigger(this.sidebar, p)
                        } else this._initialized && (this.sidebarInner.style.left = n.inner.left);
                        this.affixedType = e
                    }
                }
            }, {
                key: "_widthBreakpoint", value: function () {
                    window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), s.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                }
            }, {
                key: "updateSticky", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._running || (this._running = !0, function (e) {
                        requestAnimationFrame(function () {
                            switch (e) {
                                case"scroll":
                                    t._calcDimensionsWithScroll(), t.observeScrollDir(), t.stickyPosition();
                                    break;
                                case"resize":
                                default:
                                    t._widthBreakpoint(), t.calcDimensions(), t.stickyPosition(!0)
                            }
                            t._running = !1
                        })
                    }(e.type))
                }
            }, {
                key: "_setSupportFeatures", value: function () {
                    var t = this.support;
                    t.transform = s.supportTransform(), t.transform3d = s.supportTransform(!0)
                }
            }, {
                key: "_getTranslate", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
                }
            }, {
                key: "destroy", value: function () {
                    window.removeEventListener("resize", this), window.removeEventListener("scroll", this), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + i, this);
                    var t = {inner: {}, outer: {}};
                    t.inner = {
                        position: "",
                        top: "",
                        left: "",
                        bottom: "",
                        width: "",
                        transform: ""
                    }, t.outer = {height: "", position: ""};
                    for (var e in t.outer) this.sidebar.style[e] = t.outer[e];
                    for (var n in t.inner) this.sidebarInner.style[n] = t.inner[n];
                    this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
                }
            }], [{
                key: "supportTransform", value: function (t) {
                    var e = !1, i = t ? "perspective" : "transform", n = i.charAt(0).toUpperCase() + i.slice(1),
                        s = ["Webkit", "Moz", "O", "ms"], o = document.createElement("support").style;
                    return (i + " " + s.join(n + " ") + n).split(" ").forEach(function (t, i) {
                        if (void 0 !== o[t]) return e = t, !1
                    }), e
                }
            }, {
                key: "eventTrigger", value: function (t, e, i) {
                    try {
                        var n = new CustomEvent(e, {detail: i})
                    } catch (t) {
                        (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
                    }
                    t.dispatchEvent(n)
                }
            }, {
                key: "extend", value: function (t, e) {
                    var i = {};
                    for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
                    return i
                }
            }, {
                key: "offsetRelative", value: function (t) {
                    var e = {left: 0, top: 0};
                    do {
                        var i = t.offsetTop, n = t.offsetLeft;
                        isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
                    } while (t);
                    return e
                }
            }, {
                key: "addClass", value: function (t, e) {
                    s.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
                }
            }, {
                key: "removeClass", value: function (t, e) {
                    s.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                }
            }, {
                key: "hasClass", value: function (t, e) {
                    return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
                }
            }]), s
        }()
    }();
    window.StickySidebar = i, function () {
        if ("undefined" != typeof window) {
            var t = window.$ || window.jQuery || window.Zepto;
            if (t) {
                t.fn.stickySidebar = function (e) {
                    return this.each(function () {
                        var n = t(this), s = t(this).data("stickySidebar");
                        if (s || (s = new i(this, "object" == typeof e && e), n.data("stickySidebar", s)), "string" == typeof e) {
                            if (void 0 === s[e] && -1 === ["destroy", "updateSticky"].indexOf(e)) throw new Error('No method named "' + e + '"');
                            s[e]()
                        }
                    })
                }, t.fn.stickySidebar.Constructor = i;
                var e = t.fn.stickySidebar;
                t.fn.stickySidebar.noConflict = function () {
                    return t.fn.stickySidebar = e, this
                }
            }
        }
    }()
});


/*============================================

                08 -- MeanMenu

==============================================*/


/*
MeanMenu 2.0.7
--------
To be used with jquery.meanmenu.js by Chris Wharton (http://www.meanthemes.com/plugins/meanmenu/)
*/
!function ($) {
    "use strict";
    $.fn.meanmenu = function (e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".acavo-responsive-menu",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var n = e.meanMenuTarget, t = e.meanMenuContainer, r = e.meanMenuClose, i = e.meanMenuCloseSize,
                s = e.meanMenuOpen, u = e.meanRevealPosition, m = e.meanRevealPositionDistance, l = e.meanRevealColour,
                o = e.meanScreenWidth, c = e.meanNavPush, v = ".meanmenu-reveal", h = e.meanShowChildren,
                d = e.meanExpandableChildren, y = e.meanExpand, j = e.meanContract, Q = e.meanRemoveAttrs,
                f = e.onePage, g = e.meanDisplay, p = e.removeElements, C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "", x = function () {
                if ("center" === u) {
                    var e = window.innerWidth || document.documentElement.clientWidth, n = e / 2 - 22 + "px";
                    w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({left: n}) : jQuery(".meanmenu-reveal").css("left", n)
                }
            }, A = !1, E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
            var M = "", P = function () {
                M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
            }, W = function () {
                jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
            }, b = function () {
                var e = "background:" + l + ";color:" + l + ";" + w;
                if (o >= a) {
                    jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var r = jQuery(n).html();
                    jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                    }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function () {
                        jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                    }), jQuery(".mean-expand").on("click", function (e) {
                        e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function () {
                        })) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function () {
                        })), jQuery(this).toggleClass("mean-clicked")
                    })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function (e) {
                        e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove")
                    }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                        jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s)
                    })
                } else W()
            };
            C || jQuery(window).resize(function () {
                a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
            }), jQuery(window).resize(function () {
                a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
            }), b()
        })
    }
}(jQuery);


/*============================================

                09 -- Calculation

==============================================*/


!function (a, b, c, d) {
    function e(a) {
        return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    a.extend(a.fn, {
        accrue: function (b) {
            return b = a.extend({calculationMethod: g}, a.fn.accrue.options, b), this.each(function () {
                var c = a(this);
                c.find(".form").length || c.append('<div class="form"></div>');
                f(c, b, "amount"), f(c, b, "rate"), f(c, b, "term");
                if ("compare" == b.mode) {
                    f(c, b, "rate_compare")
                }
                var d;
                ".results" === b.response_output_div ? (0 === c.find(".results").length && c.append('<div class="results"></div>'), d = c.find(".results")) : d = a(b.response_output_div);
                var e;
                switch (b.mode) {
                    case"basic":
                        e = g;
                        break;
                    case"compare":
                        e = h;
                        break;
                    case"amortization":
                        e = i
                }
                e(c, b, d), "button" == b.operation ? (0 === c.find("button").length && 0 === c.find("input[type=submit]").length && 0 === c.find("input[type=image]").length && c.find(".form").append('<button class="accrue-calculate">' + b.button_label + "</button>"), c.find("button, input[type=submit], input[type=image]").each(function () {
                    a(this).click(function (a) {
                        a.preventDefault(), e(c, b, d)
                    })
                })) : c.find("input, select").each(function () {
                    a(this).bind("keyup change", function () {
                        e(c, b, d)
                    })
                }), c.find("form").each(function () {
                    a(this).submit(function (a) {
                        a.preventDefault(), e(c, b, d)
                    })
                })
            })
        }
    }), a.fn.accrue.options = {
        mode: "basic",
        operation: "keyup",
        default_values: {amount: "$7,500", rate: "7%", rate_compare: "1.49%", term: "36m"},
        field_titles: {amount: "Loan Amount", rate: "Rate (APR)", rate_compare: "Comparison Rate", term: "Term"},
        button_label: "Calculate",
        field_comments: {amount: "", rate: "", rate_compare: "", term: "Format: 12m, 36m, 3y, 7y"},
        response_output_div: ".results",
        response_basic: "<p><strong>Monthly Payment:</strong>$%payment_amount%</p><p><strong>Number of Payments:</strong>%num_payments%</p><p><strong>Total Payments:</strong>$%total_payments%</p><p><strong>Total Interest:</strong>$%total_interest%</p>",
        response_compare: '<p class="total-savings">Save $%savings% in interest!</p>',
        error_text: '<p class="error">Please fill in all fields.</p>',
        callback: function (a, b) {
        }
    };
    var f = function (a, b, c) {
        var d;
        return a.find(".accrue-" + c).length ? d = a.find(".accrue-" + c) : a.find("." + c).length ? d = a.find("." + c) : a.find("input[name~=" + c + "]").length ? a.find("input[name~=" + c + "]") : d = "", "string" != typeof d ? d.val() : "term_compare" == c ? !1 : (a.find(".form").append('<div class="accrue-field-' + c + '"><p><label>' + b.field_titles[c] + ':</label><input type="text" class="' + c + '" value="' + b.default_values[c] + '" />' + (b.field_comments[c].length > 0 ? "<small>" + b.field_comments[c] + "</small>" : "") + "</p></div>"), a.find("." + c).val())
    }, g = function (b, c, d) {
        var g = a.loanInfo({amount: f(b, c, "amount"), rate: f(b, c, "rate"), term: f(b, c, "term")});
        if (0 !== g) {
            var h = c.response_basic.replace("%payment_amount%", e(g.payment_amount_formatted)).replace("%num_payments%", g.num_payments).replace("%total_payments%", e(g.total_payments_formatted)).replace("%total_interest%", e(g.total_interest_formatted));
            d.html(h)
        } else d.html(c.error_text);
        c.callback(b, g)
    }, h = function (b, c, d) {
        var g = f(b, c, "term_compare");
        "boolean" == typeof g && (g = f(b, c, "term"));
        var h = a.loanInfo({amount: f(b, c, "amount"), rate: f(b, c, "rate"), term: f(b, c, "term")}),
            i = a.loanInfo({amount: f(b, c, "amount"), rate: f(b, c, "rate_compare"), term: g}),
            j = {loan_1: h, loan_2: i};
        if (0 !== h && 0 !== i) {
            h.total_interest - i.total_interest > 0 ? j.savings = h.total_interest - i.total_interest : j.savings = 0;
            var k = c.response_compare.replace("%savings%", e(j.savings.toFixed(2))).replace("%loan_1_payment_amount%", e(i.payment_amount_formatted)).replace("%loan_1_num_payments%", i.num_payments).replace("%loan_1_total_payments%", i.total_payments_formatted).replace("%loan_1_total_interest%", e(i.total_interest_formatted)).replace("%loan_2_payment_amount%", e(h.payment_amount_formatted)).replace("%loan_2_num_payments%", h.num_payments).replace("%loan_2_total_payments%", h.total_payments_formatted).replace("%loan_2_total_interest%", e(h.total_interest_formatted));
            d.html(k)
        } else d.html(c.error_text);
        c.callback(b, j)
    }, i = function (b, c, d) {
        var g = a.loanInfo({amount: f(b, c, "amount"), rate: f(b, c, "rate"), term: f(b, c, "term")});
        if (0 !== g) {
            for (var h = '<table class="accrue-amortization"><thead><tr><th class="accrue-payment-number">#</th><th class="accrue-payment-amount">Payment Amt.</th><th class="accrue-total-interest">Total Interest</th><th class="accrue-total-payments">Total Payments</th><th class="accrue-balance">Balance</th></tr></thead><tbody>', i = g.payment_amount - g.original_amount / g.num_payments, j = g.payment_amount - i, k = 0, l = 0, m = parseInt(g.original_amount, 10), n = 0; n < g.num_payments; n++) {
                k += i, l += g.payment_amount, m -= j;
                var o = "td";
                n == g.num_payments - 1 && (o = "th"), h = h + "<tr><" + o + ' class="accrue-payment-number">' + (n + 1) + "</" + o + "><" + o + ' class="accrue-payment-amount">$' + e(g.payment_amount_formatted) + "</" + o + "><" + o + ' class="accrue-total-interest">$' + e(k.toFixed(2)) + "</" + o + "><" + o + ' class="accrue-total-payments">$' + e(l.toFixed(2)) + "</" + o + "><" + o + ' class="accrue-balance">$' + e(m.toFixed(2)) + "</" + o + "></tr>"
            }
            h += "</tbody></table>", d.html(h)
        } else d.html(c.error_text);
        c.callback(b, g)
    };
    a.loanInfo = function (a) {
        var b = ("undefined" != typeof a.amount ? a.amount : 0).toString().replace(/[^\d.]/gi, ""),
            c = ("undefined" != typeof a.rate ? a.rate : 0).toString().replace(/[^\d.]/gi, ""),
            d = "undefined" != typeof a.term ? a.term : 0;
        d = d.match("y") ? 12 * parseInt(d.replace(/[^\d.]/gi, ""), 10) : parseInt(d.replace(/[^\d.]/gi, ""), 10);
        var e = c / 100 / 12, f = Math.pow(1 + e, d), g = b * f * e / (f - 1);
        return b * c * d > 0 ? {
            original_amount: b,
            payment_amount: g,
            payment_amount_formatted: g.toFixed(2),
            num_payments: d,
            total_payments: g * d,
            total_payments_formatted: (g * d).toFixed(2),
            total_interest: g * d - b,
            total_interest_formatted: (g * d - b).toFixed(2)
        } : 0
    }, a.loanAmount = function (a) {
        var b = ("undefined" != typeof a.payment ? a.payment : 0).toString().replace(/[^\d.]/gi, ""),
            c = ("undefined" != typeof a.rate ? a.rate : 0).toString().replace(/[^\d.]/gi, ""),
            d = "undefined" != typeof a.term ? a.term : 0;
        d = d.match("y") ? 12 * parseInt(d.replace(/[^\d.]/gi, ""), 10) : parseInt(d.replace(/[^\d.]/gi, ""), 10);
        var e = c / 100 / 12, f = c / 100, g = b * (1 - Math.pow(1 + e, -1 * d)) * (12 / f);
        return g > 0 ? {
            principal_amount: g,
            principal_amount_formatted: (1 * g).toFixed(2),
            payment_amount: b,
            payment_amount_formatted: (1 * b).toFixed(2),
            num_payments: d,
            total_payments: b * d,
            total_payments_formatted: (b * d).toFixed(2),
            total_interest: b * d - g,
            total_interest_formatted: (b * d - g).toFixed(2)
        } : 0
    }
}(jQuery, window, document);


/*============================================

                10 -- Parallax

==============================================*/


!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
    }
}(function () {
    return function t(e, i, n) {
        function o(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var h = new Error("Cannot find module '" + r + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = i[r] = {exports: {}};
                e[r][0].call(u.exports, function (t) {
                    var i = e[r][1][t];
                    return o(i || t)
                }, u, u.exports, t, e, i, n)
            }
            return i[r].exports
        }

        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function (t, e, i) {
            "use strict";

            function n(t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }

            var o = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                        return e[t]
                    }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                        n[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function (t, e) {
                for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                    i = Object(arguments[h]);
                    for (var u in i) s.call(i, u) && (l[u] = i[u]);
                    if (o) {
                        a = o(i);
                        for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]])
                    }
                }
                return l
            }
        }, {}], 2: [function (t, e, i) {
            (function (t) {
                (function () {
                    var i, n, o, s, r, a;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                        return performance.now()
                    } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
                        return (i() - r) / 1e6
                    }, n = t.hrtime, s = (i = function () {
                        var t;
                        return 1e9 * (t = n())[0] + t[1]
                    })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function () {
                        return Date.now() - o
                    }, o = Date.now()) : (e.exports = function () {
                        return (new Date).getTime() - o
                    }, o = (new Date).getTime())
                }).call(this)
            }).call(this, t("_process"))
        }, {_process: 3}], 3: [function (t, e, i) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (c === setTimeout) return setTimeout(t, 0);
                if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
                try {
                    return c(t, 0)
                } catch (e) {
                    try {
                        return c.call(null, t, 0)
                    } catch (e) {
                        return c.call(this, t, 0)
                    }
                }
            }

            function r(t) {
                if (d === clearTimeout) return clearTimeout(t);
                if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
                try {
                    return d(t)
                } catch (e) {
                    try {
                        return d.call(null, t)
                    } catch (e) {
                        return d.call(this, t)
                    }
                }
            }

            function a() {
                v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l())
            }

            function l() {
                if (!v) {
                    var t = s(a);
                    v = !0;
                    for (var e = f.length; e;) {
                        for (p = f, f = []; ++y < e;) p && p[y].run();
                        y = -1, e = f.length
                    }
                    p = null, v = !1, r(t)
                }
            }

            function h(t, e) {
                this.fun = t, this.array = e
            }

            function u() {
            }

            var c, d, m = e.exports = {};
            !function () {
                try {
                    c = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                    c = n
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    d = o
                }
            }();
            var p, f = [], v = !1, y = -1;
            m.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                f.push(new h(t, e)), 1 !== f.length || v || s(l)
            }, h.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function (t) {
                return []
            }, m.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, m.cwd = function () {
                return "/"
            }, m.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, m.umask = function () {
                return 0
            }
        }, {}], 4: [function (t, e, i) {
            (function (i) {
                for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
                if (!a || !l) {
                    var u = 0, c = 0, d = [];
                    a = function (t) {
                        if (0 === d.length) {
                            var e = n(), i = Math.max(0, 1e3 / 60 - (e - u));
                            u = i + e, setTimeout(function () {
                                var t = d.slice(0);
                                d.length = 0;
                                for (var e = 0; e < t.length; e++) if (!t[e].cancelled) try {
                                    t[e].callback(u)
                                } catch (t) {
                                    setTimeout(function () {
                                        throw t
                                    }, 0)
                                }
                            }, Math.round(i))
                        }
                        return d.push({handle: ++c, callback: t, cancelled: !1}), c
                    }, l = function (t) {
                        for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0)
                    }
                }
                e.exports = function (t) {
                    return a.call(o, t)
                }, e.exports.cancel = function () {
                    l.apply(o, arguments)
                }, e.exports.polyfill = function () {
                    o.requestAnimationFrame = a, o.cancelAnimationFrame = l
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"performance-now": 2}], 5: [function (t, e, i) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(), s = t("raf"), r = t("object-assign"), a = {
                propertyCache: {},
                vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
                clamp: function (t, e, i) {
                    return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t
                },
                data: function (t, e) {
                    return a.deserialize(t.getAttribute("data-" + e))
                },
                deserialize: function (t) {
                    return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                },
                camelCase: function (t) {
                    return t.replace(/-+(.)?/g, function (t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                },
                accelerate: function (t) {
                    a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden")
                },
                transformSupport: function (t) {
                    for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++) if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
                        i = !0;
                        break
                    }
                    switch (t) {
                        case"2D":
                            o = i;
                            break;
                        case"3D":
                            if (i) {
                                var u = document.body || document.createElement("body"), c = document.documentElement,
                                    d = c.style.overflow, m = !1;
                                document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                            }
                    }
                    return o
                },
                css: function (t, e, i) {
                    var n = a.propertyCache[e];
                    if (!n) for (var o = 0, s = a.vendors.length; o < s; o++) if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
                        a.propertyCache[e] = n;
                        break
                    }
                    t.style[n] = i
                }
            }, l = {
                relativeInput: !1,
                clipRelativeInput: !1,
                inputElement: null,
                hoverOnly: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5,
                pointerEvents: !1,
                precision: 1,
                onReady: null,
                selector: null
            }, h = function () {
                function t(e, i) {
                    n(this, t), this.element = e;
                    var o = {
                        calibrateX: a.data(this.element, "calibrate-x"),
                        calibrateY: a.data(this.element, "calibrate-y"),
                        invertX: a.data(this.element, "invert-x"),
                        invertY: a.data(this.element, "invert-y"),
                        limitX: a.data(this.element, "limit-x"),
                        limitY: a.data(this.element, "limit-y"),
                        scalarX: a.data(this.element, "scalar-x"),
                        scalarY: a.data(this.element, "scalar-y"),
                        frictionX: a.data(this.element, "friction-x"),
                        frictionY: a.data(this.element, "friction-y"),
                        originX: a.data(this.element, "origin-x"),
                        originY: a.data(this.element, "origin-y"),
                        pointerEvents: a.data(this.element, "pointer-events"),
                        precision: a.data(this.element, "precision"),
                        relativeInput: a.data(this.element, "relative-input"),
                        clipRelativeInput: a.data(this.element, "clip-relative-input"),
                        hoverOnly: a.data(this.element, "hover-only"),
                        inputElement: document.querySelector(a.data(this.element, "input-element")),
                        selector: a.data(this.element, "selector")
                    };
                    for (var s in o) null === o[s] && delete o[s];
                    r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                }

                return o(t, [{
                    key: "initialise", value: function () {
                        void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                    }
                }, {
                    key: "doReadyCallback", value: function () {
                        this.onReady && this.onReady()
                    }
                }, {
                    key: "updateLayers", value: function () {
                        this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                        for (var t = 0; t < this.layers.length; t++) {
                            var e = this.layers[t];
                            this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                            var i = a.data(e, "depth") || 0;
                            this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i)
                        }
                    }
                }, {
                    key: "updateDimensions", value: function () {
                        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                    }
                }, {
                    key: "updateBounds", value: function () {
                        this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                    }
                }, {
                    key: "queueCalibration", value: function (t) {
                        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                    }
                }, {
                    key: "enable", value: function () {
                        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame))
                    }
                }, {
                    key: "disable", value: function () {
                        this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf))
                    }
                }, {
                    key: "calibrate", value: function (t, e) {
                        this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                    }
                }, {
                    key: "invert", value: function (t, e) {
                        this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                    }
                }, {
                    key: "friction", value: function (t, e) {
                        this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                    }
                }, {
                    key: "scalar", value: function (t, e) {
                        this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                    }
                }, {
                    key: "limit", value: function (t, e) {
                        this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                    }
                }, {
                    key: "origin", value: function (t, e) {
                        this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                    }
                }, {
                    key: "setInputElement", value: function (t) {
                        this.inputElement = t, this.updateDimensions()
                    }
                }, {
                    key: "setPosition", value: function (t, e, i) {
                        e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
                    }
                }, {
                    key: "onOrientationTimer", value: function () {
                        this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                    }
                }, {
                    key: "onMotionTimer", value: function () {
                        this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                    }
                }, {
                    key: "onCalibrationTimer", value: function () {
                        this.calibrationFlag = !0
                    }
                }, {
                    key: "onWindowResize", value: function () {
                        this.updateDimensions()
                    }
                }, {
                    key: "onAnimationFrame", value: function () {
                        this.updateBounds();
                        var t = this.inputX - this.calibrationX, e = this.inputY - this.calibrationY;
                        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                        for (var i = 0; i < this.layers.length; i++) {
                            var n = this.layers[i], o = this.depthsX[i], r = this.depthsY[i],
                                l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                h = this.velocityY * (r * (this.invertY ? -1 : 1));
                            this.setPosition(n, l, h)
                        }
                        this.raf = s(this.onAnimationFrame)
                    }
                }, {
                    key: "rotate", value: function (t, e) {
                        var i = (t || 0) / 30, n = (e || 0) / 30, o = this.windowHeight > this.windowWidth;
                        this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n
                    }
                }, {
                    key: "onDeviceOrientation", value: function (t) {
                        var e = t.beta, i = t.gamma;
                        null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
                    }
                }, {
                    key: "onDeviceMotion", value: function (t) {
                        var e = t.rotationRate.beta, i = t.rotationRate.gamma;
                        null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
                    }
                }, {
                    key: "onMouseMove", value: function (t) {
                        var e = t.clientX, i = t.clientY;
                        if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void (this.inputY = 0);
                        this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                        for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                        delete this.element, delete this.layers
                    }
                }, {
                    key: "version", value: function () {
                        return "3.1.0"
                    }
                }]), t
            }();
            e.exports = h
        }, {"object-assign": 1, raf: 4}]
    }, {}, [5])(5)
});
//# sourceMappingURL=parallax.min.js.map




