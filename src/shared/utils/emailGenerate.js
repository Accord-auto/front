export const generateEmailTemplate = (data) => {
  return `
    Заявка на партнёрство:
    
    Контактная информация:
    - ФИО: ${data.fullName || "Не указано"}
    - Телефон: ${data.numberPhone || "Не указано"}
    - Email: ${data.email || "Не указано"}
    
    Местоположение:
    - Страна: ${data.country || "Не указано"}
    - Регион: ${data.region || "Не указано"}
    - Город: ${data.city || "Не указано"}
    
    Деятельность:
    - Сфера: ${data.field || "Не указано"}
    - Ссылка: ${data.link || "Не указано"}
    
    Дополнительное сообщение:
    ${data.message || "Не указано"}
    
    Дата отправки: ${new Date().toLocaleString()}
  `;
};

export const prepareMailtoLink = (data) => {
  const companyEmail = import.meta.env.VITE_APP_COMPANY_EMAIL;
  const subject = encodeURIComponent(
    `Заявка на партнёрство от ${data.fullName || "пользователя"}`
  );
  const body = encodeURIComponent(generateEmailTemplate(data));
  return `mailto:${companyEmail}?subject=${subject}&body=${body}`;
};
