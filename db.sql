-- create database plants;

create table plant(
    plant_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255)
);