create schema if not exists A;
create schema if not exists B;
create schema if not exists C;
create schema if not exists D;

drop alias contains_id if exists;
drop table file_user_mapping if exists;
drop table file_user if exists;
drop table file if exists;
drop table organization if exists;
drop table task if exists;
drop table worker if exists;
drop table category if exists;
drop table post if exists;
drop table learning_link if exists;
drop table course if exists;
drop table student if exists;
drop table ms_product if exists;
drop table ms_order_item_product_mapping if exists;
drop table ms_order_item if exists;
drop table ms_order if exists;
drop table employee if exists;
drop table department if exists;
drop table animal if exists;
drop table machine if exists;
drop table order_item_product_mapping if exists;
drop table product if exists;
drop table order_item if exists;
drop table order_ if exists;
drop table transform if exists;
drop table permission if exists;
drop table administrator_role_mapping if exists;
drop table role if exists;
drop table administrator_metadata if exists;
drop table administrator if exists;
drop table book_author_mapping if exists;
drop table author_country_mapping if exists;
drop table book if exists;
drop table author if exists;
drop table country if exists;
drop table book_store if exists;
drop table tree_node if exists;
drop table array_model if exists;
drop sequence file_user_id_seq if exists;
drop sequence file_id_seq if exists;
drop sequence tree_node_id_seq if exists;
drop table D.TABLE_ if exists;
drop table C.TABLE_ if exists;
drop table B.TABLE_ if exists;
drop table A.TABLE_ if exists;

create table A.TABLE_(
    id bigint not null primary key,
    deleted boolean not null
);

create table B.TABLE_(
    id bigint not null primary key,
    status varchar(7) not null,
    a_id bigint
);

create table C.TABLE_(
    id bigint not null primary key,
    deleted_time datetime
);

create table D.TABLE_(
    id bigint not null primary key,
    created_time datetime
);

create table book_store(
    id uuid not null,
    name varchar(50) not null,
    website varchar(100),
    version int not null
);
alter table book_store
    add constraint pk_book_store
        primary key(id)
;
alter table book_store
    add constraint uq_book_store
        unique(name)
;

create table book(
    id uuid not null,
    name varchar(50) not null,
    edition integer not null,
    price numeric(10, 2) not null,
    store_id uuid
);
alter table book
    add constraint pk_book
        primary key(id)
;
alter table book
    add constraint uq_book
        unique(name, edition)
;
alter table book
    add constraint fk_book__book_store
        foreign key(store_id)
            references book_store(id)
;

create table author(
    first_name varchar(25) not null,
    last_name varchar(25) not null,
    gender varchar(6) not null,
    id uuid not null
);
alter table author
    add constraint pk_author
        primary key(id)
;
alter table author
    add constraint uq_author
        unique(first_name, last_name)
;
alter table author
    add constraint ck_author_gender
        check gender in ('M', 'F');

create table country(
    code varchar(10) not null,
    name varchar(50) not null
);
alter table country
    add constraint pk_country
        primary key(code);
alter table country
    add constraint uq_country
        unique(code);

create table book_author_mapping(
    book_id uuid not null,
    author_id uuid not null
);
alter table book_author_mapping
    add constraint pk_book_author_mapping
        primary key(book_id, author_id)
;
alter table book_author_mapping
    add constraint fk_book_author_mapping__book
        foreign key(book_id)
            references book(id)
                on delete cascade
;
alter table book_author_mapping
    add constraint fk_book_author_mapping__author
        foreign key(author_id)
            references author(id)
                on delete cascade
;

create table author_country_mapping(
    author_id uuid not null,
    country_code varchar(10) not null
);

alter table author_country_mapping
    add constraint pk_author_country_mapping
        primary key(author_id, country_code);
alter table author_country_mapping
    add constraint fk_author_country_mapping__author
        foreign key(author_id)
            references author(id)
                on delete cascade;
alter table author_country_mapping
    add constraint fk_author_country_mapping__country
        foreign key(country_code)
            references country(code)
                on delete cascade;

insert into book_store(id, name, version) values
    ('d38c10da-6be8-4924-b9b9-5e81899612a0', 'O''REILLY', 0),
    ('2fa3955e-3e83-49b9-902e-0465c109c779', 'MANNING', 0)
;

