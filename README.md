npm i restify eslint --save-dev 
.node_modules/.bin/eslint --init

npm run dev

npm install mysql

create table categories (id INT(11) unsigned not null auto_increment, name VARCHAR(255), primary key(id));

create table users (id INT(11) unsigned not null auto_increment, email VARCHAR(255), password VARCHAR(40), primary key(id));