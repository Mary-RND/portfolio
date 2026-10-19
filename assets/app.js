/* ============================================================
   Марина Петрушина — портфолио
   Навигация, фильтры, модалка кейсов, форма
   ============================================================ */
(function () {
  "use strict";

  var CASES = {
    pulse: {
      title: "Pulse — командный трекер",
      kicker: "FL.ru · бюджет заказа 300 000 ₽",
      short: "Kanban, спринты и отчёты вместо таблиц и переписок.",
      task:
        "Проект жил в трёх местах: статусы в таблице, обсуждения в мессенджере, часы — вручную в конце месяца. Никто не знал, сколько задач в работе и что просрочено.",
      solution:
        "MVP на чистом JavaScript: канбан с WIP-лимитом 5, спринты с burndown, учёт часов, отчёты план/факт и 4 роли. Права живут в логике canEdit()/canSee(), а не в спрятанных кнопках.",
      result:
        "Рабочий MVP и контракт API для второго этапа на PHP + React. Шестую задачу в «В работе» доска не пропускает, наблюдатель видит только чтение, данные переживают перезагрузку.",
      facts: ["4 роли", "WIP-лимит 5", "burndown", "CSV / JSON"],
      stack: "HTML5 · CSS3 · JavaScript (ES6) · localStorage",
      price: "MVP — 120 000 ₽ · полная версия — 300 000–400 000 ₽",
      img: "assets/img/pulse.webp",
      alt: "Pulse — канбан-доска и загрузка команды",
      demo: "https://mary-rnd.github.io/pulse/",
      code: "https://github.com/Mary-RND/pulse"
    },
    fieldops: {
      title: "FieldOps — заявки и выезды",
      kicker: "FL.ru · заявки и выездные специалисты",
      short: "Диспетчер, специалист, руководитель и админ в одной PWA.",
      task:
        "Заявки на выезд терялись между диспетчером и специалистами: статусы по телефону, акты на бумаге, фотоотчёты в мессенджерах.",
      solution:
        "PWA с 4 ролями, SLA-таймерами, чек-листами работ, актами и фотоотчётом. Ставится на телефон и работает как приложение, в том числе при слабой связи.",
      result:
        "Прозрачный процесс: видно, какая заявка просрочена, кто выехал и какие работы закрыты. Руководитель получает сводку, а не десять звонков.",
      facts: ["4 роли", "SLA-таймеры", "PWA", "акты"],
      stack: "HTML5 · CSS3 · JavaScript · PWA · localStorage",
      price: "MVP — 60 000 ₽ · боевая версия — 150 000–220 000 ₽",
      img: "assets/img/fieldops.webp",
      alt: "FieldOps — панель заявок и выездов",
      demo: "https://mary-rnd.github.io/fieldops/",
      code: "https://github.com/Mary-RND/fieldops"
    },
    calculator: {
      title: "Калькулятор каркасного дома",
      kicker: "Расчётный сервис · прайс из Excel",
      short: "145 позиций прайса превращаются в смету и цену за м² за минуту.",
      task:
        "Менеджер считал смету дома 2–4 часа в Excel и всё равно ошибался в количестве или забывал позицию. Один неверный просчёт стоил дороже, чем разработка.",
      solution:
        "Калькулятор читает прайс из xlsx: ползунки площади и периметра, автоматическое количество по позициям, три уровня цен, резерв и накладные, разбивка по разделам и экспорт сметы.",
      result:
        "Смета собирается за минуту. Цена за м² и разбивка по 16 разделам видны сразу, а прайс обновляется в одном файле — без переписывания программы.",
      facts: ["145 позиций", "16 разделов", "цена за м²", "экспорт"],
      stack: "Python · HTML5 · CSS3 · JavaScript",
      price: "от 45 000 ₽ · срок 3–5 дней",
      img: "assets/img/calculator.webp",
      alt: "Калькулятор стоимости каркасного дома",
      demo: "https://mary-rnd.github.io/karkas-dom-calculator/",
      code: "https://github.com/Mary-RND/karkas-dom-calculator"
    },
    webinar: {
      title: "Лендинг вебинара «Аналитик»",
      kicker: "Лендинг · регистрации на бесплатный вебинар",
      short: "Тёмный лендинг с таймером, формой и честной структурой.",
      task:
        "Нужно собрать регистрации на бесплатный вебинар без конструктора и тяжёлых библиотек: быстро, дёшево и с нормальной скоростью загрузки.",
      solution:
        "Один HTML-файл: оффер, обратный отсчёт, программа, спикер, FAQ, форма «имя + телефон» с валидацией и отправкой на email через Web3Forms. Тёмная тема и reveal-анимации.",
      result:
        "Живой лендинг на GitHub Pages, адаптив от 360 px, Open Graph для соцсетей. Для правок достаточно одного файла — не нужен сборщик.",
      facts: ["1 файл", "таймер", "форма", "Open Graph"],
      stack: "HTML5 · CSS3 · JavaScript · Web3Forms",
      price: "от 15 000 ₽ · срок 3–5 дней",
      img: "assets/img/webinar.webp",
      alt: "Лендинг вебинара «Аналитик»",
      demo: "https://mary-rnd.github.io/vebinar-ii-analitik-landing/",
      code: "https://github.com/Mary-RND/vebinar-ii-analitik-landing"
    },
    plastic: {
      title: "Сайт пластического хирурга",
      kicker: "Сайт практики · Next.js · 3D",
      short: "Премиальный сайт с 3D-героем, прайсом и 11 секциями.",
      task:
        "Врачу нужен информационный сайт практики: показать подход, услуги и цены. По ТЗ заказчика — без формы и онлайн-записи: обращения идут в Telegram и по телефону.",
      solution:
        "Next.js + React Three Fiber: 3D-герой, карта тела, прайс с рыночными ценами, FAQ и адаптив. Дизайн собран вокруг доверия и экспертизы, а не вокруг кнопки «записаться».",
      result:
        "Сайт на GitHub Pages, который продаёт экспертизу и снимает вопросы до звонка. 11 секций, аккуратная типографика, быстрая загрузка.",
      facts: ["11 секций", "3D-герой", "прайс", "Next.js"],
      stack: "Next.js · React Three Fiber · TypeScript · Tailwind CSS",
      price: "от 40 000 ₽ · срок 7–10 дней",
      img: "assets/img/plastic.webp",
      alt: "Сайт пластического хирурга",
      demo: "https://mary-rnd.github.io/plastic-surgery-landing/",
      code: "https://github.com/Mary-RND/plastic-surgery-landing"
    },
    bot: {
      title: "Чат-бот «Алина»",
      kicker: "ИИ-бот · VK + GigaChat · база знаний",
      short: "Консультант университета 24/7, который отвечает строго по материалам.",
      task:
        "Менеджеры отвечали на одни и те же вопросы о курсах, теряли заявки вечером и в выходные. Нужен бот, который не выдумывает факты и передаёт сложное человеку.",
      solution:
        "Python-бот для VK: отвечает по базе знаний, помнит контекст 20 последних сообщений на пользователя, передаёт сложный вопрос менеджеру и продолжает работать при сбое API.",
      result:
        "Ответы 24/7 по актуальной базе. База лежит отдельным модулем: поменяли программу или цену — правится один файл, а не переписывается бот.",
      facts: ["GigaChat", "20 сообщений контекста", "fallback", "VK"],
      stack: "Python · vk-api · GigaChat API",
      price: "от 15 000 ₽ · срок 5–7 дней",
      art: "bot",
      alt: "Чат-бот «Алина» — пример диалога",
      code: "https://github.com/Mary-RND/vk-ai-assistant"
    },
    depersonalizer: {
      title: "Обезличиватель данных",
      kicker: "Автоматизация · Python · офлайн",
      short: "Убирает персональные данные из Excel и Word — и возвращает обратно по ключу.",
      task:
        "Перед анализом и передачей данных нужно вручную вычищать ФИО, телефоны и адреса из десятков файлов xlsx и docx. Долго, нудно и легко ошибиться.",
      solution:
        "Локальный офлайн-инструмент: прямая и обратная конвертация, ключи, категории данных. Ничего не уходит в облако, исходники остаются на компьютере.",
      result:
        "Обезличивание пачки файлов за минуты вместо ручной правки. Ключ хранится отдельно, обратная конвертация возвращает исходные значения.",
      facts: ["xlsx / docx", "офлайн", "ключи", "pytest"],
      stack: "Python · openpyxl · python-docx · pytest",
      price: "от 10 000 ₽ · срок 3–5 дней",
      art: "term",
      alt: "Обезличиватель данных — пример работы",
      code: "https://github.com/Mary-RND/data-depersonalizer"
    },
    procurement: {
      title: "Дашборд закупок MedTech",
      kicker: "Дашборд · закупки 2025–2026",
      short: "Сравнение предложений и сводка по закупкам на одном экране.",
      task:
        "Предложения поставщиков собирались в разных таблицах: сложно сравнить цены, увидеть отклонения и понять, где переплата.",
      solution:
        "Дашборд со сводными таблицами, фильтрами, сравнением позиций и визуальными акцентами на отклонениях. Без установки — открывается в браузере.",
      result:
        "Один экран вместо десяти файлов: видно цены, отклонения и потенциал экономии. Руководителю не нужно сводить таблицы вручную.",
      facts: ["сводка", "фильтры", "сравнение", "экономия"],
      stack: "HTML5 · CSS3 · JavaScript",
      price: "от 8 000 ₽ · срок 2–5 дней",
      img: "assets/img/procurement.webp",
      alt: "Дашборд закупок медицинских изделий",
      demo: "https://mary-rnd.github.io/procurement-demo/",
      code: "https://github.com/Mary-RND"
    }
  };

  var ART = {
    bot:
      '<div class="case-art art-bot"><div class="chat">' +
      '<p class="chat-in">Здравствуйте! Какие курсы подойдут новичку?</p>' +
      '<p class="chat-out">Подскажу по базе знаний: для старта — «Вайб-кодинг». Показать программу и стоимость?</p>' +
      '<p class="chat-in">Да, и можно оплатить частями?</p>' +
      '<p class="chat-out">Да. Передаю вопрос менеджеру — он подтвердит рассрочку.</p>' +
      "</div></div>",
    term:
      '<div class="case-art art-term"><div class="term">' +
      '<div class="term-bar"><span></span><span></span><span></span><i>python depersonalize.py</i></div>' +
      '<pre><span class="t-muted">$</span> input: patients_2026.xlsx\n' +
      '<span class="t-ok">✓</span> найдено: 1 248 записей\n' +
      '<span class="t-ok">✓</span> ФИО · телефон · адрес → маски\n' +
      '<span class="t-ok">✓</span> ключ сохранён: keys.json\n' +
      '<span class="t-warn">→</span> обратная конвертация: ok</pre>' +
      "</div></div>"
  };

  /* ---------- Шапка и мобильное меню ---------- */
  var header = document.getElementById("header");
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  function onScroll() {
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeNav() {
    nav.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeNav();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Активный раздел ---------- */
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll("a:not(.nav-cta)"));
  var sections = navLinks
    .map(function (a) {
      var id = a.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      navObserver.observe(s);
    });
  }

  /* ---------- Появление блоков ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("reveal-ready");
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--delay", (index % 3) * 0.07 + "s");
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- Счётчики ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  if (counters.length && "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.getAttribute("data-count"), 10);
          var start = null;
          function tick(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / 900, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ---------- Фильтры кейсов ---------- */
  var filters = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".case-card"));
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-filter");
      filters.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });
      cards.forEach(function (card) {
        var show = value === "all" || card.getAttribute("data-cat") === value;
        card.classList.toggle("is-hidden", !show);
        if (show) {
          card.classList.add("is-visible");
        }
      });
    });
  });

  /* ---------- Модалка кейса ---------- */
  var modal = document.getElementById("case-modal");
  var modalMedia = document.getElementById("modal-media");
  var modalKicker = document.getElementById("modal-kicker");
  var modalTitle = document.getElementById("modal-title");
  var modalShort = document.getElementById("modal-short");
  var modalTask = document.getElementById("modal-task");
  var modalSolution = document.getElementById("modal-solution");
  var modalResult = document.getElementById("modal-result");
  var modalFacts = document.getElementById("modal-facts");
  var modalStack = document.getElementById("modal-stack");
  var modalPrice = document.getElementById("modal-price");
  var modalActions = document.getElementById("modal-actions");
  var modalClose = document.getElementById("modal-close");

  function openCase(id) {
    var data = CASES[id];
    if (!data || !modal) return;

    if (data.art && ART[data.art]) {
      modalMedia.innerHTML = ART[data.art];
    } else {
      modalMedia.innerHTML =
        '<img src="' + data.img + '" alt="' + data.alt + '" width="1280" height="720">';
    }
    modalKicker.textContent = data.kicker;
    modalTitle.textContent = data.title;
    modalShort.textContent = data.short;
    modalTask.textContent = data.task;
    modalSolution.textContent = data.solution;
    modalResult.textContent = data.result;
    modalStack.textContent = data.stack;
    modalPrice.textContent = data.price;

    modalFacts.innerHTML = data.facts
      .map(function (f) {
        return "<li>" + f + "</li>";
      })
      .join("");

    var actions = "";
    if (data.demo) {
      actions +=
        '<a class="btn" href="' + data.demo + '" target="_blank" rel="noopener">Открыть демо ↗</a>';
    }
    if (data.code) {
      actions +=
        '<a class="btn btn-ghost" href="' + data.code + '" target="_blank" rel="noopener">Смотреть код ↗</a>';
    }
    actions +=
      '<a class="btn btn-ghost" href="#contact" data-close-modal>Обсудить похожий проект</a>';
    modalActions.innerHTML = actions;

    modal.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeCase() {
    if (modal && modal.open) modal.close();
    document.body.style.overflow = "";
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-open]");
    if (trigger) {
      openCase(trigger.getAttribute("data-open"));
      return;
    }
    if (e.target.closest("[data-close-modal]")) {
      closeCase();
    }
  });
  if (modalClose) modalClose.addEventListener("click", closeCase);
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeCase();
    });
    modal.addEventListener("close", function () {
      document.body.style.overflow = "";
    });
  }

  /* ---------- Форма ---------- */
  var form = document.getElementById("lead-form");
  var status = document.getElementById("form-status");
  var submitBtn = document.getElementById("submit-btn");

  function setStatus(text, isError) {
    status.textContent = text;
    status.classList.toggle("is-error", !!isError);
  }

  function markError(field, hasError) {
    var wrap = field.closest(".field");
    if (wrap) wrap.classList.toggle("has-error", hasError);
  }

  if (form) {
    form.addEventListener("input", function (e) {
      if (e.target.matches("input, select, textarea")) markError(e.target, false);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.elements.name;
      var contact = form.elements.contact;
      var task = form.elements.task;
      var budget = form.elements.budget;
      var message = form.elements.message;
      var valid = true;

      [name, contact, task].forEach(function (field) {
        var bad = !field.value.trim();
        markError(field, bad);
        if (bad) valid = false;
      });

      if (!valid) {
        setStatus("Заполните имя, контакт и тип задачи — этого достаточно.", true);
        return;
      }

      var payload = {
        name: name.value.trim(),
        contact: contact.value.trim(),
        task: task.value,
        budget: budget.value || "не указан",
        message: message.value.trim() || "—",
        _subject: "Заявка с сайта-портфолио",
        _template: "table",
        _captcha: "false"
      };

      submitBtn.disabled = true;
      submitBtn.textContent = "Отправляю…";
      setStatus("Отправляю задачу…", false);

      fetch("https://formsubmit.co/ajax/mar.petrushina@yandex.ru", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then(function () {
          form.reset();
          setStatus("Спасибо! Задача ушла. Отвечу в течение дня — обычно быстрее.", false);
          submitBtn.textContent = "Отправлено";
          setTimeout(function () {
            submitBtn.disabled = false;
            submitBtn.textContent = "Отправить задачу";
          }, 4000);
        })
        .catch(function () {
          setStatus(
            "Не получилось отправить форму. Напишите напрямую: mar.petrushina@yandex.ru — так даже надёжнее.",
            true
          );
          submitBtn.disabled = false;
          submitBtn.textContent = "Отправить задачу";
        });
    });
  }

  /* ---------- Выбор пакета в форме ---------- */
  document.querySelectorAll("[data-plan]").forEach(function (link) {
    link.addEventListener("click", function () {
      var plan = link.getAttribute("data-plan");
      var message = document.getElementById("message");
      if (message && !message.value) {
        message.value = "Интересует пакет «" + plan + "». Задача: ";
      }
    });
  });
})();
