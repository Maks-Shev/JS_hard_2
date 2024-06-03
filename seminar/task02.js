class User {
// Базовый класс для пользователя
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class PremiumUser extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName); // Вызов конструктора родительского класса (User)
        this.premiumAccount = null;
    }
    setPremiumAccount(){
        const currentDate = new Date();
        this.premiumAccount = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)); // Пример: Установите срок действия на 1 год
    };
}

// Создать RegularUser
class RegularUser extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName); // Вызов конструктора родительского класса (User)
    }
}

function getAccountInfo(user) {
   if (user instanceof PremiumUser) {
    const expirationDate = user?.premiumAccount?.toISOString().split('T')[0] ?? 'Информация отсутствует';
    console.log(`Премиум аккаунт пользователя, ${user.firstName} ${user.lastName}, действует до: ${expirationDate}`);
   } else if (user instanceof RegularUser) {
    console.log(`Пользователь без премиум аккаунта ${user.firstName} ${user.lastName}`);
   } else {
    return 'Тип пользователя неопределен'
   }
}

// Проверка
let regularUser = new RegularUser('Мария', 'Ванина');
let premiumUser = new PremiumUser('Иван', 'Иванов');
let premiumUser2 = new PremiumUser('Андрей', 'Филин');

premiumUser.setPremiumAccount();

getAccountInfo(regularUser);
getAccountInfo(premiumUser);
getAccountInfo(premiumUser2);