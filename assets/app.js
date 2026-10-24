/* ============================================================
   Марина Петрушина — портфолио
   Навигация, фильтры, модалка кейсов, форма
   ============================================================ */
(function () {
  "use strict";

  var CASES = {
    "lead-nedvizhimost": {
      title: "Чек-лист «Проверка квартиры до покупки»",
      kicker: "FL.ru · недвижимость · лид-магнит на 9 страниц",
      short: "Премиальный чек-лист для агентства недвижимости: покупатель проходит по 6 блокам проверки и оставляет контакт на консультацию.",
      task:
        "Агентству нужен лид-магнит для покупателей жилья: не «полезная статья», а инструмент, который помогает проверить квартиру до внесения задатка и приводит человека на консультацию. Тексты и фотографии — от клиента, дизайн — в премиальном сегменте.",
      solution:
        "Собрала бриф, предложила тему и структуру из 6 блоков проверки: документы, риски, дом, ремонт, цена и финальный чек-лист. Отредактировала текст, сверстала 9 страниц A4 в графите и золоте с ночным городом, сделала обложку, сводный чек-лист и CTA.",
      result:
        "Готовый PDF на 9 страниц и отдельная страница на GitHub Pages со всеми разворотами и кнопкой скачивания. Чек-лист собирает контакты покупателей жилья; повтор такой работы — около 2 часов.",
      facts: ["9 страниц A4", "6 блоков проверки", "люкс-дизайн"],
      stack: "HTML/CSS · PDF · GitHub Pages",
      price: "3 500 ₽",
      img: "assets/img/lead-nedvizhimost.webp",
      alt: "Чек-лист «Проверка квартиры до покупки» — обложка и страницы",
      demo: "https://mary-rnd.github.io/lead-magnet-nedvizhimost/",
      code: "https://mary-rnd.github.io/lead-magnet-nedvizhimost/download/proverka-kvartiry-chek-list.pdf",
      linkLabel: "Скачать PDF ↗"
    },
    "lead-1000-zayavok": {
      title: "Гайд «7 шагов к 1000 заявок за 30 дней»",
      kicker: "FL.ru · недвижимость · гайд-презентация 16:9",
      short: "12 слайдов для агентства недвижимости: система заявок с сайта без бюджета на таргет — с нормативами, сроками и чек-листом первого звонка.",
      task:
        "Агентству нужен материал, который объясняет клиенту, откуда берутся заявки с сайта и почему это работает без таргета. Формат — гайд-презентация для отправки после первого контакта, с цифрами и нормативами, а не общими советами.",
      solution:
        "Собрала бриф и структуру из 12 слайдов: точка А и точка Б, нормативы (CR, бюджет, сроки), чек-лист первого звонка, шаблон скрипта, разбор ошибок и CTA на бесплатный разбор сайта. Светлый дизайн с фотографиями и портретом эксперта, PDF 16:9.",
      result:
        "Гайд на 12 слайдов + страница со всеми экранами и скачиванием. Материал ведёт читателя к заявке на разбор сайта; повтор такой работы — около 1 часа 20 минут.",
      facts: ["12 слайдов 16:9", "нормативы и сроки", "B2B"],
      stack: "HTML/CSS · PDF · GitHub Pages",
      price: "7 000 ₽",
      img: "assets/img/lead-1000-zayavok.webp",
      alt: "Гайд «7 шагов к 1000 заявок за 30 дней» — обложка и слайды",
      demo: "https://mary-rnd.github.io/lead-magnet-1000-zayavok/",
      code: "https://mary-rnd.github.io/lead-magnet-1000-zayavok/download/1000-zayavok-za-30-dney.pdf",
      linkLabel: "Скачать PDF ↗"
    },
    "lead-lunnyy": {
      title: "Лунный чек-лист на 25 дней",
      kicker: "FL.ru · астрология · рабочая тетрадь на 11 страниц",
      short: "Рабочая тетрадь астролога: 7 фаз Луны, задания и лист наблюдений. Без обещаний и «космос всегда на твоей стороне» — с дисклеймером.",
      task:
        "Астрологу нужно оформить 10 листов готового текста в рабочую тетрадь, которую можно печатать и заполнять от руки. Важно сохранить атмосферу практики, но убрать рискованные обещания.",
      solution:
        "Собрала структуру из 7 фаз: что делать, чего избегать, задание и чекбоксы на каждый разворот. Отредактировала текст, добавила дисклеймер и лист наблюдений, сделала тёмную «космическую» обложку с золотом и цианом, PDF на 11 страниц A4.",
      result:
        "Готовая тетрадь на 11 страниц + страница со всеми разворотами и скачиванием. Читатель может пройти месяц практики и сравнить результат; повтор — около 1,5 часа.",
      facts: ["11 страниц A4", "7 фаз", "лист наблюдений"],
      stack: "HTML/CSS · PDF · GitHub Pages",
      price: "3 500 ₽",
      img: "assets/img/lead-lunnyy.webp",
      alt: "Лунный чек-лист на 25 дней — обложка и страницы тетради",
      demo: "https://mary-rnd.github.io/lead-magnet-lunnyy-checklist/",
      code: "https://mary-rnd.github.io/lead-magnet-lunnyy-checklist/download/lunnyy-chek-list.pdf",
      linkLabel: "Скачать PDF ↗"
    },
    "lead-wildberries": {
      title: "Wildberries: 7 шагов от нуля до продаж",
      kicker: "FL.ru · маркетплейсы · гайд на 17 страниц",
      short: "Большой гайд для начинающих селлеров: выбор ниши, юнит-экономика, поставка на склад WB, карточка с высоким CTR и чек-лист запуска.",
      task:
        "Клиенту нужен объёмный гайд для новичков на Wildberries: от выбора ниши до первых продаж. Внутри — таблицы расходов и нормативов, которые нельзя переврать, и единый стиль на 17 страницах.",
      solution:
        "Собрала структуру 17 страниц: оглавление, 7 шагов, таблицы расходов и нормативов, блок ошибок, чек-лист запуска, FAQ и CTA. Отредактировала текст, сделала неоновый дизайн в стиле маркетплейса, обложку и все страницы PDF.",
      result:
        "Готовый PDF на 17 страниц и страница со всеми разворотами и скачиванием. Гайд закрывает путь «ниша → поставка → карточка → первые продажи»; повтор — около часа.",
      facts: ["17 страниц A4", "7 шагов", "чек-лист запуска"],
      stack: "HTML/CSS · PDF · GitHub Pages",
      price: "4 500 ₽",
      img: "assets/img/lead-wildberries.webp",
      alt: "Гайд «Wildberries: 7 шагов от нуля до продаж» — обложка и страницы",
      demo: "https://mary-rnd.github.io/lead-magnet-wildberries/",
      code: "https://mary-rnd.github.io/lead-magnet-wildberries/download/wildberries-7-shagov.pdf",
      linkLabel: "Скачать PDF ↗"
    },
    vitagen: {
      title: "VitaGen-AI — инвестиционный пакет (ДЕМО)",
      kicker: "Python · docx/xlsx/pptx · портфолио-демо",
      short: "Бизнес-план, финмодель и презентация для инвесторов, сгенерированные кодом. Все цифры вымышлены — это демо-версия для портфолио.",
      task:
        "Инвестору нужен пакет документов, а не красивый слайдер: резюме для инвестора, рынок, юнит-экономика, сценарии, риски, cap table и презентация. Руководство просило, чтобы цифры в Word, Excel и презентации никогда не расходились между собой.",
      solution:
        "Всё собирается из единого блока допущений кодом: python-docx для бизнес-плана, openpyxl для формульной финмодели (P&L, ДДС, баланс, сценарии, IRR/MOIC), python-pptx + matplotlib для 17 слайдов и графиков. Один скрипт пересобирает весь пакет за минуты.",
      result:
        "Пакет 56 страниц + 19 листов Excel + 17 слайдов. При смене цен или клиентов пересчёт автоматически согласует все документы. Публикуемая здесь версия — ДЕМО: все финансовые цифры намеренно изменены, оригинальные показатели клиентов не раскрываются.",
      facts: ["62 страницы", "19 листов Excel", "17 слайдов", "цифры вымышлены"],
      stack: "Python · python-docx · openpyxl · python-pptx · matplotlib",
      price: "Цена — договорная (демо-версия публикуется бесплатно)",
      img: "assets/img/vitagen-demo.webp",
      alt: "VitaGen-AI — демо-пакет инвестиционной документации",
      demo: "https://mary-rnd.github.io/vitagen-ai-demo/",
      code: "https://github.com/Mary-RND/vitagen-ai-demo"
    },
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
      price: "от 25 000 ₽ · срок 3–5 дней",
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
      price: "от 50 000 ₽ · срок 2–5 дней",
      img: "assets/img/procurement.webp",
      alt: "Дашборд закупок медицинских изделий",
      demo: "https://mary-rnd.github.io/procurement-demo/",
      code: "https://github.com/Mary-RND"
    },
    sport: {
      title: "Лендинг вебинара «5 привычек»",
      kicker: "Спорт-ленд · бесплатный вебинар",
      short: "Прогрев на вебинар: боли, программа на 3 месяца, кейсы до/после и форма записи.",
      task:
        "Собрать регистрации на бесплатный вебинар фитнес-клуба: тёплый editorial-дизайн, понятная структура прогрева и форма без конструктора.",
      solution:
        "Одностраничный лендинг на чистом HTML/CSS/JS: оффер, боли ЦА, программа на 3 месяца, кейсы до/после, форма регистрации. Oswald + Playfair Display, бежево-коричневая палитра.",
      result:
        "Живой лендинг на GitHub Pages: адаптив, быстрая загрузка, форма записи. Структура собрана под один оффер — без лишних блоков.",
      facts: ["1 оффер", "3 месяца", "до/после", "форма"],
      stack: "HTML5 · CSS3 · JavaScript · GitHub Pages",
      price: "от 15 000 ₽ · срок 3–5 дней",
      img: "assets/img/sport.webp",
      alt: "Лендинг вебинара «5 привычек» для Спорт-ленд",
      demo: "https://mary-rnd.github.io/sport-land-v2-landing/",
      code: "https://github.com/Mary-RND/sport-land-v2-landing"
    },
    infusion: {
      title: "Дашборд рынка инфузионных насосов",
      kicker: "MedTech · аналитика закупок · 2025–2026",
      short: "Конкуренты, цены и 200 закупок на одном экране — без Excel.",
      task:
        "Нужно было собрать картину рынка инфузионных насосов: кто лидирует, какие цены и где сосредоточен спрос. Данные лежали в выгрузках закупок.",
      solution:
        "Python-пайплайн на pandas + SQLite: очистка, нормализация и расчёт KPI. Статический дашборд на HTML/CSS/JS: лидеры, ценовой коридор, география, 200 сделок, 108 больниц, 59 регионов.",
      result:
        "Один экран вместо десятков выгрузок: видно лидеров, ценовой коридор и концентрацию спроса. Дашборд работает офлайн после скачивания.",
      facts: ["200 сделок", "108 больниц", "59 регионов", "pandas"],
      stack: "Python · pandas · SQLite · HTML/CSS/JS",
      price: "от 25 000 ₽ · срок 5–7 дней",
      img: "assets/img/infusion.webp",
      alt: "Дашборд рынка инфузионных насосов",
      demo: "https://mary-rnd.github.io/infusion-pumps-dashboard/",
      code: "https://github.com/Mary-RND/infusion-pumps-dashboard"
    },
    seoland: {
      title: "Текст главной страницы веб-дизайнера",
      kicker: "Kwork · реальный заказ · 3268134",
      short: "SEO-текст для личного сайта веб-дизайнера на Tilda: интент, ключи, структура.",
      task:
        "Личный сайт веб-дизайнера на Tilda без продающего текста. Нужен текст, который отвечает на запрос «заказать сайт», ведёт к заявке и не выглядит рекламной «водой».",
      solution:
        "Разобрал бриф и поисковый интент, собрал структуру H1–H3, распределил ключевые фразы по блокам, написал текст 4 500 знаков с CTA и редактурой по чек-листу урока: без переспама, без недостоверных обещаний.",
      result:
        "Готовый текст, который клиент может вставить в Tilda без правок. Заказ сдан за 1 ч 45 мин при бюджете до 3 000 ₽; открыто предложение о долгосрочном сотрудничестве.",
      facts: ["4 500 знаков", "H1–H3", "1 ч 45 мин", "Tilda"],
      stack: "Бриф → структура → генерация → редактура по чек-листу",
      price: "до 3 000 ₽ · сдан за 1 ч 45 мин",
      img: "assets/img/seo-landing.svg",
      alt: "Обложка кейса: текст главной страницы веб-дизайнера",
      linkLabel: "Читать текст ↗",
      code: "https://github.com/Mary-RND/portfolio/blob/main/seo-cases/01-landing-veb-dizaynera.md"
    },
    seoarticle: {
      title: "Статья в блог: тормозные колодки",
      kicker: "Kwork · реальный заказ · 3267857",
      short: "SEO-статья с HTML-разметкой для сайта на 1С-Битрикс: 7 признаков износа.",
      task:
        "Сайт о тормозных системах: нужна статья с SEO-заголовками и HTML-разметкой, которую корректно читают и поисковики, и ИИ. 52 предложения от конкурентов, заказ активен менее суток.",
      solution:
        "Статья 7 000 знаков: разобрал интент водителя, выстроил логику «признаки → проверка → замена», распределил ключи по H2/H3, добавил разметку для 1С-Битрикс и редактуру: факты без выдумок, безопасность без категоричности.",
      result:
        "Текст сдан за 1 ч 25 мин из 52 предложений. Клиент получил статью, готовую к публикации: заголовки распознаются поисковыми системами и ИИ-агрегаторами.",
      facts: ["7 000 знаков", "HTML-разметка", "1 ч 25 мин", "52 предложения"],
      stack: "Бриф → структура → генерация → редактура по чек-листу",
      price: "до 3 000 ₽ · сдана за 1 ч 25 мин",
      img: "assets/img/seo-article.svg",
      alt: "Обложка кейса: статья о тормозных колодках",
      linkLabel: "Читать текст ↗",
      code: "https://github.com/Mary-RND/portfolio/blob/main/seo-cases/02-statya-tormoznye-kolodki.md"
    },
    seostudio: {
      title: "6 статей для арт-студии KiSTOCHKA",
      kicker: "Kwork · реальный заказ · 3268044",
      short: "SEO-статьи для Tilda-сайта детской студии рисования + чистка старых текстов.",
      task:
        "Сайт арт-студии на Tilda: Тильда уже дала SEO-рекомендации, но нужно добавить 6 статей и привести в порядок существующие — убрать лишнее, добавить недостающее.",
      solution:
        "Отредактировал существующие тексты, написал 6 статей под запросы аудитории студии («занятия рисованием для детей», «семейные мастер-классы»), выровнял структуру и метатеги по всему сайту.",
      result:
        "Пакет из 6 статей и отредактированных страниц сдан за 50 минут при бюджете до 7 000 ₽. Сайт получил контент, который закрывает реальные поисковые запросы родителей.",
      facts: ["6 статей", "Tilda", "50 минут", "редактура"],
      stack: "Аудит сайта → структура статей → генерация → редактура",
      price: "до 7 000 ₽ за пакет · 50 минут",
      img: "assets/img/seo-studio.svg",
      alt: "Обложка кейса: статьи для арт-студии",
      linkLabel: "Читать текст ↗",
      code: "https://github.com/Mary-RND/portfolio/blob/main/seo-cases/04-statya-art-studiya.md"
    },
    seometa: {
      title: "Метатеги и ALT для Tilda-сайта",
      kicker: "Kwork · тот же заказ · 3268044",
      short: "SEO-обвязка страниц: title, description, H1-рекомендации, ALT картинок.",
      task:
        "Техническая часть SEO-задачи арт-студии: проверить метатеги всех страниц и ALT изображений, внести рекомендации в админку Tilda.",
      solution:
        "Прошёл по всем страницам, переписал title и description под интент каждой страницы (до 60 и до 160 знаков), сверил H1, проставил ALT картинкам с ключами без переспама.",
      result:
        "Страницы получили корректные метатеги, изображения — осмысленные ALT. Отдельно такая работа стоит 2 500–3 500 ₽ — здесь вошла в пакет.",
      facts: ["12 страниц", "title · description", "ALT", "35 минут"],
      stack: "Аудит → метатеги → ALT → рекомендации для Tilda",
      price: "2 500–3 500 ₽ отдельно · 35 минут",
      img: "assets/img/seo-meta.svg",
      alt: "Обложка кейса: метатеги и ALT для сайта",
      linkLabel: "Читать текст ↗",
      code: "https://github.com/Mary-RND/portfolio/blob/main/seo-cases/05-metategi-alt.md"
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

  function applyFilter(value) {
    filters.forEach(function (b) {
      var active = b.getAttribute("data-filter") === value;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    cards.forEach(function (card) {
      var cats = (card.getAttribute("data-cat") || "").split(/\s+/);
      var show = value === "all" || cats.indexOf(value) !== -1;
      card.classList.toggle("is-hidden", !show);
      if (show) {
        card.classList.add("is-visible");
      }
    });
  }

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  document.querySelectorAll("[data-filter-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      applyFilter(link.getAttribute("data-filter-link"));
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
        '<a class="btn btn-ghost" href="' + data.code + '" target="_blank" rel="noopener">' +
        (data.linkLabel || "Смотреть код ↗") + "</a>";
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

  /* ---------- Форма: письмо в почтовом клиенте ---------- */
  var form = document.getElementById("lead-form");
  var status = document.getElementById("form-status");
  var copyBtn = document.getElementById("copy-lead");
  var EMAIL = "mar.petrushina@yandex.ru";

  function setStatus(text, isError) {
    status.textContent = text;
    status.classList.toggle("is-error", !!isError);
  }

  function markError(field, hasError) {
    var wrap = field.closest(".field");
    if (wrap) wrap.classList.toggle("has-error", hasError);
  }

  function leadData() {
    return {
      name: form.elements.name.value.trim(),
      contact: form.elements.contact.value.trim(),
      task: form.elements.task.value,
      budget: form.elements.budget.value || "не указан",
      message: form.elements.message.value.trim() || "—"
    };
  }

  function leadText(data) {
    return [
      "Имя: " + data.name,
      "Контакт: " + data.contact,
      "Задача: " + data.task,
      "Бюджет: " + data.budget,
      "",
      "Описание:",
      data.message
    ].join("\n");
  }

  function leadSubject(data) {
    return "Заявка с сайта-портфолио: " + data.task;
  }

  function mailtoHref(data) {
    return (
      "mailto:" +
      EMAIL +
      "?subject=" +
      encodeURIComponent(leadSubject(data)) +
      "&body=" +
      encodeURIComponent(leadText(data))
    );
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(area);
      }
    });
  }

  function validateLead() {
    var valid = true;
    [form.elements.name, form.elements.contact, form.elements.task].forEach(function (field) {
      var bad = !field.value.trim();
      markError(field, bad);
      if (bad) valid = false;
    });
    return valid ? leadData() : null;
  }

  if (form) {
    form.addEventListener("input", function (e) {
      if (e.target.matches("input, select, textarea")) markError(e.target, false);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = validateLead();
      if (!data) {
        setStatus("Заполните имя, контакт и тип задачи — этого достаточно.", true);
        return;
      }
      window.location.href = mailtoHref(data);
      setStatus(
        "Открываю почтовый клиент с готовым письмом. Если он не открылся — нажмите «Скопировать заявку» и отправьте на " +
          EMAIL +
          ".",
        false
      );
    });

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var data = validateLead();
        if (!data) {
          setStatus("Заполните имя, контакт и тип задачи — этого достаточно.", true);
          return;
        }
        copyText(leadText(data))
          .then(function () {
            setStatus(
              "Заявка скопирована. Вставьте её в письмо на " + EMAIL + " или в Telegram.",
              false
            );
            copyBtn.textContent = "Скопировано";
            setTimeout(function () {
              copyBtn.textContent = "Скопировать заявку";
            }, 2500);
          })
          .catch(function () {
            setStatus(
              "Не получилось скопировать автоматически. Выделите текст заявки и скопируйте вручную.",
              true
            );
          });
      });
    }
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
