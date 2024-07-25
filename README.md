# Express API с TypeORM, Class Validator и Swagger

Это пример проекта Express API с использованием TypeORM, Class Validator для валидации и Swagger для документации API. В проекте используется `dotenv` для переменных окружения и включено middleware для логирования запросов.

## Требования

- Node.js
- npm (Node Package Manager)
- Docker

## Начало работы

1. **Клонируйте репозиторий:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Установите зависимости:**

   ```sh
   npm install
   ```

3. **Создайте файл `.env` в корне проекта и добавьте следующие переменные окружения:**

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=myuser
   DB_PASSWORD=mypassword
   DB_DATABASE=mydatabase
   ```

4. **Запустите сервер:**

   ```sh
   npm start
   ```

## Структура проекта

- `src/index.ts`: Главный файл сервера.
- `src/typeorm.config.ts`: Конфигурация базы данных.
- `src/entities/User.ts`: Сущность пользователя.
- `src/controllers/user.ts`: Контроллер для управления пользователями.
- `src/services/user.ts`: Сервис для выполнения операций с пользователями.
- `src/schemas/user.ts`: Data Transfer Objects (DTO) для пользователей.
- `src/middleware/logger.ts`: Middleware для логирования запросов.

## Документация API

Документация API доступна по адресу `http://localhost:3000/docs` после запуска сервера.
