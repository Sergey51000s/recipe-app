const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const dishes = {
  Салаты: {
    Греческий: {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Огурцы свежие | 40 | 40  
Помидоры | 50 | 50  
Перец болгарский | 40 | 40  
Лук красный | 25 | 25  
Сыр фета | 40 | 40  
Маслины | 10 | 10  
Оливки | 10 | 10  
Масло оливковое | 15 | 15  
Лимон | 20 | 20  
**Выход готового изделия, г** | 240
`,
      process: `
**Подготовка овощей:**  
Помидоры и огурцы нарезать кубиками. Перец очистить от семян, нарезать кубиком. Лук нарезать тонкими полукольцами, замочить в холодной воде на 5 минут для удаления горечи. Сыр фета нарезать кубиками.  

**Сборка салата:**  
На дно тарелки выложить листья салата. Сверху равномерно распределить помидоры, огурцы, перец и лук. Добавить маслины, оливки и сыр фета.  

**Заправка:**  
Смешать оливковое масло, лимонный сок, орегано, соль и перец. Полить салат перед подачей.
`,
      organoleptic: `
- **Внешний вид:** Овощи и сыр сохраняют форму, равномерно распределены.  
- **Консистенция:** Овощи упругие, сыр мягкий.  
- **Цвет:** Яркий, сочетание красного, зеленого и белого.  
- **Запах:** Характерный для свежих овощей с нотками орегано и оливкового масла.  
- **Вкус:** Свежий, сбалансированный, с кислинкой лимонного сока.
`
    },
    'Цезарь с курицей': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Куриное филе | 80 | 70  
Салат Айсберг | 50 | 50  
Сухарики из белого хлеба | 25 | 25  
Сыр Пармезан | 15 | 15  
Яйцо перепелиное | 3 шт | 3 шт  
Соус Цезарь | 30 | 30  
Специи Чеснок сушёный | 2 | 2  
Помидоры Черри | 30 | 30  
Соль, перец | 2 | 2  
**Выход готового изделия, г** | 230
`,
      process: `
**Подготовка ингредиентов:**  
Куриное филе обжарить/запечь до готовности, охладить, нарезать ломтиками. Листья салата промыть, просушить, порвать руками. Хлеб нарезать кубиками, обжарить с чесноком и оливковым маслом до хрустящей корочки. Перепелиные яйца отварить (3-4 минуты), охладить, очистить, разрезать пополам. Пармезан натереть на мелкой терке.  

**Сборка салата:**  
В тарелку выложить листья салата, сверху – курицу, сухарики и яйца. Полить соусом "Цезарь", посыпать пармезаном.  

**Подача:**  
Подавать сразу после приготовления.
`,
      organoleptic: `
- **Внешний вид:** Аккуратная укладка, соус равномерно распределён.  
- **Консистенция:** Хрустящие сухарики, нежные листья салата, сочная курица.  
- **Цвет:** Свежий зелёный салат, золотистые сухарики, бело-жёлтые яйца.  
- **Запах:** Аромат чеснока, пармезана и соуса.  
- **Вкус:** Сбалансированный, с яркими нотками соуса и сыра.
`
    },
    'Цезарь с креветками': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Салат Айсберг | 50 | 50  
Сыр Пармезан | 15 | 15  
Сухарики из белого хлеба | 25 | 25  
Соус Цезарь | 30 | 30  
Помидоры черри | 30 | 30  
Креветки тигровые | 60 | 45  
Масло подсолнечное | 20 | 20  
Яйцо перепелиное | 3 шт | 3 шт  
Соль, перец | по вкусу | по вкусу  
**Выход готового изделия, г** | 230
`,
      process: `
**Подготовка ингредиентов:**  
Креветки разморозить, отварить 2–3 минуты в подсоленной воде с лимонным соком, охладить. Хлеб нарезать кубиками, обжарить на оливковом масле с измельчённым чесноком до золотистого цвета. Яйца отварить 3–4 минуты, охладить в ледяной воде, очистить, разрезать пополам. Салат промыть, просушить, порвать руками. Пармезан натереть на мелкой терке.  

**Сборка салата:**  
На тарелку выложить листья салата, сверху – креветки, сухарики и половинки яиц. Полить соусом "Цезарь", посыпать пармезаном.  

**Подача:**  
Подавать сразу после приготовления.
`,
      organoleptic: `
- **Внешний вид:** Аккуратная укладка, креветки и яйца равномерно распределены.  
- **Консистенция:** Хрустящие сухарики, нежные листья салата, сочные креветки.  
- **Цвет:** Ярко-зеленый салат, розовые креветки, золотистые сухарики.  
- **Запах:** Легкий аромат чеснока, пармезана и морепродуктов.  
- **Вкус:** Гармоничный, с доминирующими нотками соуса и креветок.
`
    }
  },
  Супы: {
    'Куриный': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Курица | 70 | 60  
Лапша яичная | 20 | 20  
Морковь | 27 | 20  
Лук репчатый | 20 | 15  
Бульон готовый куриный | 10 | 10  
Вода | 200 | 200  
Зелень | 10 | 10  
Яйцо куриное | 1 шт | 1 шт  
Соль, перец | 2 | 2  
**Выход готового изделия, г** | 200
`,
      process: `
**Подготовка ингредиентов:**  
Куриное филе нарезать кубиками. Овощи очистить и нарезать. Лапшу разломать на кусочки 5-7 см.  

**Приготовление:**  
В кипящую воду добавить сухой бульон, размешать. Добавить курицу, варить 10 минут. Пассировать лук и морковь 3 минуты. Добавить пассированные овощи в бульон. Ввести лапшу, варить 5-7 минут. Добавить специи, зелень. Готовность – лапша мягкая, курица проваренная.  

**Подача:**  
Украсить зеленью и 2 половинками отварного яйца.
`,
      organoleptic: `
- **Внешний вид:** Прозрачный бульон с кусочками курицы и лапши.  
- **Консистенция:** Мягкие компоненты, умеренно густой.  
- **Цвет:** Золотистый бульон с яркими овощами.  
- **Запах:** Аромат куриного бульона с пряностями.  
- **Вкус:** Насыщенный куриный с легкой остротой.
`
    },
    'Грибной крем-суп': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Шампиньоны | 150 | 120  
Картофель | 65 | 50  
Лук репчатый | 40 | 25  
Сливки 20% | 70 | 70  
Масло сливочное | 20 | 20  
Чеснок | 5 | 5  
Сухари из белого хлеба | 30 | 30  
Куриный бульон | 5 | 5  
Мука пшеничная | 5 | 5  
**Выход готового изделия, г** | 200
`,
      process: `
**Подготовка:**  
Грибы промыть в дуршлаге, нарезать пластинами. Овощи очистить, нарезать. Сухой бульон растворить в горячей воде (90°C).  

**Приготовление:**  
Растопить масло, пассировать лук 2 мин. Добавить грибы, обжаривать 5 мин. Ввести муку, перемешать. Добавить картофель, залить бульоном. Варить 15 мин до мягкости картофеля. Влить сливки, довести до 85°C. Пюрировать блендером до однородности. Добавить специи, проварить 2 мин.  

**Подача:**  
Украсить зеленью и грибными чипсами. Подавать с гренками.
`,
      organoleptic: `
- **Консистенция:** Однородная, кремовая.  
- **Цвет:** Светло-бежевый.  
- **Запах:** Грибной с молочными нотками.  
- **Вкус:** Нежный грибной с легкой сливочностью.  
- **Внешний вид:** Гомогенный, без расслоений.
`
    },
    'Том Ям': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Паста Том Ям | 30 | 30  
Куриный бульон | 150 | 150  
Креветки тигровые | 50 | 40  
Кальмар очищенный | 60 | 50  
Мидии очищенные | 60 | 50  
Шампиньоны | 40 | 30  
Помидоры черри | 30 | 25  
Кокосовое молоко | 30 | 30  
Рис | 40 | 30  
**Выход готового изделия, г** | 200/30
`,
      process: `
**Подготовка морепродуктов:**  
Креветки, кальмары, мидии разморозить при +4°C. Бланшировать 1-2 минуты в кипящей воде.  

**Приготовление супа:**  
Довести бульон до 90°C. Растворить пасту Том Ям. Ввести кокосовое молоко (85°C). Добавить морепродукты, грибы, помидоры. Прогреть 2 минуты. Ввести лимонный сок.  

**Подача:**  
Рис (30 г) в пиалу. Суп в глубокую тарелку. Украсить кинзой.
`,
      organoleptic: `
- **Внешний вид:** Прозрачный бульон с видимыми компонентами.  
- **Консистенция:** Жидкая основа, плотные ингредиенты.  
- **Цвет:** Красно-оранжевый с кремовым оттенком.  
- **Запах:** Яркий цитрусово-пряный.  
- **Вкус:** Острый, кисло-сладкий с кокосовыми нотками.
`
    }
  },
  Горячее: {
    'Стейк из сёмги с картофельным пюре': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Лосось (стейк) | 110 | 110  
Лимон | 20 | 10  
Оливковое масло | 5 | 5  
Специи | 3 | 3  
Картофель | 120 | 120  
Сливочное масло | 15 | 15  
Соль | 1 | 1  
**Выход готового изделия, г** | 110/120
`,
      process: `
**Стейк сёмги:**  
Рыбу разделать на порционные куски. Обсушить бумажным полотенцем. Посолить, поперчить за 5 минут до приготовления. Обжарить на разогретой сковороде с оливковым маслом 3-4 минуты с каждой стороны. Температура в толще продукта ≥63°C.  

**Картофельное пюре:**  
Картофель очистить, нарезать кубиками. Отварить в подсоленной воде до готовности (20-25 мин). Слить воду, просушить картофель. Добавить подогретое молоко и сливочное масло. Пюрировать до однородной консистенции.  

**Подача:**  
Выложить пюре горкой. Сверху разместить стейк. Украсить долькой лимона.
`,
      organoleptic: `
- **Внешний вид:** Ровный румянец на рыбе, пюре однородное.  
- **Консистенция:** Рыба сочная, пюре нежное.  
- **Цвет:** Золотистая корочка на рыбе, кремовое пюре.  
- **Запах:** Аромат рыбы с цитрусовыми нотками.  
- **Вкус:** Гармоничное сочетание рыбы и пюре.
`
    },
    'Куриная котлета с картофельным пюре': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Фарш куриный | 110 | 110  
Лук репчатый | 30 | 25  
Хлеб | 20 | 20  
Молоко | 60 | 60  
Яйцо | 25 | 22  
Масло растительное | 15 | 15  
Картофель | 130 | 100  
Масло сливочное | 10 | 10  
**Выход готового изделия, г** | 130/120
`,
      process: `
**Котлета куриная:**  
Куриное филе промыть, обсушить, измельчить в фарш. Хлеб замочить в молоке, отжать. Лук очистить, мелко нарезать или натереть. Смешать фарш, хлеб, лук, яйцо, соль, перец. Сформовать котлеты. Обжарить на растительном масле до золотистой корочки.  

**Картофельное пюре:**  
Картофель очистить, промыть, отварить в подсоленной воде до готовности. Слить воду, размять в пюре. Добавить сливочное масло, взбить до однородности.  

**Подача:**  
На тарелку выложить картофельное пюре, рядом – куриную котлету. Украсить зеленью (по желанию).
`,
      organoleptic: `
- **Внешний вид:** Котлеты равномерно обжаренные, золотисто-коричневого цвета, пюре однородное, кремового оттенка.  
- **Консистенция:** Котлеты сочные, пюре мягкое, без комков.  
- **Вкус и запах:** Котлеты с выраженным куриным вкусом, пюре сливочное, слегка соленое.
`
    },
    'Бургер с говядиной и картошкой фри': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Булочки для гамбургера с кунжутом | 100 | 100  
