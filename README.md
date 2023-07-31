# rs-webinar
RSSchool webinar code

[Видео](https://www.youtube.com/watch?v=kYimHN772U8) вебинара с реализацией паттерна Одиночка/Singleton

Для запуска презентации в запустить liveserver

Для запуска примеров выполнить:
  1. Перейти в терминале в папку example выполнив cd ./example
  2. Установить все зависимости выполнив в терминале npm i
  3. Для запуска приложения с реализацией Наблюдатель/Observer в файле /example/src/index.js раскомментировать
```js
	import AppObserver from './1_observer/app';
	const app = new AppObserver();
```
  4. Для запуска приложения с реализацией Одиночка/Singleton и Посредник/Mediator в файле /example/src/index.js раскомментировать
```js
	import AppMediatorSingleton from './2_mediator_singleton/app';
	const app = new AppMediatorSingleton();
```
