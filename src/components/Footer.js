import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>О Net-Store</h3>
          <p>Ваш надежный магазин одежды и аксессуаров в Бишкеке</p>
        </div>

        <div className="footer-section">
          <h3>Контакты</h3>
          <p>📞 +996 507 666 438</p>
          <p>📧 netstore@gmail.com</p>
          <p>📍 г. Бишкек, ул. Примерная, 123</p>
        </div>

        <div className="footer-section">
          <h3>Режим работы</h3>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб-Вс: 10:00 - 16:00</p>
        </div>

        <div className="footer-section">
          <h3>Социальные сети</h3>
          <p>📱 <a href="https://www.instagram.com/net_store0.4?igsh=MXE0MGJqZWt2aTZvMQ==">Instagram: @netstore.kg</a></p>
          <p>💬 <a href="https://whatsapp.com/channel/0029Vb3rD8l9MF92H3Otry04">WhatsApp: +996 507 666 438</a></p>
          <p>📱 <a href="tiktok.com/@net_store.kg">TikTok: @netstore_kg</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Net-Store. Все права защищены.</p>
      </div>
    </footer>
  )
}
