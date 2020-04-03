drop table if exists product;
create table product(
  product_id serial PRIMARY KEY,
  name varchar(25),
  price int,
  img text
);
insert into product (name, price, img) values ('Beef - Rib Eye Aaa', 32, 'http://dummyimage.com/320x250.png/dddddd/000000');
insert into product (name, price, img) values ('Soup - Campbells Beef Str', 16, 'http://dummyimage.com/320x250.jpg/ff4444/ffffff');
insert into product (name, price, img) values ('Garbage Bags - Black', 22, 'http://dummyimage.com/320x250.jpg/5fa2dd/ffffff');
insert into product (name, price, img) values ('Fish - Atlantic Salmon, C', 18, 'http://dummyimage.com/320x250.jpg/dddddd/000000');
insert into product (name, price, img) values ('Cheese - Goat With Herbs', 5, 'http://dummyimage.com/320x250.bmp/5fa2dd/ffffff');
insert into product (name, price, img) values ('Rabbit - Legs', 33, 'http://dummyimage.com/320x250.png/ff4444/ffffff');
insert into product (name, price, img) values ('Tea - Herbal Orange Spice', 6, 'http://dummyimage.com/320x250.bmp/ff4444/ffffff');
insert into product (name, price, img) values ('Beef - Ground Lean Fresh', 1, 'http://dummyimage.com/320x250.png/ff4444/ffffff');
insert into product (name, price, img) values ('Melon - Cantaloupe', 40, 'http://dummyimage.com/320x250.png/ff4444/ffffff');
insert into product (name, price, img) values ('Soup - Chicken And Wild R', 29, 'http://dummyimage.com/320x250.bmp/5fa2dd/ffffff');
insert into product (name, price, img) values ('Eggroll', 10, 'http://dummyimage.com/320x250.bmp/dddddd/000000');
insert into product (name, price, img) values ('Coffee - Espresso', 34, 'http://dummyimage.com/320x250.jpg/ff4444/ffffff');
insert into product (name, price, img) values ('Eggplant - Regular', 49, 'http://dummyimage.com/320x250.jpg/dddddd/000000');
insert into product (name, price, img) values ('Steampan - Foil', 11, 'http://dummyimage.com/320x250.png/cc0000/ffffff');
insert into product (name, price, img) values ('Chicken - Leg, Fresh', 1, 'http://dummyimage.com/320x250.png/ff4444/ffffff');
insert into product (name, price, img) values ('Bread - Ciabatta Buns', 32, 'http://dummyimage.com/320x250.bmp/dddddd/000000');
insert into product (name, price, img) values ('Wine - Red, Gallo, Merlot', 30, 'http://dummyimage.com/320x250.png/dddddd/000000');
insert into product (name, price, img) values ('Island Oasis - Pina Colad', 35, 'http://dummyimage.com/320x250.bmp/dddddd/000000');
insert into product (name, price, img) values ('Peach - Fresh', 35, 'http://dummyimage.com/320x250.bmp/dddddd/000000');
insert into product (name, price, img) values ('Anchovy In Oil', 27, 'http://dummyimage.com/320x250.jpg/5fa2dd/ffffff');
insert into product (name, price, img) values ('Miso Paste White', 41, 'http://dummyimage.com/320x250.bmp/dddddd/000000');
insert into product (name, price, img) values ('Sauce - Roasted Red Peppe', 9, 'http://dummyimage.com/320x250.png/5fa2dd/ffffff');
insert into product (name, price, img) values ('Roe - Lump Fish, Red', 49, 'http://dummyimage.com/320x250.bmp/dddddd/000000');
insert into product (name, price, img) values ('Veal - Knuckle', 32, 'http://dummyimage.com/320x250.jpg/ff4444/ffffff');
insert into product (name, price, img) values ('Wine - Port Late Bottled ', 16, 'http://dummyimage.com/320x250.jpg/dddddd/000000');