insert into book(id, name, edition, price, store_id) values
    ('e110c564-23cc-4811-9e81-d587a13db634', 'Learning GraphQL', 1, 50, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),
    ('b649b11b-1161-4ad2-b261-af0112fdd7c8', 'Learning GraphQL', 2, 55, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),
    ('64873631-5d82-4bae-8eb8-72dd955bfc56', 'Learning GraphQL', 3, 51, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),

    ('8f30bc8a-49f9-481d-beca-5fe2d147c831', 'Effective TypeScript', 1, 73, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),
    ('8e169cfb-2373-4e44-8cce-1f1277f730d1', 'Effective TypeScript', 2, 69, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),
    ('9eded40f-6d2e-41de-b4e7-33a28b11c8b6', 'Effective TypeScript', 3, 88, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),

    ('914c8595-35cb-4f67-bbc7-8029e9e6245a', 'Programming TypeScript', 1, 47.5, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),
    ('058ecfd0-047b-4979-a7dc-46ee24d08f08', 'Programming TypeScript', 2, 45, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),
    ('782b9a9d-eac8-41c4-9f2d-74a5d047f45a', 'Programming TypeScript', 3, 48, 'd38c10da-6be8-4924-b9b9-5e81899612a0'),

    ('a62f7aa3-9490-4612-98b5-98aae0e77120', 'GraphQL in Action', 1, 80, '2fa3955e-3e83-49b9-902e-0465c109c779'),
    ('e37a8344-73bb-4b23-ba76-82eac11f03e6', 'GraphQL in Action', 2, 81, '2fa3955e-3e83-49b9-902e-0465c109c779'),
    ('780bdf07-05af-48bf-9be9-f8c65236fecc', 'GraphQL in Action', 3, 80, '2fa3955e-3e83-49b9-902e-0465c109c779')
;

insert into author(id, first_name, last_name, gender) values
    ('fd6bb6cf-336d-416c-8005-1ae11a6694b5', 'Eve', 'Procello', 'F'),
    ('1e93da94-af84-44f4-82d1-d8a9fd52ea94', 'Alex', 'Banks', 'M'),
    ('c14665c8-c689-4ac7-b8cc-6f065b8d835d', 'Dan', 'Vanderkam', 'M'),
    ('718795ad-77c1-4fcf-994a-fec6a5a11f0f', 'Boris', 'Cherny', 'M'),
    ('eb4963fd-5223-43e8-b06b-81e6172ee7ae', 'Samer', 'Buna', 'M')
;

insert into country(code, name) values
    ('USA', 'The United States of America')
;

insert into book_author_mapping(book_id, author_id) values
    ('e110c564-23cc-4811-9e81-d587a13db634', 'fd6bb6cf-336d-416c-8005-1ae11a6694b5'),
    ('b649b11b-1161-4ad2-b261-af0112fdd7c8', 'fd6bb6cf-336d-416c-8005-1ae11a6694b5'),
    ('64873631-5d82-4bae-8eb8-72dd955bfc56', 'fd6bb6cf-336d-416c-8005-1ae11a6694b5'),

    ('e110c564-23cc-4811-9e81-d587a13db634', '1e93da94-af84-44f4-82d1-d8a9fd52ea94'),
    ('b649b11b-1161-4ad2-b261-af0112fdd7c8', '1e93da94-af84-44f4-82d1-d8a9fd52ea94'),
    ('64873631-5d82-4bae-8eb8-72dd955bfc56', '1e93da94-af84-44f4-82d1-d8a9fd52ea94'),

    ('8f30bc8a-49f9-481d-beca-5fe2d147c831', 'c14665c8-c689-4ac7-b8cc-6f065b8d835d'),
    ('8e169cfb-2373-4e44-8cce-1f1277f730d1', 'c14665c8-c689-4ac7-b8cc-6f065b8d835d'),
    ('9eded40f-6d2e-41de-b4e7-33a28b11c8b6', 'c14665c8-c689-4ac7-b8cc-6f065b8d835d'),

    ('914c8595-35cb-4f67-bbc7-8029e9e6245a', '718795ad-77c1-4fcf-994a-fec6a5a11f0f'),
    ('058ecfd0-047b-4979-a7dc-46ee24d08f08', '718795ad-77c1-4fcf-994a-fec6a5a11f0f'),
    ('782b9a9d-eac8-41c4-9f2d-74a5d047f45a', '718795ad-77c1-4fcf-994a-fec6a5a11f0f'),

    ('a62f7aa3-9490-4612-98b5-98aae0e77120', 'eb4963fd-5223-43e8-b06b-81e6172ee7ae'),
    ('e37a8344-73bb-4b23-ba76-82eac11f03e6', 'eb4963fd-5223-43e8-b06b-81e6172ee7ae'),
    ('780bdf07-05af-48bf-9be9-f8c65236fecc', 'eb4963fd-5223-43e8-b06b-81e6172ee7ae')
