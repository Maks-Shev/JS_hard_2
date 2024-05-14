// Разработать системк регистрации пользователей для веб-приложения

// Глобальный объект
const App = {};

// Защищенные свойства класса 
class User {
    #_name; // Защищенное свойство _name
    
    constructor(name) {
        this.#_name = name;
    }
    
    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        // Проверяем наличие параметров
        if (!name ||!email ||!password) {
            throw new Error('Не все данные были введены');
        }
        
        // Создание класса экземплра
        const user = new User(name);
        
        // Проверяем наличие email
        if (!email.includes('@')) {
            throw new Error('Некорректный email');
        }
        
        // Проверяем наличие пароля
        if (password.length < 6) {
            throw new Error('Пароль должен быть не менее 6 символов');
        }

         // Дополнительная обработка и сохранение пользователя
         const userData = {
            name: user.getName(),
            email,
            password
        }

        console.log('Пользователь успешно зарегистрирован:', user.getName());
        console.log('Дополнительные данные пользователя:', userData);
    
    } catch (error) {
        console.error('Ошибка регистрации:', error.message);
    } finally { // Регистрируем пользователя
        console.log('Регистрация завершена');
    }
}

// Вызов функции регистрации пользователя

App.registerUser('Вася', 'vasya@mail', '12345');
App.registerUser('Петя', 'petya@mail', '123456');
