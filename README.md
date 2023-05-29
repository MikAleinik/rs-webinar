# rs-webinar
RSSchool webinar code

Для запуска презентации в запустить liveserver

Для запуска примеров в терминале выполнить:
  1. Перейти в папку example выполнив cd ./example
  2. Установить все зависимости выполнив npm i
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
  5. запустить сборку выполнив npm run serve
  
В каталоге /example/src/classes размещены файлы с примером реализации приложения с использованием синтаксиса классов.

В каталоге /example/src/spa размещены файлы с примером реализации приложения SPA.