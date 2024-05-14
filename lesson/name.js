function sayHello() {
    console.log('Hello');
}
console.log(sayHello.name); // Выводит имя функции "sayHello"
console.log(window.name); // Выводит имя окна браузера, пустую строку или имя окна, если оно было задано
console.log(frames[0].name); // Выводит имя фрейма, пустую строку или имя фрейма, если оно было задано

const obj = {};
console.log(obj.name); // Выводит значение undefined, так как свойство "name" не было определено для объекта

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.constructor.name); // Выводит имя класса "Rectangle" через свойство "name" конструктора объекта