IT Service Management System
============================

Status: In Development
Project Type: Portfolio Project
Stack: Next.js, TypeScript, Prisma 7, MySQL


1. INSTALLATION
---------------

1.1 System Requirements
-----------------------

Untuk menjalankan project secara lokal, diperlukan:

- Node.js
- npm
- MySQL Server
- Git

Recommended environment:

- Node.js 24.x
- MySQL 8.x or compatible MySQL version


1.2 Clone Repository
---------------------

git clone <repository-url>

cd it-service-management


1.3 Install Dependencies
------------------------

npm install


1.4 Setup MySQL
---------------

Pastikan MySQL Server sudah berjalan.

Buat database:

CREATE DATABASE itsm;


1.5 Configure Environment Variables
------------------------------------

Buat file:

.env

Tambahkan:

DATABASE_URL="mysql://root:PASSWORD@localhost:3306/itsm"

Ganti PASSWORD dengan password MySQL yang digunakan.


1.6 Generate Prisma Client
--------------------------

npx prisma generate


1.7 Run Database Migration
--------------------------

npx prisma migrate dev --name init_auth


1.8 Run Database Seed
---------------------

npx prisma db seed


1.9 Verify Database
-------------------

Untuk membuka Prisma Studio:

npx prisma studio

Pastikan tabel dan data hasil seed sudah tersedia.


1.10 Run Development Server
---------------------------

npm run dev

Kemudian buka:

http://localhost:3000


NOTE:

Authentication dan fitur application lainnya masih dalam development.

Pada tahap project saat ini, database foundation, migration,
Prisma Client, dan seed sudah tersedia.


2. PROJECT OVERVIEW
-------------------

IT Service Management System adalah aplikasi internal untuk membantu
pengelolaan layanan dan operasional IT.

Project ini dibuat sebagai portfolio project untuk mensimulasikan proses
IT Service Management dalam lingkungan organisasi, dengan fokus utama pada:

- Ticket Management
- SLA Monitoring
- IT Asset Management
- Operational Dashboard
- Role-Based Access Control


3. PROJECT OBJECTIVES
---------------------

Project ini bertujuan untuk menunjukkan kemampuan dalam:

- Full-stack web development
- Next.js dan TypeScript
- REST API development
- Relational database design
- ORM dengan Prisma
- Authentication dan session management
- Role-Based Access Control (RBAC)
- Business logic implementation
- SLA calculation dan monitoring
- Asset management
- Dashboard dan reporting
- Software Development Lifecycle (SDLC)


4. MVP SCOPE
------------

MVP terdiri dari lima fitur utama:

1. Authentication & Role
2. Ticketing
3. SLA Management
4. Asset Management
5. Dashboard


5. USER ROLES
-------------

ADMIN
-----

Memiliki akses penuh terhadap sistem.

IT_STAFF
--------

Bertanggung jawab terhadap penanganan ticket dan operasional IT.

USER
----

Pengguna layanan IT.

LEADERSHIP
----------

Memiliki akses terhadap informasi dan reporting tingkat manajemen.


6. CORE FEATURES
----------------

6.1 Authentication & Session
----------------------------

Authentication menggunakan NIP dan password.

Authentication design:

- Session-based authentication
- HttpOnly cookie
- Password hashing
- Role-based authorization

JWT tidak digunakan pada MVP.


6.2 Ticketing
------------

Ticketing merupakan core functionality dari sistem.

Basic ticket lifecycle:

NEW
 |
 v
ASSIGNED
 |
 v
IN_PROGRESS
 |
 +-----> PENDING
 |
 v
RESOLVED
 |
 v
CLOSED


6.3 SLA Management
------------------

SLA digunakan untuk mengukur response dan resolution ticket.

Metrics:

- Response time
- Resolution time
- SLA compliance
- SLA breach
- SLA at risk


6.4 Ticket Escalation
---------------------

IT Staff dapat melakukan escalation apabila ticket membutuhkan
penanganan atau kewenangan yang lebih tinggi.


6.5 Asset Management
--------------------

Scope:

- Asset inventory
- Procurement
- Damaged / broken assets
- MOU assets


6.6 Dashboard
-------------

Dashboard menyediakan operational overview berdasarkan data
ticket, SLA, dan asset.


7. TECHNOLOGY STACK
-------------------

Frontend:
- Next.js
- TypeScript

Backend:
- Next.js API
- Prisma ORM

Database:
- MySQL

Authentication:
- Session-based authentication
- HttpOnly Cookie

Development:
- Node.js
- npm
- Prisma 7
- Prisma Migrate
- Prisma Seed


8. DATABASE
-----------

Database menggunakan MySQL dengan Prisma ORM.

Current database foundation:

roles
units
users
sessions


Current relationship:

Role
 |
 +----< User >---- Unit
             |
             +----< Session


9. DATABASE MIGRATION
----------------------

Database schema is managed using Prisma Migrate.

Create migration:

npx prisma migrate dev --name <migration_name>

Generate Prisma Client:

npx prisma generate

Run database seed:

npx prisma db seed

Open Prisma Studio:

npx prisma studio


10. DEVELOPMENT APPROACH
------------------------

Project ini dikembangkan secara individual dengan pendekatan
feature-based development.

Setiap feature akan melalui proses:

Requirements
    |
    v
Design
    |
    v
Database
    |
    v
API
    |
    v
Implementation
    |
    v
Testing
    |
    v
Done


Project tidak menggunakan Scrum team formal karena dikembangkan
oleh satu developer.


11. DEVELOPMENT ROADMAP
------------------------

Feature 01 - Authentication & Role
Status: Database foundation completed

Feature 02 - Ticketing
Status: Planned

Feature 03 - SLA Management
Status: Planned

Feature 04 - Asset Management
Status: Planned

Feature 05 - Dashboard
Status: Planned


12. CURRENT PROGRESS
--------------------

Completed:

- Next.js project initialized
- Prisma 7 installed
- MySQL database configured
- Prisma schema created
- Initial migration completed
- Prisma Client generated
- Seed configuration completed
- Role seed created
- Unit seed created
- Database seed executed successfully


Current database:

- roles
- units
- users
- sessions


Next step:

Implement Authentication & Session.


13. PROJECT STRUCTURE
---------------------

Current structure:

it-service-management/
|
+-- app/
|   +-- generated/
|       +-- prisma/
|
+-- prisma/
|   +-- migrations/
|   +-- schema.prisma
|   +-- seed.ts
|
+-- public/
|
+-- .env
+-- prisma7.config.ts
+-- package.json
+-- README.txt


14. DEVELOPMENT PRINCIPLES
--------------------------

- Keep the MVP scope controlled.
- Prefer simple architecture over unnecessary complexity.
- Use relational database constraints where appropriate.
- Keep business logic separate from UI concerns.
- Use migrations instead of manually modifying the database.
- Maintain auditability for important ticket operations.
- Avoid implementing features before their requirements are defined.
- New features should be evaluated separately after the MVP is completed.


15. PROJECT STATUS
------------------

This project is currently in the development phase.

Current milestone:

Database Foundation
        |
        v
Prisma Setup
        |
        v
Migration
        |
        v
Seed
        |
        v
[ CURRENT POSITION ]
        |
        v
Authentication & Session
        |
        v
Ticketing
        |
        v
SLA
        |
        v
Asset Management
        |
        v
Dashboard

MVP target:

Authentication
    +
Ticketing
    +
SLA
    +
Asset Management
    +
Dashboard

Additional ITSM functionality may be considered after the MVP.