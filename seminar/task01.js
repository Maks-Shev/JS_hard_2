class BankAccount {
    // Приватное свойство для хранения баланса
    #balance = 0;

     // constructor(initialBalance) Конструктор для инициализации начального баланса
    constructor(initialBalance = 0) {
        if (initialBalance < 0) {   
            throw new Error("Отрицательный баланс");
        }
        this.#balance = initialBalance;
    };

    // Геттер для поучения текущего баланса
    get balance() {
        return this.#balance;
    };

    // Метод для внесения денег на счет
    deposite(amount) {
        if (amount < 0) {
            throw new Error("Отрицательная сумма");
        }
        this.#balance += amount;
    };

    // withdraw(amount) Метод для снятия денег со счета
    withdraw(amount) {
        if (amount < 0) {
            throw new Error("Отрицательная сумма");
        }
        if (amount > this.#balance) {
            throw new Error("Недостаточно средств");
        }
        this.#balance -= amount;
    };
};

// Создаем новый банковский счет с начальным балансом 500
let account = new BankAccount(500);
console.log(`Вы внесли на счет: ${account.balance}`); // Выводит 500

account.deposite(200);
console.log(`Остаток на счете после внесения: ${account.balance}`); // Выводит 700

account.withdraw(100);
console.log(`Остаток на счете после снятия: ${account.balance}`); // Выводит 600