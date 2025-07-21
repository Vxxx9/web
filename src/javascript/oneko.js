! function() {
    if (window.matchMedia("(max-width: 600px)").matches) return;
    !0 === window.matchMedia("(prefers-reduced-motion: reduce)") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = document.createElement("div");
    let e = 32,
        n = 32,
        a = 0,
        l = 0,
        o = 0,
        i = 0,
        c = null,
        r = 0;
    const s = {
        idle: [
            [-3, -3]
        ],
        alert: [
            [-7, -3]
        ],
        scratchSelf: [
            [-5, 0],
            [-6, 0],
            [-7, 0]
        ],
        scratchWallN: [
            [0, 0],
            [0, -1]
        ],
        scratchWallS: [
            [-7, -1],
            [-6, -2]
        ],
        scratchWallE: [
            [-2, -2],
            [-2, -3]
        ],
        scratchWallW: [
            [-4, 0],
            [-4, -1]
        ],
        tired: [
            [-3, -2]
        ],
        sleeping: [
            [-2, 0],
            [-2, -1]
        ],
        N: [
            [-1, -2],
            [-1, -3]
        ],
        NE: [
            [0, -2],
            [0, -3]
        ],
        E: [
            [-3, 0],
            [-3, -1]
        ],
        SE: [
            [-5, -1],
            [-5, -2]
        ],
        S: [
            [-6, -3],
            [-7, -2]
        ],
        SW: [
            [-5, -3],
            [-6, -1]
        ],
        W: [
            [-4, -2],
            [-4, -3]
        ],
        NW: [
            [-1, 0],
            [-1, -1]
        ]
    };
    let d;

    function h(s) {
        t.isConnected && (d || (d = s), s - d > 100 && (d = s, function() {
            o += 1;
            const s = e - a,
                d = n - l,
                h = Math.sqrt(s ** 2 + d ** 2);
            if (h < 10 || h < 48) return void
            function() {
                if (i += 1, i > 10 && 0 == Math.floor(200 * Math.random()) && null == c) {
                    let t = ["sleeping", "scratchSelf"];
                    e < 32 && t.push("scratchWallW"), n < 32 && t.push("scratchWallN"), e > window.innerWidth - 32 && t.push("scratchWallE"), n > window.innerHeight - 32 && t.push("scratchWallS"), c = t[Math.floor(Math.random() * t.length)]
                }
                switch (c) {
                    case "sleeping":
                        if (r < 8) {
                            m("tired", 0);
                            break
                        }
                        m("sleeping", Math.floor(r / 4)), r > 192 && u();
                        break;
                    case "scratchWallN":
                    case "scratchWallS":
                    case "scratchWallE":
                    case "scratchWallW":
                    case "scratchSelf":
                        m(c, r), r > 9 && u();
                        break;
                    default:
                        return void m("idle", 0)
                }
                r += 1
            }();
            if (c = null, r = 0, i > 1) return m("alert", 0), i = Math.min(i, 7), void(i -= 1);
            let f;
            f = d / h > .5 ? "N" : "", f += d / h < -.5 ? "S" : "", f += s / h > .5 ? "W" : "", f += s / h < -.5 ? "E" : "", m(f, o), e -= s / h * 10, n -= d / h * 10, e = Math.min(Math.max(16, e), window.innerWidth - 16), n = Math.min(Math.max(16, n), window.innerHeight - 16), t.style.left = e - 16 + "px", t.style.top = n - 16 + "px"
        }()), window.requestAnimationFrame(h))
    }

    function m(e, n) {
        const a = s[e][n % s[e].length];
        t.style.backgroundPosition = `${32*a[0]}px ${32*a[1]}px`
    }

    function u() {
        c = null, r = 0
    }
    const f = document.createElement("style");
    f.innerHTML = "\n\t\t  @keyframes heartBurst {\n\t\t\t  0% { transform: scale(0); opacity: 1; }\n\t\t\t  100% { transform: scale(1); opacity: 0; }\n\t\t  }\n\t\t  .heart {\n\t\t\t  position: absolute;\n\t\t\t  font-size: 2em;\n\t\t\t  animation: heartBurst 1s ease-out;\n\t\t\t  animation-fill-mode: forwards;\n\t\t\t  color: #ab9df2;\n\t\t  }\n\t  ", document.head.appendChild(f), t.addEventListener("click", (function() {
            const e = t.parentElement,
                n = t.getBoundingClientRect(),
                a = window.scrollX || document.documentElement.scrollLeft,
                l = window.scrollY || document.documentElement.scrollTop,
                o = n.left + n.width / 2 + a,
                i = n.top + n.height / 2 + l;
            for (let t = 0; t < 10; t++) {
                const t = document.createElement("div");
                t.className = "heart", t.textContent = "❤";
                const n = 50 * (Math.random() - .5),
                    a = 50 * (Math.random() - .5);
                t.style.left = o + n - 16 + "px", t.style.top = i + a - 16 + "px", t.style.transform = `translate(-50%, -50%) rotate(${360*Math.random()}deg)`, e.appendChild(t), setTimeout((() => {
                    e.removeChild(t)
                }), 800)
            }
        })),
        function() {
            t.id = "oneko", t.ariaHidden = !0, t.style.width = "32px", t.style.height = "32px", t.style.position = "fixed", t.style.pointerEvents = "auto", t.style.imageRendering = "pixelated", t.style.left = e - 16 + "px", t.style.top = n - 16 + "px", t.style.zIndex = Number.MAX_VALUE;
            let o = "./images/effects/Oneko.gif";
            const i = document.currentScript;
            i && i.dataset.cat && (o = i.dataset.cat), t.style.backgroundImage = `url(${o})`, document.body.appendChild(t), document.addEventListener("mousemove", (function(t) {
                a = t.clientX, l = t.clientY
            })), window.requestAnimationFrame(h)
        }()
}();