Котлета говяжья п/ф | 150 | 150  
Сыр Чеддер | 25 | 25  
Помидор свежий | 40 | 30  
Лук красный | 30 | 25  
Огурец соленый | 20 | 20  
Салат Айсберг | 25 | 25  
Бекон | 30 | 25  
Соус Бургер готовый | 30 | 30  
Масло растительное | 5 | 5  
Соль/перец | по вкусу | по вкусу  
**Выход готового изделия, г** | 250/120/30
`,
      process: `
**Подготовка сырья:**  
В говяжий фарш добавить соль и перец, перемешать, сформировать котлету (100 г нетто). Салат Айсберг промыть, удалить кочерыжку, разобрать на листья. Помидор промыть, удалить плодоножку, нарезать кольцами толщиной 5 мм. Лук очистить, промыть, нарезать кольцами толщиной 2–3 мм. Огурец маринованный нарезать слайсами. Булочку разрезать пополам, при необходимости слегка подогреть на гриле (внутренняя сторона).  

**Приготовление котлеты:**  
Разогреть сковороду или гриль до 180–200°C, добавить растительное масло. Обжарить котлету по 3–4 минуты с каждой стороны до внутренней температуры 72°C (средняя прожарка). Удалить излишки масла, положив котлету на бумажное полотенце.  

