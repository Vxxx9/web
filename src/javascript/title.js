! function() {
    const t = document.title;
    let e = !1;
    const n = [function(t, n) {
        let l = 0;
        const o = setInterval((() => {
            if (e) return clearInterval(o);
            document.title = t.split("").map(((t, e) => /[a-zA-Z]/.test(t) ? Math.sin((l + e) / 3) > 0 ? t.toUpperCase() : t.toLowerCase() : t)).join(""), l += .5
        }), 100);
        setTimeout((() => {
            e || (clearInterval(o), document.title = t, n())
        }), 4e3)
    }, function(t, n) {
        const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let o = 0;
        const i = setInterval((() => {
            if (e) return clearInterval(i);
            document.title = t.split("").map(((e, n) => n < o / 50 * t.length ? e : l[Math.floor(62 * Math.random())])).join(""), o++, o > 50 && (clearInterval(i), document.title = t, !e && n())
        }), 50)
    }, function(t, n) {
        let l = 0,
            o = !1;
        ! function i() {
            e || (document.title = o ? t.substring(0, l--) : t.substring(0, ++l), o || l !== t.length ? o && 0 === l ? (document.title = "", !e && n()) : setTimeout(i, o ? 75 : 150) : (o = !0, setTimeout(i, 1e3)))
        }()
    }, function(t, n) {
        const l = t + "   ";
        let o = 0;
        const i = setInterval((() => {
            if (e) return clearInterval(i);
            document.title = l.substring(o) + l.substring(0, o), o = (o + 1) % l.length
        }), 200);
        setTimeout((() => {
            e || (clearInterval(i), document.title = t, n())
        }), 200 * l.length + 2e3)
    }];
    let l = 0;
    ! function o() {
        if (e) return;
        const i = n[l++];
        l >= n.length && (l = 0);
        i(t, (() => setTimeout(o, 1e3)))
    }(), globalThis.stopTitleMagic = () => {
        e = !0
    }
}();