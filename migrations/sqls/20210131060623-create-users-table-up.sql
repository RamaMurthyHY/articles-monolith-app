create type gender_enum as ENUM ('MALE', 'FEMALE', 'OTHERS');

create table if not exists users (
    id bigserial primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    email_id varchar(255) not null unique,
    dob date not null,
    gender gender_enum not null,
    phone varchar(20) unique,
    password varchar(255) not null,
    is_deleted boolean not null default false,
    created_at timestamp without time zone default current_timestamp,
    updated_at timestamp without time zone
)