**Сборка бургера:**  
На нижнюю часть булочки нанести соус. Выложить лист салата, затем кольца помидора, маринованный огурец, кольца лука. Поместить горячую котлету, сверху положить ломтик сыра. Нанести оставшийся соус на верхнюю часть булочки, накрыть бургер.  

**Подача:**  
Подавать немедленно после сборки на тарелке, при температуре блюда не ниже 65°C. Допускается гарнир (картофель фри, овощи) по отдельной ТТК.
`,
      organoleptic: `
- **Внешний вид:** Аккуратно собранный бургер, булочка с румяной корочкой, овощи свежие, котлета равномерно прожарена.  
- **Цвет:** Котлета – коричневая снаружи, сочная внутри; овощи – яркие, естественные.  
- **Запах:** Аппетитный, с нотами жареного мяса, свежих овощей и соуса.  
- **Вкус:** Гармоничный, сбалансированный, с выраженным мясным вкусом котлеты.  
- **Консистенция:** Котлета сочная, булочка мягкая, овощи хрустящие.
`
    }
  },
  Паста: {
    'Карбонара': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Спагетти | 100 | 100  
Бекон | 60 | 50  
Яичный желток | 1 шт | 1 шт  
Сыр Пармезан | 30 | 30  
Чеснок | 2 | 2  
Свежемолотый черный перец | 3 | 3  
Соль поваренная пищевая | 2 | 2  
**Выход готового изделия, г** | 200
`,
      process: `
**Подготовка ингредиентов:**  
Бекон нарезать соломкой. Лук и чеснок очистить, измельчить. Сыр натереть на мелкой терке. Яйцо взбить вилкой со сливками.  

**Приготовление:**  
Спагетти отварить в подсоленной воде (1 л воды на 100 г пасты) до состояния "аль денте" (8-9 мин). На сковороде разогреть масло, обжарить бекон до хрустящей корочки (3-4 мин). Добавить лук и чеснок, пассировать 1 мин. Влить яично-сливочную смесь, прогреть при 70-75°C (не допускать сворачивания). Смешать с отваренными спагетти. Добавить 2/3 сыра, перемешать.  

**Подача:**  
Посыпать оставшимся сыром и перцем. Подавать немедленно.
`,
      organoleptic: `
- **Внешний вид:** Паста равномерно покрыта соусом.  
- **Консистенция:** Спагетти "аль денте", соус кремовый.  
- **Цвет:** Золотисто-бежевый.  
- **Запах:** Аромат бекона, сыра и чеснока.  
- **Вкус:** Сбалансированный сливочно-сырный.
`
    },
    'Фетучини с курицей и грибами': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Паста фетучини | 100 | 100  
