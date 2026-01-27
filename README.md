# NestJS Boilerplate Light

A lightweight, production-ready NestJS boilerplate featuring JWT authentication, user management, and TypeORM integration.

## 🚀 Features

- **Auth & Security**: JWT-based authentication with `passport-jwt`.
- **User Management**: Complete CRUD operations for user profiles.
- **Database**: TypeORM integration with PostgreSQL support.
- **Migrations**: Automated database schema management and versioning.
- **Architecture**: Clean, modular architecture following NestJS best practices.
- **Validation**: Strict input validation using `class-validator` and `class-transformer`.
- **Configuration**: Environment-based configuration via `@nestjs/config`.

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Auth**: [Passport.js](https://www.passportjs.org/) (JWT)

## 📦 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Configuration

Copy the example environment file and update your database credentials:

```bash
cp .env-example.txt .env
```

### 3. Database Migrations

Run migrations to set up your database schema:

```bash
npm run migration:run
```

### 4. Running the App

```bash
# development
npm run start:dev

# production mode
npm run start:prod
```

## 📜 Available Scripts

| Script                                   | Description                                      |
| ---------------------------------------- | ------------------------------------------------ |
| `npm run start:dev`                      | Start the application in watch mode              |
| `npm run build`                          | Build the application for production             |
| `npm run lint`                           | Run ESLint to check for code style issues        |
| `npm run test`                           | Run unit tests                                   |
| `npm run test:e2e`                       | Run end-to-end tests                             |
| `npm run migration:generate --name=Name` | Generate a new migration based on entity changes |
| `npm run migration:run`                  | Execute pending migrations                       |
| `npm run migration:revert`               | Revert the last executed migration               |

## ⚙️ Environment Variables

| Variable      | Description                | Default     |
| ------------- | -------------------------- | ----------- |
| `DB_HOST`     | Database host              | `localhost` |
| `DB_PORT`     | Database port              | `5432`      |
| `DB_USERNAME` | Database user              | -           |
| `DB_PASSWORD` | Database password          | -           |
| `DB_NAME`     | Database name              | -           |
| `JWT_SECRET`  | Secret key for JWT signing | -           |

## 📄 License

This project is [MIT licensed](https://opensource.org/licenses/MIT).
