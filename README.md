Мини проект - генератор по созданию паролей случайных букв, символов и цифр в зависимости от условий.

Создание случайного пароля: с помощью метода Math.random() создаю случайное число от 0 до 1(если меньше или равно 0.5, то буква будет в верхнем регитре, мначе в нижнем регистре), умножаю его на длину алфавита и округляю. Подставляю это число в индекс и получаю букву. С помощью условий в цикле можно задать длину от 6 до 8 букв. Если добавляем числа/спец. символ, то разбиваю диапазон от 0 до 1 на 3 части(буква, буква в ерхнем регистре и цифра/спец. символ).

Выбор 6, 7, 8 символов(Длина символов): при переключении с одного на другой меняется класс с 'fa-regular fa-circle'(без галочки) на 'fa-sharp fa-regular fa-circle-check'(с галочкой) с помощью слушателя addEventListener(), который срабатывает при событие "click".

Выбор цифр и спец. символов: аналогично работе длине символов, но при повторном нажатие на галочку убирает её путем смены класса.