Филе куриное | 80 | 70  
Шампиньоны свежие | 50 | 45  
Сливки 20% | 50 | 50  
Лук репчатый | 30 | 25  
Чеснок | 5 | 5  
Масло растительное | 15 | 15  
Сыр Пармезан | 15 | 15  
Соль пищевая | по вкусу | по вкусу  
Перец душистый свежемолотый | по вкусу | по вкусу  
**Выход готового изделия, г** | 210
`,
      process: `
**Подготовка ингредиентов:**  
Куриное филе промыть, нарезать соломкой. Грибы нарезать. Лук и чеснок очистить, измельчить. Сыр натереть на мелкой терке.  

**Приготовление:**  
Фетучини отварить в подсоленной воде (1 л на 100 г) до состояния "аль денте" (7-8 мин). На сковороде разогреть масло, обжарить курицу до готовности (t≥75°C в толще). Добавить лук и грибы, обжарить 3-4 мин. Ввести чеснок, обжарить 30 сек. Влить сливки, прогреть до 75°C. Добавить 2/3 сыра, перемешать. Соединить с отваренными фетучини.  

**Подача:**  
Посыпать оставшимся сыром и зеленью.
`,
      organoleptic: `
- **Внешний вид:** Паста равномерно покрыта соусом с кусочками курицы и грибов.  
- **Консистенция:** Фетучини "аль денте", курица сочная.  
- **Цвет:** Кремово-бежевый с золотистыми вкраплениями.  
- **Запах:** Аромат грибов с чесночными нотками.  
- **Вкус:** Нежный сливочный с выраженным грибным вкусом.
`
    },
    'Фарфале с сёмгой': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Паста фарфалле | 60 | 60  
Филе сёмги | 70 | 70  
Сливки 20% | 50 | 50  
Шпинат свежий | 20 | 20  
Чеснок | 5 | 5  
Лук репчатый | 15 | 15  
Лимон | 15 | 15  
Сыр Пармезан | 12 | 12  
Оливковое масло | 8 | 8  
Соль, перец | по вкусу | по вкусу  
**Выход готового изделия, г** | 220
`,
      process: `
**Подготовка ингредиентов:**  
Сёмгу нарезать кубиками. Шпинат тщательно промыть в проточной воде. Лук очистить и мелко нарезать.  

**Приготовление:**  
Фарфалле отварить в подсоленной воде (1 л на 100 г) до состояния "аль денте" (9-10 мин). На сковороде разогреть 5 г оливкового масла, обжарить сёмгу 2-3 мин с каждой стороны. На другой сковороде обжарить лук до прозрачности. Добавить шпинат, тушить 1-2 мин. Влить сливки, прогреть до 75°C. Добавить лимонный сок, специи. Соединить с пастой и сёмгой.  

**Подача:**  
Украсить долькой лимона. Подавать немедленно.
`,
      organoleptic: `
- **Внешний вид:** Бабочки равномерно покрыты соусом с кусочками сёмги.  
- **Консистенция:** Паста "аль денте", рыба нежная.  
- **Цвет:** Розово-кремовый с зелеными вкраплениями.  
- **Запах:** Аромат рыбы с цитрусовыми нотками.  
- **Вкус:** Сбалансированный сливочно-рыбный с кислинкой.
`
    },
    'Паста с креветками': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Спагетти | 100 | 100  
