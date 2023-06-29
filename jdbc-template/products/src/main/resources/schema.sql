create table if not exists product
(
    id    integer generated always as identity
        primary key,
    name  varchar(255) not null,
    price numeric      not null
);
