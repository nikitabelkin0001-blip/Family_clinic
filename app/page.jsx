"use client";
import { useState } from "react";

function Socials() {
  return <div className="flex items-center gap-2"><span className="grid size-10 place-items-center rounded-full bg-white"><img src="/assets/vk-green.png" alt="ВКонтакте" className="size-9 object-contain"/></span><span className="grid size-10 place-items-center rounded-full bg-white"><img src="/assets/telegram-green.svg" alt="Telegram" className="size-9 object-contain"/></span><a aria-label="WhatsApp" href="https://wa.me/79255058819" className="grid size-10 place-items-center rounded-full bg-white"><img src="/assets/whatsapp-green.png" alt="" className="size-9 object-contain"/></a></div>;
}

function Contacts({ menu = false }) {
  return <div className={menu ? "grid grid-cols-1 gap-5 text-sm md:grid-cols-3 md:items-start md:gap-6 lg:text-base" : "flex items-center gap-6 text-sm 2xl:text-base"}>
    <p className="leading-6">Пн. – Пт.: с 8:00 - 20:00<br/>Сб. – Вс.: с 9:00 - 20:00</p>
    <div className={menu ? "md:justify-self-center md:pt-1" : ""}><Socials/></div>
    <div className={menu ? "flex flex-col gap-3 md:items-end md:text-right" : "flex flex-col font-semibold leading-6"}>
      <div className="flex flex-col font-semibold leading-6"><a href="tel:+74951208006">+7 (495) 120-80-06</a><a href="tel:+79255058819">+7 (925) 505-88-19</a></div>
      {menu && <a href="tel:+74951208006" className="hover:underline">Заказать обратный звонок</a>}
    </div>
    {!menu && <a href="tel:+74951208006" className="whitespace-nowrap hover:underline">Заказать обратный звонок</a>}
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="w-full bg-[#23845c] text-white">
    <div className="mx-auto flex min-h-20 w-full max-w-[1760px] items-center justify-between gap-5 px-5 lg:min-h-24 lg:px-8"><a href="/" aria-label="Семейная стоматология — главная" className="shrink-0"><img src="/assets/logo-green.svg" alt="Семейная стоматология" className="w-44 sm:w-52 lg:w-60"/></a><div className="hidden 2xl:block"><Contacts/></div><button type="button" className="ml-auto p-2 2xl:hidden" aria-label={open ? "Закрыть контакты" : "Открыть контакты"} aria-expanded={open} aria-controls="mobile-contacts" onClick={() => setOpen(!open)}><svg className="size-7" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></button></div>
    {open && <div id="mobile-contacts" className="border-t border-white/20 px-5 py-6 lg:px-8 2xl:hidden"><div className="mx-auto max-w-[1760px]"><Contacts menu/></div></div>}
  </header>;
}

export default function Home() {
  return <><Header/><main>
    <section className="mx-auto grid w-full max-w-[1760px] gap-8 px-5 py-12 text-[#171d1a] lg:min-h-[620px] lg:grid-cols-[41%_minmax(0,1fr)] lg:items-center lg:gap-6 lg:py-14 xl:px-8" aria-labelledby="hero-title">
      <div className="flex h-full min-w-0 flex-col items-start lg:py-12"><h1 id="hero-title" className="text-[clamp(2.25rem,4vw,3.875rem)] leading-[1.1] font-medium tracking-[-.04em]">Приём врача<br/>стоматолога</h1><div className="mt-5 rounded-xl bg-[#e5f3e9] px-5 py-2 text-3xl text-[#286a48]">600 ₽</div><div className="mt-12 w-full lg:mt-auto"><p className="mb-3 text-base text-[#58655b]">наш адрес:</p><div className="flex flex-wrap items-center gap-4"><p className="text-xl leading-tight">г. Электроугли<br/>ул. Школьная, 12</p><a href="https://yandex.ru/maps/?text=Электроугли%2C%20Школьная%2012" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#e9f4eb] px-5 py-3 text-sm text-[#315e43] hover:bg-[#d8eddd]">Построить маршрут ↗</a></div><a href="tel:+74951208006" className="mt-8 inline-flex w-full justify-center rounded-xl bg-[#23845c] px-10 py-4 text-lg text-white hover:bg-[#176e49] sm:w-auto sm:min-w-64">Записаться</a></div></div>
      <img src="/assets/original/008-frame.jpg" alt="Семья улыбается" width="1680" height="1120" className="h-auto w-full min-w-0 rounded-2xl object-cover lg:h-[520px]"/>
    </section>
    <section className="bg-[#f4f8f5] px-5 py-16 text-[#1b2921] md:py-24" aria-labelledby="advantages-title"><div className="mx-auto w-full max-w-[1760px] xl:px-3"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16"><div><p className="mb-4 text-sm font-semibold tracking-[.14em] text-[#23845c] uppercase">О клинике</p><h2 id="advantages-title" className="text-4xl leading-tight font-medium tracking-[-.035em] sm:text-5xl">Наши преимущества</h2></div><div className="space-y-5 text-base leading-7 text-[#526158] sm:text-lg"><p>Работающие в клинике врачи применяют передовые методы лечения, протезирования и имплантации зубов. Мы используем материалы и оборудование проверенных производителей.</p><p>Современные технологии и комфортные условия помогают сделать лечение бережным, а персонал всегда готов помочь каждому пациенту.</p></div></div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><div className="flex min-h-56 flex-col justify-between rounded-2xl bg-[#23845c] p-7 text-white"><span className="text-6xl font-medium tracking-tight">10+</span><p className="max-w-36 text-xl leading-tight">лет опыта работы</p></div><div className="relative min-h-56 overflow-hidden rounded-2xl bg-white p-7"><h3 className="max-w-44 text-xl font-medium">Команда профессионалов</h3><p className="mt-3 max-w-48 text-sm text-[#5d6b60]">Врачи постоянно повышают квалификацию.</p><img src="/assets/original/009-_112.png" alt="Зуб в ладони" className="absolute right-2 bottom-1 h-24 w-24 object-contain"/></div><div className="relative min-h-56 overflow-hidden rounded-2xl bg-white p-7"><h3 className="max-w-44 text-xl font-medium">Передовые технологии</h3><p className="mt-3 max-w-48 text-sm text-[#5d6b60]">Современное оборудование для бережного лечения.</p><img src="/assets/original/011-_212.png" alt="Средства ухода за зубами" className="absolute right-2 bottom-1 h-24 w-24 object-contain"/></div><div className="flex min-h-56 flex-col justify-between rounded-2xl bg-[#dcefe2] p-7 text-[#236a49]"><span className="text-6xl font-medium tracking-tight">3 000+</span><p className="max-w-40 text-xl leading-tight">довольных пациентов</p></div></div>
    </div></section>
  </main></>;
}
