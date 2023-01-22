CREATE DATABASE bank_account;

\c bank_account

CREATE TABLE bank_user(
    userid BIGSERIAL PRIMARY KEY NOT NULL,
    fname VARCHAR(32) NOT NULL,
    lname VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    password VARCHAR(255) NOT NULL,
    unique(email)
);

CREATE TABLE Tokens(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    access_token VARCHAR(500) NOT NULL,
    userid BIGSERIAL NOT NULL,
    FOREIGN KEY (userid) REFERENCES bank_user(userid)
);
