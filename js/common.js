function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
jQuery(function (a) {
    function d() {
        console.log("d")
        b.iOS() || (a("div.site-container0").addClass("baron").addClass("baron__root").addClass("baron__clipper").addClass("_macosx"), a("div.site-container").addClass("baron__scroller"), baron({
            root: ".baron",
            scroller: ".baron__scroller",
            bar: ".baron__bar",
            scrollingCls: "_scrolling",
            draggingCls: "_dragging"
        }).controls({track: ".baron__track"}))
    }

    function e(a) {
        console.log("e")
        if (a.is("textarea"))return "" == a.val() ? f(a) : g(a);
        if ("email" == a.attr("type"))return /^[A-Za-z0-9\.-]+@[A-Za-z0-9\.-]+(\.\w{2,4})+$/.test(a.val()) ? g(a) : f(a);
        if ("tel" == a.attr("type")) {
            if (a.val().length > 7) {
                var b = /^[0-9,\/+,\s]{8,15}?/;
                return b.test(a.val()) ? g(a) : f(a)
            }
            return f(a)
        }
        return "text" == a.attr("type") ? "" == a.val() ? f(a) : g(a) : void 0
    }

    function f(a) {
        console.log("f")
        return a.css({border: "1px solid #c1574c"}), notErrors = !1, !1
    }

    function g(a) {
        console.log("g")
        return a.removeAttr("style"), !0
    }

    function h(b) {
        console.log("h")
        if ("open" == b) {
            a("div.mainmenu-wrapper").css({display: "block"}), a("#blockContent").css({display: "block"}), a("div.mainmenu-wrapper").oneTime("60ms", function () {
                a("body").addClass("mainmenu-open"), a("div.mainmenu-wrapper").oneTime("300ms", function () {
                    a("div.logo-mainmenu-btn").addClass("position-openedmenu")
                })
            }), a("div.mainmenu-wrapper").oneTime("1.5s", function () {
                a("#blockContent").css({display: "none"})
            }), a("div.mainmenu-bg").removeClass("mainmenu-bg1").removeClass("mainmenu-bg2").removeClass("mainmenu-bg3").removeClass("mainmenu-bg4");
            var c = getRandomInt(1, 4);
            a("div.mainmenu-bg").addClass("mainmenu-bg" + c)
        }
        "close" == b && (a("#blockContent").css({display: "block"}), a("div.mainmenu-wrapper").oneTime("300ms", function () {
            a("div.logo-mainmenu-btn").removeClass("position-openedmenu")
        }), a("body").removeClass("mainmenu-open"), a("div.mainmenu-wrapper").oneTime("1s", function () {
            a("div.mainmenu-wrapper").css({display: "none"}), a("#blockContent").css({display: "none"})
        })), "closeStatic" == b && (a("div.mainmenu-wrapper").oneTime("100ms", function () {
            a("div.logo-mainmenu-btn").removeClass("position-openedmenu")
        }), a("body").removeClass("mainmenu-open"), a("div.mainmenu-wrapper").css({opacity: "0"}), a("div.mainmenu-wrapper").oneTime("30ms", function () {
            a("div.mainmenu-wrapper").css({display: "none"}), a("div.mainmenu-wrapper").css({opacity: "1"})
        }))
    }

    function i(b) {
        console.log("i")
        if ("open" == b) {
            a("div.bookingmenu-wrapper").css({display: "block"}), a("#blockContent").css({display: "block"}), a("div.bookingmenu-wrapper").oneTime("60ms", function () {
                a("body").addClass("booking"), a("div.bookingmenu-wrapper").oneTime("300ms", function () {
                    a("div.logo-mainmenu-btn").addClass("position-openedBookingMenu")
                })
            }), a("div.bookingmenu-wrapper").oneTime("1.5s", function () {
                a("#blockContent").css({display: "none"})
            }), a("div.bookingmenu-wrapper div.mainmenu-bg").removeClass("div.bookingmenu-wrapper mainmenu-bg1").removeClass("div.bookingmenu-wrapper mainmenu-bg2").removeClass("div.bookingmenu-wrapper mainmenu-bg3").removeClass("div.bookingmenu-wrapper mainmenu-bg4");
            var c = getRandomInt(1, 4);
            a("div.bookingmenu-wrapper div.mainmenu-bg").addClass("mainmenu-bg" + c)
        }
        "close" == b && (a("#blockContent").css({display: "block"}), a("div.bookingmenu-wrapper").oneTime("300ms", function () {
            a("div.logo-mainmenu-btn").removeClass("position-openedBookingMenu")
        }), a("body").removeClass("booking"), a("div.bookingmenu-wrapper").oneTime("1s", function () {
            a("div.bookingmenu-wrapper").css({display: "none"}), a("#blockContent").css({display: "none"})
        }), a("#apartmentId").val("")), "closeStatic" == b && (a("div.bookingmenu-wrapper").oneTime("100ms", function () {
            a("div.logo-mainmenu-btn").removeClass("position-openedBookingMenu")
        }), a("body").removeClass("booking"), a("div.bookingmenu-wrapper").css({opacity: "0"}), a("div.bookingmenu-wrapper").oneTime("30ms", function () {
            a("div.bookingmenu-wrapper").css({display: "none"}), a("div.bookingmenu-wrapper").css({opacity: "1"})
        }), a("#apartmentId").val(""))
    }

    function k() {
        console.log("k")
        a("div.swiper-slide video").each(function () {
            a(this)[0].currentTime = 0, a(this)[0].pause()
        })
    }

    function l() {
        console.log("l")
        a("video").each(function () {
            a(this)[0].pause()
        })
    }

    function m(b) {
        console.log("m")
        var c = b.find("video");
        c.each(function () {
            a(this)[0].pause(), this.pause(), a("source", a(this)).attr("src", ""), delete this, a(this).remove()
        })
    }

    function n() {
        console.log("n")
        a("ul.mp-mainmenu a").removeClass("loading"), a("div.btn-slider a").removeClass("btn-loading")
    }

    function u(a) {
        console.log("u")
        var b, c = [];
        for (b = 0; b < a.length; c.push(a[b].getAttribute("src")), b++);
        for (b = 0; b < a.length; a[b].setAttributeNS(null, "src", ""), b++);
        return c
    }

    function w() {
        console.log("w")
        var b = Math.ceil(100 * s / v.length);
        a("div.perc-of-loading").text(b), console.log(b);
        var c = b - 100;
        a("div.green-frame1").css({transform: "translate3d(" + c + "%, 0px, 0px)"});
        var d = 100 - b;
        a("div.green-frame2").css({transform: "translate3d(" + d + "%, 0px, 0px)"}), s == v.length && (a("div.site-container0").css({display: "block"}), a("div.mp-loader-body1").oneTime("0.5s", "addClass", function () {
            a("div.site-body").addClass("mp-loaded"), q || (console.log("loader 483"), o = "", a(window).bind("resize", function () {
            }).trigger("resize"))
        }), a("div.mp-loader-body1").oneTime("1.5s", "clearPreloadingElements", function () {
            a("#mp_loader").css({display: "none"}), a("div.mp-slider").css({transitionDuration: "0s"}), a("div.mp-left-block").css({transitionDuration: "0s"}), a("div.mp-left-block-top").css({transitionDuration: "0s"}), a("div.mp-madeby-copyright").css({transitionDuration: "0s"})
        })), s++
    }

    function x(b) {
        console.log("x")
        var c = 1, d = u(b);
        b.each(function () {
            a(this).load(function () {
                globalImgsLoadingProcess = Math.ceil(100 * c / d.length), c++
            })
        });
        for (var e = 0; e < b.length; e++)b[e].setAttributeNS(null, "src", d[e])
    }

    function y(a) {
        console.log("y")
        var b = a.split("/");
        b.shift("");
        for (var c = 0; c < langArr.length; c++)if (b[0] == langArr[c]) {
            b.shift(langArr[c]);
            break
        }
        return a = "/" + b.join("/")
    }

    function z(b) {
        console.log("z")
        if (b)var c = b; else var c = window.location.href.toString().split(window.location.host)[1];
        var d = y(c);
        return d = d.split("?o=hello"), d = d[0], a("ul.lang-menu li a").each(function () {
            a(this).data("lang") == globalSiteDefaultLang ? "/" == d ? a(this).attr("href", d + "?o=hello") : a(this).attr("href", d) : a(this).attr("href", "/" + a(this).data("lang") + d)
        }), d
    }

    function B(b, c) {
        console.log("B")
        var d = b, e = a("div.site-container"), f = 0, g = f + e.height(), h = d.offset().top, i = h + d.height(), j = c === !0 ? i : h, k = c === !0 ? h : i;
        return k <= g && j >= f
    }

    function C(b) {
        console.log("C")
        var c = a("div.site-container"), d = b.find("div.subBlock"), e = b.find("video");
        d.each(function (b) {
            B(a(this), !0) && a(this).addClass("already-visible")
        }), c.on("scroll.cssAnimFunc", function (b) {
            d.each(function (b) {
                B(a(this), !0) && a(this).addClass("come-in")
            }), e.each(function () {
                var b = a(this);
                B(b, !0) ? !b.hasClass("toPause") && b.hasClass("toPlay") || (b[0].play(), b.addClass("toPlay"), b.removeClass("toPause"), console.log("Play")) : !b.hasClass("toPlay") && b.hasClass("toPause") || (b.addClass("toPause"), b.removeClass("toPlay"), b[0].pause(), console.log("Pause"))
            })
        })
    }

    function D(a, b, c) {
        console.log("D")
        var d = a.split("/");
        "why-choose-us" == d[1] ? L(b, c) : "contacts" == d[1] ? M(b, c) : "apartments" == d[1] ? d[2].length > 0 ? G(b, c) : E(b, c) : "special-offers" == d[1] ? H(b, c) : "useful-info" == d[1] ? I(b, c) : "infrastructure" == d[1] && K(b, c)
    }

    function E(b, c) {
        console.log("E")
        a(c + " div.section-content").html(b), a("body").oneTime("300ms", function () {
            a("div.apartments-bg").addClass("activateAnimation")
        }), a(window).on("resize", function () {
            a("div.apartments-section-body div.OB-info-title div").each(function () {
                if (a(window).width() < 1300 && a(window).width() >= 900) {
                    if (a(this).html().length > 10) {
                        var b = a(this).html().length, c = Math.floor(35 / (b / 9));
                        a(this).css({"font-size": c + "px"})
                    }
                } else if (a(window).width() >= 1300) {
                    if (a(this).html().length > 10) {
                        var b = a(this).html().length, c = 2.9623 / (b / 9);
                        a(this).css({"font-size": c + "vw"})
                    }
                } else a(this).css({"font-size": ""})
            }), a("div.apartments-section-body div.OB-info-desc").each(function () {
                if (a(window).width() < 1300 && a(window).width() >= 900) {
                    if (a(this).html().length > 166) {
                        var b = a(this).html().length, c = Math.floor(15 / (b / 176));
                        a(this).css({"font-size": c + "px"})
                    }
                } else if (a(window).width() >= 1300) {
                    if (a(this).html().length > 166) {
                        var b = a(this).html().length, c = 1.1538 / (b / 166);
                        a(this).css({"font-size": c + "vw"})
                    }
                } else a(this).css({"font-size": ""})
            })
        }).trigger("resize"), a("div.apartments-section-body").oneTime("200ms", function () {
            C(a("div.apartments-bg"))
        })
    }

    function G(b, c) {
        console.log("G")
        a(c + " div.section-content").html(b), a(window).bind("resize").trigger("resize"), a("body").oneTime("300ms", function () {
            a("div.apartments-bg").addClass("activateAnimation"), C(a("div.apartments-bg")), a(c + " div.apartment-photogallery .swiper-container2").length > 0 && (F = void 0, F = new Swiper(c + " div.apartment-photogallery .swiper-container2", {
                direction: "horizontal",
                nextButton: ".PB-next",
                prevButton: ".PB-back",
                loop: !1,
                grabCursor: !0,
                spaceBetween: 0,
                speed: 600,
                onTransitionStart: function (b) {
                    0 == b.activeIndex ? a(".PB-back").css({opacity: "0.5"}) : a(".PB-back").css({opacity: "1"}), b.activeIndex + 1 == a("div.apartment-photogallery div.photo-photo").length ? a(".PB-next").css({opacity: "0.5"}) : a(".PB-next").css({opacity: "1"})
                },
                onInit: function (b) {
                    0 == b.activeIndex ? a(".PB-back").css({opacity: "0.5"}) : a(".PB-back").css({opacity: "1"}), b.activeIndex + 1 == a("div.apartment-photogallery div.photo-photo").length ? a(".PB-next").css({opacity: "0.5"}) : a(".PB-next").css({opacity: "1"})
                }
            }), a("body").addClass("sectionPhotogallery"))
        });
        var d = a("div.section-display-head.apartment-head div.field2 div"), e = a("div.section-display-head.apartment-head div.field2"), f = d.text().length;
        a(window).bind("resize", function () {
            a(window).width() <= 900 ? f > 15 && e.css({
                "font-size": "6vmin",
                top: "calc(52% - 6vmin)"
            }) : e.css({"font-size": ""})
        }).trigger("resize"), a("div.OB-info-block-cont div.OB-info1").each(function () {
            a(this).text().length > 45 ? a(this).addClass("OB-long-text2") : a(this).text().length > 31 && a(this).addClass("OB-long-text")
        })
    }

    function H(b, c) {
        console.log("H")
        a(c + " div.section-content").html(b), a("body").oneTime("300ms", function () {
            a("div.apartments-bg").addClass("activateAnimation"), C(a("div.apartments-bg"))
        }), a("div.OB-info-block-cont div.OB-info1").each(function () {
            a(this).text().length > 45 ? a(this).addClass("OB-long-text2") : a(this).text().length > 31 && a(this).addClass("OB-long-text")
        })
    }

    function I(b, c) {
        console.log("I")
        a(c + " div.section-content").html(b);
        var d = a("#countries").val();
        J(d), a("body").oneTime("300ms", function () {
            a("div.apartments-bg").addClass("activateAnimation")
        }), a("body").on("change", "select.countries", function (b) {
            var c = a(this).val();
            a.ajax({type: "GET", url: "/ajax_setLocationCookie.php", data: {location: c}, cache: !1}), J(c)
        }), a("div.apartments-bg").oneTime("200ms", function () {
            C(a("div.apartments-bg"))
        })
    }

    function J(b) {
        console.log("J")
        a.ajax({
            type: "GET",
            url: "/ajax_updateUsefullInformation.php",
            data: {lang: a("body").data("lang"), location: b},
            cache: !1
        }).done(function (b) {
            var c = b.split("#|#");
            a("#currency_rate div").html(c[0]), a("#visaBody").html(c[1]), a("#flightsBody").html(c[2]), a("#slide2 div.field1 span").html(c[3])
        })
    }

    function K(b, c) {
        console.log("K")
        infrastructureMarkers = [], map2 = void 0, a(c + " div.section-content").html(b), a("body").oneTime("300ms", function () {
            a("div.apartments-bg").addClass("activateAnimation")
        }), a(window).bind("resize", function () {
            a("div.infrastructure-body").css({height: a(window).height() - 68})
        }).trigger("resize"), a("div.infrastructure-body").oneTime("1200ms", function () {
            initializeMapInfrastructure(), a("div.infrastructure-categories li.allMarkers").addClass("act"), a(window).bind("resize", function () {
                a(window).width() <= 900 || a(window).height() <= 620 ? a("div.mapMarkerDesc").hasClass("allMarkers") || (showMarkers("all"), a("div.mapMarkerDesc").addClass("allMarkers"), a("div.infrastructure-categories li").removeClass("act"), a("div.infrastructure-categories li.allMarkers").addClass("act")) : a("div.mapMarkerDesc").removeClass("allMarkers")
            }).trigger("resize")
        }), a("div.mapDescClose-btn").on("click", function () {
            a("div.mapMarkerDesc").removeClass("openedMapDesc"), setAllMakersToDefault()
        }), a("#showAll").click(function () {
            showMarkers("all")
        }), a("#hideAll").click(function () {
            hideAllMarkers()
        }), a("div.infrastructure-categories li").click(function () {
            a("div.infrastructure-categories li").removeClass("act"), a(this).addClass("act"), hideAllMarkers(), showMarkers(a(this).data("type")), parseInt(a("div.mapMarkerDesc").data("typeof")) !== parseInt(a(this).data("type")) && "all" !== a(this).data("type") && (a("div.mapMarkerDesc").removeClass("openedMapDesc"), setAllMakersToDefault())
        }), a("div.infrastructure-categories ul li").each(function () {
            a(this).text().length > 17 && a(this).addClass("long-text")
        })
    }

    function L(c, d) {
        console.log("L")
        a(d + " div.section-content").html(c), a(window).bind("resize").trigger("resize"), b.any() && a("video").each(function () {
            a(this).remove()
        }), a("body").oneTime("1200ms", function () {
            b.any() || a("#why_choose_us_video")[0].play()
        }), a("body").oneTime("300ms", function () {
            a("div.section-display-head").addClass("activateAnimation")
        }), C(a("div.why-choose-us-bg"))
    }

    function M(b, c) {
        console.log("M")
        a(c + " div.section-content").html(b), a(window).bind("resize").trigger("resize"), a("body").oneTime("300ms", function () {
            a("div.contacts-bg").addClass("activateAnimation")
        }), C(a("div.contacts-bg")), a("div.google-map-btn").oneTime("1200ms", function () {
            initializeMapContacts()
        }), a("div.google-map-btn").on("click", function () {
            a("div.google-map-btn").hasClass("GM-off") ? (a("div.google-map-btn").removeClass("GM-off"), a("div.map-transparent-fader").css({display: "none"})) : (a("div.google-map-btn").addClass("GM-off"), a("div.map-transparent-fader").css({display: "block"}))
        }), a("div.map-transparent-fader").on("click", function () {
            a("div.google-map-btn").removeClass("GM-off"), a("div.map-transparent-fader").css({display: "none"})
        }), a("#submitContactingForm").click(function () {
            a("#contactingForm").submit()
        }), a("#contactingForm").submit(function () {
            var b = !0;
            return e(a("#sub_name")) || (b = !1), e(a("#sub_email")) || (b = !1), e(a("#sub_message")) || (b = !1), b && a.ajax({
                type: "GET",
                url: "/ajax_contactContactingForm.php",
                data: {
                    name: a("#sub_name").val(),
                    surname: a("#sub_surname").val(),
                    phone: a("#sub_phone").val(),
                    email: a("#sub_email").val(),
                    msg: a("#sub_message").val(),
                    lang: a("body").data("lang")
                },
                cache: !1
            }).done(function (b) {
                "ok" == b && (a("div.fdbk-success").fadeIn(), a("div.fdbk-success").oneTime("50ms", function () {
                    a("div.fdbk-success div.fdbk-s-ico").addClass("icon-success-animate")
                }))
            }), !1
        })
    }

    function Q(b) {
        console.log("Q")
        var c;
        if (b && a.isArray(b) ? (A = y(b[1]), b = b[0]) : A = z(), void 0 == b && (b = "forward"), a("body").addClass("loadingAndAnimatingSection"), "firstTime" !== b && "pageReloaded" !== b) {
            a("#blockContent").css({display: "block"});
            var d = a("body").data("lang");
            a.ajax({
                type: "GET",
                url: "/" + d + A + "?ajaxRequest=true",
                data: {urla: "/" + d + A},
                cache: !1
            }).done(function (d) {
                if (l(), a("body").hasClass("sectionPhotogallery") && (F.destroy(!0, !0), a("body").removeClass("sectionPhotogallery")), a("body").hasClass("slide1"))var e = "slide1", f = "slide2", g = "div.site-content-slide1", j = "div.site-content-slide2";
                if (a("body").hasClass("slide2"))var e = "slide2", f = "slide1", g = "div.site-content-slide2", j = "div.site-content-slide1";
                if ("/" == A || "/?o=hello" == A) {
                    b = "backward", j = "div.mainpage-body";
                    var f = "mainpage"
                }
                if (a("body").hasClass("mainpage"))var e = "mainpage", f = "slide1", g = "div.mainpage-body", j = "div.site-content-slide1";
                if ("backward" == b) {
                    if ("/" == A || "/?o=hello" == A)var q = 10; else var q = 11;
                    var r = 14;
                    if (a("body").hasClass("mainmenu-open") || a("body").hasClass("booking"))a(g).css({
                        position: "absolute",
                        display: "none",
                        top: "0px",
                        left: "0px",
                        transform: "translate3d(101%, 0px, 0px)",
                        transition: "",
                        "z-index": r
                    }), a("div.site-container").scrollTop(0), a("body").addClass("transitionBackViaMainmenu"), a("body").hasClass("mainmenu-open") ? a("div.mainmenu-wrapper").css({
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "all " + P + "ms ease-in-out"
                    }) : a("div.bookingmenu-wrapper").css({
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "all " + P + "ms ease-in-out"
                    }), "/" == A || "/?o=hello" == A ? (a("div.common-top-header").css({
                        display: "none",
                        transition: "",
                        transform: "translate3d(101%, 0px, 0px)",
                        "z-index": "15"
                    }), a("div.common-back-btn").css({
                        display: "none",
                        transition: "",
                        "z-index": "15",
                        opacity: "0"
                    })) : a("div.common-back-btn").css({
                        display: "block",
                        transition: "",
                        "z-index": "12",
                        opacity: "0"
                    }), a("body").hasClass("mainpage") && a("div.common-top-header").css({
                        display: "block",
                        transition: "",
                        transform: "translate3d(0%, 0px, 0px)",
                        "z-index": "12"
                    }), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"}), $tmpDur = 30, a("div.mainmenu-wrapper").oneTime($tmpDur + "ms", function () {
                        a("body").hasClass("mainmenu-open") ? a("div.mainmenu-wrapper").css({
                            transform: "translate3d(100%, 0px, 0px)",
                            transition: "all " + P + "ms ease-in-out"
                        }) : a("div.bookingmenu-wrapper").css({
                            transform: "translate3d(100%, 0px, 0px)",
                            transition: "all " + P + "ms ease-in-out"
                        })
                    }), $tmpDur = P + 100, a("div.mainmenu-wrapper").oneTime($tmpDur + "ms", function () {
                        a("body").hasClass("mainmenu-open") ? a("div.mainmenu-wrapper").css({
                            transform: "",
                            transition: ""
                        }) : a("div.bookingmenu-wrapper").css({
                            transform: "",
                            transition: ""
                        }), "/" !== A && "/?o=hello" !== A && (a("div.common-back-btn").css({
                            display: "block",
                            transition: "",
                            "z-index": "12",
                            opacity: "1"
                        }), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"})), a("body").hasClass("mainmenu-open") ? h("closeStatic") : i("closeStatic"), a("body").removeClass(e), a("body").removeClass("transitionBackViaMainmenu")
                    }); else {
                        var s = a("div.site-container").scrollTop();
                        a(g).css({
                            transform: "translate3d(0%, 0px, 0px)",
                            transition: "all 0s ease-in-out",
                            display: "block",
                            position: "absolute",
                            top: -s,
                            "z-index": r
                        }), a("div.site-container").scrollTop(0), a("div.site-container").css({"overflow-y": "hidden"}), "mainpage" == e ? (a("div.common-top-header").css({
                            display: "block",
                            transition: "",
                            transform: "translate3d(0%, 0px, 0px)",
                            "z-index": "12"
                        }), a("div.common-back-btn").css({
                            display: "block",
                            transition: "",
                            "z-index": "12",
                            opacity: "1"
                        })) : (a("div.common-top-header").css({
                            display: "block",
                            transition: "",
                            transform: "translate3d(0%, 0px, 0px)",
                            "z-index": "15"
                        }), a("div.common-back-btn").css({
                            display: "block",
                            transition: "",
                            "z-index": "15",
                            opacity: "1"
                        })), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"}), $tmpDur = 30, a(j).oneTime($tmpDur + "ms", function () {
                            if (a(g).css({
                                    transform: "translate3d(101%, 0px, 0px)",
                                    transition: "all " + P + "ms ease-in-out"
                                }), "/" == A || "/?o=hello" == A) {
                                a("div.common-top-header").css({
                                    display: "block",
                                    transition: "all " + P + "ms ease-in-out",
                                    transform: "translate3d(101%, 0px, 0px)",
                                    "z-index": "15"
                                }), c = P / 1.8;
                                var b = 0;
                                a("div.common-back-btn").css({
                                    display: "block",
                                    transition: "all " + c + "ms ease-in-out",
                                    "transition-delay": b + "ms",
                                    "z-index": "15",
                                    opacity: "0"
                                })
                            } else"mainpage" == e ? (a("div.common-top-header").css({
                                display: "block",
                                transition: "",
                                transform: "translate3d(0%, 0px, 0px)",
                                "z-index": "12"
                            }), a("div.common-back-btn").css({
                                display: "block",
                                transition: "",
                                "z-index": "12",
                                opacity: "1"
                            })) : (a("div.common-top-header").css({
                                display: "block",
                                transition: "",
                                transform: "translate3d(0%, 0px, 0px)",
                                "z-index": "15"
                            }), a("div.common-back-btn").css({
                                display: "block",
                                transition: "",
                                "z-index": "15",
                                opacity: "1"
                            }));
                            a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"}), $tmpDur = P + 100, a(j).oneTime($tmpDur + "ms", function () {
                                "mainpage" != e || a("div.mp-slider").hasClass("sliderDisabled") || (k(), p.destroy(!0, !0)), a(g).css({
                                    transition: "all 0s ease-in-out",
                                    display: "none",
                                    top: "0px"
                                }), a("body").removeClass(e), "/" == A || "/?o=hello" == A ? (a("div.common-top-header").css({
                                    display: "none",
                                    transition: "",
                                    transform: "translate3d(101%, 0px, 0px)",
                                    "z-index": "15"
                                }), a("div.common-back-btn").css({
                                    display: "none",
                                    transition: "",
                                    "z-index": "15",
                                    opacity: "0"
                                })) : (a("div.common-top-header").css({
                                    display: "block",
                                    transition: "",
                                    transform: "translate3d(0%, 0px, 0px)",
                                    "z-index": "12"
                                }), a("div.common-back-btn").css({
                                    display: "block",
                                    transition: "",
                                    "z-index": "12",
                                    opacity: "1"
                                })), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"})
                            })
                        })
                    }
                    a("div.site-container").off("scroll.cssAnimFunc"), D(A, d, j), a("div.site-container").css({"overflow-y": "hidden"}), a(j).css({
                        transform: "translate3d(-50%, 0px, 0px)",
                        transition: "all 0s ease-in-out",
                        display: "block",
                        position: "absolute",
                        top: "0px",
                        "z-index": q
                    }), a(j + " div.page-transition-blackout").css({
                        display: "block",
                        opacity: "0.32"
                    }), $tmpDur = 30, a(j).oneTime($tmpDur + "ms", function () {
                        a(j).css({
                            position: "absolute",
                            transform: "translate3d(0%, 0px, 0px)",
                            transition: "all " + P + "ms ease-in-out"
                        }), a(j + " div.page-transition-blackout").css({
                            display: "block",
                            opacity: "0",
                            transition: "all " + P + "ms ease-in-out"
                        }), a("body").hasClass("mainpage") && a("div.logo-mainmenu-btn").removeClass("position-mainpage"), $tmpDur = P + 100, a(j + " div.page-transition-blackout").oneTime($tmpDur + "ms", function () {
                            a(j + " div.page-transition-blackout").css({
                                display: "none",
                                opacity: "0",
                                transition: "all 0s ease-in-out"
                            }), a("#blockContent").css({display: "none"}), a(j).css({
                                transform: "",
                                transition: "",
                                position: "relative"
                            }), a("div.site-container").css({"overflow-y": ""}), a("body").removeClass("loadingAndAnimatingSection"), n(), a("body").addClass(f), "mainpage" !== e && (m(a(g + " div.section-content")), a(g + " div.section-content").empty()), a("div.site-container0").baron().update()
                        })
                    }), "/" != A && "/?o=hello" != A || (a("div.mp-slider").oneTime("0.3s", function () {
                        a("body").addClass(f), o = "", a(window).bind("resize", function () {
                        }).trigger("resize")
                    }), a("div.mp-slider").hasClass("sliderDisabled") || a("div.logo-mainmenu-btn").addClass("position-mainpage"))
                } else {
                    if ("/" == A || "/?o=hello" == A)var q = 11; else var q = 10;
                    var r = 14;
                    if (a("body").hasClass("mainmenu-open") || a("body").hasClass("booking"))a("div.mainpage-body").css({
                        display: "none",
                        transition: ""
                    }), a("div.site-container").scrollTop(0), a(j).css({"z-index": r}), a("body").hasClass("mainmenu-open") ? a("div.mainmenu-wrapper div.page-transition-blackout").css({
                        display: "block",
                        opacity: "0"
                    }) : a("div.bookingmenu-wrapper div.page-transition-blackout").css({
                        display: "block",
                        opacity: "0"
                    }), a("div.common-top-header").css({
                        display: "block",
                        transition: "",
                        transform: "translate3d(101%, 0px, 0px)",
                        "z-index": "15"
                    }), a("div.common-back-btn").css({
                        display: "block",
                        transition: "",
                        "z-index": "15",
                        opacity: "0"
                    }), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"}), a(g).css({
                        display: "none",
                        transition: "",
                        top: "0px",
                        position: "absolute",
                        "z-index": "14"
                    }), a("body").hasClass("mainmenu-open") ? a("div.mainmenu-wrapper").css({
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "all " + P + "ms ease-in-out"
                    }) : a("div.bookingmenu-wrapper").css({
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "all " + P + "ms ease-in-out"
                    }), $tmpDur = 30, a("div.mainmenu-wrapper").oneTime($tmpDur + "ms", function () {
                        a("body").hasClass("mainmenu-open") ? (a("div.mainmenu-wrapper").css({
                            transform: "translate3d(-50%, 0px, 0px)",
                            transition: "all " + P + "ms ease-in-out"
                        }), a("div.mainmenu-wrapper div.page-transition-blackout").css({
                            opacity: "0.22",
                            transition: "all " + P + "ms ease-in-out"
                        })) : (a("div.bookingmenu-wrapper").css({
                            transform: "translate3d(-50%, 0px, 0px)",
                            transition: "all " + P + "ms ease-in-out"
                        }), a("div.bookingmenu-wrapper div.page-transition-blackout").css({
                            opacity: "0.22",
                            transition: "all " + P + "ms ease-in-out"
                        })), a("div.common-top-header").css({
                            transition: "all " + P + "ms ease-in-out",
                            transform: "translate3d(0%, 0px, 0px)",
                            "z-index": "15"
                        }), c = P / 2, a("div.common-back-btn").css({
                            transition: "all " + c + "ms ease-in-out",
                            "transition-delay": c + "ms",
                            "z-index": "15",
                            opacity: "1"
                        }), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"})
                    }), $tmpDur = P + 100, a("div.mainmenu-wrapper").oneTime($tmpDur + "ms", function () {
                        a("body").hasClass("mainmenu-open") ? (a("div.mainmenu-wrapper").css({
                            transform: "",
                            transition: ""
                        }), h("closeStatic")) : (a("div.bookingmenu-wrapper").css({
                            transform: "",
                            transition: ""
                        }), i("closeStatic")), a(j).css({"z-index": q}), a("div.mainmenu-wrapper div.page-transition-blackout").css({
                            display: "none",
                            opacity: "0",
                            transition: ""
                        }), a("div.bookingmenu-wrapper div.page-transition-blackout").css({
                            display: "none",
                            opacity: "0",
                            transition: ""
                        })
                    }); else {
                        var s = a("div.site-container").scrollTop();
                        a("div.site-container").scrollTop(0), a(g).css({top: -s}), a("div.site-container").css({"overflow-y": "hidden"}), a(g).css({
                            transform: "translate3d(0%, 0px, 0px)",
                            "z-index": q
                        }), a(g + " div.page-transition-blackout").css({
                            display: "block",
                            opacity: "0"
                        }), a("body").hasClass("mainpage") ? (a("div.common-top-header").css({
                            display: "block",
                            transition: "",
                            transform: "translate3d(101%, 0px, 0px)",
                            "z-index": "15"
                        }), a("div.common-back-btn").css({
                            display: "block",
                            transition: "",
                            "z-index": "15",
                            opacity: "0"
                        })) : (a("div.common-top-header").css({
                            display: "block",
                            transition: "",
                            transform: "translate3d(0%, 0px, 0px)",
                            "z-index": "15"
                        }), a("div.common-back-btn").css({
                            display: "block",
                            transition: "",
                            "z-index": "15",
                            opacity: "1"
                        })), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"})
                    }
                    a(j).css({
                        position: "absolute",
                        display: "block",
                        top: "0px",
                        left: "0px",
                        transform: "translate3d(101%, 0px, 0px)",
                        "z-index": r
                    }), a("div.site-container").css({"overflow-y": "hidden"}), a("div.site-container").off("scroll.cssAnimFunc"), D(A, d, j), $tmpDur = 30, a(g).oneTime($tmpDur + "ms", function () {
                        a(j).css({
                            transform: "translate3d(0%, 0px, 0px)",
                            transition: "all " + P + "ms ease-in-out"
                        }), a(g).css({
                            transform: "translate3d(-50%, 0px, 0px)",
                            position: "relative",
                            transition: "all " + P + "ms ease-in-out"
                        }), a(g + " div.page-transition-blackout").css({
                            opacity: "0.32",
                            transition: "all " + P + "ms ease-in-out"
                        }), a("body").hasClass("mainpage") && (a("div.common-top-header").css({
                            transition: "all " + P + "ms ease-in-out",
                            transform: "translate3d(0%, 0px, 0px)",
                            "z-index": "15"
                        }), a("div.common-back-btn").css({
                            transition: "all " + P + "ms ease-in-out",
                            "z-index": "15",
                            opacity: "1"
                        })), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"}), $tmpDur = P + 100, a(j).oneTime($tmpDur + "ms", function () {
                            a(j).css({position: "relative", transition: "", "z-index": q}), a(g).css({
                                display: "none",
                                transition: "",
                                top: "0px",
                                position: "absolute",
                                "z-index": "14"
                            }), a("div.site-container").css({"overflow-y": ""}), a(g + " div.page-transition-blackout").css({
                                display: "none",
                                transition: ""
                            }), a("div.common-top-header").css({
                                display: "block",
                                "z-index": "12"
                            }), a("div.common-back-btn").css({
                                display: "block",
                                "z-index": "12",
                                opacity: "1"
                            }), a(window).width() <= 900 && a("div.common-back-btn").css({display: "none"}), a("#blockContent").css({display: "none"}), a("body").removeClass("loadingAndAnimatingSection"), n(), a("body").hasClass("mainpage") && !a("div.mp-slider").hasClass("sliderDisabled") && (k(), p.destroy(!0, !0)), a("body").removeClass(e), a("body").addClass(f), "mainpage" !== e && (m(a(g + " div.section-content")), a(g + " div.section-content").empty()), a("div.site-container0").baron().update()
                        })
                    }), a("body").hasClass("mainpage") && a("div.logo-mainmenu-btn").removeClass("position-mainpage")
                }
            })
        } else if (a("body").removeClass("loadingAndAnimatingSection"), "/" == A || "/?o=hello" == A)a("body").addClass("mainpage"), a("div.mp-slider").hasClass("sliderDisabled") || a("div.logo-mainmenu-btn").addClass("position-mainpage"); else {
            a("div.common-top-header").css({
                display: "block",
                "z-index": "12",
                transform: "translate3d(0%, 0px, 0px)"
            }), a(window).width() <= 900 ? a("div.common-back-btn").css({display: "none"}) : a("div.common-back-btn").css({
                display: "block",
                "z-index": "12",
                opacity: "1",
                transform: "translate3d(0%, 0px, 0px)"
            }), a("div.mainpage-body").css({
                transform: "translate3d(100%, 0px, 0px)",
                transition: "",
                display: "none"
            }), a("div.site-content-slide1").css({
                transform: "translate3d(0%, 0px, 0px)",
                transition: "",
                display: "block"
            }), a("body").addClass("slide1");
            var d = a("body").data("lang");

            // a.ajax({
            //     type: "GET",
            //     url: "/" + d + A + "?ajaxRequest=true",
            //     data: {urla: "/" + d + A},
            //     cache: !1
            // }).done(function (a) {
            //     D(A, a, "div.site-content-slide1")
            // })
        }
    }

    function R(b) {
        console.log("R")
        a("div.popup-mainmenu-wrapper-top ul.mp-mainmenu li").removeClass("act"), a("div.popup-mainmenu-wrapper-top ul.mp-mainmenu li a").each(function () {
            a(this).attr("href") == b && a(this).parent("li").addClass("act")
        })
    }

    function S(b, c) {
        console.log("S")
        0 == N ? N = 1 : N++, window.history.pushState({title: b, url: c, num: N}, b, c), a("title").html(b)
    }

    function T(a, b) {
        console.log("T")
        0 == N ? N = 1 : N++, window.history.replaceState({title: a, url: b, num: N}, a, b)
    }

    var b = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        }, BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        }, iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }, Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        }, Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        }, any: function () {
            return b.Android() || b.BlackBerry() || b.iOS() || b.Opera() || b.Windows()
        }
    }, c = "os-unknown";
    navigator.appVersion.indexOf("Win") != -1 ? c = "os-windows" : navigator.appVersion.indexOf("Mac") != -1 ? c = "os-macos" : navigator.appVersion.indexOf("X11") != -1 ? c = "os-unix" : navigator.appVersion.indexOf("Linux") != -1 && (c = "os-linux"), a("body").addClass(c), b.any() && (a("body").addClass("mobile"), a("video").each(function () {
        a(this).remove()
    })), d(), a("div.mainmenu-btn").click(function () {
        a("body").hasClass("booking") ? (i("close"), a("div.site-container").css({"overflow-y": ""})) : a("body").hasClass("mainmenu-open") ? (h("close"), a("div.site-container").css({"overflow-y": ""})) : (h("open"), a("div.site-container").css({"overflow-y": "hidden"}))
    }), a("body").on("click", ".bookBtn", function () {
        void 0 !== a(this).data("uniqueid") ? a("#apartmentId").val(a(this).data("uniqueid")) : a("#apartmentId").val(""), a("#arrivalDate").val(""), a("#departureDate").val(""), a("#arrivalDate").datepicker("option", {
            minDate: new Date,
            maxDate: null
        }), a("#departureDate").datepicker("option", {
            minDate: "+1d",
            maxDate: null
        }), a("body").hasClass("mainmenu-open") ? (i("open"), a("div.bookingmenu-wrapper").oneTime("500ms", function () {
            h("close")
        })) : i("open")
    });
    var j = a("body").data("lang");
    a.datepicker.setDefaults(a.extend({dateFormat: "dd/mm/yy"}, a.datepicker.regional[j])), a("#arrivalDate").datepicker({
        minDate: new Date,
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        onSelect: function (b) {
            a("#departureDate").datepicker("option", "minDate", b)
        }
    }), a("#departureDate").datepicker({
        minDate: "+1d", dateFormat: "dd/mm/yy", firstDay: 1, onSelect: function (b) {
            a("#arrivalDate").datepicker("option", "maxDate", b)
        }
    }), a("#arrivalDate, #departureDate, #ui-datepicker-div").click(function () {
        a("#ui-datepicker-div").length > 0 && a("#ui-datepicker-div").css({width: a("#arrivalDate").css("width")})
    }), a("#subminBooking").click(function () {
        "" == a("#arrivalDate").val() ? f(a("#arrivalDate")) : g(a("#arrivalDate")), "" == a("#departureDate").val() ? f(a("#departureDate")) : g(a("#departureDate"));
        var b = a("#apartmentId").val();
        "" !== a("#departureDate").val() && "" !== a("#arrivalDate").val() && (apartmentIdLine = b.length > 0 ? "&promotion_code=" + b : "", window.open("https://app.thebookingbutton.com/properties/reveltonsuites?utf8=%E2%9C%93&locale=" + j + apartmentIdLine + "&currency=EUR&check_in_date=" + a("#arrivalDate").val() + "&check_out_date=" + a("#departureDate").val(), "_blank"))
    });
    var o, p, q = !1;
    a(window).bind("resize", function () {
        if ("yes" !== o && "no" !== o)var b = !0;
        o = a("div.mp-slider").hasClass("sliderDisabled") ? "yes" : "no", a(window).width() <= 900 || a(window).height() <= 450 || a(window).width() < a(window).height() ? a("div.mp-slider").addClass("sliderDisabled") : a("div.mp-slider").removeClass("sliderDisabled"), a("body").hasClass("mainpage") && a("div.mp-slider").hasClass("sliderDisabled") && "no" == o && (console.log("disable 309"), b || (p.destroy(!0, !0), k(), q = !1)), (!a("div.mp-slider").hasClass("sliderDisabled") && "yes" == o || b && !a("div.mp-slider").hasClass("sliderDisabled")) && a("div.mp-slider").length > 0 && a("body").hasClass("mainpage") && (console.log("eneable slider 328"), p = new Swiper("div.mp-slider .swiper-container", {
            direction: "vertical",
            mousewheelControl: !0,
            autoplay: 5e3,
            autoplayDisableOnInteraction: !0,
            loop: !1,
            speed: 700,
            grabCursor: !0,
            effect: "coverflow",
            coverflow: {rotate: 0, stretch: 0, depth: 0, modifier: 1, slideShadows: !1},
            spaceBetween: 0
        }), q = !0, a("div.mp-slider").oneTime("600ms", function () {
            p.update(!0)
        }), p.on("onTransitionEnd", function () {
            console.log("end of transition"), k();
            var b = p.activeIndex + 1;
            a("#slide" + b + " video").length > 0 && a("#slide" + b + " video")[0].play(), a("div.mp-left-block div.objContainer").css({"background-image": "url(/img/mp-leftblock-bg" + b + ".svg)"})
        }), a("body").hasClass("mainmenu-open") && a("body").hasClass("mainpage") && !a("body").hasClass("transitionBackViaMainmenu") && h("close")), a(window).width() <= 900 ? a("div.common-back-btn").css({display: "none"}) : "/" !== y(window.location.href.toString().split(window.location.host)[1]) && "/?o=hello" !== y(window.location.href.toString().split(window.location.host)[1]) && a("div.common-back-btn").css({display: "block"}), a("body").hasClass("mainpage") && (a(window).width() <= 900 || a(window).height() <= 450 || a(window).width() < a(window).height() ? (a("div.logo-mainmenu-btn").removeClass("position-mainpage"), a("div.mainpage-body").css({height: ""}), a("div.mainpage-body div.swiper-slide:not(#slide1)").css({height: a(window).height()}), a("div.mainpage-body #slide1").css({height: a(window).height() - 68}),
            a("div.objContainer").css({height: "380px"})) : (a("div.logo-mainmenu-btn").addClass("position-mainpage"), a("div.mainpage-body").css({height: a(window).height()}), a("div.objContainer").css({height: a(window).height()}))), a("div.site-container").css({height: a(window).height()}), a("div.section-display-head").css({height: a(window).height() - 68})
    }).trigger("resize");
    var s = 0, t = a("div.container-to-download img"), v = u(t);
    t.each(function () {
        var b;
        a(this).load(function () {
            a(this).attr("src") && a(this).attr("src") !== b && (w(), b = a(this).attr("src"))
        })
    }), a(window).load(function () {
        w();
        for (var a = 0; a < t.length; a++)t[a].setAttributeNS(null, "src", v[a])
    }), a("div.btnX").click(function () {
        a("div.container-to-download").html('<img src="/img/logo-icon-revelton.svg" />'), x(a("div.container-to-download img"));
        var b;
        a("div.container-to-download").everyTime("50ms", function () {
            b !== globalImgsLoadingProcess && (console.log(globalImgsLoadingProcess), b = globalImgsLoadingProcess), 100 == globalImgsLoadingProcess && a("div.container-to-download").stopTime()
        })
    }), a(window).load(function () {
        var b = getRandomInt(1, 3);
        a("div.green-frame2").addClass("green-frame2-bg" + b)
    }), a("div.mp-lang-menu").click(function () {
        a("div.mp-lang-menu").hasClass("openedLangMenu") || (a("div.mp-lang-menu li").css({display: "block"}), a("div.mp-lang-menu").oneTime("40ms", function () {
            a("div.mp-lang-menu").addClass("openedLangMenu")
        }))
    }), a("body").click(function () {
        a("div.mp-lang-menu").hasClass("openedLangMenu") && (a("div.mp-lang-menu").removeClass("openedLangMenu"), a("div.mp-lang-menu").oneTime("300ms", function () {
            a("div.mp-lang-menu li").not("div.mp-lang-menu li.act").css({display: "none"})
        }))
    }), a("div.mainmenu-lang-menu").click(function () {
        a("div.mainmenu-lang-menu").hasClass("openedLangMenu") || (a("div.mainmenu-lang-menu li").css({display: "block"}), a("div.mainmenu-lang-menu").oneTime("40ms", function () {
            a("div.mainmenu-lang-menu").addClass("openedLangMenu")
        }))
    }), a("body").click(function () {
        a("div.mainmenu-lang-menu").hasClass("openedLangMenu") && (a("div.mainmenu-lang-menu").removeClass("openedLangMenu"), a("div.mainmenu-lang-menu").oneTime("300ms", function () {
            a("div.mainmenu-lang-menu li").not("div.mainmenu-lang-menu li.act").css({display: "none"})
        }))
    });
    var F, A = z(), N = 0, O = window.history.state, P = 700;
    if (null == O) {
        var U = a("title").html().toString(), V = window.location.href.toString().split(window.location.host)[1];
        R(window.location.href.toString().split(window.location.host)[1]), T(U, V), Q("firstTime")
    } else a("title").html(window.history.state.title), R(window.history.state.url), N = window.history.state.num, Q("pageReloaded");
    a("ul.mp-mainmenu li a").click(function (b) {
        a(this).parent("li").hasClass("act") || (S(a(this).data("section-name"), a(this).attr("href")), a(this).addClass("loading"), !a("div.mp-slider").hasClass("sliderDisabled") && a("body").hasClass("mainpage") && p.stopAutoplay(), R(a(this).attr("href")), Q(), z()), b.preventDefault()
    }), a("div.btn-slider a").click(function (b) {
        S(a(this).data("section-name"), a(this).attr("href")), a(this).addClass("btn-loading"), !a("div.mp-slider").hasClass("sliderDisabled") && a("body").hasClass("mainpage") && p.stopAutoplay(), R(a(this).attr("href")), Q(), z(), b.preventDefault()
    }), a("div.mainmenu-wrapper div.mp-logo a").click(function (b) {
        a("body").hasClass("mainpage") || (S(mainPageTitle, a(this).attr("href")), R(), Q(), z()), b.preventDefault()
    }), a("div.common-back-btn").click(function () {
        window.history.back()
    }), a("div.header-logo a").click(function (b) {
        a("body").hasClass("mainpage") || (S(mainPageTitle, a(this).attr("href")), R(), Q(), z()), b.preventDefault()
    }), a("body").on("click", "div.OB-btns-place div.explore-btn a", function (b) {
        S(a(this).data("section-name"), a(this).attr("href")), R(), Q(), z(), b.preventDefault()
    }), a("body").on("click", "a.btn-next-app", function (b) {
        S(a(this).data("section-name"), a(this).attr("href")), R(), Q(), z(), b.preventDefault()
    });
    var X, W = 0, Y = 0, Z = [], $ = [], _ = [], aa = P;
    window.onpopstate = function (b) {
        var c;
        b.state.num < N && (N = b.state.num, X = "backward"), b.state.num > N && (N = b.state.num, X = "forward"), a("body").hasClass("loadingAndAnimatingSection") || a("body").hasClass("delayedSectionAnimation") ? (W++, c = (P + 200) * W, a("body").addClass("delayedSectionAnimation"), Z[W] = window.history.state.url, $[W] = X, _[W] = window.history.state.title, a("body").oneTime(c + "ms", function () {
            Y++;
            var b = Z[Y], c = $[Y], d = _[Y];
            P = W > Y ? aa : aa, a("title").html(d), R(b), z(b), Q([c, b]), a("body").removeClass("delayedSectionAnimation")
        })) : (W = 0, Y = 0, Z = [], $ = [], a("title").html(window.history.state.title), R(window.history.state.url), z(window.history.state.url), Q([X, window.history.state.url]))
    }, a(window).on("beforeunload", function () {
        a(window).scrollTop(0)
    }), history.scrollRestoration = "manual", delayedCookieLang.length > 0 && (a.ajax({
        type: "GET",
        url: "/ajax_setDelayedCookie.php",
        data: {lang: delayedCookieLang},
        cache: !1
    }), console.log(delayedCookieLang))
});