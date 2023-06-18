# rs-webinar
RSSchool webinar code

Для запуска презентации в запустить liveserver

Для запуска примеров выполнить:
  1. Перейти в терминале в папку example выполнив cd ./example
  2. Установить все зависимости выполнив в терминале npm i
  3. Для запуска приложения в файле /example/src/index.js раскомментировать необходимый пример.
	3.1 Паттерны Наблюдатель/Observer и Одиночка/Singleton
```js
	import AppObserverSingleton from './1_observer_singleton/app';
	const app = new AppObserverSingleton();
```
