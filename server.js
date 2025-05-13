const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Разрешаем запросы с фронтенда
app.use(cors());
app.use(express.json());

// Раздаём статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Пример данных для блюд
const dishes = {
  salad: [
    { name: "Цезарь", ingredients: ["Курица", "Салат романо", "Сухарики", "Пармезан", "Соус Цезарь"] },
    { name: "Греческий", ingredients: ["Помидоры", "Огурцы", "Фета", "Оливки", "Оливковое масло"] }
  ],
  soup: [
    { name: "Борщ", ingredients: ["Свёкла", "Капуста", "Картофель", "Мясо", "Сметана"] },
    { name: "Крем-суп из тыквы", ingredients: ["Тыква", "Сливки", "Лук", "Чеснок", "Специи"] }
  ],
  pasta: [
    { name: "Карбонара", ingredients: ["Спагетти", "Бекон", "Яйца", "Пармезан", "Сливки"] },
    { name: "Болоньезе", ingredients: ["Спагетти", "Фарш", "Томаты", "Лук", "Специи"] }
  ],
  main: [
    { name: "Стейк", ingredients: ["Говядина", "Соль", "Перец", "Масло"] },
    { name: "Курица в соусе терияки", ingredients: ["Курица", "Соус терияки", "Кунжут", "Рис"] }
  ]
};

// Маршруты для получения данных
app.get('/salad', (req, res) => {
  res.json(dishes.salad);
});

app.get('/soup', (req, res) => {
  res.json(dishes.soup);
});

app.get('/pasta', (req, res) => {
  res.json(dishes.pasta);
});

app.get('/main', (req, res) => {
  res.json(dishes.main);
});

// Отдаём index.html для всех остальных запросов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});