;

insert into author_country_mapping(author_id, country_code) values
    ('fd6bb6cf-336d-416c-8005-1ae11a6694b5', 'USA'),
    ('1e93da94-af84-44f4-82d1-d8a9fd52ea94', 'USA'),
    ('c14665c8-c689-4ac7-b8cc-6f065b8d835d', 'USA'),
    ('718795ad-77c1-4fcf-994a-fec6a5a11f0f', 'USA'),
    ('eb4963fd-5223-43e8-b06b-81e6172ee7ae', 'USA');

create table tree_node(
    node_id bigint not null,
    name varchar(20) not null,
    parent_id bigint
);
alter table tree_node
    add constraint pk_tree_node
        primary key(node_id);
alter table tree_node
    add constraint uq_tree_node
        unique(parent_id, name);
alter table tree_node
    add constraint fk_tree_node__parent
        foreign key(parent_id)
            references tree_node(node_id);
create sequence tree_node_id_seq as bigint start with 100;

insert into tree_node(node_id, name, parent_id) values
    (1, 'Home', null),
        (2, 'Food', 1),
            (3, 'Drinks', 2),
                (4, 'Coca Cola', 3),
                (5, 'Fanta', 3),
            (6, 'Bread', 2),
                (7, 'Baguette', 6),
                (8, 'Ciabatta', 6),
        (9, 'Clothing', 1),
            (10, 'Woman', 9),
                (11, 'Casual wear', 10),
                    (12, 'Dress', 11),
                    (13, 'Miniskirt', 11),
                    (14, 'Jeans', 11),
                (15, 'Formal wear', 10),
                    (16, 'Suit', 15),
                    (17, 'Shirt', 15),
            (18, 'Man', 9),
                (19, 'Casual wear', 18),
                    (20, 'Jacket', 19),
                    (21, 'Jeans', 19),
                (22, 'Formal wear', 18),
                    (23, 'Suit', 22),
                    (24, 'Shirt', 22)
;

create table administrator(
    id bigint not null,
    name varchar(50) not null,
    deleted boolean not null,
    created_time timestamp not null,
    modified_time timestamp not null,
    __deleted_constraint_part int as (
        case deleted when false then 1 else null end
    )
);
alter table administrator
    add constraint pk_administrator
        primary key(id);
alter table administrator
    add constraint uq_administrator
        unique(name, __deleted_constraint_part);

create table administrator_metadata(
    id bigint not null,
    name varchar(50) not null,
    email varchar(50) not null,
    website varchar(50) not null,
    administrator_id bigint not null,
    deleted boolean not null,
    created_time timestamp not null,
    modified_time timestamp not null
);
alter table administrator_metadata
    add constraint pk_administrator_metadata
        primary key(id);
alter table administrator_metadata
    add constraint fk_administrator_metadata_administrator
        foreign key(administrator_id)
            references administrator(id);

create table role(
    id bigint not null,
    name varchar(50) not null,
    deleted boolean not null,
    created_time timestamp not null,
    modified_time timestamp not null
);
alter table role
    add constraint pk_role
        primary key(id);

create table administrator_role_mapping(
    administrator_id bigint not null,
    role_id bigint not null
);
alter table administrator_role_mapping
    add constraint pk_administrator_role_mapping
        primary key(administrator_id, role_id);
alter table administrator_role_mapping
    add constraint fk_administrator_role_mapping_administrator
        foreign key(administrator_id)
            references administrator(id);
alter table administrator_role_mapping
    add constraint fk_administrator_role_mapping_role
        foreign key(role_id)
            references role(id);

create table permission(
    id bigint not null,
    name varchar(50) not null,
    role_id bigint,
    deleted boolean not null,
    created_time timestamp not null,
    modified_time timestamp not null
);
alter table permission
    add constraint pk_permission
        primary key(id);