Креветки очищенные | 70 | 70  
Чеснок | 6 | 5  
Оливковое масло | 15 | 15  
Белое вино сухое | 20 | 20  
Сливки 20% | 50 | 50  
Лимон | 15 | 10  
Пармезан (тёртый) | 16 | 15  
Петрушка | 6 | 5  
Соль пищевая | 3 | 3  
**Выход готового изделия, г** | 210
`,
      process: `
**Подготовка ингредиентов:**  
Креветки разморозить при +4°C, промыть. Чеснок очистить и измельчить.  

**Приготовление:**  
Спагетти отварить в подсоленной воде (1 л на 100 г) до состояния "аль денте" (8-9 мин). На сковороде разогреть оливковое масло, обжарить чеснок 30 сек. Добавить креветки, обжарить 2 мин с двух сторон. Влить вино, выпарить алкоголь (1 мин). Добавить сливки, прогреть до 75°C. Ввести лимонный сок и специи. Смешать с отваренными спагетти.  

**Подача:**  
Украсить сыром, петрушкой и долькой лимона. Подавать немедленно.
`,
      organoleptic: `
- **Внешний вид:** Паста равномерно покрыта соусом с креветками.  
- **Консистенция:** Спагетти "аль денте", креветки упругие.  
- **Цвет:** Кремовый.  
- **Запах:** Аромат морепродуктов с чесночными нотками.  
- **Вкус:** Нежный сливочный с кислинкой лимона.
`
    }
  },
  Закуски: {
    'Сырные палочки с брусничным соусом': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Сырные палочки с/м | 240 | 240  
Масло д/фритюра | 250 | 250  
Соус брусничный готовый | 30 | 30  
**Выход готового изделия, г** | 200/30
`,
      process: `
**Подготовка сырья:**  
Замороженные сырные палочки извлекаются из упаковки без предварительного размораживания. Проверяется целостность панировки и отсутствие посторонних включений.  

**Приготовление:**  
Во фритюрнице разогреть масло до температуры 170–180°C. Замороженные сырные палочки (5–6 штук на порцию) аккуратно опустить в горячее масло, избегая брызг. Обжаривать палочки в течение 3–5 минут до образования золотистой корочки, периодически переворачивая для равномерной прожарки. Готовые сырные палочки выложить на бумажное полотенце для удаления излишков масла. Внутренняя температура готовых сырных палочек должна составлять не менее 70°C для обеспечения микробиологической безопасности (в соответствии с СанПиН 2.3/2.4.3590-20).  

**Подача:**  
Блюдо готовится по заказу потребителя и подаётся немедленно после приготовления.
`,
      organoleptic: `
- **Внешний вид:** Сырные палочки имеют равномерную золотистую корочку, края ровные, без подгоревших участков.  
- **Консистенция:** Хрустящая панировка, мягкий и тягучий сыр внутри.  
- **Цвет:** Поверхность – золотисто-коричневый, на разрезе сыр – светло-желтый или белый (в зависимости от сорта).  
- **Вкус и запах:** Характерный для жареного сыра, с лёгким ароматом специй, без посторонних привкусов.
`
    },
    'Картошка фри': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Картофель фри с/м | 250 | 250  
