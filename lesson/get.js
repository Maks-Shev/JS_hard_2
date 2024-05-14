class AutoMobile {
    _horsePowers = 0; // Объявление приватного свойства _horsePowers со значением 0, используя синтаксис приватных полей

    set horsePowers(value) { // Определение сеттера для свойства horsePowers
        if (value < 0) throw new Error("Отрицательное количество сил"); // Проверка, что значение больше или рпвно 0, иначе выбрасывается исключение 
        this._horsePowers = value; // Установка значения свойства _horsePowers
    }    

    get horsePowers() { // Определение геттера для свойства horsePowers
        return this._horsePowers; // Возвращение значения свойства _horsePowers
    }
    
    constructor(power) { // Определение конструктора
        this._horsePowers = power; // Вызов сеттера для свойства _horsePowers
    }
}

// Создаем новую машину
let auto = new AutoMobile(100); // Создание нового объекта класса AutoMobile и передача значения 100 в конструктор

// Устанавливаем количество сил
auto.horsePowers = -10; // Установка значения свойства horsePowers на -10 вызывает исключение "Отрицательное количество сил"

// Если добавить комментарий сеттера, будет ошибка
auto.horsePowers = 10; // Uncaught TypeError: Cannot set property horsePowers of #<AutoMobile> which has only a getter

// Приватные свойства. Эти свойства начинаются со знака # и имеют защиту на уровне языка

class AutoMobile {
    #horsePowers = 0; // Объявление приватного свойства _horsePowers со значением 0, используя синтаксис приватных полей

    set horsePowers(value) { // Определение сеттера для свойства horsePowers
        if (value < 0) throw new Error("Отрицательное количество сил"); // Проверка, что значение больше или рпвно 0, иначе выбрасывается исключение 
        this.#horsePowers = value; // Установка значения свойства _horsePowers
    }

    get horsePowers() { // Определение геттера для свойства horsePowers
        return this.#horsePowers; // Возвращение значения свойства _horsePowers
    }

    constructor(power) { // Определение конструктора
        this.#horsePowers = power; // Вызов сеттера для свойства _horsePowers
    }
}    

// Создаем новую машину
let auto1 = new AutoMobile(100);
auto1.horsePowers = 50; // устанавливаем количество сил через сеттер
console.log(auto1.horsePowers); // выводим количество сил через геттер
// Устанавливаем количество сил напрямую
auto1.#horsePowers = 10; // Uncaught SyntaxError: Private field '#horsePowers' must be declared in an enclosing class