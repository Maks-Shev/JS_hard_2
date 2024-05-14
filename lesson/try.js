try {
    undefined = 1;
}
catch {
    console.log('Что-то произошло');
}
finally {
    console.log('Всё ок');
}

// Пример: Работа с делением чисел
function divideNumbers(a, b) {
    try {
        const result = a / b; // Попытка выполнения деления
        if (isNaN(result)) {
            throw new Error('На ноль делить нельзя');
        }
        console.log('Результат деления:', result);
    } catch (error) {
        console.log('Ошибка:', error.message);
    } finally {
        console.log('Всё ок');
    }
}

divideNumbers(0, 2); // Пример корректного деления
divideNumbers(10, 0); // Пример деления на 0

// Пользовательские ошибки 

// Создание пользовательской ошибки
class CustomError extends Error {
    constructor(message) {
        super(message); // Вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = 'CustomError';
    }
}

function validateNumber(value) {
    if (typeof value!== 'number') {
        throw new CustomError('Значение должно быть числом'); // Выбрасывание пользовательской ошибки с сообщением
    }
    console.log('Валидация успешна');
}

try {
    validateNumber('hello'); // Проверка на число с передачей строки вместо числа
} catch (error) {
    if (error instanceof CustomError) { // Проверка, является ли ошибка экземпляром пользовательской ошибки
        console.error('Ошибка:', error.message); // Вывод сообщения об оштбке
        console.log('Тип ошибки:', error.name); // Вывод имени ошибки
    } else {
        console.error('Произошла ошибка:', error); // Вывод сообщения об оштбке по умолчанию
    }
}