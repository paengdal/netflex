import './globals.css';

export default function HTMLLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
