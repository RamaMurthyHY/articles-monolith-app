create table if not exists user_tokens (
    id bigserial primary key,
    user_id bigint references users(id) not null,
    token varchar(255) not null,
    device_ip varchar(20),
    is_deleted boolean not null default false,
    created_at timestamp without time zone default current_timestamp,
    updated_at timestamp without time zone
)