! function(n) {
    n.fn.swipeslider = function(i) {
        function t() { q = B.width(), p() }

        function e(n) { A && (l(), n.originalEvent.touches && (n = n.originalEvent.touches[0]), 0 == H && (H = 1, M = n.clientX)) }

        function o(n) {
            var i;
            i = n.originalEvent.touches ? n.originalEvent.touches[0] : n;
            var t = i.clientX - M;
            if (1 == H && 0 != t && (H = 2, N = z * -q), 2 == H) {
                n.preventDefault();
                var e = 1;
                (0 == z && i.clientX > M || z == Q - 1 && i.clientX < M) && (e = 3), j = N + t / e, T(!1), x(j)
            }
        }

        function s(n) { 2 == H && (H = 0, z = N > j ? z + 1 : z - 1, z = Math.min(Math.max(z, 0), Q - 1), j = z * -q, u(), p(), a()), H = 0 }

        function u() { A = !1, window.setTimeout(c, G) }

        function c() { A = !0 }

        function l() { L = !1, window.clearTimeout(K) }

        function a() { O && (L = !0, f()) }

        function f() { L && (K = window.setTimeout(r, J)) }

        function r() { d(), f() }

        function d() { z += 1, p() }

        function w() { z -= 1, p() }

        function p() { T(!0), x(-z * q), 0 == z ? window.setTimeout(m, G) : z == Q - 1 && window.setTimeout(v, G), k(z) }

        function v() { h(1) }

        function m() { h(Q - 2) }

        function h(n) { T(!1), z = n, x(-q * z), window.setTimeout(g, 50) }

        function g() { T(!0) }

        function T(n) { X(n ? "all" : "none") }

        function x(n) { B.css("transform", "translateX(" + n + "px)") }

        function y(n) { B.css("transition-duration", n + "ms") }

        function b(n) { B.css("transition-timing-function", n) }

        function X(n) { B.css("transition-property", n) }

        function E() { B.after('<span class="sw-next-prev sw-prev"></span>'), D.find(".sw-prev").click(function() { L && (l(), w(), a()) }), B.after('<span class="sw-next-prev sw-next"></span>'), D.find(".sw-next").click(function() { L && (l(), d(), a()) }) }

        function P(n) { B.after('<ul class="sw-bullet"></ul>'); for (var i = B.parent().find(".sw-bullet"), t = 0; n > t; t++) { 0 == t ? i.append('<li class="sw-slide-' + t + ' active"></li>') : i.append('<li class="sw-slide-' + t + '"></li>'); var e = D.find(".sw-slide-" + t);! function(n) { e.click(function() { l(), z = n + 1, p(), a() }) }(t) } }

        function k(n) {
            var i = 0;
            i = 0 == n ? Q - 3 : n == Q - 1 ? 0 : n - 1, D.find(".sw-bullet").find("li").removeClass("active"), D.find(".sw-slide-" + i).addClass("active")
        }
        var D = this,
            B = this.find(".sw-slides"),
            C = { transitionDuration: 500, autoPlay: !0, autoPlayTimeout: 4e3, timingFunction: "ease-out", prevNextButtons: !0, bullets: !0, swipe: !0, },
            F = n.extend(C, i),
            H = 0,
            M = 0,
            N = 0,
            j = 0,
            z = 0,
            Q = 0,
            q = 0,
            A = !0,
            G = F.transitionDuration,
            I = F.swipe,
            J = F.autoPlayTimeout,
            K = void 0,
            L = !0,
            O = F.autoPlay;
        return function() { n(D).css("padding-top", F.sliderHeight), q = B.width(), n(window).resize(t), F.prevNextButtons && E(), B.find(".sw-slide:last-child").clone().prependTo(B), B.find(".sw-slide:nth-child(2)").clone().appendTo(B), Q = B.find(".sw-slide").length, F.bullets && P(Q - 2), y(G), b(F.timingFunction), X("all"), I && (B.on("mousedown touchstart", e), n("html").on("mouseup touchend", s), n("html").on("mousemove touchmove", o)), h(1), a() }(), D
    }
}(jQuery);