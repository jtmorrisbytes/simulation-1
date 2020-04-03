drop table if exists product;
create table product(
  product_id serial PRIMARY KEY,
  name varchar(25),
  price int,
  img text
)