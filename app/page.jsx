"use client";
import { useState } from "react";

function stopLink(event) {
  event.preventDefault();
}

function Socials() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="https://vk.com/fam.stom"
        aria-label="ВКонтакте"
        className="grid size-10 place-items-center rounded-full bg-white"
      >
        <img
          src="/assets/vk-green.png"
          alt=""
          className="size-9 object-contain"
        />
      </a>
      <a
        href="https://t.me/famstom"
        aria-label="Telegram"
        className="grid size-10 place-items-center rounded-full bg-white"
      >
        <img
          src="/assets/telegram-green.svg"
          alt=""
          className="size-9 object-contain"
        />
      </a>
      <a
        href="https://wa.me/79255058819"
        aria-label="WhatsApp"
        className="grid size-10 place-items-center rounded-full bg-white"
      >
        <img
          src="/assets/whatsapp-green.png"
          alt=""
          className="size-9 object-contain"
        />
      </a>
    </div>
  );
}

function Contacts({ menu = false }) {
  return (
    <div
      className={
        menu
          ? "grid grid-cols-1 gap-5 text-sm md:grid-cols-3 md:items-start md:gap-6 lg:text-base"
          : "flex items-center gap-6 text-sm 2xl:text-base"
      }
    >
      <p className="leading-6">
        Пн. – Пт.: с 8:00 - 20:00
        <br />
        Сб. – Вс.: с 9:00 - 20:00
      </p>
      <div className={menu ? "md:justify-self-center md:pt-1" : ""}>
        <Socials />
      </div>
      <div
        className={
          menu
            ? "flex flex-col gap-3 md:items-end md:text-right"
            : "flex flex-col font-semibold leading-6"
        }
      >
        <div className="flex flex-col font-semibold leading-6">
          <a href="tel:+74951208006" onClick={stopLink}>
            +7 (495) 120-80-06
          </a>
          <a href="tel:+79255058819" onClick={stopLink}>
            +7 (925) 505-88-19
          </a>
        </div>
        {menu && (
          <button type="button" className="cursor-pointer">
            Заказать обратный звонок
          </button>
        )}
      </div>
      {!menu && (
        <button type="button" className="cursor-pointer whitespace-nowrap">
          Заказать обратный звонок
        </button>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-[#23845c] text-white">
      <div className="mx-auto flex min-h-20 w-full max-w-[1760px] items-center justify-between gap-5 px-5 lg:min-h-24 lg:px-8">
        <a
          href="/"
          aria-label="Семейная стоматология — главная"
          className="shrink-0"
        >
          <img
            src="/assets/logo-green.svg"
            alt="Семейная стоматология"
            className="w-44 sm:w-52 lg:w-60"
          />
        </a>
        <div className="hidden 2xl:block">
          <Contacts />
        </div>
        <button
          type="button"
          className="ml-auto p-2 2xl:hidden"
          aria-label={open ? "Закрыть контакты" : "Открыть контакты"}
          aria-expanded={open}
          aria-controls="mobile-contacts"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="size-7"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div
          id="mobile-contacts"
          className="border-t border-white/20 px-5 py-6 lg:px-8 2xl:hidden"
        >
          <div className="mx-auto max-w-[1760px]">
            <Contacts menu />
          </div>
        </div>
      )}
    </header>
  );
}

const healthGroups = [
  {
    heading: "Если зуб болит",
    items: ["Лечение зубов", "Лечение дёсен", "Удаление зуба"],
  },
  {
    heading: "Если зуб разрушен или отсутствует",
    items: ["Имплантация", "Протезирование", "Реставрация"],
  },
  {
    heading: "Чтобы зубы не болели",
    items: [
      "Профилактический осмотр",
      "Чистка налёта и зубного камня",
      "Пломба",
    ],
  },
  {
    heading: "Снимки",
    items: [
      "Прицельный снимок зуба",
      "Панорамный снимок",
      "Компьютерная томография",
    ],
  },
  {
    heading: "Особый уход",
    items: ["Детская стоматология", "Лечение зубов при беременности"],
  },
];

const beautyGroups = [
  {
    heading: "Сделать зубы ровными",
    description: "Исправление прикуса",
    items: ["Брекеты", "Каппы"],
  },
  {
    heading: "Восстановить форму зубов",
    description: "Эстетика улыбки",
    items: ["Виниры на зубы", "Люминиры на зубы"],
  },
  {
    heading: "Сделать зубы белыми",
    description: "Уход за эмалью",
    items: ["Отбеливание зубов"],
  },
];

const serviceImages = {
  "Если зуб болит": "/assets/original/010-zub_1.png",
  "Если зуб разрушен или отсутствует": "/assets/original/009-_112.png",
  "Чтобы зубы не болели": "/assets/original/011-_212.png",
  Снимки: "/assets/original/017-_.jpg",
  "Особый уход": "/assets/original/016---1.jpg",
  "Сделать зубы ровными": "/assets/original/015-zub_2.png",
  "Восстановить форму зубов": "/assets/original/010-zub_1.png",
  "Сделать зубы белыми": "/assets/original/011-_212.png",
};

const serviceDescriptions = {
  "Лечение зубов": "Врач осмотрит зуб и предложит подходящий способ лечения.",
  "Лечение дёсен": "Диагностика состояния дёсен и план лечения.",
  "Удаление зуба": "Удаление проводится после осмотра и оценки снимков.",
  Имплантация: "Восстановление отсутствующего зуба с помощью импланта.",
  Протезирование: "Подбор конструкции для восстановления зубного ряда.",
  Реставрация: "Восстановление формы и внешнего вида зуба.",
  "Профилактический осмотр": "Проверка зубов и рекомендации по уходу.",
  "Чистка налёта и зубного камня": "Профессиональная гигиена полости рта.",
  Пломба: "Восстановление зуба после лечения кариеса.",
  "Прицельный снимок зуба": "Снимок отдельного зуба для уточнения диагноза.",
  "Панорамный снимок": "Общий снимок зубов и челюстей.",
  "Компьютерная томография":
    "Трёхмерное исследование для планирования лечения.",
  "Детская стоматология": "Бережный приём для маленьких пациентов.",
  "Лечение зубов при беременности":
    "Осмотр и подбор допустимого лечения с учётом срока беременности.",
  Брекеты: "Исправление прикуса с помощью брекет-системы.",
  Каппы: "Съёмные прозрачные конструкции для коррекции прикуса.",
  "Виниры на зубы": "Тонкие накладки для изменения формы и цвета зубов.",
  "Люминиры на зубы": "Керамические накладки для эстетики улыбки.",
  "Отбеливание зубов": "Осветление эмали после консультации стоматолога.",
};

function ServiceGroup({ group, className = "" }) {
  const photo = group.heading === "Снимки" || group.heading === "Особый уход";
  return (
    <article
      className={`min-w-0 rounded-xl border border-gray-200 bg-white p-5 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-medium leading-snug">{group.heading}</h3>
        <img
          src={serviceImages[group.heading]}
          alt=""
          className={
            photo
              ? "h-16 w-16 shrink-0 rounded-lg object-cover"
              : "h-16 w-16 shrink-0 object-contain"
          }
        />
      </div>
      <div className="divide-y divide-gray-200">
        {group.items.map((item) => (
          <details key={item} className="py-2">
            <summary className="cursor-pointer text-base text-gray-800 hover:text-green-700">
              {item}
            </summary>
            <p className="mt-2 pl-5 text-sm leading-5 text-gray-600">
              {serviceDescriptions[item]}
            </p>
          </details>
        ))}
      </div>
    </article>
  );
}

const reviewSummaries = [
  "В клинике помогли с острой зубной болью. Пациент отметил внимательное отношение врача и сотрудников.",
  "Ребёнку вылечили кариес быстро и аккуратно. Врач сумел найти с ним общий язык.",
  "Пациентка поблагодарила врача за чуткость, понятные объяснения и спокойное лечение.",
  "Родители пишут, что дети перестали бояться приёма и с интересом возвращаются в клинику.",
  "Пациенты отмечают доброжелательную атмосферу и помощь даже при обращении с острой болью.",
];

const priceGroups = [
  {
    title: "Восстановление зубов",
    items: [
      ["Имплантация", "от 33 000 ₽"],
      ["Протезирование", "от 5 000 ₽"],
      ["Реставрация", "от 3 000 ₽"],
    ],
  },
  {
    title: "Профилактика и лечение",
    items: [
      ["Профилактический осмотр", "бесплатно"],
      ["Чистка налёта и камня", "250 ₽ за зуб"],
      ["Пломба", "от 2 900 ₽"],
    ],
  },
  {
    title: "Снимки",
    items: [
      ["Прицельный снимок", "400 ₽"],
      ["Панорамный снимок", "1 000 ₽"],
      ["Компьютерная томография", "3 500 ₽"],
    ],
  },
  {
    title: "Эстетика и прикус",
    items: [
      ["Брекеты", "от 120 000 ₽"],
      ["Каппы", "от 5 000 ₽"],
      ["Виниры", "от 27 000 ₽"],
      ["Люминиры", "от 40 000 ₽"],
    ],
  },
];

const doctors = [
  {
    name: "Олеся Павловна Зозуля",
    role: "Стоматолог-терапевт, ортопед",
    photo: "077-95742.jpg",
  },
  {
    name: "Жанна Акобовна Аракелян",
    role: "Детский стоматолог, терапевт, ортопед",
    photo: "078-__95742.jpg",
  },
  {
    name: "Леван Юрьевич Кимадзе",
    role: "Стоматолог-хирург, имплантолог",
    photo: "079-WhatsApp_Image_2023-.jpeg",
  },
  {
    name: "Любовь Валерьевна Пучкова",
    role: "Детский стоматолог, ортодонт",
    photo: "080-15742.jpg",
  },
  {
    name: "Мелине Саргисовна Кроян",
    role: "Детский стоматолог-ортодонт",
    photo: "081-WhatsApp_Image_2024-.jpeg",
  },
  {
    name: "Виктор Алексеевич Шеянов",
    role: "Стоматолог-хирург, имплантолог",
    photo: "082-WhatsApp_Image_2023-.jpg",
  },
  {
    name: "Лилит Саргисовна Кроян",
    role: "Стоматолог-ортодонт",
    photo: "083-WhatsApp_Image_2023-.jpg",
  },
  {
    name: "Даниил Ильич Данилушкин",
    role: "Стоматолог-хирург",
    photo: "084-__208x.jpg",
  },
];

function Reviews() {
  const [current, setCurrent] = useState(0);
  const previous = () =>
    setCurrent((current + reviewSummaries.length - 1) % reviewSummaries.length);
  const next = () => setCurrent((current + 1) % reviewSummaries.length);

  return (
    <section
      className="bg-[#f4f8f5] px-5 py-16 text-[#1b2921]"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#23845c]">
              Мнение пациентов
            </p>
            <h2 id="reviews-title" className="text-3xl font-medium sm:text-4xl">
              Отзывы
            </h2>
            <p className="mt-2 text-sm text-[#66746a]">
              Кратко по отзывам пациентов
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Предыдущий отзыв"
              className="grid size-11 place-items-center rounded-full border border-[#c8d8ce] text-xl hover:bg-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Следующий отзыв"
              className="grid size-11 place-items-center rounded-full border border-[#c8d8ce] text-xl hover:bg-white"
            >
              ›
            </button>
          </div>
        </div>
        <div
          className="rounded-2xl bg-white px-7 py-5 sm:px-10 sm:py-6"
          aria-live="polite"
        >
          <p className="max-w-3xl text-lg leading-8 sm:text-xl">
            {reviewSummaries[current]}
          </p>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {reviewSummaries.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Показать отзыв ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={`size-2.5 rounded-full ${index === current ? "bg-[#23845c]" : "bg-[#c9d8ce]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Шапка сайта и меню контактов */}
      <Header />
      <main>
        {/* Первый экран: предложение, адрес и запись */}
        <section
          className="mx-auto grid w-full max-w-[1760px] gap-8 px-5 py-12 text-[#171d1a] lg:min-h-[620px] lg:grid-cols-[41%_minmax(0,1fr)] lg:items-center lg:gap-6 lg:py-14 xl:px-8"
          aria-labelledby="hero-title"
        >
          <div className="flex h-full min-w-0 flex-col items-start lg:py-12">
            <h1
              id="hero-title"
              className="text-[clamp(2.25rem,4vw,3.875rem)] leading-[1.1] font-medium tracking-[-.04em]"
            >
              Приём врача
              <br />
              стоматолога
            </h1>
            <div className="mt-5 rounded-xl bg-[#e5f3e9] px-5 py-2 text-3xl text-[#286a48]">
              600 ₽
            </div>
            <div className="mt-12 w-full lg:mt-auto">
              <p className="mb-3 text-base text-[#58655b]">наш адрес:</p>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-xl leading-tight">
                  г. Электроугли
                  <br />
                  ул. Школьная, 12
                </p>
                <a
                  href="https://yandex.ru/maps/?text=Электроугли%2C%20Школьная%2012"
                  onClick={stopLink}
                  className="rounded-full bg-[#e9f4eb] px-5 py-3 text-sm text-[#315e43] hover:bg-[#d8eddd]"
                >
                  Построить маршрут ↗
                </a>
              </div>
              <button
                type="button"
                className="mt-8 inline-flex w-full cursor-pointer justify-center rounded-xl bg-[#23845c] px-10 py-4 text-lg text-white sm:w-auto sm:min-w-64"
              >
                Записаться
              </button>
            </div>
          </div>
          <img
            src="/assets/original/008-frame.jpg"
            alt="Семья улыбается"
            width="1680"
            height="1120"
            className="h-auto w-full min-w-0 rounded-2xl object-cover lg:h-[520px]"
          />
        </section>
        {/* Преимущества клиники */}
        <section
          className="bg-[#f4f8f5] px-5 py-16 text-[#1b2921] md:py-24"
          aria-labelledby="advantages-title"
        >
          <div className="mx-auto w-full max-w-[1760px] xl:px-3">
            <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="mb-4 text-sm font-semibold tracking-[.14em] text-[#23845c] uppercase">
                  О клинике
                </p>
                <h2
                  id="advantages-title"
                  className="text-4xl leading-tight font-medium tracking-[-.035em] sm:text-5xl"
                >
                  Наши преимущества
                </h2>
              </div>
              <div className="space-y-5 text-base leading-7 text-[#526158] sm:text-lg">
                <p>
                  Работающие в клинике врачи применяют передовые методы лечения,
                  протезирования и имплантации зубов. Мы используем материалы и
                  оборудование проверенных производителей.
                </p>
                <p>
                  Современные технологии и комфортные условия помогают сделать
                  лечение бережным, а персонал всегда готов помочь каждому
                  пациенту.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="flex min-h-56 flex-col justify-between rounded-2xl bg-[#23845c] p-7 text-white">
                <span className="text-6xl font-medium tracking-tight">10+</span>
                <p className="max-w-36 text-xl leading-tight">
                  лет опыта работы
                </p>
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-2xl bg-white p-7">
                <h3 className="max-w-44 text-xl font-medium">
                  Команда профессионалов
                </h3>
                <p className="mt-3 max-w-48 text-sm text-[#5d6b60]">
                  Врачи постоянно повышают квалификацию.
                </p>
                <img
                  src="/assets/original/009-_112.png"
                  alt="Зуб в ладони"
                  className="absolute right-2 bottom-1 h-24 w-24 object-contain"
                />
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-2xl bg-white p-7">
                <h3 className="max-w-44 text-xl font-medium">
                  Передовые технологии
                </h3>
                <p className="mt-3 max-w-48 text-sm text-[#5d6b60]">
                  Современное оборудование для бережного лечения.
                </p>
                <img
                  src="/assets/original/011-_212.png"
                  alt="Средства ухода за зубами"
                  className="absolute right-2 bottom-1 h-24 w-24 object-contain"
                />
              </div>
              <div className="flex min-h-56 flex-col justify-between rounded-2xl bg-[#dcefe2] p-7 text-[#236a49]">
                <span className="text-6xl font-medium tracking-tight">
                  3 000+
                </span>
                <p className="max-w-40 text-xl leading-tight">
                  довольных пациентов
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Услуги для здоровья зубов */}
        <section
          className="px-5 py-14 text-[#1b2921] md:py-20"
          aria-labelledby="health-title"
        >
          <div className="mx-auto w-full max-w-[1760px] xl:px-3">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[.14em] text-[#23845c] uppercase">
                  Услуги клиники
                </p>
                <h2
                  id="health-title"
                  className="text-3xl leading-tight font-medium tracking-[-.035em] sm:text-4xl"
                >
                  Здоровье зубов
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-6 text-[#66746a]">
                Лечение, профилактика и диагностика для всей семьи.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {healthGroups.map((group, index) => (
                <ServiceGroup
                  key={group.heading}
                  group={group}
                  className={`xl:col-span-2 ${index === 3 ? "xl:col-start-2" : index === 4 ? "xl:col-start-4" : ""}`}
                />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#eaf4ed] px-5 py-4 text-[#236a49]">
              <p className="font-medium">Нужна консультация стоматолога?</p>
              <button type="button" className="cursor-pointer font-semibold">
                Позвонить в клинику ↗
              </button>
            </div>
          </div>
        </section>
        {/* Эстетическая стоматология */}
        <section
          className="bg-[#f4f8f5] px-5 py-14 text-[#1b2921] md:py-20"
          aria-labelledby="beauty-title"
        >
          <div className="mx-auto w-full max-w-[1760px] xl:px-3">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[.14em] text-[#23845c] uppercase">
                  Эстетическая стоматология
                </p>
                <h2
                  id="beauty-title"
                  className="text-3xl leading-tight font-medium tracking-[-.035em] sm:text-4xl"
                >
                  Красота зубов
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-6 text-[#66746a]">
                Исправление прикуса и эстетика улыбки.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {beautyGroups.map((group) => (
                <ServiceGroup key={group.heading} group={group} />
              ))}
            </div>
          </div>
        </section>
        {/* Цены на основные услуги */}
        <section
          className="px-5 py-16 text-[#1b2921]"
          aria-labelledby="prices-title"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-2 text-sm font-semibold text-[#23845c]">
                  Цены
                </p>
                <h2
                  id="prices-title"
                  className="text-3xl font-medium sm:text-4xl"
                >
                  Стоимость лечения
                </h2>
                <p className="mt-5 max-w-lg leading-7 text-[#66746a]">
                  Ниже указаны ориентировочные цены на основные услуги. После
                  осмотра врач составит план лечения и назовёт итоговую сумму.
                </p>
              </div>
              <div className="rounded-2xl bg-[#23845c] p-7 text-white sm:p-9">
                <p className="text-lg">Приём врача стоматолога</p>
                <p className="mt-3 text-5xl font-medium">600 ₽</p>
                <p className="mt-4 text-sm text-white/85">
                  Осмотр и обсуждение дальнейшего лечения.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {priceGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-[#dce8df] p-6"
                >
                  <h3 className="mb-5 text-xl font-medium">{group.title}</h3>
                  <ul className="divide-y divide-[#e7eee9]">
                    {group.items.map(([service, price]) => (
                      <li
                        key={service}
                        className="flex justify-between gap-4 py-3 text-sm sm:text-base"
                      >
                        <span>{service}</span>
                        <span className="shrink-0 font-semibold text-[#23845c]">
                          {price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-[#66746a]">
              Цены могут измениться. Точную стоимость уточняйте у сотрудников
              клиники перед лечением.
            </p>
          </div>
        </section>
        {/* Врачи клиники */}
        <section
          className="bg-[#f4f8f5] px-5 py-16 text-[#1b2921]"
          aria-labelledby="doctors-title"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-[#23845c]">
                Команда клиники
              </p>
              <h2
                id="doctors-title"
                className="text-3xl font-medium sm:text-4xl"
              >
                Наши врачи
              </h2>
            </div>
            <p className="mb-8 max-w-2xl leading-7 text-[#66746a]">
              Познакомьтесь со специалистами клиники. Под каждой фотографией
              указаны имя врача и его направление работы.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {doctors.map((doctor) => (
                <article
                  key={doctor.name}
                  className="overflow-hidden rounded-xl bg-white"
                >
                  <div className="flex h-64 items-end justify-center bg-white">
                    <img
                      src={`/assets/original/${doctor.photo}`}
                      alt={doctor.name}
                      className="h-full w-full object-contain object-bottom"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium leading-snug">
                      {doctor.name}
                    </h3>
                    <p className="mt-2 text-sm leading-5 text-[#66746a]">
                      {doctor.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Слайдер отзывов */}
        <Reviews />
        {/* Лицензия и партнёры */}
        <section
          className="px-5 py-16 text-[#1b2921]"
          aria-labelledby="licenses-title"
        >
          <div className="mx-auto max-w-[1200px]">
            <h2
              id="licenses-title"
              className="text-3xl font-medium sm:text-4xl"
            >
              Лицензия и партнёры
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#66746a]">
              Документы клиники и страховые компании, с которыми она
              сотрудничает.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["091-_415x-80.jpg", "092-_615x-80.jpg", "093-_515x-80.jpg"].map(
                (file, index) => (
                  <div
                    key={file}
                    className="grid place-items-center rounded-xl bg-[#f4f8f5] p-5"
                  >
                    <img
                      src={`/assets/original/${file}`}
                      alt={`Документ клиники ${index + 1}`}
                      className="h-56 max-w-full object-contain"
                    />
                  </div>
                ),
              )}
            </div>
            <div className="mt-10 grid grid-cols-2 items-center gap-6 rounded-xl border border-[#e2ece5] p-5 sm:grid-cols-4">
              {[
                "087-image.png",
                "088-image.png",
                "089-image.png",
                "090-image.png",
              ].map((file) => (
                <img
                  key={file}
                  src={`/assets/original/${file}`}
                  alt="Страховой партнёр"
                  className="mx-auto h-12 max-w-full object-contain"
                />
              ))}
            </div>
          </div>
        </section>
        {/* Контакты и карта проезда */}
        <section
          className="bg-[#eaf4ed] px-5 py-16 text-[#1b2921]"
          aria-labelledby="contacts-title"
        >
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-[#23845c]">
                Как нас найти
              </p>
              <h2
                id="contacts-title"
                className="text-3xl font-medium sm:text-4xl"
              >
                Контакты
              </h2>
              <p className="mt-7 text-xl">г. Электроугли, ул. Школьная, 12</p>
              <p className="mt-5 leading-7 text-[#526158]">
                Пн. – Пт.: с 8:00 до 20:00
                <br />
                Сб. – Вс.: с 9:00 до 20:00
              </p>
              <div className="mt-6 flex flex-col gap-2 text-lg font-semibold text-[#23845c]">
                <a href="tel:+74951208006" onClick={stopLink}>
                  +7 (495) 120-80-06
                </a>
                <a href="tel:+79255058819" onClick={stopLink}>
                  +7 (925) 505-88-19
                </a>
              </div>
              <a
                href="https://yandex.ru/maps/?text=Электроугли%2C%20Школьная%2012"
                onClick={stopLink}
                className="mt-7 inline-block rounded-full bg-[#23845c] px-6 py-3 text-white"
              >
                Построить маршрут ↗
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white">
              <iframe
                title="Карта проезда к Семейной стоматологии"
                src="https://yandex.ru/map-widget/v1/?text=Электроугли%2C%20Школьная%2012"
                loading="lazy"
                className="h-80 w-full border-0 lg:h-full"
              />
            </div>
          </div>
        </section>
      </main>
      {/* Подвал сайта */}
      <footer className="bg-[#23845c] px-5 py-10 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <img
              src="/assets/logo-green.svg"
              alt="Семейная стоматология"
              className="w-48"
            />
            <div className="flex gap-4">
              <a href="https://vk.com/fam.stom" className="hover:underline">
                ВКонтакте
              </a>
              <a href="https://t.me/famstom" className="hover:underline">
                Telegram
              </a>
            </div>
          </div>
          <p className="mt-8 border-t border-white/30 pt-6 text-sm leading-6 text-white/80">
            Имеются противопоказания. Необходима консультация специалиста.
            Материалы сайта носят информационный характер и не являются
            публичной офертой. Цены на услуги могут отличаться от фактических.
            ООО «Семейная стоматология», ОГРН 1195081017350, ИНН 5031133585.
            Лицензия ЛО-50-01-011970 от 28 апреля 2020 года.
          </p>
        </div>
      </footer>
    </>
  );
}
