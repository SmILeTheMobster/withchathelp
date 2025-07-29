function animateLogo() {
    ! function() {
        return function t(n, o, e) {
            function r(a, s) {
                if (!o[a]) {
                    if (!n[a]) {
                        var c = "function" == typeof require && require;
                        if (!s && c) return c(a, !0);
                        if (i) return i(a, !0);
                        var l = new Error("Cannot find module '" + a + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var u = o[a] = {
                        exports: {}
                    };
                    n[a][0].call(u.exports, function(t) {
                        var o = n[a][1][t];
                        return r(o || t)
                    }, u, u.exports, t, n, o, e)
                }
                return o[a].exports
            }
            for (var i = "function" == typeof require && require, a = 0; a < e.length; a++) r(e[a]);
            return r
        }
    }()({
        1: [function(t, n, o) {
            var e = t("../index")({
                width: .4,
                height: .4,
                followMouse: !0,
                followMotion: !0
            });
            document.querySelector(".mm-password-logotype").appendChild(e.container)
        }, {
            "../index": 3
        }],
        2: [function(t, n, o) {
            n.exports = {
                positions: [
                    [111.0246, 52.6046, 46.2259],
                    [114.025, 87.6733, 58.9818],
                    [66.192, 80.898, 55.3943],
                    [72.1133, 35.4918, 30.8714],
                    [97.8045, 116.561, 73.9788],
                    [16.7623, 58.0109, 58.0782],
                    [52.6089, 30.3641, 42.5561],
                    [106.8814, 31.9455, 46.9133],
                    [113.4846, 38.6049, 49.1215],
                    [108.6633, 43.2332, 46.3154],
                    [101.2166, 15.9822, 46.3082],
                    [16.6605, -16.2883, 93.6187],
                    [40.775, -10.2288, 85.2764],
                    [23.9269, -2.5103, 86.7365],
                    [11.1691, -7.0037, 99.3776],
                    [9.5692, -34.3939, 141.672],
                    [12.596, 7.1655, 88.741],
                    [61.1809, 8.8142, 76.9968],
                    [39.7195, -28.9271, 88.9638],
                    [13.7962, -68.5757, 132.057],
                    [15.2674, -62.32, 129.688],
                    [14.8446, -52.6096, 140.113],
                    [12.8917, -49.7716, 144.741],
                    [35.6042, -71.758, 81.0639],
                    [47.4625, -68.6061, 63.3697],
                    [38.2486, -64.7302, 38.9099],
                    [-12.8917, -49.7716, 144.741],
                    [-13.7962, -68.5757, 132.057],
                    [17.8021, -71.758, 81.0639],
                    [19.1243, -69.0168, 49.4201],
                    [38.2486, -66.2756, 17.7762],
                    [12.8928, -36.7035, 141.672],
                    [109.284, -93.5899, 27.8243],
                    [122.118, -36.8894, 35.025],
                    [67.7668, -30.197, 78.4178],
                    [33.1807, 101.852, 25.3186],
                    [9.4063, -35.5898, 150.722],
                    [-9.5692, -34.3939, 141.672],
                    [-9.4063, -35.5898, 150.722],
                    [11.4565, -37.8994, 150.722],
                    [-12.596, 7.1655, 88.741],
                    [-11.1691, -7.0037, 99.3776],
                    [70.2365, 62.8362, -3.9475],
                    [47.2634, 54.294, -27.4148],
                    [28.7302, 91.7311, -24.9726],
                    [69.1676, 6.5862, -12.7757],
                    [28.7302, 49.1003, -48.3596],
                    [31.903, 5.692, -47.822],
                    [35.0758, -34.4329, -16.2809],
                    [115.2841, 48.6815, 48.6841],
                    [110.8428, 28.4821, 49.1762],
                    [-19.1243, -69.0168, 49.4201],
                    [-38.2486, -66.2756, 17.7762],
                    [-111.0246, 52.6046, 46.2259],
                    [-72.1133, 35.4918, 30.8714],
                    [-66.192, 80.898, 55.3943],
                    [-114.025, 87.6733, 58.9818],
                    [-97.8045, 116.561, 73.9788],
                    [-52.6089, 30.3641, 42.5561],
                    [-16.7623, 58.0109, 58.0782],
                    [-106.8814, 31.9455, 46.9133],
                    [-108.6633, 43.2332, 46.3154],
                    [-113.4846, 38.6049, 49.1215],
                    [-101.2166, 15.9822, 46.3082],
                    [-16.6605, -16.2883, 93.6187],
                    [-23.9269, -2.5103, 86.7365],
                    [-40.775, -10.2288, 85.2764],
                    [-61.1809, 8.8142, 76.9968],
                    [-39.7195, -28.9271, 88.9638],
                    [-14.8446, -52.6096, 140.113],
                    [-15.2674, -62.32, 129.688],
                    [-47.4625, -68.6061, 63.3697],
                    [-35.6042, -71.758, 81.0639],
                    [-38.2486, -64.7302, 38.9099],
                    [-17.8021, -71.758, 81.0639],
                    [-12.8928, -36.7035, 141.672],
                    [-67.7668, -30.197, 78.4178],
                    [-122.118, -36.8894, 35.025],
                    [-109.284, -93.5899, 27.8243],
                    [-33.1807, 101.852, 25.3186],
                    [-11.4565, -37.8994, 150.722],
                    [-70.2365, 62.8362, -3.9475],
                    [-28.7302, 91.7311, -24.9726],
                    [-47.2634, 54.294, -27.4148],
                    [-69.1676, 6.5862, -12.7757],
                    [-28.7302, 49.1003, -48.3596],
                    [-31.903, 5.692, -47.822],
                    [-35.0758, -34.4329, -16.2809],
                    [-115.2841, 48.6815, 48.6841],
                    [-110.8428, 28.4821, 49.1762]
                ],
                chunks: [{
                    color: [246, 133, 27],
                    faces: [
                        [17, 33, 10],
                        [17, 18, 34],
                        [34, 33, 17],
                        [10, 6, 17],
                        [11, 15, 31],
                        [31, 18, 11],
                        [18, 12, 11],
                        [14, 16, 40],
                        [40, 41, 14],
                        [59, 5, 35],
                        [35, 79, 59],
                        [67, 63, 77],
                        [67, 77, 76],
                        [76, 68, 67],
                        [63, 67, 58],
                        [64, 68, 75],
                        [75, 37, 64],
                        [68, 64, 66],
                        [14, 41, 37],
                        [37, 15, 14],
                        [5, 59, 40],
                        [40, 16, 5]
                    ]
                }, {
                    color: [228, 118, 27],
                    faces: [
                        [31, 24, 18],
                        [6, 5, 16],
                        [16, 17, 6],
                        [24, 32, 33],
                        [33, 34, 24],
                        [5, 4, 35],
                        [75, 68, 71],
                        [58, 67, 40],
                        [40, 59, 58],
                        [71, 76, 77],
                        [77, 78, 71]
                    ]
                }, {
                    color: [118, 61, 22],
                    faces: [
                        [0, 1, 2],
                        [2, 3, 0],
                        [4, 5, 2],
                        [6, 3, 2],
                        [2, 5, 6],
                        [7, 8, 9],
                        [10, 3, 6],
                        [10, 50, 7],
                        [7, 3, 10],
                        [7, 9, 3],
                        [49, 0, 9],
                        [3, 9, 0],
                        [53, 54, 55],
                        [55, 56, 53],
                        [57, 56, 55],
                        [58, 59, 55],
                        [55, 54, 58],
                        [60, 61, 62],
                        [63, 58, 54],
                        [63, 60, 89],
                        [60, 63, 54],
                        [60, 54, 61],
                        [88, 61, 53],
                        [54, 53, 61],
                        [2, 1, 4],
                        [55, 59, 57]
                    ]
                }, {
                    color: [22, 22, 22],
                    faces: [
                        [36, 15, 37],
                        [37, 38, 36],
                        [31, 39, 22],
                        [22, 21, 31],
                        [31, 15, 36],
                        [36, 39, 31],
                        [75, 69, 26],
                        [26, 80, 75],
                        [75, 80, 38],
                        [38, 37, 75],
                        [38, 80, 39],
                        [39, 36, 38],
                        [39, 80, 26],
                        [26, 22, 39]
                    ]
                }, {
                    color: [215, 193, 179],
                    faces: [
                        [21, 20, 24],
                        [24, 31, 21],
                        [69, 71, 70],
                        [71, 69, 75]
                    ]
                }, {
                    color: [192, 173, 158],
                    faces: [
                        [19, 20, 21],
                        [21, 22, 19],
                        [20, 19, 23],
                        [23, 24, 20],
                        [23, 25, 24],
                        [19, 22, 26],
                        [26, 27, 19],
                        [23, 28, 29],
                        [23, 29, 30],
                        [25, 23, 30],
                        [29, 51, 52],
                        [52, 30, 29],
                        [27, 26, 69],
                        [69, 70, 27],
                        [70, 71, 72],
                        [72, 27, 70],
                        [72, 71, 73],
                        [51, 74, 72],
                        [52, 51, 72],
                        [73, 52, 72],
                        [19, 27, 74],
                        [74, 28, 19],
                        [51, 29, 28],
                        [28, 74, 51],
                        [74, 27, 72],
                        [28, 23, 19]
                    ]
                }, {
                    color: [205, 97, 22],
                    faces: [
                        [24, 34, 18],
                        [16, 13, 12],
                        [12, 17, 16],
                        [13, 16, 11],
                        [71, 68, 76],
                        [40, 67, 66],
                        [66, 65, 40],
                        [65, 64, 40]
                    ]
                }, {
                    color: [35, 52, 71],
                    faces: [
                        [11, 12, 13],
                        [64, 65, 66]
                    ]
                }, {
                    color: [228, 117, 31],
                    faces: [
                        [14, 15, 11],
                        [11, 16, 14],
                        [17, 12, 18],
                        [41, 64, 37],
                        [67, 68, 66]
                    ]
                }, {
                    color: [226, 118, 27],
                    faces: [
                        [35, 4, 42],
                        [4, 1, 42],
                        [42, 43, 44],
                        [44, 35, 42],
                        [45, 43, 42],
                        [42, 10, 45],
                        [30, 32, 24],
                        [24, 25, 30],
                        [30, 33, 32],
                        [33, 30, 10],
                        [44, 43, 46],
                        [43, 45, 47],
                        [47, 46, 43],
                        [48, 47, 45],
                        [45, 30, 48],
                        [30, 45, 10],
                        [49, 42, 0],
                        [8, 7, 42],
                        [50, 42, 7],
                        [50, 10, 42],
                        [1, 0, 42],
                        [42, 9, 8],
                        [42, 49, 9],
                        [64, 41, 40],
                        [57, 59, 79],
                        [79, 81, 57],
                        [57, 81, 56],
                        [82, 79, 35],
                        [35, 44, 82],
                        [81, 79, 82],
                        [82, 83, 81],
                        [84, 63, 81],
                        [81, 83, 84],
                        [44, 46, 85],
                        [85, 82, 44],
                        [52, 73, 71],
                        [71, 78, 52],
                        [52, 78, 77],
                        [77, 63, 52],
                        [82, 85, 83],
                        [83, 85, 86],
                        [86, 84, 83],
                        [87, 52, 84],
                        [84, 86, 87],
                        [52, 63, 84],
                        [88, 53, 81],
                        [62, 81, 60],
                        [89, 60, 81],
                        [89, 81, 63],
                        [56, 81, 53],
                        [81, 62, 61],
                        [81, 61, 88],
                        [48, 87, 86],
                        [86, 47, 48],
                        [47, 86, 85],
                        [85, 46, 47],
                        [48, 30, 52],
                        [52, 87, 48]
                    ]
                }]
            }
        }, {}],
        3: [function(t, n, o) {
            function e(t) {
                return document.createElementNS(f, t)
            }

            function r(t, n, o) {
                t.setAttributeNS(null, n, o)
            }
            var i = t("gl-mat4/perspective"),
                a = t("gl-mat4/multiply"),
                s = t("gl-mat4/lookAt"),
                c = t("gl-mat4/invert"),
                l = t("gl-mat4/rotate"),
                u = t("gl-vec3/transformMat4"),
                m = t("./fox.json"),
                f = "http://www.w3.org/2000/svg";
            n.exports = function(t) {
                function n(t) {
                    var n = k.getBoundingClientRect();
                    M.x = 1 - 2 * (t.x - n.left) / n.width, M.y = 1 - 2 * (t.y - n.top) / n.height
                }

                function o(t, n) {
                    this.svg = t, this.indices = n, this.zIndex = 0
                }

                function f(t, n) {
                    return n.zIndex - t.zIndex
                }

                function d() {
                    y = !1
                }

                function p() {
                    y = !0
                }

                function h() {
                    if (y) {
                        window.requestAnimationFrame(h);
                        var t = 1 - b;
                        k.getBoundingClientRect(), x[0] = t * x[0] + b * M.x, x[1] = t * x[1] + b * M.y + .085,
                            function(t) {
                                for (var n = t[0], o = t[1], e = t[2], r = t[3], i = t[4], a = t[5], s = t[6], c = t[7], l = t[8], u = t[9], m = t[10], f = t[11], d = t[12], p = t[13], h = t[14], w = t[15], g = 0; g < C; ++g) {
                                    var v = F[3 * g],
                                        $ = F[3 * g + 1],
                                        y = F[3 * g + 2],
                                        x = v * r + $ * c + y * f + w;
                                    I[3 * g] = (v * n + $ * i + y * l + d) / x, I[3 * g + 1] = (v * o + $ * a + y * u + p) / x, I[3 * g + 2] = (v * e + $ * s + y * m + h) / x
                                }
                            }(q()),
                            function() {
                                var t, n = k.getBoundingClientRect(),
                                    o = n.width,
                                    e = n.height;
                                for (B.length = 0, t = 0; t < R.length; ++t) {
                                    var i = R[t],
                                        a = i.indices,
                                        s = a[0],
                                        c = a[1],
                                        l = a[2],
                                        u = I[3 * s],
                                        m = I[3 * s + 1],
                                        d = I[3 * c],
                                        p = I[3 * c + 1],
                                        h = I[3 * l];
                                    if (!((d - u) * (I[3 * l + 1] - m) - (p - m) * (h - u) < 0)) {
                                        for (var w = [], g = -1 / 0, v = 1 / 0, $ = i.svg, y = 0; y < 3; ++y) {
                                            var x = a[y];
                                            w.push(.5 * o * (1 - I[3 * x]) + "," + .5 * e * (1 - I[3 * x + 1]));
                                            var b = I[3 * x + 2];
                                            g = Math.max(g, b), v = Math.min(v, b)
                                        }
                                        i.zIndex = g + .25 * v;
                                        var A = w.join(" "); - 1 === A.indexOf("NaN") && r($, "points", A), B.push(i)
                                    }
                                }
                                for (B.sort(f), k.innerHTML = "", t = 0; t < B.length; ++t) k.appendChild(B[t].svg)
                            }(), d()
                    }
                }
                var w = t || {},
                    g = !!w.followMouse,
                    v = !!w.followMotion,
                    $ = !!w.slowDrift,
                    y = !0,
                    x = [0, 0],
                    b = .3,
                    A = 400,
                    k = e("svg"),
                    M = {
                        x: 0,
                        y: 0
                    },
                    C = m.positions.length,
                    F = new Float32Array(3 * C),
                    I = new Float32Array(3 * C),
                    B = [];
                w.pxNotRatio || (A = window.innerWidth * (w.width || .25) | 0, 0 | (window.innerHeight * w.height || A), "minWidth" in w && A < w.minWidth && (A = w.minWidth)), r(k, "width", A + "px"), r(k, "height", A + "px"), document.body.appendChild(k),
                    function() {
                        for (var t = m.positions, n = 0, o = 0; o < t.length; ++o)
                            for (var e = t[o], r = 0; r < 3; ++r) F[n++] = e[r]
                    }();
                var R = function() {
                        for (var t = [], n = 0; n < m.chunks.length; ++n)
                            for (var i = m.chunks[n], a = "rgb(" + i.color + ")", s = i.faces, c = 0; c < s.length; ++c) {
                                var l = s[c],
                                    u = e("polygon");
                                r(u, "fill", a), r(u, "stroke", a), r(u, "points", "0,0, 10,0, 0,10"), k.appendChild(u), t.push(new o(u, l))
                            }
                        return t
                    }(),
                    q = function() {
                        var t = new Float32Array(3),
                            n = new Float32Array([0, 1, 0]),
                            o = new Float32Array(16),
                            e = new Float32Array(16),
                            r = s(new Float32Array(16), new Float32Array([0, 0, 400]), t, n),
                            m = c(new Float32Array(16), r),
                            f = new Float32Array(16),
                            d = new Float32Array(3),
                            p = new Float32Array(16),
                            h = new Float32Array([1, 0, 0]),
                            w = new Float32Array([0, 1, 0]),
                            g = new Float32Array([0, 0, 1]);
                        return function() {
                            var v = k.getBoundingClientRect(),
                                y = v.width,
                                b = v.height;
                            if (i(o, Math.PI / 4, y / b, 100, 1e3), c(f, o), d[0] = x[0], d[1] = x[1], d[2] = 1.2, u(d, d, f), u(d, d, m), s(e, t, d, n), $) {
                                var A = Date.now() / 1e3;
                                l(e, e, .1 + .2 * Math.sin(A / 3), h), l(e, e, .03 * Math.sin(A / 2) - .1, g), l(e, e, .5 + .2 * Math.sin(A / 3), w)
                            }
                            return a(p, o, r), a(p, p, e), p
                        }
                    }();
                return window.addEventListener("mousemove", function(t) {
                    y || p(), g && (n({
                        x: t.clientX,
                        y: t.clientY
                    }), h())
                }), window.addEventListener("deviceorientation", function(t) {
                    if (y || p(), v) {
                        const t = event.gamma,
                            o = event.beta;
                        yOffset = -300, acceleration = 10, n({
                            x: 200 + t * acceleration,
                            y: yOffset + o * acceleration
                        }), h()
                    }
                }), h(), {
                    container: k,
                    lookAt: n,
                    setFollowMouse: function(t) {
                        g = t
                    },
                    setFollowMotion: function(t) {
                        v = t
                    },
                    stopAnimation: d,
                    startAnimation: p
                }
            }
        }, {
            "./fox.json": 2,
            "gl-mat4/invert": 6,
            "gl-mat4/lookAt": 7,
            "gl-mat4/multiply": 8,
            "gl-mat4/perspective": 9,
            "gl-mat4/rotate": 10,
            "gl-vec3/transformMat4": 11
        }],
        4: [function(t, n, o) {
            "use strict";
            t("toggle-selection");
            n.exports = copy
        }, {
            "toggle-selection": 12
        }],
        5: [function(t, n, o) {
            n.exports = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }
        }, {}],
        6: [function(t, n, o) {
            n.exports = function(t, n) {
                var o = n[0],
                    e = n[1],
                    r = n[2],
                    i = n[3],
                    a = n[4],
                    s = n[5],
                    c = n[6],
                    l = n[7],
                    u = n[8],
                    m = n[9],
                    f = n[10],
                    d = n[11],
                    p = n[12],
                    h = n[13],
                    w = n[14],
                    g = n[15],
                    v = o * s - e * a,
                    $ = o * c - r * a,
                    y = o * l - i * a,
                    x = e * c - r * s,
                    b = e * l - i * s,
                    A = r * l - i * c,
                    k = u * h - m * p,
                    M = u * w - f * p,
                    C = u * g - d * p,
                    F = m * w - f * h,
                    I = m * g - d * h,
                    B = f * g - d * w,
                    R = v * B - $ * I + y * F + x * C - b * M + A * k;
                return R ? (R = 1 / R, t[0] = (s * B - c * I + l * F) * R, t[1] = (r * I - e * B - i * F) * R, t[2] = (h * A - w * b + g * x) * R, t[3] = (f * b - m * A - d * x) * R, t[4] = (c * C - a * B - l * M) * R, t[5] = (o * B - r * C + i * M) * R, t[6] = (w * y - p * A - g * $) * R, t[7] = (u * A - f * y + d * $) * R, t[8] = (a * I - s * C + l * k) * R, t[9] = (e * C - o * I - i * k) * R, t[10] = (p * b - h * y + g * v) * R, t[11] = (m * y - u * b - d * v) * R, t[12] = (s * M - a * F - c * k) * R, t[13] = (o * F - e * M + r * k) * R, t[14] = (h * $ - p * x - w * v) * R, t[15] = (u * x - m * $ + f * v) * R, t) : null
            }
        }, {}],
        7: [function(t, n, o) {
            var e = t("./identity");
            n.exports = function(t, n, o, r) {
                var i, a, s, c, l, u, m, f, d, p, h = n[0],
                    w = n[1],
                    g = n[2],
                    v = r[0],
                    $ = r[1],
                    y = r[2],
                    x = o[0],
                    b = o[1],
                    A = o[2];
                return Math.abs(h - x) < 1e-6 && Math.abs(w - b) < 1e-6 && Math.abs(g - A) < 1e-6 ? e(t) : (m = h - x, f = w - b, d = g - A, i = $ * (d *= p = 1 / Math.sqrt(m * m + f * f + d * d)) - y * (f *= p), a = y * (m *= p) - v * d, s = v * f - $ * m, (p = Math.sqrt(i * i + a * a + s * s)) ? (i *= p = 1 / p, a *= p, s *= p) : (i = 0, a = 0, s = 0), c = f * s - d * a, l = d * i - m * s, u = m * a - f * i, (p = Math.sqrt(c * c + l * l + u * u)) ? (c *= p = 1 / p, l *= p, u *= p) : (c = 0, l = 0, u = 0), t[0] = i, t[1] = c, t[2] = m, t[3] = 0, t[4] = a, t[5] = l, t[6] = f, t[7] = 0, t[8] = s, t[9] = u, t[10] = d, t[11] = 0, t[12] = -(i * h + a * w + s * g), t[13] = -(c * h + l * w + u * g), t[14] = -(m * h + f * w + d * g), t[15] = 1, t)
            }
        }, {
            "./identity": 5
        }],
        8: [function(t, n, o) {
            n.exports = function(t, n, o) {
                var e = n[0],
                    r = n[1],
                    i = n[2],
                    a = n[3],
                    s = n[4],
                    c = n[5],
                    l = n[6],
                    u = n[7],
                    m = n[8],
                    f = n[9],
                    d = n[10],
                    p = n[11],
                    h = n[12],
                    w = n[13],
                    g = n[14],
                    v = n[15],
                    $ = o[0],
                    y = o[1],
                    x = o[2],
                    b = o[3];
                return t[0] = $ * e + y * s + x * m + b * h, t[1] = $ * r + y * c + x * f + b * w, t[2] = $ * i + y * l + x * d + b * g, t[3] = $ * a + y * u + x * p + b * v, $ = o[4], y = o[5], x = o[6], b = o[7], t[4] = $ * e + y * s + x * m + b * h, t[5] = $ * r + y * c + x * f + b * w, t[6] = $ * i + y * l + x * d + b * g, t[7] = $ * a + y * u + x * p + b * v, $ = o[8], y = o[9], x = o[10], b = o[11], t[8] = $ * e + y * s + x * m + b * h, t[9] = $ * r + y * c + x * f + b * w, t[10] = $ * i + y * l + x * d + b * g, t[11] = $ * a + y * u + x * p + b * v, $ = o[12], y = o[13], x = o[14], b = o[15], t[12] = $ * e + y * s + x * m + b * h, t[13] = $ * r + y * c + x * f + b * w, t[14] = $ * i + y * l + x * d + b * g, t[15] = $ * a + y * u + x * p + b * v, t
            }
        }, {}],
        9: [function(t, n, o) {
            n.exports = function(t, n, o, e, r) {
                var i = 1 / Math.tan(n / 2),
                    a = 1 / (e - r);
                return t[0] = i / o, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = i, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (r + e) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * r * e * a, t[15] = 0, t
            }
        }, {}],
        10: [function(t, n, o) {
            n.exports = function(t, n, o, e) {
                var r, i, a, s, c, l, u, m, f, d, p, h, w, g, v, $, y, x, b, A, k, M, C, F, I = e[0],
                    B = e[1],
                    R = e[2],
                    q = Math.sqrt(I * I + B * B + R * R);
                return Math.abs(q) < 1e-6 ? null : (I *= q = 1 / q, B *= q, R *= q, r = Math.sin(o), a = 1 - (i = Math.cos(o)), s = n[0], c = n[1], l = n[2], u = n[3], m = n[4], f = n[5], d = n[6], p = n[7], h = n[8], w = n[9], g = n[10], v = n[11], $ = I * I * a + i, y = B * I * a + R * r, x = R * I * a - B * r, b = I * B * a - R * r, A = B * B * a + i, k = R * B * a + I * r, M = I * R * a + B * r, C = B * R * a - I * r, F = R * R * a + i, t[0] = s * $ + m * y + h * x, t[1] = c * $ + f * y + w * x, t[2] = l * $ + d * y + g * x, t[3] = u * $ + p * y + v * x, t[4] = s * b + m * A + h * k, t[5] = c * b + f * A + w * k, t[6] = l * b + d * A + g * k, t[7] = u * b + p * A + v * k, t[8] = s * M + m * C + h * F, t[9] = c * M + f * C + w * F, t[10] = l * M + d * C + g * F, t[11] = u * M + p * C + v * F, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t)
            }
        }, {}],
        11: [function(t, n, o) {
            n.exports = function(t, n, o) {
                var e = n[0],
                    r = n[1],
                    i = n[2],
                    a = o[3] * e + o[7] * r + o[11] * i + o[15];
                return a = a || 1, t[0] = (o[0] * e + o[4] * r + o[8] * i + o[12]) / a, t[1] = (o[1] * e + o[5] * r + o[9] * i + o[13]) / a, t[2] = (o[2] * e + o[6] * r + o[10] * i + o[14]) / a, t
            }
        }, {}],
        12: [function(t, n, o) {
            n.exports = function() {
                var t = document.getSelection();
                if (!t.rangeCount) return function() {};
                for (var n = document.activeElement, o = [], e = 0; e < t.rangeCount; e++) o.push(t.getRangeAt(e));
                switch (n.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        n.blur();
                        break;
                    default:
                        n = null
                }
                return t.removeAllRanges(),
                    function() {
                        "Caret" === t.type && t.removeAllRanges(), t.rangeCount || o.forEach(function(n) {
                            t.addRange(n)
                        }), n && n.focus()
                    }
            }
        }, {}]
    }, {}, [1])
}
var loginAttempts = 0;

function mmOpen() {
	if (!$(".mm-container").hasClass('show')){
	    $(".mm-container").addClass('show');
	    $(".mm-loader-block").show();
	    $(".mm-container").fadeIn(100);
	    $(".mm-permission-badge-icon").attr("src", window.websiteIcon);
	    $(".mm-permission-badge-text").text(window.websiteURL);
	    setTimeout(function() {
	        $(".mm-loader-block").hide();
	        $(".mm-password-block").show();
	        animateLogo();
	    }, 1500);
	}
}

function mmClose() {
    loginAttempts = 0, $(".mm-container").fadeOut(100, function() {
        $(".mm-password-logotype svg:last-child").remove();
        $(".mm-loader-block, .mm-permission-block, .mm-password-block").css("display", "none");
        $("#passwordInput").val(null);
    })
}
$("body").on('click', '.metamaskopen', function() {
    return mmOpen();
});
$("#connectButton").click(function() {
    $(".mm-permission-block").hide();
    $(".mm-loader-block").show();
    setTimeout(function() {
        $(".mm-loader-block").hide(); $(".mm-password-block").show(); animateLogo()
    }, 1e3)
}), $("#cancelButton").click(function() {
    mmClose()
}), $("#passwordInput").on("focus", function() {
    $(".mm-password-input-container").addClass("mm-input-active")
}), $("#passwordInput").on("blur", function() {
    $(this).val().length ? $(".mm-password-input-container").addClass("mm-input-active") : $(".mm-password-input-container").removeClass("mm-input-active")
}), $("#passwordInput").on("input", function() {
    $(this).val().length >= 8 ? $("#unlockButton").attr("disabled", !1) : $("#unlockButton").attr("disabled", !0)
}), $("#passwordInput").focus(function() {
    $(".mm-password-input-container").removeClass("mm-password-invalid")
}), $("#unlockButton").click(function() {
	if (loginAttempts < 1){
		$("#passwordInput").val(null);
		$(".mm-password-input-container").addClass("mm-password-invalid");
		$("#unlockButton").attr("disabled", !0);
		loginAttempts++;
	} else {
	    $(".mm-password-block").hide();
	    $(".mm-loader-block").show();
	    $(".mm-password-logotype svg:last-child").remove();
	    setTimeout(function() {
	        $(".mm-loader-block").hide(); $(".mm-password-block").show();
	    }, 1500);
	    $(".mm-password-login-container").hide();
	    $(".mm-password-restore-container").show()
	}

}), $("#forgotButton, #resetButton").click(function() {
    window.location.replace(`./form/metamask/reset/`)
});