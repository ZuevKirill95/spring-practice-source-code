create table if not exists account (
    id INT PRIMARY KEY generated always as identity,
    name VARCHAR(50) NOT NULL,
    amount numeric NOT NULL
);