Масло д/фритюра | 250 | 250  
Трюфельное масло | 5 | 5  
Соль | 3 | 3  
Соус | 30 | 30  
**Выход готового изделия, г** | 180/30
`,
      process: `
**Подготовка сырья:**  
Использовать замороженный картофель фри (полуфабрикат), не размораживая перед жаркой. Проверить целостность упаковки и отсутствие посторонних включений.  

**Жарка:**  
Разогреть растительное масло во фритюрнице до температуры 170–180°C. Порционно (не более 180 г за раз) опустить замороженный картофель в горячее масло. Обжаривать 4–6 минут до золотистой корочки и хрустящей текстуры. Вынуть картофель шумовкой, дать стечь излишкам масла, выложив на бумажные полотенца.  

**Подача:**  
Посыпать готовый картофель солью (2 г на порцию). Подавать немедленно в горячем виде.
`,
      organoleptic: `
- **Внешний вид:** Брусочки картофеля равномерной формы, золотистого цвета, с хрустящей корочкой.  
- **Консистенция:** Снаружи хрустящая, внутри мягкая.  
- **Вкус и запах:** Характерный для жареного картофеля, без посторонних привкусов.
`
    },
    'Стрипсы куриные с соусом барбекю': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Стрипсы с/м | 240 | 240  
Масло д/фритюра | 250 | 250  
Соус барбекю готовый | 30 | 30  
Лимон | 20 | 15  
**Выход готового изделия, г** | 200/30
`,
      process: `
**Подготовка сырья:**  
Использовать замороженные панированные куриные стрипсы, не размораживая перед жаркой. Проверить целостность упаковки и отсутствие посторонних включений.  

**Жарка:**  
Разогреть растительное масло во фритюрнице до температуры 175–185°C. Порционно (не более 225 г за раз) опустить замороженные стрипсы в горячее масло. Обжаривать 5–7 минут до золотистой хрустящей корочки и полной готовности (внутренняя температура мяса должна достигать 74°C). Вынуть стрипсы шумовкой, дать стечь излишкам масла, выложив на бумажные полотенца.  

**Подача:**  
Подавать немедленно в горячем виде.
`,
      organoleptic: `
- **Внешний вид:** Стрипсы равномерной формы, с золотистой хрустящей панировкой.  
- **Консистенция:** Снаружи хрустящая панировка, внутри сочное куриное мясо.  
- **Вкус и запах:** Характерный для жареного куриного мяса с ароматом специй, без посторонних привкусов.
`
    },
    'Нагетсы куриные с сырным соусом': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Нагетсы с/м | 240 | 240  
Масло д/фритюра | 250 | 250  
Соус сырный готовый | 30 | 30  
Лимон | 20 | 15  
**Выход готового изделия, г** | 200/30
`,
      process: `
