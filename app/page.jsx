"use client";

import { useState } from "react";

function TelegramIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.8 3.6 18.4 20c-.2 1.1-.8 1.4-1.6.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1L18 6.5c.4-.4-.1-.6-.6-.3L6 13.4l-4.9-1.5c-1.1-.4-1.1-1.1.2-1.6L20.4 3c.9-.3 1.7.2 1.4.6Z"/></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.4 7.5L3 20.7l1.4-4.9a8.5 8.5 0 1 1 16.1-4Z" stroke="currentColor" strokeWidth="1.8"/><path d="M8 7.8c-.6.5-.7 1.3-.5 2.1.8 2.5 3.3 5 5.9 5.8.8.2 1.6.1 2.1-.5l.5-.7-2.2-1.2-.8.9a7.2 7.2 0 0 1-3.3-3.3l.9-.8-1.2-2.2-.7-.1Z" fill="currentColor"/></svg>;
}

function ContactDetails() {
  return (
    <>
      <div className="hours">Пн. – Пт.: с 8:00 - 20:00<br/>Сб. – Вс.: с 9:00 - 20:00</div>
      <div className="socials" aria-label="Мессенджеры">
        <span aria-label="ВКонтакте">VK</span>
        <span aria-label="Telegram"><TelegramIcon/></span>
        <a href="https://wa.me/79255058819" aria-label="WhatsApp"><WhatsAppIcon/></a>
      </div>
      <div className="phones"><a href="tel:+74951208006">+7 (495) 120-80-06</a><a href="tel:+79255058819">+7 (925) 505-88-19</a></div>
      <div className="callback"><a href="tel:+74951208006">Заказать обратный звонок</a></div>
    </>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Семейная стоматология — главная">
          <img className="brand-logo" src="/assets/logo-green.svg" alt="Семейная стоматология"/>
        </a>
        <ContactDetails/>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Закрыть контакты" : "Открыть контакты"} aria-expanded={menuOpen} aria-controls="mobile-panel" onClick={() => setMenuOpen(!menuOpen)}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      <div className={`mobile-panel${menuOpen ? " open" : ""}`} id="mobile-panel"><ContactDetails/></div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 className="hero-title" id="hero-title">Приём врача<br/>стоматолога</h1>
            <div className="hero-price" aria-label="Стоимость приёма 600 рублей">600 ₽</div>
            <div className="hero-bottom">
              <p className="hero-address-label">наш адрес:</p>
              <div className="hero-address-row">
                <p className="hero-address">г. Электроугли<br/>ул. Школьная, 12</p>
                <a className="route" href="https://yandex.ru/maps/?text=Электроугли%2C%20Школьная%2012" target="_blank" rel="noopener noreferrer">Построить маршрут <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8"/></svg></a>
              </div>
              <a className="hero-cta" href="tel:+74951208006">Записаться</a>
            </div>
          </div>
          <div className="hero-visual">
            <img className="family" src="/assets/original/008-frame.jpg" alt="Семья улыбается" width="1680" height="1120"/>
          </div>
        </section>
      </main>
    </>
  );
}
