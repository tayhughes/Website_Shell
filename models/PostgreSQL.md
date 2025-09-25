CREATE TABLE users_credentials (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);