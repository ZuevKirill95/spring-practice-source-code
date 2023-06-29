create schema if not exists my_schema;

create table if not exists my_schema.products
(
    id    integer generated always as identity
        primary key,
    name  varchar(255) not null,
    price numeric      not null
);
