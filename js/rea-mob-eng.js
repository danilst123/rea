$(function () {
  setTimeout(function () {
    // рендер разметки
    $("#s4-workspace").before(
      '<!-- \u0420\u0430\u0437\u043C\u0435\u0442\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 js -->\n<main class="rea">\n  <header class="rea-header">\n    <div class="rea-header__panel">\n      <div class="rea-header__left"></div>\n      <div class="rea-header__right">\n        <div class="rea-header__toggler">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="31"\n            height="19"\n            viewBox="0 0 31 19"\n            fill="none"\n            class="icon-bar"\n          >\n            <path\n              fill-rule="evenodd"\n              clip-rule="evenodd"\n              d="M19.5 12C21.9853 12 24 9.98528 24 7.5C24 5.01472 21.9853 3 19.5 3C17.0147 3 15 5.01472 15 7.5C15 9.98528 17.0147 12 19.5 12ZM19.5 15C23.6421 15 27 11.6421 27 7.5C27 3.35786 23.6421 0 19.5 0C15.3579 0 12 3.35786 12 7.5C12 11.6421 15.3579 15 19.5 15Z"\n              fill="#333"\n            ></path>\n            <path\n              fill-rule="evenodd"\n              clip-rule="evenodd"\n              d="M12.1515 0H0V3H10.0104C10.5446 1.87559 11.2727 0.861181 12.1515 0ZM9.01169 7H0V10H9.29945C9.10375 9.19878 9 8.3615 9 7.5C9 7.33239 9.00393 7.16569 9.01169 7ZM11.2532 14H0V17H15.0221C13.5441 16.3021 12.2552 15.2695 11.2532 14Z"\n              fill="#333"\n            ></path>\n            <path\n              fill-rule="evenodd"\n              clip-rule="evenodd"\n              d="M27.9393 18.0607L22.9393 13.0607L25.0607 10.9393L30.0607 15.9393L27.9393 18.0607Z"\n              fill="#333"\n            ></path>\n          </svg>\n        </div>\n      </div>\n    </div>\n    <div class="rea-header__toggle">\n      <nav class="rea-nav">\n        <ul class="rea-nav__list"></ul>\n      </nav>\n      <div class="rea-header__search"></div>\n    </div>\n  </header>\n  <section class="rea-docs">\n    <div class="send-docs">\n      <button class="send-docs__btn">\n        <svg\n          id="Capa_1"\n          enable-background="new 0 0 512 512"\n          height="512"\n          viewBox="0 0 512 512"\n          width="512"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <g>\n            <path\n              d="m497 406.003h-16v-45c0-8.284-6.716-15-15-15h-150c-24.508 0-46.305 11.818-60 30.052-13.695-18.234-35.492-30.052-60-30.052h-150c-8.284 0-15 6.716-15 15v45h-16c-8.284 0-15 6.716-15 15s6.716 15 15 15h141.785c30.529 0 54.438 6.765 71.062 20.107 16.337 13.112 39.794 13.253 56.305 0 16.625-13.342 40.534-20.107 71.063-20.107h141.785c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-340.215 0h-95.785v-30h135c24.813 0 45 20.187 45 45v7.543c-21.493-14.949-49.767-22.543-84.215-22.543zm114.215 22.543v-7.543c0-24.813 20.187-45 45-45h135v30h-95.785c-34.447 0-62.722 7.594-84.215 22.543z"\n            ></path>\n            <path\n              d="m41.879 135.426 109.121 31.177v74.4c0 5.682 3.21 10.875 8.292 13.417l66.334 33.167c7.351 3.676 14.083 8.412 20.008 14.077 5.798 5.544 14.933 5.544 20.731 0 5.925-5.665 12.657-10.401 20.008-14.077l66.334-33.167c5.082-2.541 8.292-7.735 8.292-13.417v-74.4l30-8.571v112.971c0 8.284 6.716 15 15 15s15-6.716 15-15v-121.543l49.121-14.034c14.446-4.127 14.471-24.711 0-28.846l-210-60c-2.693-.77-5.548-.77-8.241 0l-210 60c-14.446 4.127-14.471 24.711 0 28.846zm289.121 96.306-58.043 29.021c-5.969 2.984-11.639 6.481-16.957 10.454-5.318-3.973-10.989-7.47-16.958-10.455l-58.042-29.02v-56.558l70.879 20.251c2.683.766 5.537.773 8.241 0l70.88-20.251zm-75-155.129 155.399 44.4-155.399 44.4-155.399-44.4z"\n            ></path>\n          </g>\n        </svg>\n        To submit documents\n      </button>\n      <ul class="send-docs__list">\n        <li><a href="https://mosabi.rea.ru/">To attend (in Moscow)</a></li>\n        <li><a href="https://filialabi.rea.ru/">To attend (a branch)</a></li>\n      </ul>\n    </div>\n  </section>\n  <!-- <section class="rea-showcase">\n    <div class="rea-showcase__slider jcarousel">\n      <ul class="carousel">\n        <li>\n          <a\n            href="https://www.rea.ru/ru/org/managements/priem/Pages/bakalavr_specialist.aspx"\n            target="_blank"\n          >\n            <img\n              src="https://www.rea.ru/ru/abiturientu/PublishingImages/Pages/glavnaya/1.jpg"\n              width="300"\n              height="200"\n              border="1"\n            />\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://www.rea.ru/ru/org/managements/priem/Pages/magistr.aspx"\n            target="_blank"\n          >\n            <img\n              src="https://www.rea.ru/ru/abiturientu/PublishingImages/Pages/glavnaya/2.jpg"\n            />\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://www.rea.ru/ru/org/colleges/Pages/economicheskiy_licey.aspx"\n            target="_blank"\n          >\n            <img\n              src="https://www.rea.ru/ru/abiturientu/PublishingImages/Pages/glavnaya/3.jpg"\n            />\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://www.rea.ru/ru/org/managements/priem/Pages/SPO.aspx"\n            target="_blank"\n          >\n            <img\n              src="https://www.rea.ru/ru/abiturientu/PublishingImages/Pages/glavnaya/4.jpg"\n            />\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://www.rea.ru/ru/org/managements/Upravlenie-attestacii-i-podgotovki-nauchnykh-kadrov/Pages/asp2016/Priem/Aspirantura-2020.aspx"\n            target="_blank"\n          >\n            <img\n              src="https://www.rea.ru/ru/abiturientu/PublishingImages/Pages/glavnaya/5.jpg"\n            />\n          </a>\n        </li>\n        <li>\n          <a\n            href="https://www.rea.ru/ru/org/managements/priem/Pages/kurs.aspx"\n            target="_blank"\n          >\n            <img\n              src="https://www.rea.ru/ru/abiturientu/PublishingImages/Pages/glavnaya/6.jpg"\n            />\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class="rea-showcase__pagination jcarousel-pagination"></div>\n  </section> -->\n  <section class="rea-socials"></section>\n  <section class="rea-news">\n    <h1 class="rea-news__title rea-section-title"></h1>\n    <div class="rea-news__all"></div>\n    <div class="rea-news__list"></div>\n  </section>\n  <section class="rea-calendar">\n    <h1 class="rea-calendar__title rea-section-title"></h1>\n    <div class="rea-calendar__all"></div>\n    <div class="rea-calendar__slider jcarousel">\n      <ul class="carousel"></ul>\n    </div>\n    <div class="rea-calendar__pagination jcarousel-pagination"></div>\n    <div class="rea-calendar__dates"></div>\n  </section>\n  <section class="rea-programs">\n    <h1 class="rea-programs__title rea-section-title"></h1>\n    <div class="rea-programs__list"></div>\n  </section>\n  <section class="rea-ratings"></section>\n  <section class="rea-diplomas">\n    <h1 class="rea-diplomas__title rea-section-title"></h1>\n    <div class="rea-diplomas__slider"></div>\n  </section>\n  <section class="rea-experts">\n    <h1 class="rea-experts__title rea-section-title"></h1>\n    <div class="rea-experts__all"></div>\n    <div class="rea-experts__slider jcarousel">\n      <ul class="carousel"></ul>\n    </div>\n    <div class="rea-experts__pagination jcarousel-pagination"></div>\n  </section>\n  <section class="rea-companies">\n    <h1 class="rea-companies__title rea-section-title"></h1>\n    <div class="rea-companies__slider jcarousel">\n      <ul class="carousel"></ul>\n    </div>\n    <div class="rea-companies__pagination jcarousel-pagination"></div>\n    <div class="rea-companies__bunner"></div>\n  </section>\n  <footer class="rea-footer">\n    <menu class="rea-footer-menu">\n      <ul class="rea-footer-menu__list"></ul>\n    </menu>\n    <ul class="rea-footer__info"></ul>\n    <div class="rea-footer__copyright"></div>\n  </footer>\n</main>'
    );

    //header
    $(".lanit-rea-header-mid-logo-title").clone().appendTo(".rea-header__left");
    $(".lanit-rea-header-top-lang, .lanit-rea-header-top-auth-signin")
      .clone()
      .appendTo(".rea-header__right");
    $(
      ".lanit-rea-nav-top li, .lanit-rea-nav-middle li, .connected-carousels .carousel-navigation li"
    )
      .clone()
      .appendTo(".rea-nav__list");

    $(".lanit-rea-center-content-services").each(function (index, element) {
      $(".rea-nav__list").append("<li class='rea-nav__bunners'><ul></ul></li>");
      $(".lanit-rea-center-content-info-bi-left").each(function (
        index,
        element
      ) {
        var text = $(element).find("h1").text();
        var link = $(element).find("a").attr("href");

        $(".rea-nav__bunners ul").append(
          "<li class='bi'><a href='" + link + "'>" + text + "</a></li>"
        );
      });
      $(".lanit-rea-center-content-info-sc-left").each(function (
        index,
        element
      ) {
        var text = $(element).find("h1").text();
        var link = $(element).find("a").attr("href");

        $(".rea-nav__bunners ul").append(
          "<li class='sc'><a href='" + link + "'>" + text + "</a></li>"
        );
      });
    });

    $(".lanit-rea-header-top-search").clone().appendTo(".rea-header__search");
    $(".rea-header__toggler").click(function (e) {
      e.preventDefault();
      $(".rea-header__toggle").fadeToggle(300);
    });

    //showcase
    // $(".rea-showcase__slider").jcarousel().jcarouselSwipe();
    // $(".rea-showcase__pagination")
    //   .on("jcarouselpagination:active", "a", function () {
    //     $(this).addClass("active");
    //   })
    //   .on("jcarouselpagination:inactive", "a", function () {
    //     $(this).removeClass("active");
    //   })
    //   .jcarouselPagination();

    // events
    $(".rea-calendar__title").text($(".eventInformer h1").text());
    $(".lanit-rea-events-last .lanit-rea-events-top")
      .clone()
      .appendTo(".rea-calendar__slider .carousel")
      .wrap("<li></li>");
    $(".lanit-rea-events-last .lanit-rea-all-events")
      .clone()
      .appendTo(".rea-calendar__all");
    $(".lanit-rea-data-carousel").clone().appendTo(".rea-calendar__dates");
    $(".rea-calendar__slider").jcarousel().jcarouselSwipe();
    $(".rea-calendar__pagination")
      .on("jcarouselpagination:active", "a", function () {
        $(this).addClass("active");
      })
      .on("jcarouselpagination:inactive", "a", function () {
        $(this).removeClass("active");
      })
      .jcarouselPagination();

    $(".rea-calendar__dates .jcarousel").jcarousel().jcarouselSwipe();
    $(".rea-calendar__dates .jcarousel-control-prev")
      .on("jcarouselcontrol:active", function () {
        $(this).removeClass("inactive");
      })
      .on("jcarouselcontrol:inactive", function () {
        $(this).addClass("inactive");
      })
      .jcarouselControl({
        target: "-=1",
      });
    $(".rea-calendar__dates .jcarousel-control-next")
      .on("jcarouselcontrol:active", function () {
        $(this).removeClass("inactive");
      })
      .on("jcarouselcontrol:inactive", function () {
        $(this).addClass("inactive");
      })
      .jcarouselControl({
        target: "+=1",
      });

    //news
    $(".rea-news__title").text($(".lanit-rea-content-main-center h1").text());
    $(".lanit-rea-news-last .lanit-rea-news-top")
      .clone()
      .appendTo(".rea-news__list");
    $(".lanit-rea-news-last .lanit-rea-all-events")
      .clone()
      .appendTo(".rea-news__all");

    // ratings
    $(".lanit-rea-content-main-banner-ranked").clone().appendTo(".rea-ratings");

    //diplomas
    $(".rea-diplomas__title").html($(".lanit-rea-nav-diplomas-wrap h2").html());
    $(".lanit-rea-nav-diplomas").clone().appendTo(".rea-diplomas__slider");

    $(".rea-diplomas__slider .jcarousel").jcarousel().jcarouselSwipe();
    $(".rea-diplomas__slider .jcarousel-pagination")
      .on("jcarouselpagination:active", "a", function () {
        $(this).addClass("active");
      })
      .on("jcarouselpagination:inactive", "a", function () {
        $(this).removeClass("active");
      })
      .jcarouselPagination();
    $(".rea-diplomas__slider .jcarousel-control-prev")
      .on("jcarouselcontrol:active", function () {
        $(this).removeClass("inactive");
      })
      .on("jcarouselcontrol:inactive", function () {
        $(this).addClass("inactive");
      })
      .jcarouselControl({
        target: "-=1",
      });
    $(".rea-diplomas__slider .jcarousel-control-next")
      .on("jcarouselcontrol:active", function () {
        $(this).removeClass("inactive");
      })
      .on("jcarouselcontrol:inactive", function () {
        $(this).addClass("inactive");
      })
      .jcarouselControl({
        target: "+=1",
      });

    //programs
    $(".rea-programs__title").text($(".lanit-rea-nav-edu h1").text());
    $(".lanit-rea-nav-edu-courses-course")
      .clone()
      .appendTo(".rea-programs__list");

    // companies
    $(".lanit-rea-nav-brands-more").clone().appendTo(".rea-companies__title");
    $(".lanit-rea-nav-brands-links a")
      .clone()
      .appendTo(".rea-companies__slider .carousel")
      .wrap("<li></li>");
    $(".rea-companies__slider")
      .jcarousel()
      .jcarouselSwipe()
      .jcarouselAutoscroll({
        interval: 5000,
        target: "+=3",
        autostart: true,
      });
    $(".rea-companies__pagination")
      .on("jcarouselpagination:active", "a", function () {
        $(this).addClass("active");
      })
      .on("jcarouselpagination:inactive", "a", function () {
        $(this).removeClass("active");
      })
      .jcarouselPagination();
    $(".lanit-rea-nav-brands-work").clone().appendTo(".rea-companies__bunner");

    // footer
    $(".lanit-rea-nav-bottom > li").clone().appendTo(".rea-footer-menu__list");
    $(".lanit-rea-footer-right-info li").clone().appendTo(".rea-footer__info");
    $(".rea-footer__copyright").text(
      $(".lanit-rea-footer-left-copyright").text()
    );

    //socials
    $(".lanit-rea-header-mid-social").clone().appendTo(".rea-socials");

    // send docs
    $(".rea-docs .send-docs__btn").click(function (e) {
      e.preventDefault();
      var that = this;
      $(that)
        .siblings(".send-docs__list")
        .slideToggle(150, function () {
          $(that).parent().toggleClass("send-docs--active");
        });
    });

    function checkWinWidth() {
      if ($(window).width() < 1024) {
        $("#s4-workspace").hide();
      } else {
        $("#s4-workspace").show();
      }
    }

    setTimeout(function () {
      checkWinWidth();

      $(window).resize(function () {
        checkWinWidth();
      });

      $(window).trigger("resize");
    }, 300);
  }, 100);
});
