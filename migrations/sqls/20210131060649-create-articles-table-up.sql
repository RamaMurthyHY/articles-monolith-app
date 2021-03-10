create table if not exists articles (
    id bigserial primary key,
    author_id bigint references users(id) not null,
    title varchar(255) not null,
    slug varchar(255) not null,
    description text,
    content text,
    language varchar(3) not null default 'en',
    tags text[] not null default '{}',
    -- is_published boolean default false;
    -- published_at timestamp without time zone;
    is_deleted boolean not null default false,
    created_at timestamp without time zone default current_timestamp,
    updated_at timestamp without time zone
)