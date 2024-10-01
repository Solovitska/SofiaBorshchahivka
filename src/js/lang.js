

// Словники для різних мов
const translations = {
  en: {
    heroText1: "Care and support that embody hope, unite the hearts of children and adults, transforming challenges into strength and inspiration.",
    heroText2: "Family is our shield and our support. In their embrace, we find unconditional love and support that gives us strength in the toughest moments.",
    heroText3: "In the heart of each of us lives a home that preserves the most precious moments of our lives.",
    heroText4: "Welcome to Sofiivska Borshchahivka",
    heroText5: "Learn more",
    heroText6: "Your actions and words have given us strength. We will never forget your genuine desire to help. Thank you!",
    // Додайте більше текстів тут
  },
  ua: {
    heroText1: "Турбота та підтримка, що втілюють надію, об'єднують серця дітей і дорослих, перетворюючи виклики на силу та натхнення.",
    heroText2: "Сім'я — наш щит і наша підтримка. У їхніх обіймах ми знаходимо безумовну любов та підтримку, які дають нам силу в найскладніші моменти.",
    heroText3: "У серці кожного з нас живе дім, який зберігає найцінніші моменти нашого життя.",
    heroText4: "Софіївська Борщагівка",
    heroText5: "Дізнатися більше",
    heroText6: "Ваші дії та слова надали нам сили. Ми ніколи не забудемо вашого щирого бажання допомогти. Дякуємо Вам!",
  }
};

// Встановлюємо початкову мову
let currentLang = 'en';

// Функція для оновлення тексту на сторінці
function updateText() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    element.innerText = translations[currentLang][key] || element.innerText;
  });
}

// Функція для перемикання мови
function switchLanguage() {
  currentLang = currentLang === 'en' ? 'ua' : 'en'; // Перемикаємо мову
  updateText(); // Оновлюємо текст
}

// Додаємо слухача події для кнопки перемикання мови
document.getElementById('switch-lang').addEventListener('click', switchLanguage);

// Ініціалізація тексту при завантаженні сторінки
updateText();
