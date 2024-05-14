// Опциональная цепочка вызовов методов и оператор нулевого слияния 

// Объект с информацией о пользователе 
const user = {
    name: 'Mango',
    age: 20,
    address: {
        city: 'New York',
        street: '123 Main St',
    },
    contacts: {
        phone: '+1234567890',
        email: 'mail@example.com',
    }
};

// Опциональная цепочка вызовов методов
const email = user?.contacts.email
console.log(email); // Выводит mail@example.com

// Если значение не определено или оно равно null или undefined, используется значение по умолчанию
const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue); // Выводит Default Value, так как свойство 'outherValue' не существует в объекте user

// Опциональная цепочка вызовов методов и оператора нулевого слияния вместе
const streetName = user?.address.street ?? 'Unknown';
console.log(streetName); // Выводит 123 Main St, так как свойство'street' существует в объекте user.address
