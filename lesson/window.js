// Работа с window
// console.log(window);

// const newWindow = window.open('https://example.com', '_blank'); // Открывает новое окно браузера
// window.close(); // Закрывает текущее окно
// window.resizeTo(800, 600); // Изменяет размер окна на 800*600 пикселей
// window.location.href = 'http://example.com'; //Перенаправляет на другую страницу
// const windowWidth = window.innerWidth; // Получает ширину окна

// // Работа с window.window (работает по такому же принципу, что и window, только с небольшими, дополнительными нюансами)
const isWindowOpen = window.window.open('http://example.com') !== null; // Проверяет, открыто ли окно
const windowHeight = window.window.innerHeight; // Получает высоту окна
window.window.location.href = 'http://example.com'; // Перенаправляет на другую страницу во вложеном окне

// Работа с self (работает все по принципу window, только используется в разных компаниях по разному. Функционал абсолюютно такой же)
const newWindowSelf = self.open('https://example.com', _blank); // Открывает новое окно браузера с использованием self
self.close(); // Закрывает текущее окно с использованием self
self.resizeTo(800, 600); // Изменяет размер окна на 800*600 пикселей с использованием self
self.location.href = 'https//example.com'; // Перенапраявляет на другую страницу с использованием self

// Работа с frames (устаревшая функция, но может где-то встречаться)
const frame = frames[0]; // Получает ссылку на фрейм по индексу
frames[0].location.href = 'http://example.com'; //Перенаправляет на другую страницу во фрейме
const frameCount = frames.length; // Получает количество фреймов на страниуце
const parentWindow = window.parent; // Получает доступ к родительскому окну из фрейма

// Работа с globalThis 
const globalObject = globalThis; // Получает глобальный объект 
globalThis.newVariable = 'Hello world!'; // Определяет новую глобальную переменную
const globalVariable = globalThis.window === globalThis.self ? 'window' : 'Worker'; // Получает доступ к глобальным переменным из разных сред исполнения

// var (Не используется, потому что эта глобальная переменная очень неудобна, ее можно изменять в любое время и в любом месте, что не является удобным в программировании)
var glob = 5;
function increment(val) {
    return val + 1;
}
console.log(window.glob); // 
console.log(window.increment);
// f increment(val){
// return val+1;
// }

// alert
console.log(alert() === window.alert()); // true одно и то же
alert('Можно и так')
window.alert('А можно и так');

// const (локальная переменная которая неизменна) и let (локальная переменная, которая может изменяться)
const local = 5;
let localFunc = () => 'localFunc'
console.log(local); // 5
console.log(localFunc()); // localFunc
console.log(window.local); // undefined
console.log(window.localFunc()); // undefined

// Из прошлой части
console.log(window.Symbol.for); // f for() { [native code] }
console.log(window.Symbol.iterator); // Symbol(Symbol.iterator)
console.log(window.Array.from); // f from() { [native code] }
