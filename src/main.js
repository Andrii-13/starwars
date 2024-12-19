import * as PIXI from 'pixi.js';

// Створюємо екземпляр PixiJS Application
const app = new PIXI.Application();

// Ініціалізуємо Application з параметрами
app.init({
  width: 800,              // Ширина сцени
  height: 600,             // Висота сцени
  backgroundColor: 0x1099bb, // Колір фону
});

// Чекаємо на завершення ініціалізації і додаємо canvas до DOM
window.onload = () => {
  document.getElementById('app').appendChild(app.canvas);

  // Створюємо графіку (жовтий круг)
  const circle = new PIXI.Graphics();
  circle.fill(0xffff00);  // Колір заливки
  circle.circle(0, 0, 50); // Малюємо круг із центром (0, 0) і радіусом 50
  circle.fill();
  circle.x = 400; // Позиція круга по X
  circle.y = 300; // Позиція круга по Y

  // Додаємо круг на сцену
  app.stage.addChild(circle);
};