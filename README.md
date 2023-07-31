# rs-webinar
RSSchool webinar code

[Видео](https://www.youtube.com/watch?v=sOlzPxs_Lg4) вебинара создания первой части приложения с использованием синтаксиса классов.<br/>
[Видео](https://www.youtube.com/watch?v=njk5inZIwCc) вебинара рефакторинга приложения в SPA.

Для запуска презентации в запустить liveserver

Для запуска примеров выполнить:
  1. Перейти в терминале в папку example выполнив cd ./example
  2. Установить все зависимости выполнив в терминале npm i
  3. Для запуска приложения с примерами реализации классов (без реализации роутера) раскомментировать в /example/src/index.js
```js
	import App from './classes/app';
	const app = new App();
```
  4. Для запуска приложения с примером реализации роутинга раскомментировать в /example/src/index.js
```js
	import AppSpa from './spa/app';
	const appSpa = new AppSpa();	
```
  5. запустить сборку выполнив в терминале npm run serve
  
В каталоге /example/src/classes размещены файлы с примером реализации приложения с использованием синтаксиса классов.

В каталоге /example/src/spa размещены файлы с примером реализации приложения SPA.

[Деплой](https://mikaleinik.github.io/spa/) приложения SPA на Gh-Pages.<br/>
[Репозиторий](https://github.com/MikAleinik/spa/tree/gh-pages) с файлами для деплоя SPA.
