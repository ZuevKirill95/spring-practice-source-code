create schema if not exists my_schema;

create table if not exists my_schema.accounts (
    id INT PRIMARY KEY generated always as identity,
    name VARCHAR(50) NOT NULL,
    amount numeric NOT NULL
);
