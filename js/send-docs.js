$(function () {
  setTimeout(function () {
    // рендер разметки
    $(".lanit-rea-header-mid .lanit-rea-header-mid-links").append(
      '<!-- \u0420\u0430\u0437\u043C\u0435\u0442\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 js -->\n<div class="send-docs send-docs-desktop">\n  <button class="send-docs__btn">\n    <svg\n      id="Capa_1"\n      enable-background="new 0 0 512 512"\n      height="512"\n      viewBox="0 0 512 512"\n      width="512"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <g>\n        <path\n          d="m497 406.003h-16v-45c0-8.284-6.716-15-15-15h-150c-24.508 0-46.305 11.818-60 30.052-13.695-18.234-35.492-30.052-60-30.052h-150c-8.284 0-15 6.716-15 15v45h-16c-8.284 0-15 6.716-15 15s6.716 15 15 15h141.785c30.529 0 54.438 6.765 71.062 20.107 16.337 13.112 39.794 13.253 56.305 0 16.625-13.342 40.534-20.107 71.063-20.107h141.785c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-340.215 0h-95.785v-30h135c24.813 0 45 20.187 45 45v7.543c-21.493-14.949-49.767-22.543-84.215-22.543zm114.215 22.543v-7.543c0-24.813 20.187-45 45-45h135v30h-95.785c-34.447 0-62.722 7.594-84.215 22.543z"\n        ></path>\n        <path\n          d="m41.879 135.426 109.121 31.177v74.4c0 5.682 3.21 10.875 8.292 13.417l66.334 33.167c7.351 3.676 14.083 8.412 20.008 14.077 5.798 5.544 14.933 5.544 20.731 0 5.925-5.665 12.657-10.401 20.008-14.077l66.334-33.167c5.082-2.541 8.292-7.735 8.292-13.417v-74.4l30-8.571v112.971c0 8.284 6.716 15 15 15s15-6.716 15-15v-121.543l49.121-14.034c14.446-4.127 14.471-24.711 0-28.846l-210-60c-2.693-.77-5.548-.77-8.241 0l-210 60c-14.446 4.127-14.471 24.711 0 28.846zm289.121 96.306-58.043 29.021c-5.969 2.984-11.639 6.481-16.957 10.454-5.318-3.973-10.989-7.47-16.958-10.455l-58.042-29.02v-56.558l70.879 20.251c2.683.766 5.537.773 8.241 0l70.88-20.251zm-75-155.129 155.399 44.4-155.399 44.4-155.399-44.4z"\n        ></path>\n      </g>\n    </svg>\n    \u041F\u043E\u0434\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B\n  </button>\n  <ul class="send-docs__list">\n    <li><a href="https://mosabi.rea.ru/">\u0414\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0432 \u041C\u043E\u0441\u043A\u0432\u0435</a></li>\n    <li><a href="https://filialabi.rea.ru/">\u0414\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0432 \u0444\u0438\u043B\u0438\u0430\u043B</a></li>\n  </ul>\n</div>\n'
    );
    // send docs
    $(".send-docs-desktop .send-docs__btn").click(function (e) {
      e.preventDefault();
      var that = this;
      $(that)
        .siblings(".send-docs__list")
        .slideToggle(150, function () {
          $(that).parent().toggleClass("send-docs--active");
        });
    });
  }, 100);
});