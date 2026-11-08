# Library Management System

## 1. Project Description

The Library Management System is a backend application developed using NestJS, TypeScript, Prisma ORM, and PostgreSQL.

The system provides a structured database for managing library users, book genres, and books. It uses a relational database design to maintain data consistency and establish relationships between different entities.

## 2. Technologies Used

- **Node.js** – JavaScript runtime environment.
- **NestJS** – Backend application framework.
- **TypeScript** – Programming language.
- **Prisma ORM** – Database management and interaction.
- **PostgreSQL** – Relational database.
- **Neon** – Hosted PostgreSQL database platform.

## 3. Database Schema

The database contains three main models:

### User
Stores library user information, including:
- ID
- Name
- Email
- Password
- Role
- Created date

The Role enum defines two user roles:
- `PATRON`
- `LIBRARIAN`

### Genre
Stores book categories, including:
- ID
- Name
- Description

The database includes four genres:
- Fiction
- Technology
- History
- Science

### Book
Stores information about books, including:
- ID
- Title
- Author
- ISBN
- Publication date
- Genre ID
- Created date

Each book is associated with a genre through the `genreId` foreign key.

## 4. Schema Decisions

The database uses a relational structure with three main models: User, Genre, and Book.

The `User` model stores user information and uses a Role enum to distinguish between PATRON and LIBRARIAN users.

The `Genre` model stores book categories independently, while the `Book` model stores individual book details.

A Book references a Genre instead of embedding genre information directly. This avoids repeating genre names and descriptions across multiple books, improves data consistency, and makes genres easier to manage independently.

The relationship between Genre and Book is one-to-many: one genre can contain many books, while each book belongs to one genre.

This design improves data organization, reduces duplication, and supports database normalization.

## 5. Database Migration and Seeding

The Prisma schema was migrated to a hosted PostgreSQL database using Neon.

The database was seeded with:
- 4 genres
- 16 books distributed across the four genres

Prisma migrations are stored in the `api/prisma/migrations` directory.

The seed script is located at `api/prisma/seed.ts`.

## 6. Project Setup

### Prerequisites

- Node.js and npm installed.
- Access to a PostgreSQL database.
- Git installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/zainajoy/library-management-system.git
```

Navigate to the API directory:

```bash
cd library-management-system/api
```

Install dependencies:

```bash
npm install
```

### Environment Configuration

Create a `.env` file inside the `api` directory using `.env.example` as a reference.

Add your PostgreSQL connection string:

```env
DATABASE_URL="your_postgresql_connection_string"
```

Do not share or commit your actual `.env` file.

### Run Database Migrations

```bash
npx prisma migrate deploy
```

### Seed the Database

```bash
npx prisma db seed
```

### Start the Application

```bash
npm run start:dev
```

The application runs on:

`http://localhost:3000`

## 7. Repository Structure

```text
library-management-system/
│
├── api/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   │
│   ├── src/
│   │   ├── prisma/
│   │   │   ├── prisma.module.ts
│   │   │   └── prisma.service.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   │
│   ├── .env.example
│   ├── prisma.config.ts
│   └── package.json
│
└── README.md
```

## 8. Author

**GitHub:** [zainajoy](https://github.com/zainajoy)

**Project Repository:** [Library Management System](https://github.com/zainajoy/library-management-system)
