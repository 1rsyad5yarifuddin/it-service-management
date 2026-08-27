# IT Service Management System

An IT Service Management (ITSM) application built with Next.js, TypeScript, Prisma, and MySQL.

This project is developed as a portfolio project to simulate IT support operations, including ticket management, SLA monitoring, IT asset management, and operational reporting.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 24.x
- npm
- MySQL 8.x
- Git

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd it-service-management
```

````

Install dependencies:

```bash
npm install
```

Create a MySQL database:

```sql
CREATE DATABASE itsm;
```

Create a `.env` file in the project root:

```env
DATABASE_URL="mysql://root:PASSWORD@localhost:3306/itsm"
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Run the database migration:

```bash
npx prisma migrate dev
```

Seed the initial data:

```bash
npx prisma db seed
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To inspect the database using Prisma Studio:

```bash
npx prisma studio
```

## Features

### Authentication & Role

The system uses session-based authentication with role-based access control.

Available roles:

- `ADMIN` — Full system access
- `IT_STAFF` — IT support and ticket handling
- `USER` — Create and manage own tickets
- `LEADERSHIP` — Dashboard and operational reporting

### Ticketing

Ticketing provides a workflow for handling IT support requests.

Basic ticket lifecycle:

```text
NEW
  ↓
ASSIGNED
  ↓
IN_PROGRESS
  ↓
PENDING
  ↓
RESOLVED
  ↓
CLOSED
```

IT Staff can handle and escalate tickets when additional support or authority is required.

### SLA Management

SLA tracks the lifecycle of a ticket from creation to resolution.

The system is designed to measure:

- First response time
- Resolution time
- SLA compliance
- SLA breach
- SLA status

Ticket status history is stored to support SLA calculation and operational analysis.

### Asset Management

Asset Management covers:

- Asset inventory
- Procurement
- Damaged or broken assets
- MOU assets

Asset records include information such as asset type, serial number, ownership, location, status, and related procurement information.

### Dashboard

The dashboard provides an overview of IT operations.

Planned metrics include:

- Ticket volume
- Ticket status
- Ticket priority
- SLA performance
- Average response time
- Average resolution time
- Asset status
- Damaged assets
- MOU assets

## Technology Stack

- [Next.js](https://nextjs.org)
- TypeScript
- [Prisma](https://www.prisma.io)
- MySQL
- Node.js

Authentication uses server-side sessions with HttpOnly cookies. JWT is intentionally not used in the MVP.

## Database

The current database foundation consists of:

```text
Role
  │
  └──< User >── Unit
          │
          └──< Session
```

Current tables:

- `roles`
- `units`
- `users`
- `sessions`

Database schema and migrations are managed using Prisma.

## Development

This project is developed individually using a feature-based development approach.

Each feature follows:

```text
Requirements
    ↓
Design
    ↓
Database
    ↓
API
    ↓
Implementation
    ↓
Testing
    ↓
Done
```

## MVP Roadmap

- [x] Database foundation
- [x] Prisma migration
- [x] Initial database seed
- [ ] Authentication & Role
- [ ] Ticketing
- [ ] SLA Management
- [ ] Asset Management
- [ ] Dashboard

## Project Status

This project is currently under development.

The current milestone is the database foundation and Prisma setup. Authentication and the application features are being developed incrementally.
````
