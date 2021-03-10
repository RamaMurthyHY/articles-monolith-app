create table if not exists assets (
    id bigserial primary key,
    file_path varchar(255) not null,
    file_type varchar(20) not null,
    file_name varchar(255) not null,
    size integer not null,
    article_id bigint references articles(id) not null,
    is_deleted boolean not null default false,
    created_at timestamp without time zone default current_timestamp,
    updated_at timestamp without time zone
)