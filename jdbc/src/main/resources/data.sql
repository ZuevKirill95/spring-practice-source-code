create table product
(
    id    integer generated always as identity
        primary key,
    name  varchar(255) not null,
    price numeric      not null,
    count integer      not null
);

alter table product
    owner to postgres;

create table client
(
    id        integer generated always as identity
        primary key,
    name      varchar(255) not null,
    username  varchar(255) not null,
    password  varchar(255) not null,
    client_id integer      not null
);

alter table client
    owner to postgres;

create table cart
(
    id        integer generated always as identity
        primary key,
    promocode varchar(255)
);

alter table cart
    owner to postgres;

create table product_client
(
    id         integer generated always as identity
        primary key,
    id_product integer not null
        constraint product_client_products_id_fk
            references product,
    id_cart    integer not null
        constraint product_client_cart_id_fk
            references cart,
    count      integer not null
);

comment on column product_client.count is 'Количество продукта в корзине';

alter table product_client
    owner to postgres;
