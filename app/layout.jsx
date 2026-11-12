import "./globals.css";

export const metadata = {
  title: "Семейная стоматология — Электроугли",
  description: "Семейная стоматология в Электроуглях. Приём врача стоматолога.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
