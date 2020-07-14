$(function () {
  setTimeout(function () {
    // рендер разметки
    $("#s4-workspace").before(
      '<!-- \u0420\u0430\u0437\u043C\u0435\u0442\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 js -->\n<main class="rea">\n  <header class="rea-header">\n    <div class="rea-header__panel">\n      <div class="rea-header__left"></div>\n      <div class="rea-header__right">\n        <div class="rea-header__toggler">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="31"\n            height="19"\n            viewBox="0 0 31 19"\n            fill="none"\n            class="icon-bar"\n          >\n            <path\n              fill-rule="evenodd"\n              clip-rule="evenodd"\n              d="M19.5 12C21.9853 12 24 9.98528 24 7.5C24 5.01472 21.9853 3 19.5 3C17.0147 3 15 5.01472 15 7.5C15 9.98528 17.0147 12 19.5 12ZM19.5 15C23.6421 15 27 11.6421 27 7.5C27 3.35786 23.6421 0 19.5 0C15.3579 0 12 3.35786 12 7.5C12 11.6421 15.3579 15 19.5 15Z"\n              fill="#333"\n            ></path>\n            <path\n              fill-rule="evenodd"\n              clip-rule="evenodd"\n              d="M12.1515 0H0V3H10.0104C10.5446 1.87559 11.2727 0.861181 12.1515 0ZM9.01169 7H0V10H9.29945C9.10375 9.19878 9 8.3615 9 7.5C9 7.33239 9.00393 7.16569 9.01169 7ZM11.2532 14H0V17H15.0221C13.5441 16.3021 12.2552 15.2695 11.2532 14Z"\n              fill="#333"\n            ></path>\n            <path\n              fill-rule="evenodd"\n              clip-rule="evenodd"\n              d="M27.9393 18.0607L22.9393 13.0607L25.0607 10.9393L30.0607 15.9393L27.9393 18.0607Z"\n              fill="#333"\n            ></path>\n          </svg>\n        </div>\n      </div>\n    </div>\n    <div class="rea-header__toggle">\n      <nav class="rea-nav">\n        <ul class="rea-nav__list"></ul>\n      </nav>\n      <div class="rea-header__search"></div>\n    </div>\n  </header>\n  <section class="rea-abit">\n    <div class="rea-abit__content"></div>\n    <div class="rea-abit__links"></div>\n  </section>\n  <section class="rea-scales"></section>\n  <section class="rea-links"></section>\n  <footer class="rea-footer">\n    <menu class="rea-footer-menu">\n      <ul class="rea-footer-menu__list"></ul>\n    </menu>\n    <ul class="rea-footer__info"></ul>\n    <div class="rea-footer__copyright"></div>\n  </footer>\n</main>'
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

    //abit
    $(
      ".lanit-rea-layout-empty-zone .max-content-weight .lanit-rea-layout-empty-zone"
    )
      .clone()
      .appendTo(".rea-abit__content");
    $(".lanit-rea-layout-empty-zone .lanit-rea-layout-empty-zone-top-right a")
      .clone()
      .appendTo(".rea-abit__links");

    // footer
    $(".lanit-rea-nav-bottom > li").clone().appendTo(".rea-footer-menu__list");
    $(".lanit-rea-footer-right-info li").clone().appendTo(".rea-footer__info");
    $(".rea-footer__copyright").text(
      $(".lanit-rea-footer-left-copyright").text()
    );

    function checkWinWidth() {
      if ($(window).width() < 1024) {
        $("#s4-workspace").hide();
      } else {
        $("#s4-workspace").show();
      }
    }

    //tels toggle
    $(".rea-abit__content #div4").each(function (index, element) {
      $(element)[0].id = $(element)[0].id + "-mobile";

      $(".rea-abit__content a[onclick]")
        .removeAttr("onclick")
        .click(function (e) {
          e.preventDefault();

          $(element).toggle();
        });
    });

    setTimeout(function () {
      checkWinWidth();

      $(window).resize(function () {
        checkWinWidth();
      });

      $(window).trigger("resize");
    }, 300);
  }, 100);
});
