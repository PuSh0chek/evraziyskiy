create table competition_author (
  id int unsigned not null auto_increment primary key,
  name text,
  description text
);

create table competition_picture (
  id int unsigned not null auto_increment primary key,
  author_id int unsigned not null,
  votes int unsigned not null default 0,
  name varchar(255),
  description text,
  small_pict varchar(255),
  normal_pict varchar(255),
  original_pict varchar(255),
  constraint author_id_fk foreign key (author_id) references competition_author (id) on delete cascade
);