alter table permission
    add constraint fk_permission
        foreign key(role_id)
            references role(id);

insert into administrator(id, name, deleted, created_time, modified_time)
    values
    (-1, 'a_-1', true, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (1, 'a_1', false, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (2, 'a_2', true, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (3, 'a_3', false, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (4, 'a_4', true, '2022-10-03 00:00:00', '2022-10-03 00:10:00');

insert into administrator_metadata(id, name, email, website, administrator_id, deleted, created_time, modified_time)
    values
    (10, 'am_1', 'email_1', 'website_1', 1, false, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (20, 'am_2', 'email_2', 'website_2', 2, true, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (30, 'am_3', 'email_3', 'website_3', 3, false, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (40, 'am_4', 'email_4', 'website_4', 4, true, '2022-10-03 00:00:00', '2022-10-03 00:10:00');

insert into role(id, name, deleted, created_time, modified_time)
    values
    (100, 'r_1', false, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (200, 'r_2', true, '2022-10-03 00:00:00', '2022-10-03 00:10:00');

insert into administrator_role_mapping(administrator_id, role_id)
    values
    (1, 100),
    (2, 100),
    (3, 100),
    (2, 200),
    (3, 200),
    (4, 200);

insert into permission(id, name, role_id, deleted, created_time, modified_time)
    values
    (1000, 'p_1', 100, false, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (2000, 'p_2', 100, true, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (3000, 'p_3', 200, false, '2022-10-03 00:00:00', '2022-10-03 00:10:00'),
    (4000, 'p_4', 200, true, '2022-10-03 00:00:00', '2022-10-03 00:10:00');


create table transform(
    id bigint not null,
    `left` bigint not null,
    top bigint not null,
    `right` bigint not null,
    bottom bigint not null,
    target_left bigint,
    target_top bigint,
    target_right bigint,
    target_bottom bigint
);

alter table transform
    add constraint pk_transform
        primary key(id);

insert into transform(
    id, `left`, top, `right`, bottom,
    target_left, target_top, target_right, target_bottom
) values
    (1, 100, 120, 400, 320, 800, 600, 1400, 1000),
    (2, 150, 170, 450, 370, null, null, null, null);




create table order_(
    order_x varchar(10) not null,
    order_y varchar(10) not null,
    name varchar(20) not null
);
alter table order_
    add constraint pk_order
        primary key(order_x, order_y);

create table order_item(
    order_item_a int not null,
    order_item_b int not null,
    order_item_c int not null,
    name varchar(20) not null,
    fk_order_x varchar(10),
    fk_order_y varchar(10)
);
alter table order_item
    add constraint pk_order_item
        primary key(order_item_a, order_item_b, order_item_c);
alter table order_item
    add constraint fk_order_item
        foreign key(fk_order_x, fk_order_y)
            references order_(order_x, order_y)
                on delete cascade;

create table product(
    product_alpha varchar(10) not null,
    product_beta varchar(10) not null,
    name varchar(20) not null
);
alter table product
    add constraint pk_product
        primary key(product_alpha, product_beta);

create table order_item_product_mapping(
    fk_order_item_a int not null,
    fk_order_item_b int not null,
    fk_order_item_c int not null,
    fk_product_alpha varchar(10) not null,
    fk_product_beta varchar(10) not null
);
alter table order_item_product_mapping
    add constraint pk_order_item_product_mapping
        primary key(
            fk_order_item_a,
            fk_order_item_b,
            fk_order_item_c,
            fk_product_alpha,
            fk_product_beta
        );
alter table order_item_product_mapping
    add constraint fk_order_item_product_mapping_source
        foreign key(fk_order_item_a, fk_order_item_b, fk_order_item_c)
            references order_item(order_item_a, order_item_b, order_item_c)
                on delete cascade;
alter table order_item_product_mapping
    add constraint fk_order_item_product_mapping_target
        foreign key(fk_product_alpha, fk_product_beta)
            references product(product_alpha, product_beta)
                on delete cascade;

insert into order_(order_x, order_y, name) values
    ('001', '001', 'order-1'),
    ('001', '002', 'order-2');

insert into order_item(order_item_a, order_item_b, order_item_c, name, fk_order_x, fk_order_y) values
    (1, 1, 1, 'order-item-1-1', '001', '001'),
    (1, 1, 2, 'order-item-1-2', '001', '001'),
    (1, 2, 1, 'order-item-2-1', '001', '002'),
    (2, 1, 1, 'order-item-2-2', '001', '002'),
    (9, 9, 9, 'order-item-X-X', null, null);

insert into product(product_alpha, product_beta, name) values
    ('00A', '00A', 'Car'),
    ('00A', '00B', 'Boat'),
    ('00B', '00A', 'Bike');

insert into order_item_product_mapping(fk_order_item_a, fk_order_item_b, fk_order_item_c, fk_product_alpha, fk_product_beta) values
    (1, 1, 1, '00A', '00A'),
    (1, 1, 1, '00B', '00A'),
    (1, 1, 2, '00A', '00B'),
    (1, 1, 2, '00A', '00A'),
    (1, 2, 1, '00B', '00A'),
    (1, 2, 1, '00A', '00B'),
    (2, 1, 1, '00A', '00B'),
    (2, 1, 1, '00B', '00A');



create table machine(
    id bigint not null,
    host varchar(20) not null,
    port int not null,
    cpu_frequency int not null,
    memory_size int not null,
    disk_size int not null
);

alter table machine
    add constraint pk_machine
        primary key(id);

alter table machine
    add constraint uq_machine
        unique(host, port);

insert into machine(id, host, port, cpu_frequency, memory_size, disk_size)
    values(1, 'localhost', 8080, 2, 8, 256);



create table animal(
    id bigint not null,
    name varchar(20) not null
);

alter table animal
    add constraint pk_animal
        primary key(id);

insert into animal(id, name) values(1, 'Trigger'), (2, 'Lion');



create table department(
    id bigint not null,
    name varchar(20) not null,
    deleted_time datetime
);
alter table department
    add constraint pk_department
        primary key(id);

create table employee(
    id bigint not null,
    name varchar(20) not null,
    department_id bigint,
    deleted_uuid uuid
);
alter table employee
    add constraint pk_employee
        primary key(id);
alter table employee
    add constraint fk_employee_department
        foreign key(department_id)
            references department(id);

insert into department(id, name) values(1, 'Market');
insert into employee(id, name, department_id) values(1, 'Sam', 1);
insert into employee(id, name, department_id) values(2, 'Jessica', 1);




create table ms_order(
    id bigint not null,
    name varchar(20) not null
);
alter table ms_order
    add constraint pk_ms_order
        primary key(id);

create table ms_order_item(
    id bigint not null,
    name varchar(20) not null,
    order_id bigint not null
);
alter table ms_order_item
    add constraint pk_ms_order_item
        primary key(id);

create table ms_order_item_product_mapping(
    order_item_id bigint not null,
    product_id bigint not null
);
alter table ms_order_item_product_mapping
    add constraint pk_ms_order_item_product_mapping
        primary key(order_item_id, product_id);
alter table ms_order_item_product_mapping
    add constraint fk_ms_order_item_product_mapping_order
        foreign key(order_item_id)
            references ms_order_item(id)
                on delete cascade;

create table ms_product(
    id bigint not null,
    name varchar(20) not null
);
alter table ms_product
    add constraint pk_ms_product
        primary key(id);

insert into ms_order(id, name) values(1, 'ms-order-1');
insert into ms_order(id, name) values(2, 'ms-order-2');
insert into ms_order_item(id, name, order_id) values(1, 'ms-order-1.item-1', 1);
insert into ms_order_item(id, name, order_id) values(2, 'ms-order-1.item-2', 1);
insert into ms_order_item(id, name, order_id) values(3, 'ms-order-2.item-1', 2);
insert into ms_order_item(id, name, order_id) values(4, 'ms-order-2.item-2', 2);
insert into ms_order_item(id, name, order_id) values(999, 'ms-order-X.item-X', 999);
insert into ms_product(id, name) values(1, 'ms-product-1');
insert into ms_product(id, name) values(2, 'ms-product-2');
insert into ms_product(id, name) values(3, 'ms-product-3');
insert into ms_order_item_product_mapping(order_item_id, product_id) values
    (1, 1), (1, 2),
    (2, 2), (2, 3),
    (3, 3), (3, 1),
    (4, 1), (4, 2), (4, 3);



create table student(
    id bigint not null,
    name varchar(20) not null
);
alter table student
    add constraint pk_student
        primary key(id);

create table course(
    id bigint not null,
    name varchar(20) not null,
    academic_credit int not null
);
alter table course
    add constraint pk_course
        primary key(id);

create table learning_link(
    id bigint not null,
    student_id bigint not null,
    course_id bigint not null,
    score int null
);
alter table learning_link
    add constraint pk_learning_link
        primary key(id);
alter table learning_link
    add constraint fk_learning_link_student
        foreign key(student_id)
            references student(id);
alter table learning_link
    add constraint fk_learning_link_course
        foreign key(course_id)
            references course(id);
alter table learning_link
    add constraint uq_course
        unique(student_id, course_id);

insert into student(id, name) values(1, 'Oakes');
insert into student(id, name) values(2, 'Roach');
insert into course(id, name, academic_credit) values(1, 'Java', 2);
insert into course(id, name, academic_credit) values(2, 'Kotlin', 2);
insert into course(id, name, academic_credit) values(3, 'SQL', 2);
insert into learning_link(id, student_id, course_id, score) values
    (1, 1, 2, 78),
    (2, 1, 3, null),
    (3, 2, 3, 87),
    (4, 2, 1, null);




create table post(
    id bigint not null,
    name varchar(20) not null,
    category_ids varchar(200) not null
);
alter table post
    add constraint pk_post
        primary key(id);

create table category(
    id bigint not null,
    name varchar(20) not null
);
alter table category
    add constraint pk_category
        primary key(id);

insert into post(id, name, category_ids) values
    (1, 'post-1', '1, 2'),
    (2, 'post-2', '1, 2'),
    (3, 'post-3', '2, 3'),
    (4, 'post-4', '2, 3');

insert into category(id, name) values
    (1, 'category-1'),
    (2, 'category-2'),
    (3, 'category-3');

create alias contains_id for "org.babyfish.jimmer.sql.model.joinsql.H2ContainsIdFun.contains";



create table worker(
    id bigint not null,
    name varchar(20) not null
);
alter table worker
    add constraint pk_worker
        primary key(id);

create table task(
    id bigint not null,
    name varchar(20) not null,
    owner_id bigint
);
alter table task
    add constraint pk_task
        primary key(id);
alter table task
    add constraint fk_task_owner
        foreign key(owner_id)
            references worker(id);

insert into worker(id, name) values(1, 'Alex'), (2, 'James');
insert into task(id, name, owner_id) values(9, 'Release package', null), (10, 'Take photo', 2);



create table organization(
    id bigint not null,
    name varchar(20) not null,
    parent_id bigint,
    tenant varchar(10) not null
);
alter table organization
    add constraint pk_organization
        primary key(id);
alter table organization
    add constraint fk_organization_parent
        foreign key(parent_id)
            references organization(id);



create table file(
    id bigint not null,
    name varchar(20) not null,
    parent_id bigint
);

alter table file
    add constraint pk_file
        primary key(id);
alter table file
    add constraint uq_file
        unique(parent_id, name);
alter table file
    add constraint fk_file__parent
        foreign key(parent_id)
            references file(id);
create sequence file_id_seq as bigint start with 100;

create table file_user(
    id bigint not null,
    name varchar(20) not null,
    deleted_time datetime
);

alter table file_user
    add constraint pk_file_user
        primary key(id);
alter table file_user
    add constraint uq_file_user
        unique(name);
create sequence file_user_id_seq as bigint start with 100;

create table file_user_mapping(
    file_id bigint not null,
    user_id bigint not null
);
alter table file_user_mapping
    add constraint pk_file_user_mapping
        primary key(file_id, user_id);
alter table file_user_mapping
    add constraint fk_file_user_mapping__file
        foreign key(file_id)
            references file(id);
alter table file_user_mapping
    add constraint fk_file_user_mapping__user
        foreign key(user_id)
            references file_user(id);

insert into file(id, name, parent_id) values
    (1, 'usr', null),
        (2, 'bin', 1),
            (3, 'cd', 2),
            (4, 'vim', 2),
            (5, 'grep', 2),
            (6, 'wait', 2),
            (7, 'which', 2),
        (8, 'sbin', 1),
            (9, 'ipconfig', 8),
            (10, 'mtree', 8),
            (11, 'purge', 8),
            (12, 'ssh', 8),
            (13, 'tcpctl', 8),
        (14, 'lib', 1),
            (15, 'sqlite3', 14),
            (16, 'zsh', 14),
            (17, 'libstdc++.dylib', 14),
            (18, 'dtrace', 14),
            (19, 'libgmalloc.dylib', 14),
        (20, 'share', 1),
            (21, 'man', 20),
            (22, 'dict', 20),
            (23, 'sandbox', 20),
            (24, 'httpd', 20),
            (25, 'locale', 20),
        (26, 'local', 1),
            (27, 'include', 26),
                (28, 'node', 27),
                    (29, 'v8-external.h', 28),
                    (30, 'v8-internal.h', 28),
                    (31, 'v8-json.h', 28),
                    (32, 'v8-object.h', 28),
                    (33, 'v8-platform.h', 28),
            (34, 'lib', 26),
                (35, 'node_modules', 34),
                    (36, 'npm', 35),
                    (37, 'corepack', 35),
                    (38, 'typescript', 35),
                    (39, 'docsify-cli', 35),
    (40, 'etc', null),
        (41, 'passwd', 40),
        (42, 'hosts', 40),
        (43, 'ssh', 40),
        (44, 'profile', 40),
        (45, 'services', 40)
;

insert into file_user(id, name, deleted_time) values
    (1, 'root', '2023-10-13 04:48:21'),
    (2, 'bob', null),
    (3, 'alex', null),
    (4, 'jessica', null),
    (5, 'linda', '2023-10-13 04:48:24')
;

insert into file_user_mapping(file_id, user_id) values
    (1, 1), (1, 2), (1, 3), (1, 4),
        (2, 1), (2, 2), (2, 3),
            (3, 1), (3, 2),
            (4, 2), (4, 3),
            (5, 3), (5, 1),
            (6, 1), (6, 2),
            (7, 2), (7, 3),
        (8, 2), (8, 3), (8, 4),
            (9, 2), (9, 3),
            (10, 3), (10, 4),
            (11, 4), (11, 2),
            (12, 2), (12, 3),
            (13, 3), (13, 4),
        (14, 3), (14, 4), (14, 1),
            (15, 3), (15, 4),
            (16, 4), (16, 1),
            (17, 1), (17, 3),
            (18, 3), (18, 4),
            (19, 4), (19, 1),
        (20, 4), (20, 1), (20, 2),
            (21, 4), (21, 1),
            (22, 1), (22, 2),
            (23, 2), (23, 4),
            (24, 4), (24, 1),
            (25, 1), (25, 2),
        (26, 1), (26, 2), (26, 3),
            (27, 1), (27, 2), (27, 3),
                (28, 1), (28, 2), (28, 3),
                    (29, 1), (29, 2),
                    (30, 2), (30, 3),
                    (31, 3), (31, 1),
                    (32, 1), (32, 2),
                    (33, 2), (33, 3),
            (34, 1), (34, 2), (34, 3),
                (35, 1), (35, 2), (35, 3),
                    (36, 1), (36, 2),
                    (37, 2), (37, 3),
                    (38, 3), (38, 1),
                    (39, 1), (39, 2),
    (40, 2), (40, 3), (40, 4), (40, 5),
        (41, 2), (41, 3), (41, 4),
        (42, 3), (42, 4), (42, 5),
        (43, 4), (43, 5), (43, 2),
        (44, 5), (44, 2), (44, 3),
        (45, 2), (45, 3), (45, 4)
;

create table array_model(
    id uuid not null,
    integers integer array not null,
    ints int array not null,
    strings varchar(10) array not null,
    bytes bytea array not null,
    longs bigint array not null,
    uuids uuid array not null,
    floats decimal array not null
);
alter table array_model
    add constraint pk_arrays
        primary key(id)
;

insert into array_model(id, integers, ints, strings, bytes, longs, uuids, floats) values
    ('e110c564-23cc-4811-9e81-d587a13db635',
    array[3, 2, 1],
    array[6, 5, 4],
    array['3', '2', '1'],
    array[X'03' ,X'02', X'01'],
    array[3, 2, 1],
    array['e110c564-23cc-4811-9e81-d587a13db635'],
    array[3.0, 2.0, 1.0]
);