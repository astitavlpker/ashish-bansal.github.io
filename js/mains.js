$(window).load(function() {
    function t(e) {
        return $($(e).attr("href"))
    }

    function n(e) {
        return $("nav a[href=#" + $(e).attr("id") + "]")
    }

    function s(e) {
        var t = e.length;
        var n = 0;
        var i = '<ul class="twitter-feed">';
        while (n < t) {
            i += "<li>" + e[n] + "</li>";
            n++
        }
        i += "</ul>";
        r.innerHTML = i
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.addEventListener("load", function() {
            FastClick.attach(document.body)
        }, false);
        $(".intro-fixed").css({
            position: "relative"
        });
        $("#bg-video").html("<div class='bg-video-mobile'></div>")
    } else {
        $(document).scroll(function() {
            var e = $("  img").offset().top;
            var t = ($(document).scrollTop() - e) / 4;
            var n = "translate3d(0, " + t + "px, 0)";
            $("  img").css("transform", n);
            $("  img").css("-webkit-transform", n);
            $("  img").css("-moz-transform", n);
            $("  img").css("-o-transform", n);
            var r = $(".one-liner");
            var i = $(this).scrollTop();
            var s = $(document).height();
            var o = "translate3d(0, " + -i / 2 + "px, 0)";
            r.css("transform", o);
            r.css("-webkit-transform", o);
            r.css("-moz-transform", o);
            r.css("-o-transform", o);
            if ($(document).scrollTop() > 0) {
                $("#menu-image").stop(true, true).css("display", "block");
                var u = $(document).scrollTop();
                if (u > 0) {
                    $("#menu-image").fadeOut(300)
                } else {
                    $("#menu-image").fadeIn(300)
                }
            }
        });
        $("#bg-video").html("<video autoplay loop  id='bgvid' class='transparent'><source src='video/skyloop-2.webm' type='video/webm'></video>");
        $(".waypoint-element").waypoint(function(e) {
            if (e === "down") {
                $(".active").removeClass("active");
                $("#" + this.id + "-nav").addClass("active")
            }
        }, {
            offset: "50%"
        });
        $(".waypoint-element").waypoint(function(e) {
            if (e === "up") {
                $(".active").removeClass("active");
                $("#" + this.id + "-nav").addClass("active")
            }
        }, {
            offset: "-50%"
        });
        $(".logo").css({
            display: "block"
        });
        $("#menu-image").css({
            display: "block"
        })
    }
    $("#menu").mouseenter(function() {
        $("#menu-image").stop(true, true).css("display", "none")
    });
    var e = false;
    $(document).on("touchstart click", "#menu-button", function() {
        if (!e) {
            e = true;
            setTimeout(function() {
                e = false
            }, 100);
            $("#menu-frame").stop(true, true).fadeIn(200);
            $("#menu-close").css({
                display: "block"
            });
            $("#menu-items").addClass("active-items");
            $(".main").addClass("blur")
        }
        return false
    });
    var e = false;
    $(document).on("touchstart click", "#menu-frame,#menu-close", function() {
        if (!e) {
            e = true;
            setTimeout(function() {
                e = false
            }, 100);
            $("#menu-frame").stop(true, true).fadeOut(200);
            $("#menu-close").css({
                display: "none"
            });
            $("#menu-items").removeClass("active-items");
            $(".main").removeClass("blur")
        }
        return false
    });
    $("nav a").on("touchstart click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: t(this).offset().top - 0
        })
    });
    var r = {
        context: window,
        continuous: false,
        enabled: true,
        horizontal: false,
        offset: 0,
        triggerOnce: true
    };
    $(function() {
        var e = $(".isotope").isotope({
            itemSelector: ".work-item",
            layoutMode: "fitRows",
            getSortData: {
                name: ".name",
                symbol: ".symbol",
                number: ".number parseInt",
                category: "[data-category]",
                weight: function(e) {
                    var t = $(e).find(".weight").text();
                    return parseFloat(t.replace(/[\(\)]/g, ""))
                }
            }
        });
        var t = {
            numberGreaterThan50: function() {
                var e = $(this).find(".number").text();
                return parseInt(e, 10) > 50
            },
            ium: function() {
                var e = $(this).find(".name").text();
                return e.match(/ium$/)
            }
        };
        var n = false;
        $("#filters").on("touchstart click", "button", function() {
            if (!n) {
                n = true;
                setTimeout(function() {
                    n = false
                }, 100);
                var r = $(this).attr("data-filter");
                r = t[r] || r;
                e.isotope({
                    filter: r
                })
            }
            return false
        });
        $(".button-group").each(function(e, t) {
            var n = $(t);
            n.on("click", "button", function() {
                n.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked")
            })
        })
    });
    var e = false;
    $(document).on("click", ".lightbox-button", function() {
        var e = $(this).data("lightbox");
        $("." + e).css({
            display: "block"
        });
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#iframe").html("<iframe scrolling='no' class=" + e + " src='work/" + e + ".html' marginheight='0' frameborder='0' onload='resizeIframe(this)' />");

            function t(e) {
                e.height = e.contentWindow.document.body.scrollHeight + "px"
            }
        } else {
            $("#iframe").html("<iframe class=" + e + " src='work/" + e + ".html' marginheight='0' frameborder='0' />")
        }
        $(".lightbox").stop(true, true).fadeIn(300);
        $("body").css({
            overflow: "hidden"
        });
        $("#lightbox-close").css({
            display: "block"
        });
        $(".main").addClass("blur")
    });
    var e = false;
    $(document).on("touchstart click", "#lightbox-close", function() {
        if (!e) {
            e = true;
            setTimeout(function() {
                e = false
            }, 100);
            $("#lightbox-close").css({
                display: "none"
            });
            $(".lightbox").stop(true, true).css({
                display: "none"
            });
            $(".lightbox > iframe").css({
                display: "none"
            });
            $("#iframe").html("<iframe src='#' marginheight='0' frameborder='0' />");
            $("body").css({
                overflow: "auto"
            });
            $(".main").removeClass("blur")
        }
        return false
    });
    $(".banner-slides").unslider({
        speed: 300,
        delay: 7e3,
        keys: true,
        dots: false,
        fluid: true
    });
    var i = $(".banner-slides").unslider();
    var e = false;
    $(".unslider-arrow").on("touchstart click", function() {
        if (!e) {
            e = true;
            setTimeout(function() {
                e = false
            }, 100);
            var t = this.className.split(" ")[1];
            i.data("unslider")[t]()
        }
        return false
    });
    (function(e) {
        "use strict";
        e.fn.counterUp = function(t) {
            var n = e.extend({
                time: 400,
                delay: 10
            }, t);
            return this.each(function() {
                var t = e(this),
                    r = n,
                    i = function() {
                        var e = [],
                            n = r.time / r.delay,
                            i = t.text(),
                            s = /[0-9]+,[0-9]+/.test(i);
                        i = i.replace(/,/g, "");
                        var o = /^[0-9]+$/.test(i),
                            u = /^[0-9]+\.[0-9]+$/.test(i),
                            a = u ? (i.split(".")[1] || []).length : 0;
                        for (var f = n; f >= 1; f--) {
                            var l = parseInt(i / n * f);
                            u && (l = parseFloat(i / n * f).toFixed(a));
                            if (s)
                                while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            e.unshift(l)
                        }
                        t.data("counterup-nums", e);
                        t.text("0");
                        var c = function() {
                            t.text(t.data("counterup-nums").shift());
                            if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                            else {
                                delete t.data("counterup-nums");
                                t.data("counterup-nums", null);
                                t.data("counterup-func", null)
                            }
                        };
                        t.data("counterup-func", c);
                        setTimeout(t.data("counterup-func"), r.delay)
                    };
                t.waypoint(i, {
                    offset: "100%",
                    triggerOnce: !0
                })
            })
        }
    })(jQuery);
    $(".counter").counterUp({
        delay: 10,
        time: 1e3
    });
}) 
