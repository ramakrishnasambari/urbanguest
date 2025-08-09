import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919739731119';
    const message = 'Hi! I am interested in your property rental services. Can you help me?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleWhatsAppClick}>
      <div className="whatsapp-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.764.804 5.344 2.176 7.52L2 30l6.624-2.176C10.8 29.196 13.336 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.4 0-4.664-.644-6.6-1.764l-.472-.284-4.888 1.6 1.6-4.888-.284-.472C4.244 20.664 3.6 18.4 3.6 16c0-6.844 5.556-12.4 12.4-12.4S28.4 9.156 28.4 16 22.844 27.6 16 27.6z" fill="white"/>
          <path d="M23.2 19.6c-.4-.2-2.4-1.2-2.8-1.32-.4-.16-.68-.24-1 .24-.32.48-1.24 1.32-1.52 1.6-.28.24-.56.28-.96.08-.4-.2-1.68-.64-3.2-2-1.2-1.08-2-2.4-2.24-2.8-.24-.4-.04-.64.16-.84.2-.2.4-.48.6-.72.2-.24.28-.4.4-.68.12-.28.08-.52-.04-.72-.12-.2-1-.24-1.36-.96-.36-.68-.72-.6-.96-.6h-.8c-.28 0-.72.12-.92.4-.2.28-.92.92-.92 2.24s.96 2.6 1.08 2.8c.12.2 2.04 3.12 4.96 4.36.68.28 1.24.44 1.68.56.72.24 1.36.2 1.88.12.56-.08 1.8-.72 2.04-1.44.24-.72.24-1.32.16-1.44-.08-.16-.28-.24-.6-.4z" fill="white"/>
        </svg>
      </div>
      <div className="whatsapp-tooltip">
        Chat with us
      </div>
    </div>
  );
};

export default WhatsAppFloat;