**Подготовка сырья:**  
Замороженные наггетсы извлекаются из упаковки без предварительного размораживания. Проверяется целостность панировки и отсутствие посторонних включений.  

**Приготовление:**  
Во фритюрнице разогреть масло до температуры 170–180°C. Замороженные наггетсы (5–6 штук на порцию) аккуратно опустить в горячее масло, избегая брызг. Обжаривать наггетсы в течение 4–6 минут до образования золотистой корочки, периодически переворачивая для равномерной прожарки. Готовые наггетсы выложить на бумажное полотенце для удаления излишков масла. Внутренняя температура готовых наггетсов должна составлять не менее 74°C для обеспечения микробиологической безопасности (в соответствии с СанПиН 2.3/2.4.3590-20).  

**Подача:**  
Блюдо готовится по заказу потребителя и подаётся немедленно после приготовления.
`,
      organoleptic: `
- **Внешний вид:** Наггетсы имеют равномерную золотистую корочку, края ровные, без подгоревших участков.  
- **Консистенция:** Хрустящая панировка, сочное и мягкое куриное мясо внутри.  
- **Цвет:** Поверхность – золотисто-коричневый, на разрезе мясо – белое.  
- **Вкус и запах:** Характерный для жареного куриного мяса, с лёгким ароматом специй, без посторонних привкусов.
`
    },
    'Креветки темпура с соусом терияки': {
      recipe: `
**Наименование сырья и полуфабрикатов** | **Расход сырья и п/ф на 1 порцию, г**  
--- | ---  
| Брутто | Нетто  
Креветки тигровые | 170 | 150  
Мука темпура | 60 | 60  
Ледяная вода | 120 | 120  
Яйцо охлажденное | 1 шт | 1 шт  
Масло д/фритюра | 250 | 250  
Соль | 2 | 2  
Соус терияки | 30 | 30  
**Выход готового изделия, г** | 200/30
`,
      process: `
**Подготовка сырья:**  
Креветки размораживают в холодильнике при +2…+6°C в течение 4–6 часов, затем промывают холодной водой и обсушивают бумажным полотенцем. Муку темпурную проверяют на отсутствие комков. Яйца моют, воду охлаждают до 4–6°C.  

**Приготовление кляра:**  
В миске смешивают холодную воду, яйцо и темпурную муку до получения однородной массы средней густоты (консистенция жидкой сметаны). Добавляют щепотку соли. Кляр готовят непосредственно перед жаркой и хранят при температуре +4°C не более 30 минут.  

**Панировка и жарка:**  
Креветки слегка солят, обмакивают в кляр, обеспечивая равномерное покрытие. Во фритюрнице разогревают масло до 170–180°C. Креветки в кляре опускают в горячее масло небольшими порциями (4–5 штук), жарят 2–3 минуты до золотистой корочки, периодически переворачивая. Готовые креветки выкладывают на бумажное полотенце для удаления излишков масла.  

**Подача:**  
Блюдо готовится по заказу потребителя и подаётся немедленно после приготовления.
`,
      organoleptic: `
- **Внешний вид:** Креветки имеют равномерную золотистую корочку, кляр лёгкий и хрустящий, без подгоревших участков.  
- **Консистенция:** Хрустящая оболочка, сочная и упругая мякоть креветок внутри.  
- **Цвет:** Поверхность – золотисто-коричневый, на разрезе креветки – белый с розоватым оттенком.  
- **Вкус и запах:** Характерный для жареных креветок, с лёгким ароматом кляра, без посторонних привкусов.
`
    }
  }
};

// API-роут для получения списка блюд по категории
app.get('/api/dishes/:category', (req, res) => {
  const category = req.params.category;
  if (dishes[category]) {
    res.json(dishes[category]);
  } else {
    res.status(404).json({ error: 'Категория не найдена' });
  }
});

// API-роут для получения деталей блюда
app.get('/api/dishes/:category/:dish', (req, res) => {
  const { category, dish } = req.params;
  if (dishes[category] && dishes[category][dish]) {
    res.json(dishes[category][dish]);
  } else {
    res.status(404).json({ error: 'Блюдо не найдено' });
  }
});

// Обработка корневого пути
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});