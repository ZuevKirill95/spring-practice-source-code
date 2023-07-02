create schema if not exists my_schema;

INSERT INTO my_schema.roles(name) VALUES('ROLE_USER');
INSERT INTO my_schema.roles(name) VALUES('ROLE_ADMIN');

insert into my_schema.products(id, name, price) values (1, 'Яблоко', 100);
insert into my_schema.products(id, name, price) values (2, 'Банан', 20);
insert into my_schema.products(id, name, price) values (3, 'Апельсин', 30);
insert into my_schema.products(id, name, price) values (4, 'Персик', 40);
insert into my_schema.products(id, name, price) values (5, 'Груша', 50);
insert into my_schema.products(id, name, price) values (6, 'Арбуз', 60);