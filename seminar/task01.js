class BankAccount {
    // Приватное свойство для хранения баланса

    // Геттер для поучения текущего баланса

    // Метод для внесения дененг на счет

    // withdraw(amount) Метод для снятия денег со счета

    // constructor(initialBalance) Конструктор для инициализации начального баланса
}

// Создаем новый банковский счет с начальным балансом 500
let account = new BankAccount(500);
console.log(account.balance); // Выводит 500

account.deposite(200);
console.log(account.balance); // Выводит 700

account.withdraw(100);
console.log(account.balance); // Выводит 600